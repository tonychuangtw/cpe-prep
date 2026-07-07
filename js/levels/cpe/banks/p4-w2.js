/* CPE Prep extra bank: part4 wave 2 */
(function () {
  var BANK = [
    {
      original: "Unsurprisingly, the concert sold out within minutes.",
      keyword: "WONDER",
      gapped: "It is ____ the concert sold out within minutes.",
      answers: ["little wonder that", "small wonder that", "no wonder that"],
      model: "little wonder that",
      explanation: "'It is little/small/no wonder that...' is a formal way of saying something is not surprising."
    },
    {
      original: "She is definitely not a beginner.",
      keyword: "MEANS",
      gapped: "She is ____ a beginner.",
      answers: ["by no means"],
      model: "by no means",
      explanation: "'By no means' is an emphatic negative meaning 'definitely not' or 'in no way'."
    },
    {
      original: "He suddenly realised that he had left his passport at home.",
      keyword: "DAWNED",
      gapped: "It suddenly ____ he had left his passport at home.",
      answers: ["dawned on him that"],
      model: "dawned on him that",
      explanation: "'It dawned on somebody that...' means the person suddenly realised or understood something."
    },
    {
      original: "The management will close the factory only if everything else fails.",
      keyword: "RESORT",
      gapped: "The management will close the factory only ____.",
      answers: ["as a last resort"],
      model: "as a last resort",
      explanation: "'As a last resort' means only when all other options have been exhausted."
    },
    {
      original: "Everyone was astonished by the minister's sudden resignation.",
      keyword: "TAKEN",
      gapped: "Everyone was ____ the minister's sudden resignation.",
      answers: ["taken aback by"],
      model: "taken aback by",
      explanation: "'To be taken aback by something' means to be shocked or astonished by it."
    },
    {
      original: "I don't mind at all if you open the window.",
      keyword: "OBJECTION",
      gapped: "I have ____ your opening the window.",
      answers: ["no objection whatsoever to", "no objection at all to"],
      model: "no objection whatsoever to",
      explanation: "'To have no objection (whatsoever/at all) to something' is a formal way of saying you do not mind it."
    },
    {
      original: "I never thought of asking the neighbours for help.",
      keyword: "OCCURRED",
      gapped: "It never ____ the neighbours for help.",
      answers: ["occurred to me to ask"],
      model: "occurred to me to ask",
      explanation: "'It never occurred to me to do something' means the idea of doing it never entered my mind."
    },
    {
      original: "You can use my car whenever you need it.",
      keyword: "DISPOSAL",
      gapped: "My car is ____ whenever you need it.",
      answers: ["at your disposal"],
      model: "at your disposal",
      explanation: "'At somebody's disposal' means available for that person to use freely."
    },
    {
      original: "I simply cannot explain why he behaved so rudely.",
      keyword: "LOSS",
      gapped: "I am ____ why he behaved so rudely.",
      answers: ["at a loss to explain", "at a complete loss to explain"],
      model: "at a loss to explain",
      explanation: "'To be at a (complete) loss to explain something' means to be unable to explain it."
    },
    {
      original: "She succeeded through sheer hard work.",
      keyword: "DINT",
      gapped: "She succeeded ____ hard work.",
      answers: ["by dint of sheer"],
      model: "by dint of sheer",
      explanation: "'By dint of' is a formal expression meaning 'by means of' or 'through'."
    },
    {
      original: "The scandal will inevitably damage his reputation.",
      keyword: "BOUND",
      gapped: "The scandal is ____ his reputation.",
      answers: ["bound to damage"],
      model: "bound to damage",
      explanation: "'To be bound to do something' expresses certainty or inevitability."
    },
    {
      original: "The sailors could do nothing against the storm.",
      keyword: "MERCY",
      gapped: "The sailors were ____ the storm.",
      answers: ["at the mercy of"],
      model: "at the mercy of",
      explanation: "'At the mercy of' means completely powerless against something or in its control."
    },
    {
      original: "She was offended by his dismissive remarks.",
      keyword: "EXCEPTION",
      gapped: "She ____ his dismissive remarks.",
      answers: ["took exception to"],
      model: "took exception to",
      explanation: "'To take exception to something' means to be offended by or object strongly to it."
    },
    {
      original: "He agreed to sign the contract, although he was unwilling to.",
      keyword: "RELUCTANT",
      gapped: "Although he was ____ the contract, he agreed to.",
      answers: ["reluctant to sign"],
      model: "reluctant to sign",
      explanation: "'Reluctant to do something' means unwilling to do it; the concessive clause preserves the contrast."
    },
    {
      original: "The ceremony will take place regardless of the weather.",
      keyword: "WHETHER",
      gapped: "The ceremony will take place ____ is bad.",
      answers: ["whether or not the weather"],
      model: "whether or not the weather",
      explanation: "'Whether or not' introduces two alternatives and shows the outcome is the same in either case."
    },
    {
      original: "The actor said he had never met the producer.",
      keyword: "DENIED",
      gapped: "The actor ____ met the producer.",
      answers: ["denied ever having", "denied having ever"],
      model: "denied ever having",
      explanation: "'Deny + gerund' reports a negative statement; 'ever having met' emphasises 'never'."
    },
    {
      original: "She fainted as soon as she saw the blood.",
      keyword: "SIGHT",
      gapped: "She fainted ____ the blood.",
      answers: ["at the sight of"],
      model: "at the sight of",
      explanation: "'At the sight of something' means at the moment of seeing it."
    },
    {
      original: "She memorised the entire speech.",
      keyword: "HEART",
      gapped: "She learned the entire speech ____.",
      answers: ["off by heart"],
      model: "off by heart",
      explanation: "'To learn something (off) by heart' means to memorise it completely."
    },
    {
      original: "We stopped communicating with each other years ago.",
      keyword: "TOUCH",
      gapped: "We ____ each other years ago.",
      answers: ["lost touch with"],
      model: "lost touch with",
      explanation: "'To lose touch with somebody' means to stop having contact with them."
    },
    {
      original: "The party was much better than we had expected.",
      keyword: "TURNED",
      gapped: "The party ____ much better than we had expected.",
      answers: ["turned out to be"],
      model: "turned out to be",
      explanation: "'To turn out to be' describes how something proved to be in the end."
    },
    {
      original: "In the end, honesty always pays.",
      keyword: "RUN",
      gapped: "Honesty always pays ____.",
      answers: ["in the long run"],
      model: "in the long run",
      explanation: "'In the long run' means over a long period of time or eventually."
    },
    {
      original: "The rescue of the trapped miners was absolutely miraculous.",
      keyword: "SHORT",
      gapped: "The rescue of the trapped miners was ____ miraculous.",
      answers: ["nothing short of"],
      model: "nothing short of",
      explanation: "'Nothing short of + adjective' is an emphatic way of saying 'absolutely' or 'no less than'."
    },
    {
      original: "He discussed the proposal in great detail.",
      keyword: "LENGTH",
      gapped: "He discussed the proposal ____.",
      answers: ["at great length", "at considerable length", "at some length"],
      model: "at great length",
      explanation: "'To discuss something at (great) length' means to talk about it in detail for a long time."
    },
    {
      original: "She criticised everything in the report.",
      keyword: "FAULT",
      gapped: "She ____ everything in the report.",
      answers: ["found fault with"],
      model: "found fault with",
      explanation: "'To find fault with something' means to criticise it or look for its defects."
    },
    {
      original: "She has accepted that she will never get promoted.",
      keyword: "RESIGNED",
      gapped: "She has ____ that she will never get promoted.",
      answers: ["become resigned to the fact", "resigned herself to the fact"],
      model: "resigned herself to the fact",
      explanation: "'To resign oneself to (the fact that)' means to accept something unpleasant that cannot be changed."
    },
    {
      original: "Despite what most people believe, bats are not blind.",
      keyword: "CONTRARY",
      gapped: "____ belief, bats are not blind.",
      answers: ["Contrary to popular"],
      model: "Contrary to popular",
      explanation: "'Contrary to popular belief' means despite what most people think."
    },
    {
      original: "Everything happened exactly as we had planned.",
      keyword: "ACCORDING",
      gapped: "Everything went ____.",
      answers: ["according to plan", "exactly according to plan"],
      model: "according to plan",
      explanation: "'To go according to plan' means to happen exactly as intended."
    },
    {
      original: "To put it differently, the project has failed.",
      keyword: "WORDS",
      gapped: "____ the project has failed.",
      answers: ["In other words"],
      model: "In other words",
      explanation: "'In other words' introduces a restatement of the same idea in a different way."
    },
    {
      original: "Take an umbrella because it might rain later.",
      keyword: "CASE",
      gapped: "Take an umbrella ____ later.",
      answers: ["in case it rains"],
      model: "in case it rains",
      explanation: "'In case + present simple' expresses a precaution against something that might happen."
    },
    {
      original: "This orchid is not found anywhere else in the world.",
      keyword: "NOWHERE",
      gapped: "____ can this orchid be found.",
      answers: ["Nowhere else in the world"],
      model: "Nowhere else in the world",
      explanation: "Fronting the negative adverbial 'nowhere else' triggers subject-auxiliary inversion."
    },
    {
      original: "The critics have almost never praised a debut novel so highly.",
      keyword: "RARELY",
      gapped: "____ a debut novel so highly.",
      answers: ["Rarely have the critics praised"],
      model: "Rarely have the critics praised",
      explanation: "Fronting 'rarely' requires inversion of subject and auxiliary: 'Rarely have they...'."
    },
    {
      original: "She didn't apologise, and she didn't offer an explanation either.",
      keyword: "NOR",
      gapped: "She didn't apologise, ____ an explanation.",
      answers: ["nor did she offer"],
      model: "nor did she offer",
      explanation: "'Nor + auxiliary + subject' adds a second negative clause with inversion."
    },
    {
      original: "She absolutely refused to reveal her sources in any situation.",
      keyword: "UNDER",
      gapped: "____ reveal her sources.",
      answers: ["Under no circumstances would she"],
      model: "Under no circumstances would she",
      explanation: "'Under no circumstances' fronted at the start of a sentence forces inversion and expresses absolute refusal."
    },
    {
      original: "If she hadn't intervened, the deal would have collapsed.",
      keyword: "OTHERWISE",
      gapped: "She intervened; ____ have collapsed.",
      answers: ["otherwise the deal would"],
      model: "otherwise the deal would",
      explanation: "'Otherwise' replaces an if-clause, meaning 'if that had not happened'."
    },
    {
      original: "If the police hadn't intervened, the riot would have spread.",
      keyword: "INTERVENTION",
      gapped: "____ the police, the riot would have spread.",
      answers: ["But for the intervention of", "Without the intervention of"],
      model: "But for the intervention of",
      explanation: "The verb 'intervene' is nominalised as 'intervention'; 'but for' means 'if it had not been for'."
    },
    {
      original: "She really wants to travel abroad again.",
      keyword: "LONGS",
      gapped: "She ____ abroad again.",
      answers: ["longs to travel"],
      model: "longs to travel",
      explanation: "'To long to do something' means to want to do it very much."
    },
    {
      original: "You really should start taking your studies seriously now.",
      keyword: "ABOUT",
      gapped: "It is ____ you started taking your studies seriously.",
      answers: ["about time that", "just about time that"],
      model: "about time that",
      explanation: "'It's about time + past tense' criticises a delay: the action should happen now."
    },
    {
      original: "You certainly won't persuade me to lend you my car.",
      keyword: "WAY",
      gapped: "There is ____ persuade me to lend you my car.",
      answers: ["no way you will", "no way you can", "no way anyone can"],
      model: "no way you will",
      explanation: "'There is no way + clause' emphatically denies any possibility."
    },
    {
      original: "I'm sure she has forgotten our appointment.",
      keyword: "MUST",
      gapped: "She ____ our appointment.",
      answers: ["must have forgotten"],
      model: "must have forgotten",
      explanation: "'Must have + past participle' expresses a confident deduction about the past."
    },
    {
      original: "It's impossible that he saw us, because he was abroad.",
      keyword: "CANNOT",
      gapped: "He ____ us, because he was abroad.",
      answers: ["cannot have seen", "cannot possibly have seen"],
      model: "cannot have seen",
      explanation: "'Cannot have + past participle' expresses a deduction that something was impossible in the past."
    },
    {
      original: "The manager made the final decision, not the owner.",
      keyword: "WHO",
      gapped: "It was the manager ____ final decision, not the owner.",
      answers: ["who made the"],
      model: "who made the",
      explanation: "A cleft sentence with 'It was... who' emphasises the agent of the action."
    },
    {
      original: "The only thing she wants is a quiet weekend.",
      keyword: "ALL",
      gapped: "____ is a quiet weekend.",
      answers: ["All she wants", "All that she wants"],
      model: "All she wants",
      explanation: "'All (that) + clause' is a cleft structure meaning 'the only thing that...'."
    },
    {
      original: "As the deadline approached, he became less and less confident.",
      keyword: "LESS",
      gapped: "The closer the deadline came, ____ he became.",
      answers: ["the less confident"],
      model: "the less confident",
      explanation: "The double comparative 'the + comparative..., the + comparative...' links two changing situations."
    },
    {
      original: "The exam was much easier than I had feared.",
      keyword: "NEARLY",
      gapped: "The exam was not ____ as I had feared.",
      answers: ["nearly as difficult", "nearly as hard"],
      model: "nearly as difficult",
      explanation: "'Not nearly as + adjective + as' means 'much less... than'."
    },
    {
      original: "This is without question the best film of the year.",
      keyword: "EASILY",
      gapped: "This is ____ film of the year.",
      answers: ["easily the best"],
      model: "easily the best",
      explanation: "'Easily the best' emphasises that something is the best by a clear margin."
    },
    {
      original: "No matter how hard I tried, I couldn't open the jar.",
      keyword: "TRY",
      gapped: "____ I could not open the jar.",
      answers: ["Try as I might"],
      model: "Try as I might",
      explanation: "'Try as I might' is a concessive inversion meaning 'however hard I tried'."
    },
    {
      original: "Although it was raining heavily, they went hiking.",
      keyword: "SPITE",
      gapped: "They went hiking ____ heavy rain.",
      answers: ["in spite of the"],
      model: "in spite of the",
      explanation: "'In spite of + noun' expresses concession, equivalent to 'although' + clause."
    },
    {
      original: "Although he had apologised repeatedly, she refused to forgive him.",
      keyword: "EVEN",
      gapped: "She refused to forgive him ____ apologised repeatedly.",
      answers: ["even though he had"],
      model: "even though he had",
      explanation: "'Even though' is an emphatic form of 'although' introducing a concessive clause."
    },
    {
      original: "Unfortunately, we did not book our tickets earlier.",
      keyword: "PITY",
      gapped: "It is ____ book our tickets earlier.",
      answers: ["a pity we did not", "a pity that we did not", "a great pity we did not"],
      model: "a pity we did not",
      explanation: "'It's a pity (that)...' expresses regret about a situation."
    },
    {
      original: "She would much rather work from home than commute.",
      keyword: "PREFERABLE",
      gapped: "She considers working from home ____ commuting.",
      answers: ["to be preferable to", "far preferable to", "much preferable to"],
      model: "far preferable to",
      explanation: "'Preferable to' expresses preference; note the preposition 'to', not 'than'."
    },
    {
      original: "The negotiations failed at the very last minute.",
      keyword: "FELL",
      gapped: "The negotiations ____ minute.",
      answers: ["fell through at the very last"],
      model: "fell through at the very last",
      explanation: "'To fall through' means to fail to happen or be completed, especially of plans or deals."
    },
    {
      original: "She finds it hard to communicate her ideas to students.",
      keyword: "GET",
      gapped: "She finds it hard to ____ students.",
      answers: ["get her ideas across to"],
      model: "get her ideas across to",
      explanation: "'To get something across to somebody' means to communicate it successfully."
    },
    {
      original: "He invented the whole story about the robbery.",
      keyword: "UP",
      gapped: "He ____ story about the robbery.",
      answers: ["made up the whole"],
      model: "made up the whole",
      explanation: "'To make something up' means to invent it, often to deceive."
    },
    {
      original: "The wedding was postponed because of the strike.",
      keyword: "OFF",
      gapped: "The wedding ____ of the strike.",
      answers: ["was put off because"],
      model: "was put off because",
      explanation: "'To put something off' is a phrasal verb meaning to postpone it."
    },
    {
      original: "The firefighters extinguished the blaze within an hour.",
      keyword: "OUT",
      gapped: "The firefighters ____ blaze within an hour.",
      answers: ["put out the"],
      model: "put out the",
      explanation: "'To put out a fire' means to extinguish it."
    },
    {
      original: "She examined the documents very carefully.",
      keyword: "THROUGH",
      gapped: "She went ____ very carefully.",
      answers: ["through the documents"],
      model: "through the documents",
      explanation: "'To go through something' means to examine or check it carefully."
    },
    {
      original: "I'm really excited about seeing you next week.",
      keyword: "FORWARD",
      gapped: "I'm really ____ you next week.",
      answers: ["looking forward to seeing"],
      model: "looking forward to seeing",
      explanation: "'To look forward to + gerund' means to anticipate something with pleasure."
    },
    {
      original: "The authorities abolished the old regulations.",
      keyword: "WITH",
      gapped: "The authorities ____ old regulations.",
      answers: ["did away with the"],
      model: "did away with the",
      explanation: "'To do away with something' means to abolish or get rid of it."
    },
    {
      original: "People fear that hundreds of residents died in the earthquake.",
      keyword: "FEARED",
      gapped: "Hundreds of residents are ____ died in the earthquake.",
      answers: ["feared to have"],
      model: "feared to have",
      explanation: "The impersonal passive 'are feared to have + past participle' reports a feared past event."
    },
    {
      original: "He claims that he is descended from royalty.",
      keyword: "CLAIMED",
      gapped: "He ____ descended from royalty.",
      answers: ["is claimed to be"],
      model: "is claimed to be",
      explanation: "The passive reporting structure 'is claimed to be' distances the writer from the claim."
    },
    {
      original: "Many people believe the chairman was responsible for the losses.",
      keyword: "HELD",
      gapped: "The chairman is widely ____ been responsible for the losses.",
      answers: ["held to have"],
      model: "held to have",
      explanation: "'Be held to have done' is a formal passive meaning 'be believed to have done'."
    },
    {
      original: "Everyone presumes that the missing climbers are dead.",
      keyword: "PRESUMED",
      gapped: "The missing climbers are ____ dead.",
      answers: ["presumed to be"],
      model: "presumed to be",
      explanation: "The impersonal passive 'are presumed to be' reports a general assumption."
    },
    {
      original: "Everyone accepts that she is the leading expert in the field.",
      keyword: "ACKNOWLEDGED",
      gapped: "She is widely ____ the leading expert in the field.",
      answers: ["acknowledged to be", "acknowledged as being"],
      model: "acknowledged to be",
      explanation: "'Be acknowledged to be / as' means to be generally accepted as something."
    },
    {
      original: "Because he failed to pay the fine, he was arrested.",
      keyword: "FAILURE",
      gapped: "His ____ the fine led to his arrest.",
      answers: ["failure to pay"],
      model: "failure to pay",
      explanation: "The verb 'fail' is nominalised: 'his failure to pay' replaces 'because he failed to pay'."
    },
    {
      original: "She refused to compromise, which surprised everyone.",
      keyword: "REFUSAL",
      gapped: "Her ____ surprised everyone.",
      answers: ["refusal to compromise"],
      model: "refusal to compromise",
      explanation: "The verb 'refuse' becomes the noun 'refusal', followed by a to-infinitive."
    },
    {
      original: "As soon as we arrived at the hotel, it started to snow.",
      keyword: "ARRIVAL",
      gapped: "On ____ the hotel, it started to snow.",
      answers: ["our arrival at"],
      model: "our arrival at",
      explanation: "'On + possessive + arrival at' is a nominalised way of saying 'as soon as we arrived'."
    },
    {
      original: "He cannot delegate, and this frustrates his team.",
      keyword: "INABILITY",
      gapped: "His ____ frustrates his team.",
      answers: ["inability to delegate"],
      model: "inability to delegate",
      explanation: "'Inability to do something' is the noun form of 'cannot do something'."
    },
    {
      original: "Once the bridge has been completed, the ferry will stop running.",
      keyword: "COMPLETION",
      gapped: "The ferry will stop running ____ bridge.",
      answers: ["on completion of the", "upon completion of the"],
      model: "on completion of the",
      explanation: "'On/upon completion of' is a formal nominalisation meaning 'when something has been completed'."
    },
    {
      original: "The committee approved the plan, to everyone's relief.",
      keyword: "APPROVAL",
      gapped: "To everyone's relief, the plan ____ the committee.",
      answers: ["met with the approval of", "won the approval of", "gained the approval of"],
      model: "met with the approval of",
      explanation: "'To meet with/win the approval of somebody' is a nominalised equivalent of 'be approved by'."
    },
    {
      original: "She is deeply committed to protecting wildlife.",
      keyword: "COMMITMENT",
      gapped: "She has a deep ____ wildlife.",
      answers: ["commitment to protecting"],
      model: "commitment to protecting",
      explanation: "The adjective 'committed' is nominalised as 'commitment to + gerund'."
    },
    {
      original: "They launched the campaign because demand was growing.",
      keyword: "RESPONSE",
      gapped: "The campaign was launched ____ growing demand.",
      answers: ["in response to", "in response to the"],
      model: "in response to",
      explanation: "'In response to' means as a reaction to something."
    },
    {
      original: "Very few people attended the lecture on medieval poetry.",
      keyword: "ATTENDANCE",
      gapped: "____ on medieval poetry was very poor.",
      answers: ["Attendance at the lecture"],
      model: "Attendance at the lecture",
      explanation: "The verb 'attend' is nominalised as 'attendance at', describing how many people came."
    },
    {
      original: "The two candidates are almost level in the opinion polls.",
      keyword: "NECK",
      gapped: "The two candidates are ____ in the opinion polls.",
      answers: ["neck and neck"],
      model: "neck and neck",
      explanation: "'Neck and neck' means level or equal in a competition or race."
    },
    {
      original: "She was extremely pleased with her exam results.",
      keyword: "MOON",
      gapped: "She was ____ her exam results.",
      answers: ["over the moon about", "over the moon at", "over the moon with"],
      model: "over the moon about",
      explanation: "'Over the moon' is an idiom meaning extremely happy or delighted."
    },
    {
      original: "I feel slightly unwell today.",
      keyword: "WEATHER",
      gapped: "I feel ____ today.",
      answers: ["under the weather", "a little under the weather"],
      model: "under the weather",
      explanation: "'Under the weather' is an idiom meaning slightly ill."
    },
    {
      original: "The plans for the new stadium are not yet final.",
      keyword: "STONE",
      gapped: "The plans for the new stadium are not yet ____.",
      answers: ["set in stone", "carved in stone"],
      model: "set in stone",
      explanation: "'Set/carved in stone' means fixed and impossible to change."
    },
    {
      original: "Her resignation was completely unexpected.",
      keyword: "BLUE",
      gapped: "Her resignation came ____.",
      answers: ["out of the blue", "completely out of the blue"],
      model: "out of the blue",
      explanation: "'Out of the blue' means suddenly and without any warning."
    },
    {
      original: "You must be joking if you think I'll pay that much.",
      keyword: "LEG",
      gapped: "You must be ____ if you think I'll pay that much.",
      answers: ["pulling my leg"],
      model: "pulling my leg",
      explanation: "'To pull somebody's leg' means to joke with or tease them."
    },
    {
      original: "The situation at the border is no longer under control.",
      keyword: "HAND",
      gapped: "The situation at the border has got ____.",
      answers: ["out of hand", "completely out of hand"],
      model: "out of hand",
      explanation: "'To get out of hand' means to become impossible to control."
    },
    {
      original: "He finally told her what had been worrying him.",
      keyword: "CHEST",
      gapped: "He finally got his worries ____.",
      answers: ["off his chest"],
      model: "off his chest",
      explanation: "'To get something off one's chest' means to talk about something that has been troubling you."
    },
    {
      original: "The residents completely ignored our repeated warnings.",
      keyword: "DEAF",
      gapped: "Our repeated warnings ____ ears.",
      answers: ["fell on deaf"],
      model: "fell on deaf",
      explanation: "'To fall on deaf ears' means to be ignored by the people addressed."
    },
    {
      original: "You are exaggerating a completely trivial problem.",
      keyword: "MOUNTAIN",
      gapped: "You are making a ____ molehill.",
      answers: ["mountain out of a"],
      model: "mountain out of a",
      explanation: "'To make a mountain out of a molehill' means to treat a small problem as a huge one."
    },
    {
      original: "Let's assume he is telling the truth for now.",
      keyword: "BENEFIT",
      gapped: "Let's give him the ____ doubt for now.",
      answers: ["benefit of the"],
      model: "benefit of the",
      explanation: "'To give somebody the benefit of the doubt' means to choose to believe them without proof."
    },
    {
      original: "The two designers understand each other perfectly.",
      keyword: "WAVELENGTH",
      gapped: "The two designers are ____.",
      answers: ["on the same wavelength", "on exactly the same wavelength"],
      model: "on the same wavelength",
      explanation: "'On the same wavelength' means thinking in the same way and understanding each other easily."
    },
    {
      original: "It wasn't necessary for you to buy a gift, but you did.",
      keyword: "NEED",
      gapped: "You ____ a gift.",
      answers: ["need not have bought"],
      model: "need not have bought",
      explanation: "'Need not have + past participle' describes a past action that was done but was unnecessary."
    },
    {
      original: "The concert was cancelled because the singer was ill.",
      keyword: "DUE",
      gapped: "The concert was cancelled ____ illness.",
      answers: ["due to the singer's"],
      model: "due to the singer's",
      explanation: "'Due to + noun' expresses cause, replacing a 'because' clause."
    },
    {
      original: "Considering the new evidence, the case was reopened.",
      keyword: "LIGHT",
      gapped: "The case was reopened ____ evidence.",
      answers: ["in the light of new", "in light of the new", "in the light of the new"],
      model: "in the light of new",
      explanation: "'In (the) light of' means taking something into consideration."
    },
    {
      original: "Concerning the schedule, there have been some changes.",
      keyword: "REGARD",
      gapped: "____ the schedule, there have been some changes.",
      answers: ["With regard to", "In regard to"],
      model: "With regard to",
      explanation: "'With/in regard to' is a formal way of saying 'concerning'."
    },
    {
      original: "The lawyer spoke for her client at the hearing.",
      keyword: "BEHALF",
      gapped: "The lawyer spoke ____ client at the hearing.",
      answers: ["on behalf of her"],
      model: "on behalf of her",
      explanation: "'On behalf of somebody' means as that person's representative."
    },
    {
      original: "Many businesses closed following the financial crisis.",
      keyword: "WAKE",
      gapped: "Many businesses closed ____ financial crisis.",
      answers: ["in the wake of the"],
      model: "in the wake of the",
      explanation: "'In the wake of' means immediately following and as a result of an event."
    },
    {
      original: "She is responsible for the marketing department.",
      keyword: "CHARGE",
      gapped: "She is ____ the marketing department.",
      answers: ["in charge of"],
      model: "in charge of",
      explanation: "'In charge of' means having responsibility for or control over something."
    },
    {
      original: "She and her brother both have a passion for jazz.",
      keyword: "COMMON",
      gapped: "She has a passion for jazz ____ brother.",
      answers: ["in common with her"],
      model: "in common with her",
      explanation: "'To have something in common with somebody' means to share the same interest or feature."
    },
    {
      original: "The species may soon become extinct.",
      keyword: "DANGER",
      gapped: "The species is ____ extinct.",
      answers: ["in danger of becoming", "in grave danger of becoming"],
      model: "in danger of becoming",
      explanation: "'In danger of + gerund' means at risk of something bad happening."
    },
    {
      original: "She was just about to leave when the phone rang.",
      keyword: "POINT",
      gapped: "She was ____ leaving when the phone rang.",
      answers: ["on the point of"],
      model: "on the point of",
      explanation: "'On the point of + gerund' means just about to do something."
    },
    {
      original: "The company very nearly went bankrupt last year.",
      keyword: "BRINK",
      gapped: "The company was ____ bankruptcy last year.",
      answers: ["on the brink of"],
      model: "on the brink of",
      explanation: "'On the brink of' means on the very edge of, extremely close to a situation."
    },
    {
      original: "He was filled with dread at the thought of retiring early.",
      keyword: "PROSPECT",
      gapped: "The ____ early filled him with dread.",
      answers: ["prospect of retiring", "prospect of having to retire"],
      model: "prospect of retiring",
      explanation: "'The prospect of + gerund' refers to a future possibility as it is anticipated."
    },
    {
      original: "She can easily run a marathon.",
      keyword: "CAPABLE",
      gapped: "She is quite ____ a marathon.",
      answers: ["capable of running"],
      model: "capable of running",
      explanation: "'Capable of + gerund' means having the ability to do something."
    },
    {
      original: "You might lose your deposit if you cancel the booking.",
      keyword: "RISK",
      gapped: "If you cancel the booking, you ____ your deposit.",
      answers: ["run the risk of losing"],
      model: "run the risk of losing",
      explanation: "'To run the risk of + gerund' means to do something that might have a bad result."
    },
    {
      original: "He finished the project on time, but he ruined his health.",
      keyword: "COST",
      gapped: "He finished the project on time, but ____ health.",
      answers: ["at the cost of his"],
      model: "at the cost of his",
      explanation: "'At the cost of' means with the loss or sacrifice of something."
    },
    {
      original: "He tells jokes that make his colleagues look foolish.",
      keyword: "EXPENSE",
      gapped: "He tells jokes ____ colleagues.",
      answers: ["at the expense of his"],
      model: "at the expense of his",
      explanation: "'At somebody's expense' means in a way that makes that person look foolish or suffer."
    },
    {
      original: "The two departments constantly disagree with each other.",
      keyword: "LOGGERHEADS",
      gapped: "The two departments are constantly ____ each other.",
      answers: ["at loggerheads with"],
      model: "at loggerheads with",
      explanation: "'At loggerheads with' means in strong disagreement or dispute with somebody."
    },
    {
      original: "Perhaps she misunderstood the instructions.",
      keyword: "MAY",
      gapped: "She ____ the instructions.",
      answers: ["may have misunderstood"],
      model: "may have misunderstood",
      explanation: "'May have + past participle' expresses a possibility about the past."
    },
    {
      original: "I'm certain the butler didn't commit the crime.",
      keyword: "COULD",
      gapped: "The butler ____ the crime.",
      answers: ["could not have committed", "could not possibly have committed"],
      model: "could not have committed",
      explanation: "'Could not have + past participle' expresses certainty that something was impossible in the past."
    },
    {
      original: "Looking back, we clearly should have invested earlier.",
      keyword: "HINDSIGHT",
      gapped: "____ we clearly should have invested earlier.",
      answers: ["With the benefit of hindsight"],
      model: "With the benefit of hindsight",
      explanation: "'With (the benefit of) hindsight' means judging a past situation with knowledge gained later."
    },
    {
      original: "He deeply regrets not buying that house when he could.",
      keyword: "KICKING",
      gapped: "He is ____ not buying that house when he could.",
      answers: ["kicking himself for"],
      model: "kicking himself for",
      explanation: "'To kick oneself for something' means to be annoyed with oneself about a mistake or missed chance."
    },
    {
      original: "Almost as soon as she sat down, the baby started crying.",
      keyword: "BARELY",
      gapped: "____ down when the baby started crying.",
      answers: ["Barely had she sat"],
      model: "Barely had she sat",
      explanation: "Fronted 'barely' triggers inversion: 'Barely had she sat down when...'."
    },
    {
      original: "I can't remember her name at the moment.",
      keyword: "ESCAPES",
      gapped: "Her name ____ the moment.",
      answers: ["escapes me at", "escapes me for"],
      model: "escapes me at",
      explanation: "'Something escapes me' means I cannot remember or recall it."
    },
    {
      original: "I never once thought of resigning.",
      keyword: "CROSSED",
      gapped: "The idea of resigning never once ____.",
      answers: ["crossed my mind"],
      model: "crossed my mind",
      explanation: "'To cross somebody's mind' means to occur to them as a thought."
    },
    {
      original: "It is undeniable that the climate is changing.",
      keyword: "DENYING",
      gapped: "There is ____ the climate is changing.",
      answers: ["no denying that", "no denying the fact that"],
      model: "no denying that",
      explanation: "'There is no denying that...' means it cannot be denied; it is undeniable."
    },
    {
      original: "It's completely futile to argue with him.",
      keyword: "USE",
      gapped: "It is ____ with him.",
      answers: ["no use arguing", "no use whatsoever arguing", "absolutely no use arguing"],
      model: "no use arguing",
      explanation: "'It's no use + gerund' means doing something is pointless."
    },
    {
      original: "Please don't make a special effort to meet us at the airport.",
      keyword: "TROUBLE",
      gapped: "Please don't go to the ____ us at the airport.",
      answers: ["trouble of meeting"],
      model: "trouble of meeting",
      explanation: "'To go to the trouble of + gerund' means to make a special effort to do something."
    },
    {
      original: "He gave up smoking in order to protect his health.",
      keyword: "SAKE",
      gapped: "He gave up smoking ____ health.",
      answers: ["for the sake of his"],
      model: "for the sake of his",
      explanation: "'For the sake of' means for the benefit or good of something."
    },
    {
      original: "The timetable may change without notice.",
      keyword: "SUBJECT",
      gapped: "The timetable is ____ without notice.",
      answers: ["subject to change"],
      model: "subject to change",
      explanation: "'Subject to change' means liable to be changed."
    },
    {
      original: "This machine tends to overheat in summer.",
      keyword: "LIABLE",
      gapped: "This machine is ____ in summer.",
      answers: ["liable to overheat"],
      model: "liable to overheat",
      explanation: "'Liable to + infinitive' means likely to do something, usually something undesirable."
    },
    {
      original: "I tend to agree with your analysis.",
      keyword: "INCLINED",
      gapped: "I am ____ with your analysis.",
      answers: ["inclined to agree"],
      model: "inclined to agree",
      explanation: "'Inclined to + infinitive' expresses a tendency or mild opinion."
    },
    {
      original: "You may borrow the car provided you drive carefully.",
      keyword: "LONG",
      gapped: "You may borrow the car ____ you drive carefully.",
      answers: ["as long as", "so long as"],
      model: "as long as",
      explanation: "'As/so long as' introduces a condition, meaning 'provided that'."
    },
    {
      original: "If you don't hurry, you'll miss the train.",
      keyword: "UNLESS",
      gapped: "You'll miss the train ____.",
      answers: ["unless you hurry", "unless you hurry up"],
      model: "unless you hurry",
      explanation: "'Unless' means 'if... not' and introduces a negative condition."
    },
    {
      original: "This hotel is far less comfortable than the last one.",
      keyword: "NOTHING",
      gapped: "This hotel is ____ comfortable as the last one.",
      answers: ["nothing like as", "nothing like so"],
      model: "nothing like as",
      explanation: "'Nothing like as... as' is an emphatic way of saying 'far less... than'."
    },
    {
      original: "Only Paris attracts more visitors than Rome does.",
      keyword: "SECOND",
      gapped: "Rome is ____ Paris in the number of visitors it attracts.",
      answers: ["second only to"],
      model: "second only to",
      explanation: "'Second only to X' means that only X ranks higher."
    },
    {
      original: "No one cooks as well as my grandmother.",
      keyword: "MATCH",
      gapped: "When it comes to cooking, no one ____ grandmother.",
      answers: ["is a match for my", "is any match for my"],
      model: "is a match for my",
      explanation: "'To be no/a match for somebody' compares ability; here no one equals the grandmother."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
