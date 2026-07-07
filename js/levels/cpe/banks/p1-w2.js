/* CPE Prep extra bank: part1 wave 2 */
(function () {
  var BANK = [
    {
      text: "The scandal has cast a long ____ over what was otherwise a distinguished career.",
      options: ["cloud", "shadow", "veil", "shade"],
      answer: 1,
      explanation: "'Cast a shadow over' is the fixed idiom for spoiling or marring something. 'Cloud' appears in 'under a cloud', 'veil' collocates with 'draw a veil over', and 'shade' is not used here."
    },
    {
      text: "She ____ no illusions about how difficult the transition to civilian life would be.",
      options: ["kept", "held", "harbours", "was under"],
      answer: 3,
      explanation: "'Be under no illusions about' is the standard expression for a clear-eyed view. 'Harbours' clashes with the past narrative and idiomatically takes 'illusions' less naturally than 'be under'; 'kept' and 'held' do not collocate."
    },
    {
      text: "The defence lawyer seized ____ a minor inconsistency in the witness's testimony.",
      options: ["at", "onto", "on", "for"],
      answer: 2,
      explanation: "'Seize on/upon something' means to exploit it eagerly, especially a mistake or opportunity. 'Seize at', 'seize onto' and 'seize for' are not idiomatic in this sense."
    },
    {
      text: "His resignation speech was widely interpreted as a thinly ____ attack on the party leadership.",
      options: ["veiled", "masked", "cloaked", "shrouded"],
      answer: 0,
      explanation: "'A thinly veiled attack/threat' is the fixed collocation for barely disguised hostility. 'Masked', 'cloaked' and 'shrouded' convey concealment but do not combine with 'thinly' in this idiom."
    },
    {
      text: "The chairman was at ____ to stress that no final decision had yet been taken.",
      options: ["lengths", "efforts", "pains", "care"],
      answer: 2,
      explanation: "'Be at pains to do something' means to take great care to do it. The idiom with 'lengths' is 'go to great lengths', not 'be at lengths'; 'efforts' and 'care' do not fit this structure."
    },
    {
      text: "After the merger fell through, the company found itself in ____ straits financially.",
      options: ["dire", "drastic", "acute", "stark"],
      answer: 0,
      explanation: "'In dire straits' is the fixed idiom meaning in a very difficult situation. 'Drastic' describes measures, 'acute' collocates with 'shortage' or 'pain', and 'stark' with 'contrast' or 'warning'."
    },
    {
      text: "I wouldn't ____ it past him to have leaked the memo himself.",
      options: ["set", "put", "get", "take"],
      answer: 1,
      explanation: "'Not put it past someone (to do something)' means to believe them quite capable of it. None of the other verbs forms this idiom."
    },
    {
      text: "The novel's plot ____ on a chance encounter between two strangers on a night train.",
      options: ["hinges", "leans", "rests", "stands"],
      answer: 0,
      explanation: "'Hinge on' means to depend entirely on. 'Rest on' is possible with 'assumption' or 'foundations' but 'hinge on' is the natural choice for a plot's pivotal point; 'lean on' and 'stand on' do not fit."
    },
    {
      text: "New employees are expected to learn the ____ within their first month on the job.",
      options: ["strings", "ropes", "wires", "cords"],
      answer: 1,
      explanation: "'Learn the ropes' is the idiom meaning to learn how a job is done. 'Strings' appears in 'pull strings', while 'wires' and 'cords' form no such idiom."
    },
    {
      text: "The minister's evasive answers only served to ____ suspicions that a cover-up was under way.",
      options: ["fuel", "feed up", "flame", "spark off"],
      answer: 0,
      explanation: "'Fuel suspicions/speculation' is the standard collocation for intensifying existing doubts. 'Spark off' would suggest creating them anew, 'flame' is not a verb here, and 'feed up' means to fatten."
    },
    {
      text: "Her criticisms, ____ as they were, were delivered with obvious affection.",
      options: ["trenchant", "strident", "abrasive", "truculent"],
      answer: 0,
      explanation: "'Trenchant' means incisive and sharply effective, fitting criticism that is nonetheless affectionate. 'Strident', 'abrasive' and 'truculent' all imply an unpleasant harshness at odds with the concessive clause."
    },
    {
      text: "The report pulls no ____ in its assessment of the hospital's failings.",
      options: ["blows", "stops", "punches", "strings"],
      answer: 2,
      explanation: "'Pull no punches' means to criticise with complete frankness. 'Pull out all the stops' means to make every effort, and 'blows' and 'strings' form different idioms."
    },
    {
      text: "It ____ credulity to suggest that nobody in the department knew what was going on.",
      options: ["stretches", "strains", "presses", "tests"],
      answer: 1,
      explanation: "'Strain credulity' is the established collocation for being almost impossible to believe. 'Stretch' pairs with 'the imagination' or 'a point', while 'press' and 'test' do not collocate with 'credulity'."
    },
    {
      text: "The team's early promise never quite came to ____, and they finished mid-table again.",
      options: ["blossom", "fruition", "harvest", "ripeness"],
      answer: 1,
      explanation: "'Come to fruition' is the fixed phrase for plans or promise being realised. 'Blossom' is a verb in this sense ('their talent blossomed'), and 'harvest' and 'ripeness' do not form the idiom."
    },
    {
      text: "Try as she ____, she could not shake off the feeling of being watched.",
      options: ["would", "could", "might", "should"],
      answer: 2,
      explanation: "'Try as she might' is the fixed concessive formula meaning however hard she tried. 'Would', 'could' and 'should' do not occur in this inversion pattern."
    },
    {
      text: "The senator refused to be ____ into announcing her candidacy before she was ready.",
      options: ["bounced", "sprung", "tipped", "shoved"],
      answer: 0,
      explanation: "'Bounce someone into (doing) something' means to pressure them into a hasty decision. 'Spring' is used in 'spring something on someone', and 'tip' and 'shove' do not take this pattern."
    },
    {
      text: "His account of events is sharply at ____ with the official version.",
      options: ["issue", "conflict", "variance", "difference"],
      answer: 2,
      explanation: "'At variance with' is the fixed phrase meaning in disagreement or inconsistent with. 'At issue' means under discussion, and 'conflict' and 'difference' take 'in' rather than 'at'."
    },
    {
      text: "The government has been accused of riding ____ over the concerns of local residents.",
      options: ["roughshod", "headlong", "slipshod", "hell-bent"],
      answer: 0,
      explanation: "'Ride roughshod over' means to ignore someone's feelings or objections completely. 'Headlong' means recklessly fast, 'slipshod' means careless work, and 'hell-bent' means determined."
    },
    {
      text: "Sales figures for the last quarter make ____ reading for the board.",
      options: ["grim", "dour", "bleak", "sullen"],
      answer: 0,
      explanation: "'Make grim reading' is the standard collocation for depressingly bad reported figures. 'Dour' and 'sullen' describe people's temperament, and 'bleak' collocates with 'outlook' or 'prospect' rather than 'reading'."
    },
    {
      text: "The two theories are not mutually ____; both mechanisms could be at work simultaneously.",
      options: ["contradictory", "exclusive", "incompatible", "opposed"],
      answer: 1,
      explanation: "'Mutually exclusive' is the fixed phrase for things that cannot both be true. The other adjectives are near-synonyms in meaning but do not form the established collocation with 'mutually' here."
    },
    {
      text: "She brushed ____ the interruption and continued with her presentation.",
      options: ["away", "aside", "off", "past"],
      answer: 1,
      explanation: "'Brush aside' means to dismiss an interruption or objection as unimportant. 'Brush off' is used chiefly of rebuffing a person, and 'brush away' is literal (tears, crumbs); 'brush past' is physical movement."
    },
    {
      text: "The findings fly in the ____ of everything we thought we knew about the disease.",
      options: ["teeth", "face", "light", "path"],
      answer: 1,
      explanation: "'Fly in the face of' means to contradict or oppose something directly. 'In the teeth of' means despite opposition, and 'light' and 'path' form no such idiom with 'fly'."
    },
    {
      text: "He is, to all ____, the most influential backbencher in the party.",
      options: ["accounts", "appearances", "regards", "extents"],
      answer: 1,
      explanation: "'To all appearances' means judging from what can be seen. The phrase with 'accounts' is 'by all accounts', and 'regards' and 'extents' do not form this expression."
    },
    {
      text: "The union has vowed to fight the closures tooth and ____.",
      options: ["claw", "bone", "nail", "fist"],
      answer: 2,
      explanation: "'Fight tooth and nail' is the fixed idiom for fighting fiercely with every available means. 'Claw', 'bone' and 'fist' are plausible body imagery but do not form the idiom."
    },
    {
      text: "The documentary ____ bare the human cost of the region's mining boom.",
      options: ["lays", "puts", "sets", "leaves"],
      answer: 0,
      explanation: "'Lay bare' means to reveal something hidden, often uncomfortable truths. 'Put', 'set' and 'leave' do not combine with 'bare' in this fixed expression."
    },
    {
      text: "Critics dismissed the reforms as mere window ____, designed to create an impression of change.",
      options: ["framing", "dressing", "shopping", "painting"],
      answer: 1,
      explanation: "'Window dressing' is the idiom for superficial measures intended to look good. 'Window shopping' means browsing without buying, and 'framing' and 'painting' are literal."
    },
    {
      text: "I'm afraid your objection is beside the ____; the deadline has already passed.",
      options: ["matter", "point", "question", "issue"],
      answer: 1,
      explanation: "'Beside the point' is the fixed phrase meaning irrelevant. 'Matter', 'question' and 'issue' do not follow 'beside' in this idiom."
    },
    {
      text: "The prosecution's case ____ apart under cross-examination.",
      options: ["wore", "split", "broke", "fell"],
      answer: 3,
      explanation: "'Fall apart' is the natural phrasal verb for an argument or case collapsing. 'Break apart' and 'split apart' suggest physical fragmentation, and 'wear apart' is not idiomatic."
    },
    {
      text: "She takes everything her horoscope says as ____, which infuriates her more sceptical friends.",
      options: ["testament", "gospel", "scripture", "doctrine"],
      answer: 1,
      explanation: "'Take something as gospel' means to accept it as unquestionably true. 'Testament', 'scripture' and 'doctrine' are thematically related but do not form the idiom."
    },
    {
      text: "The new CEO wasted no time in ____ out the dead wood at head office.",
      options: ["clearing", "wiping", "carving", "shaking"],
      answer: 0,
      explanation: "'Clear out the dead wood' is the collocation for removing unproductive staff. 'Wipe out' means to destroy completely, 'carve out' means to create a niche, and 'shake out' collocates differently."
    },
    {
      text: "Rumours of a rift between the two ministers were given short ____ by the press office.",
      options: ["credence", "notice", "attention", "denial"],
      answer: 0,
      explanation: "'Give (little/short) credence to' means to treat as believable; here the press office barely believed the rumours. 'Notice' and 'attention' take 'pay', and 'denial' reverses the logic of 'give'."
    },
    {
      text: "The orchestra's performance was note-perfect, but it somehow failed to ____ alight.",
      options: ["get", "come", "catch", "set"],
      answer: 2,
      explanation: "'Catch alight' means to catch fire, here figuratively of a performance igniting. 'Set alight' requires an object, and 'get' and 'come' do not collocate with 'alight'."
    },
    {
      text: "Successive governments have merely tinkered ____ the edges of the housing crisis.",
      options: ["on", "along", "around", "at"],
      answer: 3,
      explanation: "'Tinker at/around the edges' takes 'at' in the standard phrase 'tinker at the edges of', meaning to make trivial adjustments. 'On' and 'along' are not idiomatic with 'tinker'."
    },
    {
      text: "He has a ____ interest in the outcome, since his firm stands to win the contract.",
      options: ["vetted", "vested", "invested", "veiled"],
      answer: 1,
      explanation: "'A vested interest' is the fixed phrase for a personal stake in an outcome. 'Vetted' means checked, 'invested' is not used attributively here, and 'veiled' means concealed."
    },
    {
      text: "Only a ____ of the original manuscript survives, the rest having been lost in the fire.",
      options: ["fraction", "margin", "particle", "morsel"],
      answer: 0,
      explanation: "'Only a fraction of' is the natural collocation for a small remaining part. 'Margin' refers to differences or edges, 'particle' to tiny physical pieces, and 'morsel' to food."
    },
    {
      text: "Her patience finally ____ when the printer jammed for the fifth time that morning.",
      options: ["cracked", "snapped", "burst", "split"],
      answer: 1,
      explanation: "'Someone's patience snapped' is the idiomatic way of saying they suddenly lost their temper. 'Cracked', 'burst' and 'split' do not collocate with 'patience'."
    },
    {
      text: "The proposal was quietly shelved, ____ to the relief of almost everyone involved.",
      options: ["much", "well", "far", "quite"],
      answer: 0,
      explanation: "'Much to the relief of' is the fixed intensifying formula before 'to someone's relief/surprise/dismay'. 'Well', 'far' and 'quite' cannot premodify this prepositional phrase."
    },
    {
      text: "The two leaders papered ____ their differences long enough to sign the accord.",
      options: ["across", "over", "through", "beyond"],
      answer: 1,
      explanation: "'Paper over' means to conceal a disagreement or problem superficially, from papering over cracks. The other prepositions do not form the phrasal verb."
    },
    {
      text: "The audit revealed accounting irregularities on a scale that ____ belief.",
      options: ["defies", "denies", "resists", "refuses"],
      answer: 0,
      explanation: "'Defy belief' is the collocation for something almost impossible to believe. 'Deny', 'resist' and 'refuse' do not combine with 'belief' in this way."
    },
    {
      text: "I was ____ the impression that the meeting had been postponed until Friday.",
      options: ["in", "at", "on", "under"],
      answer: 3,
      explanation: "'Be under the impression that' is the fixed expression for holding a (usually mistaken) belief. The other prepositions are not used with 'impression' in this pattern."
    },
    {
      text: "The film ____ liberties with the historical record that some critics found unforgivable.",
      options: ["makes", "does", "takes", "gives"],
      answer: 2,
      explanation: "'Take liberties with' means to change or treat something with excessive freedom. 'Make', 'do' and 'give' do not collocate with 'liberties' in this idiom."
    },
    {
      text: "After years in the political ____, she was recalled to the cabinet in last week's reshuffle.",
      options: ["desert", "wilderness", "outback", "wasteland"],
      answer: 1,
      explanation: "'In the (political) wilderness' is the fixed idiom for a period out of power or influence. 'Desert', 'outback' and 'wasteland' are literal landscapes and do not form the idiom."
    },
    {
      text: "The judge ruled that the confession had been obtained under ____ and was therefore inadmissible.",
      options: ["duress", "constraint", "compulsion", "coercion"],
      answer: 0,
      explanation: "'Under duress' is the fixed legal phrase for acting because of threats. 'Coercion' and 'compulsion' are close in meaning but the established collocation with 'under' in legal contexts is 'duress'; 'constraint' means limitation."
    },
    {
      text: "Whatever his shortcomings as an administrator, nobody could ____ his commitment to the students.",
      options: ["revoke", "retract", "gainsay", "renounce"],
      answer: 2,
      explanation: "'Gainsay' means to deny or contradict, typically in 'nobody could gainsay'. 'Revoke' and 'retract' apply to decisions or statements one made oneself, and 'renounce' means to give up."
    },
    {
      text: "The chancellor's speech was long ____ substance but short on specifics.",
      options: ["in", "on", "of", "with"],
      answer: 1,
      explanation: "'Long on X but short on Y' is the fixed contrastive pattern, both limbs taking 'on'. The other prepositions break the parallel idiom."
    },
    {
      text: "Volunteers worked around the clock, often at considerable personal ____, to distribute the aid.",
      options: ["charge", "cost", "loss", "price"],
      answer: 1,
      explanation: "'At (considerable) personal cost' is the set phrase for sacrifice incurred by the doer. 'Price' appears in 'at any price', while 'charge' and 'loss' do not fit this pattern."
    },
    {
      text: "The startup went from strength to ____, doubling its user base every quarter.",
      options: ["power", "muscle", "strength", "force"],
      answer: 2,
      explanation: "'Go from strength to strength' is the fixed idiom for continuing to become more successful; the same noun is repeated. The other options break the formula."
    },
    {
      text: "His explanation didn't quite ____ up; there were too many gaps in the timeline.",
      options: ["stack", "pile", "mount", "heap"],
      answer: 0,
      explanation: "'Not stack up' means an account or figures do not make sense on scrutiny. 'Pile up', 'mount up' and 'heap up' refer to accumulation, not coherence."
    },
    {
      text: "The peace talks are hanging by a ____ after last night's border incident.",
      options: ["string", "hair", "thread", "wire"],
      answer: 2,
      explanation: "'Hang by a thread' is the idiom for being in a very precarious state. 'Hair' evokes 'a hair's breadth', but the fixed expression uses 'thread'; 'string' and 'wire' form no idiom."
    },
    {
      text: "She was passed ____ for promotion three times before finally deciding to leave.",
      options: ["by", "over", "off", "aside"],
      answer: 1,
      explanation: "'Be passed over for promotion' means to be ignored in favour of someone else. 'Pass by' means to go past, 'pass off' means to fake or proceed, and 'pass aside' is not a phrasal verb."
    },
    {
      text: "The committee gave the proposal its ____ approval, subject to minor amendments.",
      options: ["sealed", "signed", "stamped", "qualified"],
      answer: 3,
      explanation: "'Qualified approval' means approval with reservations, matching 'subject to minor amendments'. 'Sealed', 'signed' and 'stamped' evoke 'seal of approval' but do not premodify 'approval' this way."
    },
    {
      text: "Fierce lobbying behind the ____ ensured that the clause was dropped from the final bill.",
      options: ["curtains", "scenes", "stage", "doors"],
      answer: 1,
      explanation: "'Behind the scenes' is the fixed idiom for activity hidden from public view. 'Behind closed doors' uses 'closed', and 'curtains' and 'stage' do not form the phrase."
    },
    {
      text: "The book sets ____ to demolish several cherished myths about the Victorian era.",
      options: ["off", "forth", "out", "about"],
      answer: 2,
      explanation: "'Set out to do something' means to begin with a definite intention. 'Set about' takes a gerund, 'set off' means to depart or trigger, and 'set forth' means to expound."
    },
    {
      text: "Given the polls, her victory in the primary was all ____ certain.",
      options: ["but", "too", "so", "over"],
      answer: 0,
      explanation: "'All but certain' means almost certain. 'All too' intensifies something regrettable ('all too familiar'), and 'so' and 'over' do not fit the pattern."
    },
    {
      text: "The negotiations reached an ____ when neither delegation would discuss the border question.",
      options: ["impasse", "obstacle", "impediment", "abyss"],
      answer: 0,
      explanation: "'Reach an impasse' is the collocation for a deadlock in talks. 'Obstacle' and 'impediment' are things in the way rather than a state reached, and 'abyss' is melodramatically literal."
    },
    {
      text: "He shrugged ____ the criticism with his customary good humour.",
      options: ["away", "down", "back", "off"],
      answer: 3,
      explanation: "'Shrug off' means to dismiss criticism or a setback as unimportant. 'Shrug away', 'shrug down' and 'shrug back' are not established phrasal verbs."
    },
    {
      text: "The evidence against him was purely ____, and the jury took less than an hour to acquit.",
      options: ["circumstantial", "peripheral", "incidental", "tangential"],
      answer: 0,
      explanation: "'Circumstantial evidence' is the fixed legal term for indirect evidence. 'Peripheral', 'incidental' and 'tangential' mean marginal but do not form the legal collocation."
    },
    {
      text: "Talks resumed this morning, raising hopes that the strike may soon be brought to a ____.",
      options: ["close", "finish", "stop", "termination"],
      answer: 0,
      explanation: "'Bring something to a close' is the standard collocation for ending an event or dispute. 'Stop' takes 'put a stop to', and 'finish' and 'termination' do not follow 'bring to a'."
    },
    {
      text: "Sceptics ____ scorn on the idea that the scheme could pay for itself within a decade.",
      options: ["threw", "poured", "spilled", "cast"],
      answer: 1,
      explanation: "'Pour scorn on' is the fixed collocation for expressing contempt for an idea. 'Cast' pairs with 'doubt' or 'aspersions', and 'threw' and 'spilled' do not collocate with 'scorn'."
    },
    {
      text: "The two species are so alike that even experts struggle to tell them ____.",
      options: ["aside", "apart", "over", "through"],
      answer: 1,
      explanation: "'Tell apart' means to distinguish between similar things. The other particles do not combine with 'tell' in this sense."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
