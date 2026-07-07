/* CAE Prep extra bank: part4 wave 1 */
(function () {
  var BANK = [
    /* ---------- Inversion ---------- */
    {
      original: "As soon as the concert finished, the audience rushed to the exits.",
      keyword: "SOONER",
      gapped: "No ____ than the audience rushed to the exits.",
      answers: ["sooner had the concert finished"],
      model: "sooner had the concert finished",
      explanation: "'No sooner had + subject + past participle ... than' uses inversion after a negative time adverbial."
    },
    {
      original: "She had barely sat down when the doorbell rang.",
      keyword: "HARDLY",
      gapped: "____ down when the doorbell rang.",
      answers: ["Hardly had she sat"],
      model: "Hardly had she sat",
      explanation: "'Hardly had + subject + past participle ... when' is an inverted structure meaning something happened immediately after."
    },
    {
      original: "You should not sign the contract under any circumstances.",
      keyword: "CIRCUMSTANCES",
      gapped: "Under no ____ sign the contract.",
      answers: ["circumstances should you", "circumstances must you"],
      model: "circumstances should you",
      explanation: "After the fronted negative phrase 'under no circumstances', the subject and auxiliary invert."
    },
    {
      original: "The company has rarely faced such fierce criticism.",
      keyword: "SELDOM",
      gapped: "____ such fierce criticism.",
      answers: ["Seldom has the company faced"],
      model: "Seldom has the company faced",
      explanation: "Fronting 'seldom' forces inversion of the auxiliary 'has' and the subject."
    },
    {
      original: "He didn't realise how serious the situation was until much later.",
      keyword: "DID",
      gapped: "Not until much later ____ how serious the situation was.",
      answers: ["did he realise", "did he realize"],
      model: "did he realise",
      explanation: "After 'not until' at the start of a sentence, the main clause uses question-style inversion with 'did'."
    },
    {
      original: "If you should need any further assistance, please call this number.",
      keyword: "SHOULD",
      gapped: "____ any further assistance, please call this number.",
      answers: ["Should you need", "Should you require"],
      model: "Should you need",
      explanation: "In formal conditionals, 'if you should need' can become the inverted form 'should you need'."
    },
    {
      original: "They had no idea that their conversation was being recorded.",
      keyword: "LITTLE",
      gapped: "____ that their conversation was being recorded.",
      answers: ["Little did they know", "Little did they realise", "Little did they suspect"],
      model: "Little did they know",
      explanation: "'Little did they know' is an inverted structure emphasising complete unawareness."
    },
    {
      original: "The bridge should not be crossed at any time during the storm.",
      keyword: "NO",
      gapped: "At ____ the bridge be crossed during the storm.",
      answers: ["no time should", "no time must"],
      model: "no time should",
      explanation: "Fronting 'at no time' triggers inversion of the modal verb and subject."
    },
    {
      original: "The museum only reopened after extensive renovations had been carried out.",
      keyword: "ONLY",
      gapped: "____ had been carried out did the museum reopen.",
      answers: ["Only after extensive renovations"],
      model: "Only after extensive renovations",
      explanation: "When 'only after' begins the sentence, the main clause inverts: 'did the museum reopen'."
    },
    {
      original: "The refugees had scarcely reached the border when fighting broke out again.",
      keyword: "SCARCELY",
      gapped: "____ reached the border when fighting broke out again.",
      answers: ["Scarcely had the refugees"],
      model: "Scarcely had the refugees",
      explanation: "'Scarcely had + subject + past participle ... when' is an inverted near-negative time structure."
    },
    {
      original: "The negotiations were so delicate that neither side would comment publicly.",
      keyword: "SO",
      gapped: "____ the negotiations that neither side would comment publicly.",
      answers: ["So delicate were"],
      model: "So delicate were",
      explanation: "Fronting 'so + adjective' causes inversion: 'So delicate were the negotiations that ...'."
    },
    {
      original: "You won't find a more dedicated teacher anywhere.",
      keyword: "NOWHERE",
      gapped: "____ a more dedicated teacher.",
      answers: ["Nowhere will you find"],
      model: "Nowhere will you find",
      explanation: "The negative adverb 'nowhere' at the front of the sentence requires subject-auxiliary inversion."
    },

    /* ---------- Cleft sentences ---------- */
    {
      original: "Her persistence impressed the panel most of all.",
      keyword: "WHAT",
      gapped: "____ most of all was her persistence.",
      answers: ["What impressed the panel"],
      model: "What impressed the panel",
      explanation: "A wh-cleft with 'What ... was' shifts emphasis onto 'her persistence'."
    },
    {
      original: "The manager's dismissive tone offended the staff, not his decision.",
      keyword: "IT",
      gapped: "____ dismissive tone that offended the staff, not his decision.",
      answers: ["It was the manager's"],
      model: "It was the manager's",
      explanation: "An it-cleft ('It was X that ...') highlights the true cause of the offence."
    },
    {
      original: "We didn't discover the truth until the documents were leaked.",
      keyword: "THAT",
      gapped: "It was only when the documents were leaked ____ the truth.",
      answers: ["that we discovered"],
      model: "that we discovered",
      explanation: "The it-cleft 'It was only when ... that' emphasises the timing of the discovery."
    },
    {
      original: "I need a long holiday more than anything else.",
      keyword: "WHAT",
      gapped: "____ anything else is a long holiday.",
      answers: ["What I need more than"],
      model: "What I need more than",
      explanation: "A wh-cleft beginning 'What I need' foregrounds the thing that is needed."
    },
    {
      original: "You should speak to the director about this matter.",
      keyword: "PERSON",
      gapped: "The ____ speak to about this matter is the director.",
      answers: ["person you should", "person that you should", "person who you should"],
      model: "person you should",
      explanation: "'The person you should speak to is ...' is a cleft structure emphasising the director."
    },
    {
      original: "They moved abroad because of the high cost of living.",
      keyword: "REASON",
      gapped: "The ____ abroad was the high cost of living.",
      answers: ["reason they moved", "reason why they moved", "reason that they moved"],
      model: "reason why they moved",
      explanation: "'The reason (why) they moved ... was' turns the cause into the focus of the sentence."
    },
    {
      original: "The scandal only came to light because a journalist kept digging.",
      keyword: "IT",
      gapped: "____ because a journalist kept digging that the scandal came to light.",
      answers: ["It was only"],
      model: "It was only",
      explanation: "The it-cleft 'It was only because ... that' stresses the sole cause."
    },
    {
      original: "His refusal to apologise upset everyone.",
      keyword: "WAS",
      gapped: "What upset everyone ____ to apologise.",
      answers: ["was his refusal", "was his refusing"],
      model: "was his refusal",
      explanation: "In a wh-cleft, the verb 'was' links the clause to the emphasised noun phrase."
    },
    {
      original: "The design flaw caused the accident, not driver error.",
      keyword: "RATHER",
      gapped: "It was the design flaw ____ error that caused the accident.",
      answers: ["rather than driver", "rather than any driver"],
      model: "rather than driver",
      explanation: "'Rather than' contrasts the real cause with the rejected one inside an it-cleft."
    },
    {
      original: "She simply wants a straight answer, nothing more.",
      keyword: "ALL",
      gapped: "____ is a straight answer, nothing more.",
      answers: ["All she wants", "All that she wants"],
      model: "All she wants",
      explanation: "'All she wants is ...' is a cleft meaning 'the only thing she wants'."
    },

    /* ---------- Advanced passives & reporting ---------- */
    {
      original: "People believe the painting was stolen to order.",
      keyword: "BELIEVED",
      gapped: "The painting ____ stolen to order.",
      answers: ["is believed to have been"],
      model: "is believed to have been",
      explanation: "The impersonal passive 'is believed to have been' reports a belief about a past event."
    },
    {
      original: "They say the CEO is considering resignation.",
      keyword: "SAID",
      gapped: "The CEO ____ considering resignation.",
      answers: ["is said to be"],
      model: "is said to be",
      explanation: "'Is said to be + -ing' is the passive reporting structure for a current situation."
    },
    {
      original: "Everyone thinks the ancient manuscript perished in the fire.",
      keyword: "THOUGHT",
      gapped: "The ancient manuscript ____ perished in the fire.",
      answers: ["is thought to have"],
      model: "is thought to have",
      explanation: "A perfect infinitive after 'is thought' refers to an event before the time of reporting."
    },
    {
      original: "Reports indicate that three suspects have been arrested.",
      keyword: "REPORTED",
      gapped: "Three suspects ____ been arrested.",
      answers: ["are reported to have"],
      model: "are reported to have",
      explanation: "'Are reported to have been arrested' is the impersonal passive of a reporting verb."
    },
    {
      original: "Somebody must have cleaned the office overnight.",
      keyword: "HAVE",
      gapped: "The office ____ cleaned overnight.",
      answers: ["must have been"],
      model: "must have been",
      explanation: "A modal perfect passive: 'must have been cleaned' expresses a deduction about the past."
    },
    {
      original: "\"Don't touch the exhibits,\" the guide told the children.",
      keyword: "WARNED",
      gapped: "The guide ____ touch the exhibits.",
      answers: ["warned the children not to"],
      model: "warned the children not to",
      explanation: "'Warn somebody not to do something' reports a negative imperative."
    },
    {
      original: "\"I'll definitely finish the report by Friday,\" said Tom.",
      keyword: "PROMISED",
      gapped: "Tom ____ the report by Friday.",
      answers: ["promised to finish", "promised that he would finish", "promised he would finish"],
      model: "promised to finish",
      explanation: "'Promise' takes either a to-infinitive or a that-clause with 'would' in reported speech."
    },
    {
      original: "\"It was me who broke the vase,\" admitted Lucy.",
      keyword: "ADMITTED",
      gapped: "Lucy ____ broken the vase.",
      answers: ["admitted that she had", "admitted she had"],
      model: "admitted that she had",
      explanation: "'Admit' is followed by a that-clause with the past perfect or by 'having + past participle'."
    },
    {
      original: "\"Why don't we postpone the trip?\" suggested Anna.",
      keyword: "SUGGESTED",
      gapped: "Anna ____ the trip.",
      answers: ["suggested that they postpone", "suggested that they should postpone", "suggested they postpone"],
      model: "suggested that they postpone",
      explanation: "'Suggest' takes a that-clause with the subjunctive or 'should'; it never takes an object plus infinitive."
    },
    {
      original: "\"You cheated in the exam, James,\" said the teacher.",
      keyword: "ACCUSED",
      gapped: "The teacher ____ in the exam.",
      answers: ["accused James of cheating", "accused James of having cheated"],
      model: "accused James of cheating",
      explanation: "'Accuse somebody of + -ing' is the pattern for reporting an accusation."
    },
    {
      original: "\"I'm sorry I lost your keys,\" Ben said to me.",
      keyword: "APOLOGISED",
      gapped: "Ben ____ my keys.",
      answers: ["apologised for losing", "apologised to me for losing", "apologised for having lost"],
      model: "apologised for losing",
      explanation: "'Apologise (to somebody) for + -ing' reports an apology."
    },
    {
      original: "People expect that the verdict will be delivered shortly.",
      keyword: "EXPECTED",
      gapped: "The verdict ____ delivered shortly.",
      answers: ["is expected to be"],
      model: "is expected to be",
      explanation: "The impersonal passive 'is expected to be' reports a general expectation about the future."
    },
    {
      original: "\"I didn't leak the information,\" said the minister.",
      keyword: "DENIED",
      gapped: "The minister ____ the information.",
      answers: ["denied having leaked", "denied that he had leaked"],
      model: "denied having leaked",
      explanation: "'Deny' is followed by an -ing form or a that-clause, not an infinitive."
    },
    {
      original: "Rumour has it that the two companies are planning a merger.",
      keyword: "RUMOURED",
      gapped: "The two companies ____ planning a merger.",
      answers: ["are rumoured to be"],
      model: "are rumoured to be",
      explanation: "'Are rumoured to be' is the passive reporting structure equivalent to 'rumour has it that'."
    },

    /* ---------- Wish / if only / would rather ---------- */
    {
      original: "It's a pity I didn't back up my files before the crash.",
      keyword: "WISH",
      gapped: "I ____ up my files before the crash.",
      answers: ["wish I had backed", "wish that I had backed"],
      model: "wish I had backed",
      explanation: "'Wish + past perfect' expresses regret about something that did not happen in the past."
    },
    {
      original: "I really regret that I can't attend your graduation.",
      keyword: "COULD",
      gapped: "I ____ attend your graduation.",
      answers: ["really wish I could", "wish I really could"],
      model: "really wish I could",
      explanation: "'Wish + could' expresses regret about a present inability."
    },
    {
      original: "It annoys me that my neighbour plays loud music every night.",
      keyword: "WOULD",
      gapped: "I wish my neighbour ____ loud music every night.",
      answers: ["would stop playing", "would not play"],
      model: "would stop playing",
      explanation: "'Wish + would' complains about an annoying habit we want someone to change."
    },
    {
      original: "I'd prefer you not to mention this to anyone.",
      keyword: "RATHER",
      gapped: "I ____ mention this to anyone.",
      answers: ["would rather you didn't", "would rather you did not"],
      model: "would rather you didn't",
      explanation: "'Would rather + subject + past simple' expresses a preference about another person's actions."
    },
    {
      original: "The government should take air pollution seriously without delay.",
      keyword: "TIME",
      gapped: "It is high ____ air pollution seriously.",
      answers: ["time the government took"],
      model: "time the government took",
      explanation: "'It is high time + past simple' means something should already be happening."
    },
    {
      original: "I regret ever agreeing to organise the conference.",
      keyword: "ONLY",
      gapped: "If ____ agreed to organise the conference.",
      answers: ["only I had never", "only I hadn't"],
      model: "only I had never",
      explanation: "'If only + past perfect' expresses strong regret about a past decision."
    },
    {
      original: "He talks about his salary as if he earned millions.",
      keyword: "THOUGH",
      gapped: "He talks about his salary as ____ millions.",
      answers: ["though he earned"],
      model: "though he earned",
      explanation: "'As though + past simple' describes an unreal or exaggerated comparison."
    },
    {
      original: "I'd prefer to stay in tonight rather than go out.",
      keyword: "SOONER",
      gapped: "I would ____ tonight than go out.",
      answers: ["sooner stay in"],
      model: "sooner stay in",
      explanation: "'Would sooner + bare infinitive ... than' expresses preference, like 'would rather'."
    },
    {
      original: "It's a shame we didn't book the tickets earlier.",
      keyword: "BOOKED",
      gapped: "We wish we had ____ earlier.",
      answers: ["booked the tickets"],
      model: "booked the tickets",
      explanation: "'Wish + past perfect' converts 'it's a shame we didn't' into a regret structure."
    },
    {
      original: "Unfortunately, I never learned to play an instrument as a child.",
      keyword: "LEARNED",
      gapped: "If only I had ____ as a child.",
      answers: ["learned to play an instrument"],
      model: "learned to play an instrument",
      explanation: "'If only + past perfect' expresses regret about a missed past opportunity."
    },

    /* ---------- Complex conditionals ---------- */
    {
      original: "We missed the turning because we were chatting.",
      keyword: "HADN'T",
      gapped: "If we ____, we would not have missed the turning.",
      answers: ["hadn't been chatting"],
      model: "hadn't been chatting",
      explanation: "A third conditional with the past perfect continuous describes an unreal past cause."
    },
    {
      original: "The picnic was cancelled because of the sudden downpour.",
      keyword: "BUT",
      gapped: "____ downpour, the picnic would have gone ahead.",
      answers: ["But for the sudden"],
      model: "But for the sudden",
      explanation: "'But for + noun' means 'if it had not been for' in unreal past conditionals."
    },
    {
      original: "You can borrow my car provided you fill up the tank.",
      keyword: "CONDITION",
      gapped: "You can borrow my car on ____ fill up the tank.",
      answers: ["condition that you", "the condition that you"],
      model: "condition that you",
      explanation: "'On condition that' is a formal equivalent of 'provided that'."
    },
    {
      original: "If the storm hadn't hit, we would have reached the summit.",
      keyword: "FOR",
      gapped: "Had it not been ____ we would have reached the summit.",
      answers: ["for the storm"],
      model: "for the storm",
      explanation: "'Had it not been for + noun' is the inverted form of 'if it had not been for'."
    },
    {
      original: "Take an umbrella because it might rain later.",
      keyword: "CASE",
      gapped: "Take an umbrella in ____ later.",
      answers: ["case it rains"],
      model: "case it rains",
      explanation: "'In case + present simple' expresses a precaution against a possible future event."
    },
    {
      original: "If she had taken the doctor's advice, she would be healthier now.",
      keyword: "TAKEN",
      gapped: "____ the doctor's advice, she would be healthier now.",
      answers: ["Had she taken"],
      model: "Had she taken",
      explanation: "Inverted 'Had she taken' replaces 'if she had taken' in a mixed conditional."
    },
    {
      original: "Without your support, the project would have collapsed.",
      keyword: "NOT",
      gapped: "Had it ____ your support, the project would have collapsed.",
      answers: ["not been for"],
      model: "not been for",
      explanation: "'Had it not been for' is a formal inverted conditional meaning 'without'."
    },
    {
      original: "You'll only get a refund if you keep the receipt.",
      keyword: "UNLESS",
      gapped: "You will not get a refund ____ the receipt.",
      answers: ["unless you keep"],
      model: "unless you keep",
      explanation: "'Unless' means 'if ... not', so 'only if you keep' becomes 'not ... unless you keep'."
    },
    {
      original: "The event will go ahead whether it rains or not.",
      keyword: "EVEN",
      gapped: "The event will go ahead ____ rains.",
      answers: ["even if it"],
      model: "even if it",
      explanation: "'Even if' introduces a condition that will not change the outcome."
    },
    {
      original: "In the unlikely event of a fire, use the stairs.",
      keyword: "WERE",
      gapped: "____ break out, use the stairs.",
      answers: ["Were a fire to"],
      model: "Were a fire to",
      explanation: "'Were + subject + to-infinitive' is a formal inverted conditional for unlikely events."
    },

    /* ---------- Causatives ---------- */
    {
      original: "A mechanic is servicing my car at the moment.",
      keyword: "HAVING",
      gapped: "I am ____ at the moment.",
      answers: ["having my car serviced"],
      model: "having my car serviced",
      explanation: "The causative 'have something done' means arranging for someone else to do it."
    },
    {
      original: "The dentist took out two of my teeth yesterday.",
      keyword: "HAD",
      gapped: "I ____ out yesterday.",
      answers: ["had two teeth taken", "had two of my teeth taken"],
      model: "had two teeth taken",
      explanation: "'Had + object + past participle' is the causative for a service performed by someone else."
    },
    {
      original: "Someone stole Richard's wallet while he was on the metro.",
      keyword: "HAD",
      gapped: "Richard ____ while he was on the metro.",
      answers: ["had his wallet stolen"],
      model: "had his wallet stolen",
      explanation: "'Have something stolen' uses the causative pattern to describe something bad done to you."
    },
    {
      original: "A professional photographer will take their wedding pictures.",
      keyword: "TAKEN",
      gapped: "They will have their wedding pictures ____ photographer.",
      answers: ["taken by a professional"],
      model: "taken by a professional",
      explanation: "In the causative 'have something done', the agent is added with 'by'."
    },
    {
      original: "The manager persuaded the interns to stay late.",
      keyword: "GOT",
      gapped: "The manager ____ stay late.",
      answers: ["got the interns to"],
      model: "got the interns to",
      explanation: "'Get somebody to do something' means to persuade or arrange for them to do it."
    },
    {
      original: "Her parents made her practise the piano every day.",
      keyword: "WAS",
      gapped: "She ____ the piano every day by her parents.",
      answers: ["was made to practise"],
      model: "was made to practise",
      explanation: "In the passive, 'make somebody do' becomes 'be made to do' with a to-infinitive."
    },
    {
      original: "They should really employ someone to redecorate the hallway.",
      keyword: "GET",
      gapped: "They should really ____ redecorated.",
      answers: ["get the hallway"],
      model: "get the hallway",
      explanation: "'Get something done' is an informal causative meaning to arrange for a job to be done."
    },
    {
      original: "The customs officers made us open every suitcase.",
      keyword: "MADE",
      gapped: "We ____ open every suitcase by the customs officers.",
      answers: ["were made to"],
      model: "were made to",
      explanation: "The passive of 'make somebody do' requires the to-infinitive: 'were made to open'."
    },

    /* ---------- Idiomatic rephrasing ---------- */
    {
      original: "You should consider the traffic when planning your journey.",
      keyword: "ACCOUNT",
      gapped: "You should take the traffic into ____ your journey.",
      answers: ["account when planning"],
      model: "account when planning",
      explanation: "'Take something into account' means to consider it when making a decision."
    },
    {
      original: "She still hasn't accepted her father's death.",
      keyword: "TERMS",
      gapped: "She has yet to come to ____ death.",
      answers: ["terms with her father's"],
      model: "terms with her father's",
      explanation: "'Come to terms with' means to gradually accept a difficult situation."
    },
    {
      original: "The new regulations become effective next month.",
      keyword: "COME",
      gapped: "The new regulations ____ next month.",
      answers: ["come into force", "come into effect", "will come into force", "will come into effect"],
      model: "come into force",
      explanation: "'Come into force/effect' is the idiomatic way to say a law becomes effective."
    },
    {
      original: "The inspector examined the accounts in great detail.",
      keyword: "THROUGH",
      gapped: "The inspector went ____ a fine-tooth comb.",
      answers: ["through the accounts with"],
      model: "through the accounts with",
      explanation: "'Go through something with a fine-tooth comb' means to examine it extremely carefully."
    },
    {
      original: "I met my old flatmate by chance at the airport.",
      keyword: "BUMPED",
      gapped: "I ____ old flatmate at the airport.",
      answers: ["bumped into my"],
      model: "bumped into my",
      explanation: "'Bump into somebody' means to meet them unexpectedly."
    },
    {
      original: "His success is largely a result of his mother's encouragement.",
      keyword: "DOWN",
      gapped: "His success is largely ____ mother's encouragement.",
      answers: ["down to his"],
      model: "down to his",
      explanation: "'Be down to something' means to be caused by or attributable to it."
    },
    {
      original: "The company decided not to launch the product at the last minute.",
      keyword: "PULLED",
      gapped: "The company ____ launching the product at the last minute.",
      answers: ["pulled out of"],
      model: "pulled out of",
      explanation: "'Pull out of doing something' means to withdraw from a plan or agreement."
    },
    {
      original: "We eventually managed to solve the visa problem.",
      keyword: "SORT",
      gapped: "We eventually managed to ____ visa problem.",
      answers: ["sort out the"],
      model: "sort out the",
      explanation: "'Sort out a problem' is an idiomatic equivalent of 'solve' or 'resolve'."
    },
    {
      original: "I don't really like modern jazz very much.",
      keyword: "KEEN",
      gapped: "I am not particularly ____ jazz.",
      answers: ["keen on modern"],
      model: "keen on modern",
      explanation: "'Not be keen on something' is an idiomatic way of saying you don't like it much."
    },
    {
      original: "The two sides finally reached an agreement on pay.",
      keyword: "CAME",
      gapped: "The two sides finally ____ on pay.",
      answers: ["came to an agreement"],
      model: "came to an agreement",
      explanation: "'Come to an agreement' is a fixed expression meaning to reach agreement."
    },
    {
      original: "Her sudden resignation astonished all of us.",
      keyword: "ABACK",
      gapped: "We were all taken ____ sudden resignation.",
      answers: ["aback by her"],
      model: "aback by her",
      explanation: "'Be taken aback by something' means to be very surprised or shocked by it."
    },
    {
      original: "You can rely on Martha to keep a secret.",
      keyword: "COUNT",
      gapped: "You can ____ to keep a secret.",
      answers: ["count on Martha"],
      model: "count on Martha",
      explanation: "'Count on somebody' means to depend or rely on them."
    },
    {
      original: "The government withdrew the proposal after fierce opposition.",
      keyword: "LIGHT",
      gapped: "The government withdrew the proposal in ____ opposition.",
      answers: ["light of fierce", "light of the fierce"],
      model: "light of the fierce",
      explanation: "'In light of something' means 'because of' or 'taking it into consideration'."
    },
    {
      original: "The band cancelled the tour because the singer was ill.",
      keyword: "OWING",
      gapped: "The band called the tour off ____ illness.",
      answers: ["owing to the singer's"],
      model: "owing to the singer's",
      explanation: "'Owing to + noun' is a formal alternative to 'because of'; 'call off' means cancel."
    },
    {
      original: "The witness's story matched what the CCTV footage showed.",
      keyword: "TALLIED",
      gapped: "The witness's story ____ the CCTV footage showed.",
      answers: ["tallied with what"],
      model: "tallied with what",
      explanation: "'Tally with something' means to match or be consistent with it."
    },
    {
      original: "Most critics consider the film vastly overrated.",
      keyword: "REGARDED",
      gapped: "The film ____ most critics as vastly overrated.",
      answers: ["is regarded by"],
      model: "is regarded by",
      explanation: "'Be regarded as' is the passive of 'regard as', a formal synonym of 'consider'."
    },
    {
      original: "The excuse he gave doesn't sound convincing at all.",
      keyword: "RING",
      gapped: "The excuse he gave ____ at all.",
      answers: ["doesn't ring true", "does not ring true"],
      model: "doesn't ring true",
      explanation: "'Ring true' means to sound believable or genuine."
    },
    {
      original: "I couldn't understand a single word of the lecture.",
      keyword: "MAKE",
      gapped: "I couldn't ____ of the lecture.",
      answers: ["make head or tail", "make any sense"],
      model: "make head or tail",
      explanation: "'Can't make head or tail of something' means to be completely unable to understand it."
    },
    {
      original: "It's your decision whether to accept the offer.",
      keyword: "UP",
      gapped: "It is ____ whether to accept the offer.",
      answers: ["up to you", "up to you to decide", "entirely up to you"],
      model: "up to you",
      explanation: "'Be up to somebody' means the decision is theirs to make."
    },
    {
      original: "The charity depends heavily on public donations.",
      keyword: "RELIANT",
      gapped: "The charity is heavily ____ donations.",
      answers: ["reliant on public", "reliant upon public"],
      model: "reliant on public",
      explanation: "'Be reliant on/upon something' means to depend on it."
    },

    /* ---------- Gerund / infinitive & related ---------- */
    {
      original: "She stopped smoking two years ago.",
      keyword: "GAVE",
      gapped: "She ____ two years ago.",
      answers: ["gave up smoking"],
      model: "gave up smoking",
      explanation: "'Give up + -ing' means to stop a habit permanently."
    },
    {
      original: "I remember that I locked the door before leaving.",
      keyword: "LOCKING",
      gapped: "I remember ____ before leaving.",
      answers: ["locking the door"],
      model: "locking the door",
      explanation: "'Remember + -ing' refers to a memory of a past action, unlike 'remember to do'."
    },
    {
      original: "Driving in the city centre isn't worthwhile.",
      keyword: "POINT",
      gapped: "There is no ____ in the city centre.",
      answers: ["point in driving"],
      model: "point in driving",
      explanation: "'There is no point (in) + -ing' means an activity is not worth doing."
    },
    {
      original: "It took me a while to get accustomed to working nights.",
      keyword: "USED",
      gapped: "It took me a while to get ____ nights.",
      answers: ["used to working"],
      model: "used to working",
      explanation: "'Get used to + -ing' means to become accustomed to something; 'to' here is a preposition."
    },
    {
      original: "They narrowly avoided crashing into the lorry.",
      keyword: "MISSED",
      gapped: "They ____ into the lorry.",
      answers: ["narrowly missed crashing"],
      model: "narrowly missed crashing",
      explanation: "'Miss + -ing' means to narrowly avoid doing something."
    },
    {
      original: "He finds it difficult to express his feelings.",
      keyword: "DIFFICULTY",
      gapped: "He has ____ his feelings.",
      answers: ["difficulty in expressing"],
      model: "difficulty in expressing",
      explanation: "'Have difficulty (in) + -ing' is the noun-based equivalent of 'find it difficult to do'."
    },
    {
      original: "I'd prefer not to discuss my private life at work.",
      keyword: "DISCUSS",
      gapped: "I would rather not ____ at work.",
      answers: ["discuss my private life"],
      model: "discuss my private life",
      explanation: "'Would rather not + bare infinitive' expresses a negative preference."
    },
    {
      original: "There's no way I'm lending him any more money.",
      keyword: "INTENTION",
      gapped: "I have no ____ him any more money.",
      answers: ["intention of lending"],
      model: "intention of lending",
      explanation: "'Have no intention of + -ing' is an emphatic refusal to do something."
    },
    {
      original: "I hate it when people interrupt me while I'm on the phone.",
      keyword: "STAND",
      gapped: "I can't ____ while I'm on the phone.",
      answers: ["stand being interrupted"],
      model: "stand being interrupted",
      explanation: "'Can't stand + -ing' expresses strong dislike; the passive gerund 'being interrupted' is needed here."
    },
    {
      original: "It's pointless to argue with him once he's made up his mind.",
      keyword: "USE",
      gapped: "It is ____ with him once he's made up his mind.",
      answers: ["no use arguing"],
      model: "no use arguing",
      explanation: "'It is no use + -ing' means an action will achieve nothing."
    },
    {
      original: "They think their neighbours may have witnessed the break-in.",
      keyword: "MIGHT",
      gapped: "They think their neighbours ____ the break-in.",
      answers: ["might have witnessed", "might well have witnessed"],
      model: "might have witnessed",
      explanation: "'Might have + past participle' speculates about a possible past event."
    },
    {
      original: "The organisers deny responsibility for any lost property.",
      keyword: "ACCEPT",
      gapped: "The organisers ____ for any lost property.",
      answers: ["do not accept responsibility", "don't accept responsibility", "refuse to accept responsibility"],
      model: "do not accept responsibility",
      explanation: "'Accept responsibility for' is the positive counterpart of 'deny responsibility for'."
    },

    /* ---------- Participle clauses ---------- */
    {
      original: "Because she felt exhausted after the journey, she went to bed early.",
      keyword: "FEELING",
      gapped: "____ the journey, she went to bed early.",
      answers: ["Feeling exhausted after"],
      model: "Feeling exhausted after",
      explanation: "A present participle clause ('Feeling exhausted') replaces the 'because' clause."
    },
    {
      original: "After they had checked the figures twice, the accountants signed the report.",
      keyword: "HAVING",
      gapped: "____ twice, the accountants signed the report.",
      answers: ["Having checked the figures"],
      model: "Having checked the figures",
      explanation: "'Having + past participle' shows one action was completed before another."
    },
    {
      original: "As the castle was built in the twelfth century, it attracts many historians.",
      keyword: "BUILT",
      gapped: "____ century, the castle attracts many historians.",
      answers: ["Built in the twelfth"],
      model: "Built in the twelfth",
      explanation: "A past participle clause ('Built in ...') replaces the passive 'as it was built'."
    },
    {
      original: "Because he didn't know what to say, he remained silent.",
      keyword: "KNOWING",
      gapped: "____ to say, he remained silent.",
      answers: ["Not knowing what"],
      model: "Not knowing what",
      explanation: "A negative participle clause begins with 'Not + -ing'."
    },
    {
      original: "When it is seen from a distance, the sculpture resembles a bird.",
      keyword: "SEEN",
      gapped: "____ distance, the sculpture resembles a bird.",
      answers: ["Seen from a"],
      model: "Seen from a",
      explanation: "A past participle clause ('Seen from a distance') replaces the passive 'when it is seen'."
    },
    {
      original: "Since we had not received a reply, we sent a reminder.",
      keyword: "RECEIVED",
      gapped: "Not having ____, we sent a reminder.",
      answers: ["received a reply"],
      model: "received a reply",
      explanation: "'Not having + past participle' is a negative perfect participle clause expressing reason."
    },

    /* ---------- Comparatives & other structures ---------- */
    {
      original: "As the deadline approached, the team grew increasingly anxious.",
      keyword: "MORE",
      gapped: "The closer the deadline came, the ____ became.",
      answers: ["more anxious the team"],
      model: "more anxious the team",
      explanation: "The double comparative 'the closer ..., the more ...' links two changing situations."
    },
    {
      original: "This model is nowhere near as economical as the older one.",
      keyword: "FAR",
      gapped: "The older model is ____ this one.",
      answers: ["far more economical than"],
      model: "far more economical than",
      explanation: "'Far more + adjective + than' reverses a negative 'nowhere near as ... as' comparison."
    },
    {
      original: "Her second novel isn't nearly as gripping as her first.",
      keyword: "GRIPPING",
      gapped: "Her first novel is far more ____ second.",
      answers: ["gripping than her"],
      model: "gripping than her",
      explanation: "The comparison is reversed: 'not nearly as X as' becomes 'far more X than'."
    },
    {
      original: "Very few people know the true story.",
      keyword: "ANYONE",
      gapped: "____ the true story.",
      answers: ["Hardly anyone knows", "Scarcely anyone knows"],
      model: "Hardly anyone knows",
      explanation: "'Hardly anyone' means 'very few people'."
    },
    {
      original: "There's a strong chance the flight will be delayed.",
      keyword: "LIKELIHOOD",
      gapped: "In all ____ will be delayed.",
      answers: ["likelihood the flight"],
      model: "likelihood the flight",
      explanation: "'In all likelihood' means 'very probably'."
    },
    {
      original: "The two proposals are practically identical.",
      keyword: "DIFFERENCE",
      gapped: "There is ____ the two proposals.",
      answers: ["hardly any difference between", "barely any difference between"],
      model: "hardly any difference between",
      explanation: "'Hardly any difference between' expresses near-identity as a noun phrase."
    },
    {
      original: "It's possible that she forgot about our arrangement.",
      keyword: "MAY",
      gapped: "She ____ about our arrangement.",
      answers: ["may have forgotten"],
      model: "may have forgotten",
      explanation: "'May have + past participle' expresses possibility about the past."
    },
    {
      original: "Attendance at the workshop is optional.",
      keyword: "HAVE",
      gapped: "You do not ____ the workshop.",
      answers: ["have to attend"],
      model: "have to attend",
      explanation: "'Not have to' expresses lack of obligation, matching 'optional'."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
