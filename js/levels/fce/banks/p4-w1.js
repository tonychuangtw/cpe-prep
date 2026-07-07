/* FCE Prep extra bank: part4 wave 1 */
(function () {
  var BANK = [
    /* ---------- Passives ---------- */
    {
      original: "They built this stadium in 2004.",
      keyword: "WAS",
      gapped: "This stadium ____ in 2004.",
      answers: ["was built"],
      model: "was built",
      explanation: "Past simple passive: the object of the active sentence becomes the subject, with was/were + past participle."
    },
    {
      original: "They will announce the winners next Friday.",
      keyword: "BE",
      gapped: "The winners will ____ next Friday.",
      answers: ["be announced"],
      model: "be announced",
      explanation: "Future passive: will + be + past participle when the agent is unknown or unimportant."
    },
    {
      original: "Somebody is painting our house this week.",
      keyword: "BEING",
      gapped: "Our house ____ this week.",
      answers: ["is being painted"],
      model: "is being painted",
      explanation: "Present continuous passive: is/are + being + past participle for an action in progress."
    },
    {
      original: "People have translated her books into twelve languages.",
      keyword: "BEEN",
      gapped: "Her books ____ into twelve languages.",
      answers: ["have been translated"],
      model: "have been translated",
      explanation: "Present perfect passive: have/has + been + past participle."
    },
    {
      original: "Someone should water these plants every day.",
      keyword: "WATERED",
      gapped: "These plants should ____ every day.",
      answers: ["be watered"],
      model: "be watered",
      explanation: "Modal passive: modal verb + be + past participle."
    },
    {
      original: "The police are questioning two men about the robbery.",
      keyword: "QUESTIONED",
      gapped: "Two men ____ by the police about the robbery.",
      answers: ["are being questioned"],
      model: "are being questioned",
      explanation: "Present continuous passive keeps the ongoing sense: are being + past participle."
    },
    {
      original: "Nobody has used this room for years.",
      keyword: "NOT",
      gapped: "This room has ____ used for years.",
      answers: ["not been"],
      model: "not been",
      explanation: "Negative present perfect passive: has not been + past participle replaces 'nobody has used'."
    },
    {
      original: "They were repairing the road when the accident happened.",
      keyword: "WAS",
      gapped: "The road ____ repaired when the accident happened.",
      answers: ["was being"],
      model: "was being",
      explanation: "Past continuous passive: was/were + being + past participle."
    },
    {
      original: "You must hand in the essay by Friday.",
      keyword: "HANDED",
      gapped: "The essay must ____ in by Friday.",
      answers: ["be handed"],
      model: "be handed",
      explanation: "Modal passive with a phrasal verb: must be handed in."
    },
    {
      original: "Volunteers are going to clean the beach on Saturday.",
      keyword: "CLEANED",
      gapped: "The beach is going to ____ by volunteers on Saturday.",
      answers: ["be cleaned"],
      model: "be cleaned",
      explanation: "'Going to' passive: is/are going to + be + past participle."
    },

    /* ---------- Causative have/get ---------- */
    {
      original: "A mechanic serviced Tom's car yesterday.",
      keyword: "HAD",
      gapped: "Tom ____ serviced yesterday.",
      answers: ["had his car"],
      model: "had his car",
      explanation: "Causative 'have something done' shows that somebody else did the job for Tom."
    },
    {
      original: "The dentist is checking my teeth tomorrow.",
      keyword: "HAVING",
      gapped: "I am ____ checked tomorrow.",
      answers: ["having my teeth"],
      model: "having my teeth",
      explanation: "Causative in the continuous: am having my teeth checked = someone will do it for me."
    },
    {
      original: "Someone stole Laura's purse on the bus.",
      keyword: "STOLEN",
      gapped: "Laura ____ on the bus.",
      answers: ["had her purse stolen"],
      model: "had her purse stolen",
      explanation: "'Have something stolen' describes an unpleasant event that happened to someone."
    },
    {
      original: "A photographer took our wedding photos.",
      keyword: "TAKEN",
      gapped: "We had our ____ by a photographer.",
      answers: ["wedding photos taken"],
      model: "wedding photos taken",
      explanation: "Causative structure: have + object + past participle (had our photos taken)."
    },
    {
      original: "My brother persuaded me to lend him some money.",
      keyword: "GOT",
      gapped: "My brother ____ lend him some money.",
      answers: ["got me to"],
      model: "got me to",
      explanation: "'Get somebody to do something' means to persuade them to do it."
    },

    /* ---------- Reported speech ---------- */
    {
      original: "'I will email you the details tomorrow,' Marta said to me.",
      keyword: "WOULD",
      gapped: "Marta told me she ____ the details the next day.",
      answers: ["would email me"],
      model: "would email me",
      explanation: "In reported speech, 'will' becomes 'would' and 'tomorrow' becomes 'the next day'."
    },
    {
      original: "'Don't touch the paint,' the decorator said to the children.",
      keyword: "NOT",
      gapped: "The decorator warned the children ____ the paint.",
      answers: ["not to touch"],
      model: "not to touch",
      explanation: "Reported negative commands use warn/tell + object + not + to-infinitive."
    },
    {
      original: "'Where did you park the car?' Helen asked me.",
      keyword: "HAD",
      gapped: "Helen asked me where ____ the car.",
      answers: ["I had parked"],
      model: "I had parked",
      explanation: "Reported questions use statement word order, and past simple shifts to past perfect."
    },
    {
      original: "'Did you lock the door?' my mum asked me.",
      keyword: "WHETHER",
      gapped: "My mum asked me ____ the door.",
      answers: ["whether I had locked"],
      model: "whether I had locked",
      explanation: "Reported yes/no questions use whether/if, and the tense moves back to past perfect."
    },
    {
      original: "'I'm sorry I lost your umbrella,' said Paul.",
      keyword: "APOLOGISED",
      gapped: "Paul ____ losing my umbrella.",
      answers: ["apologised for"],
      model: "apologised for",
      explanation: "The reporting verb 'apologise' is followed by for + -ing."
    },
    {
      original: "'Let's order a pizza tonight,' said Katie.",
      keyword: "SUGGESTED",
      gapped: "Katie ____ a pizza that night.",
      answers: ["suggested ordering"],
      model: "suggested ordering",
      explanation: "'Suggest' is followed by the -ing form, not the infinitive."
    },
    {
      original: "'You copied my homework, Alex,' said Rita.",
      keyword: "ACCUSED",
      gapped: "Rita ____ copying her homework.",
      answers: ["accused Alex of"],
      model: "accused Alex of",
      explanation: "'Accuse somebody of doing something' reports a criticism or accusation."
    },
    {
      original: "'I'll definitely pay you back next week,' Joe said to me.",
      keyword: "PROMISED",
      gapped: "Joe ____ me back the following week.",
      answers: ["promised to pay"],
      model: "promised to pay",
      explanation: "'Promise' is followed by a to-infinitive when reporting an offer or commitment."
    },
    {
      original: "'You should see a doctor, Lily,' said her friend.",
      keyword: "ADVISED",
      gapped: "Lily's friend ____ a doctor.",
      answers: ["advised her to see"],
      model: "advised her to see",
      explanation: "'Advise somebody to do something' reports the modal 'should'."
    },
    {
      original: "'Please don't leave the gate open,' Dad said to us.",
      keyword: "ASKED",
      gapped: "Dad ____ leave the gate open.",
      answers: ["asked us not to"],
      model: "asked us not to",
      explanation: "Reported polite requests use ask + object + (not) + to-infinitive."
    },
    {
      original: "'Remember to feed the cat, Jess,' said her mum.",
      keyword: "REMINDED",
      gapped: "Jess's mum ____ feed the cat.",
      answers: ["reminded her to"],
      model: "reminded her to",
      explanation: "'Remind somebody to do something' reports 'Remember to...'."
    },
    {
      original: "'I didn't take your keys,' said my sister.",
      keyword: "DENIED",
      gapped: "My sister ____ my keys.",
      answers: ["denied taking", "denied having taken"],
      model: "denied taking",
      explanation: "'Deny' is followed by the -ing form (or having + past participle)."
    },

    /* ---------- Conditionals ---------- */
    {
      original: "We won't have the barbecue if the weather is bad.",
      keyword: "UNLESS",
      gapped: "We will have the barbecue ____ weather is bad.",
      answers: ["unless the"],
      model: "unless the",
      explanation: "'Unless' means 'if... not', so the main clause becomes positive."
    },
    {
      original: "I didn't buy the boots because they were so expensive.",
      keyword: "HAVE",
      gapped: "If the boots had been cheaper, I would ____ them.",
      answers: ["have bought"],
      model: "have bought",
      explanation: "Third conditional: if + past perfect, would have + past participle, for an unreal past."
    },
    {
      original: "Sara can't join us because she has to work.",
      keyword: "DID",
      gapped: "If Sara ____ have to work, she could join us.",
      answers: ["did not"],
      model: "did not",
      explanation: "Second conditional: an unreal present situation uses if + past simple."
    },
    {
      original: "Wear a helmet, or you might hurt yourself.",
      keyword: "IF",
      gapped: "You might hurt yourself ____ wear a helmet.",
      answers: ["if you don't", "if you do not"],
      model: "if you don't",
      explanation: "'Imperative + or' can be rewritten as a negative if-clause."
    },
    {
      original: "You can use my printer, but you must buy your own paper.",
      keyword: "LONG",
      gapped: "You can use my printer as ____ buy your own paper.",
      answers: ["long as you"],
      model: "long as you",
      explanation: "'As long as' introduces a condition, like 'provided that'."
    },
    {
      original: "I didn't know it was your birthday, so I didn't get you a present.",
      keyword: "KNOWN",
      gapped: "If I had ____ your birthday, I would have got you a present.",
      answers: ["known it was"],
      model: "known it was",
      explanation: "Third conditional expresses regret about a past situation that cannot be changed."
    },
    {
      original: "The only reason we missed the bus was that we overslept.",
      keyword: "WOULD",
      gapped: "If we hadn't overslept, we ____ missed the bus.",
      answers: ["would not have"],
      model: "would not have",
      explanation: "Third conditional: would not have + past participle for an unreal past result."
    },
    {
      original: "You're allowed to camp here provided that you take your rubbish home.",
      keyword: "AS",
      gapped: "You're allowed to camp here ____ you take your rubbish home.",
      answers: ["as long as"],
      model: "as long as",
      explanation: "'Provided that' and 'as long as' both introduce conditions."
    },
    {
      original: "Without your help, I would have failed the exam.",
      keyword: "NOT",
      gapped: "If you had ____ me, I would have failed the exam.",
      answers: ["not helped"],
      model: "not helped",
      explanation: "'Without + noun' can be rewritten as a negative third-conditional if-clause."
    },

    /* ---------- Wish ---------- */
    {
      original: "I'm sorry I didn't invite Marco to the wedding.",
      keyword: "WISH",
      gapped: "I ____ invited Marco to the wedding.",
      answers: ["wish I had"],
      model: "wish I had",
      explanation: "'Wish + past perfect' expresses regret about the past."
    },
    {
      original: "It's a pity I can't play the guitar.",
      keyword: "COULD",
      gapped: "I wish I ____ the guitar.",
      answers: ["could play"],
      model: "could play",
      explanation: "'Wish + could' expresses a desire for an ability we don't have now."
    },
    {
      original: "I regret selling my old comic collection.",
      keyword: "SOLD",
      gapped: "I wish I had ____ my old comic collection.",
      answers: ["not sold"],
      model: "not sold",
      explanation: "Regretting a past action: wish + past perfect in the negative."
    },
    {
      original: "My neighbour plays loud music every night, which annoys me.",
      keyword: "WOULD",
      gapped: "I wish my neighbour ____ loud music every night.",
      answers: ["would not play"],
      model: "would not play",
      explanation: "'Wish + would' complains about somebody's annoying habit."
    },
    {
      original: "Unfortunately, we don't have a garden.",
      keyword: "HAD",
      gapped: "I wish ____ a garden.",
      answers: ["we had"],
      model: "we had",
      explanation: "'Wish + past simple' expresses a desire for a different present situation."
    },

    /* ---------- Comparatives / superlatives ---------- */
    {
      original: "I have never watched such a thrilling match.",
      keyword: "MOST",
      gapped: "This is the ____ match I have ever watched.",
      answers: ["most thrilling"],
      model: "most thrilling",
      explanation: "'Never + such' can be rewritten as a superlative with 'ever'."
    },
    {
      original: "This is the cheapest laptop in the shop.",
      keyword: "THAN",
      gapped: "No other laptop in the shop is cheaper ____ one.",
      answers: ["than this"],
      model: "than this",
      explanation: "A superlative can be expressed as 'no other... is + comparative + than'."
    },
    {
      original: "The test was easier than I had expected.",
      keyword: "AS",
      gapped: "The test was not ____ I had expected.",
      answers: ["as difficult as", "as hard as"],
      model: "as difficult as",
      explanation: "'Easier than expected' equals 'not as difficult as expected'."
    },
    {
      original: "I have never stayed in such a luxurious hotel before.",
      keyword: "EVER",
      gapped: "It is the most luxurious hotel I have ____ in.",
      answers: ["ever stayed"],
      model: "ever stayed",
      explanation: "Superlative + present perfect with 'ever' replaces 'never... before'."
    },
    {
      original: "Nobody in the team swims faster than Elena.",
      keyword: "SWIMMER",
      gapped: "Elena is the ____ the team.",
      answers: ["fastest swimmer in"],
      model: "fastest swimmer in",
      explanation: "'Nobody... faster than X' means X is the fastest swimmer."
    },
    {
      original: "My new flat is smaller than my old one.",
      keyword: "BIG",
      gapped: "My new flat is not ____ my old one.",
      answers: ["as big as"],
      model: "as big as",
      explanation: "'Smaller than' can be rewritten as 'not as big as'."
    },
    {
      original: "Ben is not as tall as his sister.",
      keyword: "TALLER",
      gapped: "Ben's sister is ____ he is.",
      answers: ["taller than"],
      model: "taller than",
      explanation: "'Not as tall as' means the other person is taller."
    },

    /* ---------- too / enough / so / such ---------- */
    {
      original: "The suitcase was so heavy that I couldn't carry it.",
      keyword: "TOO",
      gapped: "The suitcase was ____ me to carry.",
      answers: ["too heavy for"],
      model: "too heavy for",
      explanation: "'So + adjective + that + can't' becomes 'too + adjective + for + object + to-infinitive'."
    },
    {
      original: "Milo is too young to drive a car.",
      keyword: "ENOUGH",
      gapped: "Milo is not old ____ a car.",
      answers: ["enough to drive"],
      model: "enough to drive",
      explanation: "'Too young' equals 'not old enough'; 'enough' follows the adjective."
    },
    {
      original: "The lecture was so dull that several students fell asleep.",
      keyword: "SUCH",
      gapped: "It was ____ dull lecture that several students fell asleep.",
      answers: ["such a"],
      model: "such a",
      explanation: "'So + adjective' becomes 'such + a + adjective + noun'."
    },
    {
      original: "It was such a hot afternoon that we went for a swim.",
      keyword: "SO",
      gapped: "The afternoon was ____ we went for a swim.",
      answers: ["so hot that"],
      model: "so hot that",
      explanation: "'Such + a + adjective + noun' becomes 'so + adjective + that'."
    },
    {
      original: "The music was so loud that we couldn't hear each other.",
      keyword: "TOO",
      gapped: "The music was ____ us to hear each other.",
      answers: ["too loud for"],
      model: "too loud for",
      explanation: "'So... that + couldn't' is rewritten with 'too... for + object + to-infinitive'."
    },
    {
      original: "The room isn't big enough for all of us.",
      keyword: "SMALL",
      gapped: "The room is ____ for all of us.",
      answers: ["too small"],
      model: "too small",
      explanation: "'Not big enough' equals 'too small' with the opposite adjective."
    },
    {
      original: "It was such an expensive restaurant that we only ordered starters.",
      keyword: "THAT",
      gapped: "The restaurant was so expensive ____ only ordered starters.",
      answers: ["that we"],
      model: "that we",
      explanation: "'Such + noun' is transformed into 'so + adjective + that' clause."
    },

    /* ---------- Phrasal verbs ---------- */
    {
      original: "The meeting has been postponed until next month.",
      keyword: "PUT",
      gapped: "The meeting has been ____ next month.",
      answers: ["put off until", "put off till"],
      model: "put off until",
      explanation: "'Put off' is a phrasal verb meaning 'postpone'."
    },
    {
      original: "I don't know how you tolerate such a noisy flatmate.",
      keyword: "UP",
      gapped: "I don't know how you put ____ such a noisy flatmate.",
      answers: ["up with"],
      model: "up with",
      explanation: "'Put up with' means 'tolerate'."
    },
    {
      original: "The plane departed on time despite the snow.",
      keyword: "TOOK",
      gapped: "The plane ____ time despite the snow.",
      answers: ["took off on"],
      model: "took off on",
      explanation: "'Take off' means 'depart' when talking about planes."
    },
    {
      original: "Firefighters are trying to discover what caused the explosion.",
      keyword: "FIND",
      gapped: "Firefighters are trying to ____ caused the explosion.",
      answers: ["find out what"],
      model: "find out what",
      explanation: "'Find out' means 'discover' information."
    },
    {
      original: "Nadia rejected the job offer because of the long hours.",
      keyword: "TURNED",
      gapped: "Nadia ____ the job offer because of the long hours.",
      answers: ["turned down"],
      model: "turned down",
      explanation: "'Turn down' means 'reject' or 'refuse'."
    },
    {
      original: "Omar continued running although his legs ached.",
      keyword: "CARRIED",
      gapped: "Omar ____ running although his legs ached.",
      answers: ["carried on"],
      model: "carried on",
      explanation: "'Carry on' means 'continue' and is followed by the -ing form."
    },
    {
      original: "The festival was cancelled because of the flooding.",
      keyword: "CALLED",
      gapped: "The festival was ____ because of the flooding.",
      answers: ["called off"],
      model: "called off",
      explanation: "'Call off' means 'cancel'."
    },
    {
      original: "My aunt raised me after my parents moved abroad.",
      keyword: "BROUGHT",
      gapped: "My aunt ____ up after my parents moved abroad.",
      answers: ["brought me"],
      model: "brought me",
      explanation: "'Bring somebody up' means 'raise a child'."
    },
    {
      original: "We have no milk left.",
      keyword: "RUN",
      gapped: "We have ____ of milk.",
      answers: ["run out"],
      model: "run out",
      explanation: "'Run out of something' means to have none left."
    },
    {
      original: "Tara has a good relationship with her colleagues.",
      keyword: "GETS",
      gapped: "Tara ____ with her colleagues.",
      answers: ["gets on well"],
      model: "gets on well",
      explanation: "'Get on well with somebody' means to have a good relationship."
    },
    {
      original: "Who is taking care of your dog while you're away?",
      keyword: "LOOKING",
      gapped: "Who is ____ your dog while you're away?",
      answers: ["looking after"],
      model: "looking after",
      explanation: "'Look after' means 'take care of'."
    },
    {
      original: "Marcus resembles his father in many ways.",
      keyword: "TAKES",
      gapped: "Marcus ____ his father in many ways.",
      answers: ["takes after"],
      model: "takes after",
      explanation: "'Take after' means to resemble an older family member."
    },

    /* ---------- Present perfect / time expressions ---------- */
    {
      original: "I started working at this school three years ago.",
      keyword: "FOR",
      gapped: "I have worked at this school ____ years.",
      answers: ["for three"],
      model: "for three",
      explanation: "'Started... ago' becomes present perfect + for + period of time."
    },
    {
      original: "It's two months since I last went to the gym.",
      keyword: "BEEN",
      gapped: "I have not ____ the gym for two months.",
      answers: ["been to"],
      model: "been to",
      explanation: "'It's + period + since' becomes negative present perfect + for."
    },
    {
      original: "This is the first time I have visited Portugal.",
      keyword: "NEVER",
      gapped: "I have ____ Portugal before.",
      answers: ["never visited", "never been to"],
      model: "never visited",
      explanation: "'The first time' equals 'never... before' with the present perfect."
    },
    {
      original: "When did you buy that guitar?",
      keyword: "LONG",
      gapped: "How ____ you had that guitar?",
      answers: ["long have"],
      model: "long have",
      explanation: "'When did you buy' becomes 'how long have you had' with the present perfect."
    },
    {
      original: "The last time I saw Nadia was in June.",
      keyword: "SINCE",
      gapped: "I have not seen Nadia ____.",
      answers: ["since June"],
      model: "since June",
      explanation: "'The last time... was' becomes negative present perfect + since + point in time."
    },
    {
      original: "Owen moved to Berlin two years ago and still lives there.",
      keyword: "LIVING",
      gapped: "Owen has ____ Berlin for two years.",
      answers: ["been living in"],
      model: "been living in",
      explanation: "Present perfect continuous shows an action that started in the past and continues now."
    },
    {
      original: "My grandad hasn't flown for twenty years.",
      keyword: "TIME",
      gapped: "The last ____ flew was twenty years ago.",
      answers: ["time my grandad"],
      model: "time my grandad",
      explanation: "Negative present perfect + for becomes 'the last time + past simple + ago'."
    },

    /* ---------- used to / be used to ---------- */
    {
      original: "Priya doesn't ride her bike to work any more.",
      keyword: "USED",
      gapped: "Priya ____ ride her bike to work.",
      answers: ["used to"],
      model: "used to",
      explanation: "'Used to' describes a past habit that no longer happens."
    },
    {
      original: "Getting up early is no longer difficult for me.",
      keyword: "USED",
      gapped: "I have ____ up early.",
      answers: ["got used to getting"],
      model: "got used to getting",
      explanation: "'Get used to + -ing' means to become accustomed to something."
    },
    {
      original: "Sam finds it strange to work from home.",
      keyword: "NOT",
      gapped: "Sam is ____ working from home.",
      answers: ["not used to"],
      model: "not used to",
      explanation: "'Be used to + -ing' means to be accustomed to something; the negative shows it still feels strange."
    },

    /* ---------- Modals of deduction / obligation ---------- */
    {
      original: "I'm sure Ella isn't at the office, because the lights are off.",
      keyword: "CANNOT",
      gapped: "Ella ____ at the office, because the lights are off.",
      answers: ["cannot be"],
      model: "cannot be",
      explanation: "'Cannot be' expresses certainty that something is not true."
    },
    {
      original: "Perhaps Leo missed his connection in Paris.",
      keyword: "MIGHT",
      gapped: "Leo ____ his connection in Paris.",
      answers: ["might have missed"],
      model: "might have missed",
      explanation: "'Might have + past participle' expresses possibility about the past."
    },
    {
      original: "It wasn't necessary for you to bring a gift.",
      keyword: "NEED",
      gapped: "You ____ brought a gift.",
      answers: ["need not have"],
      model: "need not have",
      explanation: "'Need not have + past participle' means something was done but wasn't necessary."
    },
    {
      original: "I'm sure the students worked very hard on this project.",
      keyword: "MUST",
      gapped: "The students ____ very hard on this project.",
      answers: ["must have worked"],
      model: "must have worked",
      explanation: "'Must have + past participle' expresses a confident deduction about the past."
    },
    {
      original: "Talking is forbidden during the exam.",
      keyword: "PERMITTED",
      gapped: "You are not ____ talk during the exam.",
      answers: ["permitted to"],
      model: "permitted to",
      explanation: "'Forbidden' equals 'not permitted/allowed to do something'."
    },

    /* ---------- prefer / would rather ---------- */
    {
      original: "I'd prefer to stay at home tonight rather than go out.",
      keyword: "RATHER",
      gapped: "I would ____ home tonight than go out.",
      answers: ["rather stay at"],
      model: "rather stay at",
      explanation: "'Would rather + bare infinitive... than' expresses preference."
    },
    {
      original: "Diego prefers walking to cycling.",
      keyword: "THAN",
      gapped: "Diego would rather walk ____.",
      answers: ["than cycle"],
      model: "than cycle",
      explanation: "'Prefer X to Y' becomes 'would rather X than Y' with bare infinitives."
    },
    {
      original: "I'd prefer you not to smoke in the kitchen.",
      keyword: "SMOKE",
      gapped: "I would rather you ____ in the kitchen.",
      answers: ["did not smoke"],
      model: "did not smoke",
      explanation: "'Would rather + person' takes the past simple to talk about the present."
    },
    {
      original: "Anya likes tea more than coffee.",
      keyword: "PREFERS",
      gapped: "Anya ____ coffee.",
      answers: ["prefers tea to"],
      model: "prefers tea to",
      explanation: "'Prefer X to Y' uses the preposition 'to', not 'than'."
    },

    /* ---------- Gerund / infinitive & expressions ---------- */
    {
      original: "Remembering all these passwords is difficult for me.",
      keyword: "DIFFICULTY",
      gapped: "I have ____ all these passwords.",
      answers: ["difficulty remembering", "difficulty in remembering"],
      model: "difficulty remembering",
      explanation: "'Have difficulty (in) + -ing' means something is hard for you to do."
    },
    {
      original: "It's not worth arguing with the referee.",
      keyword: "POINT",
      gapped: "There is no ____ with the referee.",
      answers: ["point in arguing", "point arguing"],
      model: "point in arguing",
      explanation: "'There is no point (in) + -ing' equals 'it's not worth + -ing'."
    },
    {
      original: "I look forward to your visit next month.",
      keyword: "SEEING",
      gapped: "I look forward to ____ next month.",
      answers: ["seeing you"],
      model: "seeing you",
      explanation: "'Look forward to' is followed by the -ing form because 'to' is a preposition here."
    },
    {
      original: "Swimming is forbidden in this lake.",
      keyword: "ALLOWED",
      gapped: "You are ____ swim in this lake.",
      answers: ["not allowed to"],
      model: "not allowed to",
      explanation: "'Forbidden' equals 'not allowed to + infinitive'."
    },
    {
      original: "Maya finally managed to fix the printer.",
      keyword: "SUCCEEDED",
      gapped: "Maya finally ____ fixing the printer.",
      answers: ["succeeded in"],
      model: "succeeded in",
      explanation: "'Manage to do' equals 'succeed in doing'; 'succeed' takes in + -ing."
    },
    {
      original: "It took me two hours to write the report.",
      keyword: "SPENT",
      gapped: "I ____ writing the report.",
      answers: ["spent two hours"],
      model: "spent two hours",
      explanation: "'It took me + time + to do' equals 'I spent + time + doing'."
    },
    {
      original: "The heavy snow prevented us from leaving the village.",
      keyword: "BECAUSE",
      gapped: "We couldn't leave the village ____ heavy snow.",
      answers: ["because of the"],
      model: "because of the",
      explanation: "'Prevent from' can be rephrased with 'couldn't... because of + noun'."
    },
    {
      original: "I'm thinking of joining a photography club.",
      keyword: "CONSIDERING",
      gapped: "I am ____ a photography club.",
      answers: ["considering joining"],
      model: "considering joining",
      explanation: "'Consider' is followed by the -ing form, like 'think of'."
    },
    {
      original: "Filling in this form took ages.",
      keyword: "AGES",
      gapped: "It took ____ fill in this form.",
      answers: ["ages to"],
      model: "ages to",
      explanation: "'Doing X took ages' equals 'It took ages to do X'."
    },

    /* ---------- Contrast / connectors ---------- */
    {
      original: "Although it was snowing, the match went ahead.",
      keyword: "SPITE",
      gapped: "The match went ahead in ____ snow.",
      answers: ["spite of the"],
      model: "spite of the",
      explanation: "'Although + clause' becomes 'in spite of + noun'."
    },
    {
      original: "Despite her cold, Ana sang beautifully.",
      keyword: "EVEN",
      gapped: "Ana sang beautifully ____ she had a cold.",
      answers: ["even though"],
      model: "even though",
      explanation: "'Despite + noun' becomes 'even though + clause'."
    },
    {
      original: "He passed the exam although he hadn't revised.",
      keyword: "DESPITE",
      gapped: "He passed the exam ____ revised.",
      answers: ["despite not having"],
      model: "despite not having",
      explanation: "'Although + negative clause' becomes 'despite not having + past participle'."
    },
    {
      original: "The bus was late; however, we arrived on time.",
      keyword: "ALTHOUGH",
      gapped: "____ was late, we arrived on time.",
      answers: ["although the bus"],
      model: "although the bus",
      explanation: "'However' between sentences can become 'although' joining two clauses."
    },
    {
      original: "She took an umbrella because it might rain.",
      keyword: "CASE",
      gapped: "She took an umbrella in ____ rained.",
      answers: ["case it"],
      model: "case it",
      explanation: "'In case' expresses a precaution against something that might happen."
    },
    {
      original: "He trained hard because he wanted to win the marathon.",
      keyword: "ORDER",
      gapped: "He trained hard in ____ win the marathon.",
      answers: ["order to"],
      model: "order to",
      explanation: "'In order to + infinitive' expresses purpose."
    },

    /* ---------- Miscellaneous verb patterns ---------- */
    {
      original: "'Congratulations on passing your driving test, Kim!' said Ravi.",
      keyword: "ON",
      gapped: "Ravi congratulated Kim ____ her driving test.",
      answers: ["on passing"],
      model: "on passing",
      explanation: "'Congratulate somebody on + -ing' reports congratulations."
    },
    {
      original: "The security guard didn't let us take photos.",
      keyword: "WERE",
      gapped: "We ____ allowed to take photos.",
      answers: ["were not"],
      model: "were not",
      explanation: "'Not let somebody do' equals 'somebody was not allowed to do'."
    },
    {
      original: "'Why don't you try the new cafe?' said Beth.",
      keyword: "TRYING",
      gapped: "Beth suggested ____ new cafe.",
      answers: ["trying the"],
      model: "trying the",
      explanation: "'Why don't you...?' can be reported with suggest + -ing."
    },
    {
      original: "Sonia said she would definitely not wear that dress.",
      keyword: "REFUSED",
      gapped: "Sonia ____ that dress.",
      answers: ["refused to wear"],
      model: "refused to wear",
      explanation: "'Refuse' is followed by a to-infinitive and reports a firm 'no'."
    },
    {
      original: "'Watch out for pickpockets in the market,' our guide said.",
      keyword: "WARNED",
      gapped: "Our guide ____ about pickpockets in the market.",
      answers: ["warned us"],
      model: "warned us",
      explanation: "'Warn somebody about something' reports a warning."
    },
    {
      original: "It was wrong of you to shout at your brother.",
      keyword: "SHOULD",
      gapped: "You ____ shouted at your brother.",
      answers: ["should not have"],
      model: "should not have",
      explanation: "'Should not have + past participle' criticises a past action."
    },
    {
      original: "Maybe we'll rent bikes when we get to the island.",
      keyword: "MAY",
      gapped: "We ____ bikes when we get to the island.",
      answers: ["may rent"],
      model: "may rent",
      explanation: "'Maybe we will' equals 'we may + bare infinitive'."
    },
    {
      original: "Booking in advance is a good idea.",
      keyword: "BETTER",
      gapped: "You had ____ in advance.",
      answers: ["better book"],
      model: "better book",
      explanation: "'Had better + bare infinitive' gives strong advice."
    },
    {
      original: "The teacher made the students tidy the classroom after the lesson.",
      keyword: "MADE",
      gapped: "The students were ____ tidy the classroom after the lesson.",
      answers: ["made to"],
      model: "made to",
      explanation: "In the passive, 'make somebody do' becomes 'be made to do' with the to-infinitive."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
