/* ============================================================
 * FCE Prep — 原創題庫 (Use of English Parts 1-4 + Writing + Speaking)
 * All items are original, written in B2 First style at B2 level.
 * Dual export: browser global + Node module.
 * ============================================================ */

var QUESTIONS = {

  /* ---------- Part 1: Multiple-choice cloze ---------- */
  part1: [
    {
      text: "I'm not very ____ on horror films — I'd much rather watch a comedy.",
      options: ["keen", "fond", "interested", "enthusiastic"],
      answer: 0,
      explanation: "'Keen on' is the correct preposition pairing. We say 'fond of', 'interested in' and 'enthusiastic about', so only 'keen' works with 'on'."
    },
    {
      text: "The match was called ____ because of the heavy rain.",
      options: ["off", "out", "down", "away"],
      answer: 0,
      explanation: "'Call off' is the phrasal verb meaning to cancel. 'Call out' means to shout or summon help, and the others do not form a phrasal verb with this meaning."
    },
    {
      text: "It took her a long time to get ____ the disappointment of losing the final.",
      options: ["over", "through", "across", "by"],
      answer: 0,
      explanation: "'Get over' means to recover from something unpleasant such as an illness or a disappointment. 'Get through' means to finish or survive something, which does not fit here."
    }
  ],

  /* ---------- Part 2: Open cloze ---------- */
  part2: [
    {
      text: "She has been living in Madrid ____ more than ten years.",
      answers: ["for"],
      explanation: "The present perfect continuous with a period of time takes 'for': 'for more than ten years'."
    },
    {
      text: "You'd better take an umbrella in ____ it rains later.",
      answers: ["case"],
      explanation: "'In case' introduces a precaution: take an umbrella because it might rain."
    },
    {
      text: "I look forward ____ hearing from you soon.",
      answers: ["to"],
      explanation: "'Look forward to' is followed by a noun or -ing form; 'to' here is a preposition, not part of an infinitive."
    }
  ],

  /* ---------- Part 3: Word formation ---------- */
  part3: [
    {
      text: "The ____ of the new sports centre is planned for next spring.",
      stem: "OPEN",
      answers: ["opening"],
      explanation: "A noun is needed after 'The': open → opening (the ceremony or act of opening)."
    },
    {
      text: "It was very ____ of you to leave the door unlocked all night.",
      stem: "CARE",
      answers: ["careless"],
      explanation: "An adjective with a negative meaning is needed: care → careless (not taking enough care)."
    },
    {
      text: "There has been a big ____ in the number of tourists visiting the island.",
      stem: "GROW",
      answers: ["growth"],
      explanation: "A noun is needed after 'a big': grow → growth (an increase)."
    }
  ],

  /* ---------- Part 4: Key word transformations (2-5 words) ---------- */
  part4: [
    {
      original: "I haven't seen Tom for ages.",
      keyword: "LAST",
      gapped: "The ____ Tom was ages ago.",
      answers: ["last time I saw"],
      model: "last time I saw",
      explanation: "'I haven't seen X for ages' → 'The last time I saw X was ages ago'."
    },
    {
      original: "The film was so boring that we left the cinema early.",
      keyword: "SUCH",
      gapped: "It was ____ film that we left the cinema early.",
      answers: ["such a boring"],
      model: "such a boring",
      explanation: "'So + adjective' becomes 'such a + adjective + noun': 'such a boring film'."
    },
    {
      original: "Maria started learning English five years ago.",
      keyword: "BEEN",
      gapped: "Maria has ____ English for five years.",
      answers: ["been learning"],
      model: "been learning",
      explanation: "'Started doing X five years ago' → present perfect continuous: 'has been learning X for five years'."
    }
  ]
};

/* ---------- Writing prompts ---------- */
var WRITING = [
  {
    id: "w1",
    part: 1,
    type: "Essay",
    title: "Essay — 回收設施",
    length: "140–190 words",
    task: "In your English class you have been talking about the environment. Now your teacher has asked you to write an essay. 'Every town should provide more facilities for recycling. Do you agree?' Write about: 1. cost, 2. convenience, 3. (your own idea).",
    checklist: [
      "Content：三個 note 都要寫到（含自己的想法），並回答題目問句",
      "Communicative Achievement：essay 語域—中立正式、立場清楚",
      "Organisation：introduction → 兩到三段論點 → conclusion，用連接詞銜接",
      "Language：B2 句型（First of all, However, In my opinion…），錯誤不影響理解"
    ],
    model: "Model outline — Intro: recycling matters, but do towns do enough? Para 2 (cost): facilities are expensive, but cheaper than dealing with pollution later. Para 3 (convenience): people recycle more when bins are close to home. Para 4 (own idea): schools could teach children to use the facilities. Conclusion: I agree — more facilities would help everyone."
  },
  {
    id: "w2",
    part: 2,
    type: "Article",
    title: "Article — My favourite place",
    length: "140–190 words",
    task: "You see this announcement on an English-language website: 'Articles wanted! MY FAVOURITE PLACE — Where is it? Why is it special to you? Write us an article answering these questions. The best articles will appear on our website.' Write your article.",
    checklist: [
      "Content：說出地點在哪、為何特別，兩個問題都回答",
      "Communicative Achievement：article 語域—輕鬆、吸引讀者，可用問句開頭",
      "Organisation：吸引人的標題與開頭、分段清楚、有結尾",
      "Language：描寫性形容詞與感受表達（peaceful, breathtaking, feel at home…）"
    ],
    model: "Model opening — Have you ever found a place where all your worries disappear? For me, that place is my grandmother's kitchen by the sea, where the smell of fresh bread mixes with the sound of waves."
  }
];

/* ---------- Speaking long-turn prompts ---------- */
var SPEAKING = [
  {
    question: "Why do people enjoy travelling to other countries?",
    bullets: ["new food and culture", "taking a break from routine", "meeting different people"]
  },
  {
    question: "Is it better to live in a city or in the countryside?",
    bullets: ["jobs and entertainment", "nature and fresh air", "cost of living"]
  }
];

/* ---------- Speaking sample phrases (B2 register) ---------- */
var SPEAKING_PHRASES = [
  "In my opinion, …",
  "I'd say that…, because…",
  "Personally, I prefer…",
  "One advantage is that…",
  "On the other hand, …",
  "For example, last year I…",
  "What do you think about…?",
  "That's a good point, but…",
  "I'm not sure, but maybe…",
  "To sum up, I believe…"
];

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS: QUESTIONS, WRITING: WRITING, SPEAKING: SPEAKING, SPEAKING_PHRASES: SPEAKING_PHRASES };
}
