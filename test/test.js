/* CPE Prep — data integrity & pure-logic tests (all three levels). Run: node test/test.js */
"use strict";

const path = require("path");
const fs = require("fs");
const logic = require(path.join(__dirname, "..", "js", "app.js"));

let passed = 0, failed = 0;
function check(name, cond) {
  if (cond) { passed++; }
  else { failed++; console.error("FAIL: " + name); }
}

/* ---------- per-level requirements ---------- */
const LEVEL_SPECS = {
  fce: {
    p4min: 2, p4max: 5,
    min: { part1: 2, part2: 2, part3: 2, part4: 2, writing: 2, speaking: 2, vocab: 5 },
    essayTexts: null // FCE Part 1 essay has no input texts
  },
  cae: {
    p4min: 3, p4max: 6,
    min: { part1: 2, part2: 2, part3: 2, part4: 2, writing: 2, speaking: 2, vocab: 5 },
    essayTexts: null // CAE essay uses notes, not two quoted texts
  },
  cpe: {
    p4min: 3, p4max: 8,
    min: { part1: 12, part2: 12, part3: 12, part4: 10, writing: 8, speaking: 10, vocab: 60 },
    essayTexts: 2, // CPE Part 1 essay must have two input texts
    extra: { minEssays: 4, minPart2Tasks: 4 }
  }
};

const totals = {};

