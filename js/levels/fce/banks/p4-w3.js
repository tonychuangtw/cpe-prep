/* FCE Prep extra bank: part4 wave 3 */
(function () {
  var BANK = [
    // ===== Passives =====
    {
      original: "Someone cleans the pool twice a week.",
      keyword: "IS",
      gapped: "The pool ____ twice a week.",
      answers: ["is cleaned"],
      model: "is cleaned",
      explanation: "Present simple passive: the agent is unknown, so we say 'is cleaned'."
    },
    {
      original: "They printed the tickets at the box office.",
      keyword: "WERE",
      gapped: "The tickets ____ at the box office.",
      answers: ["were printed"],
      model: "were printed",
      explanation: "Past simple passive: 'were printed' replaces the active verb with an unspecified agent."
    },
    {
      original: "The chef prepares all the sauces himself.",
      keyword: "BY",
      gapped: "All the sauces are prepared ____ himself.",
      answers: ["by the chef"],
      model: "by the chef",
      explanation: "In the passive, the doer of the action is introduced with 'by'."
    },
    {
      original: "They will deliver the sofa on Thursday.",
      keyword: "WILL",
      gapped: "The sofa ____ on Thursday.",
      answers: ["will be delivered"],
      model: "will be delivered",
      explanation: "Future passive is formed with 'will be' + past participle."
    },
    {
      original: "Engineers are testing the new bridge at the moment.",
      keyword: "BEING",
      gapped: "The new bridge is ____ engineers at the moment.",
      answers: ["being tested by"],
      model: "being tested by",
      explanation: "Present continuous passive uses 'is being' + past participle, with the agent after 'by'."
    },
    {
      original: "Somebody has broken the office window.",
      keyword: "HAS",
      gapped: "The office window ____ broken.",
      answers: ["has been"],
      model: "has been",
      explanation: "Present perfect passive is 'has been' + past participle when the agent is unknown."
    },
    {
      original: "They had already sold all the paintings when we arrived.",
      keyword: "BEEN",
      gapped: "All the paintings had ____ when we arrived.",
      answers: ["already been sold"],
      model: "already been sold",
      explanation: "Past perfect passive: 'had been sold', with 'already' before the participle group."
    },
    {
      original: "You should keep this medicine in the fridge.",
      keyword: "KEPT",
      gapped: "This medicine should ____ the fridge.",
      answers: ["be kept in"],
      model: "be kept in",
      explanation: "Modal passive: modal verb + 'be' + past participle."
    },
    {
      original: "Nobody has watered the garden since March.",
      keyword: "NOT",
      gapped: "The garden has ____ since March.",
      answers: ["not been watered"],
      model: "not been watered",
      explanation: "'Nobody has done X' becomes a negative present perfect passive: 'has not been watered'."
    },
    {
      original: "People expect the president to resign soon.",
      keyword: "EXPECTED",
      gapped: "The president ____ resign soon.",
      answers: ["is expected to"],
      model: "is expected to",
      explanation: "Impersonal passive with reporting verbs: 'is expected to' + infinitive."
    },
    {
      original: "They say the water in this spring is pure.",
      keyword: "SAID",
      gapped: "The water in this spring ____ be pure.",
      answers: ["is said to"],
      model: "is said to",
      explanation: "'They say that X is...' becomes 'X is said to be...' in the impersonal passive."
    },
    {
      original: "They might cancel the concert if it rains.",
      keyword: "BE",
      gapped: "The concert might ____ if it rains.",
      answers: ["be cancelled"],
      model: "be cancelled",
      explanation: "Passive after a modal verb: 'might be cancelled'."
    },
    // ===== Causatives =====
    {
      original: "A tailor is altering Ken's suit.",
      keyword: "HAVING",
      gapped: "Ken is ____ altered by a tailor.",
      answers: ["having his suit"],
      model: "having his suit",
      explanation: "Causative 'have something done' shows someone else performs the service."
    },
    {
      original: "Someone checked my eyes last week.",
      keyword: "HAD",
      gapped: "I ____ checked last week.",
      answers: ["had my eyes"],
      model: "had my eyes",
      explanation: "Causative past: 'I had my eyes checked' means a professional did it for me."
    },
    {
      original: "A decorator will paper our bedroom next month.",
      keyword: "HAVE",
      gapped: "We will ____ papered next month.",
      answers: ["have our bedroom"],
      model: "have our bedroom",
      explanation: "Future causative: 'will have something done' by someone else."
    },
    {
      original: "I must find someone to translate this contract.",
      keyword: "GET",
      gapped: "I must ____ translated.",
      answers: ["get this contract", "get the contract"],
      model: "get this contract",
      explanation: "'Get something done' is an informal causative meaning to arrange for someone to do it."
    },
    {
      original: "A jeweller repaired Mia's watch.",
      keyword: "GOT",
      gapped: "Mia ____ repaired by a jeweller.",
      answers: ["got her watch"],
      model: "got her watch",
      explanation: "Causative with 'got': Mia arranged for the jeweller to repair her watch."
    },
    {
      original: "The captain made the crew clean the deck.",
      keyword: "WERE",
      gapped: "The crew ____ clean the deck by the captain.",
      answers: ["were made to"],
      model: "were made to",
      explanation: "In the passive, 'make someone do' becomes 'be made TO do' with the infinitive."
    },
    // ===== Reported speech =====
    {
      original: "'I saw this film last year,' said Nora.",
      keyword: "SEEN",
      gapped: "Nora said she ____ the film the year before.",
      answers: ["had seen"],
      model: "had seen",
      explanation: "In reported speech the past simple shifts back to the past perfect."
    },
    {
      original: "'We can't afford a new car,' my parents said.",
      keyword: "NOT",
      gapped: "My parents said they could ____ a new car.",
      answers: ["not afford"],
      model: "not afford",
      explanation: "'Can't' becomes 'could not' when the statement is reported."
    },
    {
      original: "'How long have you been waiting?' Tim asked me.",
      keyword: "HOW",
      gapped: "Tim asked me ____ been waiting.",
      answers: ["how long I had"],
      model: "how long I had",
      explanation: "Reported questions use statement word order, and the present perfect shifts to the past perfect."
    },
    {
      original: "'Do you speak Italian?' the guide asked Lena.",
      keyword: "SPOKE",
      gapped: "The guide asked Lena ____ Italian.",
      answers: ["if she spoke", "whether she spoke"],
      model: "if she spoke",
      explanation: "Yes/no questions are reported with 'if' or 'whether', and the tense shifts back."
    },
    {
      original: "'I'll pick you up at eight,' said Dev.",
      keyword: "WOULD",
      gapped: "Dev said he ____ up at eight.",
      answers: ["would pick me"],
      model: "would pick me",
      explanation: "'Will' becomes 'would' in reported speech, and 'you' changes to 'me'."
    },
    {
      original: "'Don't swim near the rocks,' the lifeguard told us.",
      keyword: "TO",
      gapped: "The lifeguard told us ____ near the rocks.",
      answers: ["not to swim"],
      model: "not to swim",
      explanation: "Negative reported commands use 'told someone not to' + infinitive."
    },
    {
      original: "'Why don't you apply for the grant?' said my tutor.",
      keyword: "SUGGESTED",
      gapped: "My tutor ____ for the grant.",
      answers: ["suggested applying", "suggested that I apply", "suggested I apply"],
      model: "suggested applying",
      explanation: "'Suggest' is followed by a gerund or a that-clause, never by 'to' + infinitive."
    },
    {
      original: "'I'm sorry I shouted at you,' Greta said to Bill.",
      keyword: "APOLOGISED",
      gapped: "Greta ____ having shouted at Bill.",
      answers: ["apologised to Bill for", "apologised for"],
      model: "apologised to Bill for",
      explanation: "'Apologise' takes 'to' + person and 'for' + gerund."
    },
    {
      original: "'It was Marco who broke the vase,' said the babysitter.",
      keyword: "BLAMED",
      gapped: "The babysitter ____ breaking the vase.",
      answers: ["blamed Marco for"],
      model: "blamed Marco for",
      explanation: "The reporting verb 'blame' takes the pattern 'blame someone for doing something'."
    },
    {
      original: "'You mustn't touch the exhibits,' the attendant said to us.",
      keyword: "WARNED",
      gapped: "The attendant ____ touch the exhibits.",
      answers: ["warned us not to"],
      model: "warned us not to",
      explanation: "'Warn someone not to do something' reports a prohibition."
    },
    {
      original: "'Would you like to join us for dinner?' Ali said to me.",
      keyword: "INVITED",
      gapped: "Ali ____ them for dinner.",
      answers: ["invited me to join"],
      model: "invited me to join",
      explanation: "An offer of company is reported with 'invite someone to do something'."
    },
    {
      original: "'I really think you should insure your bike,' said the shopkeeper.",
      keyword: "ADVISED",
      gapped: "The shopkeeper ____ my bike.",
      answers: ["advised me to insure"],
      model: "advised me to insure",
      explanation: "'Advise' takes an object plus 'to' + infinitive."
    },
    {
      original: "'I definitely didn't leave the tap running,' said Theo.",
      keyword: "DENIED",
      gapped: "Theo ____ the tap running.",
      answers: ["denied leaving", "denied having left"],
      model: "denied leaving",
      explanation: "'Deny' is followed by a gerund or 'having' + past participle."
    },
    {
      original: "'Yes, I'll work the night shift,' said Rosa.",
      keyword: "AGREED",
      gapped: "Rosa ____ the night shift.",
      answers: ["agreed to work"],
      model: "agreed to work",
      explanation: "'Agree' is followed by 'to' + infinitive."
    },
    {
      original: "'Let me pay for the taxi,' said Hugo.",
      keyword: "INSISTED",
      gapped: "Hugo ____ for the taxi.",
      answers: ["insisted on paying"],
      model: "insisted on paying",
      explanation: "'Insist' takes the preposition 'on' followed by a gerund."
    },
    {
      original: "'Meet me outside the bank at noon,' Clara told her brother.",
      keyword: "TOLD",
      gapped: "Clara ____ meet her outside the bank at noon.",
      answers: ["told her brother to"],
      model: "told her brother to",
      explanation: "Reported commands use 'tell someone to' + infinitive."
    },
    // ===== Conditionals =====
    {
      original: "We didn't visit the palace because we didn't have time.",
      keyword: "WOULD",
      gapped: "If we had had time, we ____ the palace.",
      answers: ["would have visited"],
      model: "would have visited",
      explanation: "Third conditional: an unreal past result uses 'would have' + past participle."
    },
    {
      original: "I can't email Karen because I don't know her address.",
      keyword: "KNEW",
      gapped: "If I ____ address, I would email her.",
      answers: ["knew Karen's", "knew her"],
      model: "knew Karen's",
      explanation: "Second conditional: an unreal present condition uses the past simple 'knew'."
    },
    {
      original: "Take a jacket, or you'll get cold on the boat.",
      keyword: "IF",
      gapped: "You'll get cold on the boat ____ take a jacket.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Or' after an imperative is equivalent to 'if you don't' in a first conditional."
    },
    {
      original: "The alarm didn't go off, so Pete was late for work.",
      keyword: "GONE",
      gapped: "If the alarm had ____, Pete wouldn't have been late for work.",
      answers: ["gone off"],
      model: "gone off",
      explanation: "Third conditional: the unreal past condition uses 'had gone off'."
    },
    {
      original: "You can borrow the drill as long as you return it tomorrow.",
      keyword: "PROVIDED",
      gapped: "You can borrow the drill ____ it tomorrow.",
      answers: ["provided you return", "provided that you return"],
      model: "provided you return",
      explanation: "'Provided (that)' means the same as 'as long as' to state a condition."
    },
    {
      original: "Hurry up, or we'll miss the beginning of the play.",
      keyword: "UNLESS",
      gapped: "We'll miss the beginning of the play ____ up.",
      answers: ["unless we hurry"],
      model: "unless we hurry",
      explanation: "'Unless' means 'if... not': the bad result happens if we don't hurry."
    },
    {
      original: "I only recognised Dan because of his red scarf.",
      keyword: "HAD",
      gapped: "If Dan ____ been wearing his red scarf, I wouldn't have recognised him.",
      answers: ["had not"],
      model: "had not",
      explanation: "Third conditional with a continuous condition: 'had not been wearing'."
    },
    {
      original: "You didn't tell me about the delay, so I waited an hour.",
      keyword: "TOLD",
      gapped: "If you had ____ the delay, I wouldn't have waited an hour.",
      answers: ["told me about"],
      model: "told me about",
      explanation: "Third conditional: 'if you had told me' describes an unreal past condition."
    },
    {
      original: "In case of fire, use the stairs.",
      keyword: "IF",
      gapped: "Use the stairs ____ a fire.",
      answers: ["if there is"],
      model: "if there is",
      explanation: "The formal phrase 'in case of fire' can be rephrased as 'if there is a fire'."
    },
    {
      original: "Susie doesn't speak French, so she won't apply for the job in Paris.",
      keyword: "SPOKE",
      gapped: "If Susie ____, she would apply for the job in Paris.",
      answers: ["spoke French"],
      model: "spoke French",
      explanation: "Second conditional: an unreal present ability is expressed with the past simple."
    },
    // ===== Wish / regret =====
    {
      original: "I regret not taking that job in Canada.",
      keyword: "WISH",
      gapped: "I ____ taken that job in Canada.",
      answers: ["wish I had"],
      model: "wish I had",
      explanation: "Regret about the past is expressed with 'wish' + past perfect."
    },
    {
      original: "It's a pity Ryan can't come to the reunion.",
      keyword: "COULD",
      gapped: "I wish Ryan ____ to the reunion.",
      answers: ["could come"],
      model: "could come",
      explanation: "'Wish' + 'could' expresses a present impossibility we would like to change."
    },
    {
      original: "I'm annoyed that the printer keeps jamming.",
      keyword: "WOULD",
      gapped: "I wish the printer ____ jamming.",
      answers: ["would stop"],
      model: "would stop",
      explanation: "'Wish' + 'would' complains about an annoying repeated situation."
    },
    {
      original: "It's a shame I'm not taller.",
      keyword: "WERE",
      gapped: "I ____ taller.",
      answers: ["wish I were"],
      model: "wish I were",
      explanation: "'Wish' + past subjunctive 'were' expresses a present unreal desire."
    },
    {
      original: "Zack regrets buying such an old motorbike.",
      keyword: "WISHES",
      gapped: "Zack ____ bought such an old motorbike.",
      answers: ["wishes he hadn't", "wishes he had not"],
      model: "wishes he hadn't",
      explanation: "Regret about a past action is expressed with 'wishes' + past perfect negative."
    },
    {
      original: "It's a pity we didn't book seats together.",
      keyword: "ONLY",
      gapped: "If ____ booked seats together.",
      answers: ["only we had", "only we'd"],
      model: "only we had",
      explanation: "'If only' + past perfect expresses strong regret about the past."
    },
    // ===== Comparatives =====
    {
      original: "No hotel in town is as expensive as the Grand.",
      keyword: "MOST",
      gapped: "The Grand is ____ hotel in town.",
      answers: ["the most expensive"],
      model: "the most expensive",
      explanation: "'No X is as ... as Y' means Y is the superlative."
    },
    {
      original: "I've never tasted a spicier curry than this one.",
      keyword: "THE",
      gapped: "This is ____ curry I have ever tasted.",
      answers: ["the spiciest"],
      model: "the spiciest",
      explanation: "'Never ... a spicier X' is equivalent to 'the spiciest X ever'."
    },
    {
      original: "My old phone was faster than this one.",
      keyword: "AS",
      gapped: "This phone is not ____ my old one.",
      answers: ["as fast as"],
      model: "as fast as",
      explanation: "The comparative is reversed using 'not as ... as'."
    },
    {
      original: "The journey took less time than we expected.",
      keyword: "QUICKER",
      gapped: "The journey was ____ we expected.",
      answers: ["quicker than"],
      model: "quicker than",
      explanation: "'Took less time than' means it was 'quicker than' expected."
    },
    {
      original: "As the day went on, it got hotter and hotter.",
      keyword: "INCREASINGLY",
      gapped: "As the day went on, it became ____.",
      answers: ["increasingly hot"],
      model: "increasingly hot",
      explanation: "'Hotter and hotter' can be paraphrased as 'increasingly hot'."
    },
    {
      original: "Nobody in the office types as quickly as Ines.",
      keyword: "FASTER",
      gapped: "Ines types ____ else in the office.",
      answers: ["faster than anyone", "faster than everyone"],
      model: "faster than anyone",
      explanation: "'Nobody ... as quickly as X' means X is 'faster than anyone else'."
    },
    {
      original: "This bakery's bread is far better than the supermarket's.",
      keyword: "NEARLY",
      gapped: "The supermarket's bread is not ____ good as this bakery's.",
      answers: ["nearly as"],
      model: "nearly as",
      explanation: "'Far better than' reverses to 'not nearly as good as'."
    },
    {
      original: "Lena is a better dancer than I am.",
      keyword: "WELL",
      gapped: "I can't dance as ____.",
      answers: ["well as Lena"],
      model: "well as Lena",
      explanation: "The adjective 'better' becomes the adverb 'well' in 'as well as'."
    },
    {
      original: "This is easily the worst pizza I've ever eaten.",
      keyword: "NEVER",
      gapped: "I have ____ a worse pizza than this.",
      answers: ["never eaten"],
      model: "never eaten",
      explanation: "A superlative with 'ever' becomes 'never' + comparative + 'than'."
    },
    {
      original: "Petrol prices are slightly lower than last month.",
      keyword: "LITTLE",
      gapped: "Petrol prices are a ____ they were last month.",
      answers: ["little lower than"],
      model: "little lower than",
      explanation: "'Slightly' can be paraphrased as 'a little' before a comparative."
    },
    // ===== too / enough / so / such =====
    {
      original: "The box was too heavy for one person to lift.",
      keyword: "NOT",
      gapped: "The box was ____ enough for one person to lift.",
      answers: ["not light"],
      model: "not light",
      explanation: "'Too heavy' is rephrased with the opposite adjective: 'not light enough'."
    },
    {
      original: "The lecture hall isn't big enough to seat everyone.",
      keyword: "TOO",
      gapped: "The lecture hall is ____ to seat everyone.",
      answers: ["too small"],
      model: "too small",
      explanation: "'Not big enough' equals 'too small'."
    },
    {
      original: "It was such a boring documentary that I fell asleep.",
      keyword: "SO",
      gapped: "The documentary was ____ I fell asleep.",
      answers: ["so boring that", "so boring"],
      model: "so boring that",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' before a result clause."
    },
    {
      original: "The path was so narrow that the truck couldn't pass.",
      keyword: "SUCH",
      gapped: "It was ____ path that the truck couldn't pass.",
      answers: ["such a narrow"],
      model: "such a narrow",
      explanation: "'So + adjective' becomes 'such a + adjective + noun'."
    },
    {
      original: "Ivan is too inexperienced to lead the expedition.",
      keyword: "ENOUGH",
      gapped: "Ivan is not experienced ____ the expedition.",
      answers: ["enough to lead"],
      model: "enough to lead",
      explanation: "'Too inexperienced' is rephrased as 'not experienced enough to'."
    },
    {
      original: "The instructions were so confusing that nobody understood them.",
      keyword: "TOO",
      gapped: "The instructions were ____ anyone to understand.",
      answers: ["too confusing for"],
      model: "too confusing for",
      explanation: "'So ... that nobody' is rephrased as 'too ... for anyone to'."
    },
    {
      original: "We arrived too late to catch the ferry.",
      keyword: "EARLY",
      gapped: "We didn't arrive ____ catch the ferry.",
      answers: ["early enough to"],
      model: "early enough to",
      explanation: "'Too late' equals 'not early enough'."
    },
    {
      original: "There isn't enough space in the car for the bikes.",
      keyword: "LITTLE",
      gapped: "There is ____ space in the car for the bikes.",
      answers: ["too little"],
      model: "too little",
      explanation: "'Not enough' with an uncountable noun becomes 'too little'."
    },
    {
      original: "The play was so successful that they extended its run.",
      keyword: "SUCH",
      gapped: "It was ____ that they extended its run.",
      answers: ["such a successful play"],
      model: "such a successful play",
      explanation: "'So successful' becomes 'such a successful play' when the noun is included."
    },
    {
      original: "The sauce is so spicy that the kids won't eat it.",
      keyword: "FOR",
      gapped: "The sauce is too spicy ____ eat.",
      answers: ["for the kids to"],
      model: "for the kids to",
      explanation: "'So ... that X won't' is rephrased as 'too ... for X to'."
    },
    // ===== Phrasal verbs =====
    {
      original: "The company rejected my application without explanation.",
      keyword: "TURNED",
      gapped: "My application was ____ the company without explanation.",
      answers: ["turned down by"],
      model: "turned down by",
      explanation: "'Turn down' means to reject; here it is used in the passive."
    },
    {
      original: "Nita finally stopped smoking last spring.",
      keyword: "GAVE",
      gapped: "Nita finally ____ last spring.",
      answers: ["gave up smoking"],
      model: "gave up smoking",
      explanation: "'Give up' + gerund means to stop a habit."
    },
    {
      original: "The wedding has been postponed until September.",
      keyword: "OFF",
      gapped: "The wedding has been ____ September.",
      answers: ["put off until", "put off till"],
      model: "put off until",
      explanation: "'Put off' is a phrasal verb meaning to postpone."
    },
    {
      original: "Scientists can't explain what caused the signal.",
      keyword: "ACCOUNT",
      gapped: "Scientists cannot ____ what caused the signal.",
      answers: ["account for"],
      model: "account for",
      explanation: "'Account for' means to explain the cause of something."
    },
    {
      original: "Zara invented that story about the ghost.",
      keyword: "MADE",
      gapped: "Zara ____ story about the ghost.",
      answers: ["made up that", "made up the"],
      model: "made up that",
      explanation: "'Make up' means to invent a story or excuse."
    },
    {
      original: "The negotiations failed because neither side would compromise.",
      keyword: "FELL",
      gapped: "The negotiations ____ because neither side would compromise.",
      answers: ["fell through"],
      model: "fell through",
      explanation: "'Fall through' means a plan or deal fails to happen."
    },
    {
      original: "I'll return the ladder as soon as I've finished.",
      keyword: "GIVE",
      gapped: "I'll ____ as soon as I've finished.",
      answers: ["give the ladder back", "give back the ladder"],
      model: "give the ladder back",
      explanation: "'Give back' means to return something to its owner."
    },
    {
      original: "The fire completely destroyed the warehouse.",
      keyword: "BURNT",
      gapped: "The warehouse was ____ in the fire.",
      answers: ["completely burnt down", "burnt down completely"],
      model: "completely burnt down",
      explanation: "'Burn down' means to destroy a building by fire; here it is passive."
    },
    {
      original: "You should stop delaying and book the flights.",
      keyword: "PUTTING",
      gapped: "You should stop ____ booking the flights.",
      answers: ["putting off"],
      model: "putting off",
      explanation: "'Put off' + gerund means to delay doing something."
    },
    {
      original: "Greg was raised by his grandparents in the countryside.",
      keyword: "GREW",
      gapped: "Greg ____ his grandparents in the countryside.",
      answers: ["grew up with"],
      model: "grew up with",
      explanation: "'Grow up' describes spending your childhood somewhere or with someone."
    },
    {
      original: "How did the burglars enter the building?",
      keyword: "GET",
      gapped: "How did the burglars ____ the building?",
      answers: ["get into"],
      model: "get into",
      explanation: "'Get into' means to enter, often with difficulty or illegally."
    },
    {
      original: "I'm sure you'll recover from your disappointment soon.",
      keyword: "OVER",
      gapped: "I'm sure you'll ____ disappointment soon.",
      answers: ["get over your"],
      model: "get over your",
      explanation: "'Get over' means to recover from an illness or an unpleasant experience."
    },
    // ===== Tenses / since-for =====
    {
      original: "Hana started her own business six years ago.",
      keyword: "RUNNING",
      gapped: "Hana has ____ business for six years.",
      answers: ["been running her own", "been running her"],
      model: "been running her own",
      explanation: "'Started X ago' becomes present perfect continuous with 'for' + period."
    },
    {
      original: "The last time it snowed here was in 2019.",
      keyword: "SNOWED",
      gapped: "It has not ____ 2019.",
      answers: ["snowed here since"],
      model: "snowed here since",
      explanation: "'The last time was in X' becomes present perfect negative + 'since'."
    },
    {
      original: "This is my first visit to a recording studio.",
      keyword: "BEEN",
      gapped: "I have never ____ recording studio before.",
      answers: ["been to a", "been in a"],
      model: "been to a",
      explanation: "'My first visit' is rephrased as 'have never been to ... before'."
    },
    {
      original: "We moved into this flat eight months ago.",
      keyword: "LIVED",
      gapped: "We have ____ flat for eight months.",
      answers: ["lived in this"],
      model: "lived in this",
      explanation: "A past action with 'ago' becomes present perfect with 'for' + duration."
    },
    {
      original: "When did Ola join the choir?",
      keyword: "LONG",
      gapped: "How ____ Ola been in the choir?",
      answers: ["long has"],
      model: "long has",
      explanation: "'When did X join?' can be asked as 'How long has X been in...?'"
    },
    {
      original: "Frank stopped eating meat two years ago.",
      keyword: "EATEN",
      gapped: "Frank has not ____ two years.",
      answers: ["eaten meat for"],
      model: "eaten meat for",
      explanation: "'Stopped doing X ago' becomes present perfect negative with 'for'."
    },
    {
      original: "There used to be a bakery on this corner, but it closed.",
      keyword: "ANY",
      gapped: "There is not a bakery on this corner ____.",
      answers: ["any more", "any longer"],
      model: "any more",
      explanation: "'Used to be ... but closed' means it is not there 'any more'."
    },
    {
      original: "Milo doesn't play chess with his dad any more.",
      keyword: "USED",
      gapped: "Milo ____ chess with his dad.",
      answers: ["used to play"],
      model: "used to play",
      explanation: "'Used to' describes a past habit that no longer happens."
    },
    {
      original: "Ivan isn't afraid of flying now, though he was as a child.",
      keyword: "USED",
      gapped: "Ivan ____ afraid of flying when he was a child.",
      answers: ["used to be"],
      model: "used to be",
      explanation: "'Used to be' describes a past state that is no longer true."
    },
    {
      original: "By the time we reached the stadium, the match had started.",
      keyword: "ALREADY",
      gapped: "The match had ____ time we reached the stadium.",
      answers: ["already started by the"],
      model: "already started by the",
      explanation: "Past perfect with 'already' shows the match began before our arrival."
    },
    // ===== Deduction modals =====
    {
      original: "I'm certain that Leila enjoyed the trip — look at her photos.",
      keyword: "MUST",
      gapped: "Leila ____ the trip — look at her photos.",
      answers: ["must have enjoyed"],
      model: "must have enjoyed",
      explanation: "'Must have' + past participle expresses certainty about the past."
    },
    {
      original: "It's impossible that Owen took your bag; he wasn't even there.",
      keyword: "CANNOT",
      gapped: "Owen ____ your bag; he wasn't even there.",
      answers: ["cannot have taken"],
      model: "cannot have taken",
      explanation: "'Cannot have' + past participle expresses certainty that something did NOT happen."
    },
    {
      original: "Perhaps Dina forgot about the rehearsal.",
      keyword: "MAY",
      gapped: "Dina ____ about the rehearsal.",
      answers: ["may have forgotten"],
      model: "may have forgotten",
      explanation: "'May have' + past participle expresses a possibility about the past."
    },
    {
      original: "I'm sure that isn't Petra at the door — she's in Rome.",
      keyword: "BE",
      gapped: "That can't ____ the door — she's in Rome.",
      answers: ["be Petra at"],
      model: "be Petra at",
      explanation: "'Can't be' expresses certainty that something is not true now."
    },
    {
      original: "Maybe the parcel is still at the depot.",
      keyword: "MIGHT",
      gapped: "The parcel ____ be at the depot.",
      answers: ["might still"],
      model: "might still",
      explanation: "'Might' expresses present possibility, equivalent to 'maybe'."
    },
    {
      original: "It wasn't necessary for us to queue, because we had e-tickets.",
      keyword: "NEED",
      gapped: "We ____ queued, because we had e-tickets.",
      answers: ["need not have"],
      model: "need not have",
      explanation: "'Need not have' + past participle means we did something that wasn't necessary."
    },
    {
      original: "I'm sure Vlad didn't get my message, or he would have replied.",
      keyword: "HAVE",
      gapped: "Vlad can't ____ my message, or he would have replied.",
      answers: ["have received", "have got"],
      model: "have received",
      explanation: "'Can't have' + past participle expresses certainty that something did not happen."
    },
    {
      original: "It's obligatory to wear a seatbelt in the back seats too.",
      keyword: "MUST",
      gapped: "Passengers ____ a seatbelt in the back seats too.",
      answers: ["must wear"],
      model: "must wear",
      explanation: "'Must' expresses obligation imposed by rules."
    },
    // ===== Gerund / infinitive =====
    {
      original: "Ravi doesn't mind working late on Fridays.",
      keyword: "OBJECT",
      gapped: "Ravi does not ____ late on Fridays.",
      answers: ["object to working"],
      model: "object to working",
      explanation: "'Object to' is followed by a gerund, like 'mind'."
    },
    {
      original: "It's not worth repairing this old printer.",
      keyword: "POINT",
      gapped: "There is no ____ this old printer.",
      answers: ["point in repairing", "point repairing"],
      model: "point in repairing",
      explanation: "'There is no point (in)' + gerund means something is not worth doing."
    },
    {
      original: "Selma can't wait to see the northern lights.",
      keyword: "FORWARD",
      gapped: "Selma is looking ____ the northern lights.",
      answers: ["forward to seeing"],
      model: "forward to seeing",
      explanation: "'Look forward to' is followed by a gerund, not the infinitive."
    },
    {
      original: "Jon finds it very hard to apologise.",
      keyword: "DIFFICULTY",
      gapped: "Jon has great ____.",
      answers: ["difficulty in apologising", "difficulty apologising"],
      model: "difficulty in apologising",
      explanation: "'Have difficulty (in)' + gerund means to find something hard to do."
    },
    {
      original: "We managed to reach the summit before dark.",
      keyword: "SUCCEEDED",
      gapped: "We ____ the summit before dark.",
      answers: ["succeeded in reaching"],
      model: "succeeded in reaching",
      explanation: "'Succeed in' + gerund is equivalent to 'manage to' + infinitive."
    },
    {
      original: "The security guard stopped us from entering backstage.",
      keyword: "PREVENTED",
      gapped: "We were ____ entering backstage by the security guard.",
      answers: ["prevented from"],
      model: "prevented from",
      explanation: "'Prevent someone from' + gerund; here the pattern is used in the passive."
    },
    {
      original: "I'd rather you didn't borrow my headphones.",
      keyword: "NOT",
      gapped: "I would prefer you ____ my headphones.",
      answers: ["not to borrow"],
      model: "not to borrow",
      explanation: "'Would prefer someone not to do' matches 'would rather someone didn't'."
    },
    {
      original: "Lara is thinking about becoming a vet.",
      keyword: "CONSIDERING",
      gapped: "Lara is ____ a vet.",
      answers: ["considering becoming"],
      model: "considering becoming",
      explanation: "'Consider' is followed directly by a gerund."
    },
    {
      original: "Carrying cash is unnecessary at this festival.",
      keyword: "NO",
      gapped: "There is ____ carry cash at this festival.",
      answers: ["no need to"],
      model: "no need to",
      explanation: "'There is no need to' + infinitive means something is unnecessary."
    },
    {
      original: "Please avoid using your phone during the film.",
      keyword: "REFRAIN",
      gapped: "Please ____ your phone during the film.",
      answers: ["refrain from using"],
      model: "refrain from using",
      explanation: "'Refrain from' + gerund is a formal way to say 'avoid doing'."
    },
    // ===== Contrast / purpose links =====
    {
      original: "Although he apologised twice, Mara wouldn't forgive him.",
      keyword: "SPITE",
      gapped: "In ____ twice, Mara wouldn't forgive him.",
      answers: ["spite of apologising", "spite of his apologising"],
      model: "spite of apologising",
      explanation: "'In spite of' is followed by a noun or gerund, not a clause."
    },
    {
      original: "The trail was steep; nevertheless, the children reached the top.",
      keyword: "EVEN",
      gapped: "The children reached the top ____ trail was steep.",
      answers: ["even though the"],
      model: "even though the",
      explanation: "'Even though' introduces a contrast clause, like 'nevertheless' between sentences."
    },
    {
      original: "Rosa left work early because she wanted to catch the express train.",
      keyword: "SO",
      gapped: "Rosa left work early ____ catch the express train.",
      answers: ["so as to"],
      model: "so as to",
      explanation: "'So as to' + infinitive expresses purpose."
    },
    {
      original: "Write the number down so that you don't forget it.",
      keyword: "CASE",
      gapped: "Write the number down ____ forget it.",
      answers: ["in case you"],
      model: "in case you",
      explanation: "'In case' introduces a precaution against a possible event."
    },
    {
      original: "I turned off my phone because I didn't want to be disturbed.",
      keyword: "ORDER",
      gapped: "I turned off my phone in ____ be disturbed.",
      answers: ["order not to"],
      model: "order not to",
      explanation: "Negative purpose is expressed with 'in order not to' + infinitive."
    },
    {
      original: "Despite the traffic, we got to the ceremony on time.",
      keyword: "THOUGH",
      gapped: "We got to the ceremony on time even ____ heavy.",
      answers: ["though the traffic was"],
      model: "though the traffic was",
      explanation: "'Despite' + noun becomes 'even though' + full clause."
    },
    {
      original: "Nina wore gloves so that she wouldn't leave fingerprints.",
      keyword: "AVOID",
      gapped: "Nina wore gloves to ____ fingerprints.",
      answers: ["avoid leaving"],
      model: "avoid leaving",
      explanation: "'So that she wouldn't' is rephrased as 'to avoid' + gerund."
    },
    {
      original: "The restaurant was full; however, they found us a table.",
      keyword: "FACT",
      gapped: "They found us a table despite the ____ restaurant was full.",
      answers: ["fact that the"],
      model: "fact that the",
      explanation: "'Despite the fact that' allows a full clause after 'despite'."
    },
    {
      original: "Sales fell in spite of the advertising campaign.",
      keyword: "ALTHOUGH",
      gapped: "Sales fell ____ an advertising campaign.",
      answers: ["although there was"],
      model: "although there was",
      explanation: "'In spite of' + noun becomes 'although' + clause."
    },
    {
      original: "I'll lend you my notes on condition that you photocopy them today.",
      keyword: "LONG",
      gapped: "You can have my notes as ____ photocopy them today.",
      answers: ["long as you"],
      model: "long as you",
      explanation: "'As long as' states a condition, like 'on condition that'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
