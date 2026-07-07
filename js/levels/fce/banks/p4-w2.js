/* FCE Prep extra bank: part4 wave 2 */
(function () {
  var BANK = [
    /* ---------- Passives ---------- */
    {
      original: "They are building a new hospital near the station.",
      keyword: "BUILT",
      gapped: "A new hospital ____ near the station.",
      answers: ["is being built"],
      model: "is being built",
      explanation: "The present continuous active becomes the present continuous passive: is/are being + past participle."
    },
    {
      original: "Someone has eaten all the biscuits.",
      keyword: "HAVE",
      gapped: "All the biscuits ____ eaten.",
      answers: ["have been"],
      model: "have been",
      explanation: "The present perfect passive is formed with have/has been + past participle."
    },
    {
      original: "Shakespeare wrote this play in 1601.",
      keyword: "BY",
      gapped: "This play was written ____ in 1601.",
      answers: ["by Shakespeare"],
      model: "by Shakespeare",
      explanation: "In a passive sentence, the agent (the doer of the action) is introduced with 'by'."
    },
    {
      original: "The council will open the new library in May.",
      keyword: "OPENED",
      gapped: "The new library ____ by the council in May.",
      answers: ["will be opened"],
      model: "will be opened",
      explanation: "The future passive is formed with will be + past participle."
    },
    {
      original: "You can't take dogs into the museum.",
      keyword: "MUST",
      gapped: "Dogs ____ into the museum.",
      answers: ["must not be taken"],
      model: "must not be taken",
      explanation: "A prohibition can be expressed in the passive with must not be + past participle."
    },
    {
      original: "They were showing the match on a big screen when we arrived.",
      keyword: "SHOWN",
      gapped: "The match ____ on a big screen when we arrived.",
      answers: ["was being shown"],
      model: "was being shown",
      explanation: "The past continuous passive uses was/were being + past participle."
    },
    {
      original: "Someone had already booked the tickets before I called.",
      keyword: "BEEN",
      gapped: "The tickets ____ booked before I called.",
      answers: ["had already been"],
      model: "had already been",
      explanation: "The past perfect passive is formed with had been + past participle; 'already' goes before 'been'."
    },
    {
      original: "They deliver fresh bread to the shop every morning.",
      keyword: "IS",
      gapped: "Fresh bread ____ to the shop every morning.",
      answers: ["is delivered"],
      model: "is delivered",
      explanation: "A routine action with an unknown agent becomes the present simple passive: is + past participle."
    },
    {
      original: "The storm destroyed several boats in the harbour.",
      keyword: "WERE",
      gapped: "Several boats in the harbour ____ the storm.",
      answers: ["were destroyed by", "were destroyed in"],
      model: "were destroyed by",
      explanation: "The past simple passive is were + past participle, with the agent introduced by 'by'."
    },
    {
      original: "Someone will meet you at the airport.",
      keyword: "MET",
      gapped: "You ____ at the airport.",
      answers: ["will be met"],
      model: "will be met",
      explanation: "When the agent is unknown or unimportant, use the future passive: will be + past participle."
    },
    {
      original: "They should have finished the repairs by Friday.",
      keyword: "SHOULD",
      gapped: "The repairs ____ finished by Friday.",
      answers: ["should have been"],
      model: "should have been",
      explanation: "A modal perfect in the passive uses modal + have been + past participle."
    },
    /* ---------- Causatives ---------- */
    {
      original: "I must ask someone to shorten these trousers.",
      keyword: "GET",
      gapped: "I must ____ shortened.",
      answers: ["get these trousers"],
      model: "get these trousers",
      explanation: "The causative 'get something done' means to arrange for someone else to do it."
    },
    {
      original: "A hairdresser cut Emma's hair yesterday.",
      keyword: "GOT",
      gapped: "Emma ____ cut yesterday.",
      answers: ["got her hair"],
      model: "got her hair",
      explanation: "The causative 'got her hair cut' shows Emma arranged for someone to cut it."
    },
    {
      original: "Someone is going to repair the roof for us next week.",
      keyword: "HAVE",
      gapped: "We are going to ____ repaired next week.",
      answers: ["have the roof"],
      model: "have the roof",
      explanation: "The causative 'have something done' means to pay or arrange for someone to do it."
    },
    /* ---------- Reported speech ---------- */
    {
      original: "'I have never been to Japan,' said Carlos.",
      keyword: "HE",
      gapped: "Carlos said that ____ been to Japan.",
      answers: ["he had never"],
      model: "he had never",
      explanation: "In reported speech the present perfect becomes the past perfect, and the pronoun changes to 'he'."
    },
    {
      original: "'Where do you live, Anna?' asked the officer.",
      keyword: "WHERE",
      gapped: "The officer asked Anna ____.",
      answers: ["where she lived"],
      model: "where she lived",
      explanation: "In reported questions the word order is statement order and the tense shifts back."
    },
    {
      original: "'Can you open the window, please?' the teacher said to Jack.",
      keyword: "TO",
      gapped: "The teacher asked Jack ____ the window.",
      answers: ["to open"],
      model: "to open",
      explanation: "A polite request is reported with ask + object + to-infinitive."
    },
    {
      original: "'I really must leave now,' said the guest.",
      keyword: "HAD",
      gapped: "The guest said that she really ____ then.",
      answers: ["had to leave"],
      model: "had to leave",
      explanation: "In reported speech 'must' usually becomes 'had to', and 'now' becomes 'then'."
    },
    {
      original: "'We are moving to Spain next month,' my cousins told me.",
      keyword: "WERE",
      gapped: "My cousins told me that they ____ Spain the following month.",
      answers: ["were moving to"],
      model: "were moving to",
      explanation: "The present continuous shifts back to the past continuous in reported speech."
    },
    {
      original: "'Don't forget to bring your passport,' the agent told us.",
      keyword: "FORGET",
      gapped: "The agent told us not ____ bring our passports.",
      answers: ["to forget to"],
      model: "to forget to",
      explanation: "A negative instruction is reported with tell + object + not + to-infinitive."
    },
    {
      original: "'I've broken your mug. I'm really sorry,' said Ryan.",
      keyword: "FOR",
      gapped: "Ryan apologised ____ my mug.",
      answers: ["for breaking", "for having broken"],
      model: "for breaking",
      explanation: "The verb 'apologise' is followed by for + -ing form."
    },
    {
      original: "'It was me who left the door unlocked,' admitted the caretaker.",
      keyword: "ADMITTED",
      gapped: "The caretaker ____ the door unlocked.",
      answers: ["admitted leaving", "admitted having left"],
      model: "admitted leaving",
      explanation: "The reporting verb 'admit' is followed by an -ing form."
    },
    {
      original: "'Shall I carry your bags?' Dan said to the old lady.",
      keyword: "OFFERED",
      gapped: "Dan ____ the old lady's bags.",
      answers: ["offered to carry"],
      model: "offered to carry",
      explanation: "'Shall I...?' expresses an offer, which is reported with offer + to-infinitive."
    },
    {
      original: "'You must not be late again,' the manager said to Kim.",
      keyword: "TOLD",
      gapped: "The manager ____ be late again.",
      answers: ["told Kim not to"],
      model: "told Kim not to",
      explanation: "A strong instruction is reported with tell + object + (not) to-infinitive."
    },
    {
      original: "'Why don't we take the train instead?' said Priya.",
      keyword: "TAKING",
      gapped: "Priya suggested ____ instead.",
      answers: ["taking the train"],
      model: "taking the train",
      explanation: "The verb 'suggest' is followed by an -ing form when reporting a proposal."
    },
    {
      original: "'I'll help you with your project if you like,' said Marc.",
      keyword: "HELP",
      gapped: "Marc offered ____ me with my project.",
      answers: ["to help"],
      model: "to help",
      explanation: "'I'll do it if you like' is an offer, reported with offer + to-infinitive."
    },
    {
      original: "'What time does the museum close?' Tom asked.",
      keyword: "WHAT",
      gapped: "Tom asked ____ museum closed.",
      answers: ["what time the"],
      model: "what time the",
      explanation: "Reported questions use statement word order without the auxiliary 'does'."
    },
    {
      original: "'Have you finished the report yet?' my boss asked me.",
      keyword: "IF",
      gapped: "My boss asked me ____ finished the report yet.",
      answers: ["if I had"],
      model: "if I had",
      explanation: "Yes/no questions are reported with if/whether, and the present perfect shifts to the past perfect."
    },
    {
      original: "'You really must visit the old town,' the receptionist said to us.",
      keyword: "RECOMMENDED",
      gapped: "The receptionist ____ the old town.",
      answers: ["recommended visiting", "recommended that we visit"],
      model: "recommended visiting",
      explanation: "The verb 'recommend' can be followed by an -ing form or a that-clause."
    },
    /* ---------- Impersonal reporting ---------- */
    {
      original: "People say that this castle is haunted.",
      keyword: "SAID",
      gapped: "This castle ____ be haunted.",
      answers: ["is said to"],
      model: "is said to",
      explanation: "The impersonal passive 'is said to be' reports a general belief."
    },
    {
      original: "Experts believe that the painting is worth millions.",
      keyword: "BELIEVED",
      gapped: "The painting ____ be worth millions.",
      answers: ["is believed to"],
      model: "is believed to",
      explanation: "The impersonal passive 'is believed to' reports what experts think."
    },
    /* ---------- Conditionals ---------- */
    {
      original: "I didn't take a map, so we got lost.",
      keyword: "TAKEN",
      gapped: "If I ____ a map, we wouldn't have got lost.",
      answers: ["had taken"],
      model: "had taken",
      explanation: "The third conditional (if + past perfect) describes an unreal past situation."
    },
    {
      original: "You should leave now, or you'll miss the last train.",
      keyword: "UNLESS",
      gapped: "You'll miss the last train ____ now.",
      answers: ["unless you leave"],
      model: "unless you leave",
      explanation: "'Unless' means 'if... not', so it replaces 'or' plus the warning."
    },
    {
      original: "I don't have a car, so I can't drive you to the airport.",
      keyword: "WOULD",
      gapped: "If I had a car, I ____ to the airport.",
      answers: ["would drive you"],
      model: "would drive you",
      explanation: "The second conditional (if + past simple, would + infinitive) describes an unreal present situation."
    },
    {
      original: "The bus was late, so I missed the interview.",
      keyword: "HAVE",
      gapped: "If the bus had been on time, I would not ____ the interview.",
      answers: ["have missed"],
      model: "have missed",
      explanation: "The third conditional result clause uses would (not) have + past participle."
    },
    {
      original: "I can't buy the tickets because I don't get paid until Friday.",
      keyword: "COULD",
      gapped: "If I got paid before Friday, I ____ the tickets.",
      answers: ["could buy"],
      model: "could buy",
      explanation: "In the second conditional, 'could' expresses ability in an imagined situation."
    },
    {
      original: "You'll get a discount if you show your student card.",
      keyword: "PROVIDED",
      gapped: "You'll get a discount ____ show your student card.",
      answers: ["provided that you", "provided you"],
      model: "provided that you",
      explanation: "'Provided (that)' means 'on condition that' and replaces 'if' here."
    },
    {
      original: "We didn't go sailing because the wind was too strong.",
      keyword: "HAD",
      gapped: "We would have gone sailing if the wind ____ so strong.",
      answers: ["had not been"],
      model: "had not been",
      explanation: "The third conditional if-clause uses the past perfect: had not been."
    },
    /* ---------- Wish / regret ---------- */
    {
      original: "I regret not studying harder at school.",
      keyword: "WISH",
      gapped: "I ____ studied harder at school.",
      answers: ["wish I had"],
      model: "wish I had",
      explanation: "Regret about the past is expressed with wish + past perfect."
    },
    {
      original: "It's a shame we don't live closer to the beach.",
      keyword: "LIVED",
      gapped: "I wish we ____ to the beach.",
      answers: ["lived closer"],
      model: "lived closer",
      explanation: "A wish about a present situation uses wish + past simple."
    },
    {
      original: "I'm annoyed that my flatmate never washes the dishes.",
      keyword: "ONLY",
      gapped: "If ____ would wash the dishes sometimes!",
      answers: ["only my flatmate"],
      model: "only my flatmate",
      explanation: "'If only... would' expresses annoyance about someone's behaviour."
    },
    {
      original: "It's a pity I didn't learn to swim as a child.",
      keyword: "HAD",
      gapped: "I wish I ____ to swim as a child.",
      answers: ["had learnt", "had learned"],
      model: "had learnt",
      explanation: "Wish + past perfect expresses regret about something that did not happen in the past."
    },
    /* ---------- Comparatives / superlatives ---------- */
    {
      original: "I have never read a more exciting novel than this one.",
      keyword: "EXCITING",
      gapped: "This is the most ____ ever read.",
      answers: ["exciting novel I have"],
      model: "exciting novel I have",
      explanation: "'Never... more exciting than' is equivalent to the superlative 'the most exciting... ever'."
    },
    {
      original: "No other student in the class is as hard-working as Denise.",
      keyword: "THE",
      gapped: "Denise is ____ student in the class.",
      answers: ["the most hard-working"],
      model: "the most hard-working",
      explanation: "'No other... as... as' means the person is the superlative in the group."
    },
    {
      original: "This coffee isn't as strong as the one you made yesterday.",
      keyword: "WEAKER",
      gapped: "This coffee is ____ one you made yesterday.",
      answers: ["weaker than the"],
      model: "weaker than the",
      explanation: "'Not as strong as' can be rephrased with the opposite comparative: weaker than."
    },
    {
      original: "Trains here are becoming increasingly crowded.",
      keyword: "MORE",
      gapped: "Trains here are getting ____ crowded.",
      answers: ["more and more"],
      model: "more and more",
      explanation: "'Increasingly' is expressed with the repeated comparative 'more and more'."
    },
    {
      original: "The exam was not as difficult as I had feared.",
      keyword: "LESS",
      gapped: "The exam was ____ I had feared.",
      answers: ["less difficult than"],
      model: "less difficult than",
      explanation: "'Not as difficult as' equals 'less difficult than'."
    },
    {
      original: "Nobody in our family cooks as well as Grandma.",
      keyword: "BEST",
      gapped: "Grandma is ____ in our family.",
      answers: ["the best cook"],
      model: "the best cook",
      explanation: "'Nobody... as well as' means she is the best cook — a superlative with a noun."
    },
    {
      original: "If you leave earlier, you will arrive sooner.",
      keyword: "THE",
      gapped: "____ you leave, the sooner you will arrive.",
      answers: ["The earlier"],
      model: "The earlier",
      explanation: "The double comparative 'the earlier..., the sooner...' links two changing amounts."
    },
    {
      original: "Flying isn't nearly as tiring as driving there.",
      keyword: "MUCH",
      gapped: "Driving there is ____ tiring than flying.",
      answers: ["much more"],
      model: "much more",
      explanation: "'Not nearly as... as' is rephrased with an intensified comparative: much more tiring than."
    },
    {
      original: "My essay and yours are very similar.",
      keyword: "DIFFERENT",
      gapped: "My essay is not very ____ yours.",
      answers: ["different from", "different to"],
      model: "different from",
      explanation: "'Similar' becomes 'not very different from/to' to keep the same meaning."
    },
    {
      original: "Both hotels charge the same price for a double room.",
      keyword: "AS",
      gapped: "One hotel is just ____ the other for a double room.",
      answers: ["as expensive as"],
      model: "as expensive as",
      explanation: "'The same price' can be expressed with as + adjective + as."
    },
    /* ---------- too / enough ---------- */
    {
      original: "This tea is so hot that I can't drink it.",
      keyword: "ENOUGH",
      gapped: "This tea isn't ____ to drink.",
      answers: ["cool enough"],
      model: "cool enough",
      explanation: "'So hot that I can't' equals 'not cool enough to'; enough follows the adjective."
    },
    {
      original: "The shelf is so high that the children can't reach it.",
      keyword: "FOR",
      gapped: "The shelf is too high ____ to reach.",
      answers: ["for the children"],
      model: "for the children",
      explanation: "The pattern is too + adjective + for + person + to-infinitive."
    },
    {
      original: "We don't have enough chairs for all the guests.",
      keyword: "ARE",
      gapped: "There ____ chairs for all the guests.",
      answers: ["are not enough"],
      model: "are not enough",
      explanation: "'We don't have enough' is rephrased with 'there are not enough'."
    },
    {
      original: "The film was so frightening that the children couldn't watch it.",
      keyword: "TOO",
      gapped: "The film was ____ the children to watch.",
      answers: ["too frightening for"],
      model: "too frightening for",
      explanation: "'So... that... couldn't' becomes too + adjective + for + person + to-infinitive."
    },
    /* ---------- so / such ---------- */
    {
      original: "It was so foggy that all flights were cancelled.",
      keyword: "SUCH",
      gapped: "There was ____ that all flights were cancelled.",
      answers: ["such thick fog", "such heavy fog"],
      model: "such thick fog",
      explanation: "'So foggy' becomes 'such thick/heavy fog' because 'such' goes with a noun phrase."
    },
    {
      original: "Everyone likes Petra because she is such a friendly person.",
      keyword: "SO",
      gapped: "Everyone likes Petra because she is ____.",
      answers: ["so friendly"],
      model: "so friendly",
      explanation: "'Such a friendly person' becomes 'so friendly' because 'so' goes with an adjective alone."
    },
    /* ---------- Phrasal verbs ---------- */
    {
      original: "The concert was delayed because of a technical problem.",
      keyword: "HELD",
      gapped: "The concert was ____ a technical problem.",
      answers: ["held up by"],
      model: "held up by",
      explanation: "The phrasal verb 'hold up' means to delay; here it is passive."
    },
    {
      original: "I couldn't understand what the sign meant.",
      keyword: "OUT",
      gapped: "I couldn't work ____ sign meant.",
      answers: ["out what the"],
      model: "out what the",
      explanation: "The phrasal verb 'work out' means to understand or solve something."
    },
    {
      original: "Jamal has recovered from his flu.",
      keyword: "OVER",
      gapped: "Jamal has ____ flu.",
      answers: ["got over his", "gotten over his"],
      model: "got over his",
      explanation: "The phrasal verb 'get over' means to recover from an illness."
    },
    {
      original: "We need to invent a good excuse for missing the meeting.",
      keyword: "COME",
      gapped: "We need to ____ with a good excuse for missing the meeting.",
      answers: ["come up"],
      model: "come up",
      explanation: "The phrasal verb 'come up with' means to think of or invent something."
    },
    {
      original: "Sales of e-books have increased sharply this year.",
      keyword: "GONE",
      gapped: "Sales of e-books have ____ sharply this year.",
      answers: ["gone up"],
      model: "gone up",
      explanation: "The phrasal verb 'go up' means to increase."
    },
    {
      original: "I'm going to stop eating sugar in January.",
      keyword: "GIVE",
      gapped: "I'm going to ____ sugar in January.",
      answers: ["give up eating", "give up"],
      model: "give up eating",
      explanation: "The phrasal verb 'give up' means to stop doing something, often followed by -ing."
    },
    {
      original: "Ella and her sister have stopped speaking to each other after an argument.",
      keyword: "FALLEN",
      gapped: "Ella has ____ with her sister.",
      answers: ["fallen out"],
      model: "fallen out",
      explanation: "The phrasal verb 'fall out with someone' means to have an argument and stop being friendly."
    },
    {
      original: "The car stopped working on the motorway.",
      keyword: "BROKE",
      gapped: "The car ____ on the motorway.",
      answers: ["broke down"],
      model: "broke down",
      explanation: "The phrasal verb 'break down' means to stop working, used for vehicles and machines."
    },
    {
      original: "I met an old classmate by chance at the supermarket.",
      keyword: "INTO",
      gapped: "I ran ____ old classmate at the supermarket.",
      answers: ["into an"],
      model: "into an",
      explanation: "The phrasal verb 'run into someone' means to meet them by chance."
    },
    {
      original: "The fire crew managed to extinguish the flames quickly.",
      keyword: "PUT",
      gapped: "The fire crew managed to ____ the flames quickly.",
      answers: ["put out"],
      model: "put out",
      explanation: "The phrasal verb 'put out' means to extinguish a fire."
    },
    /* ---------- Present perfect / past ---------- */
    {
      original: "Jo began working here in 2019 and she still works here.",
      keyword: "SINCE",
      gapped: "Jo has worked here ____.",
      answers: ["since 2019"],
      model: "since 2019",
      explanation: "The present perfect with 'since' shows an action continuing from a point in the past."
    },
    {
      original: "I last ate sushi three years ago.",
      keyword: "FOR",
      gapped: "I haven't eaten sushi ____ years.",
      answers: ["for three"],
      model: "for three",
      explanation: "'Last... ago' becomes a negative present perfect with for + a period of time."
    },
    {
      original: "This is the most beautiful garden I have ever seen.",
      keyword: "NEVER",
      gapped: "I have ____ beautiful garden.",
      answers: ["never seen such a"],
      model: "never seen such a",
      explanation: "A superlative with 'ever' can be rephrased as never + such a + adjective + noun."
    },
    {
      original: "We arrived in Lisbon on Monday.",
      keyword: "BEEN",
      gapped: "We have ____ Lisbon since Monday.",
      answers: ["been in"],
      model: "been in",
      explanation: "'Arrived on Monday' becomes 'have been in... since Monday' with the present perfect."
    },
    {
      original: "It's ages since our team won a match.",
      keyword: "NOT",
      gapped: "Our team has ____ a match for ages.",
      answers: ["not won"],
      model: "not won",
      explanation: "'It's ages since' is rephrased as a negative present perfect with 'for ages'."
    },
    {
      original: "This is my first attempt at snowboarding.",
      keyword: "TRIED",
      gapped: "I have never ____ before.",
      answers: ["tried snowboarding"],
      model: "tried snowboarding",
      explanation: "'My first attempt' means I have never tried it before — present perfect with never."
    },
    /* ---------- used to ---------- */
    {
      original: "Dario was a teacher, but now he is a chef.",
      keyword: "USED",
      gapped: "Dario ____ a teacher, but now he is a chef.",
      answers: ["used to be"],
      model: "used to be",
      explanation: "'Used to' describes a past state that is no longer true."
    },
    {
      original: "Living in a big city was strange for me at first, but it isn't now.",
      keyword: "GOT",
      gapped: "I have ____ living in a big city.",
      answers: ["got used to"],
      model: "got used to",
      explanation: "'Get used to + -ing' means to become accustomed to something."
    },
    {
      original: "There was a cinema in this street years ago.",
      keyword: "BE",
      gapped: "There used ____ a cinema in this street.",
      answers: ["to be"],
      model: "to be",
      explanation: "'There used to be' describes something that existed in the past but no longer does."
    },
    /* ---------- Modals of deduction ---------- */
    {
      original: "I'm certain that Karl has forgotten our appointment.",
      keyword: "FORGOTTEN",
      gapped: "Karl must ____ our appointment.",
      answers: ["have forgotten"],
      model: "have forgotten",
      explanation: "Certainty about the past is expressed with must + have + past participle."
    },
    {
      original: "It's impossible that Dana wrote this letter — it isn't her handwriting.",
      keyword: "HAVE",
      gapped: "Dana can't ____ this letter — it isn't her handwriting.",
      answers: ["have written"],
      model: "have written",
      explanation: "'Can't have + past participle' expresses certainty that something did not happen."
    },
    {
      original: "Perhaps Sam is waiting for us at the wrong entrance.",
      keyword: "BE",
      gapped: "Sam might ____ for us at the wrong entrance.",
      answers: ["be waiting"],
      model: "be waiting",
      explanation: "'Might be + -ing' expresses a possible action happening now."
    },
    {
      original: "I'm sure this isn't Rob's coat, because it's far too small.",
      keyword: "BELONG",
      gapped: "This coat can't ____ Rob, because it's far too small.",
      answers: ["belong to"],
      model: "belong to",
      explanation: "'Can't' expresses certainty that something is not true; 'belong to' replaces the possessive."
    },
    {
      original: "It's possible that we will finish the project early.",
      keyword: "MIGHT",
      gapped: "We ____ the project early.",
      answers: ["might finish"],
      model: "might finish",
      explanation: "'Might' expresses future possibility, replacing 'it's possible that... will'."
    },
    {
      original: "Perhaps the neighbours didn't hear the alarm.",
      keyword: "MAY",
      gapped: "The neighbours ____ heard the alarm.",
      answers: ["may not have"],
      model: "may not have",
      explanation: "'May not have + past participle' expresses a possibility about the past not happening."
    },
    /* ---------- Obligation / permission ---------- */
    {
      original: "You are not obliged to attend the meeting.",
      keyword: "HAVE",
      gapped: "You do not ____ attend the meeting.",
      answers: ["have to"],
      model: "have to",
      explanation: "'Not obliged to' means the same as 'do not have to' — a lack of obligation."
    },
    {
      original: "It's forbidden to park in front of the entrance.",
      keyword: "MUST",
      gapped: "You ____ in front of the entrance.",
      answers: ["must not park"],
      model: "must not park",
      explanation: "'Forbidden' is expressed with the prohibition 'must not'."
    },
    {
      original: "It isn't necessary to book a table on weekdays.",
      keyword: "NO",
      gapped: "There is ____ book a table on weekdays.",
      answers: ["no need to"],
      model: "no need to",
      explanation: "'It isn't necessary to' equals 'there is no need to'."
    },
    {
      original: "My parents don't let me stay out after midnight.",
      keyword: "ALLOWED",
      gapped: "I am not ____ out after midnight.",
      answers: ["allowed to stay"],
      model: "allowed to stay",
      explanation: "'Don't let me' becomes the passive 'am not allowed to'."
    },
    {
      original: "We weren't allowed to enter the building without ID.",
      keyword: "LET",
      gapped: "The security staff did not ____ the building without ID.",
      answers: ["let us enter"],
      model: "let us enter",
      explanation: "'Let' takes an object and a bare infinitive: let us enter."
    },
    {
      original: "Our coach forces us to run ten laps before every session.",
      keyword: "MAKES",
      gapped: "Our coach ____ run ten laps before every session.",
      answers: ["makes us"],
      model: "makes us",
      explanation: "'Make' takes an object and a bare infinitive: makes us run."
    },
    /* ---------- Gerund / infinitive ---------- */
    {
      original: "Paula would rather not work at weekends.",
      keyword: "PREFER",
      gapped: "Paula would ____ work at weekends.",
      answers: ["prefer not to"],
      model: "prefer not to",
      explanation: "'Would rather not + infinitive' equals 'would prefer not to + infinitive'."
    },
    {
      original: "We are excited about the school trip next week.",
      keyword: "FORWARD",
      gapped: "We are looking ____ school trip next week.",
      answers: ["forward to the"],
      model: "forward to the",
      explanation: "'Look forward to' expresses excitement about a future event; 'to' is a preposition here."
    },
    {
      original: "Do you mind if I open the window?",
      keyword: "OBJECTION",
      gapped: "Do you have any ____ opening the window?",
      answers: ["objection to my", "objection to me"],
      model: "objection to my",
      explanation: "'Objection to' is followed by a possessive or object pronoun plus an -ing form."
    },
    {
      original: "The company stopped producing this model last year.",
      keyword: "NO",
      gapped: "The company ____ produces this model.",
      answers: ["no longer"],
      model: "no longer",
      explanation: "'Stopped doing something' can be expressed as 'no longer does it'."
    },
    {
      original: "Remember to lock the office door before you leave.",
      keyword: "WITHOUT",
      gapped: "You mustn't leave the office ____ the door.",
      answers: ["without locking"],
      model: "without locking",
      explanation: "The preposition 'without' is followed by an -ing form."
    },
    {
      original: "It's difficult for Marta to concentrate in noisy places.",
      keyword: "FINDS",
      gapped: "Marta ____ to concentrate in noisy places.",
      answers: ["finds it difficult", "finds it hard"],
      model: "finds it difficult",
      explanation: "'It's difficult for someone to' equals 'someone finds it difficult to'."
    },
    {
      original: "Ben is really good when it comes to solving puzzles.",
      keyword: "AT",
      gapped: "Ben is really good ____ puzzles.",
      answers: ["at solving"],
      model: "at solving",
      explanation: "'Good at' is followed by an -ing form."
    },
    {
      original: "I'm keen to try scuba diving on holiday.",
      keyword: "ON",
      gapped: "I'm keen ____ scuba diving on holiday.",
      answers: ["on trying"],
      model: "on trying",
      explanation: "'Keen on' is followed by an -ing form, whereas 'keen to' takes an infinitive."
    },
    {
      original: "Talia wears glasses so that she can read small print.",
      keyword: "ABLE",
      gapped: "Talia wears glasses to be ____ small print.",
      answers: ["able to read"],
      model: "able to read",
      explanation: "'So that she can' is rephrased with the infinitive of purpose: to be able to."
    },
    {
      original: "We whispered because we didn't want to wake the baby.",
      keyword: "AVOID",
      gapped: "We whispered to ____ the baby.",
      answers: ["avoid waking"],
      model: "avoid waking",
      explanation: "'Avoid' is followed by an -ing form; the infinitive 'to avoid' expresses purpose."
    },
    /* ---------- despite / although ---------- */
    {
      original: "Despite feeling exhausted, Zoe finished the race.",
      keyword: "THOUGH",
      gapped: "Zoe finished the race even ____ exhausted.",
      answers: ["though she felt", "though she was"],
      model: "though she felt",
      explanation: "'Despite + -ing' becomes 'even though + subject + verb'."
    },
    {
      original: "Although the tickets were expensive, the stadium was full.",
      keyword: "DESPITE",
      gapped: "____ price of the tickets, the stadium was full.",
      answers: ["Despite the high"],
      model: "Despite the high",
      explanation: "'Although + clause' becomes 'despite + noun phrase': despite the high price."
    },
    {
      original: "The team lost the final. Nevertheless, the fans celebrated all night.",
      keyword: "FACT",
      gapped: "The fans celebrated all night despite the ____ lost the final.",
      answers: ["fact that the team"],
      model: "fact that the team",
      explanation: "'Despite the fact that' allows a full clause after 'despite'."
    },
    {
      original: "He kept calm although the situation was dangerous.",
      keyword: "HOW",
      gapped: "He kept calm no matter ____ situation was.",
      answers: ["how dangerous the"],
      model: "how dangerous the",
      explanation: "'No matter how + adjective' expresses that the contrast made no difference."
    },
    /* ---------- Other structures ---------- */
    {
      original: "Peeling onions always makes me cry.",
      keyword: "WHENEVER",
      gapped: "I always cry ____ onions.",
      answers: ["whenever I peel"],
      model: "whenever I peel",
      explanation: "'Whenever' means 'every time that', keeping the habitual meaning."
    },
    {
      original: "I'll call you immediately after the meeting finishes.",
      keyword: "SOON",
      gapped: "I'll call you as ____ meeting finishes.",
      answers: ["soon as the"],
      model: "soon as the",
      explanation: "'Immediately after' equals 'as soon as' in time clauses."
    },
    {
      original: "Dan blamed me for the mistake in the report.",
      keyword: "FAULT",
      gapped: "Dan said the mistake in the report was ____.",
      answers: ["my fault"],
      model: "my fault",
      explanation: "'Blame someone for something' means saying it was that person's fault."
    },
    {
      original: "Please don't tell anyone about my plans.",
      keyword: "RATHER",
      gapped: "I would ____ tell anyone about my plans.",
      answers: ["rather you didn't", "rather you did not"],
      model: "rather you didn't",
      explanation: "'Would rather + subject + past simple' expresses a preference about someone else's action."
    },
    {
      original: "It was difficult for us to hear the announcement.",
      keyword: "HARDLY",
      gapped: "We could ____ the announcement.",
      answers: ["hardly hear"],
      model: "hardly hear",
      explanation: "'Could hardly' means it was almost impossible to do something."
    },
    {
      original: "How about going to the food market on Saturday?",
      keyword: "WE",
      gapped: "Why don't ____ the food market on Saturday?",
      answers: ["we go to"],
      model: "we go to",
      explanation: "'How about + -ing' and 'Why don't we + infinitive' both make suggestions."
    },
    {
      original: "I find it impossible to understand his handwriting.",
      keyword: "IMPOSSIBLE",
      gapped: "It is ____ me to understand his handwriting.",
      answers: ["impossible for"],
      model: "impossible for",
      explanation: "'Find it impossible to' equals 'it is impossible for someone to'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