Object.keys(LEVEL_SPECS).forEach(level => {
  const spec = LEVEL_SPECS[level];
  const L = `[${level}] `;
  const dir = path.join(__dirname, "..", "js", "levels", level);

  const qmod = require(path.join(dir, "questions.js"));
  const vmod = require(path.join(dir, "vocab.js"));
  let QUESTIONS = qmod.QUESTIONS;
  let WRITING = qmod.WRITING;
  let SPEAKING = qmod.SPEAKING;
  let VOCAB = vmod.VOCAB;

  check(L + "SPEAKING_PHRASES present", Array.isArray(qmod.SPEAKING_PHRASES) && qmod.SPEAKING_PHRASES.length >= 5);

  /* ---------- merge extra banks ---------- */
  const banksDir = path.join(dir, "banks");
  const bankCounts = {};
  const expectedBanks = [];
  ["p1", "p2", "p3", "p4"].forEach(p => { for (let w = 1; w <= 5; w++) expectedBanks.push(`${p}-w${w}.js`); });
  for (let w = 1; w <= 6; w++) expectedBanks.push(`vocab-w${w}.js`);
  expectedBanks.push("writing-x.js", "speaking-x.js");
  const bankFiles = fs.readdirSync(banksDir).sort();
  expectedBanks.forEach(f => check(L + "bank file exists: " + f, bankFiles.includes(f)));

  bankFiles.forEach(f => {
    const items = require(path.join(banksDir, f));
    const m = f.match(/^(p[1-4])-w\d+\.js$/);
    if (m) {
      const key = m[1].replace("p", "part");
      QUESTIONS[key] = QUESTIONS[key].concat(items);
    } else if (f.startsWith("vocab-")) { VOCAB = VOCAB.concat(items); }
    else if (f === "writing-x.js") { WRITING = WRITING.concat(items); }
    else if (f === "speaking-x.js") { SPEAKING = SPEAKING.concat(items); }
    bankCounts[f] = items.length;
  });

  /* ---------- Part 1 ---------- */
  check(L + `part1 has >= ${spec.min.part1} items`, QUESTIONS.part1.length >= spec.min.part1);
  QUESTIONS.part1.forEach((q, i) => {
    check(L + `part1[${i}] has 4 options`, Array.isArray(q.options) && q.options.length === 4);
    check(L + `part1[${i}] answer index valid`, Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    check(L + `part1[${i}] has gap`, q.text.includes("____"));
    check(L + `part1[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
    check(L + `part1[${i}] options unique`, new Set(q.options).size === 4);
  });

  /* ---------- Part 2 ---------- */
  check(L + `part2 has >= ${spec.min.part2} items`, QUESTIONS.part2.length >= spec.min.part2);
  QUESTIONS.part2.forEach((q, i) => {
    check(L + `part2[${i}] has answers`, Array.isArray(q.answers) && q.answers.length >= 1);
    check(L + `part2[${i}] answers are single words`, q.answers.every(a => a.trim().split(/\s+/).length === 1));
    check(L + `part2[${i}] has gap`, q.text.includes("____"));
    check(L + `part2[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
  });

  /* ---------- Part 3 ---------- */
  check(L + `part3 has >= ${spec.min.part3} items`, QUESTIONS.part3.length >= spec.min.part3);
  QUESTIONS.part3.forEach((q, i) => {
    check(L + `part3[${i}] has stem in caps`, typeof q.stem === "string" && q.stem === q.stem.toUpperCase());
    check(L + `part3[${i}] has answers`, Array.isArray(q.answers) && q.answers.length >= 1);
    check(L + `part3[${i}] answer differs from stem`, q.answers.every(a => a.toLowerCase() !== q.stem.toLowerCase()));
    check(L + `part3[${i}] has gap`, q.text.includes("____"));
    check(L + `part3[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
  });

  /* ---------- Part 4 (per-level word range) ---------- */
  check(L + `part4 has >= ${spec.min.part4} items`, QUESTIONS.part4.length >= spec.min.part4);
  QUESTIONS.part4.forEach((q, i) => {
    check(L + `part4[${i}] has 1-4 accepted answers`, Array.isArray(q.answers) && q.answers.length >= 1 && q.answers.length <= 4);
    const kw = q.keyword.toLowerCase();
    check(L + `part4[${i}] key word in every accepted answer`,
      q.answers.every(a => a.toLowerCase().split(/\s+/).includes(kw)));
    check(L + `part4[${i}] model is an accepted answer`, q.answers.includes(q.model));
    check(L + `part4[${i}] answers within ${spec.p4min}-${spec.p4max} words`,
      q.answers.every(a => {
        const n = a.trim().split(/\s+/).length;
        return n >= spec.p4min && n <= spec.p4max;
      }));
    check(L + `part4[${i}] has gapped sentence`, q.gapped.includes("____"));
    check(L + `part4[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
  });

  /* ---------- Writing & Speaking data ---------- */
  check(L + `writing has >= ${spec.min.writing} prompts`, WRITING.length >= spec.min.writing);
  if (spec.extra) {
    check(L + `writing has >= ${spec.extra.minEssays} essays`, WRITING.filter(w => w.part === 1).length >= spec.extra.minEssays);
    check(L + `writing has >= ${spec.extra.minPart2Tasks} part-2 tasks`, WRITING.filter(w => w.part === 2).length >= spec.extra.minPart2Tasks);
  }
  WRITING.forEach((w, i) => {
    check(L + `writing[${i}] has task/checklist/model`,
      !!w.task && Array.isArray(w.checklist) && w.checklist.length === 4 && !!w.model);
    if (spec.essayTexts && w.part === 1) {
      check(L + `writing[${i}] essay has two input texts`, Array.isArray(w.texts) && w.texts.length === spec.essayTexts);
    }
    check(L + `writing[${i}] id unique`, WRITING.filter(x => x.id === w.id).length === 1);
  });
  check(L + `speaking has >= ${spec.min.speaking} prompts`, SPEAKING.length >= spec.min.speaking);
  SPEAKING.forEach((s, i) => {
    check(L + `speaking[${i}] has question + 3 bullets`, !!s.question && s.bullets.length === 3);
  });

  /* ---------- Vocab ---------- */
  check(L + `vocab has >= ${spec.min.vocab} items`, VOCAB.length >= spec.min.vocab);
  check(L + "vocab fronts unique", new Set(VOCAB.map(v => v.front.toLowerCase())).size === VOCAB.length);
  VOCAB.forEach((v, i) => {
    check(L + `vocab[${i}] complete fields`,
      !!v.front && !!v.pos && !!v.def && !!v.example && !!v.zh);
  });

  /* every stored accepted answer must survive its own normalization (non-empty) */
  ["part2", "part3", "part4"].forEach(p => {
    QUESTIONS[p].forEach((q, i) => {
      check(L + `${p}[${i}] accepted answers normalize non-empty`,
        q.answers.every(a => logic.normalizeAnswer(a).length > 0));
      check(L + `${p}[${i}] model answer matches itself`,
        logic.matchAnswer(q.answers[0], q.answers));
    });
  });

  /* ---------- cross-bank dedup (per level) ---------- */
  ["part1", "part2", "part3", "part4"].forEach(p => {
    const texts = QUESTIONS[p].map(q => (q.text || q.original).toLowerCase().replace(/\s+/g, " ").trim());
    check(L + p + " question texts unique (" + texts.length + ")", new Set(texts).size === texts.length);
  });
  check(L + "vocab fronts unique after merge", new Set(VOCAB.map(v => v.front.toLowerCase())).size === VOCAB.length);

  totals[level] = {
    p1: QUESTIONS.part1.length, p2: QUESTIONS.part2.length,
    p3: QUESTIONS.part3.length, p4: QUESTIONS.part4.length,
    writing: WRITING.length, speaking: SPEAKING.length, vocab: VOCAB.length
  };
});

/* ---------- normalizeAnswer / matchAnswer ---------- */
check("normalize lowercases & trims", logic.normalizeAnswer("  HoWeVeR  ") === "however");
check("normalize strips punctuation", logic.normalizeAnswer("didn't mention!") === "didnt mention");
check("normalize collapses whitespace", logic.normalizeAnswer("put   up \t with") === "put up with");
check("match case-insensitive", logic.matchAnswer("Whatsoever", ["whatsoever"]) === true);
check("match with punctuation variance", logic.matchAnswer("prefer it if you didn't mention", ["prefer it if you didnt mention"]) === true);
check("match rejects wrong answer", logic.matchAnswer("although", ["however"]) === false);
check("match rejects empty input", logic.matchAnswer("   ", ["however"]) === false);
check("curly apostrophe normalized same as straight", logic.normalizeAnswer("didn\u2019t") === logic.normalizeAnswer("didn't"));

/* ---------- countWords ---------- */
check("countWords empty = 0", logic.countWords("") === 0);
check("countWords basic", logic.countWords("one two  three") === 3);

/* ---------- Leitner ---------- */
const DAY = 24 * 60 * 60 * 1000;
const now = Date.now();
check("box1 always due", logic.leitnerIsDue({ box: 1, last: now }, now) === true);
check("box2 not due after 1 day", logic.leitnerIsDue({ box: 2, last: now - 1 * DAY }, now) === false);
check("box2 due after 2 days", logic.leitnerIsDue({ box: 2, last: now - 2 * DAY }, now) === true);
check("box3 not due after 4 days", logic.leitnerIsDue({ box: 3, last: now - 4 * DAY }, now) === false);
check("box3 due after 5 days", logic.leitnerIsDue({ box: 3, last: now - 5 * DAY }, now) === true);
check("new card (no state) due", logic.leitnerIsDue({}, now) === true);
check("review known promotes box", logic.leitnerReview({ box: 1, last: 0 }, true, now).box === 2);
check("review known caps at box 3", logic.leitnerReview({ box: 3, last: 0 }, true, now).box === 3);
check("review unknown demotes to box 1", logic.leitnerReview({ box: 3, last: 0 }, false, now).box === 1);
check("review sets last timestamp", logic.leitnerReview({ box: 1, last: 0 }, true, now).last === now);

/* ---------- shuffle ---------- */
const orig = [1, 2, 3, 4, 5];
const sh = logic.shuffle(orig);
check("shuffle preserves elements", sh.slice().sort().join() === "1,2,3,4,5");
check("shuffle does not mutate input", orig.join() === "1,2,3,4,5");

/* ---------- report ---------- */
Object.keys(totals).forEach(level => {
  const t = totals[level];
  console.log(`[${level}] totals: p1=${t.p1} p2=${t.p2} p3=${t.p3} p4=${t.p4} writing=${t.writing} speaking=${t.speaking} vocab=${t.vocab}`);
});
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
