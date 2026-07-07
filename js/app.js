/* ============================================================
 * CPE Prep — app.js
 * 結構：
 *   §1 Pure logic（瀏覽器 + Node 皆可用，供測試）
 *   §2 Storage helpers
 *   §3 Tab navigation
 *   §4 Use of English quiz engine
 *   §5 Writing (timer + drafts)
 *   §6 Speaking
 *   §7 字彙卡 (Leitner)
 *   §8 進度
 *   §9 Init（全部 try/catch 防護，單一錯誤不會癱瘓其他區塊）
 * ============================================================ */

/* ================= §1 Pure logic ================= */

/** 正規化答案：小寫、去標點、壓縮空白 */
function normalizeAnswer(s) {
  return String(s == null ? "" : s)
    .toLowerCase()
    .replace(/[’‘']/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** 使用者輸入是否符合任一可接受答案 */
function matchAnswer(input, acceptedList) {
  var n = normalizeAnswer(input);
  if (!n) return false;
  for (var i = 0; i < acceptedList.length; i++) {
    if (normalizeAnswer(acceptedList[i]) === n) return true;
  }
  return false;
}

/** 字數統計 */
function countWords(s) {
  var t = String(s == null ? "" : s).trim();
  if (!t) return 0;
  return t.split(/\s+/).length;
}

/** Leitner 間隔（天）：盒1 永遠到期、盒2 每 2 天、盒3 每 5 天 */
var LEITNER_INTERVAL_DAYS = { 1: 0, 2: 2, 3: 5 };
var DAY_MS = 24 * 60 * 60 * 1000;

/** 卡片是否到期。card = {box, last(ms epoch)} */
function leitnerIsDue(card, nowMs) {
  var box = card && card.box ? card.box : 1;
  if (box <= 1) return true;
  var last = card.last || 0;
  var days = LEITNER_INTERVAL_DAYS[box];
  if (days === undefined) days = 0;
  return (nowMs - last) >= days * DAY_MS;
}

/** 複習後的新狀態。known=true → 升盒(最多3)；false → 回盒1 */
function leitnerReview(card, known, nowMs) {
  var box = card && card.box ? card.box : 1;
  var newBox = known ? Math.min(3, box + 1) : 1;
  return { box: newBox, last: nowMs };
}

/** Fisher–Yates 洗牌（回傳新陣列） */
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* Node export（測試用） */
if (typeof module !== 'undefined') {
  module.exports = {
    normalizeAnswer: normalizeAnswer,
    matchAnswer: matchAnswer,
    countWords: countWords,
    leitnerIsDue: leitnerIsDue,
    leitnerReview: leitnerReview,
    shuffle: shuffle
  };
}

/* ================= 瀏覽器端（Node 環境跳過） ================= */
if (typeof document !== 'undefined') {
(function () {
  "use strict";

  /* ================= §2 Storage helpers ================= */
  function loadJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---- 級數相關狀態（CPEApp.init(level) 設定） ---- */
  var LEVEL = "cpe";
  var CFG = {           // 預設 = CPE；init 時會被 window.LEVELS[level] 覆蓋
    timerMin: 45,
    wordGuide: "",
    p4min: 3, p4max: 8,
    spSecs: 120, spLabel: ""
  };
  var K_STATS = "cpe.uoe_stats";
  var K_VOCAB = "cpe.vocab_state";
  var K_DRAFT = "cpe.draft_";   // + prompt id

  function setLevel(level) {
    LEVEL = level || "cpe";
    var levels = (typeof window !== "undefined" && window.LEVELS) || {};
    var cfg = levels[LEVEL];
    if (cfg) CFG = cfg;
    K_STATS = LEVEL + ".uoe_stats";
    K_VOCAB = LEVEL + ".vocab_state";
    K_DRAFT = LEVEL + ".draft_";
    if (LEVEL === "cpe") migrateLegacyKeys();
  }

  /* 舊版未加級數前綴的 key（cpe_uoe_stats 等）一次性搬到 cpe.* */
  function migrateLegacyKeys() {
    try {
      var map = { "cpe_uoe_stats": "cpe.uoe_stats", "cpe_vocab_state": "cpe.vocab_state" };
      Object.keys(map).forEach(function (oldK) {
        var v = localStorage.getItem(oldK);
        if (v !== null && localStorage.getItem(map[oldK]) === null) {
          localStorage.setItem(map[oldK], v);
        }
      });
      var draftKeys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("cpe_draft_") === 0) draftKeys.push(k);
      }
      draftKeys.forEach(function (oldK) {
        var newK = "cpe.draft_" + oldK.slice("cpe_draft_".length);
        var v = localStorage.getItem(oldK);
        if (v !== null && localStorage.getItem(newK) === null) {
          localStorage.setItem(newK, v);
        }
      });
    } catch (e) {}
  }

  /* ================= §3 Tab navigation ================= */
  function initTabs() {
    var btns = document.querySelectorAll(".tab-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
        document.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        var panel = $(btn.dataset.tab);
        if (panel) panel.classList.add("active");
        if (btn.dataset.tab === "tab-progress") { try { renderProgress(); } catch (e) {} }
        if (btn.dataset.tab === "tab-vocab") { try { renderVocabStatus(); } catch (e) {} }
      });
    });
  }

  /* ================= §4 Use of English quiz engine ================= */
  var PART_LABELS = {
    part1: "Part 1 · Multiple-choice cloze",
    part2: "Part 2 · Open cloze",
    part3: "Part 3 · Word formation",
    part4: "Part 4 · Key word transformations"
  };

  var quiz = { part: null, items: [], idx: 0, correct: 0 };

  function recordResult(part, isCorrect) {
    var stats = loadJSON(K_STATS, {});
    if (!stats[part]) stats[part] = { attempted: 0, correct: 0, last: 0 };
    stats[part].attempted += 1;
    if (isCorrect) stats[part].correct += 1;
    stats[part].last = Date.now();
    saveJSON(K_STATS, stats);
  }

  function startQuiz(part) {
    quiz.part = part;
    quiz.items = shuffle(QUESTIONS[part]);
    quiz.idx = 0;
    quiz.correct = 0;
    $("uoe-picker").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-quiz").classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    var q = quiz.items[quiz.idx];
    var part = quiz.part;
    $("uoe-progress").textContent = PART_LABELS[part].split("·")[0].trim() +
      "  第 " + (quiz.idx + 1) + " / " + quiz.items.length + " 題";
    $("uoe-feedback").className = "hidden";
    $("uoe-feedback").innerHTML = "";
    $("uoe-next").classList.add("hidden");

    var qBox = $("uoe-question");
    var aBox = $("uoe-answer-area");
    aBox.innerHTML = "";
    /* retrigger entrance animation */
    qBox.classList.remove("q-anim");
    void qBox.offsetWidth;
    qBox.classList.add("q-anim");

    if (part === "part1") {
      qBox.innerHTML = "<p>" + esc(q.text) + "</p>";
      var letters = ["A", "B", "C", "D"];
      q.options.forEach(function (opt, i) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + letters[i] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () { answerPart1(i, b); });
        aBox.appendChild(b);
      });
    } else if (part === "part2" || part === "part3") {
      var html = "<p>" + esc(q.text) + "</p>";
      if (part === "part3") html += '<p>提示字（改變詞形）：<span class="stem-word">' + esc(q.stem) + "</span></p>";
      qBox.innerHTML = html;
      buildTypedInput(aBox, function (val) { answerTyped(val, q.answers, q.answers[0], q.explanation); });
    } else { // part4
      qBox.innerHTML =
        '<p class="original">' + esc(q.original) + "</p>" +
        '<p>關鍵詞：<span class="kw">' + esc(q.keyword) + "</span>（必須使用，共 " + CFG.p4min + "–" + CFG.p4max + " 個字）</p>" +
        "<p>" + esc(q.gapped) + "</p>";
      buildTypedInput(aBox, function (val) { answerTyped(val, q.answers, q.model, q.explanation); });
    }
  }

  function buildTypedInput(container, onSubmit) {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "answer-input";
    input.autocapitalize = "off";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "輸入答案…";
    var btn = document.createElement("button");
    btn.className = "primary-btn";
    btn.textContent = "送出";
    var submit = function () {
      if (!input.value.trim()) return;
      input.disabled = true;
      btn.disabled = true;
      onSubmit(input.value);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    container.appendChild(input);
    container.appendChild(btn);
    input.focus();
  }

  function answerPart1(choice, btnEl) {
    var q = quiz.items[quiz.idx];
    var isCorrect = choice === q.answer;
    var btns = document.querySelectorAll("#uoe-answer-area .option-btn");
    btns.forEach(function (b, i) {
      b.disabled = true;
      if (i === q.answer) b.classList.add("correct");
    });
    if (!isCorrect) btnEl.classList.add("wrong");
    showFeedback(isCorrect, q.options[q.answer], q.explanation);
  }

  function answerTyped(val, accepted, modelAns, explanation) {
    var isCorrect = matchAnswer(val, accepted);
    showFeedback(isCorrect, modelAns, explanation);
  }

  function showFeedback(isCorrect, modelAns, explanation) {
    if (isCorrect) quiz.correct += 1;
    recordResult(quiz.part, isCorrect);
    var fb = $("uoe-feedback");
    fb.className = isCorrect ? "ok" : "bad";
    fb.innerHTML =
      '<div class="verdict">' + (isCorrect ? "✓ 對" : "✗ 錯") + "</div>" +
      '<div class="modelans"><strong>Answer:</strong> ' + esc(modelAns) + "</div>" +
      '<div class="expl">' + esc(explanation) + "</div>";
    $("uoe-next").classList.remove("hidden");
    $("uoe-next").textContent = quiz.idx === quiz.items.length - 1 ? "看結果 →" : "下一題 →";
  }

  function nextQuestion() {
    quiz.idx += 1;
    if (quiz.idx >= quiz.items.length) {
      $("uoe-quiz").classList.add("hidden");
      $("uoe-summary").classList.remove("hidden");
      var pct = Math.round(100 * quiz.correct / quiz.items.length);
      $("uoe-score").textContent = quiz.correct + " / " + quiz.items.length + "（" + pct + "%）";
    } else {
      renderQuestion();
    }
  }

  function initUoe() {
    /* 只綁 UoE 選單的按鈕（級數選擇卡也用 .mode-btn，但沒有 data-part） */
    document.querySelectorAll("#uoe-picker .mode-btn[data-part]").forEach(function (b) {
      b.addEventListener("click", function () { startQuiz(b.dataset.part); });
    });
    $("uoe-next").addEventListener("click", nextQuestion);
    $("uoe-retry").addEventListener("click", function () { startQuiz(quiz.part); });
    $("uoe-back").addEventListener("click", backToPicker);
    $("uoe-home").addEventListener("click", backToPicker);
  }
  function backToPicker() {
    $("uoe-quiz").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-picker").classList.remove("hidden");
  }

  /* ================= §5 Writing ================= */
  function makeCountdown(displayEl, onDone) {
    var remaining = 0, timerId = null;
    function render() {
      var m = Math.floor(remaining / 60), s = remaining % 60;
      displayEl.textContent = m + ":" + (s < 10 ? "0" : "") + s;
      displayEl.classList.toggle("warn", remaining <= 60 && remaining > 0);
    }
    return {
      set: function (secs) { remaining = secs; render(); },
      start: function () {
        if (timerId || remaining <= 0) return;
        timerId = setInterval(function () {
          remaining -= 1;
          render();
          if (remaining <= 0) {
            clearInterval(timerId); timerId = null;
            if (onDone) onDone();
          }
        }, 1000);
      },
      pause: function () { if (timerId) { clearInterval(timerId); timerId = null; } },
      isRunning: function () { return !!timerId; }
    };
  }

  function initWriting() {
    // level-specific guidance
    var guide = $("wr-guidance");
    if (guide) guide.textContent = CFG.wordGuide || "";
    // timer
    var wrTimer = makeCountdown($("wr-timer"), function () { alert("時間到！"); });
    var minInput = $("wr-minutes");
    minInput.value = CFG.timerMin;
    function resetWr() {
      wrTimer.pause();
      var m = parseInt(minInput.value, 10);
      if (isNaN(m) || m < 1) m = CFG.timerMin;
      wrTimer.set(m * 60);
    }
    resetWr();
    $("wr-start").addEventListener("click", function () { wrTimer.start(); });
    $("wr-pause").addEventListener("click", function () { wrTimer.pause(); });
    $("wr-reset").addEventListener("click", resetWr);
    minInput.addEventListener("change", function () { if (!wrTimer.isRunning()) resetWr(); });

    // prompt cards
    var list = $("writing-list");
    WRITING.forEach(function (p) {
      var wrap = document.createElement("div");
      wrap.className = "wr-card";

      var head = document.createElement("button");
      head.className = "wr-head";
      head.innerHTML = "<span>" + esc(p.title) + "</span>" +
        '<span class="badge">Part ' + p.part + " · " + esc(p.type) + "</span>";

      var body = document.createElement("div");
      body.className = "wr-body hidden";

      var bodyHtml = "<p>" + esc(p.task) + "</p>";
      if (p.texts) {
        p.texts.forEach(function (t, i) {
          bodyHtml += "<blockquote><strong>Text " + (i + 1) + ".</strong> " + esc(t) + "</blockquote>";
        });
      }
      bodyHtml += "<h4>目標長度</h4><p>" + esc(p.length) + "</p>";
      bodyHtml += "<h4>評分檢核表</h4><ul>";
      p.checklist.forEach(function (c) { bodyHtml += "<li>" + esc(c) + "</li>"; });
      bodyHtml += "</ul>";
      bodyHtml += '<h4>Model</h4><p class="model">' + esc(p.model) + "</p>";
      bodyHtml += "<h4>草稿（自動儲存）</h4>";
      body.innerHTML = bodyHtml;

      var ta = document.createElement("textarea");
      ta.className = "wr-draft";
      ta.placeholder = "在這裡打草稿…";
      ta.value = (function () {
        try { return localStorage.getItem(K_DRAFT + p.id) || ""; } catch (e) { return ""; }
      })();
      var wc = document.createElement("div");
      wc.className = "wordcount";
      function updateWc() { wc.textContent = countWords(ta.value) + " words"; }
      updateWc();
      ta.addEventListener("input", function () {
        updateWc();
        try { localStorage.setItem(K_DRAFT + p.id, ta.value); } catch (e) {}
      });
      body.appendChild(ta);
      body.appendChild(wc);

      head.addEventListener("click", function () { body.classList.toggle("hidden"); });
      wrap.appendChild(head);
      wrap.appendChild(body);
      list.appendChild(wrap);
    });
  }

  /* ================= §6 Speaking ================= */
  function initSpeaking() {
    var hint = $("sp-mode-hint");
    if (hint && CFG.spLabel) hint.textContent = CFG.spLabel;
    var spTimer = makeCountdown($("sp-timer"), function () {
      $("sp-phrases").classList.remove("hidden");
    });
    spTimer.set(CFG.spSecs);

    $("sp-draw").addEventListener("click", function () {
      var p = SPEAKING[Math.floor(Math.random() * SPEAKING.length)];
      var html = "<h3>" + esc(p.question) + "</h3><ul>";
      p.bullets.forEach(function (b) { html += "<li>" + esc(b) + "</li>"; });
      html += "</ul>";
      $("sp-card").innerHTML = html;
      $("sp-card").classList.remove("hidden");
      $("sp-timer-box").classList.remove("hidden");
      $("sp-phrases").classList.add("hidden");
      spTimer.pause();
      spTimer.set(CFG.spSecs);
    });
    $("sp-start").addEventListener("click", function () { spTimer.start(); });
    $("sp-reset").addEventListener("click", function () { spTimer.pause(); spTimer.set(CFG.spSecs); });

    var ul = $("sp-phrase-list");
    SPEAKING_PHRASES.forEach(function (ph) {
      var li = document.createElement("li");
      li.textContent = ph;
      ul.appendChild(li);
    });
  }

  /* ================= §7 字彙卡 (Leitner) ================= */
  var vocabQueue = [];

  function getVocabState() {
    var st = loadJSON(K_VOCAB, {});
    VOCAB.forEach(function (c) {
      if (!st[c.front]) st[c.front] = { box: 1, last: 0 };
    });
    return st;
  }

  function buildVocabQueue() {
    var st = getVocabState();
    var now = Date.now();
    vocabQueue = shuffle(VOCAB.filter(function (c) { return leitnerIsDue(st[c.front], now); }));
  }

  function renderVocabStatus() {
    var st = getVocabState();
    var now = Date.now();
    var due = VOCAB.filter(function (c) { return leitnerIsDue(st[c.front], now); }).length;
    var statusEl = $("vb-status");
    if (due === 0) {
      statusEl.innerHTML = "<p>🎉 今天沒有到期的卡片。</p>";
      $("vb-card-wrap").classList.add("hidden");
      return;
    }
    statusEl.innerHTML = "<p>到期卡片：<strong>" + due + "</strong> / " + VOCAB.length + " 張</p>";
    if (vocabQueue.length === 0) buildVocabQueue();
    if (vocabQueue.length > 0) {
      $("vb-card-wrap").classList.remove("hidden");
      showVocabCard();
    }
  }

  function showVocabCard() {
    var c = vocabQueue[0];
    if (!c) {
      $("vb-card-wrap").classList.add("hidden");
      $("vb-status").innerHTML = "<p>✅ 本回合複習完成！</p>";
      return;
    }
    var st = getVocabState();
    var box = st[c.front].box;
    $("vb-card").classList.remove("flipped");
    $("vb-front").innerHTML =
      '<div class="word">' + esc(c.front) + "</div>" +
      '<div class="pos">' + esc(c.pos) + "</div>" +
      '<div class="vb-boxtag">盒 ' + box + "</div>";
    $("vb-back").innerHTML =
      '<div class="def"><strong>Definition:</strong> ' + esc(c.def) + "</div>" +
      '<div class="ex">' + esc(c.example) + "</div>" +
      '<div class="zh">' + esc(c.zh) + "</div>";
  }

  function reviewVocab(known) {
    var c = vocabQueue.shift();
    if (!c) return;
    var st = getVocabState();
    st[c.front] = leitnerReview(st[c.front], known, Date.now());
    saveJSON(K_VOCAB, st);
    showVocabCard();
    // update due count text
    var st2 = getVocabState();
    var now = Date.now();
    var remaining = vocabQueue.length;
    if (remaining > 0) {
      $("vb-status").innerHTML = "<p>本回合剩餘：<strong>" + remaining + "</strong> 張</p>";
    }
  }

  function initVocab() {
    $("vb-card").addEventListener("click", function () {
      $("vb-card").classList.toggle("flipped");
    });
    $("vb-yes").addEventListener("click", function () { reviewVocab(true); });
    $("vb-no").addEventListener("click", function () { reviewVocab(false); });
    renderVocabStatus();
  }

  /* ================= §8 進度 ================= */
  function fmtDate(ms) {
    if (!ms) return "—";
    var d = new Date(ms);
    return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() +
      " " + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  }

  function barRow(label, sub, pct, green) {
    return '<div class="pg-row">' +
      '<div class="pg-label"><span>' + esc(label) + '</span><span class="sub">' + esc(sub) + "</span></div>" +
      '<div class="pg-bar-bg"><div class="pg-bar-fill' + (green ? " green" : "") + '" style="width:' + pct + '%"></div></div>' +
      "</div>";
  }

  function renderProgress() {
    var stats = loadJSON(K_STATS, {});
    var html = "<h3>Use of English</h3>";
    ["part1", "part2", "part3", "part4"].forEach(function (p) {
      var s = stats[p];
      var label = PART_LABELS[p];
      if (!s || !s.attempted) {
        html += barRow(label, "尚未練習", 0, false);
      } else {
        var pct = Math.round(100 * s.correct / s.attempted);
        html += barRow(label,
          "答題 " + s.attempted + " · 正確率 " + pct + "% · 上次 " + fmtDate(s.last),
          pct, pct >= 80);
      }
    });
    $("pg-uoe").innerHTML = html;

    var st = getVocabState();
    var counts = { 1: 0, 2: 0, 3: 0 };
    VOCAB.forEach(function (c) {
      var b = st[c.front].box;
      counts[b] = (counts[b] || 0) + 1;
    });
    var vhtml = "<h3>字彙卡</h3>";
    [1, 2, 3].forEach(function (b) {
      var pct = Math.round(100 * counts[b] / VOCAB.length);
      vhtml += barRow("盒 " + b, counts[b] + " 張", pct, b === 3);
    });
    $("pg-vocab").innerHTML = vhtml;
  }

  function initProgress() {
    $("pg-clear").addEventListener("click", function () {
      if (!confirm("確定要清除「本級數」的練習紀錄、字彙進度與草稿嗎？此動作無法復原。")) return;
      try {
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (!k) continue;
          if (k.indexOf(LEVEL + ".") === 0) keys.push(k);
          /* CPE 也清掉舊版未加前綴的 key；主題 (cpe_theme) 與級數選擇 (cpe.level) 全域，保留 */
          if (LEVEL === "cpe" && k.indexOf("cpe_") === 0 && k !== "cpe_theme") keys.push(k);
        }
        keys.forEach(function (k) {
          if (k === "cpe.level") return;
          localStorage.removeItem(k);
        });
      } catch (e) {}
      vocabQueue = [];
      renderProgress();
      alert("已清除。");
    });
    renderProgress();
  }

  /* ================= §8.5 色系主題 ================= */
  var K_THEME = "cpe_theme";
  var THEMES = [
    { id: "ink",     name: "墨黑",   bg: "#0d0d10", accent: "#e0a458" },
    { id: "navy",    name: "深海藍", bg: "#0a1220", accent: "#d6b25e" },
    { id: "forest",  name: "森林綠", bg: "#0c1410", accent: "#d8c69a" },
    { id: "paper",   name: "暖米白", bg: "#f4efe4", accent: "#8a5a26" },
    { id: "plum",    name: "玫瑰紫", bg: "#16101a", accent: "#e08ba1" },
    { id: "celadon", name: "青瓷",   bg: "#0d1416", accent: "#62c4b8" }
  ];

  function applyTheme(id) {
    var theme = null;
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) { theme = THEMES[i]; break; }
    }
    if (!theme) theme = THEMES[0];
    if (theme.id === "ink") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme.id);
    }
    try { localStorage.setItem(K_THEME, theme.id); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme.bg);
  }

  function currentTheme() {
    try { return localStorage.getItem(K_THEME) || "ink"; } catch (e) { return "ink"; }
  }

  function initTheme() {
    var btn = $("theme-btn"), sheet = $("theme-sheet"),
        backdrop = $("theme-backdrop"), grid = $("theme-grid");
    if (!btn || !sheet || !backdrop || !grid) return;

    function closeSheet() {
      sheet.classList.add("hidden");
      backdrop.classList.add("hidden");
    }
    function renderSwatches() {
      grid.innerHTML = "";
      var cur = currentTheme();
      THEMES.forEach(function (t) {
        var b = document.createElement("button");
        b.className = "theme-swatch" + (t.id === cur ? " selected" : "");
        b.setAttribute("aria-label", t.name);
        var dot = document.createElement("span");
        dot.className = "theme-dot";
        dot.style.background =
          "linear-gradient(135deg, " + t.bg + " 55%, " + t.accent + " 55%)";
        b.appendChild(dot);
        b.appendChild(document.createTextNode(t.name));
        b.addEventListener("click", function () {
          applyTheme(t.id);
          renderSwatches();
        });
        grid.appendChild(b);
      });
    }
    btn.addEventListener("click", function () {
      renderSwatches();
      sheet.classList.remove("hidden");
      backdrop.classList.remove("hidden");
    });
    backdrop.addEventListener("click", closeSheet);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeSheet();
    });
  }

  /* ================= §9 Init（防護式啟動） ================= */
  function safeInit(name, fn) {
    try { fn(); } catch (e) {
      if (typeof console !== "undefined") console.error("init failed: " + name, e);
    }
  }

  var booted = false;
  function boot(level) {
    if (booted) return;
    booted = true;
    safeInit("level", function () { setLevel(level); });
    safeInit("tabs", initTabs);
    safeInit("uoe", initUoe);
    safeInit("writing", initWriting);
    safeInit("speaking", initSpeaking);
    safeInit("vocab", initVocab);
    safeInit("progress", initProgress);
  }

  /* 主題為全域功能：不等選級數，載入即啟用（含級數選擇畫面）。 */
  safeInit("theme", initTheme);

  /* loader.js 載完該級數的資料檔後呼叫 CPEApp.init(level) */
  window.CPEApp = { init: boot };
})();
}
