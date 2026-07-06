/* CPE Prep — data integrity & pure-logic tests. Run: node test/test.js */
"use strict";

const path = require("path");
const qmod = require(path.join(__dirname, "..", "js", "questions.js"));
const vmod = require(path.join(__dirname, "..", "js", "vocab.js"));
const logic = require(path.join(__dirname, "..", "js", "app.js"));

const QUESTIONS = qmod.QUESTIONS;
const WRITING = qmod.WRITING;
const SPEAKING = qmod.SPEAKING;
const VOCAB = vmod.VOCAB;

let passed = 0, failed = 0;
function check(name, cond) {
  if (cond) { passed++; }
  else { failed++; console.error("FAIL: " + name); }
}

/* ---------- Part 1 ---------- */
check("part1 has 12 items", QUESTIONS.part1.length === 12);
QUESTIONS.part1.forEach((q, i) => {
  check(`part1[${i}] has 4 options`, Array.isArray(q.options) && q.options.length === 4);
  check(`part1[${i}] answer index valid`, Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
  check(`part1[${i}] has gap`, q.text.includes("____"));
  check(`part1[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
  check(`part1[${i}] options unique`, new Set(q.options).size === 4);
});

/* ---------- Part 2 ---------- */
check("part2 has 12 items", QUESTIONS.part2.length === 12);
QUESTIONS.part2.forEach((q, i) => {
  check(`part2[${i}] has answers`, Array.isArray(q.answers) && q.answers.length >= 1);
  check(`part2[${i}] answers are single words`, q.answers.every(a => a.trim().split(/\s+/).length === 1));
  check(`part2[${i}] has gap`, q.text.includes("____"));
  check(`part2[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
});

/* ---------- Part 3 ---------- */
check("part3 has 12 items", QUESTIONS.part3.length === 12);
QUESTIONS.part3.forEach((q, i) => {
  check(`part3[${i}] has stem in caps`, typeof q.stem === "string" && q.stem === q.stem.toUpperCase());
  check(`part3[${i}] has answers`, Array.isArray(q.answers) && q.answers.length >= 1);
  check(`part3[${i}] answer differs from stem`, q.answers.every(a => a.toLowerCase() !== q.stem.toLowerCase()));
  check(`part3[${i}] has gap`, q.text.includes("____"));
  check(`part3[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
});

/* ---------- Part 4 ---------- */
check("part4 has 10 items", QUESTIONS.part4.length === 10);
QUESTIONS.part4.forEach((q, i) => {
  check(`part4[${i}] has 1-4 accepted answers`, Array.isArray(q.answers) && q.answers.length >= 1 && q.answers.length <= 4);
  const kw = q.keyword.toLowerCase();
  check(`part4[${i}] key word in every accepted answer`,
    q.answers.every(a => a.toLowerCase().split(/\s+/).includes(kw)));
  check(`part4[${i}] model is an accepted answer`, q.answers.includes(q.model));
  check(`part4[${i}] answers within 3-8 words`,
    q.answers.every(a => {
      const n = a.trim().split(/\s+/).length;
      return n >= 3 && n <= 8;
    }));
  check(`part4[${i}] has gapped sentence`, q.gapped.includes("____"));
  check(`part4[${i}] has explanation`, typeof q.explanation === "string" && q.explanation.length > 10);
});

/* ---------- Writing & Speaking data ---------- */
check("writing has 8 prompts", WRITING.length === 8);
check("writing has 4 essays", WRITING.filter(w => w.part === 1).length === 4);
check("writing has 4 part-2 tasks", WRITING.filter(w => w.part === 2).length === 4);
WRITING.forEach((w, i) => {
  check(`writing[${i}] has task/checklist/model`,
    !!w.task && Array.isArray(w.checklist) && w.checklist.length === 4 && !!w.model);
  if (w.part === 1) check(`writing[${i}] essay has two input texts`, Array.isArray(w.texts) && w.texts.length === 2);
  check(`writing[${i}] id unique`, WRITING.filter(x => x.id === w.id).length === 1);
});
check("speaking has 10 prompts", SPEAKING.length === 10);
SPEAKING.forEach((s, i) => {
  check(`speaking[${i}] has question + 3 bullets`, !!s.question && s.bullets.length === 3);
});

/* ---------- Vocab ---------- */
check("vocab has 60 items", VOCAB.length === 60);
check("vocab fronts unique", new Set(VOCAB.map(v => v.front.toLowerCase())).size === VOCAB.length);
VOCAB.forEach((v, i) => {
  check(`vocab[${i}] complete fields`,
    !!v.front && !!v.pos && !!v.def && !!v.example && !!v.zh);
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

/* every stored accepted answer must survive its own normalization (non-empty) */
["part2", "part3", "part4"].forEach(p => {
  QUESTIONS[p].forEach((q, i) => {
    check(`${p}[${i}] accepted answers normalize non-empty`,
      q.answers.every(a => logic.normalizeAnswer(a).length > 0));
    check(`${p}[${i}] model answer matches itself`,
      logic.matchAnswer(q.answers[0], q.answers));
  });
});

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
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
