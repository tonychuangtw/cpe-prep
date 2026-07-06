/* ============================================================
 * CPE Prep — 原創題庫 (Use of English Parts 1-4 + Writing + Speaking)
 * All items are original, written in CPE style at C2 level.
 * Dual export: browser global + Node module.
 * ============================================================ */

var QUESTIONS = {

  /* ---------- Part 1: Multiple-choice cloze (12) ---------- */
  part1: [
    {
      text: "Her latest novel has been ____ acclaimed by critics on both sides of the Atlantic.",
      options: ["widely", "broadly", "vastly", "largely"],
      answer: 0,
      explanation: "'Widely acclaimed' is the standard collocation for praise received from many quarters. 'Broadly' suggests approximation, 'vastly' modifies comparatives, and 'largely' means 'mainly'."
    },
    {
      text: "The negotiations broke down when neither side was prepared to ____ ground on the issue of tariffs.",
      options: ["give", "lose", "drop", "grant"],
      answer: 0,
      explanation: "'Give ground' is the idiom meaning to yield or make concessions in an argument. 'Lose ground' means to fall behind involuntarily, which does not fit 'was prepared to'."
    },
    {
      text: "It was only when the funding dried up that the true ____ of the project's mismanagement came to light.",
      options: ["scale", "measure", "size", "range"],
      answer: 0,
      explanation: "'The true scale of' is the natural collocation for the full extent of a problem. 'Size' and 'range' are used of physical dimensions or variety, and 'measure' collocates differently ('in some measure')."
    },
    {
      text: "He delivered the news with such ____ indifference that we assumed he was joking.",
      options: ["studied", "learned", "practised", "rehearsed"],
      answer: 0,
      explanation: "'Studied indifference' is a fixed collocation meaning deliberately assumed, artificial indifference. The other adjectives do not collocate with 'indifference' in this sense."
    },
    {
      text: "The committee's report stops ____ of recommending an outright ban.",
      options: ["short", "shy", "clear", "wide"],
      answer: 0,
      explanation: "'Stop short of (doing something)' means to almost do something but not go that far. 'Shy of' appears in 'fall shy of'; 'steer clear of' and 'wide of the mark' are different idioms."
    },
    {
      text: "Despite the mounting criticism, the minister remained ____ that the reforms would be implemented on schedule.",
      options: ["adamant", "obstinate", "resolute", "tenacious"],
      answer: 0,
      explanation: "'Adamant' is the adjective that naturally takes a that-clause ('adamant that...'). 'Obstinate', 'resolute' and 'tenacious' describe character but do not idiomatically introduce a that-clause here."
    },
    {
      text: "The two accounts of the incident differ in several ____ respects.",
      options: ["material", "physical", "solid", "concrete"],
      answer: 0,
      explanation: "'In material respects' is a formal collocation meaning in important or significant ways. 'Physical', 'solid' and 'concrete' do not collocate with 'respects'."
    },
    {
      text: "She has an uncanny ____ for saying precisely the wrong thing at the wrong moment.",
      options: ["knack", "streak", "touch", "grip"],
      answer: 0,
      explanation: "'A knack for doing something' means a (often curious) ability or tendency. 'Streak' collocates with adjectives ('a stubborn streak'), while 'touch' and 'grip' take different structures."
    },
    {
      text: "The evidence ____ overwhelmingly to a single culprit.",
      options: ["points", "directs", "aims", "signals"],
      answer: 0,
      explanation: "'The evidence points to' is the fixed expression meaning the evidence indicates or suggests. 'Direct', 'aim' and 'signal' are transitive or take different prepositions in this sense."
    },
    {
      text: "New regulations have been brought ____ to curb speculative trading.",
      options: ["in", "up", "about", "off"],
      answer: 0,
      explanation: "'Bring in' means to introduce a law or rule. 'Bring about' means to cause something to happen, 'bring up' means to raise a topic, and 'bring off' means to succeed in something difficult."
    },
    {
      text: "I could tell from her tone that my apology hadn't quite ____ the mark.",
      options: ["hit", "struck", "reached", "touched"],
      answer: 0,
      explanation: "'Hit the mark' is the idiom meaning to achieve the intended effect. Although 'strike' can be a synonym of 'hit', the fixed idiom uses 'hit' (compare 'wide of the mark')."
    },
    {
      text: "Years of underinvestment have taken their ____ on the country's rail network.",
      options: ["toll", "price", "cost", "burden"],
      answer: 0,
      explanation: "'Take its/their toll on' is the fixed idiom meaning to cause gradual damage. 'Price', 'cost' and 'burden' do not combine with 'take... on' in this way."
    }
  ],

  /* ---------- Part 2: Open cloze (12) ---------- */
  part2: [
    {
      text: "____ it not been for the swift intervention of a passer-by, the fire might well have spread to the neighbouring buildings.",
      answers: ["had"],
      explanation: "Inverted third conditional: 'Had it not been for...' = 'If it had not been for...'."
    },
    {
      text: "The results were disappointing, ____ not entirely unexpected.",
      answers: ["if", "albeit", "though", "although"],
      explanation: "A concessive linker is needed before the adjective phrase: 'if / albeit / (al)though not entirely unexpected'."
    },
    {
      text: "There is no reason ____ the two proposals should not be considered together.",
      answers: ["why"],
      explanation: "'Reason' is followed by the relative adverb 'why': 'no reason why... should not...'."
    },
    {
      text: "Seldom ____ the committee reached a decision so quickly.",
      answers: ["has"],
      explanation: "Negative adverbial 'seldom' at the front triggers inversion with the auxiliary: 'Seldom has the committee reached...'."
    },
    {
      text: "He is, ____ all accounts, a formidable negotiator.",
      answers: ["by"],
      explanation: "'By all accounts' is a fixed expression meaning 'according to what everyone says'."
    },
    {
      text: "The plan, ____ ambitious, is by no means unrealistic.",
      answers: ["while", "though", "although", "albeit", "however", "if"],
      explanation: "A concessive word is required before the bare adjective: 'while/though/albeit/however ambitious'."
    },
    {
      text: "She refused to give any explanation ____ for her sudden resignation.",
      answers: ["whatsoever", "whatever"],
      explanation: "'Whatsoever' (or 'whatever') is an emphatic post-modifier of a negative noun phrase: 'no/any explanation whatsoever'."
    },
    {
      text: "____ the negotiations fail, both parties stand to incur substantial losses.",
      answers: ["should"],
      explanation: "Inverted conditional: 'Should the negotiations fail' = 'If the negotiations should fail'."
    },
    {
      text: "It was not ____ much the content of the speech as its delivery that impressed the audience.",
      answers: ["so"],
      explanation: "The structure 'not so much X as Y' contrasts two elements, emphasising the second."
    },
    {
      text: "Little ____ she know that the letter she was about to open would change her life.",
      answers: ["did"],
      explanation: "Fronted 'little' triggers inversion with the dummy auxiliary: 'Little did she know...'."
    },
    {
      text: "The museum is well worth a visit, ____ only for its remarkable collection of etchings.",
      answers: ["if"],
      explanation: "'If only for' means 'even if for no other reason than'."
    },
    {
      text: "On no account ____ passengers lean out of the window while the train is in motion.",
      answers: ["should", "must", "may"],
      explanation: "The fronted negative phrase 'On no account' forces inversion with a modal: 'On no account should/must/may passengers lean...'."
    }
  ],

  /* ---------- Part 3: Word formation (12) ---------- */
  part3: [
    {
      text: "The two paintings are so alike as to be virtually ____.",
      stem: "DISTINGUISH",
      answers: ["indistinguishable"],
      explanation: "Negative prefix in- + adjectival suffix -able: 'indistinguishable' = impossible to tell apart."
    },
    {
      text: "His ____ to compromise ultimately cost him the leadership.",
      stem: "WILLING",
      answers: ["unwillingness"],
      explanation: "A noun is needed after 'His', with a negative meaning: un- + willing + -ness."
    },
    {
      text: "The temperature dropped almost ____ over the course of the evening.",
      stem: "PERCEIVE",
      answers: ["imperceptibly"],
      explanation: "An adverb modifying 'dropped' is needed: perceive → perceptible → imperceptibly (too gradually to be noticed)."
    },
    {
      text: "There has been an ____ improvement in relations between the two countries.",
      stem: "DENY",
      answers: ["undeniable"],
      explanation: "An adjective before 'improvement': deny → deniable → undeniable ('an' signals a vowel-initial word, so the negative form fits)."
    },
    {
      text: "Attendance at the briefing is ____ for all new members of staff.",
      stem: "OBLIGE",
      answers: ["obligatory"],
      explanation: "An adjective meaning 'compulsory' is needed: oblige → obligatory."
    },
    {
      text: "The new regulations are not ____ to contracts signed before January.",
      stem: "APPLY",
      answers: ["applicable"],
      explanation: "Adjective + 'to': apply → applicable ('the regulations do not apply to...')."
    },
    {
      text: "The audience included several ____ figures from the world of finance.",
      stem: "NOTE",
      answers: ["notable"],
      explanation: "An adjective meaning 'prominent, distinguished': note → notable."
    },
    {
      text: "He was arrested shortly after buying the painting from a ____ dealer.",
      stem: "REPUTE",
      answers: ["disreputable"],
      explanation: "Context (arrest) requires the negative adjective: repute → reputable → disreputable (of bad reputation)."
    },
    {
      text: "The instructions had been so poorly translated as to be almost ____.",
      stem: "COMPREHEND",
      answers: ["incomprehensible"],
      explanation: "Negative adjective: comprehend → comprehensible → incomprehensible (impossible to understand)."
    },
    {
      text: "She has always been ____ in her criticism of government policy.",
      stem: "SPEAK",
      answers: ["outspoken"],
      explanation: "'Outspoken' = expressing opinions frankly and directly; the prefix out- changes the meaning of the stem."
    },
    {
      text: "The committee expressed its strong ____ of the proposed changes.",
      stem: "PROVE",
      answers: ["disapproval"],
      explanation: "A negative noun after 'its strong': prove → approve → approval → disapproval."
    },
    {
      text: "The project was delayed by a series of entirely ____ circumstances.",
      stem: "FORESEE",
      answers: ["unforeseen"],
      explanation: "A negative past-participial adjective: foresee → foreseen → unforeseen (not anticipated)."
    }
  ],

  /* ---------- Part 4: Key word transformations (10) ---------- */
  part4: [
    {
      original: "I have no intention of apologising to him.",
      keyword: "INTEND",
      gapped: "I do not ____ to him.",
      answers: ["intend to apologise", "intend to apologize"],
      model: "intend to apologise",
      explanation: "'Have no intention of doing' → 'do not intend to do'. The verb 'intend' takes a to-infinitive."
    },
    {
      original: "It is possible that the letter never reached her.",
      keyword: "MIGHT",
      gapped: "The letter ____ her.",
      answers: ["might never have reached", "might not have reached"],
      model: "might never have reached",
      explanation: "Past possibility is expressed with 'might (never/not) have + past participle'."
    },
    {
      original: "The success of the venture exceeded everyone's expectations.",
      keyword: "FAR",
      gapped: "The venture was ____ anyone had expected.",
      answers: ["far more successful than"],
      model: "far more successful than",
      explanation: "Noun 'success' becomes the adjective in a comparative intensified by 'far': 'far more successful than'."
    },
    {
      original: "They only realised the painting was a forgery when it was cleaned.",
      keyword: "DID",
      gapped: "Only when the painting was cleaned ____ it was a forgery.",
      answers: ["did they realise", "did they realise that", "did they realize", "did they realize that"],
      model: "did they realise that",
      explanation: "A fronted 'Only when...' clause triggers subject–auxiliary inversion in the main clause: 'did they realise'."
    },
    {
      original: "I'd rather you didn't mention this to anyone.",
      keyword: "PREFER",
      gapped: "I would ____ this to anyone.",
      answers: ["prefer you not to mention", "prefer it if you didn't mention", "prefer it if you did not mention"],
      model: "prefer you not to mention",
      explanation: "'Would rather + past' converts to 'would prefer you not to do' or 'would prefer it if you didn't do'."
    },
    {
      original: "The two theories are alike in almost every respect.",
      keyword: "DIFFERENCE",
      gapped: "There is ____ the two theories.",
      answers: ["hardly any difference between", "little difference between", "almost no difference between"],
      model: "hardly any difference between",
      explanation: "'Alike in almost every respect' → 'hardly any / little / almost no difference between'."
    },
    {
      original: "He tried as hard as he could to remain impartial.",
      keyword: "UTMOST",
      gapped: "He did ____ impartial.",
      answers: ["his utmost to remain", "his utmost to stay"],
      model: "his utmost to remain",
      explanation: "'Try as hard as one can' → 'do one's utmost to do something'."
    },
    {
      original: "People say the castle was built in the eleventh century.",
      keyword: "HAVE",
      gapped: "The castle is said ____ built in the eleventh century.",
      answers: ["to have been"],
      model: "to have been",
      explanation: "Impersonal passive with a past reference: 'is said to have been built'. Only 3–8 word answers are normally required; here the perfect infinitive marker completes the structure."
    },
    {
      original: "Whatever you do, don't touch that switch.",
      keyword: "CIRCUMSTANCES",
      gapped: "Under ____ touch that switch.",
      answers: ["no circumstances should you", "no circumstances must you", "no circumstances are you to"],
      model: "no circumstances should you",
      explanation: "The fronted negative phrase 'Under no circumstances' requires inversion: 'should/must you' or 'are you to'."
    },
    {
      original: "I find his arrogance very hard to tolerate.",
      keyword: "PUT",
      gapped: "I find it very hard to ____ his arrogance.",
      answers: ["put up with"],
      model: "put up with",
      explanation: "The phrasal verb 'put up with' means 'tolerate'."
    }
  ]
};

