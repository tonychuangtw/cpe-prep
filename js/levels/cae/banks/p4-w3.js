/* CAE Prep extra bank: part4 wave 3 */
(function () {
  var BANK = [
    /* ---------- Inversion ---------- */
    {
      original: "The orchestra had never given a more moving performance.",
      keyword: "NEVER",
      gapped: "____ given a more moving performance.",
      answers: ["Never had the orchestra"],
      model: "Never had the orchestra",
      explanation: "When 'never' opens the sentence, the auxiliary 'had' is inverted with the subject for emphasis."
    },
    {
      original: "Immediately after the ceasefire was announced, celebrations erupted in the streets.",
      keyword: "SOONER",
      gapped: "No ____ than celebrations erupted in the streets.",
      answers: ["sooner had the ceasefire been announced"],
      model: "sooner had the ceasefire been announced",
      explanation: "'No sooner... than' expresses immediacy and triggers inversion of the auxiliary 'had' with the subject."
    },
    {
      original: "The curtain had only just risen when a phone started ringing.",
      keyword: "HARDLY",
      gapped: "____ risen when a phone started ringing.",
      answers: ["Hardly had the curtain"],
      model: "Hardly had the curtain",
      explanation: "'Hardly had X done Y when...' is an inverted structure meaning something happened almost immediately afterwards."
    },
    {
      original: "Staff must never disclose client information to third parties.",
      keyword: "CIRCUMSTANCES",
      gapped: "Under no ____ client information to third parties.",
      answers: ["circumstances must staff disclose", "circumstances may staff disclose", "circumstances should staff disclose"],
      model: "circumstances must staff disclose",
      explanation: "After the negative phrase 'under no circumstances', the modal verb inverts with the subject."
    },
    {
      original: "She realised the value of her education only after entering the workforce.",
      keyword: "ONLY",
      gapped: "____ the workforce did she realise the value of her education.",
      answers: ["Only after entering", "Only on entering"],
      model: "Only after entering",
      explanation: "Fronting 'only after...' for emphasis forces inversion ('did she realise') in the main clause."
    },
    {
      original: "Passengers must not lean out of the windows at any point during the journey.",
      keyword: "NO",
      gapped: "At ____ passengers lean out of the windows during the journey.",
      answers: ["no point may", "no point must", "no point should"],
      model: "no point may",
      explanation: "The negative adverbial 'at no point' begins the clause, so the modal inverts with the subject."
    },
    {
      original: "The volunteers did not realise how much their efforts were appreciated.",
      keyword: "LITTLE",
      gapped: "____ realise how much their efforts were appreciated.",
      answers: ["Little did the volunteers"],
      model: "Little did the volunteers",
      explanation: "'Little did X realise' is an emphatic inversion meaning X was completely unaware of something."
    },
    {
      original: "This dish isn't cooked better anywhere else in the country.",
      keyword: "NOWHERE",
      gapped: "____ is this dish cooked better.",
      answers: ["Nowhere else in the country"],
      model: "Nowhere else in the country",
      explanation: "Fronting the negative adverbial 'nowhere else' triggers inversion of 'is' with the subject."
    },
    {
      original: "He passed the audition and won a scholarship as well.",
      keyword: "NOT",
      gapped: "____ pass the audition, but he also won a scholarship.",
      answers: ["Not only did he"],
      model: "Not only did he",
      explanation: "'Not only... but also' fronts the negative element, requiring the auxiliary 'did' before the subject."
    },
    {
      original: "Such generosity is rarely shown by complete strangers.",
      keyword: "SELDOM",
      gapped: "____ generosity shown by complete strangers.",
      answers: ["Seldom is such"],
      model: "Seldom is such",
      explanation: "Beginning with the restrictive adverb 'seldom' inverts the verb 'is' with the subject."
    },
    {
      original: "If the funding were withdrawn, the clinic would close immediately.",
      keyword: "WERE",
      gapped: "____ withdrawn, the clinic would close immediately.",
      answers: ["Were the funding to be"],
      model: "Were the funding to be",
      explanation: "Formal conditionals can replace 'if' with inversion: 'Were X to be done' means 'If X were done'."
    },
    {
      original: "If we had known about the strike, we would have left earlier.",
      keyword: "HAD",
      gapped: "____ about the strike, we would have left earlier.",
      answers: ["Had we known"],
      model: "Had we known",
      explanation: "In formal third conditionals, 'if' can be dropped and 'had' inverted with the subject."
    },
    {
      original: "If you happen to come across my glasses, please put them aside.",
      keyword: "SHOULD",
      gapped: "____ come across my glasses, please put them aside.",
      answers: ["Should you happen to", "Should you chance to"],
      model: "Should you happen to",
      explanation: "'Should you...' is an inverted conditional expressing a remote possibility, replacing 'if you happen to'."
    },
    {
      original: "The committee has hardly ever reached a decision so quickly.",
      keyword: "RARELY",
      gapped: "Only ____ a decision so quickly.",
      answers: ["rarely has the committee reached"],
      model: "rarely has the committee reached",
      explanation: "'Only rarely' at the front of the clause causes inversion of 'has' with the subject."
    },
    {
      original: "The demand was so great that the printing had to be repeated.",
      keyword: "SUCH",
      gapped: "____ that the printing had to be repeated.",
      answers: ["Such was the demand"],
      model: "Such was the demand",
      explanation: "'Such was the demand that...' is an emphatic inverted alternative to 'the demand was so great that...'."
    },
    /* ---------- Cleft sentences ---------- */
    {
      original: "Her calm under pressure sets her apart from her rivals.",
      keyword: "WHAT",
      gapped: "____ from her rivals is her calm under pressure.",
      answers: ["What sets her apart"],
      model: "What sets her apart",
      explanation: "A what-cleft highlights the quality being discussed: 'What sets her apart... is...'."
    },
    {
      original: "The goalkeeper's mistake cost them the championship, not bad luck.",
      keyword: "IT",
      gapped: "____ mistake that cost them the championship, not bad luck.",
      answers: ["It was the goalkeeper's"],
      model: "It was the goalkeeper's",
      explanation: "An it-cleft ('It was X that...') emphasises the true cause and contrasts it with an alternative."
    },
    {
      original: "He only asked for a little more time.",
      keyword: "ALL",
      gapped: "____ was a little more time.",
      answers: ["All he asked for", "All that he asked for"],
      model: "All he asked for",
      explanation: "'All (that) he asked for was...' restricts the request to one thing, matching 'only asked for'."
    },
    {
      original: "Her sarcasm irritates me most about her.",
      keyword: "THING",
      gapped: "The ____ me most about her is her sarcasm.",
      answers: ["thing that irritates", "thing which irritates"],
      model: "thing that irritates",
      explanation: "The cleft 'The thing that irritates me most is...' foregrounds the irritation for emphasis."
    },
    {
      original: "I certainly don't want to cause any trouble.",
      keyword: "LAST",
      gapped: "The ____ do is cause any trouble.",
      answers: ["last thing I want to"],
      model: "last thing I want to",
      explanation: "'The last thing I want to do is...' is an idiomatic cleft meaning 'I definitely don't want to...'."
    },
    {
      original: "She had never flown a plane solo before that day.",
      keyword: "FIRST",
      gapped: "That day was the ____ a plane solo.",
      answers: ["first time she had flown", "first time she flew"],
      model: "first time she had flown",
      explanation: "'The first time she had flown' rephrases 'had never flown before' from the opposite perspective."
    },
    {
      original: "The full cost of the project became apparent only after the audit.",
      keyword: "UNTIL",
      gapped: "It was not ____ the full cost of the project became apparent.",
      answers: ["until the audit that"],
      model: "until the audit that",
      explanation: "The cleft 'It was not until X that Y' emphasises how late something happened."
    },
    {
      original: "She resigned because she was denied promotion.",
      keyword: "WHY",
      gapped: "The reason ____ that she was denied promotion.",
      answers: ["why she resigned was"],
      model: "why she resigned was",
      explanation: "'The reason why X happened was that...' turns a because-clause into a cleft structure."
    },
    {
      original: "The negotiations went wrong at the very first meeting.",
      keyword: "WHERE",
      gapped: "The very first meeting was ____ went wrong.",
      answers: ["where the negotiations"],
      model: "where the negotiations",
      explanation: "A where-cleft identifies the point at which something happened: 'X was where Y went wrong'."
    },
    {
      original: "The virus was first detected in this laboratory.",
      keyword: "THAT",
      gapped: "It was in this laboratory ____ first detected.",
      answers: ["that the virus was"],
      model: "that the virus was",
      explanation: "The it-cleft 'It was in X that Y happened' emphasises the location."
    },
    /* ---------- Advanced passives & impersonal reporting ---------- */
    {
      original: "People know that the composer destroyed several early works.",
      keyword: "KNOWN",
      gapped: "The composer is ____ several early works.",
      answers: ["known to have destroyed"],
      model: "known to have destroyed",
      explanation: "The impersonal passive 'is known to have done' reports an established past fact about the subject."
    },
    {
      original: "Experts estimate that the repairs will cost two million euros.",
      keyword: "ESTIMATED",
      gapped: "The repairs are ____ two million euros.",
      answers: ["estimated to cost"],
      model: "estimated to cost",
      explanation: "'Are estimated to cost' is the passive reporting structure replacing 'experts estimate that...'."
    },
    {
      original: "People think the tunnel was abandoned during the war.",
      keyword: "THOUGHT",
      gapped: "The tunnel is ____ abandoned during the war.",
      answers: ["thought to have been"],
      model: "thought to have been",
      explanation: "A perfect passive infinitive ('to have been abandoned') is needed because the abandoning happened earlier."
    },
    {
      original: "People fear that several climbers are still trapped on the mountain.",
      keyword: "FEARED",
      gapped: "Several climbers are ____ still trapped on the mountain.",
      answers: ["feared to be"],
      model: "feared to be",
      explanation: "'Are feared to be' reports a present situation impersonally in the passive."
    },
    {
      original: "People believe the mayor is preparing to run for national office.",
      keyword: "BELIEVED",
      gapped: "The mayor is ____ preparing to run for national office.",
      answers: ["believed to be"],
      model: "believed to be",
      explanation: "The passive reporting pattern 'is believed to be doing' replaces 'people believe X is doing'."
    },
    {
      original: "The police are questioning two suspects at this very moment.",
      keyword: "BEING",
      gapped: "Two suspects ____ by the police at this very moment.",
      answers: ["are being questioned"],
      model: "are being questioned",
      explanation: "The present continuous passive 'are being questioned' shows an action in progress right now."
    },
    {
      original: "Nobody has watered these plants for weeks.",
      keyword: "BEEN",
      gapped: "These plants have not ____ weeks.",
      answers: ["been watered for"],
      model: "been watered for",
      explanation: "The present perfect passive 'have not been watered' removes the vague agent 'nobody'."
    },
    {
      original: "They did not tell the tenants about the rent increase in advance.",
      keyword: "GIVEN",
      gapped: "The tenants were not ____ notice of the rent increase.",
      answers: ["given any advance"],
      model: "given any advance",
      explanation: "The passive 'were not given advance notice' rephrases 'did not tell them in advance'."
    },
    {
      original: "The author says that she never received any royalties.",
      keyword: "CLAIMS",
      gapped: "The author ____ received any royalties.",
      answers: ["claims never to have", "claims that she never", "claims she never"],
      model: "claims never to have",
      explanation: "'Claims never to have received' uses a perfect infinitive to report an earlier action."
    },
    /* ---------- Reported speech with specific verbs ---------- */
    {
      original: "'You really should report the theft to the police,' Ella told me.",
      keyword: "URGED",
      gapped: "Ella ____ the theft to the police.",
      answers: ["urged me to report"],
      model: "urged me to report",
      explanation: "'Urge somebody to do something' reports strong advice or encouragement."
    },
    {
      original: "'Don't forget to renew your visa, Sam,' said his lawyer.",
      keyword: "REMINDED",
      gapped: "Sam's lawyer ____ renew his visa.",
      answers: ["reminded him to"],
      model: "reminded him to",
      explanation: "'Remind somebody to do something' reports a warning not to forget an action."
    },
    {
      original: "'Well done on winning the tender, everyone,' said the director.",
      keyword: "CONGRATULATED",
      gapped: "The director ____ winning the tender.",
      answers: ["congratulated everyone on"],
      model: "congratulated everyone on",
      explanation: "'Congratulate somebody on doing something' takes the preposition 'on' plus a gerund."
    },
    {
      original: "'Pay the invoice or I'll take legal action,' the supplier told us.",
      keyword: "THREATENED",
      gapped: "The supplier ____ legal action unless we paid the invoice.",
      answers: ["threatened to take"],
      model: "threatened to take",
      explanation: "'Threaten to do something' reports the warning, and 'unless' captures the condition."
    },
    {
      original: "'I forged the signature on the letter,' the clerk said.",
      keyword: "CONFESSED",
      gapped: "The clerk ____ the signature on the letter.",
      answers: ["confessed to having forged", "confessed to forging"],
      model: "confessed to having forged",
      explanation: "'Confess to doing/having done something' takes the preposition 'to' followed by a gerund."
    },
    {
      original: "'I will not comment on the rumours,' said the actress.",
      keyword: "REFUSED",
      gapped: "The actress ____ the rumours.",
      answers: ["refused to comment on"],
      model: "refused to comment on",
      explanation: "'Refuse to do something' reports an emphatic 'will not'."
    },
    {
      original: "'Your report is full of careless errors, Dan,' said the editor.",
      keyword: "CRITICISED",
      gapped: "The editor ____ careless errors in his report.",
      answers: ["criticised Dan for the", "criticised Dan for making"],
      model: "criticised Dan for the",
      explanation: "'Criticise somebody for something' reports a negative judgement with the preposition 'for'."
    },
    {
      original: "'The soup is stone cold,' said the customer to the waiter.",
      keyword: "COMPLAINED",
      gapped: "The customer ____ the soup being stone cold.",
      answers: ["complained to the waiter about"],
      model: "complained to the waiter about",
      explanation: "'Complain to somebody about something' reports the grievance with the correct prepositions."
    },
    {
      original: "'Have you ever been to Prague, Nina?' asked Leo.",
      keyword: "WHETHER",
      gapped: "Leo asked Nina ____ ever been to Prague.",
      answers: ["whether she had"],
      model: "whether she had",
      explanation: "Reported yes/no questions use 'whether' and shift the present perfect to the past perfect."
    },
    /* ---------- Wish / if only / would rather / it's time ---------- */
    {
      original: "I regret that I sold my grandfather's watch.",
      keyword: "WISH",
      gapped: "I ____ my grandfather's watch.",
      answers: ["wish I hadn't sold", "wish I had not sold"],
      model: "wish I hadn't sold",
      explanation: "'Wish + past perfect' expresses regret about a completed past action."
    },
    {
      original: "It's a shame I can't speak Italian.",
      keyword: "ONLY",
      gapped: "If ____ speak Italian.",
      answers: ["only I could"],
      model: "only I could",
      explanation: "'If only I could' expresses regret about a present inability."
    },
    {
      original: "I'd prefer my daughter to travel with a friend rather than alone.",
      keyword: "RATHER",
      gapped: "I'd ____ with a friend than alone.",
      answers: ["rather my daughter travelled", "rather my daughter traveled"],
      model: "rather my daughter travelled",
      explanation: "'Would rather + subject + past simple' expresses a preference about another person's actions."
    },
    {
      original: "You really ought to have that cough examined now.",
      keyword: "TIME",
      gapped: "It's high ____ that cough examined.",
      answers: ["time you had", "time you got"],
      model: "time you had",
      explanation: "'It's high time + past simple' means the action is overdue and should happen now."
    },
    {
      original: "He regrets speaking so harshly to his son.",
      keyword: "WISHES",
      gapped: "He ____ spoken so harshly to his son.",
      answers: ["wishes he hadn't", "wishes he had not"],
      model: "wishes he hadn't",
      explanation: "'Wishes + past perfect' expresses present regret about a past action."
    },
    {
      original: "He gives orders as if he were in charge of the department.",
      keyword: "THOUGH",
      gapped: "He gives orders as ____ in charge of the department.",
      answers: ["though he were", "though he was"],
      model: "though he were",
      explanation: "'As though + past subjunctive' describes behaviour that suggests an unreal situation."
    },
    {
      original: "I find it annoying that the printer jams every time I'm in a hurry.",
      keyword: "WOULD",
      gapped: "I wish the printer ____ every time I'm in a hurry.",
      answers: ["would not jam", "would stop jamming"],
      model: "would not jam",
      explanation: "'Wish + would' expresses irritation about a repeated present behaviour."
    },
    {
      original: "She would prefer to resign than implement the cuts.",
      keyword: "SOONER",
      gapped: "She ____ than implement the cuts.",
      answers: ["would sooner resign"],
      model: "would sooner resign",
      explanation: "'Would sooner do X than do Y' expresses a strong preference, like 'would rather'."
    },
    /* ---------- Conditionals & alternatives to 'if' ---------- */
    {
      original: "If the referee hadn't intervened, the match would have descended into chaos.",
      keyword: "BUT",
      gapped: "____ intervention, the match would have descended into chaos.",
      answers: ["But for the referee's"],
      model: "But for the referee's",
      explanation: "'But for + noun' means 'if it had not been for', introducing a third conditional."
    },
    {
      original: "You may use the lab after hours as long as you sign the register.",
      keyword: "PROVIDED",
      gapped: "You may use the lab after hours ____ the register.",
      answers: ["provided you sign", "provided that you sign"],
      model: "provided you sign",
      explanation: "'Provided (that)' introduces a condition, equivalent to 'as long as'."
    },
    {
      original: "The witness agreed to testify only if her identity was concealed.",
      keyword: "CONDITION",
      gapped: "The witness agreed to testify on ____ identity was concealed.",
      answers: ["condition that her"],
      model: "condition that her",
      explanation: "'On condition that' is a formal way of stating the sole condition for agreement."
    },
    {
      original: "Write down the reference number because you might need it later.",
      keyword: "CASE",
      gapped: "Write down the reference number in ____ it later.",
      answers: ["case you need", "case you should need"],
      model: "case you need",
      explanation: "'In case + present simple' expresses a precaution against a possible future need."
    },
    {
      original: "You cannot enter the site if you are not wearing a helmet.",
      keyword: "UNLESS",
      gapped: "You cannot enter the site ____ a helmet.",
      answers: ["unless you are wearing", "unless you wear"],
      model: "unless you are wearing",
      explanation: "'Unless' replaces 'if... not' to state the negative condition."
    },
    {
      original: "Book now, or all the good seats will be gone.",
      keyword: "OTHERWISE",
      gapped: "Book now; ____ seats will be gone.",
      answers: ["otherwise all the good"],
      model: "otherwise all the good",
      explanation: "'Otherwise' expresses the consequence of not following the instruction, replacing 'or'."
    },
    {
      original: "You can keep the puppy provided you look after it yourself.",
      keyword: "LONG",
      gapped: "You can keep the puppy as ____ after it yourself.",
      answers: ["long as you look"],
      model: "long as you look",
      explanation: "'As long as' introduces a condition, equivalent to 'provided'."
    },
    {
      original: "If the negotiations collapse, both sides will lose heavily.",
      keyword: "EVENT",
      gapped: "In the ____ collapsing, both sides will lose heavily.",
      answers: ["event of the negotiations"],
      model: "event of the negotiations",
      explanation: "'In the event of + noun/gerund' is a formal alternative to an if-clause."
    },
    /* ---------- Causatives ---------- */
    {
      original: "A specialist is going to check my eyesight tomorrow.",
      keyword: "HAVE",
      gapped: "I'm going to ____ tomorrow.",
      answers: ["have my eyesight checked"],
      model: "have my eyesight checked",
      explanation: "The causative 'have something done' shows that a service is performed for you by someone else."
    },
    {
      original: "A tailor shortened his suit trousers for him last week.",
      keyword: "HAD",
      gapped: "He ____ shortened last week.",
      answers: ["had his suit trousers"],
      model: "had his suit trousers",
      explanation: "'Had something done' is the past causative: someone else performed the service."
    },
    {
      original: "She finally persuaded the council to repair the streetlights.",
      keyword: "GOT",
      gapped: "She finally ____ the streetlights.",
      answers: ["got the council to repair"],
      model: "got the council to repair",
      explanation: "'Get somebody to do something' means to persuade or arrange for them to do it."
    },
    {
      original: "The coach forced the players to run extra laps.",
      keyword: "MADE",
      gapped: "The players were ____ extra laps by the coach.",
      answers: ["made to run"],
      model: "made to run",
      explanation: "In the passive, 'make somebody do' becomes 'be made to do' with the full infinitive."
    },
    {
      original: "Her parents didn't let her attend the festival.",
      keyword: "ALLOWED",
      gapped: "She was not ____ the festival.",
      answers: ["allowed to attend"],
      model: "allowed to attend",
      explanation: "The passive of 'let somebody do' is expressed with 'be allowed to do'."
    },
    /* ---------- Gerund / infinitive nuance ---------- */
    {
      original: "The spokesman said the company had never tested products on animals.",
      keyword: "DENIED",
      gapped: "The spokesman ____ ever tested products on animals.",
      answers: ["denied that the company had", "denied the company had"],
      model: "denied that the company had",
      explanation: "'Deny that + clause' reports the rejection of an accusation."
    },
    {
      original: "The driver said he had fallen asleep at the wheel.",
      keyword: "ADMITTED",
      gapped: "The driver ____ asleep at the wheel.",
      answers: ["admitted having fallen", "admitted to having fallen", "admitted to falling"],
      model: "admitted having fallen",
      explanation: "'Admit (to) doing/having done' reports acknowledging an earlier action."
    },
    {
      original: "Please don't forget to switch off the projector when you leave.",
      keyword: "REMEMBER",
      gapped: "Please ____ off the projector when you leave.",
      answers: ["remember to switch"],
      model: "remember to switch",
      explanation: "'Remember to do' refers to not forgetting a future duty, unlike 'remember doing'."
    },
    {
      original: "On the way to the airport, we paused briefly to buy some coffee.",
      keyword: "STOPPED",
      gapped: "On the way to the airport, we ____ some coffee.",
      answers: ["stopped briefly to buy", "stopped to buy"],
      model: "stopped briefly to buy",
      explanation: "'Stop to do' means to interrupt one activity in order to do another, unlike 'stop doing'."
    },
    {
      original: "She took sleeping pills to cure her insomnia, but they didn't work.",
      keyword: "TRIED",
      gapped: "She ____ pills for her insomnia, but they didn't work.",
      answers: ["tried taking sleeping"],
      model: "tried taking sleeping",
      explanation: "'Try doing' means to experiment with a method to see if it solves a problem."
    },
    {
      original: "Accepting the job involved relocating to Singapore.",
      keyword: "MEANT",
      gapped: "Accepting the ____ to Singapore.",
      answers: ["job meant relocating", "job meant having to relocate"],
      model: "job meant relocating",
      explanation: "'Mean doing' expresses what something involves or entails as a consequence."
    },
    {
      original: "You should definitely see the exhibition before it closes.",
      keyword: "WORTH",
      gapped: "The exhibition is ____ before it closes.",
      answers: ["well worth seeing", "definitely worth seeing", "certainly worth seeing"],
      model: "well worth seeing",
      explanation: "'Be (well) worth doing' means something deserves to be done."
    },
    {
      original: "The heavy fog stopped the ferries from leaving the harbour.",
      keyword: "PREVENTED",
      gapped: "The heavy fog ____ leaving the harbour.",
      answers: ["prevented the ferries from"],
      model: "prevented the ferries from",
      explanation: "'Prevent somebody/something from doing' means to stop an action from happening."
    },
    {
      original: "The team finally managed to decode the entire message.",
      keyword: "SUCCEEDED",
      gapped: "The team finally ____ the entire message.",
      answers: ["succeeded in decoding"],
      model: "succeeded in decoding",
      explanation: "'Succeed in doing' takes the preposition 'in' plus a gerund and means 'manage to do'."
    },
    {
      original: "Would you mind if I recorded this conversation?",
      keyword: "OBJECT",
      gapped: "Do you ____ recording this conversation?",
      answers: ["object to me", "object to my"],
      model: "object to my",
      explanation: "'Object to somebody('s) doing something' asks whether a person minds the action."
    },
    {
      original: "He still finds it strange to be recognised in the street.",
      keyword: "ACCUSTOMED",
      gapped: "He still isn't ____ recognised in the street.",
      answers: ["accustomed to being"],
      model: "accustomed to being",
      explanation: "'Be accustomed to + gerund' means to be used to something; 'to' here is a preposition."
    },
    {
      original: "If you park there, your car might get towed away.",
      keyword: "RISK",
      gapped: "If you park there, you ____ towed away.",
      answers: ["risk having your car", "risk getting your car"],
      model: "risk having your car",
      explanation: "'Risk having something done' warns of a possible unwanted consequence performed by others."
    },
    {
      original: "Leave early so that you don't get caught in the rush hour.",
      keyword: "AVOID",
      gapped: "Leave early ____ caught in the rush hour.",
      answers: ["to avoid getting", "to avoid being", "so as to avoid getting"],
      model: "to avoid getting",
      explanation: "'To avoid doing' expresses purpose: acting so that something undesirable does not happen."
    },
    /* ---------- Participle clauses ---------- */
    {
      original: "Because he had spent his entire bonus, he couldn't afford the trip.",
      keyword: "HAVING",
      gapped: "____ bonus, he couldn't afford the trip.",
      answers: ["Having spent his entire"],
      model: "Having spent his entire",
      explanation: "A perfect participle clause ('Having spent...') replaces a because-clause about an earlier action."
    },
    {
      original: "Because it was deprived of sunlight, the plant soon withered.",
      keyword: "DEPRIVED",
      gapped: "____, the plant soon withered.",
      answers: ["Deprived of sunlight"],
      model: "Deprived of sunlight",
      explanation: "A past participle clause expresses the passive reason: 'Deprived of X' = 'Because it was deprived of X'."
    },
    {
      original: "Because they confronted mounting debts, the owners sold the hotel.",
      keyword: "FACED",
      gapped: "____ debts, the owners sold the hotel.",
      answers: ["Faced with mounting"],
      model: "Faced with mounting",
      explanation: "'Faced with + noun' is a participle clause meaning 'confronted by' a difficult situation."
    },
    {
      original: "Because the villa stands on a cliff, it enjoys spectacular views.",
      keyword: "SITUATED",
      gapped: "____ cliff, the villa enjoys spectacular views.",
      answers: ["Situated on a"],
      model: "Situated on a",
      explanation: "The past participle 'situated' introduces a reduced clause describing the villa's location."
    },
    {
      original: "Because she did not realise the microphone was on, she kept chatting.",
      keyword: "REALISING",
      gapped: "Not ____ was on, she kept chatting.",
      answers: ["realising the microphone", "realising that the microphone"],
      model: "realising the microphone",
      explanation: "A negative participle clause ('Not realising...') replaces 'because she did not realise'."
    },
    /* ---------- Comparatives ---------- */
    {
      original: "The sequel is much less inventive than the original film.",
      keyword: "NEAR",
      gapped: "The sequel is nowhere ____ the original film.",
      answers: ["near as inventive as"],
      model: "near as inventive as",
      explanation: "'Nowhere near as... as' emphasises a large difference in degree."
    },
    {
      original: "This is easily the most demanding role she has ever played.",
      keyword: "FAR",
      gapped: "This is by ____ demanding role she has ever played.",
      answers: ["far the most"],
      model: "far the most",
      explanation: "'By far the most' intensifies a superlative, equivalent to 'easily the most'."
    },
    {
      original: "As you practise more, the routine feels increasingly natural.",
      keyword: "MORE",
      gapped: "The more you practise, the ____ feels.",
      answers: ["more natural the routine"],
      model: "more natural the routine",
      explanation: "The double comparative 'the more..., the more...' links two increasing quantities."
    },
    {
      original: "The new stadium holds double the number of spectators the old one did.",
      keyword: "TWICE",
      gapped: "The new stadium holds ____ spectators as the old one.",
      answers: ["twice as many"],
      model: "twice as many",
      explanation: "'Twice as many... as' expresses that one quantity is double another."
    },
    {
      original: "Her latest speech and her previous one were equally persuasive.",
      keyword: "AS",
      gapped: "Her latest speech was just ____ her previous one.",
      answers: ["as persuasive as"],
      model: "as persuasive as",
      explanation: "'Just as... as' states that two things are equal in some quality."
    },
    {
      original: "The revised route isn't as dangerous as the original one.",
      keyword: "LESS",
      gapped: "The revised route is ____ the original one.",
      answers: ["less dangerous than"],
      model: "less dangerous than",
      explanation: "'Less + adjective + than' rephrases 'not as... as' as a comparative."
    },
    {
      original: "Their new flat is much smaller than their old house.",
      keyword: "NOTHING",
      gapped: "Their new flat is ____ as their old house.",
      answers: ["nothing like as big", "nothing like as large"],
      model: "nothing like as big",
      explanation: "'Nothing like as... as' is an emphatic way of saying 'much less... than'."
    },
    {
      original: "Assembling the shelves was much simpler than I had expected.",
      keyword: "EASIER",
      gapped: "Assembling the shelves was far ____ expected.",
      answers: ["easier than I had", "easier than I'd"],
      model: "easier than I had",
      explanation: "'Far easier than I had expected' compares reality with a prior expectation."
    },
    /* ---------- Modals of deduction & obligation ---------- */
    {
      original: "I'm sure she was flattered by all the attention.",
      keyword: "MUST",
      gapped: "She ____ flattered by all the attention.",
      answers: ["must have been"],
      model: "must have been",
      explanation: "'Must have been' expresses a confident deduction about the past."
    },
    {
      original: "I'm certain he didn't write that apology himself.",
      keyword: "CAN'T",
      gapped: "He ____ that apology himself.",
      answers: ["can't have written"],
      model: "can't have written",
      explanation: "'Can't have done' expresses certainty that something did not happen in the past."
    },
    {
      original: "It is quite possible that the painting is a forgery.",
      keyword: "WELL",
      gapped: "The painting ____ a forgery.",
      answers: ["may well be", "might well be", "could well be"],
      model: "may well be",
      explanation: "'May well be' expresses a strong possibility about the present."
    },
    {
      original: "The tickets will definitely sell out within hours.",
      keyword: "BOUND",
      gapped: "The tickets are ____ out within hours.",
      answers: ["bound to sell"],
      model: "bound to sell",
      explanation: "'Be bound to do' expresses certainty about a future event."
    },
    {
      original: "It wasn't necessary for you to bring a gift, but thank you.",
      keyword: "NEEDN'T",
      gapped: "You ____ a gift, but thank you.",
      answers: ["needn't have brought"],
      model: "needn't have brought",
      explanation: "'Needn't have done' means the action was performed although it was unnecessary."
    },
    {
      original: "Employees are required to wear identity badges at all times.",
      keyword: "SUPPOSED",
      gapped: "Employees are ____ identity badges at all times.",
      answers: ["supposed to wear"],
      model: "supposed to wear",
      explanation: "'Be supposed to do' expresses an official requirement or expectation."
    },
    /* ---------- Idiomatic & phrasal rephrasing ---------- */
    {
      original: "She invented the whole story to avoid punishment.",
      keyword: "UP",
      gapped: "She made ____ story to avoid punishment.",
      answers: ["up the whole"],
      model: "up the whole",
      explanation: "'Make up a story' means to invent or fabricate it."
    },
    {
      original: "He rejected the offer of a permanent contract.",
      keyword: "DOWN",
      gapped: "He turned ____ a permanent contract.",
      answers: ["down the offer of"],
      model: "down the offer of",
      explanation: "'Turn down' is a phrasal verb meaning to reject an offer."
    },
    {
      original: "The fireworks display was postponed because of high winds.",
      keyword: "OFF",
      gapped: "The fireworks display was put ____ high winds.",
      answers: ["off because of", "off owing to", "off due to", "off on account of"],
      model: "off because of",
      explanation: "'Put off' means to postpone; 'because of' introduces the cause."
    },
    {
      original: "She experienced a very difficult period after the divorce.",
      keyword: "THROUGH",
      gapped: "She went ____ period after the divorce.",
      answers: ["through a very difficult"],
      model: "through a very difficult",
      explanation: "'Go through' means to experience or endure a hard time."
    },
    {
      original: "The detectives finally discovered who had sent the letters.",
      keyword: "OUT",
      gapped: "The detectives finally found ____ sent the letters.",
      answers: ["out who had"],
      model: "out who had",
      explanation: "'Find out' means to discover information."
    },
    {
      original: "The engineers performed a thorough inspection of the bridge.",
      keyword: "CARRIED",
      gapped: "A thorough inspection of the bridge was ____ engineers.",
      answers: ["carried out by the"],
      model: "carried out by the",
      explanation: "'Carry out' means to perform; here it appears in the passive with a by-agent."
    },
    {
      original: "The sequel failed to meet the fans' expectations.",
      keyword: "LIVE",
      gapped: "The sequel did not ____ the fans' expectations.",
      answers: ["live up to"],
      model: "live up to",
      explanation: "'Live up to expectations' means to be as good as people hoped."
    },
    {
      original: "I don't think the thief will escape punishment this time.",
      keyword: "GET",
      gapped: "I don't think the thief will ____ it this time.",
      answers: ["get away with"],
      model: "get away with",
      explanation: "'Get away with something' means to escape punishment for it."
    },
    {
      original: "We're really excited about seeing you at the reunion.",
      keyword: "LOOK",
      gapped: "We really ____ seeing you at the reunion.",
      answers: ["look forward to"],
      model: "look forward to",
      explanation: "'Look forward to + gerund' expresses pleasant anticipation."
    },
    {
      original: "Could you watch my luggage while I buy a ticket?",
      keyword: "EYE",
      gapped: "Could you keep an ____ luggage while I buy a ticket?",
      answers: ["eye on my"],
      model: "eye on my",
      explanation: "'Keep an eye on something' means to watch or guard it."
    },
    {
      original: "At the last moment, he decided against going bungee jumping.",
      keyword: "MIND",
      gapped: "At the last moment, he changed his ____ bungee jumping.",
      answers: ["mind about going"],
      model: "mind about going",
      explanation: "'Change one's mind about doing something' means to reverse a decision."
    },
    {
      original: "The neighbours have a very friendly relationship with each other.",
      keyword: "TERMS",
      gapped: "The neighbours are on very ____ each other.",
      answers: ["friendly terms with", "good terms with"],
      model: "friendly terms with",
      explanation: "'Be on good/friendly terms with somebody' describes the state of a relationship."
    },
    {
      original: "I haven't communicated with my university friends for years.",
      keyword: "TOUCH",
      gapped: "I haven't been in ____ university friends for years.",
      answers: ["touch with my"],
      model: "touch with my",
      explanation: "'Be in touch with somebody' means to be in regular contact."
    },
    {
      original: "Over a hundred runners participated in the charity race.",
      keyword: "PART",
      gapped: "Over a hundred runners took ____ charity race.",
      answers: ["part in the"],
      model: "part in the",
      explanation: "'Take part in' means to participate in an event."
    },
    {
      original: "You should make the most of the early-bird discount.",
      keyword: "ADVANTAGE",
      gapped: "You should take ____ early-bird discount.",
      answers: ["advantage of the"],
      model: "advantage of the",
      explanation: "'Take advantage of' means to make good use of an opportunity."
    },
    {
      original: "We never really appreciate clean water until it runs out.",
      keyword: "GRANTED",
      gapped: "We take clean water ____ it runs out.",
      answers: ["for granted until"],
      model: "for granted until",
      explanation: "'Take something for granted' means to fail to appreciate it because it seems guaranteed."
    },
    {
      original: "The inspector deliberately ignored the minor infringements.",
      keyword: "BLIND",
      gapped: "The inspector turned a ____ the minor infringements.",
      answers: ["blind eye to"],
      model: "blind eye to",
      explanation: "'Turn a blind eye to something' means to pretend not to notice it."
    },
    {
      original: "I've completely forgotten how many times he's changed jobs.",
      keyword: "TRACK",
      gapped: "I've completely lost ____ many times he's changed jobs.",
      answers: ["track of how"],
      model: "track of how",
      explanation: "'Lose track of something' means to stop being able to follow or count it."
    },
    {
      original: "The team leader made a special effort to welcome the newcomers.",
      keyword: "WAY",
      gapped: "The team leader went out of her ____ the newcomers.",
      answers: ["way to welcome"],
      model: "way to welcome",
      explanation: "'Go out of one's way to do something' means to make a special effort."
    },
    {
      original: "The flight was delayed because of a technical fault.",
      keyword: "DUE",
      gapped: "The flight was delayed ____ technical fault.",
      answers: ["due to a"],
      model: "due to a",
      explanation: "'Due to + noun' expresses the cause of something."
    },
    {
      original: "Even though the tickets were expensive, the stadium was full.",
      keyword: "SPITE",
      gapped: "In ____ ticket prices, the stadium was full.",
      answers: ["spite of the expensive", "spite of the high"],
      model: "spite of the high",
      explanation: "'In spite of + noun phrase' expresses contrast, replacing an 'even though' clause."
    },
    {
      original: "Although she trained hard, she failed to qualify for the final.",
      keyword: "DESPITE",
      gapped: "____ hard, she failed to qualify for the final.",
      answers: ["Despite having trained", "Despite training so"],
      model: "Despite having trained",
      explanation: "'Despite + gerund' replaces an although-clause; the perfect gerund stresses the earlier effort."
    },
    {
      original: "However hard I try, I can't remember her surname.",
      keyword: "MATTER",
      gapped: "No ____ I try, I can't remember her surname.",
      answers: ["matter how hard"],
      model: "matter how hard",
      explanation: "'No matter how + adjective/adverb' is equivalent to 'however + adjective/adverb'."
    },
    {
      original: "The older pupils constantly mocked his accent.",
      keyword: "FUN",
      gapped: "The older pupils constantly made ____ accent.",
      answers: ["fun of his"],
      model: "fun of his",
      explanation: "'Make fun of somebody/something' means to mock or ridicule."
    },
    {
      original: "The chef is extremely proud of using only local produce.",
      keyword: "PRIDE",
      gapped: "The chef takes great ____ only local produce.",
      answers: ["pride in using"],
      model: "pride in using",
      explanation: "'Take pride in doing something' means to be proud of it."
    },
    {
      original: "Nobody minded the meeting being moved to Friday.",
      keyword: "OBJECTION",
      gapped: "Nobody ____ the meeting being moved to Friday.",
      answers: ["had any objection to", "raised any objection to"],
      model: "had any objection to",
      explanation: "'Have an objection to something' is a formal way of saying you mind it."
    },
    {
      original: "Everyone ignored the consultant's recommendations.",
      keyword: "NOTICE",
      gapped: "Nobody ____ the consultant's recommendations.",
      answers: ["took any notice of"],
      model: "took any notice of",
      explanation: "'Take notice of something' means to pay attention to it; the negative means to ignore."
    },
    {
      original: "Her confident presentation impressed the investors greatly.",
      keyword: "IMPRESSION",
      gapped: "Her confident presentation made a great ____ investors.",
      answers: ["impression on the"],
      model: "impression on the",
      explanation: "'Make an impression on somebody' means to impress them."
    },
    {
      original: "They tried to reach the wreck, but the currents were too strong.",
      keyword: "ATTEMPT",
      gapped: "They made an ____ the wreck, but the currents were too strong.",
      answers: ["attempt to reach"],
      model: "attempt to reach",
      explanation: "'Make an attempt to do something' is a noun-based paraphrase of 'try to do'."
    },
    {
      original: "Despite popular belief, bats are not blind.",
      keyword: "CONTRARY",
      gapped: "____ belief, bats are not blind.",
      answers: ["Contrary to popular"],
      model: "Contrary to popular",
      explanation: "'Contrary to popular belief' is a fixed phrase used to correct a common misconception."
    },
    {
      original: "The captain accepted the trophy for the whole squad.",
      keyword: "BEHALF",
      gapped: "The captain accepted the trophy on ____ whole squad.",
      answers: ["behalf of the"],
      model: "behalf of the",
      explanation: "'On behalf of somebody' means acting as their representative."
    },
    {
      original: "A new curator now runs the photography department.",
      keyword: "CHARGE",
      gapped: "A new curator is now in ____ photography department.",
      answers: ["charge of the"],
      model: "charge of the",
      explanation: "'Be in charge of something' means to be responsible for running it."
    },
    {
      original: "The company was about to declare bankruptcy when a buyer emerged.",
      keyword: "VERGE",
      gapped: "The company was on the ____ bankruptcy when a buyer emerged.",
      answers: ["verge of declaring"],
      model: "verge of declaring",
      explanation: "'Be on the verge of doing something' means to be about to do it."
    },
    {
      original: "The two ministers disagree strongly over immigration policy.",
      keyword: "ODDS",
      gapped: "The two ministers are at ____ over immigration policy.",
      answers: ["odds with each other"],
      model: "odds with each other",
      explanation: "'Be at odds with somebody' means to be in strong disagreement with them."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
