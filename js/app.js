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
        try { lsStopAudio(); } catch (e) {}
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
    $("uoe-progress").textContent = PART_LABELS[item.part].split("·")[0].trim() +
      "  Question " + (quiz.idx + 1) + " / " + quiz.items.length;
    renderUoeItemInto(item, $("uoe-question"), $("uoe-answer-area"), submitAnswer);
    addSkipButton($("uoe-answer-area"));
  }

  function renderUoeItemInto(item, qBox, aBox, onAnswer) {
    var q = item.q, part = item.part;
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
        b.addEventListener("click", function () { onAnswer(i); });
        aBox.appendChild(b);
      });
    } else if (part === "part2" || part === "part3") {
      var html = "<p>" + esc(q.text) + "</p>";
      if (part === "part3") html += '<p>Stem word (change the form): <span class="stem-word">' + esc(q.stem) + "</span></p>";
      qBox.innerHTML = html;
      buildTypedInput(aBox, onAnswer);
    } else { // part4
      qBox.innerHTML =
        '<p class="original">' + esc(q.original) + "</p>" +
        '<p>Key word: <span class="kw">' + esc(q.keyword) + "</span> (must be used; " + CFG.p4min + "–" + CFG.p4max + " words in total)</p>" +
        "<p>" + esc(q.gapped) + "</p>";
      buildTypedInput(aBox, onAnswer);
    }
  }

  function buildTypedInput(container, onAnswer) {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "answer-input";
    input.autocapitalize = "off";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Type your answer…";
    var btn = document.createElement("button");
    btn.className = "primary-btn";
    btn.textContent = "Submit";
    var submit = function () {
      if (!input.value.trim()) return;
      input.disabled = true;
      btn.disabled = true;
      onAnswer(input.value);
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
    skip.textContent = "Skip this question";
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
    if (userAns === null || userAns === undefined) return "(not answered)";
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
    if (pct >= 75) return { cls: "ok", text: "✅ Pass — above the pass mark. Keep it up!" };
    if (pct >= 60) return { cls: "mid", text: "🟡 Borderline pass — just over the pass mark (~60%). Work on your weak spots." };
    return { cls: "bad", text: "❌ Below pass mark — review the material and try again." };
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
      if (!isCorrect) { try { mbAdd("uoe", { part: item.part, q: item.q }); } catch (e) {} }
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
          ' <span class="kw">[' + esc(q.keyword) + "]</span></p>";
      } else {
        stemHtml = "<p>" + esc(q.text) + "</p>";
        if (item.part === "part3") stemHtml += '<p>Stem word: <span class="stem-word">' + esc(q.stem) + "</span></p>";
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " Question " + (i + 1) +
        (pts > 1 ? '<span class="pts">' + (isCorrect ? pts : 0) + "/" + pts + " pts</span>" : "") + "</div>" +
        stemHtml +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(userAnsText(item, quiz.answers[i])) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(correctAnsText(item)) + "</div>" +
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
      ? "Full mock results (Use of English)"
      : PART_LABELS[quiz.part] + " — Mock results";
    $("uoe-score").textContent = score + " / " + max + " (" + pct + "%)";
    $("uoe-verdict").className = "verdict-text " + v.cls;
    $("uoe-verdict").innerHTML = esc(v.text) + subHtml;
    $("uoe-review").innerHTML = reviewHtml;

    var wrongCount = 0;
    quiz.items.forEach(function (item, i) { if (!gradeItem(item, quiz.answers[i])) wrongCount++; });
    var db = $("uoe-drill-btn");
    db.classList.toggle("hidden", wrongCount === 0);
    db.textContent = "Practice mistakes (" + wrongCount + ")";
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
      if (quiz.idx > 0 && !confirm("You haven't submitted yet. Abandon this mock exam?")) return;
      backToPicker();
    });
    $("uoe-home").addEventListener("click", backToPicker);
    $("uoe-drill-btn").addEventListener("click", startUoeDrill);
    $("uoe-drill-quit").addEventListener("click", function () {
      if (!confirm("Quit mistake practice and go back to the results?")) return;
      $("uoe-drill").classList.add("hidden");
      $("uoe-summary").classList.remove("hidden");
    });
    $("uoe-congrats-home").addEventListener("click", backToPicker);
  }
  function backToPicker() {
    $("uoe-quiz").classList.add("hidden");
    $("uoe-summary").classList.add("hidden");
    $("uoe-drill").classList.add("hidden");
    $("uoe-congrats").classList.add("hidden");
    $("uoe-picker").classList.remove("hidden");
  }

  /* ================= §4.7 Mistake drill ================= */
  var drill = null;

  function startDrillGeneric(cfg) {
    drill = cfg;
    drill.queue = cfg.items.slice();
    drill.total = cfg.items.length;
    drill.mastered = 0;
    $(cfg.prefix + "-summary").classList.add("hidden");
    $(cfg.prefix + "-drill").classList.remove("hidden");
    renderDrillItem();
  }

  function dropConfetti(container) {
    var card = container.querySelector(".congrats-card") || container;
    var colors = ["#e0a458", "#4ade80", "#f87171", "#7aa8ff", "#e879f9", "#facc15"];
    for (var i = 0; i < 28; i++) {
      var s = document.createElement("span");
      s.className = "confetti-piece";
      s.style.left = (Math.random() * 100) + "%";
      s.style.background = colors[i % colors.length];
      s.style.animationDelay = (Math.random() * 0.6).toFixed(2) + "s";
      card.appendChild(s);
      (function (el) { setTimeout(function () { el.remove(); }, 3600); })(s);
    }
  }

  function renderDrillItem() {
    var p = drill.prefix;
    if (!drill.queue.length) {
      $(p + "-drill").classList.add("hidden");
      $(p + "-congrats").classList.remove("hidden");
      $(p + "-congrats-text").textContent = "You have re-answered all " + drill.total +
        " mistake" + (drill.total > 1 ? "s" : "") + " correctly. Great work — keep this momentum going!";
      dropConfetti($(p + "-congrats"));
      window.scrollTo(0, 0);
      return;
    }
    $(p + "-drill-progress").textContent = "Mastered " + drill.mastered + " / " + drill.total +
      " · " + drill.queue.length + " in queue";
    $(p + "-drill-feedback").innerHTML = "";
    drill.render(drill.queue[0], drillAnswered);
    window.scrollTo(0, 0);
  }

  function drillAnswered(isCorrect, userText) {
    var p = drill.prefix;
    var item = drill.queue.shift();
    if (isCorrect) drill.mastered++;
    else drill.queue.push(item);
    $(p + "-drill-area").querySelectorAll("button, input").forEach(function (el) { el.disabled = true; });
    $(p + "-drill-progress").textContent = "Mastered " + drill.mastered + " / " + drill.total +
      " · " + drill.queue.length + " in queue";

    var fb = $(p + "-drill-feedback");
    if (isCorrect) {
      fb.innerHTML = '<div class="review-item ok"><div class="review-verdict">✓ Correct — mastered!</div></div>';
    } else {
      fb.innerHTML =
        '<div class="review-item bad">' +
        '<div class="review-verdict">✗ Not quite — this one goes back in the queue</div>' +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(userText) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(drill.correctText(item)) + "</div>" +
        '<div class="expl">' + esc(drill.explText(item)) + "</div></div>";
    }
    var btn = document.createElement("button");
    btn.className = "primary-btn";
    btn.textContent = drill.queue.length ? "Next question" : "Finish";
    btn.addEventListener("click", renderDrillItem);
    fb.appendChild(btn);
    btn.focus();
  }

  function startUoeDrill() {
    var wrong = [];
    quiz.items.forEach(function (item, i) {
      if (!gradeItem(item, quiz.answers[i])) wrong.push(item);
    });
    if (!wrong.length) return;
    startDrillGeneric({
      prefix: "uoe",
      items: wrong,
      render: renderUoeDrillItem,
      correctText: correctAnsText,
      explText: function (item) { return item.q.explanation; }
    });
  }

  function renderUoeDrillItem(item, done) {
    renderUoeItemInto(item, $("uoe-drill-question"), $("uoe-drill-area"), function (val) {
      done(gradeItem(item, val), userAnsText(item, val));
    });
  }

  function startRdDrill() {
    var wrong = [];
    for (var i = 0; i < rdCount(rd.type); i++) {
      if (rd.answers[i] !== rdCorrectAnswer(i)) wrong.push(i);
    }
    if (!wrong.length) return;
    startDrillGeneric({
      prefix: "rd",
      items: wrong,
      render: renderRdDrillItem,
      correctText: function (i) { return rdAnswerText(i, rdCorrectAnswer(i)); },
      explText: rdExplanation
    });
  }

  function renderRdDrillItem(qi, done) {
    var area = $("rd-drill-area");
    area.innerHTML = "";
    var s = rd.set;
    function pick(idx) { done(idx === rdCorrectAnswer(qi), rdAnswerText(qi, idx)); }

    if (rd.type === "mc" || rd.type === "tfng") {
      var passage = document.createElement("div");
      passage.className = "card rd-passage";
      passage.innerHTML = "<h3>" + esc(s.title) + "</h3>" +
        s.text.split(/\n+/).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
      area.appendChild(passage);
      var q = s.questions[qi];
      var card = document.createElement("div");
      card.className = "card rd-q";
      card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
      q.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () { b.classList.add("selected"); pick(oi); });
        card.appendChild(b);
      });
      area.appendChild(card);
    } else if (rd.type === "gap") {
      var n = s.answers.length;
      var art = document.createElement("div");
      art.className = "card rd-passage";
      var html = "<h3>" + esc(s.title) + "</h3>";
      s.segments.forEach(function (seg, i) {
        html += "<p>" + esc(seg) + "</p>";
        if (i < n) html += '<p class="gap-slot' + (i === qi ? " current" : "") + '">(' + (i + 1) + ") ____</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>Options (one is not needed)</h3>";
      s.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>Which option fills gap " + (qi + 1) + "?</h3>";
      pickCard.appendChild(letterRow(s.options.length, pick));
      area.appendChild(pickCard);
    } else if (rd.type === "head") {
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>Paragraph " + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var hCard = document.createElement("div");
      var hhtml = "<h3>List of headings</h3>";
      s.options.forEach(function (opt, oi) {
        hhtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      hCard.className = "card";
      hCard.innerHTML = hhtml;
      area.appendChild(hCard);
      var hqCard = document.createElement("div");
      hqCard.className = "card";
      hqCard.innerHTML = "<h3>Best heading for…</h3><p class='match-q'><strong>" +
        (qi + 1) + ".</strong> " + esc(s.questions[qi].q) + "</p>";
      hqCard.appendChild(letterRow(s.options.length, pick));
      area.appendChild(hqCard);
    } else { // match
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var qCard = document.createElement("div");
      qCard.className = "card";
      qCard.innerHTML = "<h3>Which section mentions…</h3><p class='match-q'><strong>" +
        (qi + 1) + ".</strong> " + esc(s.questions[qi].q) + "</p>";
      qCard.appendChild(letterRow(s.sections.length, pick));
      area.appendChild(qCard);
    }
  }

  /* ================= §4.5 Reading 模擬考 ================= */
  var RD_LABELS = {
    mc: "Multiple choice",
    gap: "Gapped text",
    match: "Multiple matching",
    tfng: "True / False / Not Given (IELTS)",
    head: "Matching headings (IELTS)"
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
    if (!pool.length) { alert("The question bank for this task type hasn't loaded. Please try again later."); return; }
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
    $("rd-progress").textContent = RD_LABELS[rd.type].split("·")[0].trim() + "  Answered " + done + " / " + n;
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

    if (rd.type === "mc" || rd.type === "tfng") {
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
        if (i < n) html += '<p class="gap-slot">(' + (i + 1) + ") ____</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>Options (one is not needed)</h3>";
      s.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>Your answers</h3>";
      for (var gi = 0; gi < n; gi++) {
        (function (g) {
          var row = document.createElement("div");
          row.className = "gap-answer-row";
          var lab = document.createElement("span");
          lab.className = "gap-answer-label";
          lab.textContent = "Gap " + (g + 1);
          row.appendChild(lab);
          row.appendChild(letterRow(s.options.length, function (idx) {
            rd.answers[g] = idx;
            updateRdProgress();
          }));
          pickCard.appendChild(row);
        })(gi);
      }
      area.appendChild(pickCard);
    } else if (rd.type === "head") {
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>Paragraph " + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var hCard = document.createElement("div");
      hCard.className = "card";
      var hhtml = "<h3>List of headings (" + (s.options.length - s.questions.length) + " are not needed)</h3>";
      s.options.forEach(function (opt, oi) {
        hhtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      hCard.innerHTML = hhtml;
      area.appendChild(hCard);
      var hqCard = document.createElement("div");
      hqCard.className = "card";
      hqCard.innerHTML = "<h3>Choose the best heading for each paragraph</h3>";
      s.questions.forEach(function (q, qi) {
        var wrap = document.createElement("div");
        wrap.className = "gap-answer-row match-row";
        var lab = document.createElement("p");
        lab.className = "match-q";
        lab.innerHTML = "<strong>" + (qi + 1) + ".</strong> " + esc(q.q);
        wrap.appendChild(lab);
        wrap.appendChild(letterRow(s.options.length, function (idx) {
          rd.answers[qi] = idx;
          updateRdProgress();
        }));
        hqCard.appendChild(wrap);
      });
      area.appendChild(hqCard);
    } else { // match
      s.sections.forEach(function (sec) {
        var card = document.createElement("div");
        card.className = "card rd-passage";
        card.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(card);
      });
      var qCard = document.createElement("div");
      qCard.className = "card";
      qCard.innerHTML = "<h3>Which section mentions…</h3>";
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
    if (rd.type === "gap") return "Gap " + (i + 1);
    return s.questions[i].q;
  }
  function rdAnswerText(i, idx) {
    var s = rd.set;
    if (idx === undefined || idx === null) return "(not answered)";
    if (rd.type === "mc" || rd.type === "tfng") return LETTERS[idx] + ". " + s.questions[i].options[idx];
    if (rd.type === "gap" || rd.type === "head") return LETTERS[idx] + ". " + s.options[idx];
    return LETTERS[idx] + " (" + s.sections[idx].label + ")";
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
    if (unanswered > 0 && !confirm(unanswered + " question(s) still unanswered. Submit anyway?")) return;

    var score = 0;
    var reviewHtml = "";
    var statKey = "r" + rd.type;
    for (var j = 0; j < n; j++) {
      var isCorrect = rd.answers[j] === rdCorrectAnswer(j);
      if (isCorrect) score++;
      recordResult(statKey, isCorrect);
      if (!isCorrect) {
        try {
          var s0 = rd.set;
          if (rd.type === "mc") {
            mbAdd("rmc", { title: s0.title, text: s0.text, q: s0.questions[j] });
          } else if (rd.type === "tfng") {
            mbAdd("rtfng", { title: s0.title, text: s0.text, q: s0.questions[j] });
          } else if (rd.type === "head") {
            mbAdd("rhead", { title: s0.title, sections: s0.sections, options: s0.options,
              q: s0.questions[j].q, answer: s0.questions[j].answer, explanation: s0.questions[j].explanation });
          } else if (rd.type === "gap") {
            mbAdd("rgap", { title: s0.title, segments: s0.segments, options: s0.options,
              gapCount: s0.answers.length, gapIndex: j, answer: s0.answers[j], explanation: s0.explanations[j] });
          } else {
            mbAdd("rmatch", { title: s0.title, sections: s0.sections, q: s0.questions[j].q,
              answer: s0.questions[j].answer, explanation: s0.questions[j].explanation });
          }
        } catch (e) {}
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " Question " + (j + 1) + "</div>" +
        "<p>" + esc(rdQuestionLabel(j)) + "</p>" +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(rdAnswerText(j, rd.answers[j])) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(rdAnswerText(j, rdCorrectAnswer(j))) + "</div>" +
        '<div class="expl">' + esc(rdExplanation(j)) + "</div>" +
        "</div>";
    }
    var pct = Math.round(100 * score / n);
    var v = verdictFor(pct);
    $("rd-quiz").classList.add("hidden");
    $("rd-summary").classList.remove("hidden");
    $("rd-summary-title").textContent = RD_LABELS[rd.type] + " — Mock results";
    $("rd-score").textContent = score + " / " + n + " (" + pct + "%)";
    $("rd-verdict").className = "verdict-text " + v.cls;
    $("rd-verdict").textContent = v.text;
    $("rd-review").innerHTML = reviewHtml;

    var wrongCount = n - score;
    var db = $("rd-drill-btn");
    db.classList.toggle("hidden", wrongCount === 0);
    db.textContent = "Practice mistakes (" + wrongCount + ")";
    window.scrollTo(0, 0);
    saveMockRecord("reading", rd.type, score, n, pct);
  }

  function rdBackToPicker() {
    $("rd-quiz").classList.add("hidden");
    $("rd-summary").classList.add("hidden");
    $("rd-drill").classList.add("hidden");
    $("rd-congrats").classList.add("hidden");
    $("rd-picker").classList.remove("hidden");
  }

  function initReading() {
    document.querySelectorAll("#rd-picker .mode-btn[data-rtype]").forEach(function (b) {
      b.addEventListener("click", function () { startReading(b.dataset.rtype); });
    });
    $("rd-submit").addEventListener("click", gradeReading);
    $("rd-retry").addEventListener("click", function () { startReading(rd.type); });
    $("rd-back").addEventListener("click", function () {
      if (rd.answers.length > 0 && !confirm("You haven't submitted yet. Abandon this mock exam?")) return;
      rdBackToPicker();
    });
    $("rd-home").addEventListener("click", rdBackToPicker);
    $("rd-drill-btn").addEventListener("click", startRdDrill);
    $("rd-drill-quit").addEventListener("click", function () {
      if (!confirm("Quit mistake practice and go back to the results?")) return;
      $("rd-drill").classList.add("hidden");
      $("rd-summary").classList.remove("hidden");
    });
    $("rd-congrats-home").addEventListener("click", rdBackToPicker);
  }

  /* ================= §4.8 Listening 模擬考 ================= */
  var LS_LABELS = { monologue: "Monologue", dialogue: "Dialogue" };
  var ls = { set: null, answers: [], playsUsed: 0, playing: false, queue: [], drillMode: false };

  function lsPool(kind) {
    var L = window.LISTENING || [];
    return L.filter(function (s) { return s.kind === kind; });
  }

  function lsVoices() {
    var vs = (window.speechSynthesis ? speechSynthesis.getVoices() : [])
      .filter(function (v) { return /^en(-|_)/i.test(v.lang) || v.lang === "en"; });
    var gb = vs.filter(function (v) { return /GB|UK/i.test(v.lang + v.name); });
    return { a: gb[0] || vs[0] || null, b: gb[1] || vs[1] || gb[0] || vs[0] || null };
  }

  /* 把 script 切成 utterance 清單；dialogue 依 "Name:" 行首交替兩個聲音 */
  function lsBuildQueue(set, rate) {
    var voices = lsVoices();
    var speakers = {};
    var order = 0;
    return set.script.split(/\n+/).filter(Boolean).map(function (line) {
      var m = set.kind === "dialogue" ? line.match(/^([A-Z][\w]*):\s*(.*)$/) : null;
      var text = m ? m[2] : line;
      var who = m ? m[1] : "_";
      if (!(who in speakers)) speakers[who] = order++;
      var u = new SpeechSynthesisUtterance(text);
      u.rate = rate;
      var second = speakers[who] % 2 === 1;
      var v = second ? voices.b : voices.a;
      if (v) u.voice = v;
      if (second && voices.a === voices.b) u.pitch = 0.8;
      return u;
    });
  }

  function lsStopAudio() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    ls.playing = false;
    ls.queue = [];
    var b = $("ls-play");
    if (b) b.textContent = "▶ Play";
    lsUpdatePlays();
  }

  function lsUpdatePlays() {
    var left = 2 - ls.playsUsed;
    $("ls-plays").textContent = ls.drillMode
      ? "Practice mode — unlimited replays"
      : (left > 0 ? "Plays remaining: " + left + " / 2" : "No plays left — answer from memory");
    $("ls-play").disabled = ls.playing || (!ls.drillMode && left <= 0);
  }

  function lsPlay() {
    if (!window.speechSynthesis) { alert("This browser does not support speech synthesis."); return; }
    if (ls.playing) return;
    var rate = parseFloat($("ls-rate").value) || 1;
    ls.queue = lsBuildQueue(ls.set, rate);
    ls.playing = true;
    if (!ls.drillMode) ls.playsUsed++;
    $("ls-play").textContent = "Playing…";
    lsUpdatePlays();
    var i = 0;
    (function next() {
      if (!ls.playing || i >= ls.queue.length) {
        ls.playing = false;
        $("ls-play").textContent = "▶ Play again";
        lsUpdatePlays();
        return;
      }
      var u = ls.queue[i++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    })();
  }
  function startListening(kind) {
    var pool = lsPool(kind);
    if (!pool.length) { alert("The question bank for this task type hasn't loaded. Please try again later."); return; }
    ls.set = pool[Math.floor(Math.random() * pool.length)];
    ls.answers = [];
    ls.playsUsed = 0;
    ls.drillMode = false;
    lsStopAudio();
    $("ls-picker").classList.add("hidden");
    $("ls-summary").classList.add("hidden");
    $("ls-quiz").classList.remove("hidden");
    $("ls-title").textContent = ls.set.title;
    $("ls-play").textContent = "▶ Play";
    renderListening();
    lsUpdatePlays();
    updateLsProgress();
    window.scrollTo(0, 0);
  }

  function updateLsProgress() {
    var n = ls.set.questions.length;
    var done = 0;
    for (var i = 0; i < n; i++) if (ls.answers[i] !== undefined && ls.answers[i] !== null) done++;
    $("ls-progress").textContent = LS_LABELS[ls.set.kind] + "  Answered " + done + " / " + n;
  }

  function renderListening() {
    var area = $("ls-area");
    area.innerHTML = "";
    ls.set.questions.forEach(function (q, qi) {
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
          ls.answers[qi] = oi;
          updateLsProgress();
        });
        card.appendChild(b);
      });
      area.appendChild(card);
    });
  }

  function lsAnswerText(qi, idx) {
    if (idx === undefined || idx === null) return "(not answered)";
    return LETTERS[idx] + ". " + ls.set.questions[qi].options[idx];
  }

  function gradeListening() {
    var qs = ls.set.questions, n = qs.length;
    var unanswered = 0;
    for (var i = 0; i < n; i++) if (ls.answers[i] === undefined || ls.answers[i] === null) unanswered++;
    if (unanswered > 0 && !confirm(unanswered + " question(s) still unanswered. Submit anyway?")) return;
    lsStopAudio();

    var score = 0, reviewHtml = "";
    for (var j = 0; j < n; j++) {
      var isCorrect = ls.answers[j] === qs[j].answer;
      if (isCorrect) score++;
      recordResult("lis", isCorrect);
      if (!isCorrect) {
        try { mbAdd("lis", { title: ls.set.title, kind: ls.set.kind, script: ls.set.script, q: qs[j] }); } catch (e) {}
      }
      reviewHtml +=
        '<div class="review-item ' + (isCorrect ? "ok" : "bad") + '">' +
        '<div class="review-verdict">' + (isCorrect ? "✓" : "✗") + " Question " + (j + 1) + "</div>" +
        "<p>" + esc(qs[j].q) + "</p>" +
        '<div class="review-ans"><strong>Your answer: </strong>' + esc(lsAnswerText(j, ls.answers[j])) + "</div>" +
        '<div class="review-ans"><strong>Correct answer: </strong>' + esc(lsAnswerText(j, qs[j].answer)) + "</div>" +
        '<div class="expl">' + esc(qs[j].explanation) + "</div>" +
        "</div>";
    }
    var pct = Math.round(100 * score / n);
    var v = verdictFor(pct);
    $("ls-quiz").classList.add("hidden");
    $("ls-summary").classList.remove("hidden");
    $("ls-summary-title").textContent = LS_LABELS[ls.set.kind] + " — Mock results";
    $("ls-score").textContent = score + " / " + n + " (" + pct + "%)";
    $("ls-verdict").className = "verdict-text " + v.cls;
    $("ls-verdict").textContent = v.text;
    $("ls-review").innerHTML = reviewHtml;

    var wrongCount = n - score;
    var db = $("ls-drill-btn");
    db.classList.toggle("hidden", wrongCount === 0);
    db.textContent = "Practice mistakes (" + wrongCount + ")";
    window.scrollTo(0, 0);
    saveMockRecord("listening", ls.set.kind, score, n, pct);
  }

  function startLsDrill() {
    var wrong = [];
    ls.set.questions.forEach(function (q, i) { if (ls.answers[i] !== q.answer) wrong.push(i); });
    if (!wrong.length) return;
    ls.drillMode = true;
    startDrillGeneric({
      prefix: "ls",
      items: wrong,
      render: renderLsDrillItem,
      correctText: function (i) { return lsAnswerText(i, ls.set.questions[i].answer); },
      explText: function (i) { return ls.set.questions[i].explanation; }
    });
  }

  function renderLsDrillItem(qi, done) {
    var area = $("ls-drill-area");
    area.innerHTML = "";
    var q = ls.set.questions[qi];
    var player = document.createElement("div");
    player.className = "card center";
    var rp = document.createElement("button");
    rp.className = "ghost-btn small";
    rp.textContent = "🔊 Replay recording";
    rp.addEventListener("click", function () { lsStopAudio(); lsDrillReplay(); });
    player.appendChild(rp);
    area.appendChild(player);

    var card = document.createElement("div");
    card.className = "card rd-q";
    card.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
    q.options.forEach(function (opt, oi) {
      var b = document.createElement("button");
      b.className = "option-btn";
      b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
      b.addEventListener("click", function () {
        lsStopAudio();
        b.classList.add("selected");
        done(oi === q.answer, lsAnswerText(qi, oi));
      });
      card.appendChild(b);
    });
    area.appendChild(card);
  }

  function lsDrillReplay() {
    if (!window.speechSynthesis) return;
    var queue = lsBuildQueue(ls.set, parseFloat($("ls-rate").value) || 1);
    var i = 0;
    (function next() {
      if (i >= queue.length) return;
      var u = queue[i++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    })();
  }

  function lsBackToPicker() {
    lsStopAudio();
    $("ls-quiz").classList.add("hidden");
    $("ls-summary").classList.add("hidden");
    $("ls-drill").classList.add("hidden");
    $("ls-congrats").classList.add("hidden");
    $("ls-picker").classList.remove("hidden");
  }

  function initListening() {
    document.querySelectorAll("#ls-picker .mode-btn[data-lkind]").forEach(function (b) {
      b.addEventListener("click", function () { startListening(b.dataset.lkind); });
    });
    $("ls-play").addEventListener("click", lsPlay);
    $("ls-stop").addEventListener("click", lsStopAudio);
    $("ls-submit").addEventListener("click", gradeListening);
    $("ls-retry").addEventListener("click", function () { startListening(ls.set.kind); });
    $("ls-back").addEventListener("click", function () {
      if (ls.answers.length > 0 && !confirm("You haven't submitted yet. Abandon this mock exam?")) return;
      lsBackToPicker();
    });
    $("ls-home").addEventListener("click", lsBackToPicker);
    $("ls-drill-btn").addEventListener("click", startLsDrill);
    $("ls-drill-quit").addEventListener("click", function () {
      if (!confirm("Quit mistake practice and go back to the results?")) return;
      lsStopAudio();
      $("ls-drill").classList.add("hidden");
      $("ls-summary").classList.remove("hidden");
    });
    $("ls-congrats-home").addEventListener("click", lsBackToPicker);
    /* Chrome 需要先觸發 getVoices 才會載入聲音清單 */
    if (window.speechSynthesis) speechSynthesis.getVoices();
  }

  /* ================= §4.9 長期錯題本 (Leitner spaced repetition) ================= */
  var K_MB = function () { return LEVEL + ".mistake_book"; };
  var MB_CAP = 200, MB_SESSION_CAP = 20;
  var mbReviewedThisSession = {};

  function mbLoad() { return loadJSON(K_MB(), []); }
  function mbSave(book) { saveJSON(K_MB(), book); }

  function mbKey(kind, payload) {
    if (kind === "uoe") return "uoe|" + payload.part + "|" + (payload.q.text || payload.q.original || "");
    if (kind === "rmc") return "rmc|" + payload.title + "|" + payload.q.q;
    if (kind === "rtfng") return "rtfng|" + payload.title + "|" + payload.q.q;
    if (kind === "rgap") return "rgap|" + payload.title + "|" + payload.gapIndex;
    if (kind === "rmatch") return "rmatch|" + payload.title + "|" + payload.q;
    if (kind === "rhead") return "rhead|" + payload.title + "|" + payload.q;
    return "lis|" + payload.title + "|" + payload.q.q;
  }

  /* 答錯即收進錯題本；已存在則重設回盒1 */
  function mbAdd(kind, payload) {
    var book = mbLoad();
    var key = mbKey(kind, payload);
    var now = Date.now();
    for (var i = 0; i < book.length; i++) {
      if (book[i].key === key) {
        book[i].box = 1;
        book[i].last = now;
        book[i].payload = payload;
        mbSave(book);
        return;
      }
    }
    book.push({ key: key, kind: kind, payload: payload, box: 1, last: now, added: now });
    if (book.length > MB_CAP) book = book.slice(book.length - MB_CAP);
    mbSave(book);
  }

  function mbDueEntries() {
    var now = Date.now();
    return mbLoad().filter(function (e) { return leitnerIsDue(e, now); });
  }

  /* 每個 session 只依「第一次作答」升降盒；盒3 答對 → 畢業移除 */
  function mbReview(key, isCorrect) {
    if (mbReviewedThisSession[key]) return;
    mbReviewedThisSession[key] = true;
    var book = mbLoad();
    for (var i = 0; i < book.length; i++) {
      if (book[i].key !== key) continue;
      if (isCorrect && book[i].box >= 3) {
        book.splice(i, 1);
      } else {
        var st = leitnerReview(book[i], isCorrect, Date.now());
        book[i].box = st.box;
        book[i].last = st.last;
      }
      break;
    }
    mbSave(book);
  }

  function mbCorrectText(e) {
    var p = e.payload;
    if (e.kind === "uoe") return correctAnsText({ part: p.part, q: p.q });
    if (e.kind === "rmc" || e.kind === "rtfng" || e.kind === "lis") return LETTERS[p.q.answer] + ". " + p.q.options[p.q.answer];
    if (e.kind === "rgap" || e.kind === "rhead") return LETTERS[p.answer] + ". " + p.options[p.answer];
    return LETTERS[p.answer] + " (" + p.sections[p.answer].label + ")";
  }

  function mbExplText(e) {
    var p = e.payload;
    if (e.kind === "rgap" || e.kind === "rmatch" || e.kind === "rhead") return p.explanation;
    return p.q.explanation;
  }

  function mbStopAudio() {
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
  }

  function mbReplay(p) {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    var queue = lsBuildQueue({ script: p.script, kind: p.kind }, 1);
    var i = 0;
    (function next() {
      if (i >= queue.length) return;
      var u = queue[i++];
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    })();
  }

  function renderMbDrillItem(e, done) {
    var area = $("mb-drill-area");
    area.innerHTML = "";
    var p = e.payload;

    function answered(isCorrect, userText) {
      mbStopAudio();
      mbReview(e.key, isCorrect);
      done(isCorrect, userText);
    }

    if (e.kind === "uoe") {
      var qBox = document.createElement("div");
      qBox.className = "card";
      var aBox = document.createElement("div");
      area.appendChild(qBox);
      area.appendChild(aBox);
      var item = { part: p.part, q: p.q };
      renderUoeItemInto(item, qBox, aBox, function (val) {
        answered(gradeItem(item, val), userAnsText(item, val));
      });
    } else if (e.kind === "rmc" || e.kind === "rtfng") {
      var passage = document.createElement("div");
      passage.className = "card rd-passage";
      passage.innerHTML = "<h3>" + esc(p.title) + "</h3>" +
        p.text.split(/\n+/).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
      area.appendChild(passage);
      var card = document.createElement("div");
      card.className = "card rd-q";
      card.innerHTML = "<p>" + esc(p.q.q) + "</p>";
      p.q.options.forEach(function (opt, oi) {
        var b = document.createElement("button");
        b.className = "option-btn";
        b.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        b.addEventListener("click", function () {
          b.classList.add("selected");
          answered(oi === p.q.answer, LETTERS[oi] + ". " + p.q.options[oi]);
        });
        card.appendChild(b);
      });
      area.appendChild(card);
    } else if (e.kind === "rgap") {
      var art = document.createElement("div");
      art.className = "card rd-passage";
      var html = "<h3>" + esc(p.title) + "</h3>";
      p.segments.forEach(function (seg, i) {
        html += "<p>" + esc(seg) + "</p>";
        if (i < p.gapCount) html += '<p class="gap-slot' + (i === p.gapIndex ? " current" : "") + '">(' + (i + 1) + ") ____</p>";
      });
      art.innerHTML = html;
      area.appendChild(art);

      var optCard = document.createElement("div");
      optCard.className = "card";
      var ohtml = "<h3>Options (one is not needed)</h3>";
      p.options.forEach(function (opt, oi) {
        ohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      optCard.innerHTML = ohtml;
      area.appendChild(optCard);

      var pickCard = document.createElement("div");
      pickCard.className = "card";
      pickCard.innerHTML = "<h3>Which option fills gap " + (p.gapIndex + 1) + "?</h3>";
      pickCard.appendChild(letterRow(p.options.length, function (idx) {
        answered(idx === p.answer, LETTERS[idx] + ". " + p.options[idx]);
      }));
      area.appendChild(pickCard);
    } else if (e.kind === "rhead") {
      p.sections.forEach(function (sec) {
        var hc = document.createElement("div");
        hc.className = "card rd-passage";
        hc.innerHTML = "<h3>Paragraph " + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(hc);
      });
      var hoCard = document.createElement("div");
      hoCard.className = "card";
      var hohtml = "<h3>List of headings</h3>";
      p.options.forEach(function (opt, oi) {
        hohtml += '<p class="rd-opt"><strong>' + LETTERS[oi] + ".</strong> " + esc(opt) + "</p>";
      });
      hoCard.innerHTML = hohtml;
      area.appendChild(hoCard);
      var hqCard = document.createElement("div");
      hqCard.className = "card";
      hqCard.innerHTML = "<h3>Best heading for…</h3><p class='match-q'>" + esc(p.q) + "</p>";
      hqCard.appendChild(letterRow(p.options.length, function (idx) {
        answered(idx === p.answer, LETTERS[idx] + ". " + p.options[idx]);
      }));
      area.appendChild(hqCard);
    } else if (e.kind === "rmatch") {
      p.sections.forEach(function (sec) {
        var sc = document.createElement("div");
        sc.className = "card rd-passage";
        sc.innerHTML = "<h3>" + esc(sec.label) + "</h3><p>" + esc(sec.text) + "</p>";
        area.appendChild(sc);
      });
      var qCard = document.createElement("div");
      qCard.innerHTML = "<h3>Which section mentions…</h3><p class='match-q'>" + esc(p.q) + "</p>";
      qCard.className = "card";
      qCard.appendChild(letterRow(p.sections.length, function (idx) {
        answered(idx === p.answer, LETTERS[idx] + " (" + p.sections[idx].label + ")");
      }));
      area.appendChild(qCard);
    } else { // lis
      var player = document.createElement("div");
      player.className = "card center";
      var rp = document.createElement("button");
      rp.className = "ghost-btn small";
      rp.textContent = "🔊 Replay recording";
      rp.addEventListener("click", function () { mbReplay(p); });
      player.appendChild(rp);
      area.appendChild(player);

      var lcard = document.createElement("div");
      lcard.className = "card rd-q";
      lcard.innerHTML = "<p>" + esc(p.q.q) + "</p>";
      p.q.options.forEach(function (opt, oi) {
        var lb = document.createElement("button");
        lb.className = "option-btn";
        lb.innerHTML = "<strong>" + LETTERS[oi] + "</strong>&nbsp; " + esc(opt);
        lb.addEventListener("click", function () {
          lb.classList.add("selected");
          answered(oi === p.q.answer, LETTERS[oi] + ". " + p.q.options[oi]);
        });
        lcard.appendChild(lb);
      });
      area.appendChild(lcard);
    }
  }

  function startMbDrill() {
    var due = mbDueEntries();
    if (!due.length) return;
    mbReviewedThisSession = {};
    startDrillGeneric({
      prefix: "mb",
      items: shuffle(due).slice(0, MB_SESSION_CAP),
      render: renderMbDrillItem,
      correctText: mbCorrectText,
      explText: mbExplText
    });
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
    var wrTimer = makeCountdown($("wr-timer"), function () { alert("Time's up!"); });
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
        '<span class="badge">' + (typeof p.part === "number" ? "Part " + p.part : esc(String(p.part))) + " · " + esc(p.type) + "</span>";

      var body = document.createElement("div");
      body.className = "wr-body hidden";

      var bodyHtml = "<p>" + esc(p.task) + "</p>";
      if (p.texts) {
        p.texts.forEach(function (t, i) {
          bodyHtml += "<blockquote><strong>Text " + (i + 1) + ".</strong> " + esc(t) + "</blockquote>";
        });
      }
      bodyHtml += "<h4>Target length</h4><p>" + esc(p.length) + "</p>";
      bodyHtml += "<h4>Marking checklist</h4><ul>";
      p.checklist.forEach(function (c) { bodyHtml += "<li>" + esc(c) + "</li>"; });
      bodyHtml += "</ul>";
      bodyHtml += '<h4>Model</h4><p class="model">' + esc(p.model) + "</p>";
      bodyHtml += "<h4>Draft (auto-saved)</h4>";
      body.innerHTML = bodyHtml;

      var ta = document.createElement("textarea");
      ta.className = "wr-draft";
      ta.placeholder = "Draft your answer here…";
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

      var fb = document.createElement("button");
      fb.className = "ghost-btn small wr-ai-btn";
      fb.textContent = "📋 Copy for AI feedback";
      fb.addEventListener("click", function () {
        var essay = ta.value.trim();
        if (!essay) { alert("Write your draft first, then copy it for feedback."); return; }
        var isIelts = typeof p.part !== "number";
        var msg = (isIelts
          ? "Please grade this IELTS Writing Task 1 answer using the official IELTS band descriptors " +
            "(Task Achievement / Coherence & Cohesion / Lexical Resource / Grammatical Range & Accuracy, band 0\u20139). "
          : "Please grade this " + LEVEL.toUpperCase() + " Writing answer using the official Cambridge assessment scales " +
            "(Content / Communicative Achievement / Organisation / Language, each 0\u20135). ") +
          "Give a band per criterion, an overall verdict, and 3 concrete improvements with rewritten examples.\n\n" +
          "Task: " + p.title + " (" + (isIelts ? String(p.part) : "Part " + p.part) + " \u00b7 " + p.type + ")\n" +
          p.task + "\nTarget length: " + p.length + "\n\n" +
          "My answer (" + countWords(essay) + " words):\n" + essay;
        var done = function () { fb.textContent = "\u2713 Copied — paste it to your AI chat"; setTimeout(function () { fb.textContent = "\ud83d\udccb Copy for AI feedback"; }, 3000); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(msg).then(done, function () { fallbackCopy(msg); done(); });
        } else { fallbackCopy(msg); done(); }
      });
      body.appendChild(fb);

      head.addEventListener("click", function () { body.classList.toggle("hidden"); });
      wrap.appendChild(head);
      wrap.appendChild(body);
      list.appendChild(wrap);
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ================= §6 Speaking ================= */
  /* Part 1 interview 題庫（各級通用的個人性問題） */
  var SP_INTERVIEW = [
    "Where are you from, and what do you like most about living there?",
    "What do you enjoy doing in your free time?",
    "Do you prefer spending time alone or with other people? Why?",
    "What kind of music do you listen to, and has your taste changed over the years?",
    "Tell me about a place you would like to visit one day.",
    "What did you enjoy studying at school, and why?",
    "How important is it for you to keep in touch with old friends?",
    "Do you prefer reading books or watching films? Why?",
    "What is your favourite time of year, and what makes it special?",
    "How do you usually celebrate special occasions with your family?",
    "What piece of technology could you not live without, and why?",
    "Would you rather live in a big city or in the countryside? Why?",
    "What is something new you have learned recently?",
    "How do you like to stay healthy?",
    "Tell me about a person who has influenced you.",
    "Do you think you will still live in the same place in ten years' time?",
    "What kind of food do you enjoy, and do you like cooking?",
    "How do you usually plan your weekends?",
    "What was the last thing that made you laugh a lot?",
    "If you had more free time, how would you spend it?",
    "Do you enjoy travelling? What do you get out of it?",
    "How has the area where you live changed in recent years?",
    "What ambitions do you have for the next few years?",
    "Do you work better in the morning or in the evening? Why?"
  ];
  var SP_EVAL_ITEMS = [
    "I extended every answer beyond yes/no (2–3 sentences)",
    "I gave concrete examples or reasons",
    "I kept going without long silences",
    "I used a range of vocabulary, not just simple words",
    "I sounded natural, not memorised"
  ];

  function initInterview() {
    var run = { qs: [], idx: 0 };
    var timer = makeCountdown($("sp-int-timer"), null);

    function speakQ(text) {
      if (!window.speechSynthesis) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      var vs = lsVoices();
      if (vs.a) u.voice = vs.a;
      u.onend = function () { timer.set(45); timer.start(); };
      speechSynthesis.speak(u);
    }

    function showQ() {
      $("sp-int-progress").textContent = "Question " + (run.idx + 1) + " / " + run.qs.length;
      $("sp-int-q").textContent = run.qs[run.idx];
      $("sp-int-next").textContent = run.idx === run.qs.length - 1 ? "Finish" : "Next question";
      timer.pause();
      timer.set(45);
      speakQ(run.qs[run.idx]);
    }

    function stopAll() {
      try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
      timer.pause();
    }

    $("sp-int-start").addEventListener("click", function () {
      run.qs = shuffle(SP_INTERVIEW).slice(0, 4);
      run.idx = 0;
      $("sp-int-card").classList.add("hidden");
      $("sp-int-eval").classList.add("hidden");
      $("sp-int-run").classList.remove("hidden");
      showQ();
    });
    $("sp-int-repeat").addEventListener("click", function () { timer.pause(); speakQ(run.qs[run.idx]); });
    $("sp-int-next").addEventListener("click", function () {
      run.idx += 1;
      if (run.idx >= run.qs.length) {
        stopAll();
        $("sp-int-run").classList.add("hidden");
        var list = $("sp-int-eval-list");
        list.innerHTML = "";
        SP_EVAL_ITEMS.forEach(function (t) {
          var lab = document.createElement("label");
          lab.className = "sp-eval-item";
          var cb = document.createElement("input");
          cb.type = "checkbox";
          lab.appendChild(cb);
          lab.appendChild(document.createTextNode(" " + t));
          list.appendChild(lab);
        });
        $("sp-int-eval").classList.remove("hidden");
      } else {
        showQ();
      }
    });
    $("sp-int-quit").addEventListener("click", function () {
      stopAll();
      $("sp-int-run").classList.add("hidden");
      $("sp-int-card").classList.remove("hidden");
    });
    $("sp-int-done").addEventListener("click", function () {
      var boxes = $("sp-int-eval-list").querySelectorAll("input");
      var ticked = 0;
      boxes.forEach(function (b) { if (b.checked) ticked++; });
      $("sp-int-eval").classList.add("hidden");
      $("sp-int-card").classList.remove("hidden");
      alert(ticked >= 4 ? "Strong interview — " + ticked + "/5. Keep that consistency!"
        : "You ticked " + ticked + "/5. Pick one unticked habit and make it your focus next round.");
    });
  }

  function initSpeaking() {
    initInterview();
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
      statusEl.innerHTML = "<p>🎉 No cards due today.</p>";
      $("vb-card-wrap").classList.add("hidden");
      return;
    }
    statusEl.innerHTML = "<p>Cards due: <strong>" + due + "</strong> / " + VOCAB.length + "</p>";
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
      $("vb-status").innerHTML = "<p>✅ Review session complete!</p>";
      return;
    }
    var st = getVocabState();
    var box = st[c.front].box;
    $("vb-card").classList.remove("flipped");
    $("vb-front").innerHTML =
      '<div class="word">' + esc(c.front) + "</div>" +
      '<div class="pos">' + esc(c.pos) + "</div>" +
      '<div class="vb-boxtag">Box ' + box + "</div>";
    $("vb-back").innerHTML =
      '<div class="def"><strong>Definition:</strong> ' + esc(c.def) + "</div>" +
      '<div class="ex">' + esc(c.example) + "</div>";
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
      $("vb-status").innerHTML = "<p>Remaining this session: <strong>" + remaining + "</strong></p>";
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

  /* ---------- §8.1 弱點儀表板 ---------- */
  var WK_AREAS = [
    { id: "part1", stat: "part1", paper: "uoe", label: "UoE P1 · MC cloze",
      hist: function (m) { return m.mode === "single" && m.part === "part1"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part1"; } },
    { id: "part2", stat: "part2", paper: "uoe", label: "UoE P2 · Open cloze",
      hist: function (m) { return m.mode === "single" && m.part === "part2"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part2"; } },
    { id: "part3", stat: "part3", paper: "uoe", label: "UoE P3 · Word formation",
      hist: function (m) { return m.mode === "single" && m.part === "part3"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part3"; } },
    { id: "part4", stat: "part4", paper: "uoe", label: "UoE P4 · Key word transformations",
      hist: function (m) { return m.mode === "single" && m.part === "part4"; },
      mb: function (e) { return e.kind === "uoe" && e.payload.part === "part4"; } },
    { id: "rmc", stat: "rmc", paper: "reading", label: "Reading · Multiple choice",
      hist: function (m) { return m.mode === "reading" && m.part === "mc"; },
      mb: function (e) { return e.kind === "rmc"; } },
    { id: "rgap", stat: "rgap", paper: "reading", label: "Reading · Gapped text",
      hist: function (m) { return m.mode === "reading" && m.part === "gap"; },
      mb: function (e) { return e.kind === "rgap"; } },
    { id: "rmatch", stat: "rmatch", paper: "reading", label: "Reading · Multiple matching",
      hist: function (m) { return m.mode === "reading" && m.part === "match"; },
      mb: function (e) { return e.kind === "rmatch"; } },
    { id: "rtfng", stat: "rtfng", paper: "reading", label: "Reading · T/F/Not Given (IELTS)",
      hist: function (m) { return m.mode === "reading" && m.part === "tfng"; },
      mb: function (e) { return e.kind === "rtfng"; } },
    { id: "rhead", stat: "rhead", paper: "reading", label: "Reading · Matching headings (IELTS)",
      hist: function (m) { return m.mode === "reading" && m.part === "head"; },
      mb: function (e) { return e.kind === "rhead"; } },
    { id: "lis", stat: "lis", paper: "listening", label: "Listening",
      hist: function (m) { return m.mode === "listening"; },
      mb: function (e) { return e.kind === "lis"; } }
  ];

  function wkTrend(pcts) {
    if (pcts.length < 4) return null;
    var recent = pcts.slice(-2), earlier = pcts.slice(-4, -2);
    var avg = function (a) { return a.reduce(function (x, y) { return x + y; }, 0) / a.length; };
    var diff = avg(recent) - avg(earlier);
    if (diff >= 5) return { arrow: "↑", cls: "ok", text: "improving" };
    if (diff <= -5) return { arrow: "↓", cls: "bad", text: "declining" };
    return { arrow: "→", cls: "mid", text: "steady" };
  }

  function renderWeakness() {
    var el = $("pg-weakness");
    if (!el) return;
    var stats = loadJSON(K_STATS, {});
    var hist = loadJSON(K_MOCK(), []);
    var book = mbLoad();

    var rows = [];
    WK_AREAS.forEach(function (a) {
      var s = stats[a.stat];
      if (!s || !s.attempted) return;
      var acc = Math.round(100 * s.correct / s.attempted);
      var pcts = hist.filter(a.hist).map(function (m) { return m.pct; });
      rows.push({
        area: a, acc: acc, attempted: s.attempted,
        trend: wkTrend(pcts),
        recent: pcts.slice(-5),
        mbCount: book.filter(a.mb).length
      });
    });

    if (rows.length < 2) {
      el.innerHTML = "<h3>Weakness dashboard</h3><p class='hint'>Complete a few mock exams across different task types and your weak spots will show up here.</p>";
      return;
    }

    /* 預估總分：各 paper 取最近 5 次 mock 平均，再取有資料 paper 的平均 */
    var papers = { uoe: [], reading: [], listening: [] };
    hist.forEach(function (m) {
      var paper = (m.mode === "reading") ? "reading" : (m.mode === "listening") ? "listening" : "uoe";
      papers[paper].push(m.pct);
    });
    var paperAvgs = [];
    Object.keys(papers).forEach(function (k) {
      var p = papers[k].slice(-5);
      if (p.length) paperAvgs.push(p.reduce(function (x, y) { return x + y; }, 0) / p.length);
    });
    var predicted = Math.round(paperAvgs.reduce(function (x, y) { return x + y; }, 0) / paperAvgs.length);
    var passProb = Math.round(100 / (1 + Math.exp(-(predicted - 60) / 6)));
    var v = verdictFor(predicted);

    var html = "<h3>Weakness dashboard</h3>" +
      '<div class="wk-predict"><span class="wk-num ' + v.cls + '">' + predicted + "%</span>" +
      '<span class="wk-sub">estimated overall score · pass probability ~' + passProb + "%</span></div>";

    rows.sort(function (a, b) { return a.acc - b.acc; });
    rows.forEach(function (r, i) {
      var t = r.trend;
      var sub = r.attempted + " answered" +
        (t ? " · " + t.text : "") +
        (r.mbCount ? " · " + r.mbCount + " in mistake book" : "");
      var label = (i === 0 && r.acc < 80 ? "⚠ " : "") + r.area.label +
        (t ? " " + t.arrow : "");
      html += barRow(label, sub, r.acc, r.acc >= 80);
    });

    var weakest = rows[0];
    if (weakest.acc < 80) {
      html += "<p class='hint wk-advice'>Focus suggestion: <strong>" + esc(weakest.area.label) +
        "</strong> (" + weakest.acc + "% correct) — run a few targeted mocks and clear its mistake-book items.</p>";
    }
    el.innerHTML = html;
  }

  function renderMistakeCard() {
    var el = $("pg-mistakes");
    if (!el) return;
    var book = mbLoad();
    var due = mbDueEntries();
    if (!book.length) {
      el.innerHTML = "<h3>Mistake book</h3><p class='hint'>No mistakes saved yet — wrong answers from mock exams are collected here for spaced review.</p>";
      return;
    }
    var html = "<h3>Mistake book</h3><p>" + book.length + " item" + (book.length > 1 ? "s" : "") +
      " in the book · " + due.length + " due for review</p>";
    if (due.length) {
      html += '<button id="mb-review-btn" class="primary-btn">Review now (' + Math.min(due.length, MB_SESSION_CAP) + ")</button>";
    } else {
      html += "<p class='hint'>Nothing due right now — answer correctly to graduate items out of the book.</p>";
    }
    el.innerHTML = html;
    var rb = $("mb-review-btn");
    if (rb) rb.addEventListener("click", startMbDrill);
  }

  function renderProgress() {
    renderMistakeCard();
    try { renderWeakness(); } catch (e) {}
    var stats = loadJSON(K_STATS, {});
    var html = "<h3>Use of English</h3>";
    ["part1", "part2", "part3", "part4"].forEach(function (p) {
      var s = stats[p];
      var label = PART_LABELS[p];
      if (!s || !s.attempted) {
        html += barRow(label, "Not practised yet", 0, false);
      } else {
        var pct = Math.round(100 * s.correct / s.attempted);
        html += barRow(label,
          s.attempted + " answered · " + pct + "% correct · last " + fmtDate(s.last),
          pct, pct >= 80);
      }
    });
    html += "<h3 class='pg-mock-title'>Reading</h3>";
    ["mc", "gap", "match"].forEach(function (t) {
      var s = stats["r" + t];
      var label = RD_LABELS[t];
      if (!s || !s.attempted) {
        html += barRow(label, "Not practised yet", 0, false);
      } else {
        var rp = Math.round(100 * s.correct / s.attempted);
        html += barRow(label,
          s.attempted + " answered · " + rp + "% correct · last " + fmtDate(s.last),
          rp, rp >= 80);
      }
    });

    html += "<h3 class='pg-mock-title'>Listening</h3>";
    (function () {
      var s = stats["lis"];
      if (!s || !s.attempted) {
        html += barRow("Listening comprehension", "Not practised yet", 0, false);
      } else {
        var lp = Math.round(100 * s.correct / s.attempted);
        html += barRow("Listening comprehension",
          s.attempted + " answered · " + lp + "% correct · last " + fmtDate(s.last),
          lp, lp >= 80);
      }
    })();

    var hist = loadJSON(K_MOCK(), []);
    if (hist.length) {
      html += '<h3 class="pg-mock-title">Recent mock exams</h3><ul class="mock-history">';
      hist.slice(-8).reverse().forEach(function (m) {
        var label = m.mode === "full" ? "UoE full mock"
          : m.mode === "reading" ? "Reading · " + (RD_LABELS[m.part] || m.part).split("·")[0].trim()
          : m.mode === "listening" ? "Listening · " + (LS_LABELS[m.part] || m.part)
          : (PART_LABELS[m.part] || m.part).split("·")[0].trim();
        var cls = m.pct >= 75 ? "ok" : (m.pct >= 60 ? "mid" : "bad");
        html += '<li><span class="mh-date">' + esc(fmtDate(m.date)) + "</span>" +
          '<span class="mh-label">' + esc(label) + "</span>" +
          '<span class="mh-score ' + cls + '">' + m.score + "/" + m.max + " (" + m.pct + "%)</span></li>";
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
    var vhtml = "<h3>Vocabulary</h3>";
    [1, 2, 3].forEach(function (b) {
      var pct = Math.round(100 * counts[b] / VOCAB.length);
      vhtml += barRow("Box " + b, counts[b] + " cards", pct, b === 3);
    });
    $("pg-vocab").innerHTML = vhtml;
  }

  function initProgress() {
    $("mb-drill-quit").addEventListener("click", function () {
      if (!confirm("Quit mistake review and go back to Progress?")) return;
      mbStopAudio();
      $("mb-drill").classList.add("hidden");
      $("mb-summary").classList.remove("hidden");
      renderProgress();
    });
    $("mb-congrats-home").addEventListener("click", function () {
      $("mb-congrats").classList.add("hidden");
      $("mb-summary").classList.remove("hidden");
      renderProgress();
    });
    $("pg-clear").addEventListener("click", function () {
      if (!confirm("Clear all practice records, vocabulary progress and drafts for this level? This cannot be undone.")) return;
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
      alert("Cleared.");
    });
    renderProgress();
  }

  /* ================= §8.5 色系主題 ================= */
  var K_THEME = "cpe_theme";
  var THEMES = [
    { id: "ink",     name: "Ink Black",   bg: "#0d0d10", accent: "#e0a458" },
    { id: "navy",    name: "Deep Navy",   bg: "#0a1220", accent: "#d6b25e" },
    { id: "forest",  name: "Forest Green", bg: "#0c1410", accent: "#d8c69a" },
    { id: "paper",   name: "Warm Paper",  bg: "#f4efe4", accent: "#8a5a26" },
    { id: "plum",    name: "Rose Plum",   bg: "#16101a", accent: "#e08ba1" },
    { id: "celadon", name: "Celadon",     bg: "#0d1416", accent: "#62c4b8" }
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
    safeInit("listening", initListening);
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
