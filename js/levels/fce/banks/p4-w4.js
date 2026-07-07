/* FCE Prep extra bank: part4 wave 4 */
(function () {
  var BANK = [
    {
      original: "They grow these tomatoes in greenhouses.",
      keyword: "GROWN",
      gapped: "These tomatoes ____ greenhouses.",
      answers: ["are grown in"],
      model: "are grown in",
      explanation: "The active present simple becomes a present simple passive: are grown."
    },
    {
      original: "Somebody left the office lights on all weekend.",
      keyword: "LEFT",
      gapped: "The office lights ____ all weekend.",
      answers: ["were left on"],
      model: "were left on",
      explanation: "With an unknown subject, the past simple passive 'were left on' is used."
    },
    {
      original: "They are going to demolish the old cinema next year.",
      keyword: "BE",
      gapped: "The old cinema is going to ____ year.",
      answers: ["be demolished next"],
      model: "be demolished next",
      explanation: "The passive of 'be going to' is formed with 'be' plus the past participle."
    },
    {
      original: "The judges will announce the results at midnight.",
      keyword: "ANNOUNCED",
      gapped: "The results ____ the judges at midnight.",
      answers: ["will be announced by"],
      model: "will be announced by",
      explanation: "Future passive: will be + past participle, with 'by' introducing the agent."
    },
    {
      original: "Workers are widening the road outside our school.",
      keyword: "WIDENED",
      gapped: "The road outside our school ____ .",
      answers: ["is being widened"],
      model: "is being widened",
      explanation: "Present continuous passive: is being + past participle."
    },
    {
      original: "Nobody has explained the new rules to us yet.",
      keyword: "BEEN",
      gapped: "The new rules have not ____ us yet.",
      answers: ["been explained to"],
      model: "been explained to",
      explanation: "Present perfect passive: have not been + past participle."
    },
    {
      original: "You must sign both copies of the contract.",
      keyword: "SIGNED",
      gapped: "Both copies of the contract must ____ .",
      answers: ["be signed"],
      model: "be signed",
      explanation: "Modal passive: must be + past participle."
    },
    {
      original: "They were feeding the lions when the zoo closed.",
      keyword: "BEING",
      gapped: "The lions were ____ the zoo closed.",
      answers: ["being fed when"],
      model: "being fed when",
      explanation: "Past continuous passive: were being + past participle."
    },
    {
      original: "Someone had washed the windows before we moved in.",
      keyword: "HAD",
      gapped: "The windows ____ washed before we moved in.",
      answers: ["had been"],
      model: "had been",
      explanation: "Past perfect passive: had been + past participle."
    },
    {
      original: "A plumber fixed our shower this morning.",
      keyword: "HAD",
      gapped: "We ____ fixed this morning.",
      answers: ["had our shower"],
      model: "had our shower",
      explanation: "Causative 'have something done' shows that someone did the job for us."
    },
    {
      original: "An optician is testing Dad's eyes on Tuesday.",
      keyword: "HAVING",
      gapped: "Dad is ____ tested on Tuesday.",
      answers: ["having his eyes"],
      model: "having his eyes",
      explanation: "Causative in the present continuous: is having his eyes tested."
    },
    {
      original: "A designer will redecorate their kitchen in spring.",
      keyword: "HAVE",
      gapped: "They will ____ redecorated in spring.",
      answers: ["have their kitchen"],
      model: "have their kitchen",
      explanation: "Causative with will: will have something done."
    },
    {
      original: "I should ask someone to check my brakes.",
      keyword: "GET",
      gapped: "I should ____ checked.",
      answers: ["get my brakes"],
      model: "get my brakes",
      explanation: "'Get something done' is an informal causative meaning arrange for someone to do it."
    },
    {
      original: "A friend took Lara's passport photo for her.",
      keyword: "GOT",
      gapped: "Lara ____ taken by a friend.",
      answers: ["got her passport photo"],
      model: "got her passport photo",
      explanation: "Causative 'got something done' means someone else did it for her."
    },
    {
      original: "'I finished the report an hour ago,' said Vera.",
      keyword: "HAD",
      gapped: "Vera said that she ____ report an hour earlier.",
      answers: ["had finished the"],
      model: "had finished the",
      explanation: "In reported speech, the past simple shifts back to the past perfect."
    },
    {
      original: "'I can't find my glasses anywhere,' said Grandpa.",
      keyword: "COULD",
      gapped: "Grandpa said that he ____ his glasses anywhere.",
      answers: ["could not find"],
      model: "could not find",
      explanation: "'Can't' becomes 'could not' when speech is reported."
    },
    {
      original: "'Are you coming to the rehearsal, Max?' asked the director.",
      keyword: "WHETHER",
      gapped: "The director asked Max ____ coming to the rehearsal.",
      answers: ["whether he was"],
      model: "whether he was",
      explanation: "Reported yes/no questions use 'whether' or 'if' with statement word order."
    },
    {
      original: "'Why did you sell the house, Mr Cole?' asked the reporter.",
      keyword: "WHY",
      gapped: "The reporter asked Mr Cole ____ sold the house.",
      answers: ["why he had"],
      model: "why he had",
      explanation: "Reported wh-questions use statement order, and the past simple becomes past perfect."
    },
    {
      original: "'Turn off the projector before you leave,' the teacher said to me.",
      keyword: "TOLD",
      gapped: "The teacher ____ off the projector before I left.",
      answers: ["told me to turn"],
      model: "told me to turn",
      explanation: "A reported command uses 'told + object + to-infinitive'."
    },
    {
      original: "'Don't drink the tap water here,' the guide said to us.",
      keyword: "NOT",
      gapped: "The guide told us ____ the tap water there.",
      answers: ["not to drink"],
      model: "not to drink",
      explanation: "A negative command is reported with 'not to + infinitive'."
    },
    {
      original: "'I'll bring the dessert to the party,' said Nadia.",
      keyword: "PROMISED",
      gapped: "Nadia ____ the dessert to the party.",
      answers: ["promised to bring"],
      model: "promised to bring",
      explanation: "'I'll do it' is reported with 'promised to + infinitive'."
    },
    {
      original: "'Why don't you enter the cookery contest?' Amir said to me.",
      keyword: "SUGGESTED",
      gapped: "Amir ____ the cookery contest.",
      answers: ["suggested entering", "suggested that I enter"],
      model: "suggested entering",
      explanation: "'Suggest' is followed by a gerund or a that-clause, never by an object plus infinitive."
    },
    {
      original: "'You scratched my car, Toby!' said the neighbour.",
      keyword: "OF",
      gapped: "The neighbour accused Toby ____ his car.",
      answers: ["of scratching", "of having scratched"],
      model: "of scratching",
      explanation: "'Accuse someone of + gerund' reports an accusation."
    },
    {
      original: "'I won't sign this petition,' said the mayor.",
      keyword: "REFUSED",
      gapped: "The mayor ____ the petition.",
      answers: ["refused to sign"],
      model: "refused to sign",
      explanation: "'Won't do it' is reported with 'refused to + infinitive'."
    },
    {
      original: "'I'm sorry I woke you up so early,' said Tomás.",
      keyword: "APOLOGISED",
      gapped: "Tomás ____ me up so early.",
      answers: ["apologised for waking"],
      model: "apologised for waking",
      explanation: "'Apologise for + gerund' reports an apology."
    },
    {
      original: "'Remember to switch off the oven, Pia,' said her flatmate.",
      keyword: "REMINDED",
      gapped: "Pia's flatmate ____ switch off the oven.",
      answers: ["reminded her to"],
      model: "reminded her to",
      explanation: "'Remind someone to + infinitive' reports this kind of instruction."
    },
    {
      original: "'I didn't break the scanner,' said the intern.",
      keyword: "DENIED",
      gapped: "The intern ____ the scanner.",
      answers: ["denied breaking", "denied having broken"],
      model: "denied breaking",
      explanation: "'Deny' takes a gerund when reporting that someone said they did not do something."
    },
    {
      original: "'You ought to renew your visa soon, Jan,' said the lawyer.",
      keyword: "ADVISED",
      gapped: "The lawyer ____ renew his visa soon.",
      answers: ["advised Jan to"],
      model: "advised Jan to",
      explanation: "'Advise someone to + infinitive' reports advice."
    },
    {
      original: "'Don't go near the cliff edge — it's dangerous,' the ranger said to the hikers.",
      keyword: "WARNED",
      gapped: "The ranger ____ go near the cliff edge.",
      answers: ["warned the hikers not to"],
      model: "warned the hikers not to",
      explanation: "'Warn someone not to + infinitive' reports a warning."
    },
    {
      original: "'It was my fault we got lost,' said the driver.",
      keyword: "ADMITTED",
      gapped: "The driver ____ his fault they had got lost.",
      answers: ["admitted that it was", "admitted it was"],
      model: "admitted that it was",
      explanation: "'Admit (that)' reports a confession in a that-clause."
    },
    {
      original: "If you don't water this plant, it will die.",
      keyword: "UNLESS",
      gapped: "This plant will die ____ it.",
      answers: ["unless you water"],
      model: "unless you water",
      explanation: "'Unless' means 'if ... not', so the negative disappears from the clause."
    },
    {
      original: "I didn't take my camera, so I couldn't photograph the eagle.",
      keyword: "COULD",
      gapped: "If I had taken my camera, I ____ the eagle.",
      answers: ["could have photographed"],
      model: "could have photographed",
      explanation: "A third conditional expresses an unreal past: could have + past participle."
    },
    {
      original: "Ben doesn't earn much, so he can't afford a holiday abroad.",
      keyword: "MORE",
      gapped: "If Ben earned ____ could afford a holiday abroad.",
      answers: ["more money, he"],
      model: "more money, he",
      explanation: "A second conditional describes an unreal present situation."
    },
    {
      original: "You'll only get the refund if you keep the receipt.",
      keyword: "LONG",
      gapped: "You'll get the refund as ____ the receipt.",
      answers: ["long as you keep"],
      model: "long as you keep",
      explanation: "'As long as' introduces a condition, like 'provided that'."
    },
    {
      original: "Call me at once if anything goes wrong.",
      keyword: "SHOULD",
      gapped: "____ wrong, call me at once.",
      answers: ["Should anything go"],
      model: "Should anything go",
      explanation: "Inverted 'should' can replace 'if' in a formal conditional."
    },
    {
      original: "The reason I stayed at home was that I felt ill.",
      keyword: "BECAUSE",
      gapped: "I stayed at home ____ ill.",
      answers: ["because I felt"],
      model: "because I felt",
      explanation: "The cleft sentence is rewritten with a simple 'because' clause."
    },
    {
      original: "You can join the tour on condition that you pay in advance.",
      keyword: "PROVIDED",
      gapped: "You can join the tour ____ pay in advance.",
      answers: ["provided that you", "provided you"],
      model: "provided that you",
      explanation: "'Provided (that)' means 'on condition that'."
    },
    {
      original: "We got front-row seats only because Jill queued all night.",
      keyword: "NOT",
      gapped: "If Jill had ____ all night, we wouldn't have got front-row seats.",
      answers: ["not queued"],
      model: "not queued",
      explanation: "The third conditional restates the past cause with a negative if-clause."
    },
    {
      original: "It's a pity I don't speak German.",
      keyword: "WISH",
      gapped: "I ____ German.",
      answers: ["wish I spoke", "wish I could speak"],
      model: "wish I spoke",
      explanation: "'Wish + past simple' expresses regret about a present situation."
    },
    {
      original: "I regret not saying goodbye to Elsa before she left.",
      keyword: "HAD",
      gapped: "I wish I ____ goodbye to Elsa before she left.",
      answers: ["had said"],
      model: "had said",
      explanation: "'Wish + past perfect' expresses regret about the past."
    },
    {
      original: "It annoys me that my colleague keeps interrupting me.",
      keyword: "WOULD",
      gapped: "I wish my colleague ____ interrupting me.",
      answers: ["would stop"],
      model: "would stop",
      explanation: "'Wish + would' complains about someone else's irritating behaviour."
    },
    {
      original: "Ruth regrets lending her brother the money.",
      keyword: "NOT",
      gapped: "Ruth wishes she had ____ her brother the money.",
      answers: ["not lent"],
      model: "not lent",
      explanation: "Regret about a past action becomes 'wish + had not + past participle'."
    },
    {
      original: "I'm sorry I can't attend your graduation.",
      keyword: "COULD",
      gapped: "I wish I ____ your graduation.",
      answers: ["could attend"],
      model: "could attend",
      explanation: "'Wish + could' expresses regret about a present inability."
    },
    {
      original: "It's a shame we didn't record the concert.",
      keyword: "ONLY",
      gapped: "If ____ recorded the concert.",
      answers: ["only we had"],
      model: "only we had",
      explanation: "'If only + past perfect' expresses a strong regret about the past."
    },
    {
      original: "I have never heard such a moving speech.",
      keyword: "MOVING",
      gapped: "That is the most ____ ever heard.",
      answers: ["moving speech I have", "moving speech I've"],
      model: "moving speech I have",
      explanation: "'Never heard such a...' equals a superlative with 'ever'."
    },
    {
      original: "No other bridge in the country is as long as this one.",
      keyword: "LONGEST",
      gapped: "This is ____ in the country.",
      answers: ["the longest bridge"],
      model: "the longest bridge",
      explanation: "'No other ... as ... as' is equivalent to a superlative."
    },
    {
      original: "The second interview was less stressful than the first.",
      keyword: "AS",
      gapped: "The second interview was not ____ the first.",
      answers: ["as stressful as", "so stressful as"],
      model: "as stressful as",
      explanation: "'Less ... than' can be expressed as 'not as ... as'."
    },
    {
      original: "Your suitcase is heavier than mine.",
      keyword: "LIGHT",
      gapped: "Your suitcase is not ____ mine.",
      answers: ["as light as", "so light as"],
      model: "as light as",
      explanation: "The comparison is reversed using the opposite adjective: heavier than mine means not as light as mine."
    },
    {
      original: "The queue moved more slowly than we had hoped.",
      keyword: "QUICKLY",
      gapped: "The queue did not move as ____ had hoped.",
      answers: ["quickly as we"],
      model: "quickly as we",
      explanation: "'More slowly than hoped' equals 'not as quickly as hoped'."
    },
    {
      original: "As winter approached, the days got shorter and shorter.",
      keyword: "INCREASINGLY",
      gapped: "As winter approached, the days got ____ .",
      answers: ["increasingly short"],
      model: "increasingly short",
      explanation: "'Shorter and shorter' can be rephrased as 'increasingly short'."
    },
    {
      original: "Nobody in the choir sings as beautifully as Priya.",
      keyword: "MORE",
      gapped: "Priya sings ____ anyone else in the choir.",
      answers: ["more beautifully than"],
      model: "more beautifully than",
      explanation: "The negative 'as ... as' structure becomes a comparative with 'than anyone else'."
    },
    {
      original: "The harder you practise, the better you will play.",
      keyword: "IF",
      gapped: "You will play better ____ harder.",
      answers: ["if you practise"],
      model: "if you practise",
      explanation: "The double comparative can be rewritten as a first conditional."
    },
    {
      original: "The coffee was too bitter for me to finish.",
      keyword: "SO",
      gapped: "The coffee was ____ I couldn't finish it.",
      answers: ["so bitter that"],
      model: "so bitter that",
      explanation: "'Too + adjective + to' becomes 'so + adjective + that' with a negative clause."
    },
    {
      original: "The shelf was so full that we couldn't add another book.",
      keyword: "TOO",
      gapped: "The shelf was ____ us to add another book.",
      answers: ["too full for"],
      model: "too full for",
      explanation: "'So ... that we couldn't' becomes 'too ... for us to'."
    },
    {
      original: "This ladder isn't long enough to reach the roof.",
      keyword: "SHORT",
      gapped: "This ladder is too ____ the roof.",
      answers: ["short to reach"],
      model: "short to reach",
      explanation: "'Not long enough' equals 'too short' with the opposite adjective."
    },
    {
      original: "It was such a windy day that the kite show was cancelled.",
      keyword: "SO",
      gapped: "The day was ____ the kite show was cancelled.",
      answers: ["so windy that"],
      model: "so windy that",
      explanation: "'Such a + adjective + noun' becomes 'so + adjective' with the noun as subject."
    },
    {
      original: "The soup was so salty that nobody finished it.",
      keyword: "SUCH",
      gapped: "It was ____ soup that nobody finished it.",
      answers: ["such salty", "such a salty"],
      model: "such salty",
      explanation: "With an uncountable noun, 'such + adjective + noun' replaces 'so + adjective'."
    },
    {
      original: "Theo isn't old enough to vote in the election.",
      keyword: "TOO",
      gapped: "Theo is ____ vote in the election.",
      answers: ["too young to"],
      model: "too young to",
      explanation: "'Not old enough' means 'too young'."
    },
    {
      original: "The print is so tiny that I can't read it without glasses.",
      keyword: "ENOUGH",
      gapped: "The print isn't big ____ to read without glasses.",
      answers: ["enough for me"],
      model: "enough for me",
      explanation: "'So tiny that I can't' becomes 'not big enough for me to'."
    },
    {
      original: "We didn't have enough time to visit the castle.",
      keyword: "SO",
      gapped: "We had ____ time that we couldn't visit the castle.",
      answers: ["so little"],
      model: "so little",
      explanation: "'Not enough time' becomes 'so little time that' with a negative result clause."
    },
    {
      original: "Please stop delaying the decision about the venue.",
      keyword: "OFF",
      gapped: "Please stop ____ decision about the venue.",
      answers: ["putting off the"],
      model: "putting off the",
      explanation: "'Put off' is a phrasal verb meaning delay or postpone."
    },
    {
      original: "Zoe has stopped eating chocolate for a month.",
      keyword: "GIVEN",
      gapped: "Zoe has ____ chocolate for a month.",
      answers: ["given up eating", "given up"],
      model: "given up eating",
      explanation: "'Give up' means stop doing something, often followed by a gerund."
    },
    {
      original: "The lift stopped working between the third and fourth floors.",
      keyword: "DOWN",
      gapped: "The lift ____ the third and fourth floors.",
      answers: ["broke down between"],
      model: "broke down between",
      explanation: "'Break down' means stop functioning, used for machines."
    },
    {
      original: "Ted resembles his grandfather more than his father.",
      keyword: "AFTER",
      gapped: "Ted ____ his grandfather more than his father.",
      answers: ["takes after"],
      model: "takes after",
      explanation: "'Take after' means to resemble an older relative."
    },
    {
      original: "Ella and Sam ended their relationship last month.",
      keyword: "UP",
      gapped: "Ella and Sam ____ last month.",
      answers: ["broke up", "split up"],
      model: "broke up",
      explanation: "'Break up' or 'split up' means to end a romantic relationship."
    },
    {
      original: "I bumped into my old piano teacher at the airport.",
      keyword: "ACROSS",
      gapped: "I ____ old piano teacher at the airport.",
      answers: ["came across my"],
      model: "came across my",
      explanation: "'Come across' means to meet or find by chance."
    },
    {
      original: "The organisers cancelled the parade at the last minute.",
      keyword: "WAS",
      gapped: "The parade ____ off at the last minute.",
      answers: ["was called"],
      model: "was called",
      explanation: "'Call off' means cancel; here it is used in the passive."
    },
    {
      original: "Kim invented an excuse about a flat tyre.",
      keyword: "UP",
      gapped: "Kim made ____ about a flat tyre.",
      answers: ["up an excuse"],
      model: "up an excuse",
      explanation: "'Make up' means to invent a story or excuse."
    },
    {
      original: "We're investigating why the order never arrived.",
      keyword: "INTO",
      gapped: "We're ____ the order never arrived.",
      answers: ["looking into why"],
      model: "looking into why",
      explanation: "'Look into' means to investigate."
    },
    {
      original: "Our car petrol was completely finished on the way home.",
      keyword: "RAN",
      gapped: "We ____ petrol on the way home.",
      answers: ["ran out of"],
      model: "ran out of",
      explanation: "'Run out of' means to use all of something so none is left."
    },
    {
      original: "The plane left the ground twenty minutes late.",
      keyword: "OFF",
      gapped: "The plane ____ minutes late.",
      answers: ["took off twenty"],
      model: "took off twenty",
      explanation: "'Take off' means to leave the ground, used for aircraft."
    },
    {
      original: "How do you and your mother-in-law manage to have a good relationship?",
      keyword: "GET",
      gapped: "How do you and your mother-in-law manage to ____ with each other?",
      answers: ["get on", "get along"],
      model: "get on",
      explanation: "'Get on (with)' means to have a good relationship."
    },
    {
      original: "Ivan started playing the drums when he was six.",
      keyword: "HAS",
      gapped: "Ivan ____ the drums since he was six.",
      answers: ["has played", "has been playing"],
      model: "has played",
      explanation: "'Started ... ago/when' becomes present perfect with 'since'."
    },
    {
      original: "The last time we ate out was on Mum's birthday.",
      keyword: "EATEN",
      gapped: "We haven't ____ Mum's birthday.",
      answers: ["eaten out since"],
      model: "eaten out since",
      explanation: "'The last time ... was' becomes a negative present perfect with 'since'."
    },
    {
      original: "Rosa has worked at the bakery for a decade.",
      keyword: "AGO",
      gapped: "Rosa started working at the bakery a ____ .",
      answers: ["decade ago"],
      model: "decade ago",
      explanation: "The present perfect with 'for' becomes past simple with 'ago'."
    },
    {
      original: "This is the first time Marco has driven on the left.",
      keyword: "NEVER",
      gapped: "Marco has ____ on the left before.",
      answers: ["never driven"],
      model: "never driven",
      explanation: "'The first time' equals 'never ... before' in the present perfect."
    },
    {
      original: "How long ago did Petra adopt her cat?",
      keyword: "HAD",
      gapped: "How long has Petra ____ cat?",
      answers: ["had her"],
      model: "had her",
      explanation: "'How long ago did ... get' becomes 'how long has ... had'."
    },
    {
      original: "It's over a year since Dev last visited his hometown.",
      keyword: "FOR",
      gapped: "Dev hasn't visited his hometown ____ a year.",
      answers: ["for over", "for more than"],
      model: "for over",
      explanation: "'It's over a year since' equals a negative present perfect with 'for'."
    },
    {
      original: "Anya still hasn't replied to my invitation.",
      keyword: "YET",
      gapped: "Anya has ____ replied to my invitation.",
      answers: ["not yet"],
      model: "not yet",
      explanation: "'Still hasn't done' can be expressed as 'has not yet done'."
    },
    {
      original: "When we got to the station, the train had already left.",
      keyword: "BY",
      gapped: "The train had already left ____ we got to the station.",
      answers: ["by the time"],
      model: "by the time",
      explanation: "'When' plus past perfect can be rephrased with 'by the time'."
    },
    {
      original: "My uncle was a pilot, but he retired years ago.",
      keyword: "USED",
      gapped: "My uncle ____ a pilot, but he retired years ago.",
      answers: ["used to be"],
      model: "used to be",
      explanation: "'Used to' describes a past state that is no longer true."
    },
    {
      original: "Ola doesn't find night shifts strange any more.",
      keyword: "GOT",
      gapped: "Ola has ____ working night shifts.",
      answers: ["got used to"],
      model: "got used to",
      explanation: "'Have got used to + gerund' means something is no longer strange."
    },
    {
      original: "Sleeping in a tent is still strange for Ines.",
      keyword: "NOT",
      gapped: "Ines is ____ sleeping in a tent.",
      answers: ["not used to"],
      model: "not used to",
      explanation: "'Be used to + gerund' means be accustomed to; the negative shows it still feels strange."
    },
    {
      original: "Fabio no longer cycles to the office.",
      keyword: "USED",
      gapped: "Fabio ____ to the office, but he doesn't any more.",
      answers: ["used to cycle"],
      model: "used to cycle",
      explanation: "'No longer does' becomes 'used to do' for a discontinued habit."
    },
    {
      original: "There was a phone box on this square in the past.",
      keyword: "TO",
      gapped: "There used ____ phone box on this square.",
      answers: ["to be a"],
      model: "to be a",
      explanation: "'There used to be' describes something that existed in the past."
    },
    {
      original: "As a child, Nora hated spinach, but now she loves it.",
      keyword: "USE",
      gapped: "Nora did not ____ spinach as a child, but now she loves it.",
      answers: ["use to like"],
      model: "use to like",
      explanation: "In negatives with 'did', the bare form 'use to' is required."
    },
    {
      original: "I'm sure Hana is at the library, because her bike is outside.",
      keyword: "MUST",
      gapped: "Hana ____ the library, because her bike is outside.",
      answers: ["must be at", "must be in"],
      model: "must be at",
      explanation: "'Must be' expresses a confident deduction about the present."
    },
    {
      original: "It's impossible that the twins ate the whole cake by themselves.",
      keyword: "CANNOT",
      gapped: "The twins ____ eaten the whole cake by themselves.",
      answers: ["cannot have"],
      model: "cannot have",
      explanation: "'Cannot have + past participle' expresses certainty that something did not happen."
    },
    {
      original: "Perhaps Iris left her scarf on the train.",
      keyword: "MIGHT",
      gapped: "Iris ____ her scarf on the train.",
      answers: ["might have left"],
      model: "might have left",
      explanation: "'Might have + past participle' expresses a possibility about the past."
    },
    {
      original: "I'm certain the neighbours are on holiday — their curtains have been closed for days.",
      keyword: "BE",
      gapped: "The neighbours must ____ holiday — their curtains have been closed for days.",
      answers: ["be on"],
      model: "be on",
      explanation: "'Must be' expresses a logical deduction about the present."
    },
    {
      original: "Maybe Raúl doesn't know about the change of venue.",
      keyword: "NOT",
      gapped: "Raúl may ____ about the change of venue.",
      answers: ["not know"],
      model: "not know",
      explanation: "'May not + infinitive' expresses present possibility in the negative."
    },
    {
      original: "It wasn't necessary for Mona to print the tickets, because I had digital copies.",
      keyword: "HAVE",
      gapped: "Mona needn't ____ the tickets, because I had digital copies.",
      answers: ["have printed"],
      model: "have printed",
      explanation: "'Needn't have + past participle' means someone did something that was unnecessary."
    },
    {
      original: "I'm sure the keys were in my pocket when I left home.",
      keyword: "BEEN",
      gapped: "The keys must ____ my pocket when I left home.",
      answers: ["have been in"],
      model: "have been in",
      explanation: "'Must have + past participle' is a confident deduction about the past."
    },
    {
      original: "It's not necessary to wear a tie at this restaurant.",
      keyword: "NEED",
      gapped: "You ____ a tie at this restaurant.",
      answers: ["need not wear", "do not need to wear"],
      model: "need not wear",
      explanation: "'Need not' expresses a lack of obligation."
    },
    {
      original: "I strongly recommend avoiding the motorway at rush hour.",
      keyword: "AVOID",
      gapped: "You should ____ the motorway at rush hour.",
      answers: ["avoid using", "avoid taking"],
      model: "avoid using",
      explanation: "'Avoid' is followed by a gerund or a noun phrase."
    },
    {
      original: "Getting a visa for that country is not worth the effort.",
      keyword: "WORTH",
      gapped: "It is not ____ a visa for that country.",
      answers: ["worth getting"],
      model: "worth getting",
      explanation: "'It is (not) worth + gerund' evaluates whether something deserves the effort."
    },
    {
      original: "Nights in the desert made me think of my childhood camping trips.",
      keyword: "REMINDED",
      gapped: "Nights in the desert ____ my childhood camping trips.",
      answers: ["reminded me of"],
      model: "reminded me of",
      explanation: "'Remind someone of something' means to make them think of it."
    },
    {
      original: "The kids can't wait to open their presents.",
      keyword: "LOOKING",
      gapped: "The kids are ____ opening their presents.",
      answers: ["looking forward to"],
      model: "looking forward to",
      explanation: "'Look forward to + gerund' expresses eager anticipation."
    },
    {
      original: "Would it bother you if I recorded the lecture?",
      keyword: "MIND",
      gapped: "Would you ____ the lecture?",
      answers: ["mind me recording", "mind my recording", "mind if I recorded"],
      model: "mind me recording",
      explanation: "'Would you mind + object + gerund' politely asks for permission."
    },
    {
      original: "Solving crosswords is easy for my grandmother.",
      keyword: "DIFFICULTY",
      gapped: "My grandmother has no ____ crosswords.",
      answers: ["difficulty solving", "difficulty in solving"],
      model: "difficulty solving",
      explanation: "'Have (no) difficulty (in) + gerund' describes how hard something is."
    },
    {
      original: "There's no point in complaining to the waiter about the music.",
      keyword: "USE",
      gapped: "It's no ____ to the waiter about the music.",
      answers: ["use complaining"],
      model: "use complaining",
      explanation: "'It's no use + gerund' means the action will achieve nothing."
    },
    {
      original: "Milena finally managed to open the jammed drawer.",
      keyword: "IN",
      gapped: "Milena finally succeeded ____ the jammed drawer.",
      answers: ["in opening"],
      model: "in opening",
      explanation: "'Succeed in + gerund' means manage to do something."
    },
    {
      original: "The roadworks stopped us from reaching the hotel before dark.",
      keyword: "PREVENTED",
      gapped: "The roadworks ____ reaching the hotel before dark.",
      answers: ["prevented us from"],
      model: "prevented us from",
      explanation: "'Prevent someone from + gerund' means stop them doing something."
    },
    {
      original: "Writing the thank-you letters took Amira all afternoon.",
      keyword: "SPENT",
      gapped: "Amira ____ writing the thank-you letters.",
      answers: ["spent all afternoon"],
      model: "spent all afternoon",
      explanation: "'Spend + time + gerund' describes how long an activity lasted."
    },
    {
      original: "Hugo is thinking about selling his motorbike.",
      keyword: "OF",
      gapped: "Hugo is thinking ____ his motorbike.",
      answers: ["of selling"],
      model: "of selling",
      explanation: "'Think of + gerund' means consider doing something."
    },
    {
      original: "Sending a postcard from every city where we stay is our tradition.",
      keyword: "IN",
      gapped: "We have a tradition of sending a postcard from every city ____ we stay.",
      answers: ["in which"],
      model: "in which",
      explanation: "'In which' introduces a formal relative clause about place."
    },
    {
      original: "Despite the pain in his knee, Karol finished the marathon.",
      keyword: "EVEN",
      gapped: "Karol finished the marathon ____ his knee hurt.",
      answers: ["even though", "even if"],
      model: "even though",
      explanation: "'Even though' introduces a strong contrast, like 'despite'."
    },
    {
      original: "Although the shop was crowded, we found a parking space easily.",
      keyword: "SPITE",
      gapped: "In ____ crowded shop, we found a parking space easily.",
      answers: ["spite of the"],
      model: "spite of the",
      explanation: "'In spite of + noun phrase' replaces an 'although' clause."
    },
    {
      original: "The recipe looked simple; however, it took me hours.",
      keyword: "ALTHOUGH",
      gapped: "____ recipe looked simple, it took me hours.",
      answers: ["Although the"],
      model: "Although the",
      explanation: "'Although' links the two contrasting clauses in one sentence."
    },
    {
      original: "He got the job despite having no experience.",
      keyword: "FACT",
      gapped: "He got the job despite the ____ had no experience.",
      answers: ["fact that he"],
      model: "fact that he",
      explanation: "'Despite the fact that' introduces a full clause after 'despite'."
    },
    {
      original: "Take some snacks with you because the buffet might be closed.",
      keyword: "CASE",
      gapped: "Take some snacks with you in ____ buffet is closed.",
      answers: ["case the"],
      model: "case the",
      explanation: "'In case' introduces a precaution against a possible situation."
    },
    {
      original: "Talia saved every month because she wanted to buy a flat.",
      keyword: "ORDER",
      gapped: "Talia saved every month in ____ buy a flat.",
      answers: ["order to"],
      model: "order to",
      explanation: "'In order to + infinitive' expresses purpose."
    },
    {
      original: "Leon lowered his voice because he didn't want the baby to wake up.",
      keyword: "THAT",
      gapped: "Leon lowered his voice so ____ baby wouldn't wake up.",
      answers: ["that the"],
      model: "that the",
      explanation: "'So that + clause' expresses purpose."
    },
    {
      original: "It took the jury three days to reach a verdict.",
      keyword: "SPENT",
      gapped: "The jury ____ days reaching a verdict.",
      answers: ["spent three"],
      model: "spent three",
      explanation: "'It took X time' can be rewritten as 'spent + time + gerund'."
    },
    {
      original: "I advise you to compare prices before ordering online.",
      keyword: "BETTER",
      gapped: "You had ____ prices before ordering online.",
      answers: ["better compare"],
      model: "better compare",
      explanation: "'Had better + bare infinitive' gives strong advice."
    },
    {
      original: "Hiking alone in these mountains is not a good idea.",
      keyword: "SHOULD",
      gapped: "You ____ alone in these mountains.",
      answers: ["should not hike", "should not go hiking"],
      model: "should not hike",
      explanation: "'Should not' expresses advice against doing something."
    },
    {
      original: "Passengers are not allowed to stand near the doors.",
      keyword: "MUST",
      gapped: "Passengers ____ near the doors.",
      answers: ["must not stand"],
      model: "must not stand",
      explanation: "'Must not' expresses prohibition."
    },
    {
      original: "Our teacher lets us use dictionaries in the writing test.",
      keyword: "ALLOWED",
      gapped: "We are ____ dictionaries in the writing test.",
      answers: ["allowed to use"],
      model: "allowed to use",
      explanation: "'Let someone do' becomes 'be allowed to do' in the passive."
    },
    {
      original: "The landlord makes the tenants pay a deposit.",
      keyword: "MADE",
      gapped: "The tenants are ____ a deposit.",
      answers: ["made to pay"],
      model: "made to pay",
      explanation: "In the passive, 'make someone do' becomes 'be made to do' with 'to'."
    },
    {
      original: "Ida would prefer to travel by ferry rather than fly.",
      keyword: "RATHER",
      gapped: "Ida would ____ by ferry than fly.",
      answers: ["rather travel"],
      model: "rather travel",
      explanation: "'Would rather + bare infinitive + than' expresses preference."
    },
    {
      original: "I'd rather you handed in the form today.",
      keyword: "PREFER",
      gapped: "I'd ____ hand in the form today.",
      answers: ["prefer you to"],
      model: "prefer you to",
      explanation: "'Would prefer someone to do' matches 'would rather someone did'."
    },
    {
      original: "Everyone believes the manager will step down soon.",
      keyword: "IS",
      gapped: "The manager ____ to step down soon.",
      answers: ["is believed", "is expected"],
      model: "is believed",
      explanation: "The impersonal passive 'is believed to' reports a general belief."
    },
    {
      original: "People think this recipe dates from the fifteenth century.",
      keyword: "THOUGHT",
      gapped: "This recipe is ____ from the fifteenth century.",
      answers: ["thought to date"],
      model: "thought to date",
      explanation: "'Is thought to + infinitive' is the impersonal passive of 'people think'."
    },
    {
      original: "It was Mia who designed the poster, not Carl.",
      keyword: "BY",
      gapped: "The poster was designed ____ , not Carl.",
      answers: ["by Mia"],
      model: "by Mia",
      explanation: "The cleft sentence becomes a passive with the agent after 'by'."
    },
    {
      original: "You won't pass the audition if you don't rehearse daily.",
      keyword: "UNLESS",
      gapped: "You won't pass the audition ____ daily.",
      answers: ["unless you rehearse"],
      model: "unless you rehearse",
      explanation: "'If ... not' is replaced by 'unless' with a positive verb."
    },
    {
      original: "Ali couldn't reach the top shelf because he wasn't tall enough.",
      keyword: "TALLER",
      gapped: "Ali could have reached the top shelf if he ____ .",
      answers: ["had been taller"],
      model: "had been taller",
      explanation: "The third conditional imagines a different past ability."
    },
    {
      original: "The critics say the new play is a masterpiece.",
      keyword: "SAID",
      gapped: "The new play is ____ a masterpiece.",
      answers: ["said to be"],
      model: "said to be",
      explanation: "'Is said to be' is the impersonal passive reporting an opinion."
    },
    {
      original: "Whose idea was it to hold the meeting outdoors?",
      keyword: "CAME",
      gapped: "Who ____ the idea of holding the meeting outdoors?",
      answers: ["came up with"],
      model: "came up with",
      explanation: "'Come up with' means to think of an idea or plan."
    },
    {
      original: "The hotel gave us a bigger room at no extra cost.",
      keyword: "WERE",
      gapped: "We ____ a bigger room at no extra cost.",
      answers: ["were given"],
      model: "were given",
      explanation: "The indirect object becomes the subject of a passive sentence."
    },
    {
      original: "My sister knows more about art than I do.",
      keyword: "AS",
      gapped: "I don't know ____ about art as my sister.",
      answers: ["as much"],
      model: "as much",
      explanation: "'More than' is reversed with the negative 'not as much as'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
