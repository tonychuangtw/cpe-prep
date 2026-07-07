/* ============================================================
 * CAE Prep — C1 字彙卡 (seed items)
 * front = word/phrase, pos = part of speech,
 * def = English definition, example, zh = 繁中釋義
 * ============================================================ */

var VOCAB = [
  { front: "feasible", pos: "adj.", def: "possible and practical to do or achieve", example: "The plan sounds attractive, but is it financially feasible?", zh: "可行的" },
  { front: "deterrent", pos: "n.", def: "something that discourages people from doing something", example: "Heavy fines act as a deterrent to illegal parking.", zh: "威懾、遏制因素" },
  { front: "strike a balance", pos: "idiom", def: "to find a reasonable compromise between two demands", example: "Parents must strike a balance between guidance and freedom.", zh: "取得平衡" },
  { front: "outweigh", pos: "v.", def: "to be greater or more important than something else", example: "For most commuters, the savings outweigh the inconvenience.", zh: "勝過、比…重要" },
  { front: "controversy", pos: "n.", def: "strong public disagreement about something", example: "The decision to close the library sparked considerable controversy.", zh: "爭議" }
];

if (typeof module !== 'undefined') {
  module.exports = { VOCAB: VOCAB };
}
