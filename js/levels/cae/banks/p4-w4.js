/* CAE Prep extra bank: part4 wave 4 */
(function () {
  var BANK = [
    {
      original: "The train had barely left the station when the engine failed.",
      keyword: "BARELY",
      gapped: "____ the station when the engine failed.",
      answers: ["Barely had the train left"],
      model: "Barely had the train left",
      explanation: "Negative adverb 'barely' at the start of a sentence triggers inversion: barely had + subject + past participle."
    },
    {
      original: "You should never leave the engine running unattended, not even briefly.",
      keyword: "NO",
      gapped: "At ____ the engine running unattended.",
      answers: ["no point should you leave", "no time should you leave"],
      model: "no point should you leave",
      explanation: "'At no point/time' is a negative opener, so the auxiliary 'should' inverts with the subject."
    },
    {
      original: "Immediately after he opened the email, he regretted clicking the link.",
      keyword: "SOONER",
      gapped: "No ____ the email than he regretted clicking the link.",
      answers: ["sooner had he opened"],
      model: "sooner had he opened",
      explanation: "'No sooner had + subject + past participle... than' expresses one event following another immediately."
    },
    {
      original: "She fully appreciated her mentor's advice only years later.",
      keyword: "ONLY",
      gapped: "____ she fully appreciate her mentor's advice.",
      answers: ["Only years later did"],
      model: "Only years later did",
      explanation: "When 'only + time expression' begins the sentence, the auxiliary 'did' comes before the subject."
    },
    {
      original: "Snow rarely falls in this part of the coast.",
      keyword: "RARELY",
      gapped: "____ in this part of the coast.",
      answers: ["Rarely does snow fall"],
      model: "Rarely does snow fall",
      explanation: "Fronting 'rarely' requires inversion with the auxiliary 'does'."
    },
    {
      original: "This decision does not in any way reflect the views of the staff.",
      keyword: "WAY",
      gapped: "In ____ reflect the views of the staff.",
      answers: ["no way does this decision"],
      model: "no way does this decision",
      explanation: "'In no way' is an emphatic negative opener followed by inverted word order."
    },
    {
      original: "If the alarm sounds, evacuate the building immediately.",
      keyword: "SHOULD",
      gapped: "____ sound, evacuate the building immediately.",
      answers: ["Should the alarm"],
      model: "Should the alarm",
      explanation: "Inverted conditional: 'Should the alarm sound' replaces 'If the alarm should sound'."
    },
    {
      original: "If the jury had seen this evidence, the verdict would have been different.",
      keyword: "HAD",
      gapped: "____ this evidence, the verdict would have been different.",
      answers: ["Had the jury seen"],
      model: "Had the jury seen",
      explanation: "Third conditional with inversion: 'Had + subject + past participle' replaces 'If ... had'."
    },
    {
      original: "If the president were to resign, markets would panic.",
      keyword: "WERE",
      gapped: "____ to resign, markets would panic.",
      answers: ["Were the president"],
      model: "Were the president",
      explanation: "Formal inverted conditional: 'Were + subject + to-infinitive' replaces 'If ... were to'."
    },
    {
      original: "Staff must never accept gifts from suppliers, whatever the situation.",
      keyword: "UNDER",
      gapped: "____ are staff to accept gifts from suppliers.",
      answers: ["Under no circumstances"],
      model: "Under no circumstances",
      explanation: "'Under no circumstances' opens the sentence and forces inversion ('are staff to accept')."
    },
    {
      original: "The passengers were told the reason for the delay only when they landed.",
      keyword: "UNTIL",
      gapped: "Not ____ were the passengers told the reason for the delay.",
      answers: ["until they landed", "until they had landed"],
      model: "until they landed",
      explanation: "'Not until + clause' at the start causes inversion in the main clause."
    },
    {
      original: "She only understood the poem's meaning after reading it aloud.",
      keyword: "DID",
      gapped: "Only after reading it aloud ____ the poem's meaning.",
      answers: ["did she understand"],
      model: "did she understand",
      explanation: "After a fronted 'only after' phrase, the auxiliary 'did' precedes the subject."
    },
    {
      original: "The queue was so long that many fans gave up and went home.",
      keyword: "SUCH",
      gapped: "____ the queue that many fans gave up and went home.",
      answers: ["Such was the length of"],
      model: "Such was the length of",
      explanation: "'Such was the length of...' is an inverted emphatic structure equivalent to 'The queue was so long'."
    },
    {
      original: "The fog was so dense that all flights were grounded.",
      keyword: "SO",
      gapped: "____ that all flights were grounded.",
      answers: ["So dense was the fog"],
      model: "So dense was the fog",
      explanation: "Fronting 'so + adjective' inverts subject and verb: 'So dense was the fog'."
    },
    {
      original: "The paint had hardly dried when the children put their hands on it.",
      keyword: "HARDLY",
      gapped: "____ when the children put their hands on it.",
      answers: ["Hardly had the paint dried"],
      model: "Hardly had the paint dried",
      explanation: "'Hardly had + subject + past participle ... when' describes two almost simultaneous past events."
    },
    {
      original: "The soundtrack made the film memorable.",
      keyword: "WHAT",
      gapped: "____ its soundtrack.",
      answers: ["What made the film memorable was"],
      model: "What made the film memorable was",
      explanation: "A what-cleft ('What made... was...') shifts the emphasis onto the soundtrack."
    },
    {
      original: "Marta first suggested the fundraising idea, not Diego.",
      keyword: "IT",
      gapped: "____ first suggested the fundraising idea, not Diego.",
      answers: ["It was Marta who", "It was Marta that"],
      model: "It was Marta who",
      explanation: "An it-cleft ('It was Marta who...') highlights the person responsible."
    },
    {
      original: "The security flaw was only patched last month.",
      keyword: "THAT",
      gapped: "It was only last month ____ patched.",
      answers: ["that the security flaw was"],
      model: "that the security flaw was",
      explanation: "It-cleft focusing on the time: 'It was only last month that...'."
    },
    {
      original: "The play closed early because ticket sales were poor.",
      keyword: "REASON",
      gapped: "The ____ early was that ticket sales were poor.",
      answers: ["reason why the play closed", "reason the play closed", "reason that the play closed"],
      model: "reason why the play closed",
      explanation: "'The reason (why) X happened was that...' rephrases a because-clause."
    },
    {
      original: "I value her honesty above everything else.",
      keyword: "THING",
      gapped: "The ____ about her is her honesty.",
      answers: ["thing I value most", "thing that I value most"],
      model: "thing I value most",
      explanation: "'The thing I value most' is a cleft-like structure emphasising honesty."
    },
    {
      original: "He grew up in this very street.",
      keyword: "WHERE",
      gapped: "This street is ____ up.",
      answers: ["where he grew"],
      model: "where he grew",
      explanation: "A where-cleft ('This street is where he grew up') emphasises the place."
    },
    {
      original: "She just needs a quiet room to work in, nothing else.",
      keyword: "ALL",
      gapped: "____ a quiet room to work in.",
      answers: ["All she needs is"],
      model: "All she needs is",
      explanation: "'All + subject + verb + is' expresses 'the only thing needed'."
    },
    {
      original: "People say the recipe dates back to medieval times.",
      keyword: "SAID",
      gapped: "The recipe ____ back to medieval times.",
      answers: ["is said to date"],
      model: "is said to date",
      explanation: "Impersonal passive: 'is said to + infinitive' reports a general belief."
    },
    {
      original: "People think the burglars entered through the roof.",
      keyword: "THOUGHT",
      gapped: "The burglars ____ entered through the roof.",
      answers: ["are thought to have"],
      model: "are thought to have",
      explanation: "The perfect infinitive ('to have entered') refers to a past action in the passive reporting structure."
    },
    {
      original: "People believe the wreck contains gold coins.",
      keyword: "BELIEVED",
      gapped: "The wreck ____ gold coins.",
      answers: ["is believed to contain"],
      model: "is believed to contain",
      explanation: "'Is believed to + infinitive' turns an active reporting sentence into an impersonal passive."
    },
    {
      original: "People expect the drought will continue into the autumn.",
      keyword: "EXPECTED",
      gapped: "The drought ____ into the autumn.",
      answers: ["is expected to continue"],
      model: "is expected to continue",
      explanation: "Passive reporting with a future sense: 'is expected to continue'."
    },
    {
      original: "Reports say the fire started in the basement.",
      keyword: "REPORTED",
      gapped: "The fire ____ started in the basement.",
      answers: ["is reported to have"],
      model: "is reported to have",
      explanation: "The perfect infinitive after 'is reported' refers to an earlier event."
    },
    {
      original: "People know that the artist painted over several earlier canvases.",
      keyword: "KNOWN",
      gapped: "The artist ____ painted over several earlier canvases.",
      answers: ["is known to have"],
      model: "is known to have",
      explanation: "'Is known to have + past participle' reports an established fact about the past."
    },
    {
      original: "They are restoring the frescoes this summer.",
      keyword: "BEING",
      gapped: "The frescoes ____ this summer.",
      answers: ["are being restored"],
      model: "are being restored",
      explanation: "Present continuous passive: 'are being restored'."
    },
    {
      original: "Someone will have to inform the shareholders before Friday.",
      keyword: "HAVE",
      gapped: "The shareholders will ____ informed before Friday.",
      answers: ["have to be"],
      model: "have to be",
      explanation: "Passive obligation: 'will have to be informed' removes the vague subject 'someone'."
    },
    {
      original: "Nobody has signed the agreement yet.",
      keyword: "BEEN",
      gapped: "The agreement ____ yet.",
      answers: ["has not been signed", "hasn't been signed"],
      model: "has not been signed",
      explanation: "Present perfect passive: 'has not been signed'."
    },
    {
      original: "Visitors may not bring food into the gallery.",
      keyword: "PERMITTED",
      gapped: "Visitors are ____ food into the gallery.",
      answers: ["not permitted to bring"],
      model: "not permitted to bring",
      explanation: "'Be (not) permitted to + infinitive' is a formal passive way of expressing prohibition."
    },
    {
      original: "'Go on, enter the competition — you'll do brilliantly,' Mia said to me.",
      keyword: "PERSUADED",
      gapped: "Mia ____ the competition.",
      answers: ["persuaded me to enter"],
      model: "persuaded me to enter",
      explanation: "Encouraging someone successfully is reported with 'persuade + object + to-infinitive'."
    },
    {
      original: "'If you touch that wire, you'll get a shock,' the electrician told him.",
      keyword: "WARNED",
      gapped: "The electrician ____ the wire.",
      answers: ["warned him not to touch", "warned him against touching"],
      model: "warned him not to touch",
      explanation: "A warning is reported with 'warn + object + not to-infinitive' or 'warn against + -ing'."
    },
    {
      original: "'Let's split the bill between us,' said Ravi.",
      keyword: "SUGGESTED",
      gapped: "Ravi ____ the bill between them.",
      answers: ["suggested that they split", "suggested that they should split", "suggested they split"],
      model: "suggested that they split",
      explanation: "'Suggest' is followed by a that-clause (with or without 'should'), never by an object + infinitive."
    },
    {
      original: "'Yes, I overslept and missed the briefing,' said the officer.",
      keyword: "ADMITTED",
      gapped: "The officer ____ and missed the briefing.",
      answers: ["admitted that he had overslept", "admitted having overslept", "admitted he had overslept"],
      model: "admitted that he had overslept",
      explanation: "'Admit' takes a that-clause with past perfect or 'admit having + past participle'."
    },
    {
      original: "'You copied my design, Petra,' said the architect.",
      keyword: "ACCUSED",
      gapped: "The architect ____ his design.",
      answers: ["accused Petra of copying", "accused Petra of having copied"],
      model: "accused Petra of copying",
      explanation: "The pattern is 'accuse somebody of + -ing'."
    },
    {
      original: "'I'm terribly sorry I kept you waiting,' the consultant said to us.",
      keyword: "APOLOGISED",
      gapped: "The consultant ____ us waiting.",
      answers: ["apologised for keeping", "apologised for having kept", "apologised to us for keeping"],
      model: "apologised for keeping",
      explanation: "'Apologise for + -ing' reports an apology."
    },
    {
      original: "'I won't breathe a word to anyone,' Clara told me.",
      keyword: "PROMISED",
      gapped: "Clara ____ a word to anyone.",
      answers: ["promised not to breathe", "promised me not to breathe", "promised she would not breathe"],
      model: "promised not to breathe",
      explanation: "'Promise (not) to + infinitive' reports a commitment."
    },
    {
      original: "'Where on earth did I leave my passport?' thought Greta.",
      keyword: "WONDERED",
      gapped: "Greta ____ left her passport.",
      answers: ["wondered where she had"],
      model: "wondered where she had",
      explanation: "Reported questions use statement word order and a shift to the past perfect."
    },
    {
      original: "'Could you possibly lower the music?' our neighbour said to us.",
      keyword: "ASKED",
      gapped: "Our neighbour ____ the music.",
      answers: ["asked us to lower"],
      model: "asked us to lower",
      explanation: "A polite request is reported with 'ask + object + to-infinitive'."
    },
    {
      original: "It's a pity my flat doesn't get more natural light.",
      keyword: "WISH",
      gapped: "I ____ more natural light.",
      answers: ["wish my flat got", "wish my flat had"],
      model: "wish my flat got",
      explanation: "'Wish + past simple' expresses regret about a present situation."
    },
    {
      original: "I regret not listening to the forecast before setting off.",
      keyword: "ONLY",
      gapped: "If ____ to the forecast before setting off.",
      answers: ["only I had listened", "only I'd listened"],
      model: "only I had listened",
      explanation: "'If only + past perfect' expresses regret about the past."
    },
    {
      original: "I'd prefer it if you didn't smoke on the balcony.",
      keyword: "RATHER",
      gapped: "I would ____ on the balcony.",
      answers: ["rather you did not smoke", "rather you didn't smoke"],
      model: "rather you did not smoke",
      explanation: "'Would rather + subject + past simple' expresses a preference about someone else's behaviour."
    },
    {
      original: "The committee should have replaced this outdated software long ago.",
      keyword: "TIME",
      gapped: "It is high ____ this outdated software.",
      answers: ["time the committee replaced"],
      model: "time the committee replaced",
      explanation: "'It's high time + past simple' criticises a delay in doing something."
    },
    {
      original: "He regrets not patenting his invention when he had the chance.",
      keyword: "WISHES",
      gapped: "He ____ his invention when he had the chance.",
      answers: ["wishes he had patented", "wishes he'd patented"],
      model: "wishes he had patented",
      explanation: "'Wish + past perfect' expresses regret about a missed past opportunity."
    },
    {
      original: "It irritates her that the lift breaks down every other week.",
      keyword: "WOULD",
      gapped: "She wishes the lift ____ every other week.",
      answers: ["would not break down", "would stop breaking down"],
      model: "would not break down",
      explanation: "'Wish + would' complains about a recurring annoyance."
    },
    {
      original: "She describes the village as if she had lived there all her life.",
      keyword: "THOUGH",
      gapped: "She describes the village as ____ there all her life.",
      answers: ["though she had lived", "though she'd lived"],
      model: "though she had lived",
      explanation: "'As though + past perfect' signals an unreal impression about the past."
    },
    {
      original: "If she had not been injured, she would have won the final.",
      keyword: "BUT",
      gapped: "She would have won the final ____.",
      answers: ["but for her injury", "but for the injury"],
      model: "but for her injury",
      explanation: "'But for + noun' means 'if it had not been for'."
    },
    {
      original: "We ran out of petrol because I forgot to fill up.",
      keyword: "HADN'T",
      gapped: "If I ____ up, we wouldn't have run out of petrol.",
      answers: ["hadn't forgotten to fill"],
      model: "hadn't forgotten to fill",
      explanation: "Third conditional: past perfect in the if-clause describes the unreal past cause."
    },
    {
      original: "You can film the rehearsal, but only if you keep the footage private.",
      keyword: "PROVIDED",
      gapped: "You can film the rehearsal ____ the footage private.",
      answers: ["provided you keep", "provided that you keep"],
      model: "provided you keep",
      explanation: "'Provided (that)' introduces a condition, like 'only if'."
    },
    {
      original: "The bank granted the loan only because he offered his house as security.",
      keyword: "CONDITION",
      gapped: "The bank granted the loan on ____ his house as security.",
      answers: ["condition that he offered", "condition that he offer"],
      model: "condition that he offered",
      explanation: "'On condition that' expresses the strict terms of an agreement."
    },
    {
      original: "The referee will abandon the match if the floodlights are not repaired.",
      keyword: "UNLESS",
      gapped: "The referee will abandon the match ____ repaired.",
      answers: ["unless the floodlights are"],
      model: "unless the floodlights are",
      explanation: "'Unless' means 'if ... not'."
    },
    {
      original: "Renew the licence this week; if you don't, you'll pay a fine.",
      keyword: "OTHERWISE",
      gapped: "Renew the licence this week; ____ a fine.",
      answers: ["otherwise you will pay", "otherwise you'll pay"],
      model: "otherwise you will pay",
      explanation: "'Otherwise' introduces the negative consequence of not following the instruction."
    },
    {
      original: "If the original certificate is lost, this letter will serve as proof.",
      keyword: "EVENT",
      gapped: "In the ____ lost, this letter will serve as proof.",
      answers: ["event of the original certificate being", "event of the certificate being"],
      model: "event of the original certificate being",
      explanation: "'In the event of + noun/-ing' is a formal equivalent of an if-clause."
    },
    {
      original: "You may borrow the projector if you return it by Monday.",
      keyword: "LONG",
      gapped: "You may borrow the projector as ____ it by Monday.",
      answers: ["long as you return"],
      model: "long as you return",
      explanation: "'As long as' introduces a condition."
    },
    {
      original: "What would you do if the buyer withdrew the offer?",
      keyword: "SUPPOSING",
      gapped: "____ the offer, what would you do?",
      answers: ["Supposing the buyer withdrew"],
      model: "Supposing the buyer withdrew",
      explanation: "'Supposing + past simple' introduces a hypothetical situation."
    },
    {
      original: "Save the document frequently because the computer might crash.",
      keyword: "CASE",
      gapped: "Save the document frequently in ____ crashes.",
      answers: ["case the computer"],
      model: "case the computer",
      explanation: "'In case' expresses a precaution against a possible event."
    },
    {
      original: "A local firm is going to install solar panels on their roof.",
      keyword: "HAVE",
      gapped: "They are going to ____ installed on their roof.",
      answers: ["have solar panels"],
      model: "have solar panels",
      explanation: "Causative 'have + object + past participle': someone else performs the service."
    },
    {
      original: "Someone must repair this leaking tap before winter.",
      keyword: "GET",
      gapped: "We must ____ before winter.",
      answers: ["get this leaking tap repaired", "get this tap repaired"],
      model: "get this leaking tap repaired",
      explanation: "Causative 'get + object + past participle' means arranging for a job to be done."
    },
    {
      original: "A decorator wallpapered their bedroom last month.",
      keyword: "HAD",
      gapped: "They ____ last month.",
      answers: ["had their bedroom wallpapered"],
      model: "had their bedroom wallpapered",
      explanation: "Causative past: 'had + object + past participle'."
    },
    {
      original: "The storm meant the climbers had to turn back.",
      keyword: "FORCED",
      gapped: "The climbers were ____ back by the storm.",
      answers: ["forced to turn"],
      model: "forced to turn",
      explanation: "Passive 'be forced to + infinitive' expresses external compulsion."
    },
    {
      original: "I clearly recall meeting her at the book launch.",
      keyword: "REMEMBER",
      gapped: "I clearly ____ at the book launch.",
      answers: ["remember meeting her", "remember having met her"],
      model: "remember meeting her",
      explanation: "'Remember + -ing' refers to a memory of a past event."
    },
    {
      original: "She no longer bites her nails.",
      keyword: "STOPPED",
      gapped: "She ____ her nails.",
      answers: ["has stopped biting"],
      model: "has stopped biting",
      explanation: "'Stop + -ing' means giving up a habit."
    },
    {
      original: "If you take the night shift, you will have to sleep during the day.",
      keyword: "MEANS",
      gapped: "Taking the night shift ____ during the day.",
      answers: ["means having to sleep"],
      model: "means having to sleep",
      explanation: "'Mean + -ing' expresses what something involves or entails."
    },
    {
      original: "I'm sorry to say the flight has been overbooked.",
      keyword: "REGRET",
      gapped: "We ____ that the flight has been overbooked.",
      answers: ["regret to inform you", "regret to say", "regret to tell you"],
      model: "regret to inform you",
      explanation: "'Regret to + infinitive' announces bad news formally."
    },
    {
      original: "To renew the permit, you have to fill in three forms.",
      keyword: "INVOLVES",
      gapped: "Renewing the permit ____ three forms.",
      answers: ["involves filling in"],
      model: "involves filling in",
      explanation: "'Involve' is followed by the -ing form."
    },
    {
      original: "Book online so that you don't have to queue.",
      keyword: "AVOID",
      gapped: "Book online to ____ queue.",
      answers: ["avoid having to"],
      model: "avoid having to",
      explanation: "'Avoid + -ing' means escaping the necessity of doing something."
    },
    {
      original: "If you reuse that password, your account may be hacked.",
      keyword: "RISK",
      gapped: "If you reuse that password, you ____ hacked.",
      answers: ["risk having your account", "risk getting your account"],
      model: "risk having your account",
      explanation: "'Risk + having + object + past participle' describes exposing yourself to an unwanted outcome."
    },
    {
      original: "The security cordon stopped the crowd from approaching the stage.",
      keyword: "PREVENTED",
      gapped: "The crowd was ____ the stage by the security cordon.",
      answers: ["prevented from approaching"],
      model: "prevented from approaching",
      explanation: "Passive of 'prevent somebody from + -ing'."
    },
    {
      original: "Despite the darkness, she was able to find the trail again.",
      keyword: "MANAGED",
      gapped: "Despite the darkness, she ____ the trail again.",
      answers: ["managed to find"],
      model: "managed to find",
      explanation: "'Managed to' expresses ability on a specific past occasion."
    },
    {
      original: "They tried hard to keep the wedding a secret.",
      keyword: "EFFORT",
      gapped: "They made ____ the wedding a secret.",
      answers: ["every effort to keep", "an effort to keep", "a great effort to keep"],
      model: "every effort to keep",
      explanation: "'Make an/every effort to + infinitive' paraphrases 'try hard'."
    },
    {
      original: "I'm sure the intruder knew the alarm code.",
      keyword: "MUST",
      gapped: "The intruder ____ the alarm code.",
      answers: ["must have known"],
      model: "must have known",
      explanation: "'Must have + past participle' expresses confident deduction about the past."
    },
    {
      original: "It's impossible that she has already read the whole trilogy.",
      keyword: "CAN'T",
      gapped: "She ____ the whole trilogy already.",
      answers: ["can't have read"],
      model: "can't have read",
      explanation: "'Can't have + past participle' expresses certainty that something did not happen."
    },
    {
      original: "Perhaps the courier delivered the parcel to the wrong address.",
      keyword: "MIGHT",
      gapped: "The courier ____ the parcel to the wrong address.",
      answers: ["might have delivered"],
      model: "might have delivered",
      explanation: "'Might have + past participle' expresses past possibility."
    },
    {
      original: "It wasn't necessary for us to book — the restaurant was empty.",
      keyword: "NEEDN'T",
      gapped: "We ____ — the restaurant was empty.",
      answers: ["needn't have booked"],
      model: "needn't have booked",
      explanation: "'Needn't have + past participle' means something was done but was unnecessary."
    },
    {
      original: "It's possible the results were misfiled.",
      keyword: "MAY",
      gapped: "The results ____ misfiled.",
      answers: ["may have been"],
      model: "may have been",
      explanation: "'May have been + past participle' is a past passive possibility."
    },
    {
      original: "All passengers must show a valid ticket on request.",
      keyword: "OBLIGED",
      gapped: "All passengers are ____ a valid ticket on request.",
      answers: ["obliged to show"],
      model: "obliged to show",
      explanation: "'Be obliged to + infinitive' is a formal expression of obligation."
    },
    {
      original: "The medicine should have relieved the pain, but it didn't.",
      keyword: "SUPPOSED",
      gapped: "The medicine was ____ the pain, but it didn't.",
      answers: ["supposed to relieve"],
      model: "supposed to relieve",
      explanation: "'Was supposed to' describes an expectation that was not fulfilled."
    },
    {
      original: "No other candidate comes close to Ms Okafor in experience.",
      keyword: "NOWHERE",
      gapped: "The other candidates are ____ Ms Okafor.",
      answers: ["nowhere near as experienced as"],
      model: "nowhere near as experienced as",
      explanation: "'Nowhere near as ... as' emphasises a large difference."
    },
    {
      original: "The rent here is double what I paid in my old flat.",
      keyword: "TWICE",
      gapped: "The rent here is ____ I paid in my old flat.",
      answers: ["twice as much as"],
      model: "twice as much as",
      explanation: "'Twice as much as' expresses a doubled amount."
    },
    {
      original: "The new syllabus is not as demanding as the old one.",
      keyword: "LESS",
      gapped: "The new syllabus is ____ the old one.",
      answers: ["less demanding than"],
      model: "less demanding than",
      explanation: "'Not as ... as' can be rephrased with 'less ... than'."
    },
    {
      original: "His second attempt failed just like his first one.",
      keyword: "AS",
      gapped: "His second attempt was ____ his first.",
      answers: ["as unsuccessful as", "just as unsuccessful as"],
      model: "as unsuccessful as",
      explanation: "'As + adjective + as' expresses equality between the two attempts."
    },
    {
      original: "No coffee in town comes close to this one.",
      keyword: "BY",
      gapped: "This is ____ in town.",
      answers: ["by far the best coffee"],
      model: "by far the best coffee",
      explanation: "'By far' intensifies a superlative."
    },
    {
      original: "As the meeting continued, people grew more restless.",
      keyword: "LONGER",
      gapped: "The ____ , the more restless people grew.",
      answers: ["longer the meeting continued", "longer the meeting went on"],
      model: "longer the meeting continued",
      explanation: "The double comparative 'the longer..., the more...' links two parallel increases."
    },
    {
      original: "The blue model costs a little more than the grey one.",
      keyword: "MARGINALLY",
      gapped: "The blue model is ____ the grey one.",
      answers: ["marginally more expensive than"],
      model: "marginally more expensive than",
      explanation: "'Marginally' qualifies a comparative to mean 'slightly'."
    },
    {
      original: "The sequel seems dull compared with the original.",
      keyword: "COMPARISON",
      gapped: "In ____ , the sequel seems dull.",
      answers: ["comparison with the original", "comparison to the original"],
      model: "comparison with the original",
      explanation: "'In comparison with/to' rephrases 'compared with'."
    },
    {
      original: "Far more people attended the launch than we expected.",
      keyword: "TURNED",
      gapped: "Far more people ____ the launch than we expected.",
      answers: ["turned up at", "turned up for"],
      model: "turned up at",
      explanation: "'Turn up' is an informal phrasal verb meaning 'attend/appear'."
    },
    {
      original: "It took him months to fully understand the new tax rules.",
      keyword: "GRIPS",
      gapped: "It took him months to come to ____ new tax rules.",
      answers: ["grips with the"],
      model: "grips with the",
      explanation: "'Come to grips with' means to begin to understand or deal with something difficult."
    },
    {
      original: "The situation in the stadium was becoming uncontrollable.",
      keyword: "HAND",
      gapped: "The situation in the stadium was getting ____.",
      answers: ["out of hand"],
      model: "out of hand",
      explanation: "'Get out of hand' means to become impossible to control."
    },
    {
      original: "The company will pay for the whole conference.",
      keyword: "FOOT",
      gapped: "The company will ____ the whole conference.",
      answers: ["foot the bill for"],
      model: "foot the bill for",
      explanation: "'Foot the bill' is an idiom meaning to pay the cost."
    },
    {
      original: "I promise I won't mention this to my colleagues.",
      keyword: "WORD",
      gapped: "I give you my ____ this to my colleagues.",
      answers: ["word that I won't mention", "word that I will not mention", "word I won't mention"],
      model: "word that I won't mention",
      explanation: "'Give somebody your word' means to promise solemnly."
    },
    {
      original: "Sales of the magazine have declined dramatically since January.",
      keyword: "DROPPED",
      gapped: "Sales of the magazine have ____ since January.",
      answers: ["dropped off dramatically", "dropped off sharply"],
      model: "dropped off dramatically",
      explanation: "'Drop off' means to decline in number or amount."
    },
    {
      original: "The volunteers began clearing the beach at dawn.",
      keyword: "SET",
      gapped: "The volunteers ____ the beach at dawn.",
      answers: ["set about clearing"],
      model: "set about clearing",
      explanation: "'Set about + -ing' means to start a task."
    },
    {
      original: "The new manager immediately liked the young trainee.",
      keyword: "TOOK",
      gapped: "The new manager immediately ____ the young trainee.",
      answers: ["took a liking to", "took a shine to"],
      model: "took a liking to",
      explanation: "'Take a liking to somebody' means to begin to like them."
    },
    {
      original: "The alarm started ringing at three in the morning.",
      keyword: "WENT",
      gapped: "The alarm ____ three in the morning.",
      answers: ["went off at"],
      model: "went off at",
      explanation: "'Go off' means (of an alarm) to start ringing."
    },
    {
      original: "The negotiations collapsed at the final hurdle.",
      keyword: "FELL",
      gapped: "The negotiations ____ final hurdle.",
      answers: ["fell through at the"],
      model: "fell through at the",
      explanation: "'Fall through' means (of a plan or deal) to fail to be completed."
    },
    {
      original: "Fighting suddenly started in the northern district.",
      keyword: "BROKE",
      gapped: "Fighting suddenly ____ the northern district.",
      answers: ["broke out in"],
      model: "broke out in",
      explanation: "'Break out' means (of fighting, fire or disease) to start suddenly."
    },
    {
      original: "The runners abandoned the race halfway through.",
      keyword: "GAVE",
      gapped: "The runners ____ halfway through.",
      answers: ["gave up the race"],
      model: "gave up the race",
      explanation: "'Give up' means to abandon or stop doing something."
    },
    {
      original: "I can't stand his rudeness any longer.",
      keyword: "PUT",
      gapped: "I refuse to ____ his rudeness any longer.",
      answers: ["put up with"],
      model: "put up with",
      explanation: "'Put up with' means to tolerate."
    },
    {
      original: "The team's performance disappointed the supporters.",
      keyword: "LET",
      gapped: "The team's performance ____ down.",
      answers: ["let the supporters"],
      model: "let the supporters",
      explanation: "'Let somebody down' means to disappoint them."
    },
    {
      original: "I didn't fully hear the announcement.",
      keyword: "CATCH",
      gapped: "I didn't quite ____ said in the announcement.",
      answers: ["catch what was"],
      model: "catch what was",
      explanation: "'Catch' here means to hear or understand something said."
    },
    {
      original: "Wages are failing to match the rise in petrol prices.",
      keyword: "KEEP",
      gapped: "Wages are failing to ____ the rise in petrol prices.",
      answers: ["keep pace with", "keep up with"],
      model: "keep pace with",
      explanation: "'Keep pace/up with' means to move or grow at the same rate as something."
    },
    {
      original: "He stayed calm even when the engine caught fire.",
      keyword: "LOSE",
      gapped: "He did not ____ even when the engine caught fire.",
      answers: ["lose his nerve", "lose his head", "lose his cool"],
      model: "lose his nerve",
      explanation: "'Lose your nerve/head' means to panic; the negative means staying calm."
    },
    {
      original: "The burglars escaped with jewellery worth thousands.",
      keyword: "MADE",
      gapped: "The burglars ____ worth thousands.",
      answers: ["made off with jewellery"],
      model: "made off with jewellery",
      explanation: "'Make off with' means to steal something and escape."
    },
    {
      original: "They decided to emigrate quite suddenly.",
      keyword: "DECISION",
      gapped: "Their ____ quite a sudden one.",
      answers: ["decision to emigrate was"],
      model: "decision to emigrate was",
      explanation: "The verb 'decide' is nominalised as 'decision to + infinitive'."
    },
    {
      original: "The airline said sorry for losing the luggage.",
      keyword: "APOLOGY",
      gapped: "The airline issued ____ the luggage.",
      answers: ["an apology for losing"],
      model: "an apology for losing",
      explanation: "'Issue an apology for + -ing' is the noun equivalent of 'apologise for'."
    },
    {
      original: "Her spoken French has got noticeably better.",
      keyword: "IMPROVEMENT",
      gapped: "There has been a noticeable ____ spoken French.",
      answers: ["improvement in her"],
      model: "improvement in her",
      explanation: "'An improvement in something' nominalises 'get better'."
    },
    {
      original: "There aren't enough qualified nurses in rural areas.",
      keyword: "SHORTAGE",
      gapped: "There is ____ qualified nurses in rural areas.",
      answers: ["a shortage of", "a serious shortage of"],
      model: "a shortage of",
      explanation: "'A shortage of' means 'not enough of'."
    },
    {
      original: "Hardly anyone wanted to buy the old warehouse.",
      keyword: "INTEREST",
      gapped: "There was very little ____ the old warehouse.",
      answers: ["interest in buying"],
      model: "interest in buying",
      explanation: "'Interest in + -ing' expresses people's desire to do something."
    },
    {
      original: "Everyone but the goalkeeper played badly.",
      keyword: "EXCEPTION",
      gapped: "With ____ , everyone played badly.",
      answers: ["the exception of the goalkeeper"],
      model: "the exception of the goalkeeper",
      explanation: "'With the exception of' means 'except for'."
    },
    {
      original: "The head chef oversees all the menus.",
      keyword: "RESPONSIBLE",
      gapped: "The head chef is ____ the menus.",
      answers: ["responsible for all"],
      model: "responsible for all",
      explanation: "'Be responsible for' rephrases the verb 'oversee'."
    },
    {
      original: "The island relies entirely on tourism for income.",
      keyword: "DEPENDENT",
      gapped: "The island is entirely ____ for income.",
      answers: ["dependent on tourism", "dependent upon tourism"],
      model: "dependent on tourism",
      explanation: "'Dependent on' is the adjective equivalent of 'rely on'."
    },
    {
      original: "She can easily run the office on her own.",
      keyword: "CAPABLE",
      gapped: "She is perfectly ____ the office on her own.",
      answers: ["capable of running"],
      model: "capable of running",
      explanation: "'Capable of + -ing' expresses ability."
    },
    {
      original: "The council will probably reject the proposal.",
      keyword: "LIKELY",
      gapped: "The council is ____ the proposal.",
      answers: ["likely to reject"],
      model: "likely to reject",
      explanation: "'Be likely to + infinitive' expresses probability."
    },
    {
      original: "The old pier might collapse at any moment.",
      keyword: "DANGER",
      gapped: "The old pier is in ____ at any moment.",
      answers: ["danger of collapsing"],
      model: "danger of collapsing",
      explanation: "'In danger of + -ing' describes a risk of something bad happening."
    },
    {
      original: "He didn't comply with the regulations, which led to a fine.",
      keyword: "FAILURE",
      gapped: "His ____ with the regulations led to a fine.",
      answers: ["failure to comply"],
      model: "failure to comply",
      explanation: "'Failure to + infinitive' nominalises 'not doing something'."
    },
    {
      original: "Because she had signed the confidentiality clause, she said nothing to the press.",
      keyword: "HAVING",
      gapped: "____ clause, she said nothing to the press.",
      answers: ["Having signed the confidentiality"],
      model: "Having signed the confidentiality",
      explanation: "A perfect participle clause ('Having signed...') replaces a because-clause about an earlier action."
    },
    {
      original: "Because he did not wish to appear rude, he accepted a second helping.",
      keyword: "WANTING",
      gapped: "____ , he accepted a second helping.",
      answers: ["Not wanting to appear rude", "Not wanting to seem rude"],
      model: "Not wanting to appear rude",
      explanation: "A negative participle clause ('Not wanting...') expresses the reason."
    },
    {
      original: "People consider the trial results unreliable.",
      keyword: "CONSIDERED",
      gapped: "The trial results ____ be unreliable.",
      answers: ["are considered to"],
      model: "are considered to",
      explanation: "Passive reporting: 'are considered to be'."
    },
    {
      original: "Because the hikers were exhausted by the climb, they camped early.",
      keyword: "EXHAUSTED",
      gapped: "____ climb, the hikers camped early.",
      answers: ["Exhausted by the"],
      model: "Exhausted by the",
      explanation: "A past participle clause ('Exhausted by...') replaces the because-clause."
    },
    {
      original: "If her accent is anything to go by, she comes from Dublin.",
      keyword: "JUDGING",
      gapped: "____ accent, she comes from Dublin.",
      answers: ["Judging by her", "Judging from her"],
      model: "Judging by her",
      explanation: "'Judging by/from' introduces the evidence for a conclusion."
    },
    {
      original: "Considering his age, his stamina is remarkable.",
      keyword: "BEARING",
      gapped: "____ his age, his stamina is remarkable.",
      answers: ["Bearing in mind"],
      model: "Bearing in mind",
      explanation: "'Bearing in mind' means 'taking into consideration'."
    },
    {
      original: "Several ministers resigned immediately after the scandal.",
      keyword: "WAKE",
      gapped: "Several ministers resigned in ____ scandal.",
      answers: ["the wake of the"],
      model: "the wake of the",
      explanation: "'In the wake of' means 'immediately after and as a result of'."
    },
    {
      original: "The two versions differ in only one way.",
      keyword: "RESPECT",
      gapped: "The two versions differ ____ only.",
      answers: ["in one respect"],
      model: "in one respect",
      explanation: "'In one respect' means 'in one particular way'."
    },
    {
      original: "The floods damaged the crops so badly that the harvest was abandoned.",
      keyword: "EXTENT",
      gapped: "The crops were damaged to such ____ the harvest was abandoned.",
      answers: ["an extent that"],
      model: "an extent that",
      explanation: "'To such an extent that' expresses the degree of the damage."
    },
    {
      original: "The reforms will very probably be delayed.",
      keyword: "CHANCES",
      gapped: "The ____ the reforms will be delayed.",
      answers: ["chances are that"],
      model: "chances are that",
      explanation: "'The chances are (that)...' means 'it is very probable that'."
    },
    {
      original: "The rescue team could no longer see the raft.",
      keyword: "SIGHT",
      gapped: "The rescue team ____ the raft.",
      answers: ["lost sight of"],
      model: "lost sight of",
      explanation: "'Lose sight of' means to no longer be able to see something."
    },
    {
      original: "You should apologise before it's too late.",
      keyword: "BETTER",
      gapped: "You ____ before it's too late.",
      answers: ["had better apologise", "would be better to apologise"],
      model: "had better apologise",
      explanation: "'Had better + bare infinitive' gives strong advice."
    },
    {
      original: "The two countries nearly went to war last spring.",
      keyword: "BRINK",
      gapped: "The two countries were on ____ war last spring.",
      answers: ["the brink of"],
      model: "the brink of",
      explanation: "'On the brink of' means on the point of; very close to a (usually dramatic) event."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
