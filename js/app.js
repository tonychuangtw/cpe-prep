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

  /* ================= §4 Use of English 模擬考引擎 ================= */
  var PART_LABELS = {
    part1: "Part 1 · Multiple-choice cloze",
    part2: "Part 2 · Open cloze",
    part3: "Part 3 · Word formation",
    part4: "Part 4 · Key word transformations"
  };
  /* 真實考試每個 part 的題數；P4 每題 2 分 */
  var EXAM_SIZE = { part1: 8, part2: 8, part3: 8, part4: 6 };
  var PART_POINTS = { part1: 1, part2: 1, part3: 1, part4: 2 };
  var PARTS = ["part1", "part2", "part3", "part4"];
  var K_MOCK = function () { return LEVEL + ".mock_history"; };

  /* mode: 'single' = 單一 part；'full' = P1–P4 全卷 */
  var quiz = { mode: "single", part: null, items: [], idx: 0, answers: [] };

  function recordResult(part, isCorrect) {
    var stats = loadJSON(K_STATS, {});
    if (!stats[part]) stats[part] = { attempted: 0, correct: 0, last: 0 };
    stats[part].attempted += 1;
    if (isCorrect) stats[part].correct += 1;
    stats[part].last = Date.now();
    saveJSON(K_STATS, stats);
  }

  function drawItems(part) {
    return shuffle(QUESTIONS[part]).slice(0, EXAM_SIZE[part]).map(function (q) {
      return { part: part, q: q };
    });
  }

  function startMock(part) {
    quiz.mode = "single";
    quiz.part = part;
    quiz.items = drawItems(part);
    beginExam();
  }

  function startFullMock() {
    quiz.mode = "full";
    quiz.part = null;
    quiz.items = [];
    PARTS.forEach(function (p) { quiz.items = quiz.items.concat(drawItems(p)); });
    beginExam();
  }

  function beginExam() {
    quiz.idx = 0;
    quiz.answers = [];
    $("uoe-picker").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-quiz").classList.remove("hidden");
    renderQuestion();
  }

  function renderQuestion() {
    var item = quiz.items[quiz.idx];
    var q = item.q, part = item.part;
    $("uoe-progress").textContent = PART_LABELS[part].split("·")[0].trim() +
      "  第 " + (quiz.idx + 1) + " / " + quiz.items.length + " 題";

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
        b.addEventListener("click", function () { submitAnswer(i); });
        aBox.appendChild(b);
      });
    } else if (part === "part2" || part === "part3") {
      var html = "<p>" + esc(q.text) + "</p>";
      if (part === "part3") html += '<p>提示字（改變詞形）：<span class="stem-word">' + esc(q.stem) + "</span></p>";
      qBox.innerHTML = html;
      buildTypedInput(aBox);
    } else { // part4
      qBox.innerHTML =
        '<p class="original">' + esc(q.original) + "</p>" +
        '<p>關鍵詞：<span class="kw">' + esc(q.keyword) + "</span>（必須使用，共 " + CFG.p4min + "–" + CFG.p4max + " 個字）</p>" +
        "<p>" + esc(q.gapped) + "</p>";
      buildTypedInput(aBox);
    }
    addSkipButton(aBox);
  }

  function buildTypedInput(container) {
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
      submitAnswer(input.value);
    };
    btn.addEventListener("click", submit);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    container.appendChild(input);
    container.appendChild(btn);
    input.focus();
  }

  function addSkipButton(container) {
    var skip = document.createElement("button");
    skip.className = "ghost-btn skip-btn";
    skip.textContent = "跳過此題";
    skip.addEventListener("click", function () { submitAnswer(null); });
    container.appendChild(skip);
  }

  /* 考試中不給回饋：記錄作答後直接下一題，最後才評分 */
  function submitAnswer(val) {
    quiz.answers.push(val);
    quiz.idx += 1;
    if (quiz.idx >= quiz.items.length) {
      gradeExam();
    } else {
      renderQuestion();
    }
  }

  function gradeItem(item, userAns) {
    var q = item.q;
    if (item.part === "part1") {
      return typeof userAns === "number" && userAns === q.answer;
    }
    return userAns !== null && matchAnswer(userAns, q.answers);
  }

  function userAnsText(item, userAns) {
    if (userAns === null || userAns === undefined) return "（未作答）";
    if (item.part === "part1") {
      return ["A", "B", "C", "D"][userAns] + ". " + item.q.options[userAns];
    }
    return String(userAns);
  }

  function correctAnsText(item) {
    var q = item.q;
    if (item.part === "part1") return ["A", "B", "C", "D"][q.answer] + ". " + q.options[q.answer];
    if (item.part === "part4") return q.model;
    return q.answers[0];
  }

  function verdictFor(pct) {
    if (pct >= 75) return { cls: "ok", text: "✅ 通過 — 高於及格線，維持這個水準！" };
    if (pct >= 60) return { cls: "mid", text: "🟡 邊緣通過 — 剛過及格線（約 60%），再加強弱項。" };
    return { cls: "bad", text: "❌ 未達標 — 低於及格線，建議複習後再考一次。" };
  }

  function gradeExam() {
    var score = 0, max = 0;
    var byPart = {};
    var reviewHtml = "";
    var curPart = null;

    quiz.items.forEach(function (item, i) {
      var pts = PART_POINTS[item.part];
      var isCorrect = gradeItem(item, quiz.answers[i]);
      max += pts;
      if (isCorrect) score += pts;
      recordResult(item.part, isCorrect);
      if (!byPart[item.part]) byPart[item.part] = { score: 0, max: 0 };
      byPart[item.part].max += pts;
      if (isCorrect) byPart[item.part].score += pts;

      if (item.part !== curPart) {
        curPart = item.part;
        reviewHtml += '<h3 class="review-part">' + esc(PART_LABELS[curPart]) + "</h3>";
      }
      var q = item.q;
      var stemHtml;
      if (item.part === "part4") {
        stemHtml = '<p class="original">' + esc(q.original) + "</p><p>" + esc(q.gapped) +
          '　<span class="kw">[' + esc(q.keyword) + "]</span></p>";
      } else {
        stemHtml = "<p>" + esc(q.text) + "</p>";
        if (item.part === "part3") stemHtml += '<p>提示字：<span class="stem-word">' + esc(q.stem) + "</span></p>";
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " 第 " + (i + 1) + " 題" +
        (pts > 1 ? '<span class="pts">' + (isCorrect ? pts : 0) + "/" + pts + " 分</span>" : "") + "</div>" +
        stemHtml +
        '<div class="review-ans"><strong>你的答案：</strong>' + esc(userAnsText(item, quiz.answers[i])) + "</div>" +
        '<div class="review-ans"><strong>正確答案：</strong>' + esc(correctAnsText(item)) + "</div>" +
        '<div class="expl">' + esc(q.explanation) + "</div>" +
        "</div>";
    });

    var pct = Math.round(100 * score / max);
    var v = verdictFor(pct);

    /* 全卷模式：加各 part 小計 */
    var subHtml = "";
    if (quiz.mode === "full") {
      subHtml = '<div class="part-subscores">';
      PARTS.forEach(function (p) {
        var s = byPart[p];
        if (s) subHtml += "<span>" + esc(PART_LABELS[p].split("·")[0].trim()) + " " + s.score + "/" + s.max + "</span>";
      });
      subHtml += "</div>";
    }

    $("uoe-quiz").classList.add("hidden");
    $("uoe-summary").classList.remove("hidden");
    $("uoe-summary-title").textContent = quiz.mode === "full"
      ? "全卷模擬結果 (Use of English)"
      : PART_LABELS[quiz.part] + " 模擬結果";
    $("uoe-score").textContent = score + " / " + max + "（" + pct + "%）";
    $("uoe-verdict").className = "verdict-text " + v.cls;
    $("uoe-verdict").innerHTML = esc(v.text) + subHtml;
    $("uoe-review").innerHTML = reviewHtml;
    window.scrollTo(0, 0);

    saveMockRecord(quiz.mode, quiz.part, score, max, pct);
  }

  function saveMockRecord(mode, part, score, max, pct) {
    var hist = loadJSON(K_MOCK(), []);
    hist.push({
      date: Date.now(),
      mode: mode,
      part: part,
      score: score, max: max, pct: pct
    });
    if (hist.length > 50) hist = hist.slice(hist.length - 50);
    saveJSON(K_MOCK(), hist);
  }

  function initUoe() {
    /* 只綁 UoE 選單的按鈕（級數選擇卡也用 .mode-btn，但沒有 data-part） */
    document.querySelectorAll("#uoe-picker .mode-btn[data-part]").forEach(function (b) {
      b.addEventListener("click", function () { startMock(b.dataset.part); });
    });
    $("uoe-full-mock").addEventListener("click", startFullMock);
    $("uoe-retry").addEventListener("click", function () {
      if (quiz.mode === "full") startFullMock(); else startMock(quiz.part);
    });
    $("uoe-back").addEventListener("click", function () {
      if (quiz.idx > 0 && !confirm("尚未交卷，確定要放棄本次模擬考嗎？")) return;
      backToPicker();
    });
    $("uoe-home").addEventListener("click", backToPicker);
  }
  function backToPicker() {
    $("uoe-quiz").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-picker").classList.remove("hidden");
  }

  /* ================= §4.5 Reading 模擬考 ================= */
  var RD_LABELS = {
    mc: "篇章選擇 · Multiple choice",
    gap: "段落還原 · Gapped text",
    match: "配對閱讀 · Multiple matching"
  };
  var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

  var rd = { type: null, set: null, answers: [] };

  function rdPool(type) {
    var R = window.READING;
    return (R && R[type]) ? R[type] : [];
  }
  function rdCount(type) {
    if (type === "mc") return rd.set.questions.length;
    if (type === "gap") return rd.set.answers.length;
    return rd.set.questions.length; // match
  }

  function startReading(type) {
    var pool = rdPool(type);
    if (!pool.length) { alert("此題型的題庫尚未載入，請稍後再試。"); return; }
    rd.type = type;
    rd.set = pool[Math.floor(Math.random() * pool.length)];
    rd.answers = [];
    $("rd-picker").classList.add("hidden");
    $("rd-summary").classList.add("hidden");
    $("rd-quiz").classList.remove("hidden");
    renderReading();
    updateRdProgress();
    window.scrollTo(0, 0);
  }

  function updateRdProgress() {
    var n = rdCount(rd.type);
    var done = 0;
    for (var i = 0; i < n; i++) if (rd.answers[i] !== undefined && rd.answers[i] !== null) done++;
    $("rd-progress").textContent = RD_LABELS[rd.type].split("·")[0].trim() + "  已作答 " + done + " / " + n;
  }

  /* 一列字母按鈕（單選 toggle），onPick(idx) */
  function letterRow(count, onPick) {
    var row = document.createElement("div");
    row.className = "letter-row";
    for (var i = 0; i < count; i++) {
      (function (idx) {
        var b = document.createElement("button");
        b.className = "letter-btn";
        b.textContent = LETTERS[idx];
        b.addEventListener("click", function () {
          row.querySelectorAll(".letter-btn").forEach(function (x) { x.classList.remove("selected"); });
          b.classList.add("selected");
          onPick(idx);
        });
        row.appendChild(b);
      })(i);
    }
    return row;
  }

  function renderReading() {
    var area = $("rd-area");
    area.innerHTML = "";
    var s = rd.set;
    var head = document.createElement("div");
    head.className = "card";
    head.innerHTML = "<h3>" + esc(s.title) + "</h3><p class='hint'>" + esc(RD_LABELS[rd.type]) + "</p>";
    area.appendChild(head);

    if (rd.type === "mc") {
      var passage = document.createElement("div");
      passage.className = "card rd-passage";
      passage.innerHTML = s.text.split(/\n+/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
      area.appendChild(passage);
      s.questions.forEach(function (q, qi) {
        var card = document.createElement("div");
        card.className = "card rd-q";
        card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
        q.options.forEach(function (opt, oi) {
          var b = document.createElement("button");
          b.className = "option-btn";
          b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
          b.addEventListener("click", function () {
            card.querySelectorAll(".option-btn").forEach(function (x) { x.classList.remove("selected"); });
            b.classList.add("selected");
            rd.answers[qi] = oi;
            updateRdProgress();
          });
          card.appendChild(b);
        });
        area.appendChild(card);
      });
    } else if (rd.type === "gap") {
      var n = s.answers.length;
      var art = document.createElement("div");
      art.className = "card rd-passage";
      var html = "";
      s.segments.forEach(function (seg, i) {
        html += "<p>" + esc(seg) + "</p>";
        if (i < n) html += '<p class="gap-slot">（' + (i + 1) + "）＿＿＿＿</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>選項（其中一個用不到）</h3>";
      s.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>作答</h3>";
      for (var gi = 0; gi < n; gi++) {
        (function (g) {
          var row = document.createElement("div");
          row.className = "gap-answer-row";
          var lab = document.createElement("span");
          lab.className = "gap-answer-label";
          lab.textContent = "第 " + (g + 1) + " 格";
          row.appendChild(lab);
          row.appendChild(letterRow(s.options.length, function (idx) {
            rd.answers[g] = idx;
            updateRdProgress();
          }));
          pickCard.appendChild(row);
        })(gi);
      }
      area.appendChild(pickCard);
    } else { // match
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var qCard = document.createElement("div");
      qCard.className = "card";
      qCard.innerHTML = "<h3>哪一段提到…</h3>";
      s.questions.forEach(function (q, qi) {
        var wrap = document.createElement("div");
        wrap.className = "gap-answer-row match-row";
        var lab = document.createElement("p");
        lab.className = "match-q";
        lab.innerHTML = "<strong>" + (qi + 1) + ".</strong> " + esc(q.q);
        wrap.appendChild(lab);
        wrap.appendChild(letterRow(s.sections.length, function (idx) {
          rd.answers[qi] = idx;
          updateRdProgress();
        }));
        qCard.appendChild(wrap);
      });
      area.appendChild(qCard);
    }
  }

  function rdCorrectAnswer(i) {
    var s = rd.set;
    if (rd.type === "mc") return s.questions[i].answer;
    if (rd.type === "gap") return s.answers[i];
    return s.questions[i].answer;
  }
  function rdQuestionLabel(i) {
    var s = rd.set;
    if (rd.type === "mc") return s.questions[i].q;
    if (rd.type === "gap") return "第 " + (i + 1) + " 格";
    return s.questions[i].q;
  }
  function rdAnswerText(i, idx) {
    var s = rd.set;
    if (idx === undefined || idx === null) return "（未作答）";
    if (rd.type === "mc") return LETTERS[idx] + ". " + s.questions[i].options[idx];
    if (rd.type === "gap") return LETTERS[idx] + ". " + s.options[idx];
    return LETTERS[idx] + "（" + s.sections[idx].label + "）";
  }
  function rdExplanation(i) {
    var s = rd.set;
    if (rd.type === "gap") return s.explanations[i];
    return s.questions[i].explanation;
  }

  function gradeReading() {
    var n = rdCount(rd.type);
    var unanswered = 0;
    for (var i = 0; i < n; i++) if (rd.answers[i] === undefined || rd.answers[i] === null) unanswered++;
    if (unanswered > 0 && !confirm("還有 " + unanswered + " 題未作答，確定要交卷嗎？")) return;

    var score = 0;
    var reviewHtml = "";
    var statKey = "r" + rd.type;
    for (var j = 0; j < n; j++) {
      var isCorrect = rd.answers[j] === rdCorrectAnswer(j);
      if (isCorrect) score++;
      recordResult(statKey, isCorrect);
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " 第 " + (j + 1) + " 題</div>" +
        "<p>" + esc(rdQuestionLabel(j)) + "</p>" +
        '<div class="review-ans"><strong>你的答案：</strong>' + esc(rdAnswerText(j, rd.answers[j])) + "</div>" +
        '<div class="review-ans"><strong>正確答案：</strong>' + esc(rdAnswerText(j, rdCorrectAnswer(j))) + "</div>" +
        '<div class="expl">' + esc(rdExplanation(j)) + "</div>" +
        "</div>";
    }
    var pct = Math.round(100 * score / n);
    var v = verdictFor(pct);
    $("rd-quiz").classList.add("hidden");
    $("rd-summary").classList.remove("hidden");
    $("rd-summary-title").textContent = RD_LABELS[rd.type] + " 模擬結果";
    $("rd-score").textContent = score + " / " + n + "（" + pct + "%）";
    $("rd-verdict").className = "verdict-text " + v.cls;
    $("rd-verdict").textContent = v.text;
    $("rd-review").innerHTML = reviewHtml;
    window.scrollTo(0, 0);
    saveMockRecord("reading", rd.type, score, n, pct);
  }

  function rdBackToPicker() {
    $("rd-quiz").classList.add("hidden");
    $("rd-summary").classList.add("hidden");
    $("rd-picker").classList.remove("hidden");
  }

  function initReading() {
    document.querySelectorAll("#rd-picker .mode-btn[data-rtype]").forEach(function (b) {
      b.addEventListener("click", function () { startReading(b.dataset.rtype); });
    });
    $("rd-submit").addEventListener("click", gradeReading);
    $("rd-retry").addEventListener("click", function () { startReading(rd.type); });
    $("rd-back").addEventListener("click", function () {
      if (rd.answers.length > 0 && !confirm("尚未交卷，確定要放棄本次模擬考嗎？")) return;
      rdBackToPicker();
    });
    $("rd-home").addEventListener("click", rdBackToPicker);
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
    html += "<h3 class='pg-mock-title'>Reading</h3>";
    ["mc", "gap", "match"].forEach(function (t) {
      var s = stats["r" + t];
      var label = RD_LABELS[t];
      if (!s || !s.attempted) {
        html += barRow(label, "尚未練習", 0, false);
      } else {
        var rp = Math.round(100 * s.correct / s.attempted);
        html += barRow(label,
          "答題 " + s.attempted + " · 正確率 " + rp + "% · 上次 " + fmtDate(s.last),
          rp, rp >= 80);
      }
    });

    var hist = loadJSON(K_MOCK(), []);
    if (hist.length) {
      html += '<h3 class="pg-mock-title">最近模擬考</h3><ul class="mock-history">';
      hist.slice(-8).reverse().forEach(function (m) {
        var label = m.mode === "full" ? "UoE 全卷"
          : m.mode === "reading" ? "閱讀 · " + (RD_LABELS[m.part] || m.part).split("·")[0].trim()
          : (PART_LABELS[m.part] || m.part).split("·")[0].trim();
        var cls = m.pct >= 75 ? "ok" : (m.pct >= 60 ? "mid" : "bad");
        html += '<li><span class="mh-date">' + esc(fmtDate(m.date)) + "</span>" +
          '<span class="mh-label">' + esc(label) + "</span>" +
          '<span class="mh-score ' + cls + '">' + m.score + "/" + m.max + "（" + m.pct + "%）</span></li>";
      });
      html += "</ul>";
    }
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
    safeInit("reading", initReading);
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
