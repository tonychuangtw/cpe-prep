/* CPE Prep extra bank: part4 wave 1 */
(function () {
  var BANK = [
    {
      original: "She had only just left the office when the phone rang.",
      keyword: "SOONER",
      gapped: "No ____ the office than the phone rang.",
      answers: ["sooner had she left"],
      model: "sooner had she left",
      explanation: "'No sooner... than' with subject–auxiliary inversion expresses that one event happened immediately after another."
    },
    {
      original: "He did not suspect at all that he was being followed.",
      keyword: "LITTLE",
      gapped: "____ that he was being followed.",
      answers: ["Little did he suspect", "Little did he know"],
      model: "Little did he suspect",
      explanation: "Fronting the negative adverb 'little' triggers inversion: 'Little did he suspect/know'."
    },
    {
      original: "They had hardly begun the meeting when the fire alarm went off.",
      keyword: "SCARCELY",
      gapped: "____ the meeting when the fire alarm went off.",
      answers: ["Scarcely had they begun"],
      model: "Scarcely had they begun",
      explanation: "'Scarcely had + subject + past participle... when' is an inverted structure meaning 'almost as soon as'."
    },
    {
      original: "Almost as soon as the negotiations began, they broke down.",
      keyword: "HARDLY",
      gapped: "____ begun when they broke down.",
      answers: ["Hardly had the negotiations"],
      model: "Hardly had the negotiations",
      explanation: "'Hardly had X done... when Y happened' uses inversion after the fronted negative adverb 'hardly'."
    },
    {
      original: "She didn't realise the value of the manuscript until years later.",
      keyword: "DID",
      gapped: "Not until years later ____ the value of the manuscript.",
      answers: ["did she realise", "did she realize"],
      model: "did she realise",
      explanation: "A fronted 'Not until...' phrase requires subject–auxiliary inversion in the main clause: 'did she realise'."
    },
    {
      original: "You must not open this door for any reason.",
      keyword: "ACCOUNT",
      gapped: "On ____ open this door.",
      answers: ["no account must you", "no account should you", "no account are you to"],
      model: "no account must you",
      explanation: "The fronted negative phrase 'On no account' forces inversion: 'must/should you' or 'are you to'."
    },
    {
      original: "The minister had never faced such fierce criticism before.",
      keyword: "NEVER",
      gapped: "____ such fierce criticism.",
      answers: ["Never before had the minister faced"],
      model: "Never before had the minister faced",
      explanation: "Fronting 'Never before' triggers inversion of the past perfect auxiliary: 'had the minister faced'."
    },
    {
      original: "He missed the deadline and lost the files as well.",
      keyword: "ONLY",
      gapped: "Not ____ the deadline but he also lost the files.",
      answers: ["only did he miss"],
      model: "only did he miss",
      explanation: "'Not only' at the start of a clause requires inversion with the dummy auxiliary 'did'."
    },
    {
      original: "She rarely gives interviews to journalists these days.",
      keyword: "SELDOM",
      gapped: "____ interviews to journalists these days.",
      answers: ["Seldom does she give"],
      model: "Seldom does she give",
      explanation: "The fronted negative adverb 'Seldom' triggers inversion: 'does she give'."
    },
    {
      original: "The results were so surprising that the experiment was repeated.",
      keyword: "SO",
      gapped: "____ that the experiment was repeated.",
      answers: ["So surprising were the results"],
      model: "So surprising were the results",
      explanation: "Fronting 'so + adjective' inverts subject and verb: 'So surprising were the results that...'."
    },
    {
      original: "It was such a boring lecture that half the audience fell asleep.",
      keyword: "SUCH",
      gapped: "____ that half the audience fell asleep.",
      answers: ["Such a boring lecture was it", "Such was the boredom of the lecture"],
      model: "Such a boring lecture was it",
      explanation: "Fronting 'Such' triggers inversion: 'Such a boring lecture was it that...' or 'Such was the boredom... that...'."
    },
    {
      original: "You will not be admitted without a ticket under any circumstances.",
      keyword: "WILL",
      gapped: "Under no circumstances ____ without a ticket.",
      answers: ["will you be admitted"],
      model: "will you be admitted",
      explanation: "After the fronted negative phrase 'Under no circumstances', the modal 'will' inverts with the subject."
    },
    {
      original: "She never once apologised for the delay at any point.",
      keyword: "TIME",
      gapped: "At no ____ for the delay.",
      answers: ["time did she apologise", "time did she apologize"],
      model: "time did she apologise",
      explanation: "The fronted negative phrase 'At no time' requires inversion with 'did'."
    },
    {
      original: "If the government raises taxes, there will be protests.",
      keyword: "SHOULD",
      gapped: "____ taxes, there will be protests.",
      answers: ["Should the government raise"],
      model: "Should the government raise",
      explanation: "An open conditional can be expressed with inversion: 'Should + subject + bare infinitive' replaces 'if... raises'."
    },
    {
      original: "The full scale of the problem emerged only after the report was published.",
      keyword: "EMERGE",
      gapped: "Only after the report was published ____.",
      answers: ["did the full scale of the problem emerge"],
      model: "did the full scale of the problem emerge",
      explanation: "A fronted 'Only after...' clause triggers inversion, with the lexical verb 'emerge' returning to its base form after 'did'."
    },
    {
      original: "People believe that the thieves entered through a window.",
      keyword: "BELIEVED",
      gapped: "The thieves ____ entered through a window.",
      answers: ["are believed to have"],
      model: "are believed to have",
      explanation: "Impersonal passive with past reference: 'are believed to have + past participle'."
    },
    {
      original: "Experts think that the painting is worth two million pounds.",
      keyword: "THOUGHT",
      gapped: "The painting ____ worth two million pounds.",
      answers: ["is thought to be"],
      model: "is thought to be",
      explanation: "Impersonal passive: 'X is thought to be...' replaces 'people/experts think that X is...'."
    },
    {
      original: "People are saying the couple secretly got married last month.",
      keyword: "RUMOURED",
      gapped: "The couple ____ got married secretly last month.",
      answers: ["are rumoured to have"],
      model: "are rumoured to have",
      explanation: "Impersonal passive with perfect infinitive for a past event: 'are rumoured to have got married'."
    },
    {
      original: "Journalists report that the two leaders have reached an agreement.",
      keyword: "REPORTED",
      gapped: "The two leaders ____ reached an agreement.",
      answers: ["are reported to have"],
      model: "are reported to have",
      explanation: "Impersonal passive: 'are reported to have + past participle' for a completed action."
    },
    {
      original: "People estimate that the storm caused damage worth millions.",
      keyword: "ESTIMATED",
      gapped: "The storm ____ caused damage worth millions.",
      answers: ["is estimated to have"],
      model: "is estimated to have",
      explanation: "Impersonal passive with perfect infinitive: 'is estimated to have caused'."
    },
    {
      original: "Everyone expects that the new law will reduce congestion.",
      keyword: "EXPECTED",
      gapped: "The new law ____ congestion.",
      answers: ["is expected to reduce"],
      model: "is expected to reduce",
      explanation: "Impersonal passive with a simple infinitive for future reference: 'is expected to reduce'."
    },
    {
      original: "They say the author wrote the novel in just six weeks.",
      keyword: "SAID",
      gapped: "The author ____ the novel in just six weeks.",
      answers: ["is said to have written"],
      model: "is said to have written",
      explanation: "Impersonal passive with perfect infinitive: 'is said to have written' for a past action."
    },
    {
      original: "The police allege that he forged the signatures.",
      keyword: "ALLEGED",
      gapped: "He ____ the signatures.",
      answers: ["is alleged to have forged"],
      model: "is alleged to have forged",
      explanation: "Impersonal passive: 'is alleged to have + past participle' reports an unproven past accusation."
    },
    {
      original: "People generally consider her the finest violinist of her generation.",
      keyword: "CONSIDERED",
      gapped: "She ____ the finest violinist of her generation.",
      answers: ["is generally considered to be", "is considered to be", "is generally considered"],
      model: "is generally considered to be",
      explanation: "Impersonal passive: 'is (generally) considered (to be)' replaces the active 'people consider her'."
    },
    {
      original: "We understand that the CEO has resigned.",
      keyword: "UNDERSTOOD",
      gapped: "The CEO ____ resigned.",
      answers: ["is understood to have"],
      model: "is understood to have",
      explanation: "Impersonal passive with perfect infinitive: 'is understood to have resigned'."
    },
    {
      original: "The team would have lost without the goalkeeper's brilliance.",
      keyword: "BUT",
      gapped: "____ brilliance, the team would have lost.",
      answers: ["But for the goalkeeper's"],
      model: "But for the goalkeeper's",
      explanation: "'But for + noun phrase' means 'without / if it had not been for' in an unreal past conditional."
    },
    {
      original: "We only caught the train because you reminded us to leave early.",
      keyword: "HAD",
      gapped: "We would have missed the train ____ us to leave early.",
      answers: ["had you not reminded", "if you had not reminded"],
      model: "had you not reminded",
      explanation: "An inverted third conditional: 'had you not reminded' replaces 'if you hadn't reminded'."
    },
    {
      original: "If it hadn't been for her quick thinking, the fire would have spread.",
      keyword: "BEEN",
      gapped: "Had it ____ her quick thinking, the fire would have spread.",
      answers: ["not been for"],
      model: "not been for",
      explanation: "Inverted conditional: 'Had it not been for + noun' replaces 'If it hadn't been for'."
    },
    {
      original: "You can borrow my car as long as you drive carefully.",
      keyword: "CONDITION",
      gapped: "You can borrow my car ____ you drive carefully.",
      answers: ["on condition that", "on the condition that"],
      model: "on condition that",
      explanation: "'As long as' is paraphrased with the fixed phrase 'on (the) condition that'."
    },
    {
      original: "If you happen to see Martha, give her my regards.",
      keyword: "HAPPEN",
      gapped: "Should you ____ Martha, give her my regards.",
      answers: ["happen to see"],
      model: "happen to see",
      explanation: "Inverted conditional 'Should you happen to...' expresses a chance possibility, keeping 'happen' in its base form."
    },
    {
      original: "Unless sales improve dramatically, the branch will close.",
      keyword: "DRAMATIC",
      gapped: "Without a ____ sales, the branch will close.",
      answers: ["dramatic improvement in"],
      model: "dramatic improvement in",
      explanation: "The verb clause 'unless sales improve dramatically' is nominalized as 'without a dramatic improvement in sales'."
    },
    {
      original: "If the painting were genuine, it would be priceless.",
      keyword: "WERE",
      gapped: "____ genuine, it would be priceless.",
      answers: ["Were the painting"],
      model: "Were the painting",
      explanation: "Second-conditional inversion: 'Were the painting genuine' replaces 'If the painting were genuine'."
    },
    {
      original: "I'll lend you the money, but you must pay it back by Friday.",
      keyword: "PROVIDED",
      gapped: "I'll lend you the money ____ it back by Friday.",
      answers: ["provided you pay", "provided that you pay"],
      model: "provided you pay",
      explanation: "'Provided (that)' introduces a condition, replacing 'but you must'."
    },
    {
      original: "If the rumours turn out to be true, the shares will plummet.",
      keyword: "EVENT",
      gapped: "In the ____ true, the shares will plummet.",
      answers: ["event of the rumours proving", "event that the rumours prove"],
      model: "event of the rumours proving",
      explanation: "'In the event of + gerund' or 'in the event that + clause' paraphrases an if-clause formally."
    },
    {
      original: "If she hadn't received financial help, she couldn't have finished her degree.",
      keyword: "FOR",
      gapped: "Had it not been ____, she couldn't have finished her degree.",
      answers: ["for the financial help she received", "for the financial assistance she received"],
      model: "for the financial help she received",
      explanation: "Inverted unreal past conditional: 'Had it not been for + noun phrase'."
    },
    {
      original: "The hotel was worse than we had expected.",
      keyword: "LIVE",
      gapped: "The hotel failed to ____ expectations.",
      answers: ["live up to our"],
      model: "live up to our",
      explanation: "The phrasal verb 'live up to (someone's) expectations' means to be as good as expected."
    },
    {
      original: "She finally accepted her father's death after many years.",
      keyword: "TERMS",
      gapped: "It took her many years to come ____ death.",
      answers: ["to terms with her father's"],
      model: "to terms with her father's",
      explanation: "The idiom 'come to terms with something' means to finally accept a difficult situation."
    },
    {
      original: "I don't know how the sales figures are doing at the moment.",
      keyword: "TRACK",
      gapped: "I have lost ____ the sales figures are doing.",
      answers: ["track of how"],
      model: "track of how",
      explanation: "The idiom 'lose track of' means to no longer be informed about something."
    },
    {
      original: "The manager deliberately ignored the safety violations.",
      keyword: "EYE",
      gapped: "The manager turned ____ the safety violations.",
      answers: ["a blind eye to"],
      model: "a blind eye to",
      explanation: "The idiom 'turn a blind eye to something' means to deliberately ignore it."
    },
    {
      original: "The renovations are nearly finished.",
      keyword: "VERGE",
      gapped: "The renovations are ____ finished.",
      answers: ["on the verge of being"],
      model: "on the verge of being",
      explanation: "'On the verge of + gerund' means very close to a state or event; the passive gerund 'being finished' is needed."
    },
    {
      original: "She blamed the failure of the project on poor planning.",
      keyword: "DOWN",
      gapped: "She put the failure of the project ____ planning.",
      answers: ["down to poor"],
      model: "down to poor",
      explanation: "The phrasal verb 'put something down to' means to attribute it to a cause."
    },
    {
      original: "The committee rejected the proposal because it was too expensive.",
      keyword: "GROUNDS",
      gapped: "The committee rejected the proposal ____ too expensive.",
      answers: ["on the grounds that it was", "on the grounds of its being"],
      model: "on the grounds that it was",
      explanation: "'On the grounds that + clause' (or 'on the grounds of + gerund') formally expresses a reason."
    },
    {
      original: "They demolished the old theatre in order to build a car park.",
      keyword: "VIEW",
      gapped: "They demolished the old theatre ____ a car park.",
      answers: ["with a view to building"],
      model: "with a view to building",
      explanation: "'With a view to + gerund' expresses purpose; note the gerund after the preposition 'to'."
    },
    {
      original: "Her latest novel is not nearly as good as her earlier work.",
      keyword: "FALLS",
      gapped: "Her latest novel ____ of her earlier work.",
      answers: ["falls far short", "falls well short"],
      model: "falls far short",
      explanation: "The idiom 'fall (far/well) short of something' means to fail to reach a standard."
    },
    {
      original: "It is completely impossible for us to postpone the wedding now.",
      keyword: "QUESTION",
      gapped: "Postponing the wedding now is ____.",
      answers: ["out of the question", "completely out of the question"],
      model: "out of the question",
      explanation: "The idiom 'out of the question' means impossible or not to be considered."
    },
    {
      original: "All our attempts to contact the owner were unsuccessful.",
      keyword: "AVAIL",
      gapped: "We tried to contact the owner, but ____.",
      answers: ["to no avail", "it was to no avail"],
      model: "to no avail",
      explanation: "The fixed phrase 'to no avail' means without success."
    },
    {
      original: "I assumed she would always be there, which was a mistake.",
      keyword: "GRANTED",
      gapped: "I was wrong to take ____ she would always be there.",
      answers: ["it for granted that", "for granted that"],
      model: "it for granted that",
      explanation: "The idiom 'take (it) for granted that...' means to assume something without question."
    },
    {
      original: "I haven't found time to answer those emails yet.",
      keyword: "ROUND",
      gapped: "I haven't got ____ those emails yet.",
      answers: ["round to answering"],
      model: "round to answering",
      explanation: "The phrasal verb 'get round to + gerund' means to finally find time to do something."
    },
    {
      original: "You should revise your Spanish before the trip.",
      keyword: "BRUSH",
      gapped: "You should ____ your Spanish before the trip.",
      answers: ["brush up on"],
      model: "brush up on",
      explanation: "The phrasal verb 'brush up on' means to improve a skill through practice after a period of neglect."
    },
    {
      original: "He compensated for his lack of experience by working incredibly hard.",
      keyword: "MADE",
      gapped: "He ____ his lack of experience by working incredibly hard.",
      answers: ["made up for"],
      model: "made up for",
      explanation: "The phrasal verb 'make up for' means to compensate for a deficiency."
    },
    {
      original: "The two witnesses gave completely contradictory accounts.",
      keyword: "ODDS",
      gapped: "The two witnesses' accounts were completely ____ other.",
      answers: ["at odds with each"],
      model: "at odds with each",
      explanation: "The idiom 'at odds with' means in disagreement or conflict with."
    },
    {
      original: "The company cannot afford to upgrade its equipment.",
      keyword: "POSITION",
      gapped: "The company is in ____ its equipment.",
      answers: ["no position to upgrade"],
      model: "no position to upgrade",
      explanation: "'Be in no position to do something' means to be unable to do it, often for financial or practical reasons."
    },
    {
      original: "The new stadium looks remarkably like the old one.",
      keyword: "RESEMBLANCE",
      gapped: "The new stadium bears ____ the old one.",
      answers: ["a remarkable resemblance to", "a striking resemblance to"],
      model: "a remarkable resemblance to",
      explanation: "The collocation 'bear a resemblance to' nominalizes 'look like'; the adverb becomes an adjective."
    },
    {
      original: "Nobody knows exactly why the settlement was abandoned.",
      keyword: "REMAINS",
      gapped: "The reason for the settlement's abandonment ____.",
      answers: ["remains a complete mystery", "remains a total mystery"],
      model: "remains a complete mystery",
      explanation: "'Nobody knows' is paraphrased as 'remains a mystery', with the why-clause nominalized as 'the reason for'."
    },
    {
      original: "He escaped punishment for cheating in the exam.",
      keyword: "GOT",
      gapped: "He ____ cheating in the exam.",
      answers: ["got away with"],
      model: "got away with",
      explanation: "The phrasal verb 'get away with' means to escape punishment for wrongdoing."
    },
    {
      original: "The scientists devised an entirely new method of testing.",
      keyword: "CAME",
      gapped: "The scientists ____ an entirely new method of testing.",
      answers: ["came up with"],
      model: "came up with",
      explanation: "The phrasal verb 'come up with' means to think of or devise something."
    },
    {
      original: "The government abolished the tax in 2019.",
      keyword: "AWAY",
      gapped: "The government ____ the tax in 2019.",
      answers: ["did away with"],
      model: "did away with",
      explanation: "The phrasal verb 'do away with' means to abolish or get rid of something."
    },
    {
      original: "She despises people who talk about themselves constantly.",
      keyword: "LOOKS",
      gapped: "She ____ people who talk about themselves constantly.",
      answers: ["looks down on"],
      model: "looks down on",
      explanation: "The phrasal verb 'look down on' means to regard with contempt."
    },
    {
      original: "Their decision to move abroad astonished all their friends.",
      keyword: "TOOK",
      gapped: "Their decision to move abroad ____ surprise.",
      answers: ["took all their friends by"],
      model: "took all their friends by",
      explanation: "The idiom 'take someone by surprise' means to astonish them unexpectedly."
    },
    {
      original: "I'm sure Michael didn't break the window on purpose.",
      keyword: "BROKEN",
      gapped: "Michael ____ the window on purpose.",
      answers: ["can't have broken", "cannot have broken", "couldn't have broken"],
      model: "can't have broken",
      explanation: "Negative deduction about the past: 'can't/couldn't have + past participle'."
    },
    {
      original: "It's very unusual for Anna to lose her temper.",
      keyword: "LIKE",
      gapped: "It's not ____ her temper.",
      answers: ["like Anna to lose"],
      model: "like Anna to lose",
      explanation: "'It's not like someone to do something' means the behaviour is uncharacteristic of them."
    },
    {
      original: "The festival was cancelled because of the torrential rain.",
      keyword: "LED",
      gapped: "The torrential rain ____ of the festival.",
      answers: ["led to the cancellation"],
      model: "led to the cancellation",
      explanation: "Cause and effect are reversed and the verb 'cancel' is nominalized: 'led to the cancellation of'."
    },
    {
      original: "You must take the shipping costs into consideration when setting the price.",
      keyword: "ALLOWANCES",
      gapped: "You must make ____ costs when setting the price.",
      answers: ["allowances for the shipping", "allowances for shipping"],
      model: "allowances for the shipping",
      explanation: "'Make allowances for something' means to take it into consideration."
    },
    {
      original: "She has no intention whatsoever of resigning.",
      keyword: "SLIGHTEST",
      gapped: "She hasn't the ____ resigning.",
      answers: ["slightest intention of"],
      model: "slightest intention of",
      explanation: "'Not have the slightest intention of + gerund' emphatically denies any intention."
    },
    {
      original: "The critics praised her performance very highly.",
      keyword: "PRAISE",
      gapped: "The critics were full ____ her performance.",
      answers: ["of praise for"],
      model: "of praise for",
      explanation: "The verb 'praise' becomes a noun in the collocation 'be full of praise for'."
    },
    {
      original: "The bridge was closed because it had been damaged by the storm.",
      keyword: "OWING",
      gapped: "The bridge was closed ____ caused by the storm.",
      answers: ["owing to the damage"],
      model: "owing to the damage",
      explanation: "'Owing to + noun' replaces a because-clause; the verb 'damaged' is nominalized as 'the damage'."
    },
    {
      original: "Because demand fell sharply, the factory cut production.",
      keyword: "FALL",
      gapped: "The sharp ____ led the factory to cut production.",
      answers: ["fall in demand"],
      model: "fall in demand",
      explanation: "The verb clause 'demand fell sharply' is nominalized as 'the sharp fall in demand'."
    },
    {
      original: "The play was received enthusiastically by the audience.",
      keyword: "RECEPTION",
      gapped: "The audience gave the play ____.",
      answers: ["an enthusiastic reception", "a very enthusiastic reception"],
      model: "an enthusiastic reception",
      explanation: "The passive verb 'was received' is nominalized: 'give something an enthusiastic reception'."
    },
    {
      original: "They decided to postpone the launch, which surprised investors.",
      keyword: "DECISION",
      gapped: "Their ____ the launch surprised investors.",
      answers: ["decision to postpone"],
      model: "decision to postpone",
      explanation: "The verb 'decided' is nominalized as 'decision', followed by a to-infinitive."
    },
    {
      original: "The two sides are unlikely to reach an agreement soon.",
      keyword: "LIKELIHOOD",
      gapped: "There is little ____ an agreement soon.",
      answers: ["likelihood of the two sides reaching"],
      model: "likelihood of the two sides reaching",
      explanation: "'Unlikely' is nominalized as 'little likelihood of + noun phrase + gerund'."
    },
    {
      original: "He explained why he had missed the meeting very convincingly.",
      keyword: "EXPLANATION",
      gapped: "He gave a very convincing ____ missed the meeting.",
      answers: ["explanation of why he had", "explanation as to why he had"],
      model: "explanation of why he had",
      explanation: "The verb 'explained' is nominalized: 'give an explanation of / as to why'."
    },
    {
      original: "Everyone admired how patiently she dealt with the complaints.",
      keyword: "ADMIRATION",
      gapped: "Everyone was full of ____ way she dealt with the complaints.",
      answers: ["admiration for the patient"],
      model: "admiration for the patient",
      explanation: "The verb 'admired' becomes the noun 'admiration', and the adverb 'patiently' becomes the adjective 'patient'."
    },
    {
      original: "The refugees depend entirely on foreign aid to survive.",
      keyword: "DEPENDENT",
      gapped: "The refugees are ____ foreign aid for their survival.",
      answers: ["entirely dependent on", "totally dependent on", "wholly dependent on"],
      model: "entirely dependent on",
      explanation: "The verb 'depend on' becomes the adjective phrase 'be dependent on'."
    },
    {
      original: "The tickets sold out very quickly, which disappointed many fans.",
      keyword: "DISAPPOINTMENT",
      gapped: "Much to the ____ fans, the tickets sold out very quickly.",
      answers: ["disappointment of many"],
      model: "disappointment of many",
      explanation: "The verb 'disappointed' is nominalized in the fixed pattern 'much to the disappointment of'."
    },
    {
      original: "She has an exceptional talent for putting people at ease.",
      keyword: "GIFTED",
      gapped: "She is ____ putting people at ease.",
      answers: ["exceptionally gifted at", "exceptionally gifted when it comes to"],
      model: "exceptionally gifted at",
      explanation: "The noun phrase 'an exceptional talent for' becomes the adjective 'exceptionally gifted at'."
    },
    {
      original: "Her tone annoyed me, not her actual words.",
      keyword: "WAS",
      gapped: "It ____ annoyed me, not her actual words.",
      answers: ["was her tone that", "was her tone which"],
      model: "was her tone that",
      explanation: "An 'it' cleft sentence emphasizes 'her tone': 'It was her tone that annoyed me'."
    },
    {
      original: "I only found out the truth much later.",
      keyword: "THAT",
      gapped: "It was only much later ____ the truth.",
      answers: ["that I found out", "that I discovered"],
      model: "that I found out",
      explanation: "An 'it' cleft with a time phrase: 'It was only much later that...'."
    },
    {
      original: "The committee objected most strongly to the cost of the scheme.",
      keyword: "WHAT",
      gapped: "____ objected to most strongly was the cost of the scheme.",
      answers: ["What the committee"],
      model: "What the committee",
      explanation: "A pseudo-cleft with 'What' fronts the focus: 'What the committee objected to... was...'."
    },
    {
      original: "We need commitment rather than money.",
      keyword: "NOT",
      gapped: "It is commitment, ____ we need.",
      answers: ["not money, that"],
      model: "not money, that",
      explanation: "A contrastive 'it' cleft: 'It is X, not Y, that we need'."
    },
    {
      original: "Nobody realised the significance of the discovery at the time.",
      keyword: "ONE",
      gapped: "No ____ significance of the discovery at the time.",
      answers: ["one realised the", "one realized the"],
      model: "one realised the",
      explanation: "'Nobody' is paraphrased as 'no one', keeping the same past simple verb."
    },
    {
      original: "The manager's attitude, more than anything else, caused the strike.",
      keyword: "ABOVE",
      gapped: "It was the manager's attitude, ____, that caused the strike.",
      answers: ["above all else"],
      model: "above all else",
      explanation: "'More than anything else' is paraphrased as 'above all else' inside an 'it' cleft."
    },
    {
      original: "She admires his honesty most of all.",
      keyword: "ADMIRES",
      gapped: "What she ____ his honesty.",
      answers: ["admires most of all is", "admires most is"],
      model: "admires most of all is",
      explanation: "A pseudo-cleft: 'What she admires most (of all) is his honesty'."
    },
    {
      original: "The decline began only after the founder retired.",
      keyword: "UNTIL",
      gapped: "It was not ____ that the decline began.",
      answers: ["until the founder retired", "until the founder's retirement"],
      model: "until the founder retired",
      explanation: "The cleft 'It was not until... that...' emphasizes the time when something started."
    },
    {
      original: "Although he tried very hard, he couldn't persuade her.",
      keyword: "HOWEVER",
      gapped: "____ tried, he couldn't persuade her.",
      answers: ["However hard he"],
      model: "However hard he",
      explanation: "'However + adjective/adverb + subject + verb' is a concessive structure meaning 'no matter how'."
    },
    {
      original: "Even though I admire her work, I find her arrogant.",
      keyword: "MUCH",
      gapped: "____ admire her work, I find her arrogant.",
      answers: ["Much as I"],
      model: "Much as I",
      explanation: "'Much as + subject + verb' is a formal concessive structure meaning 'although... very much'."
    },
    {
      original: "Despite being exhausted, the climbers pressed on.",
      keyword: "THOUGH",
      gapped: "Exhausted ____, the climbers pressed on.",
      answers: ["though they were", "though the climbers were"],
      model: "though they were",
      explanation: "Fronted adjective + 'though + subject + be' is an emphatic concessive inversion: 'Exhausted though they were'."
    },
    {
      original: "It doesn't matter how much the watch costs; I'm buying it.",
      keyword: "MATTER",
      gapped: "No ____ costs, I'm buying it.",
      answers: ["matter how much the watch"],
      model: "matter how much the watch",
      explanation: "'No matter how + adjective/adverb + clause' expresses concession."
    },
    {
      original: "Despite all its faults, the plan is our best option.",
      keyword: "NOTWITHSTANDING",
      gapped: "____, the plan is our best option.",
      answers: ["Its faults notwithstanding", "Notwithstanding all its faults", "Notwithstanding its faults"],
      model: "Its faults notwithstanding",
      explanation: "'Notwithstanding' is a formal equivalent of 'despite' and may follow or precede its noun phrase."
    },
    {
      original: "Even the most experienced surgeons occasionally make mistakes.",
      keyword: "IMMUNE",
      gapped: "Not even the most experienced surgeons are ____ mistakes.",
      answers: ["immune to making", "immune from making"],
      model: "immune to making",
      explanation: "'Be immune to/from + gerund' means not exempt from doing something; here it paraphrases 'occasionally make'."
    },
    {
      original: "Although the evidence was strong, the jury acquitted him.",
      keyword: "STRENGTH",
      gapped: "Despite the ____ evidence, the jury acquitted him.",
      answers: ["strength of the"],
      model: "strength of the",
      explanation: "The adjective 'strong' is nominalized after 'despite': 'the strength of the evidence'."
    },
    {
      original: "Whatever she says, don't believe her.",
      keyword: "NO",
      gapped: "Take ____ what she says.",
      answers: ["no notice of"],
      model: "no notice of",
      explanation: "The idiom 'take no notice of' means to pay no attention to or disregard something."
    },
    {
      original: "I regret not studying languages when I was younger.",
      keyword: "WISH",
      gapped: "I ____ studied languages when I was younger.",
      answers: ["wish I had", "wish that I had"],
      model: "wish I had",
      explanation: "Regret about the past: 'wish + past perfect' replaces 'regret not + gerund'."
    },
    {
      original: "The council should have dealt with the potholes long ago.",
      keyword: "HIGH",
      gapped: "It is ____ something about the potholes.",
      answers: ["high time the council did"],
      model: "high time the council did",
      explanation: "'It is high time + subject + past simple' criticizes a delay in doing something."
    },
    {
      original: "He is sorry now that he sold the house.",
      keyword: "REGRETS",
      gapped: "He ____ the house.",
      answers: ["now regrets having sold", "now regrets selling"],
      model: "now regrets having sold",
      explanation: "'Regret + (having +) gerund' expresses being sorry about a past action."
    },
    {
      original: "I'd prefer to stay in tonight rather than go out.",
      keyword: "RATHER",
      gapped: "I ____ tonight than go out.",
      answers: ["would rather stay in"],
      model: "would rather stay in",
      explanation: "'Would rather + bare infinitive... than' expresses preference between two actions."
    },
    {
      original: "They insist that visitors sign in at reception.",
      keyword: "INSISTENCE",
      gapped: "It is at their ____ sign in at reception.",
      answers: ["insistence that visitors"],
      model: "insistence that visitors",
      explanation: "The verb 'insist' is nominalized: 'at someone's insistence that + subjunctive clause'."
    },
    {
      original: "If only I hadn't lent him my car.",
      keyword: "BITTERLY",
      gapped: "I ____ him my car.",
      answers: ["bitterly regret lending", "bitterly regret having lent"],
      model: "bitterly regret lending",
      explanation: "'If only + past perfect' is paraphrased as 'bitterly regret + gerund'."
    },
    {
      original: "She would rather her son didn't travel alone.",
      keyword: "PREFERENCE",
      gapped: "Her ____ her son not to travel alone.",
      answers: ["preference is for"],
      model: "preference is for",
      explanation: "'Would rather + past' is nominalized: 'her preference is for someone not to do'."
    },
    {
      original: "Suppose the deal falls through — what will we do?",
      keyword: "SUPPOSING",
      gapped: "____ through, what would we do?",
      answers: ["Supposing the deal fell", "Supposing the deal were to fall"],
      model: "Supposing the deal fell",
      explanation: "'Supposing + past simple / were to' introduces a hypothetical condition, like 'suppose'."
    },
    {
      original: "The population of the city has doubled over the last decade.",
      keyword: "TWICE",
      gapped: "The city's population is now ____ was a decade ago.",
      answers: ["twice what it", "twice as large as it", "twice the size it"],
      model: "twice what it",
      explanation: "'Has doubled' is paraphrased with a comparative: 'is now twice what it was'."
    },
    {
      original: "Hardly anyone attended the exhibition's opening night.",
      keyword: "TURNOUT",
      gapped: "There was a very ____ the exhibition's opening night.",
      answers: ["poor turnout for", "low turnout for", "poor turnout at"],
      model: "poor turnout for",
      explanation: "'Hardly anyone attended' is nominalized as 'a very poor/low turnout for/at'."
    },
    {
      original: "Getting a refund from that company is extremely difficult.",
      keyword: "DIFFICULTY",
      gapped: "You will have great ____ a refund from that company.",
      answers: ["difficulty in getting", "difficulty in obtaining"],
      model: "difficulty in getting",
      explanation: "The adjective 'difficult' is nominalized: 'have (great) difficulty in + gerund'."
    },
    {
      original: "The security guards prevented us from entering the building.",
      keyword: "ALLOWED",
      gapped: "We were not ____ the building by the security guards.",
      answers: ["allowed to enter"],
      model: "allowed to enter",
      explanation: "'Prevent someone from + gerund' becomes the passive 'not be allowed to + infinitive'."
    },
    {
      original: "My salary is nowhere near as high as hers.",
      keyword: "CONSIDERABLY",
      gapped: "She earns ____ I do.",
      answers: ["considerably more than", "a considerably higher salary than"],
      model: "considerably more than",
      explanation: "'Nowhere near as high as' is reversed into a comparative intensified by 'considerably'."
    },
    {
      original: "It was wrong of you to open my letters.",
      keyword: "OUGHT",
      gapped: "You ____ opened my letters.",
      answers: ["ought not to have"],
      model: "ought not to have",
      explanation: "Past criticism: 'ought not to have + past participle' expresses that an action was wrong."
    },
    {
      original: "There's no point in complaining to the manager.",
      keyword: "WORTH",
      gapped: "It ____ to the manager.",
      answers: ["is not worth complaining", "isn't worth complaining"],
      model: "is not worth complaining",
      explanation: "'There's no point in + gerund' is paraphrased as 'it is not worth + gerund'."
    },
    {
      original: "As far as I know, the contract hasn't been signed yet.",
      keyword: "KNOWLEDGE",
      gapped: "To ____, the contract hasn't been signed yet.",
      answers: ["the best of my knowledge"],
      model: "the best of my knowledge",
      explanation: "The fixed phrase 'to the best of my knowledge' means 'as far as I know'."
    },
    {
      original: "The company's profits have fallen steadily since 2020.",
      keyword: "DECLINE",
      gapped: "There has been a steady ____ profits since 2020.",
      answers: ["decline in the company's"],
      model: "decline in the company's",
      explanation: "The verb 'have fallen' is nominalized: 'there has been a steady decline in'."
    },
    {
      original: "She speaks French fluently, and Italian too.",
      keyword: "ADDITION",
      gapped: "In ____ fluent French, she also speaks Italian.",
      answers: ["addition to speaking"],
      model: "addition to speaking",
      explanation: "'In addition to + gerund' links two facts; the adverb 'fluently' becomes the adjective 'fluent'."
    },
    {
      original: "The moment the concert ended, the crowd rushed to the exits.",
      keyword: "THAN",
      gapped: "No sooner had the concert ended ____ to the exits.",
      answers: ["than the crowd rushed"],
      model: "than the crowd rushed",
      explanation: "'No sooner... than' correlates two immediately consecutive past events; 'than' introduces the second clause."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