/* ---------- Writing prompts (8) ---------- */
var WRITING = [
  {
    id: "w1",
    part: 1,
    type: "Essay",
    title: "Essay — The pace of technological change",
    length: "240–280 words",
    task: "Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer.",
    texts: [
      "Digital tools have unquestionably enhanced our capacity to work. Tasks that once consumed entire afternoons are now dispatched in minutes, and knowledge that was once the preserve of specialists is available to anyone with a connection. To lament this transformation is to indulge in nostalgia at the expense of progress.",
      "Constant connectivity is quietly eroding our ability to think deeply. Attention has become a commodity fought over by competing platforms, and sustained concentration — the very foundation of serious intellectual work — is becoming a rare skill. Efficiency has been bought at the price of depth."
    ],
    checklist: [
      "Content：兩篇文本各抓出兩個重點並加以評論，加入自己的觀點",
      "Communicative Achievement：正式 essay 語域，立場清楚、有說服力",
      "Organisation：introduction → 兩文本討論 → 個人立場 → conclusion，銜接自然",
      "Language：C2 詞彙與句型多樣（inversion、cleft、hedging），錯誤極少"
    ],
    model: "Model outline — Intro: frame the debate as efficiency vs depth. Para 2: summarise Text 1's claims (speed, democratised knowledge); concede their force but note the writer conflates access with understanding. Para 3: summarise Text 2 (attention as commodity, loss of concentration); argue this is the more far-reaching concern, though somewhat fatalistic. Para 4: own view — the tools are neutral; what matters is whether we cultivate habits that protect deep work. Conclusion: progress need not come at the price of depth, provided we use technology deliberately rather than being used by it."
  },
  {
    id: "w2",
    part: 1,
    type: "Essay",
    title: "Essay — Free admission to museums",
    length: "240–280 words",
    task: "Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer.",
    texts: [
      "Museums exist to serve the public, and charging for entry betrays that mission. The moment a ticket barrier goes up, culture becomes a luxury good, and precisely those who would benefit most from access are the first to be turned away. Free admission is not a subsidy; it is the point.",
      "Romantic talk of free culture ignores an awkward truth: collections must be conserved, staff paid and buildings maintained. Where entry fees are abolished, the shortfall is met either by taxpayers, many of whom never set foot in a gallery, or by cuts that quietly degrade the institution itself."
    ],
    checklist: [
      "Content：兩文本重點皆有摘要與評價，並提出可行的折衷方案",
      "Communicative Achievement：語氣客觀、正式，論證平衡",
      "Organisation：段落分工清楚，論點層層推進",
      "Language：精準用詞（subsidise, footfall, earmark…），複雜句正確"
    ],
    model: "Model paragraph — While the first writer is right that admission charges deter exactly those visitors museums most need to reach, the argument rests on the questionable assumption that funding will simply materialise. The second text supplies the missing realism: conservation and staffing are not optional extras. A defensible middle course — free access to permanent collections, with charges reserved for special exhibitions — would preserve the principle of open culture without starving the institutions that embody it."
  },
  {
    id: "w3",
    part: 1,
    type: "Essay",
    title: "Essay — Restricting cars in city centres",
    length: "240–280 words",
    task: "Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer.",
    texts: [
      "Cities that have banished cars from their centres report cleaner air, safer streets and, contrary to retailers' fears, higher footfall. The car had a century to prove itself the servant of urban life; it has instead proved its master. Reclaiming streets for people is overdue.",
      "Car-free zones are designed by and for the able-bodied urban professional. For the elderly, the disabled, tradespeople and families in outlying districts with threadbare public transport, the car is not a lifestyle choice but a lifeline. Restrictions imposed without alternatives simply punish the least mobile."
    ],
    checklist: [
      "Content：摘要兩方論點（環境效益 vs 弱勢排除），評價其強弱",
      "Communicative Achievement：essay 語域一致，展現批判思考",
      "Organisation：對比結構清晰，轉折語自然（granted, that said…）",
      "Language：主題詞彙（congestion, accessibility, retrofit…）運用得當"
    ],
    model: "Model outline — Intro: the debate is less about cars than about who cities are for. Para 2: Text 1 — environmental and commercial gains are well documented; strength: evidence-based. Para 3: Text 2 — equity objection is serious; restrictions without alternatives shift costs onto the vulnerable. Para 4: own view — sequencing matters: invest in transport and exemptions first, then restrict. Conclusion: the goal is not car-free cities but people-first cities."
  },
  {
    id: "w4",
    part: 1,
    type: "Essay",
    title: "Essay — The future of the office",
    length: "240–280 words",
    task: "Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer.",
    texts: [
      "Remote work has quietly settled one of the oldest arguments in management: output, not presence, is what matters. Freed from the commute, employees report better health, deeper focus and more equitable access to careers once reserved for those who could afford to live in capital cities.",
      "Something is lost when colleagues become tiles on a screen. Mentoring happens in corridors; trust is built over shared coffee, not scheduled calls. The young and the newly hired, deprived of these informal currents, are paying for the convenience of their senior colleagues."
    ],
    checklist: [
      "Content：兩文本各兩個重點，並評估誰承擔遠端工作的成本",
      "Communicative Achievement：正式且具說服力，避免口語化",
      "Organisation：清楚的立場演進，結論呼應開頭",
      "Language：collocations 精準（tacit knowledge, watercooler moments…）"
    ],
    model: "Model paragraph — The second text's most telling point is distributional: flexibility is not enjoyed equally. Senior staff, their networks already built, harvest the benefits of remote work, while newcomers forfeit the apprenticeship that corridors and coffee breaks once provided. Any honest defence of remote work must therefore explain not merely that output is maintained, but how the informal transmission of skill and trust is to be replaced."
  },
  {
    id: "w5",
    part: 2,
    type: "Review",
    title: "Review — A work that changed your perspective",
    length: "280–320 words",
    task: "An arts magazine has invited readers to submit reviews of a book, film or exhibition that fundamentally changed the way they see the world. Describe the work, explain what perspective it challenged, and assess whether it deserves a wider audience. Write your review.",
    checklist: [
      "Content：描述作品、說明改變了什麼觀點、評估其價值",
      "Communicative Achievement：review 語域—生動、有個人聲音但不失評論性",
      "Organisation：吸引人的開頭、有層次的評價、有力的結尾",
      "Language：評論性詞彙（understated, self-indulgent, luminous…）"
    ],
    model: "Model opening — I picked it up expecting to be lectured; I finished it unable to walk past a construction site without wondering whose hands had built it. Few books so thoroughly dismantle the reader's complacency while appearing to do nothing more than tell a story."
  },
  {
    id: "w6",
    part: 2,
    type: "Report",
    title: "Report — Facilities for international students",
    length: "280–320 words",
    task: "The principal of your college has asked you to write a report on the facilities and support currently available to international students. Your report should evaluate existing provision, identify the most significant shortcomings, and recommend improvements. Write your report.",
    checklist: [
      "Content：評估現況、指出缺失、提出具體建議",
      "Communicative Achievement：report 語域—客觀、非個人化、有標題分節",
      "Organisation：Introduction / Findings / Recommendations 結構",
      "Language：正式被動與名詞化（provision, uptake, be allocated…）"
    ],
    model: "Model outline — Introduction: purpose and sources (survey of 40 students, staff interviews). Current provision: orientation week praised; language support oversubscribed. Shortcomings: accommodation office closes before most arrivals; no term-time academic writing support. Recommendations: extend office hours during arrival fortnight; recruit peer mentors; ring-fence budget for a writing centre. Conclusion: modest, largely administrative changes would yield disproportionate gains."
  },
  {
    id: "w7",
    part: 2,
    type: "Article",
    title: "Article — Is privacy dead?",
    length: "280–320 words",
    task: "A current-affairs magazine is running a series entitled 'Ideas we may have to abandon'. You decide to contribute an article on privacy. Discuss whether privacy can survive in a digitally connected world, and what, if anything, individuals should do about it. Write your article.",
    checklist: [
      "Content：討論隱私是否已死、個人可以怎麼做",
      "Communicative Achievement：article 語域—抓住讀者、可帶反問句與幽默",
      "Organisation：鉤子開頭、論點推進、令人回味的結尾",
      "Language：修辭手法（rhetorical questions, tricolon, irony）"
    ],
    model: "Model opening — Somewhere, a server knows what time you woke up this morning. It knows before your family does. We surrendered this knowledge not at gunpoint but at the tap of an 'I agree' button — which raises an uncomfortable question: can something be dead if we keep cheerfully burying it ourselves?"
  },
  {
    id: "w8",
    part: 2,
    type: "Letter",
    title: "Letter — Defending traditional crafts",
    length: "280–320 words",
    task: "A national newspaper has published an article claiming that traditional crafts are economically irrelevant and that public funding for them should be withdrawn. You decide to write a letter to the editor responding to the article. Challenge the writer's arguments and make a case for the continued support of traditional crafts. Write your letter.",
    checklist: [
      "Content：反駁原文論點、提出工藝的經濟與文化價值",
      "Communicative Achievement：正式書信語域—有力但有禮",
      "Organisation：開頭指明回應對象、逐點反駁、明確訴求收尾",
      "Language：讓步與反駁句型（While it is true that…, the claim that… does not withstand scrutiny）"
    ],
    model: "Model paragraph — Your correspondent measures the value of a craft by its quarterly turnover, a yardstick by which most orchestras, libraries and, indeed, newspapers would fare little better. What this accounting overlooks is that traditional skills, once lost, are not recoverable at any price: no subsidy, however generous, can resurrect a technique whose last practitioner has died."
  }
];

