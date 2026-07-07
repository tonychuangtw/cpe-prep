/* ============================================================
 * FCE Prep — B2 字彙卡 (seed items)
 * front = word/phrase, pos = part of speech,
 * def = English definition, example, zh = 繁中釋義
 * ============================================================ */

var VOCAB = [
  { front: "reliable", pos: "adj.", def: "able to be trusted to do what is expected", example: "The bus service here is cheap but not very reliable.", zh: "可靠的" },
  { front: "run out of", pos: "phr. v.", def: "to use all of something and have none left", example: "We ran out of milk, so I had my coffee black.", zh: "用完、耗盡" },
  { front: "make up your mind", pos: "idiom", def: "to decide something", example: "I can't make up my mind which course to take.", zh: "下定決心、做決定" },
  { front: "convenient", pos: "adj.", def: "easy to use or suiting your plans well", example: "The flat is very convenient for the station.", zh: "方便的" },
  { front: "achieve", pos: "v.", def: "to succeed in doing something good, usually by working hard", example: "She achieved her goal of passing the exam on the first try.", zh: "達成、實現" }
];

if (typeof module !== 'undefined') {
  module.exports = { VOCAB: VOCAB };
}
