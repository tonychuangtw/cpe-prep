/* ============================================================
 * Level loader — 依所選級數動態載入題庫，再啟動 app。
 * localStorage "cpe.level" ∈ {"fce","cae","cpe"}；未設定時顯示級數選擇畫面。
 * 所有 script 以 async=false 注入，保證執行順序（questions/vocab 先於 banks）。
 * ============================================================ */
(function () {
  "use strict";

  var K_LEVEL = "cpe.level";

  /* -------- 每級設定（app.js 透過 window.LEVELS 讀取） -------- */
  var LEVELS = {
    fce: {
      id: "fce", badge: "B2",
      exam: "B2 First", title: "FCE 備考", subtitle: "Cambridge B2 First",
      desc: "中高級。日常與半正式情境的聽說讀寫，適合建立紮實基礎。",
      timerMin: 40,
      wordGuide: "本級 Essay 建議字數：140–190 字（Part 2 亦為 140–190 字）",
      p4min: 2, p4max: 5,
      spSecs: 60, spLabel: "Part 2 Long turn — 抽一張題卡，講滿 1 分鐘"
    },
    cae: {
      id: "cae", badge: "C1",
      exam: "C1 Advanced", title: "CAE 備考", subtitle: "Cambridge C1 Advanced",
      desc: "高級。學術與職場所需的流利精準英文，大學入學常用門檻。",
      timerMin: 45,
      wordGuide: "本級 Essay 建議字數：220–260 字（Part 2 亦為 220–260 字）",
      p4min: 3, p4max: 6,
      spSecs: 60, spLabel: "Part 2 Long turn — 抽一張題卡，講滿 1 分鐘"
    },
    cpe: {
      id: "cpe", badge: "C2",
      exam: "C2 Proficiency", title: "CPE 備考", subtitle: "Cambridge C2 Proficiency",
      desc: "最高級。接近母語者的掌握度，細膩語感與修辭能力的試煉。",
      timerMin: 45,
      wordGuide: "本級 Essay 建議字數：240–280 字（Part 2 為 280–320 字）",
      p4min: 3, p4max: 8,
      spSecs: 120, spLabel: "Part 3 Long turn — 抽一張題卡，講滿 2 分鐘"
    }
  };
  window.LEVELS = LEVELS;

  /* -------- bank 檔名（三個級數共用同一清單） -------- */
  var BANK_FILES = [
    "p1-w1.js", "p1-w2.js", "p1-w3.js", "p1-w4.js", "p1-w5.js",
    "p2-w1.js", "p2-w2.js", "p2-w3.js", "p2-w4.js", "p2-w5.js",
    "p3-w1.js", "p3-w2.js", "p3-w3.js", "p3-w4.js", "p3-w5.js",
    "p4-w1.js", "p4-w2.js", "p4-w3.js", "p4-w4.js", "p4-w5.js",
    "reading-mc-w1.js", "reading-mc-w2.js",
    "reading-gap-w1.js", "reading-gap-w2.js",
    "reading-match-w1.js", "reading-match-w2.js",
    /* listening-w*.js 先不載：尚無播放 UI，檔案只供未來 TTS 用 */
    "speaking-x.js",
    "vocab-w1.js", "vocab-w2.js", "vocab-w3.js", "vocab-w4.js", "vocab-w5.js", "vocab-w6.js",
    "writing-x.js"
  ];

  function getSavedLevel() {
    try {
      var v = localStorage.getItem(K_LEVEL);
      return (v && LEVELS[v]) ? v : null;
    } catch (e) { return null; }
  }
  function saveLevel(id) {
    try { localStorage.setItem(K_LEVEL, id); } catch (e) {}
  }

  /* 舊版（單一 CPE、無前綴 key）使用者：偵測到既有進度就直接視為 CPE，資料不流失 */
  function hasLegacyCpeData() {
    try {
      if (localStorage.getItem("cpe_uoe_stats") !== null) return true;
      if (localStorage.getItem("cpe_vocab_state") !== null) return true;
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("cpe_draft_") === 0) return true;
      }
    } catch (e) {}
    return false;
  }

  var appStarted = false;

  function applyHeader(lvl) {
    try {
      var cfg = LEVELS[lvl];
      var el;
      if ((el = document.getElementById("level-badge"))) el.textContent = cfg.badge;
      if ((el = document.getElementById("app-title"))) el.textContent = cfg.title;
      if ((el = document.getElementById("app-subtitle"))) el.textContent = cfg.subtitle;
      if ((el = document.getElementById("level-btn"))) el.textContent = cfg.badge;
      document.title = cfg.title + " — " + cfg.exam + " 練習";
    } catch (e) {}
  }

  /* 依序注入 script；async=false 保證按插入順序執行 */
  function loadScripts(urls, done) {
    var remaining = urls.length;
    var hadError = false;
    if (!remaining) { done(false); return; }
    urls.forEach(function (u) {
      var s = document.createElement("script");
      s.src = u;
      s.async = false;
      s.onload = function () { if (--remaining === 0) done(hadError); };
      s.onerror = function () {
        hadError = true;
        try { console.error("failed to load " + u); } catch (e) {}
        if (--remaining === 0) done(hadError);
      };
      document.body.appendChild(s);
    });
  }

  function startLevel(lvl) {
    if (appStarted) return;
    appStarted = true;
    applyHeader(lvl);
    var base = "js/levels/" + lvl + "/";
    var urls = [base + "questions.js", base + "vocab.js"]
      .concat(BANK_FILES.map(function (f) { return base + "banks/" + f; }));
    loadScripts(urls, function (hadError) {
      if (hadError) {
        try { console.error("some data files failed to load; app may be partial"); } catch (e) {}
      }
      try {
        if (window.CPEApp && typeof window.CPEApp.init === "function") {
          window.CPEApp.init(lvl);
        }
      } catch (e) {
        try { console.error("app init failed", e); } catch (e2) {}
      }
    });
  }

  /* -------- 級數選擇畫面 -------- */
  function showSelect(asSwitch) {
    var overlay = document.getElementById("level-select");
    var cancel = document.getElementById("level-cancel");
    if (!overlay) return;
    if (cancel) cancel.classList.toggle("hidden", !asSwitch);
    overlay.classList.remove("hidden");
  }
  function hideSelect() {
    var overlay = document.getElementById("level-select");
    if (overlay) overlay.classList.add("hidden");
  }

  function onPick(id) {
    var current = getSavedLevel();
    saveLevel(id);
    if (appStarted && current !== id) {
      location.reload();
      return;
    }
    hideSelect();
    if (!appStarted) startLevel(id);
  }

  function initSelectUI() {
    var overlay = document.getElementById("level-select");
    if (!overlay) return;
    overlay.querySelectorAll("[data-level]").forEach(function (btn) {
      btn.addEventListener("click", function () { onPick(btn.dataset.level); });
    });
    var cancel = document.getElementById("level-cancel");
    if (cancel) cancel.addEventListener("click", hideSelect);
    var switchBtn = document.getElementById("level-btn");
    if (switchBtn) switchBtn.addEventListener("click", function () { showSelect(true); });
  }

  function boot() {
    try { initSelectUI(); } catch (e) { try { console.error(e); } catch (e2) {} }
    var lvl = getSavedLevel();
    if (!lvl && hasLegacyCpeData()) {
      lvl = "cpe";
      saveLevel(lvl);
    }
    if (lvl) {
      startLevel(lvl);
    } else {
      showSelect(false);
    }
  }

  try { boot(); } catch (e) { try { console.error("loader boot failed", e); } catch (e2) {} }
})();