/* ---------- Speaking long-turn prompts (10) ---------- */
var SPEAKING = [
  {
    question: "Is technological progress always a good thing?",
    bullets: ["quality of life", "unintended consequences", "who decides what counts as progress"]
  },
  {
    question: "How much privacy should individuals be prepared to give up for convenience?",
    bullets: ["personal data and services", "surveillance and security", "future generations' expectations"]
  },
  {
    question: "What role should tradition play in a rapidly changing society?",
    bullets: ["identity and belonging", "traditions that hold societies back", "reinventing customs for new contexts"]
  },
  {
    question: "Is ambition essential for a fulfilling life?",
    bullets: ["personal achievement", "the cost of relentless striving", "contentment as an alternative"]
  },
  {
    question: "Should governments fund the arts, or should the market decide?",
    bullets: ["art as a public good", "taxpayers' priorities", "what would be lost without subsidy"]
  },
  {
    question: "Do cities bring out the best or the worst in people?",
    bullets: ["opportunity and anonymity", "community and isolation", "the pace of urban life"]
  },
  {
    question: "Has the idea of celebrity changed for better or worse?",
    bullets: ["fame and talent", "social media influence", "the price of public attention"]
  },
  {
    question: "What should education prepare young people for?",
    bullets: ["employment and skills", "citizenship and values", "a world we cannot predict"]
  },
  {
    question: "Is nostalgia a comfort or a trap?",
    bullets: ["how memory idealises the past", "nostalgia in politics and marketing", "learning from history honestly"]
  },
  {
    question: "Are people today too unwilling to take risks?",
    bullets: ["safety culture", "innovation and failure", "who bears the consequences of risk"]
  }
];

/* ---------- Speaking sample phrases ---------- */
var SPEAKING_PHRASES = [
  "That's a thornier question than it first appears, because…",
  "I'd be inclined to argue that…, though I concede that…",
  "It would be an oversimplification to say…, but…",
  "There's a strong case to be made for…, not least because…",
  "Far from being…, it strikes me as…",
  "To some extent that depends on what we mean by…",
  "One could hardly deny that…, and yet…",
  "If anything, the opposite seems to be true: …",
  "Which brings me to my second point, namely…",
  "On balance, I'd come down on the side of…"
];

if (typeof module !== 'undefined') {
  module.exports = { QUESTIONS: QUESTIONS, WRITING: WRITING, SPEAKING: SPEAKING, SPEAKING_PHRASES: SPEAKING_PHRASES };
}
