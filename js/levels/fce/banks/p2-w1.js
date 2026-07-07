/* FCE Prep extra bank: part2 wave 1 */
(function () {
  var BANK = [
    {
      text: "____ the heavy rain, the outdoor concert went ahead exactly as planned.",
      answers: ["despite"],
      explanation: "'Despite' + noun phrase expresses contrast. 'Although' would need a full clause with a verb."
    },
    {
      text: "You won't pass the driving test ____ you practise parking more often.",
      answers: ["unless"],
      explanation: "'Unless' means 'if... not': you will fail if you do not practise."
    },
    {
      text: "The novel, ____ was published only last year, has already been translated into ten languages.",
      answers: ["which"],
      explanation: "In a non-defining relative clause about a thing, only 'which' is possible; 'that' cannot follow a comma here."
    },
    {
      text: "She's the young architect ____ designs won the international competition.",
      answers: ["whose"],
      explanation: "'Whose' is the possessive relative pronoun: the designs belong to the architect."
    },
    {
      text: "____ is no point in arguing with him once he has made up his mind.",
      answers: ["there"],
      explanation: "The fixed pattern 'there is no point in + -ing' means something is useless."
    },
    {
      text: "I find ____ difficult to concentrate when the television is on.",
      answers: ["it"],
      explanation: "'It' is a dummy object in the pattern 'find it + adjective + to-infinitive'."
    },
    {
      text: "By the time we arrived at the box office, every ticket had already ____ sold.",
      answers: ["been"],
      explanation: "The past perfect passive is formed with 'had been + past participle'."
    },
    {
      text: "He really hates ____ told what to do by colleagues who are younger than him.",
      answers: ["being"],
      explanation: "'Hate' takes a gerund, and the passive gerund is 'being + past participle'."
    },
    {
      text: "You needn't ____ brought any food; there was plenty here already.",
      answers: ["have"],
      explanation: "'Needn't have + past participle' means someone did something that was not necessary."
    },
    {
      text: "If I ____ known about the roadworks, I would have left home much earlier.",
      answers: ["had"],
      explanation: "A third conditional uses the past perfect ('had known') in the if-clause."
    },
    {
      text: "Not only ____ she win the race, but she also broke the national record.",
      answers: ["did"],
      explanation: "After 'not only' at the start of a sentence, subject and auxiliary invert: 'did she win'."
    },
    {
      text: "Rarely ____ we come across such natural talent in someone so young.",
      answers: ["do"],
      explanation: "Negative adverbs like 'rarely' at the start of a sentence trigger inversion with the auxiliary 'do'."
    },
    {
      text: "When we were children, our grandmother ____ tell us a story every single evening.",
      answers: ["would"],
      explanation: "'Would' describes repeated past habits, similar to 'used to'."
    },
    {
      text: "My father ____ to cycle to work every day before he finally bought a car.",
      answers: ["used"],
      explanation: "'Used to + infinitive' describes a past habit that no longer happens."
    },
    {
      text: "The manager strongly objected ____ the schedule being changed at the last minute.",
      answers: ["to"],
      explanation: "'Object to' is a fixed verb + preposition combination, followed by a noun or -ing form."
    },
    {
      text: "She has been waiting anxiously ____ the exam results since Monday morning.",
      answers: ["for"],
      explanation: "The verb 'wait' takes the preposition 'for' before its object."
    },
    {
      text: "I'm afraid I'm not capable ____ lifting that wardrobe on my own.",
      answers: ["of"],
      explanation: "The adjective 'capable' is always followed by 'of' + -ing."
    },
    {
      text: "The washing instructions were printed ____ such small letters that nobody could read them.",
      answers: ["in"],
      explanation: "We write or print 'in' small letters, capital letters, ink, etc."
    },
    {
      text: "Congratulations ____ passing all your exams at the first attempt!",
      answers: ["on"],
      explanation: "We congratulate someone 'on' an achievement; the noun takes the same preposition."
    },
    {
      text: "She's remarkably good ____ solving problems while under pressure.",
      answers: ["at"],
      explanation: "'Good at' + -ing is the standard adjective + preposition pattern for skills."
    },
    {
      text: "The final report must be handed in ____ Friday at the very latest.",
      answers: ["by"],
      explanation: "'By' + time expression means 'no later than' that time."
    },
    {
      text: "The highest peaks in the range are covered ____ snow all year round.",
      answers: ["with", "in"],
      explanation: "'Covered with' or 'covered in' both describe a surface completely coated by something."
    },
    {
      text: "The new law prevents factories ____ dumping chemical waste into rivers.",
      answers: ["from"],
      explanation: "'Prevent somebody/something from + -ing' is a fixed pattern."
    },
    {
      text: "There was something rather strange ____ the way he answered my question.",
      answers: ["about", "in"],
      explanation: "We say there is something strange 'about' (or 'in') the way somebody behaves."
    },
    {
      text: "Tonight's open-air performance has been called ____ because the lead singer has lost her voice.",
      answers: ["off"],
      explanation: "The phrasal verb 'call off' means to cancel an event."
    },
    {
      text: "It took her nearly five years to set ____ her own catering business.",
      answers: ["up"],
      explanation: "'Set up' is a phrasal verb meaning to establish or start a company."
    },
    {
      text: "We've run ____ of milk again, so I'll pop to the corner shop.",
      answers: ["out"],
      explanation: "'Run out of something' means to have none of it left."
    },
    {
      text: "It took him several months to get ____ the shock of failing his final exams.",
      answers: ["over"],
      explanation: "'Get over' means to recover from an illness, shock or disappointment."
    },
    {
      text: "Quite by chance, she bumped ____ an old school friend at the airport.",
      answers: ["into"],
      explanation: "'Bump into somebody' means to meet them unexpectedly."
    },
    {
      text: "Write down my mobile number in ____ you need to contact me during the trip.",
      answers: ["case"],
      explanation: "'In case' introduces a precaution against something that might happen."
    },
    {
      text: "In ____ of feeling unwell all week, she managed to complete the marathon.",
      answers: ["spite"],
      explanation: "'In spite of' + noun/-ing expresses contrast, like 'despite'."
    },
    {
      text: "He repeated the address twice in ____ that everyone could write it down correctly.",
      answers: ["order"],
      explanation: "'In order that' + clause expresses purpose, a formal alternative to 'so that'."
    },
    {
      text: "Leave home early ____ that you don't miss the beginning of the ceremony.",
      answers: ["so"],
      explanation: "'So that' introduces a clause of purpose."
    },
    {
      text: "____ soon as the meeting finishes, I'll give you a ring to let you know the outcome.",
      answers: ["as"],
      explanation: "'As soon as' means 'immediately when' something happens."
    },
    {
      text: "The hotel has a fully equipped gym as ____ as two heated swimming pools.",
      answers: ["well"],
      explanation: "'As well as' means 'in addition to'."
    },
    {
      text: "As ____ as I know, the museum stays closed on Mondays throughout the winter.",
      answers: ["far"],
      explanation: "'As far as I know' is a fixed expression meaning 'to the best of my knowledge'."
    },
    {
      text: "You're welcome to borrow my laptop as ____ as you return it by tomorrow evening.",
      answers: ["long"],
      explanation: "'As long as' means 'on condition that'."
    },
    {
      text: "No ____ how hard I try, I simply cannot remember people's names at parties.",
      answers: ["matter"],
      explanation: "'No matter how' + adjective/adverb means 'however' hard, difficult, etc."
    },
    {
      text: "____ to the weather forecast, the skies should clear up by the weekend.",
      answers: ["according"],
      explanation: "'According to' reports information from another source."
    },
    {
      text: "In ____ to a competitive salary, the position offers generous holiday allowance.",
      answers: ["addition"],
      explanation: "'In addition to' means 'as well as' and is followed by a noun phrase."
    },
    {
      text: "On no ____ should you open the laboratory door while the red light is on.",
      answers: ["account"],
      explanation: "'On no account' is an emphatic way of saying 'never', and it triggers inversion."
    },
    {
      text: "____ tired you feel, you really must finish this application tonight.",
      answers: ["however"],
      explanation: "'However + adjective' means 'no matter how' tired, busy, etc."
    },
    {
      text: "____ you finally decide to do, you know I will support you completely.",
      answers: ["whatever"],
      explanation: "'Whatever' means 'anything that' or 'no matter what'."
    },
    {
      text: "Feel free to drop in ____ you happen to be in the neighbourhood.",
      answers: ["whenever"],
      explanation: "'Whenever' means 'at any time that' something happens."
    },
    {
      text: "____ from a few minor spelling mistakes, your essay is really excellent.",
      answers: ["apart", "aside"],
      explanation: "'Apart from' (or 'aside from') means 'except for' or 'in addition to'."
    },
    {
      text: "We stayed in and watched an old film ____ of going to the party.",
      answers: ["instead"],
      explanation: "'Instead of' + -ing shows one action replacing another."
    },
    {
      text: "It was ____ a dull lecture that half the audience had fallen asleep by the end.",
      answers: ["such"],
      explanation: "'Such a + adjective + noun ... that' expresses result; 'so' would need the adjective alone."
    },
    {
      text: "The sky has gone very dark; it looks ____ we're in for a storm.",
      answers: ["like"],
      explanation: "In informal English, 'it looks like + clause' means 'it seems that'."
    },
    {
      text: "I'd ____ walk to the office than sit in a traffic jam for an hour.",
      answers: ["rather", "sooner"],
      explanation: "'Would rather/sooner + infinitive... than' expresses preference between two actions."
    },
    {
      text: "She had ____ sat down to dinner when the fire alarm went off.",
      answers: ["hardly", "barely", "scarcely"],
      explanation: "'Hardly/barely/scarcely... when' means one event happened immediately after another."
    },
    {
      text: "If ____ I had listened to your advice, none of this would have happened.",
      answers: ["only"],
      explanation: "'If only + past perfect' expresses regret about the past."
    },
    {
      text: "____ the restaurant was extremely expensive, the food itself was rather disappointing.",
      answers: ["although", "though", "while", "whilst"],
      explanation: "These conjunctions introduce a clause of contrast or concession."
    },
    {
      text: "My brother adores living in the city, ____ I much prefer the quiet of the countryside.",
      answers: ["whereas", "while", "whilst", "but"],
      explanation: "'Whereas' and 'while' contrast two facts within one sentence."
    },
    {
      text: "____ waiting for the delayed flight, I managed to read half my novel.",
      answers: ["while", "whilst", "when"],
      explanation: "'While + -ing' describes a background action happening at the same time."
    },
    {
      text: "The school picnic was cancelled ____ of the severe storm warning.",
      answers: ["because"],
      explanation: "'Because of' + noun gives a reason; 'due to' would need two words."
    },
    {
      text: "She has lived abroad ever ____ she graduated from university.",
      answers: ["since"],
      explanation: "'Ever since' marks the starting point of a situation that continues to now."
    },
    {
      text: "Let's shelter in this doorway ____ the rain eases off a little.",
      answers: ["until", "till"],
      explanation: "'Until/till' marks the time when a situation changes."
    },
    {
      text: "____ you have tasted home-made bread, you will never want the supermarket kind again.",
      answers: ["once"],
      explanation: "'Once' as a conjunction means 'as soon as' or 'after'."
    },
    {
      text: "I still can't decide ____ to accept the job offer or stay where I am.",
      answers: ["whether"],
      explanation: "Before 'to + infinitive... or', only 'whether' is possible, not 'if'."
    },
    {
      text: "I wouldn't sign that contract ____ I were you.",
      answers: ["if"],
      explanation: "'If I were you' is the standard second-conditional structure for giving advice."
    },
    {
      text: "The new printer has caused us nothing ____ trouble since the day we bought it.",
      answers: ["but", "except"],
      explanation: "'Nothing but' means 'only'; the machine has caused only trouble."
    },
    {
      text: "She doesn't eat meat, and ____ does she touch fish or seafood.",
      answers: ["nor", "neither"],
      explanation: "'Nor/neither + auxiliary + subject' adds a second negative statement."
    },
    {
      text: "The journey home took far longer ____ we had originally expected.",
      answers: ["than"],
      explanation: "'Than' follows a comparative such as 'longer' to introduce the comparison."
    },
    {
      text: "____ people realise just how much water it takes to produce a single cotton T-shirt.",
      answers: ["few"],
      explanation: "'Few' with a plural noun means 'not many', giving the sentence its negative sense."
    },
    {
      text: "After so many days, there is very ____ hope of finding the missing climbers.",
      answers: ["little"],
      explanation: "'Little' is used with uncountable nouns like 'hope' to mean 'not much'."
    },
    {
      text: "How ____ luggage are you actually planning to take for a weekend trip?",
      answers: ["much"],
      explanation: "'Luggage' is uncountable, so it takes 'how much' rather than 'how many'."
    },
    {
      text: "How ____ times do I have to remind you to lock the back door?",
      answers: ["many"],
      explanation: "'Times' is a countable plural noun, so it takes 'how many'."
    },
    {
      text: "That was quite simply the ____ exciting match I have ever watched live.",
      answers: ["most"],
      explanation: "Long adjectives form the superlative with 'the most'."
    },
    {
      text: "____ of a sudden, every light in the building went out.",
      answers: ["all"],
      explanation: "'All of a sudden' is a fixed expression meaning 'suddenly'."
    },
    {
      text: "____ my parents grew up in tiny fishing villages on the same coast.",
      answers: ["both"],
      explanation: "'Both' refers to two people together and takes a plural verb."
    },
    {
      text: "____ of the two candidates managed to impress the interview panel.",
      answers: ["neither"],
      explanation: "'Neither of' + plural noun means 'not one and not the other' of two."
    },
    {
      text: "You can pay ____ in cash or by credit card, whichever suits you.",
      answers: ["either"],
      explanation: "'Either... or' presents a choice between two alternatives."
    },
    {
      text: "I invited five colleagues to the launch, but ____ of them was able to come.",
      answers: ["none", "neither"],
      explanation: "'None of them' means 'not a single one' of a group; here it refers to the five colleagues."
    },
    {
      text: "There was ____ point in complaining, as the shop had already closed down.",
      answers: ["no", "little"],
      explanation: "'There is no point in + -ing' means an action is useless."
    },
    {
      text: "Would you like ____ more coffee before you set off?",
      answers: ["some", "any"],
      explanation: "'Some' is normal in offers; 'any' is also possible in questions."
    },
    {
      text: "Hardly ____ of the original medieval buildings survived the great fire.",
      answers: ["any"],
      explanation: "'Hardly any' means 'almost none'."
    },
    {
      text: "My nephew isn't old ____ to drive a car on his own yet.",
      answers: ["enough"],
      explanation: "'Enough' follows the adjective in the pattern 'adjective + enough + to-infinitive'."
    },
    {
      text: "During rush hour the buses run ____ ten minutes or so.",
      answers: ["every"],
      explanation: "'Every + time period' expresses how frequently something happens."
    },
    {
      text: "The tickets cost thirty euros ____, including the booking fee.",
      answers: ["each", "apiece"],
      explanation: "'Each' after a price means 'per item or person'."
    },
    {
      text: "If you need a spare pen, I can easily lend you ____.",
      answers: ["one"],
      explanation: "'One' replaces a singular countable noun ('a pen') to avoid repetition."
    },
    {
      text: "The children organised the entire surprise party by ____.",
      answers: ["themselves"],
      explanation: "'By themselves' means without anyone else's help."
    },
    {
      text: "To my surprise, I found ____ agreeing with almost everything she said.",
      answers: ["myself"],
      explanation: "'Find oneself + -ing' describes doing something without intending to."
    },
    {
      text: "Even though they live in different countries, the two sisters phone each ____ every day.",
      answers: ["other"],
      explanation: "'Each other' is the reciprocal pronoun: each sister phones the other one."
    },
    
    
    {
      text: "It was actually my elderly neighbour ____ first noticed the smoke.",
      answers: ["who", "that"],
      explanation: "In a cleft sentence about a person, 'who' or 'that' introduces the relative clause."
    },
    {
      text: "The author, to ____ the prize was awarded last night, gave a moving acceptance speech.",
      answers: ["whom"],
      explanation: "After a preposition in a relative clause, the formal object pronoun 'whom' is required."
    },
    {
      text: "It was so bitterly cold last January ____ the whole lake froze solid.",
      answers: ["that"],
      explanation: "'So + adjective ... that' introduces a result clause."
    },
    {
      text: "____ surprised me most was how calm everybody remained during the evacuation.",
      answers: ["what"],
      explanation: "'What' means 'the thing that' and can act as the subject of the sentence."
    },
    {
      text: "This is the tiny mountain village ____ my grandfather was born.",
      answers: ["where"],
      explanation: "'Where' is the relative adverb used for places."
    },
    {
      text: "2010 was the year ____ we first moved to Canada with the children.",
      answers: ["when", "that"],
      explanation: "'When' is the relative adverb used after time expressions like 'the year'."
    },
    {
      text: "The real reason ____ she resigned so suddenly has never been fully explained.",
      answers: ["why", "that"],
      explanation: "'The reason why/that' introduces an explanation clause."
    },
    {
      text: "____ sooner we set off, the earlier we'll arrive at the coast.",
      answers: ["the"],
      explanation: "The pattern 'the + comparative..., the + comparative...' links two changing quantities."
    },
    {
      text: "In summer we go swimming at the lake at least twice ____ week.",
      answers: ["a", "per", "every", "each"],
      explanation: "'Twice a week' uses the indefinite article to mean 'per week'."
    },
    {
      text: "The whole journey into town took us over ____ hour and a half.",
      answers: ["an"],
      explanation: "'Hour' begins with a vowel sound, so it takes 'an' rather than 'a'."
    },
    {
      text: "All visitors to the factory must ____ accompanied by a member of staff at all times.",
      answers: ["be"],
      explanation: "After the modal 'must', the passive requires the bare infinitive 'be' + past participle."
    },
    
    {
      text: "There ____ several good reasons why the original plan had to be abandoned.",
      answers: ["are", "were"],
      explanation: "'Several reasons' is plural, so 'there' takes a plural verb."
    },
    {
      text: "The stone bridge across the valley ____ built more than two centuries ago.",
      answers: ["was"],
      explanation: "A past passive with a singular subject uses 'was + past participle'."
    },
    {
      text: "If it ____ not for your generous help, I would have missed the deadline.",
      answers: ["were", "was"],
      explanation: "'If it were not for' is a fixed conditional expression meaning 'without'."
    },
    {
      text: "The number of cyclists in the city centre ____ doubled over the past decade.",
      answers: ["has"],
      explanation: "'The number of' is grammatically singular, so it takes 'has', not 'have'."
    },
    {
      text: "By this time next year, she ____ have finished her medical degree.",
      answers: ["will", "should", "may", "might"],
      explanation: "The future perfect 'will have finished' describes completion before a future time."
    },
    {
      text: "Believe it or not, my grandmother ____ still touch her toes at the age of ninety.",
      answers: ["can"],
      explanation: "'Can' expresses present ability; 'still' shows the ability continues now."
    },
    {
      text: "Try as she might, she simply ____ not get the engine to start.",
      answers: ["could"],
      explanation: "'Could not' expresses past inability despite effort."
    },
    {
      text: "Do take a proper map with you; you ____ easily get lost in those narrow streets.",
      answers: ["might", "may", "could", "can"],
      explanation: "'Might/may/could' express the possibility of something happening."
    },
    {
      text: "All passengers ____ fasten their seatbelts before the plane begins to taxi.",
      answers: ["must", "should", "shall"],
      explanation: "'Must' expresses strong obligation, typical of official instructions."
    },
    {
      text: "You look absolutely exhausted; you really ____ try to go to bed earlier.",
      answers: ["should", "must", "ought"],
      explanation: "'Should' gives advice about what is a good idea."
    },
    
    {
      text: "Over two hundred runners took ____ in this year's charity race.",
      answers: ["part"],
      explanation: "'Take part in' is a fixed phrase meaning to participate in an event."
    },
    {
      text: "The graduation ceremony will take ____ in the main hall at midday.",
      answers: ["place"],
      explanation: "'Take place' means to happen, especially of arranged events."
    },
    {
      text: "By ____ of a very simple experiment, the teacher demonstrated how gravity works.",
      answers: ["means", "way"],
      explanation: "'By means of' is a formal expression meaning 'using' or 'with the help of'."
    },
    {
      text: "There's absolutely no ____ I'm swimming in that freezing water.",
      answers: ["way"],
      explanation: "'There's no way' is an emphatic informal expression of refusal or impossibility."
    },
    {
      text: "On ____ of the entire team, I would like to thank you for your support.",
      answers: ["behalf"],
      explanation: "'On behalf of' means representing or in the name of a group."
    },
    {
      text: "How are you getting ____ with your new flatmate these days?",
      answers: ["on", "along"],
      explanation: "'Get on/along with somebody' means to have a good relationship with them."
    },
    {
      text: "Could you turn the music ____ a bit? I'm trying to revise for tomorrow's test.",
      answers: ["down", "off"],
      explanation: "'Turn down' means to reduce the volume of something."
    },
    {
      text: "The thief managed to get ____ before the police reached the scene.",
      answers: ["away"],
      explanation: "'Get away' means to escape."
    },
    {
      text: "Everyone says she takes ____ her mother, both in looks and in temperament.",
      answers: ["after"],
      explanation: "'Take after somebody' means to resemble an older family member."
    },
    
    {
      text: "The prize money was divided equally ____ the two winning teams.",
      answers: ["between"],
      explanation: "'Between' is used when something is shared by two parties."
    },
    {
      text: "Unemployment ____ young people has risen sharply over the last few years.",
      answers: ["among", "amongst"],
      explanation: "'Among(st)' means within a particular group of people."
    },
    
    {
      text: "You should receive a written reply ____ ten working days of your application.",
      answers: ["within", "inside"],
      explanation: "'Within + time period' means before that amount of time has passed."
    },
    {
      text: "She stood up, gathered her papers and left the room ____ saying a single word.",
      answers: ["without"],
      explanation: "'Without + -ing' shows an expected action that did not happen."
    },
    {
      text: "The government's attitude ____ renewable energy has changed dramatically.",
      answers: ["towards", "toward", "to"],
      explanation: "'Attitude towards/to' is the standard noun + preposition combination."
    },
    {
      text: "While clearing out the attic, we came ____ a box of old family photographs.",
      answers: ["across", "upon", "on"],
      explanation: "'Come across' means to find something by chance."
    },
    {
      text: "She went ____ an extremely difficult period after losing her job last spring.",
      answers: ["through"],
      explanation: "'Go through' means to experience something difficult or unpleasant."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part2 = QUESTIONS.part2.concat(BANK);
})();
