/* CAE Prep extra bank: part4 wave 2 */
(function () {
  var BANK = [
    {
      original: "She didn't once complain during the entire expedition.",
      keyword: "NOT",
      gapped: "____ during the entire expedition.",
      answers: ["Not once did she complain"],
      model: "Not once did she complain",
      explanation: "Fronting 'not once' for emphasis triggers inversion with the auxiliary 'did'."
    },
    {
      original: "The full extent of the damage only became clear when dawn broke.",
      keyword: "ONLY",
      gapped: "____ the full extent of the damage become clear.",
      answers: ["Only when dawn broke did"],
      model: "Only when dawn broke did",
      explanation: "When 'only when' opens the sentence, the main clause inverts: 'did the full extent... become clear'."
    },
    {
      original: "You must not open this door under any circumstances.",
      keyword: "NO",
      gapped: "Under ____ open this door.",
      answers: ["no circumstances must you", "no circumstances should you"],
      model: "no circumstances must you",
      explanation: "'Under no circumstances' at the start of a clause requires subject-auxiliary inversion."
    },
    {
      original: "The critics did not appreciate her genius until after her death.",
      keyword: "UNTIL",
      gapped: "____ did the critics appreciate her genius.",
      answers: ["Not until after her death"],
      model: "Not until after her death",
      explanation: "'Not until' fronted for emphasis forces inversion in the main clause ('did the critics appreciate')."
    },
    {
      original: "The results were so shocking that the study was repeated three times.",
      keyword: "WERE",
      gapped: "____ the results that the study was repeated three times.",
      answers: ["So shocking were"],
      model: "So shocking were",
      explanation: "Fronting 'so + adjective' causes inversion of the verb and subject: 'So shocking were the results'."
    },
    {
      original: "If the alarm had gone off, the burglary would have been prevented.",
      keyword: "HAD",
      gapped: "____ off, the burglary would have been prevented.",
      answers: ["Had the alarm gone"],
      model: "Had the alarm gone",
      explanation: "In formal style, 'if' can be dropped from third conditionals by inverting 'had': 'Had the alarm gone off'."
    },
    {
      original: "The minister resigned, and she also withdrew from politics altogether.",
      keyword: "ONLY",
      gapped: "Not ____ but she also withdrew from politics altogether.",
      answers: ["only did the minister resign"],
      model: "only did the minister resign",
      explanation: "'Not only... but also' with the negative phrase fronted requires inversion: 'Not only did the minister resign'."
    },
    {
      original: "The staff never suspected that the factory was about to close.",
      keyword: "LITTLE",
      gapped: "____ that the factory was about to close.",
      answers: ["Little did the staff suspect", "Little did the staff know"],
      model: "Little did the staff suspect",
      explanation: "'Little did + subject + verb' is an emphatic inverted way of saying somebody had no idea."
    },
    {
      original: "As soon as the plane touched down, the passengers switched on their phones.",
      keyword: "TOUCHED",
      gapped: "No sooner ____ than the passengers switched on their phones.",
      answers: ["had the plane touched down"],
      model: "had the plane touched down",
      explanation: "'No sooner had X happened than Y happened' expresses immediate sequence with inversion."
    },
    {
      original: "You should on no account reveal your password to anyone.",
      keyword: "ACCOUNT",
      gapped: "On ____ your password to anyone.",
      answers: ["no account should you reveal", "no account must you reveal"],
      model: "no account should you reveal",
      explanation: "'On no account' fronted for emphasis is followed by inverted word order."
    },
    {
      original: "He said absolutely nothing throughout the trial.",
      keyword: "SINGLE",
      gapped: "Not ____ he utter throughout the trial.",
      answers: ["a single word did"],
      model: "a single word did",
      explanation: "Fronted negative object 'Not a single word' requires the inverted auxiliary 'did'."
    },
    {
      original: "Passengers were never in any danger.",
      keyword: "TIME",
      gapped: "At no ____ in danger.",
      answers: ["time were passengers", "time were the passengers"],
      model: "time were passengers",
      explanation: "'At no time' fronted triggers inversion: 'At no time were passengers in danger'."
    },
    {
      original: "She was so absorbed in the novel that she missed her stop.",
      keyword: "ABSORBED",
      gapped: "____ in the novel that she missed her stop.",
      answers: ["So absorbed was she"],
      model: "So absorbed was she",
      explanation: "Fronting 'so absorbed' inverts the verb and subject: 'So absorbed was she... that...'."
    },
    {
      original: "The outcome is far from certain.",
      keyword: "MEANS",
      gapped: "____ the outcome certain.",
      answers: ["By no means is"],
      model: "By no means is",
      explanation: "'By no means' at the start of a sentence requires subject-verb inversion."
    },
    {
      original: "She met the deadline only because she worked overtime.",
      keyword: "BY",
      gapped: "Only ____ did she meet the deadline.",
      answers: ["by working overtime"],
      model: "by working overtime",
      explanation: "'Only by + -ing' fronted expresses the sole means, with inversion in the main clause."
    },
    {
      original: "Her attention to detail secured her the promotion.",
      keyword: "WHAT",
      gapped: "____ was her attention to detail.",
      answers: ["What secured her the promotion"],
      model: "What secured her the promotion",
      explanation: "A wh-cleft ('What secured her the promotion was...') emphasises the cause."
    },
    {
      original: "I most admire her refusal to compromise.",
      keyword: "WHAT",
      gapped: "____ is her refusal to compromise.",
      answers: ["What I most admire", "What I admire most"],
      model: "What I most admire",
      explanation: "The wh-cleft 'What I most admire is...' throws emphasis onto the admired quality."
    },
    {
      original: "The company's poor communication caused the strike, not low pay.",
      keyword: "WAS",
      gapped: "It ____ that caused the strike, not low pay.",
      answers: ["was the company's poor communication"],
      model: "was the company's poor communication",
      explanation: "The it-cleft 'It was X that caused...' highlights the true cause."
    },
    {
      original: "He did nothing all weekend except watch television.",
      keyword: "ALL",
      gapped: "____ all weekend was watch television.",
      answers: ["All he did"],
      model: "All he did",
      explanation: "'All he did... was + bare infinitive' emphasises that this was his only activity."
    },
    {
      original: "You need to sign the form; nothing else is required.",
      keyword: "ALL",
      gapped: "____ is sign the form.",
      answers: ["All you need to do", "All you have to do"],
      model: "All you need to do",
      explanation: "'All you need to do is + bare infinitive' means nothing else is required."
    },
    {
      original: "The festival was cancelled because it lacked sponsorship.",
      keyword: "REASON",
      gapped: "The ____ was a lack of sponsorship.",
      answers: ["reason the festival was cancelled", "reason for the festival's cancellation"],
      model: "reason the festival was cancelled",
      explanation: "'The reason X happened was...' restructures a 'because' sentence around the noun 'reason'."
    },
    {
      original: "His arrogance annoys me more than anything.",
      keyword: "MOST",
      gapped: "What ____ is his arrogance.",
      answers: ["annoys me most", "annoys me the most", "irritates me most"],
      model: "annoys me most",
      explanation: "The wh-cleft 'What annoys me most is...' emphasises the most annoying thing."
    },
    {
      original: "People allege that the official accepted bribes.",
      keyword: "ALLEGED",
      gapped: "The official ____ accepted bribes.",
      answers: ["is alleged to have"],
      model: "is alleged to have",
      explanation: "The impersonal passive 'is alleged to have + past participle' reports an unproven past claim."
    },
    {
      original: "Everyone assumed that the manuscript had been destroyed.",
      keyword: "ASSUMED",
      gapped: "The manuscript ____ destroyed.",
      answers: ["was assumed to have been"],
      model: "was assumed to have been",
      explanation: "A perfect passive infinitive ('to have been destroyed') refers to an earlier event."
    },
    {
      original: "They are demolishing the old cinema at the moment.",
      keyword: "BEING",
      gapped: "The old cinema ____ at the moment.",
      answers: ["is being demolished"],
      model: "is being demolished",
      explanation: "The present continuous passive is formed with 'is being + past participle'."
    },
    {
      original: "Someone should have told the residents about the roadworks.",
      keyword: "HAVE",
      gapped: "The residents should ____ about the roadworks.",
      answers: ["have been told", "have been informed"],
      model: "have been told",
      explanation: "The passive of 'should have told' is 'should have been told'."
    },
    {
      original: "It is reputed that the hotel once hosted royalty.",
      keyword: "REPUTED",
      gapped: "The hotel is ____ royalty.",
      answers: ["reputed to have once hosted", "reputed to have hosted"],
      model: "reputed to have once hosted",
      explanation: "'Is reputed to have + past participle' reports a claim about the past."
    },
    {
      original: "They will announce the winners at midnight.",
      keyword: "BE",
      gapped: "The winners ____ at midnight.",
      answers: ["will be announced"],
      model: "will be announced",
      explanation: "The future passive is formed with 'will be + past participle'."
    },
    {
      original: "Nobody has explained the delay to us yet.",
      keyword: "BEEN",
      gapped: "The delay has not yet ____ us.",
      answers: ["been explained to"],
      model: "been explained to",
      explanation: "The present perfect passive keeps 'to us' after the verb: 'has not yet been explained to us'."
    },
    {
      original: "It is understood that the singer has signed a new contract.",
      keyword: "UNDERSTOOD",
      gapped: "The singer ____ signed a new contract.",
      answers: ["is understood to have"],
      model: "is understood to have",
      explanation: "'Is understood to have + past participle' converts the impersonal 'it is understood that...'."
    },
    {
      original: "The authorities let no one enter the site.",
      keyword: "ALLOWED",
      gapped: "No one ____ the site.",
      answers: ["was allowed to enter"],
      model: "was allowed to enter",
      explanation: "'Let' has no passive form, so the passive uses 'be allowed to + infinitive'."
    },
    {
      original: "They made the trainees repeat the safety drill.",
      keyword: "WERE",
      gapped: "The trainees ____ repeat the safety drill.",
      answers: ["were made to"],
      model: "were made to",
      explanation: "In the passive, 'make somebody do' becomes 'be made to do' with 'to'."
    },
    {
      original: "Witnesses saw the suspect leave the building at noon.",
      keyword: "SEEN",
      gapped: "The suspect ____ the building at noon.",
      answers: ["was seen to leave", "was seen leaving"],
      model: "was seen to leave",
      explanation: "After passive 'see', the bare infinitive becomes 'to leave' (or the -ing form for an action in progress)."
    },
    {
      original: "'You really must stay for dinner,' our hosts said to us.",
      keyword: "INSISTED",
      gapped: "Our hosts ____ for dinner.",
      answers: ["insisted on our staying", "insisted that we stay", "insisted we stay"],
      model: "insisted on our staying",
      explanation: "'Insist' takes 'on + -ing' or a that-clause (often subjunctive) in reported speech."
    },
    {
      original: "'It wasn't Maria who lost the files,' said the supervisor.",
      keyword: "DENIED",
      gapped: "The supervisor ____ lost the files.",
      answers: ["denied that Maria had"],
      model: "denied that Maria had",
      explanation: "'Deny that + past perfect' reports the rejection of a claim about the past."
    },
    {
      original: "'Don't swim beyond the buoys,' the coastguard told the tourists.",
      keyword: "AGAINST",
      gapped: "The coastguard ____ beyond the buoys.",
      answers: ["warned the tourists against swimming"],
      model: "warned the tourists against swimming",
      explanation: "'Warn somebody against + -ing' reports a prohibition or caution."
    },
    {
      original: "'Please, please don't tell my parents,' the boy said to the teacher.",
      keyword: "BEGGED",
      gapped: "The boy ____ tell his parents.",
      answers: ["begged the teacher not to"],
      model: "begged the teacher not to",
      explanation: "'Beg somebody not to + infinitive' reports an urgent plea."
    },
    {
      original: "'Let me pay for the damage,' said Karen.",
      keyword: "OFFERED",
      gapped: "Karen ____ the damage.",
      answers: ["offered to pay for"],
      model: "offered to pay for",
      explanation: "'Offer to + infinitive' reports a voluntary proposal."
    },
    {
      original: "'You should get a second opinion,' the lawyer told her client.",
      keyword: "ADVISED",
      gapped: "The lawyer ____ a second opinion.",
      answers: ["advised her client to get", "advised her client to seek"],
      model: "advised her client to get",
      explanation: "'Advise somebody to + infinitive' is the reporting structure for recommendations."
    },
    {
      original: "'It's your fault we missed the train,' Paul told his sister.",
      keyword: "BLAMED",
      gapped: "Paul ____ missing the train.",
      answers: ["blamed his sister for"],
      model: "blamed his sister for",
      explanation: "'Blame somebody for + -ing' reports an accusation of responsibility."
    },
    {
      original: "'I'd rather we didn't discuss politics tonight,' said Grandpa.",
      keyword: "NOT",
      gapped: "Grandpa said he would rather they ____ politics that night.",
      answers: ["did not discuss"],
      model: "did not discuss",
      explanation: "'Would rather + subject + past tense' expresses a preference about others' behaviour."
    },
    {
      original: "'Shall I carry your suitcase upstairs?' said the porter.",
      keyword: "WHETHER",
      gapped: "The porter asked ____ carry my suitcase upstairs.",
      answers: ["whether he should"],
      model: "whether he should",
      explanation: "An offer with 'Shall I...?' is reported with 'asked whether he should...'."
    },
    {
      original: "It's a shame you live so far away.",
      keyword: "ONLY",
      gapped: "If ____ so far away.",
      answers: ["only you did not live", "only you didn't live"],
      model: "only you did not live",
      explanation: "'If only + past simple' expresses a wish about a present situation."
    },
    {
      original: "I'd prefer it if you wore something smarter to the reception.",
      keyword: "RATHER",
      gapped: "I would ____ something smarter to the reception.",
      answers: ["rather you wore"],
      model: "rather you wore",
      explanation: "'Would rather + subject + past tense' expresses a preference about another person's action."
    },
    {
      original: "He behaves like the owner of the whole building.",
      keyword: "THOUGH",
      gapped: "He behaves as ____ the whole building.",
      answers: ["though he owned"],
      model: "though he owned",
      explanation: "'As though + past tense' shows the comparison is unreal — he doesn't actually own it."
    },
    {
      original: "I regret that I never thanked her properly.",
      keyword: "HAD",
      gapped: "If only ____ her properly.",
      answers: ["I had thanked"],
      model: "I had thanked",
      explanation: "'If only + past perfect' expresses regret about something that didn't happen."
    },
    {
      original: "She finds it irritating that her colleagues leave dirty mugs in the sink.",
      keyword: "WOULD",
      gapped: "She wishes her colleagues ____ dirty mugs in the sink.",
      answers: ["would not leave", "would stop leaving"],
      model: "would not leave",
      explanation: "'Wish + would' complains about an annoying habit the speaker wants changed."
    },
    {
      original: "Not learning to swim as a child is something she regrets.",
      keyword: "WISHES",
      gapped: "She ____ to swim as a child.",
      answers: ["wishes she had learned", "wishes she had learnt"],
      model: "wishes she had learned",
      explanation: "'Wishes + past perfect' turns a regret about the past into a wish."
    },
    {
      original: "It's a pity we can't stay another week.",
      keyword: "COULD",
      gapped: "I wish ____ another week.",
      answers: ["we could stay"],
      model: "we could stay",
      explanation: "'Wish + could' expresses regret about a present inability."
    },
    {
      original: "The hikers survived only because they had packed emergency supplies.",
      keyword: "HAD",
      gapped: "____ emergency supplies, the hikers would not have survived.",
      answers: ["Had they not packed"],
      model: "Had they not packed",
      explanation: "The inverted third conditional 'Had they not packed...' replaces 'If they had not packed...'."
    },
    {
      original: "We'll cancel the barbecue if the weather doesn't improve.",
      keyword: "UNLESS",
      gapped: "We will cancel the barbecue ____ improves.",
      answers: ["unless the weather"],
      model: "unless the weather",
      explanation: "'Unless' means 'if... not', so the negative disappears from the verb."
    },
    {
      original: "Thanks to her quick thinking, a disaster was avoided.",
      keyword: "BEEN",
      gapped: "____ for her quick thinking, there would have been a disaster.",
      answers: ["Had it not been"],
      model: "Had it not been",
      explanation: "'Had it not been for + noun' is a formal inverted way of saying 'without'."
    },
    {
      original: "Follow the instructions carefully; otherwise the warranty will be invalid.",
      keyword: "FAIL",
      gapped: "If you ____ carefully, the warranty will be invalid.",
      answers: ["fail to follow the instructions"],
      model: "fail to follow the instructions",
      explanation: "'Fail to + infinitive' expresses 'not do something', turning 'otherwise' into an if-clause."
    },
    {
      original: "If you happen to change your mind, my offer still stands.",
      keyword: "SHOULD",
      gapped: "____ your mind, my offer still stands.",
      answers: ["Should you change"],
      model: "Should you change",
      explanation: "Inverted 'Should you...' replaces 'If you should/happen to...' in formal conditionals."
    },
    {
      original: "I can't join the choir because I'm so busy.",
      keyword: "WERE",
      gapped: "____ so busy, I would join the choir.",
      answers: ["Were I not", "If I were not"],
      model: "Were I not",
      explanation: "'Were I not...' is the formal inverted form of 'If I were not...'."
    },
    {
      original: "Water the plants daily, or they will wilt.",
      keyword: "OTHERWISE",
      gapped: "Water the plants daily; ____ wilt.",
      answers: ["otherwise they will"],
      model: "otherwise they will",
      explanation: "'Otherwise' means 'if you don't', linking an instruction to its consequence."
    },
    {
      original: "The deal will collapse without further investment.",
      keyword: "ABSENCE",
      gapped: "The deal will collapse ____ further investment.",
      answers: ["in the absence of"],
      model: "in the absence of",
      explanation: "'In the absence of + noun' is a formal equivalent of 'without'."
    },
    {
      original: "I'll tell you the plan, but you must keep quiet about it.",
      keyword: "LONG",
      gapped: "I will tell you the plan as ____ quiet about it.",
      answers: ["long as you keep"],
      model: "long as you keep",
      explanation: "'As long as' introduces a condition, similar to 'provided that'."
    },
    {
      original: "What will we do if the flight is delayed?",
      keyword: "SUPPOSING",
      gapped: "____ delayed, what will we do?",
      answers: ["Supposing the flight is"],
      model: "Supposing the flight is",
      explanation: "'Supposing' can replace 'if' when speculating about a possible situation."
    },
    {
      original: "The dispute is unlikely to be settled soon.",
      keyword: "PROSPECT",
      gapped: "There is ____ dispute being settled soon.",
      answers: ["little prospect of the"],
      model: "little prospect of the",
      explanation: "'There is little prospect of + -ing' expresses low probability formally."
    },
    {
      original: "The dentist will whiten her teeth next week.",
      keyword: "WHITENED",
      gapped: "She is going to ____ next week.",
      answers: ["have her teeth whitened", "get her teeth whitened"],
      model: "have her teeth whitened",
      explanation: "'Have/get something done' expresses arranging for a professional to do something."
    },
    {
      original: "She finally convinced her landlord to fix the boiler.",
      keyword: "GOT",
      gapped: "She finally ____ fix the boiler.",
      answers: ["got her landlord to"],
      model: "got her landlord to",
      explanation: "'Get somebody to do something' means to persuade them to do it."
    },
    {
      original: "My parents never let me stay out late as a teenager.",
      keyword: "WOULD",
      gapped: "My parents ____ stay out late as a teenager.",
      answers: ["would never let me", "would not let me"],
      model: "would never let me",
      explanation: "'Would' describes typical past behaviour; 'let + object + bare infinitive' means allow."
    },
    {
      original: "An expert is going to value the antique clock for us.",
      keyword: "VALUED",
      gapped: "We are going to ____ by an expert.",
      answers: ["have the antique clock valued", "get the antique clock valued"],
      model: "have the antique clock valued",
      explanation: "The causative 'have something valued' shows we arranged the service."
    },
    {
      original: "She'll never forget the first time she saw the northern lights.",
      keyword: "FORGET",
      gapped: "She will ____ the northern lights for the first time.",
      answers: ["never forget seeing"],
      model: "never forget seeing",
      explanation: "'Forget + -ing' refers to a memory of a past experience."
    },
    {
      original: "I'm sorry to tell you that your application was unsuccessful.",
      keyword: "REGRET",
      gapped: "I ____ that your application was unsuccessful.",
      answers: ["regret to tell you", "regret to inform you", "regret to say"],
      model: "regret to tell you",
      explanation: "'Regret + to-infinitive' introduces bad news politely; 'regret + -ing' would refer to the past."
    },
    {
      original: "Living in a big city no longer feels strange to her.",
      keyword: "USED",
      gapped: "She has ____ in a big city.",
      answers: ["got used to living", "grown used to living", "become used to living"],
      model: "got used to living",
      explanation: "'Get used to + -ing' means become accustomed to something."
    },
    {
      original: "The strike definitely won't be called off.",
      keyword: "POSSIBILITY",
      gapped: "There is ____ the strike being called off.",
      answers: ["no possibility of"],
      model: "no possibility of",
      explanation: "'There is no possibility of + -ing' expresses certainty that something won't happen."
    },
    {
      original: "It was difficult for me to follow his accent at first.",
      keyword: "TROUBLE",
      gapped: "I ____ his accent at first.",
      answers: ["had trouble following", "had trouble in following"],
      model: "had trouble following",
      explanation: "'Have trouble + -ing' means find it difficult to do something."
    },
    {
      original: "They think insuring such an old bicycle is pointless.",
      keyword: "WORTH",
      gapped: "In their view, it ____ such an old bicycle.",
      answers: ["is not worth insuring", "isn't worth insuring"],
      model: "is not worth insuring",
      explanation: "'It is not worth + -ing' means the action isn't worthwhile."
    },
    {
      original: "He apologised profusely, but he wouldn't admit that he had lied.",
      keyword: "HAVING",
      gapped: "He apologised profusely but would not ____ lied.",
      answers: ["admit to having"],
      model: "admit to having",
      explanation: "'Admit (to) + having + past participle' refers back to an earlier action."
    },
    {
      original: "She dislikes it when people address her by her first name at work.",
      keyword: "OBJECTS",
      gapped: "She ____ addressed by her first name at work.",
      answers: ["objects to being"],
      model: "objects to being",
      explanation: "'Object to + being + past participle' is a passive gerund after the preposition 'to'."
    },
    {
      original: "Complaining to him is useless because he never listens.",
      keyword: "POINT",
      gapped: "There is no ____ to him because he never listens.",
      answers: ["point in complaining"],
      model: "point in complaining",
      explanation: "'There is no point (in) + -ing' means an action is futile."
    },
    {
      original: "They decided against flying and took the sleeper train instead.",
      keyword: "INSTEAD",
      gapped: "They took the sleeper train ____.",
      answers: ["instead of flying"],
      model: "instead of flying",
      explanation: "'Instead of + -ing' shows the rejected alternative."
    },
    {
      original: "She was very nearly injured in the crash.",
      keyword: "ESCAPED",
      gapped: "She ____ injured in the crash.",
      answers: ["narrowly escaped being", "only just escaped being"],
      model: "narrowly escaped being",
      explanation: "'Escape + being + past participle' is a passive gerund meaning avoid something happening to you."
    },
    {
      original: "The exam got harder as it went on.",
      keyword: "HARDER",
      gapped: "The longer the exam went on, ____ became.",
      answers: ["the harder it"],
      model: "the harder it",
      explanation: "The double comparative 'the longer..., the harder...' links two changing quantities."
    },
    {
      original: "No other city in the region is as expensive as the capital.",
      keyword: "BY",
      gapped: "The capital is ____ expensive city in the region.",
      answers: ["by far the most"],
      model: "by far the most",
      explanation: "'By far the most + adjective' turns a comparison into an emphatic superlative."
    },
    {
      original: "His latest album is slightly less polished than his earlier work.",
      keyword: "QUITE",
      gapped: "His latest album is ____ as his earlier work.",
      answers: ["not quite as polished", "not quite so polished"],
      model: "not quite as polished",
      explanation: "'Not quite as... as' expresses a small difference in degree."
    },
    {
      original: "Nobody in the team trains as hard as Elena.",
      keyword: "HARDER",
      gapped: "Elena trains ____ else in the team.",
      answers: ["harder than anyone", "harder than anybody"],
      model: "harder than anyone",
      explanation: "A comparative with 'than anyone else' restates a negative 'nobody... as... as' sentence."
    },
    {
      original: "The venue was not nearly big enough for the crowd.",
      keyword: "TOO",
      gapped: "The venue was far ____ the crowd.",
      answers: ["too small for"],
      model: "too small for",
      explanation: "'Not big enough' is rephrased as 'too small', with 'far' for emphasis."
    },
    {
      original: "His explanations only added to my confusion.",
      keyword: "MORE",
      gapped: "The ____ the more confused I became.",
      answers: ["more he explained"],
      model: "more he explained",
      explanation: "The pattern 'the more..., the more...' shows two things increasing together."
    },
    {
      original: "It's just possible that the keys fell behind the sofa.",
      keyword: "MIGHT",
      gapped: "The keys ____ behind the sofa.",
      answers: ["might have fallen"],
      model: "might have fallen",
      explanation: "'Might have + past participle' expresses a remote past possibility."
    },
    {
      original: "I'm certain the parcel was delivered while we were out.",
      keyword: "MUST",
      gapped: "The parcel ____ delivered while we were out.",
      answers: ["must have been"],
      model: "must have been",
      explanation: "'Must have been + past participle' is a confident deduction about a past passive event."
    },
    {
      original: "The results are quite likely to surprise us all.",
      keyword: "WELL",
      gapped: "The results ____ us all.",
      answers: ["may well surprise", "might well surprise", "could well surprise"],
      model: "may well surprise",
      explanation: "'May well + infinitive' expresses strong probability."
    },
    {
      original: "I'm sure they were exhausted after such a long flight.",
      keyword: "BOUND",
      gapped: "They were ____ exhausted after such a long flight.",
      answers: ["bound to be", "bound to have been"],
      model: "bound to be",
      explanation: "'Bound to be' expresses near-certainty about a state."
    },
    {
      original: "The talks broke down because neither side would compromise.",
      keyword: "REFUSAL",
      gapped: "The talks broke down because of ____ side to compromise.",
      answers: ["the refusal of either"],
      model: "the refusal of either",
      explanation: "The noun phrase 'the refusal of either side' nominalises 'neither side would compromise'."
    },
    {
      original: "Her love of gardening is something she inherited from her mother.",
      keyword: "TAKES",
      gapped: "In her love of gardening, she ____ mother.",
      answers: ["takes after her"],
      model: "takes after her",
      explanation: "'Take after somebody' means resemble an older family member."
    },
    {
      original: "I have an excellent relationship with the new manager.",
      keyword: "GET",
      gapped: "I ____ with the new manager.",
      answers: ["get on extremely well", "get on very well", "get along extremely well"],
      model: "get on extremely well",
      explanation: "'Get on (well) with somebody' means have a good relationship."
    },
    {
      original: "I found some old letters by chance while clearing the attic.",
      keyword: "ACROSS",
      gapped: "While clearing the attic, I ____ old letters.",
      answers: ["came across some"],
      model: "came across some",
      explanation: "'Come across' means find something by chance."
    },
    {
      original: "The meeting was postponed indefinitely.",
      keyword: "PUT",
      gapped: "The meeting was ____ further notice.",
      answers: ["put off until"],
      model: "put off until",
      explanation: "'Put off' means postpone; 'until further notice' means indefinitely."
    },
    {
      original: "He was unable to explain the missing funds.",
      keyword: "ACCOUNT",
      gapped: "He was at a loss to ____ funds.",
      answers: ["account for the missing"],
      model: "account for the missing",
      explanation: "'Account for' means explain the cause or whereabouts of something."
    },
    {
      original: "We had to manage with instant coffee because there was nothing better.",
      keyword: "DO",
      gapped: "We had to ____ instant coffee.",
      answers: ["make do with"],
      model: "make do with",
      explanation: "'Make do with' means accept something less satisfactory because nothing better is available."
    },
    {
      original: "There are inconsistencies in the witness's story.",
      keyword: "ADD",
      gapped: "The witness's story simply does ____.",
      answers: ["not add up"],
      model: "not add up",
      explanation: "'Not add up' means a story is inconsistent or doesn't make sense."
    },
    {
      original: "I lost all patience with his constant excuses.",
      keyword: "RAN",
      gapped: "I ____ patience with his constant excuses.",
      answers: ["ran out of"],
      model: "ran out of",
      explanation: "'Run out of patience' means have no patience left."
    },
    {
      original: "A series of bad investments caused the firm's bankruptcy.",
      keyword: "AS",
      gapped: "The firm went bankrupt ____ a series of bad investments.",
      answers: ["as a result of", "as a consequence of"],
      model: "as a result of",
      explanation: "'As a result of + noun' expresses cause formally."
    },
    {
      original: "The match will very probably be cancelled.",
      keyword: "CALLED",
      gapped: "In all likelihood, the match will ____.",
      answers: ["be called off"],
      model: "be called off",
      explanation: "'Call off' means cancel; here it appears in the passive."
    },
    {
      original: "He tried very hard, but he couldn't open the jar.",
      keyword: "MATTER",
      gapped: "____ he tried, he could not open the jar.",
      answers: ["No matter how hard"],
      model: "No matter how hard",
      explanation: "'No matter how + adjective/adverb' means 'however much', conceding effort."
    },
    {
      original: "Whether the launch succeeds depends entirely on the weather.",
      keyword: "HINGES",
      gapped: "The success of the launch ____ the weather.",
      answers: ["hinges entirely on"],
      model: "hinges entirely on",
      explanation: "'Hinge on' means depend completely on something."
    },
    {
      original: "She tends to exaggerate her achievements.",
      keyword: "TENDENCY",
      gapped: "She has ____ her achievements.",
      answers: ["a tendency to exaggerate"],
      model: "a tendency to exaggerate",
      explanation: "'Have a tendency to + infinitive' nominalises the verb 'tend'."
    },
    {
      original: "He was heavily criticised over the decision.",
      keyword: "CAME",
      gapped: "He ____ a lot of criticism over the decision.",
      answers: ["came in for"],
      model: "came in for",
      explanation: "'Come in for criticism' means receive criticism."
    },
    {
      original: "Residents resisted the plan fiercely.",
      keyword: "MET",
      gapped: "The plan was ____ resistance from residents.",
      answers: ["met with fierce"],
      model: "met with fierce",
      explanation: "'Be met with resistance' means encounter opposition."
    },
    {
      original: "I can no longer tolerate this noise.",
      keyword: "WITH",
      gapped: "I cannot put up ____ any longer.",
      answers: ["with this noise"],
      model: "with this noise",
      explanation: "'Put up with' means tolerate."
    },
    {
      original: "They took the decision in order to cut costs.",
      keyword: "VIEW",
      gapped: "The decision was taken with ____ costs.",
      answers: ["a view to cutting", "a view to reducing"],
      model: "a view to cutting",
      explanation: "'With a view to + -ing' expresses purpose formally."
    },
    {
      original: "Although he lacked experience, he got the job.",
      keyword: "SPITE",
      gapped: "He got the job in ____ experience.",
      answers: ["spite of his lack of", "spite of lacking"],
      model: "spite of his lack of",
      explanation: "'In spite of + noun phrase' expresses contrast; 'although + clause' becomes 'his lack of experience'."
    },
    {
      original: "Obviously, punctuality is essential.",
      keyword: "GOES",
      gapped: "It ____ that punctuality is essential.",
      answers: ["goes without saying"],
      model: "goes without saying",
      explanation: "'It goes without saying that...' means something is obvious."
    },
    {
      original: "The witness doesn't have to answer.",
      keyword: "OBLIGATION",
      gapped: "The witness is under ____ answer.",
      answers: ["no obligation to"],
      model: "no obligation to",
      explanation: "'Be under no obligation to + infinitive' means not be required to do something."
    },
    {
      original: "I found it odd that the lights were still on.",
      keyword: "STRUCK",
      gapped: "It ____ odd that the lights were still on.",
      answers: ["struck me as"],
      model: "struck me as",
      explanation: "'It struck me as + adjective' means it seemed that way to me."
    },
    {
      original: "The soldiers were just about to give up when reinforcements arrived.",
      keyword: "POINT",
      gapped: "The soldiers were on ____ up when reinforcements arrived.",
      answers: ["the point of giving"],
      model: "the point of giving",
      explanation: "'On the point of + -ing' means about to do something."
    },
    {
      original: "Her comments caused a heated debate.",
      keyword: "RISE",
      gapped: "Her comments ____ a heated debate.",
      answers: ["gave rise to"],
      model: "gave rise to",
      explanation: "'Give rise to' is a formal way of saying cause."
    },
    {
      original: "Demand for print newspapers has fallen sharply.",
      keyword: "FALL",
      gapped: "There has been ____ demand for print newspapers.",
      answers: ["a sharp fall in"],
      model: "a sharp fall in",
      explanation: "The verb 'fall sharply' is nominalised as 'a sharp fall in'."
    },
    {
      original: "The two paintings hardly look alike at all.",
      keyword: "RESEMBLANCE",
      gapped: "The two paintings bear ____ each other.",
      answers: ["little resemblance to", "hardly any resemblance to"],
      model: "little resemblance to",
      explanation: "'Bear little resemblance to' means look very different from."
    },
    {
      original: "Nobody was surprised that the sequel flopped.",
      keyword: "SURPRISE",
      gapped: "The sequel's flop ____ to anyone.",
      answers: ["came as no surprise"],
      model: "came as no surprise",
      explanation: "'Come as no surprise' means be entirely expected."
    },
    {
      original: "Hardly anyone paid attention to the safety warnings.",
      keyword: "PAID",
      gapped: "____ to the safety warnings.",
      answers: ["Little attention was paid"],
      model: "Little attention was paid",
      explanation: "The passive 'little attention was paid to' restates 'hardly anyone paid attention to'."
    },
    {
      original: "Visitor numbers doubled as a result of the refurbishment.",
      keyword: "RESULTED",
      gapped: "The refurbishment ____ doubling of visitor numbers.",
      answers: ["resulted in a", "resulted in the"],
      model: "resulted in a",
      explanation: "'Result in + noun' expresses the outcome of an action."
    },
    {
      original: "The government has promised to halve emissions.",
      keyword: "COMMITTED",
      gapped: "The government is ____ emissions.",
      answers: ["committed to halving"],
      model: "committed to halving",
      explanation: "'Be committed to + -ing' means have promised or dedicated oneself to doing something."
    },
    {
      original: "The case was dismissed because there was not enough evidence.",
      keyword: "LACK",
      gapped: "The case was dismissed ____ evidence.",
      answers: ["for lack of", "through lack of", "owing to a lack of"],
      model: "for lack of",
      explanation: "'For lack of + noun' means because of the absence of something."
    },
    {
      original: "He still hasn't replied to my invitation.",
      keyword: "YET",
      gapped: "He ____ reply to my invitation.",
      answers: ["has yet to", "is yet to"],
      model: "has yet to",
      explanation: "'Have yet to + infinitive' means something still hasn't happened."
    },
    {
      original: "I gradually realised that I had been deceived.",
      keyword: "DAWNED",
      gapped: "It ____ that I had been deceived.",
      answers: ["dawned on me", "gradually dawned on me", "slowly dawned on me"],
      model: "dawned on me",
      explanation: "'It dawned on me that...' means I gradually came to realise something."
    },
    {
      original: "I keep wondering whether we made the right choice.",
      keyword: "HELP",
      gapped: "I ____ whether we made the right choice.",
      answers: ["can't help wondering", "cannot help wondering"],
      model: "can't help wondering",
      explanation: "'Can't help + -ing' means be unable to stop oneself doing something."
    },
    {
      original: "She persuaded me to join the gym.",
      keyword: "INTO",
      gapped: "She talked ____ the gym.",
      answers: ["me into joining"],
      model: "me into joining",
      explanation: "'Talk somebody into + -ing' means persuade them to do something."
    },
    {
      original: "The findings cast doubt on the original diagnosis.",
      keyword: "CALL",
      gapped: "The findings ____ the original diagnosis.",
      answers: ["call into question"],
      model: "call into question",
      explanation: "'Call into question' means make people doubt something."
    },
    {
      original: "Farmers reacted with outrage to the bill.",
      keyword: "OUTCRY",
      gapped: "The bill ____ among farmers.",
      answers: ["provoked an outcry", "caused an outcry", "sparked an outcry"],
      model: "provoked an outcry",
      explanation: "'Provoke an outcry' means cause a strong public protest."
    },
    {
      original: "Nobody yet knows whether the reforms will work.",
      keyword: "REMAINS",
      gapped: "It ____ whether the reforms will work.",
      answers: ["remains to be seen"],
      model: "remains to be seen",
      explanation: "'It remains to be seen whether...' means the answer is still unknown."
    },
    {
      original: "The contractor is responsible for the error.",
      keyword: "LIES",
      gapped: "The blame for the error ____ contractor.",
      answers: ["lies with the"],
      model: "lies with the",
      explanation: "'The blame lies with somebody' assigns responsibility formally."
    },
    {
      original: "Because she had been warned about pickpockets, she kept her bag zipped.",
      keyword: "HAVING",
      gapped: "____ about pickpockets, she kept her bag zipped.",
      answers: ["Having been warned"],
      model: "Having been warned",
      explanation: "The perfect passive participle 'Having been warned' replaces the 'because' clause."
    },
    {
      original: "After she finished the marathon, she collapsed at the finish line.",
      keyword: "ON",
      gapped: "____ she collapsed at the finish line.",
      answers: ["On finishing the marathon", "On completing the marathon"],
      model: "On finishing the marathon",
      explanation: "'On + -ing' means 'as soon as' or 'immediately after' doing something."
    },
    {
      original: "Because the letter was written in haste, it contained several errors.",
      keyword: "BEEN",
      gapped: "____ in haste, the letter contained several errors.",
      answers: ["Having been written"],
      model: "Having been written",
      explanation: "The perfect passive participle 'Having been written' expresses the earlier cause."
    },
    {
      original: "Since we didn't want to offend our hosts, we ate everything.",
      keyword: "WISHING",
      gapped: "____ offend our hosts, we ate everything.",
      answers: ["Not wishing to"],
      model: "Not wishing to",
      explanation: "'Not wishing to...' is a negative participle clause expressing motive."
    },
    {
      original: "The path, which leads to the lighthouse, is closed in winter.",
      keyword: "LEADING",
      gapped: "The ____ the lighthouse is closed in winter.",
      answers: ["path leading to"],
      model: "path leading to",
      explanation: "A present participle 'leading to' replaces the relative clause 'which leads to'."
    },
    {
      original: "The lecture was so boring that half the audience fell asleep.",
      keyword: "SUCH",
      gapped: "It was ____ that half the audience fell asleep.",
      answers: ["such a boring lecture"],
      model: "such a boring lecture",
      explanation: "'So + adjective' becomes 'such a + adjective + noun' with the same meaning."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
