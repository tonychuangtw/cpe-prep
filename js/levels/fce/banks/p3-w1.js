/* FCE Prep extra bank: part3 wave 1 */
(function () {
  var BANK = [
    {
      "text": "The ____ of the new bridge took almost three years to complete.",
      "stem": "CONSTRUCT",
      "answers": [
            "construction"
      ],
      "explanation": "A noun is needed after 'the'; the verb CONSTRUCT takes the suffix -ion to form 'construction'."
    },
    {
      "text": "Her sudden ____ from the meeting surprised everyone in the office.",
      "stem": "DISAPPEAR",
      "answers": [
            "disappearance"
      ],
      "explanation": "The gap requires a noun; DISAPPEAR becomes 'disappearance' with the suffix -ance."
    },
    {
      "text": "The doctor was impressed by the speed of the patient's ____.",
      "stem": "RECOVER",
      "answers": [
            "recovery"
      ],
      "explanation": "After a possessive we need a noun; RECOVER forms the noun 'recovery'."
    },
    {
      "text": "There has been a noticeable ____ in air quality since the factory closed.",
      "stem": "IMPROVE",
      "answers": [
            "improvement"
      ],
      "explanation": "A noun is required after the article; IMPROVE takes -ment to form 'improvement'."
    },
    {
      "text": "The ____ of the ancient tomb made headlines around the world.",
      "stem": "DISCOVER",
      "answers": [
            "discovery"
      ],
      "explanation": "A noun is needed as the subject; DISCOVER forms the noun 'discovery'."
    },
    {
      "text": "Scientists measured the ____ of the lake at several different points.",
      "stem": "DEEP",
      "answers": [
            "depth"
      ],
      "explanation": "The adjective DEEP changes to the noun 'depth', with a vowel change and the suffix -th."
    },
    {
      "text": "The ____ between the two towns is about forty kilometres.",
      "stem": "DISTANT",
      "answers": [
            "distance"
      ],
      "explanation": "A noun is required; the adjective DISTANT becomes 'distance'."
    },
    {
      "text": "To everyone's ____, the shy student gave a brilliant speech.",
      "stem": "AMAZE",
      "answers": [
            "amazement"
      ],
      "explanation": "After 'to everyone's' a noun is needed; AMAZE takes -ment to form 'amazement'."
    },
    {
      "text": "His ____ to detail makes him an excellent editor.",
      "stem": "ATTEND",
      "answers": [
            "attention"
      ],
      "explanation": "A noun is needed after the possessive; ATTEND is related to the noun 'attention'."
    },
    {
      "text": "The play was cancelled owing to the ____ of the leading actor.",
      "stem": "ILL",
      "answers": [
            "illness"
      ],
      "explanation": "After 'the' a noun is required; ILL takes the suffix -ness to form 'illness'."
    },
    {
      "text": "The team celebrated wildly after their unexpected ____ in the final.",
      "stem": "SUCCEED",
      "answers": [
            "success"
      ],
      "explanation": "A noun is needed after the possessive adjective; the verb SUCCEED corresponds to the noun 'success'."
    },
    {
      "text": "The museum charges no ____ fee for children under twelve.",
      "stem": "ADMIT",
      "answers": [
            "admission"
      ],
      "explanation": "A noun is used before 'fee'; ADMIT forms the noun 'admission'."
    },
    {
      "text": "The ____ of the rainforest is a serious threat to wildlife.",
      "stem": "DESTROY",
      "answers": [
            "destruction"
      ],
      "explanation": "A noun is needed as the subject; DESTROY corresponds to the noun 'destruction'."
    },
    {
      "text": "Winning the scholarship was a great ____ for such a young musician.",
      "stem": "ACHIEVE",
      "answers": [
            "achievement"
      ],
      "explanation": "A noun follows the article 'a'; ACHIEVE takes -ment to form 'achievement'."
    },
    {
      "text": "We had a long ____ about where to go on holiday.",
      "stem": "DISCUSS",
      "answers": [
            "discussion"
      ],
      "explanation": "A noun is required after the adjective; DISCUSS forms 'discussion' with -ion."
    },
    {
      "text": "The chef takes great ____ in using only local ingredients.",
      "stem": "PROUD",
      "answers": [
            "pride"
      ],
      "explanation": "A noun is needed after 'great'; the adjective PROUD corresponds to the noun 'pride'."
    },
    {
      "text": "Making a good first ____ at an interview is extremely important.",
      "stem": "IMPRESS",
      "answers": [
            "impression"
      ],
      "explanation": "A noun follows the adjective 'first'; IMPRESS forms 'impression'."
    },
    {
      "text": "The hotel apologised for the ____ caused by the building work.",
      "stem": "CONVENIENT",
      "answers": [
            "inconvenience"
      ],
      "explanation": "A negative noun is needed; CONVENIENT takes the prefix in- and becomes the noun 'inconvenience'."
    },
    {
      "text": "Her greatest ____ is that she finds it hard to say no to people.",
      "stem": "WEAK",
      "answers": [
            "weakness"
      ],
      "explanation": "A noun is needed after the superlative; WEAK forms 'weakness' with -ness."
    },
    {
      "text": "The ____ of the city has doubled over the last fifty years.",
      "stem": "POPULATE",
      "answers": [
            "population"
      ],
      "explanation": "A noun is required as the subject; POPULATE forms the noun 'population'."
    },
    {
      "text": "The band's latest album has enjoyed enormous ____ among teenagers.",
      "stem": "POPULAR",
      "answers": [
            "popularity"
      ],
      "explanation": "A noun follows the adjective 'enormous'; POPULAR takes -ity to form 'popularity'."
    },
    {
      "text": "In my ____, the film was far too long and rather boring.",
      "stem": "OPINE",
      "answers": [
            "opinion"
      ],
      "explanation": "The phrase 'in my ____' requires a noun; the verb OPINE corresponds to the noun 'opinion'."
    },
    {
      "text": "The two countries finally signed a peace ____ after years of talks.",
      "stem": "AGREE",
      "answers": [
            "agreement"
      ],
      "explanation": "A noun is needed after 'peace'; AGREE takes -ment to form 'agreement'."
    },
    {
      "text": "The ____ of colour in her paintings is what makes them so striking.",
      "stem": "CHOOSE",
      "answers": [
            "choice"
      ],
      "explanation": "A noun is required after 'the'; the verb CHOOSE corresponds to the noun 'choice'."
    },
    {
      "text": "There is still no scientific ____ for why the birds changed their route.",
      "stem": "EXPLAIN",
      "answers": [
            "explanation"
      ],
      "explanation": "A noun follows the adjective 'scientific'; EXPLAIN forms 'explanation'."
    },
    {
      "text": "The ____ of the town's oldest cinema upset many local residents.",
      "stem": "CLOSE",
      "answers": [
            "closure"
      ],
      "explanation": "A noun is needed as the subject; CLOSE takes -ure to form 'closure'."
    },
    {
      "text": "Applicants must show proof of ____ before starting the job.",
      "stem": "QUALIFY",
      "answers": [
            "qualification",
            "qualifications"
      ],
      "explanation": "A noun is needed after 'proof of'; QUALIFY forms 'qualification(s)' with -ication."
    },
    {
      "text": "The ____ of the online sign-up process attracted many new users.",
      "stem": "SIMPLE",
      "answers": [
            "simplicity"
      ],
      "explanation": "A noun is required after 'the'; SIMPLE becomes 'simplicity' with the suffix -icity."
    },
    {
      "text": "The ____ of the room made it impossible to fit a second bed in.",
      "stem": "NARROW",
      "answers": [
            "narrowness"
      ],
      "explanation": "A noun is needed as the subject; NARROW forms 'narrowness' with -ness."
    },
    {
      "text": "After weeks of ____, the two sides finally reached a deal.",
      "stem": "NEGOTIATE",
      "answers": [
            "negotiation",
            "negotiations"
      ],
      "explanation": "A noun follows 'weeks of'; NEGOTIATE forms 'negotiation(s)' with -ion."
    },
    {
      "text": "Passengers should keep their ____ with them at all times.",
      "stem": "BELONG",
      "answers": [
            "belongings"
      ],
      "explanation": "A plural noun is needed after the possessive; BELONG forms 'belongings', meaning personal possessions."
    },
    {
      "text": "Good ____ between departments helps a company run smoothly.",
      "stem": "COMMUNICATE",
      "answers": [
            "communication"
      ],
      "explanation": "A noun is needed after the adjective 'good'; COMMUNICATE forms 'communication'."
    },
    {
      "text": "My aunt works as a ____ for a firm that designs shopping centres.",
      "stem": "ARCHITECTURE",
      "answers": [
            "architect"
      ],
      "explanation": "A person noun is needed after 'a'; ARCHITECTURE refers to the field, while 'architect' is the professional."
    },
    {
      "text": "The ____ asked the orchestra to play the final section again.",
      "stem": "CONDUCT",
      "answers": [
            "conductor"
      ],
      "explanation": "A person noun is required as the subject; CONDUCT takes -or to form 'conductor'."
    },
    {
      "text": "Every ____ in the race receives a medal, whatever their finishing time.",
      "stem": "COMPETE",
      "answers": [
            "competitor"
      ],
      "explanation": "A person noun is needed after 'every'; COMPETE forms 'competitor' with -itor."
    },
    {
      "text": "She dreams of becoming a professional ____ and performing on stage.",
      "stem": "MUSIC",
      "answers": [
            "musician"
      ],
      "explanation": "A person noun follows the adjective; MUSIC takes -ian to form 'musician'."
    },
    {
      "text": "Thousands of ____ visit the castle every summer.",
      "stem": "TOUR",
      "answers": [
            "tourists"
      ],
      "explanation": "A plural person noun is needed after 'thousands of'; TOUR takes -ist to form 'tourists'."
    },
    {
      "text": "The prize is awarded each year to a promising young ____.",
      "stem": "SCIENCE",
      "answers": [
            "scientist"
      ],
      "explanation": "A person noun is needed after the adjectives; SCIENCE takes -tist to form 'scientist'."
    },
    {
      "text": "As a keen ____, Marco spends every weekend taking pictures of birds.",
      "stem": "PHOTOGRAPH",
      "answers": [
            "photographer"
      ],
      "explanation": "A person noun follows 'a keen'; PHOTOGRAPH takes -er to form 'photographer'."
    },
    {
      "text": "The ____ of the charity gave an inspiring speech at the dinner.",
      "stem": "FOUND",
      "answers": [
            "founder"
      ],
      "explanation": "A person noun is needed after 'the'; FOUND takes -er to form 'founder'."
    },
    {
      "text": "Cycling without a helmet on these roads is extremely ____.",
      "stem": "DANGER",
      "answers": [
            "dangerous"
      ],
      "explanation": "An adjective is needed after 'extremely'; DANGER takes -ous to form 'dangerous'."
    },
    {
      "text": "It was very ____ of you to remember my birthday.",
      "stem": "THOUGHT",
      "answers": [
            "thoughtful"
      ],
      "explanation": "An adjective is needed after 'very'; THOUGHT takes -ful to form 'thoughtful'."
    },
    {
      "text": "The scenery in the mountains was absolutely ____.",
      "stem": "SPECTACLE",
      "answers": [
            "spectacular"
      ],
      "explanation": "An adjective is needed after 'absolutely'; SPECTACLE forms the adjective 'spectacular'."
    },
    {
      "text": "Fresh vegetables are far more ____ than tinned ones.",
      "stem": "NUTRITION",
      "answers": [
            "nutritious"
      ],
      "explanation": "An adjective is required in the comparison; NUTRITION forms 'nutritious' with -ous."
    },
    {
      "text": "We were ____ to hear that the concert had sold out in an hour.",
      "stem": "ASTONISH",
      "answers": [
            "astonished"
      ],
      "explanation": "An -ed adjective describes how the people felt; ASTONISH becomes 'astonished'."
    },
    {
      "text": "This umbrella folds up small enough to fit in a pocket, which makes it very ____.",
      "stem": "PRACTICE",
      "answers": [
            "practical"
      ],
      "explanation": "An adjective is needed after 'very'; PRACTICE corresponds to the adjective 'practical'."
    },
    {
      "text": "The lecture was so ____ that several students fell asleep.",
      "stem": "BORE",
      "answers": [
            "boring"
      ],
      "explanation": "An -ing adjective describes the lecture as the cause of boredom; BORE becomes 'boring'."
    },
    {
      "text": "Solar panels are becoming an increasingly ____ way to power homes.",
      "stem": "AFFORD",
      "answers": [
            "affordable"
      ],
      "explanation": "An adjective is needed before 'way'; AFFORD takes -able to form 'affordable'."
    },
    {
      "text": "My grandfather is still remarkably ____ for a man of ninety.",
      "stem": "ENERGY",
      "answers": [
            "energetic"
      ],
      "explanation": "An adjective follows 'remarkably'; ENERGY takes -etic to form 'energetic'."
    },
    {
      "text": "The children were too ____ to sit still during the long ceremony.",
      "stem": "EXCITE",
      "answers": [
            "excited"
      ],
      "explanation": "An -ed adjective describes the children's feelings; EXCITE becomes 'excited'."
    },
    {
      "text": "This software is not ____ with older versions of the operating system.",
      "stem": "COMPATIBILITY",
      "answers": [
            "compatible"
      ],
      "explanation": "An adjective is needed after 'not'; the noun COMPATIBILITY corresponds to the adjective 'compatible'."
    },
    {
      "text": "Volunteers found the work tiring but deeply ____.",
      "stem": "REWARD",
      "answers": [
            "rewarding"
      ],
      "explanation": "An -ing adjective describes the work; REWARD becomes 'rewarding'."
    },
    {
      "text": "Wear ____ clothing, as we will be walking through thick forest.",
      "stem": "PROTECT",
      "answers": [
            "protective"
      ],
      "explanation": "An adjective is needed before 'clothing'; PROTECT takes -ive to form 'protective'."
    },
    {
      "text": "Her ____ smile immediately made the nervous students relax.",
      "stem": "FRIEND",
      "answers": [
            "friendly"
      ],
      "explanation": "An adjective is needed before 'smile'; FRIEND takes -ly to form the adjective 'friendly'."
    },
    {
      "text": "The recipe is quick, cheap and surprisingly ____ to prepare.",
      "stem": "EASE",
      "answers": [
            "easy"
      ],
      "explanation": "An adjective is needed in the list after 'surprisingly'; the noun EASE corresponds to the adjective 'easy'."
    },
    {
      "text": "Owning a car is not really ____ if you live in the city centre.",
      "stem": "NECESSITY",
      "answers": [
            "necessary"
      ],
      "explanation": "An adjective is needed after 'really'; the noun NECESSITY corresponds to the adjective 'necessary'."
    },
    {
      "text": "It is ____ to book tickets online rather than queue at the station.",
      "stem": "PREFER",
      "answers": [
            "preferable"
      ],
      "explanation": "An adjective is needed after 'is'; PREFER takes -able to form 'preferable'."
    },
    {
      "text": "The village is famous for its ____ stone cottages.",
      "stem": "TRADITION",
      "answers": [
            "traditional"
      ],
      "explanation": "An adjective is needed before 'stone cottages'; TRADITION takes -al to form 'traditional'."
    },
    {
      "text": "Thanks to her ____ nature, Ana makes friends wherever she goes.",
      "stem": "SOCIETY",
      "answers": [
            "sociable"
      ],
      "explanation": "An adjective is needed before 'nature'; SOCIETY corresponds to the adjective 'sociable'."
    },
    {
      "text": "The desert climate makes farming almost ____ in that region.",
      "stem": "POSSIBILITY",
      "answers": [
            "impossible"
      ],
      "explanation": "A negative adjective fits the sense; the noun POSSIBILITY corresponds to the adjective form with the prefix im-, 'impossible'."
    },
    {
      "text": "Getting eight hours' sleep is ____ for concentration at school.",
      "stem": "BENEFIT",
      "answers": [
            "beneficial"
      ],
      "explanation": "An adjective is needed after 'is'; BENEFIT forms 'beneficial' with -ial."
    },
    {
      "text": "The actor gave a highly ____ performance as the ageing king.",
      "stem": "CONVINCE",
      "answers": [
            "convincing"
      ],
      "explanation": "An -ing adjective describes the performance; CONVINCE becomes 'convincing'."
    },
    {
      "text": "The area is ____ for its spicy street food.",
      "stem": "FAME",
      "answers": [
            "famous"
      ],
      "explanation": "An adjective is needed after 'is'; the noun FAME corresponds to the adjective 'famous'."
    },
    {
      "text": "Please keep your phone switched off; the alarm system is very ____ to signals.",
      "stem": "SENSE",
      "answers": [
            "sensitive"
      ],
      "explanation": "An adjective is needed after 'very'; SENSE takes -itive to form 'sensitive'."
    },
    {
      "text": "It is ____ to park your car on this side of the street.",
      "stem": "LEGAL",
      "answers": [
            "illegal"
      ],
      "explanation": "The sense requires the opposite meaning; LEGAL takes the prefix il- to form 'illegal'."
    },
    {
      "text": "I found it ____ that he had walked all that way in one day.",
      "stem": "BELIEVE",
      "answers": [
            "unbelievable"
      ],
      "explanation": "An adjective expressing 'hard to believe' is needed; BELIEVE takes un- and -able to form 'unbelievable'."
    },
    {
      "text": "The referee's decision seemed completely ____ to the home fans.",
      "stem": "FAIR",
      "answers": [
            "unfair"
      ],
      "explanation": "The context of complaining fans needs a negative adjective; FAIR takes the prefix un-."
    },
    {
      "text": "He strongly ____ with the plan to knock down the old theatre.",
      "stem": "AGREE",
      "answers": [
            "disagrees",
            "disagreed"
      ],
      "explanation": "The verb needs the negative prefix dis- and third-person or past form: 'disagrees' or 'disagreed'."
    },
    {
      "text": "It would be ____ of me to promise something I cannot deliver.",
      "stem": "HONEST",
      "answers": [
            "dishonest"
      ],
      "explanation": "The meaning requires the opposite of honest; HONEST takes the prefix dis-."
    },
    {
      "text": "The manager thought the deadline was totally ____ given the size of the project.",
      "stem": "REALISTIC",
      "answers": [
            "unrealistic"
      ],
      "explanation": "The complaint requires a negative adjective; REALISTIC takes the prefix un-."
    },
    {
      "text": "Many people feel it is ____ to talk loudly on the phone in a quiet carriage.",
      "stem": "POLITE",
      "answers": [
            "impolite"
      ],
      "explanation": "The negative prefix im- is used before 'p'; POLITE becomes 'impolite'."
    },
    {
      "text": "His handwriting is so untidy that it is almost ____ to read.",
      "stem": "POSSIBLE",
      "answers": [
            "impossible"
      ],
      "explanation": "The sentence needs the opposite meaning; POSSIBLE takes the prefix im- to form 'impossible'."
    },
    {
      "text": "The bus service here is so ____ that I always leave home early.",
      "stem": "RELY",
      "answers": [
            "unreliable"
      ],
      "explanation": "A negative adjective explains leaving early; RELY takes un- and -able to form 'unreliable'."
    },
    {
      "text": "I must have ____ the instructions, because my cake turned out flat.",
      "stem": "UNDERSTAND",
      "answers": [
            "misunderstood"
      ],
      "explanation": "A past participle with the prefix mis- (meaning 'wrongly') is needed: 'misunderstood'."
    },
    {
      "text": "Some passengers were ____ with the airline's response to the delay.",
      "stem": "SATISFY",
      "answers": [
            "dissatisfied",
            "unsatisfied"
      ],
      "explanation": "A negative -ed adjective describes the passengers' feelings; SATISFY takes dis- (or un-) and -ied."
    },
    {
      "text": "It was very ____ of them to arrive an hour late without phoning.",
      "stem": "CONSIDER",
      "answers": [
            "inconsiderate"
      ],
      "explanation": "A negative adjective is needed to criticise the behaviour; CONSIDER forms 'inconsiderate' with in- and -ate."
    },
    {
      "text": "Despite hours of practice, his pronunciation remained ____ to most listeners.",
      "stem": "CLEAR",
      "answers": [
            "unclear"
      ],
      "explanation": "The word 'despite' signals a negative outcome; CLEAR takes the prefix un-."
    },
    {
      "text": "Cheap plastic toys often prove ____ and break within days.",
      "stem": "SATISFACTORY",
      "answers": [
            "unsatisfactory"
      ],
      "explanation": "A negative adjective matches 'break within days'; SATISFACTORY takes the prefix un-."
    },
    {
      "text": "The witness's story was full of ____ statements that did not match the facts.",
      "stem": "ACCURATE",
      "answers": [
            "inaccurate"
      ],
      "explanation": "A negative adjective is needed since the statements did not match the facts; ACCURATE takes in-."
    },
    {
      "text": "She felt her boss constantly ____ her contribution to the project.",
      "stem": "ESTIMATE",
      "answers": [
            "underestimated"
      ],
      "explanation": "A past-tense verb meaning 'valued too little' is needed; ESTIMATE takes the prefix under-."
    },
    {
      "text": "The fire spread ____ through the dry forest.",
      "stem": "RAPID",
      "answers": [
            "rapidly"
      ],
      "explanation": "An adverb is needed to modify the verb 'spread'; RAPID takes -ly to form 'rapidly'."
    },
    {
      "text": "____, nobody was hurt when the shelf collapsed.",
      "stem": "FORTUNE",
      "answers": [
            "fortunately"
      ],
      "explanation": "A sentence adverb is needed; FORTUNE forms the adjective 'fortunate' and then the adverb 'fortunately'."
    },
    {
      "text": "She answered every question ____ and passed the interview with ease.",
      "stem": "CONFIDENT",
      "answers": [
            "confidently"
      ],
      "explanation": "An adverb is needed to describe how she answered; CONFIDENT takes -ly."
    },
    {
      "text": "The old man crossed the icy road slowly and ____.",
      "stem": "CAUTION",
      "answers": [
            "cautiously"
      ],
      "explanation": "An adverb parallel to 'slowly' is required; CAUTION forms 'cautious' and then 'cautiously'."
    },
    {
      "text": "The tickets are checked ____ at the entrance, so don't lose yours.",
      "stem": "AUTOMATIC",
      "answers": [
            "automatically"
      ],
      "explanation": "An adverb is needed to modify 'are checked'; AUTOMATIC takes -ally to form 'automatically'."
    },
    {
      "text": "He apologised and admitted he had behaved ____ at the party.",
      "stem": "BAD",
      "answers": [
            "badly"
      ],
      "explanation": "An adverb is needed after 'behaved'; BAD takes -ly to form 'badly'."
    },
    {
      "text": "____, the twins chose completely different careers.",
      "stem": "SURPRISE",
      "answers": [
            "surprisingly"
      ],
      "explanation": "A sentence adverb is needed; SURPRISE forms 'surprising' and then the adverb 'surprisingly'."
    },
    {
      "text": "The dancers moved so ____ that the audience could not look away.",
      "stem": "GRACE",
      "answers": [
            "gracefully"
      ],
      "explanation": "An adverb is needed after 'so' to modify 'moved'; GRACE forms 'graceful' and then 'gracefully'."
    },
    {
      "text": "The results of the experiment were recorded ____ in a shared file.",
      "stem": "DAY",
      "answers": [
            "daily"
      ],
      "explanation": "An adverb of frequency is needed; DAY takes -ly to form 'daily'."
    },
    {
      "text": "____ for us, the last bus had already left when we reached the stop.",
      "stem": "LUCK",
      "answers": [
            "unluckily"
      ],
      "explanation": "A negative sentence adverb fits the bad outcome; LUCK forms 'unlucky' and then 'unluckily'."
    },
    {
      "text": "The mechanic examined the engine ____ before giving his opinion.",
      "stem": "THOROUGH",
      "answers": [
            "thoroughly"
      ],
      "explanation": "An adverb is needed to modify 'examined'; THOROUGH takes -ly."
    },
    {
      "text": "____ , the meeting has been moved to Friday, so check your diary.",
      "stem": "APPARENT",
      "answers": [
            "apparently"
      ],
      "explanation": "A sentence adverb is needed at the start; APPARENT takes -ly to form 'apparently'."
    },
    {
      "text": "The airline plans to ____ its fleet by adding twenty new aircraft.",
      "stem": "LARGE",
      "answers": [
            "enlarge"
      ],
      "explanation": "A verb is needed after 'to'; LARGE takes the prefix en- to form the verb 'enlarge'."
    },
    {
      "text": "The council wants to ____ the town centre by planting trees and adding benches.",
      "stem": "BEAUTY",
      "answers": [
            "beautify"
      ],
      "explanation": "A verb is needed after 'to'; BEAUTY takes -ify to form the verb 'beautify'."
    },
    {
      "text": "New safety measures were introduced to ____ the number of accidents.",
      "stem": "MINIMUM",
      "answers": [
            "minimise",
            "minimize"
      ],
      "explanation": "A verb is needed after 'to'; MINIMUM forms the verb 'minimise/minimize'."
    },
    {
      "text": "You should ____ your essay before handing it in, as small errors are easy to miss.",
      "stem": "SHORT",
      "answers": [
            "shorten"
      ],
      "explanation": "A verb is needed after 'should'; SHORT takes the suffix -en to form 'shorten'."
    },
    {
      "text": "Doctors advise patients to ____ their salt intake gradually.",
      "stem": "REDUCTION",
      "answers": [
            "reduce"
      ],
      "explanation": "A verb is needed after 'to'; the noun REDUCTION corresponds to the verb 'reduce'."
    },
    {
      "text": "Bright colours were used to ____ the safety signs in the factory.",
      "stem": "EMPHASIS",
      "answers": [
            "emphasise",
            "emphasize"
      ],
      "explanation": "A verb is needed after 'to'; the noun EMPHASIS forms the verb 'emphasise/emphasize'."
    },
    {
      "text": "The museum decided to ____ its opening hours during the summer festival.",
      "stem": "LONG",
      "answers": [
            "lengthen"
      ],
      "explanation": "A verb is needed after 'to'; LONG becomes 'lengthen', with a vowel change and the suffix -en."
    },
    {
      "text": "The company will ____ the winner of the competition by email next week.",
      "stem": "NOTICE",
      "answers": [
            "notify"
      ],
      "explanation": "A verb is needed after 'will'; NOTICE corresponds to the verb 'notify'."
    },
    {
      "text": "The staff were praised for their ____ during the power cut.",
      "stem": "CALM",
      "answers": [
            "calmness"
      ],
      "explanation": "A noun is needed after the possessive; CALM takes -ness to form 'calmness'."
    },
    {
      "text": "There is a ____ that the concert will be moved indoors if it rains.",
      "stem": "POSSIBLE",
      "answers": [
            "possibility"
      ],
      "explanation": "A noun is needed after the article; POSSIBLE takes -ity to form 'possibility'."
    },
    {
      "text": "Wearing a seatbelt greatly increases your chances of ____ in a crash.",
      "stem": "SURVIVE",
      "answers": [
            "survival",
            "surviving"
      ],
      "explanation": "A noun (or gerund) is needed after 'of'; SURVIVE forms the noun 'survival'."
    },
    {
      "text": "The hotel room was small but ____ clean.",
      "stem": "SPOT",
      "answers": [
            "spotlessly"
      ],
      "explanation": "An adverb is needed to modify the adjective 'clean'; SPOT forms 'spotless' and then 'spotlessly'."
    },
    {
      "text": "After the long flight, a hot shower felt ____.",
      "stem": "WONDER",
      "answers": [
            "wonderful"
      ],
      "explanation": "An adjective is needed after 'felt'; WONDER takes -ful to form 'wonderful'."
    },
    {
      "text": "The trainer said my ____ to give up is my greatest strength.",
      "stem": "REFUSE",
      "answers": [
            "refusal"
      ],
      "explanation": "A noun is needed after the possessive; REFUSE takes -al to form 'refusal'."
    },
    {
      "text": "The ____ old map turned out to be worth thousands of pounds.",
      "stem": "VALUE",
      "answers": [
            "valuable"
      ],
      "explanation": "An adjective is needed before 'old map'; VALUE takes -able to form 'valuable'."
    },
    {
      "text": "The judges praised the ____ of the young designer's ideas.",
      "stem": "ORIGIN",
      "answers": [
            "originality"
      ],
      "explanation": "A noun is needed after 'the'; ORIGIN forms 'original' and then the noun 'originality'."
    },
    {
      "text": "The path along the cliff is quite ____ in wet weather, so wear good boots.",
      "stem": "SLIP",
      "answers": [
            "slippery"
      ],
      "explanation": "An adjective is needed after 'quite'; SLIP takes -pery to form 'slippery'."
    },
    {
      "text": "The mountain village is only ____ by a narrow winding road.",
      "stem": "ACCESS",
      "answers": [
            "accessible"
      ],
      "explanation": "An adjective is needed after 'is'; ACCESS takes -ible to form 'accessible'."
    },
    {
      "text": "The chef's ____ dish combines chocolate with fresh chilli.",
      "stem": "SIGN",
      "answers": [
            "signature"
      ],
      "explanation": "A noun acting as a modifier is needed before 'dish'; SIGN forms 'signature', meaning characteristic."
    },
    {
      "text": "The ____ of volunteers at the food bank has doubled since January.",
      "stem": "WILLING",
      "answers": [
            "willingness"
      ],
      "explanation": "A noun is needed after 'the'; WILLING takes -ness to form 'willingness'."
    },
    {
      "text": "The two paintings look identical, but an expert can spot the ____ at once.",
      "stem": "DIFFER",
      "answers": [
            "difference",
            "differences"
      ],
      "explanation": "A noun is needed after 'the'; DIFFER takes -ence to form 'difference(s)'."
    },
    {
      "text": "The apartment's main ____ is its view over the harbour.",
      "stem": "ATTRACT",
      "answers": [
            "attraction"
      ],
      "explanation": "A noun is needed after the adjective; ATTRACT takes -ion to form 'attraction'."
    },
    {
      "text": "It was pure ____ that we met again at the same airport five years later.",
      "stem": "COINCIDE",
      "answers": [
            "coincidence"
      ],
      "explanation": "A noun is needed after 'pure'; COINCIDE takes -nce to form 'coincidence'."
    },
    {
      "text": "The film's ____ scenes were shot on a remote Icelandic beach.",
      "stem": "MEMORY",
      "answers": [
            "memorable"
      ],
      "explanation": "An adjective is needed before 'scenes'; MEMORY corresponds to the adjective 'memorable'."
    },
    {
      "text": "Employees receive extra ____ for working at weekends.",
      "stem": "PAY",
      "answers": [
            "payment",
            "payments"
      ],
      "explanation": "A noun is needed after 'extra'; PAY takes -ment to form 'payment(s)'."
    },
    {
      "text": "The tour guide's ____ of the temple's history kept everyone interested.",
      "stem": "KNOW",
      "answers": [
            "knowledge"
      ],
      "explanation": "A noun is needed after the possessive; KNOW forms the noun 'knowledge'."
    },
    {
      "text": "The town council has approved the ____ of the old swimming pool.",
      "stem": "EXPAND",
      "answers": [
            "expansion"
      ],
      "explanation": "A noun is needed after 'the'; EXPAND takes -sion to form 'expansion'."
    },
    {
      "text": "The article gives a ____ account of life aboard a fishing boat.",
      "stem": "FASCINATE",
      "answers": [
            "fascinating"
      ],
      "explanation": "An -ing adjective is needed before 'account'; FASCINATE becomes 'fascinating'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
