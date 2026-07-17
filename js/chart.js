/* CPE Prep — chart.js
   Dependency-free SVG renderer for IELTS Writing Task 1 visuals.
   Pure functions: spec object in, markup string out (SVG for line/bar/pie,
   an HTML table for type "table"). Dual-exported for Node tests + browser. */
(function () {
  "use strict";

  /* Mid-brightness palette: legible on both the dark and parchment themes. */
  var PALETTE = [
    "#e0a458", // amber (site accent)
    "#e08ba1", // pink
    "#62c4b8", // teal
    "#7fa8f0", // blue
    "#a78bfa", // violet
    "#8fc97e", // green
    "#ef8f8f", // soft red
    "#5bc4e8", // cyan
    "#c9c25e"  // olive
  ];

  var W = 720; // viewBox width for all charts (responsive via CSS)

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function fmt(n) { return String(Math.round(n * 100) / 100); }
  function seriesColor(spec, i) {
    return (spec.colors && spec.colors[i]) || PALETTE[i % PALETTE.length];
  }
  function textW(s) { return String(s).length * 7.2; } // rough width at font-size 12

  function svgOpen(h, label) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + " " + h +
      '" role="img" aria-label="' + esc(label || "chart") + '" class="task-chart">';
  }
  function titleText(title) {
    if (!title) return "";
    return '<text x="' + (W / 2) + '" y="26" text-anchor="middle" fill="currentColor" ' +
      'font-size="15" font-weight="600">' + esc(title) + "</text>";
  }

  /* Lay out legend swatches left-to-right with wrapping.
     Returns { svg, rows } for a legend starting at y. */
  function legend(names, colors, y) {
    var x = 24, row = 0, out = "";
    names.forEach(function (name, i) {
      var w = 14 + 6 + textW(name) + 22;
      if (x + w > W - 12 && x > 24) { x = 24; row += 1; }
      var yy = y + row * 22;
      out += '<rect x="' + fmt(x) + '" y="' + fmt(yy) + '" width="14" height="14" rx="3" fill="' + colors[i] + '"/>' +
        '<text x="' + fmt(x + 20) + '" y="' + fmt(yy + 11.5) + '" fill="currentColor" font-size="12.5">' + esc(name) + "</text>";
      x += w;
    });
    return { svg: out, rows: row + 1 };
  }

  function niceMax(values) {
    var m = 0;
    values.forEach(function (v) { if (v > m) m = v; });
    return Math.max(10, Math.ceil(m / 10) * 10);
  }

  /* Shared y axis + horizontal gridlines. */
  function yAxis(x0, x1, top, plotH, yMax, unit) {
    var out = "", ticks = 5;
    for (var t = 0; t <= ticks; t++) {
      var val = yMax * t / ticks;
      var y = top + plotH - plotH * t / ticks;
      out += '<line x1="' + x0 + '" y1="' + fmt(y) + '" x2="' + x1 + '" y2="' + fmt(y) +
        '" stroke="currentColor" stroke-width="1" opacity="' + (t === 0 ? "0.45" : "0.12") + '"/>' +
        '<text x="' + (x0 - 8) + '" y="' + fmt(y + 4) + '" text-anchor="end" fill="currentColor" ' +
        'font-size="11" opacity="0.75">' + fmt(val) + (unit || "") + "</text>";
    }
    return out;
  }

  /* ---------- line ---------- */
  function renderLine(spec) {
    var xs = spec.xLabels, series = spec.series;
    var x0 = 56, x1 = W - 20, top = 46, plotH = 250;
    var all = [];
    series.forEach(function (s) { all = all.concat(s.values); });
    var yMax = spec.yMax || niceMax(all);
    var names = series.map(function (s) { return s.name; });
    var colors = series.map(function (s, i) { return s.color || seriesColor(spec, i); });
    var legendY = top + plotH + 34;
    var leg = legend(names, colors, legendY);
    var H = legendY + leg.rows * 22 + 8;

    var out = svgOpen(H, spec.title) + titleText(spec.title);
    out += yAxis(x0, x1, top, plotH, yMax, spec.yUnit || "%");
    function px(i) { return x0 + (x1 - x0) * (xs.length === 1 ? 0.5 : i / (xs.length - 1)); }
    function py(v) { return top + plotH - plotH * v / yMax; }
    xs.forEach(function (lab, i) {
      out += '<text x="' + fmt(px(i)) + '" y="' + fmt(top + plotH + 20) +
        '" text-anchor="middle" fill="currentColor" font-size="11.5" opacity="0.8">' + esc(lab) + "</text>";
    });
    series.forEach(function (s, si) {
      var pts = s.values.map(function (v, i) { return fmt(px(i)) + "," + fmt(py(v)); }).join(" ");
      out += '<polyline points="' + pts + '" fill="none" stroke="' + colors[si] +
        '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';
      s.values.forEach(function (v, i) {
        out += '<circle cx="' + fmt(px(i)) + '" cy="' + fmt(py(v)) + '" r="3" fill="' + colors[si] + '"/>';
      });
    });
    out += leg.svg + "</svg>";
    return out;
  }

  /* ---------- grouped bar ---------- */
  function renderBar(spec) {
    var cats = spec.categories, series = spec.series;
    var x0 = 56, x1 = W - 20, top = 46, plotH = 250;
    var all = [];
    series.forEach(function (s) { all = all.concat(s.values); });
    var yMax = spec.yMax || niceMax(all);
    var names = series.map(function (s) { return s.name; });
    var colors = series.map(function (s, i) { return s.color || seriesColor(spec, i); });
    var legendY = top + plotH + 46;
    var leg = legend(names, colors, legendY);
    var H = legendY + leg.rows * 22 + 8;

    var out = svgOpen(H, spec.title) + titleText(spec.title);
    out += yAxis(x0, x1, top, plotH, yMax, spec.yUnit || "%");
    var groupW = (x1 - x0) / cats.length;
    var barW = Math.min(34, (groupW * 0.66) / series.length);
    cats.forEach(function (cat, ci) {
      var cx = x0 + groupW * (ci + 0.5);
      /* category labels, wrapped on "/" or space if long */
      var words = String(cat).length > 14 ? String(cat).split(" ") : [String(cat)];
      var lines = [];
      words.forEach(function (w) {
        if (lines.length && (lines[lines.length - 1] + " " + w).length <= 14) {
          lines[lines.length - 1] += " " + w;
        } else lines.push(w);
      });
      lines.forEach(function (ln, li) {
        out += '<text x="' + fmt(cx) + '" y="' + fmt(top + plotH + 18 + li * 13) +
          '" text-anchor="middle" fill="currentColor" font-size="11" opacity="0.8">' + esc(ln) + "</text>";
      });
      series.forEach(function (s, si) {
        var v = s.values[ci];
        var h = plotH * v / yMax;
        var bx = cx - (barW * series.length) / 2 + si * barW;
        out += '<rect x="' + fmt(bx) + '" y="' + fmt(top + plotH - h) + '" width="' + fmt(barW - 3) +
          '" height="' + fmt(h) + '" rx="2" fill="' + colors[si] + '"/>' +
          '<text x="' + fmt(bx + (barW - 3) / 2) + '" y="' + fmt(top + plotH - h - 5) +
          '" text-anchor="middle" fill="currentColor" font-size="10.5" opacity="0.85">' + fmt(v) + "</text>";
      });
    });
    out += leg.svg + "</svg>";
    return out;
  }

  /* ---------- pie (one or two, side by side) ---------- */
  function arcPath(cx, cy, r, a0, a1) {
    var large = (a1 - a0) > Math.PI ? 1 : 0;
    return "M" + fmt(cx) + " " + fmt(cy) +
      " L" + fmt(cx + r * Math.cos(a0)) + " " + fmt(cy + r * Math.sin(a0)) +
      " A" + r + " " + r + " 0 " + large + " 1 " +
      fmt(cx + r * Math.cos(a1)) + " " + fmt(cy + r * Math.sin(a1)) + " Z";
  }

  function renderPie(spec) {
    var pies = spec.pies, r = 105, top = 44;
    var cy = top + r + 14;
    var names = pies[0].slices.map(function (s) { return s.name; });
    var colors = names.map(function (n, i) { return seriesColor(spec, i); });
    var legendY = cy + r + 44;
    var leg = legend(names, colors, legendY);
    var noteY = legendY + leg.rows * 22 + 8;
    var H = noteY + (spec.note ? 24 : 4);

    var out = svgOpen(H, spec.title) + titleText(spec.title);
    pies.forEach(function (pie, pi) {
      var cx = pies.length === 1 ? W / 2 : (pi === 0 ? W * 0.27 : W * 0.73);
      var total = 0;
      pie.slices.forEach(function (s) { total += s.value; });
      var a = -Math.PI / 2;
      pie.slices.forEach(function (s, si) {
        var sweep = (s.value / total) * Math.PI * 2;
        out += '<path d="' + arcPath(cx, cy, r, a, a + sweep) + '" fill="' + colors[si] +
          '" stroke="rgba(0,0,0,0.35)" stroke-width="1"/>';
        var mid = a + sweep / 2;
        var frac = s.value / total;
        var lr = frac >= 0.08 ? r * 0.62 : r * 1.2;
        var lx = cx + lr * Math.cos(mid), ly = cy + lr * Math.sin(mid);
        out += '<text x="' + fmt(lx) + '" y="' + fmt(ly + 4) + '" text-anchor="middle" font-size="12" ' +
          'font-weight="600" fill="' + (frac >= 0.08 ? "#14141a" : "currentColor") + '">' +
          fmt(s.value) + "%</text>";
        a += sweep;
      });
      if (pie.label) {
        out += '<text x="' + fmt(cx) + '" y="' + fmt(cy + r + 26) + '" text-anchor="middle" ' +
          'fill="currentColor" font-size="13" font-weight="600">' + esc(pie.label) + "</text>";
      }
    });
    out += leg.svg;
    if (spec.note) {
      out += '<text x="' + (W / 2) + '" y="' + fmt(noteY + 12) + '" text-anchor="middle" ' +
        'fill="currentColor" font-size="12" font-style="italic" opacity="0.8">' + esc(spec.note) + "</text>";
    }
    return out + "</svg>";
  }

  /* ---------- table (IELTS Task 1 tables are shown as real tables) ---------- */
  function renderTable(spec) {
    var out = '<table class="chart-table">';
    if (spec.title) out += "<caption>" + esc(spec.title) + "</caption>";
    out += "<thead><tr>";
    spec.columns.forEach(function (c) { out += "<th>" + esc(c) + "</th>"; });
    out += "</tr></thead><tbody>";
    spec.rows.forEach(function (row) {
      out += "<tr>";
      row.forEach(function (cell, i) {
        out += (i === 0 ? '<th scope="row">' : "<td>") + esc(cell) + (i === 0 ? "</th>" : "</td>");
      });
      out += "</tr>";
    });
    out += "</tbody></table>";
    if (spec.note) out += '<p class="chart-note">' + esc(spec.note) + "</p>";
    return out;
  }

  function renderChart(spec) {
    if (!spec || !spec.type) return "";
    if (spec.type === "line") return renderLine(spec);
    if (spec.type === "bar") return renderBar(spec);
    if (spec.type === "pie") return renderPie(spec);
    if (spec.type === "table") return renderTable(spec);
    return "";
  }

  var API = {
    renderChart: renderChart,
    renderLine: renderLine,
    renderBar: renderBar,
    renderPie: renderPie,
    renderTable: renderTable,
    PALETTE: PALETTE
  };
  if (typeof module !== "undefined") { module.exports = API; return; }
  window.ChartKit = API;
  window.renderChart = renderChart;
})();
