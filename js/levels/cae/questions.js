/* ============================================================
 * CAE Prep — 原創題庫 (Use of English Parts 1-4 + Writing + Speaking)
 * All items are original, written in C1 Advanced style at C1 level.
 * Dual export: browser global + Node module.
 * ============================================================ */

var QUESTIONS = {

  /* ---------- Part 1: Multiple-choice cloze ---------- */
  part1: [
    {
      text: "It ____ to be seen whether the new policy will have the desired effect.",
      options: ["remains", "stays", "rests", "waits"],
      answer: 0,
      explanation: "'It remains to be seen' is the fixed expression meaning the outcome is not yet known. 'Stay', 'rest' and 'wait' do not form this structure."
    },
    {
      text: "She was ____ aware that her decision would upset several colleagues.",
      options: ["acutely", "sharply", "severely", "intensely"],
      answer: 0,
      explanation: "'Acutely aware' is the standard collocation for being very conscious of something. 'Severely' describes punishment or damage, and 'sharply'/'intensely' do not collocate naturally with 'aware'."
    },
    {
      text: "The findings ____ doubt on the widely held belief that money guarantees happiness.",
      options: ["cast", "threw", "put", "laid"],
      answer: 0,
      explanation: "'Cast doubt on' is the fixed collocation meaning to make something seem less certain. 'Put' and 'lay' do not combine with 'doubt on', and 'throw doubt' is far less idiomatic."
    }
  ],

  /* ---------- Part 2: Open cloze ---------- */
  part2: [
    {
      text: "____ the fact that he had very little experience, he was offered the position.",
      answers: ["despite"],
      explanation: "'Despite the fact that' introduces a concession before a clause. 'Although' cannot be used because of the following 'the fact that'."
    },
    {
      text: "The concert was cancelled at the last minute, much ____ the disappointment of the fans.",
      answers: ["to"],
      explanation: "'Much to the disappointment of…' is a fixed pattern expressing a reaction: 'to my surprise', 'to their delight'."
    },
    {
      text: "Not only ____ the team win the championship, but they also broke the scoring record.",
      answers: ["did"],
      explanation: "Fronted 'Not only' triggers subject–auxiliary inversion: 'Not only did the team win…'."
    }
  ],

  /* ---------- Part 3: Word formation ---------- */
  part3: [
    {
      text: "Her argument was so ____ that even her harshest critics were won over.",
      stem: "PERSUADE",
      answers: ["persuasive"],
      explanation: "An adjective is needed after 'so': persuade → persuasive (good at convincing people)."
    },
    {
      text: "The government has been criticised for its ____ to act on the report's findings.",
      stem: "FAIL",
      answers: ["failure"],
      explanation: "A noun is needed after 'its': fail → failure ('failure to act' = not acting)."
    },
    {
      text: "The region's economy is heavily ____ on tourism.",
      stem: "DEPEND",
      answers: ["dependent"],
      explanation: "An adjective followed by 'on' is needed: depend → dependent ('dependent on tourism')."
    }
  ],

  /* ---------- Part 4: Key word transformations (3-6 words) ---------- */
  part4: [
    {
      original: "I regret not applying for that job.",
      keyword: "WISH",
      gapped: "I ____ for that job.",
      answers: ["wish I had applied"],
      model: "wish I had applied",
      explanation: "Regret about the past is expressed with 'wish + past perfect': 'I wish I had applied'."
    },
    {
      original: "It's quite likely that the meeting will be postponed.",
      keyword: "WELL",
      gapped: "The meeting ____ postponed.",
      answers: ["may well be", "might well be", "could well be"],
      model: "may well be",
      explanation: "'May/might/could well + verb' expresses strong probability: 'may well be postponed'."
    },
    {
      original: "People say that the water shortage is getting worse.",
      keyword: "SAID",
      gapped: "The water shortage ____ getting worse.",
      answers: ["is said to be"],
      model: "is said to be",
      explanation: "The impersonal passive reporting structure: 'People say that X is…' → 'X is said to be…'."
    }
  ]
};

/* ---------- Writing prompts ---------- */
var WRITING = [
  {
    id: "w1",
    part: 1,
    type: "Essay",
    title: "Essay — Encouraging Public Transport Use",
    length: "220–260 words",
    task: "Your class has attended a panel discussion on how local authorities could encourage people to use public transport. You have made the notes below — methods: lower fares / more frequent services / restricting private cars. Some opinions expressed: 'Cheap tickets attract passengers.' 'Nobody waits 40 minutes for a bus.' 'Punishing drivers is unpopular.' Write an essay discussing TWO of the methods. You should explain which method is more effective, giving reasons in support of your answer.",
    checklist: [
      "Content: Discuss only two methods in depth and state clearly which is more effective",
      "Communicative Achievement: Essay register - objective and formal; opinions supported by reasons",
      "Organisation: introduction, method one, method two, comparison and conclusion",
      "Language: C1 structures (concession, conditionals, hedging); accurate, varied vocabulary"
    ],
    model: "Model outline — Intro: congestion is a policy problem; two levers considered. Para 2 (fares): lower fares remove a real barrier, but subsidies strain budgets and may not shift habitual drivers. Para 3 (frequency): reliability changes behaviour more durably — people plan around a service they can trust. Conclusion: frequency is the more effective method, since price cuts on an unreliable service persuade nobody."
  },
  {
    id: "w2",
    part: 2,
    type: "Proposal",
    title: "Proposal — Repurposing Unused Campus Space",
    length: "220–260 words",
    task: "The director of your college has invited students to send in proposals for how an unused room on campus could be turned into a facility that benefits students. Your proposal should explain what facility you suggest, how it would benefit students, and why it deserves funding. Write your proposal.",
    checklist: [
      "Content: Describe the facility, its benefits for students, and why it is worth the investment",
      "Communicative Achievement: Proposal register - formal, persuasive, making recommendations for the future",
      "Organisation: Headed sections (Introduction / Proposal / Benefits / Conclusion)",
      "Language: Recommendation and prediction structures (would enable, is likely to, I recommend that...)"
    ],
    model: "Model outline — Introduction: purpose of proposal. Proposed facility: a quiet study lounge with bookable group pods. Benefits: exam-period overcrowding in the library relieved; commuting students gain a base between classes. Funding case: low conversion cost, existing furniture reusable. Conclusion: modest investment, immediate and visible benefit — I strongly recommend approval."
  }
];

/* ---------- Speaking long-turn prompts ---------- */
var SPEAKING = [
  {
    question: "How important is it for people to have a good work-life balance?",
    bullets: ["health and relationships", "career ambitions", "employers' responsibilities"]
  },
  {
    question: "Do advertisements have too much influence on what we buy?",
    bullets: ["social media and targeting", "informed consumer choice", "advertising to children"]
  }
];

/* ---------- Speaking sample phrases (C1 register) ---------- */
var SPEAKING_PHRASES = [
  "I'd go so far as to say that…",
  "That said, there's another side to consider…",
  "It largely depends on the circumstances, but…",
  "What strikes me most is…",
  "I take your point, although…",
  "From my perspective, the key issue is…",
  "That's not something I'd considered — how do you see it?",
  "By and large, I'd agree that…",
  "The way I see it, …",
  "Weighing it all up, I'd say…"
];

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS: QUESTIONS, WRITING: WRITING, SPEAKING: SPEAKING, SPEAKING_PHRASES: SPEAKING_PHRASES };
}
