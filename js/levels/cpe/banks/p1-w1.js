/* CPE Prep extra bank: part1 wave 1 */
(function () {
  var BANK = [
    {
      text: "In the wake of the scandal, the regulator was ____ with complaints from disgruntled investors.",
      options: ["showered", "inundated", "drenched", "submerged"],
      answer: 1,
      explanation: "'Inundated with complaints' is the standard collocation for receiving an overwhelming number. 'Showered with' pairs with praise or gifts, while 'drenched' and 'submerged' are literal terms for liquid."
    },
    {
      text: "The two software systems are, to all intents and ____, identical.",
      options: ["ends", "aims", "goals", "purposes"],
      answer: 3,
      explanation: "'To all intents and purposes' is the fixed phrase meaning 'in every practical sense'. None of the other nouns can replace 'purposes' in this binomial expression."
    },
    {
      text: "Any climber who ignores the weather forecast ____ the risk of being stranded above the snowline.",
      options: ["draws", "bears", "runs", "carries"],
      answer: 2,
      explanation: "'Run the risk of' is the fixed collocation meaning to expose oneself to danger. We 'bear' costs and 'carry' burdens, but risk in this structure takes 'run'; 'draw a risk' is not idiomatic."
    },
    {
      text: "Her early enthusiasm for the course gradually ____ off as the term progressed.",
      options: ["cooled", "died", "fell", "tailed"],
      answer: 3,
      explanation: "'Tail off' means to diminish gradually in amount or intensity. Enthusiasm can 'cool' or 'die down', but 'cooled off' applies to people or tempers, 'died off' is used of populations, and 'fell off' takes no adverb here without sounding unidiomatic."
    },
    {
      text: "The sheer diversity of the findings militates ____ any simple interpretation of the data.",
      options: ["against", "towards", "for", "upon"],
      answer: 0,
      explanation: "'Militate against' is the fixed verb-preposition pairing meaning to make something unlikely or difficult. The verb does not combine with 'towards', 'for' or 'upon'."
    },
    {
      text: "Given the polls, the outcome of the referendum was a ____ conclusion weeks before the vote.",
      options: ["settled", "foregone", "decided", "assured"],
      answer: 1,
      explanation: "'A foregone conclusion' is the fixed expression for a result regarded as inevitable in advance. 'Settled', 'decided' and 'assured' convey certainty but do not form this idiom with 'conclusion'."
    },
    {
      text: "With a hostile takeover in the ____, the board convened an emergency meeting.",
      options: ["horizon", "brink", "offing", "verge"],
      answer: 2,
      explanation: "'In the offing' means likely to happen soon. 'Horizon' requires 'on the horizon', and 'brink' and 'verge' take 'on the brink/verge of'."
    },
    {
      text: "Critics argue that the reform merely papers ____ the cracks in the welfare system.",
      options: ["up", "across", "over", "down"],
      answer: 2,
      explanation: "'Paper over the cracks' is the idiom meaning to hide problems superficially rather than solve them. The phrasal verb is fixed with 'over'; the other particles do not form the idiom."
    },
    {
      text: "The twins are so alike that even their mother sometimes cannot ____ them apart.",
      options: ["say", "tell", "speak", "talk"],
      answer: 1,
      explanation: "'Tell apart' is the phrasal verb meaning to distinguish between two similar people or things. 'Say', 'speak' and 'talk' never combine with 'apart' in this sense."
    },
    {
      text: "She rose from the typing pool to the boardroom ____ dint of sheer persistence.",
      options: ["in", "through", "with", "by"],
      answer: 3,
      explanation: "'By dint of' is the fixed phrase meaning 'by means of' or 'through the force of'. No other preposition can introduce 'dint'."
    },
    {
      text: "The discovery of the second manuscript calls into ____ everything scholars believed about the poem's authorship.",
      options: ["doubt", "question", "dispute", "debate"],
      answer: 1,
      explanation: "'Call into question' is the fixed expression meaning to cause something to be doubted. We 'cast doubt on' something, but the structure with 'call into' requires 'question'."
    },
    {
      text: "Insiders now admit the expedition was doomed from the ____.",
      options: ["outset", "onset", "offset", "upshot"],
      answer: 0,
      explanation: "'From the outset' means from the very beginning of an undertaking. 'Onset' is used of unpleasant things beginning ('the onset of winter'), while 'offset' and 'upshot' have unrelated meanings."
    },
    {
      text: "Several cabinet colleagues privately ____ doubts about the chancellor's figures.",
      options: ["harboured", "housed", "sheltered", "lodged"],
      answer: 0,
      explanation: "'Harbour doubts' is the collocation for holding doubts in one's mind over time. 'House', 'shelter' and 'lodge' share the literal sense of accommodation but do not collocate with 'doubts'."
    },
    {
      text: "Months of simmering resentment finally came to a ____ when the pay cuts were announced.",
      options: ["peak", "head", "point", "climax"],
      answer: 1,
      explanation: "'Come to a head' is the idiom meaning a situation reaches a crisis point demanding action. 'Peak', 'point' and 'climax' express culmination but do not form this fixed expression."
    },
    {
      text: "Satellite imagery confirms that the ice shelf is thinning at an alarming ____.",
      options: ["rate", "ratio", "tempo", "measure"],
      answer: 0,
      explanation: "'At an alarming rate' is the standard collocation for worrying speed of change. 'Ratio' expresses proportion, 'tempo' is chiefly musical, and 'measure' does not collocate with 'alarming' in this pattern."
    },
    {
      text: "The archduke's assassination set ____ a chain of events that engulfed the entire continent.",
      options: ["off", "up", "out", "about"],
      answer: 0,
      explanation: "'Set off' means to trigger or initiate a sequence of events. 'Set up' means to establish, 'set out' means to begin a journey or state something, and 'set about' means to start tackling a task."
    },
    {
      text: "A less experienced performer might have been rattled by the heckling, but she took it in her ____.",
      options: ["step", "stride", "pace", "gait"],
      answer: 1,
      explanation: "'Take something in one's stride' is the idiom meaning to deal with a difficulty calmly. 'Step', 'pace' and 'gait' are near-synonyms of 'stride' but cannot replace it in the fixed phrase."
    },
    {
      text: "Most of the lecturer's allusions went straight ____ the students' heads.",
      options: ["above", "over", "past", "beyond"],
      answer: 1,
      explanation: "'Go over someone's head' is the idiom meaning to be too difficult for someone to understand. 'Above', 'past' and 'beyond' are spatially plausible but do not form the idiom."
    },
    {
      text: "Despite the region's mineral wealth, millions of its inhabitants still live in ____ poverty.",
      options: ["abject", "utter", "downright", "sheer"],
      answer: 0,
      explanation: "'Abject poverty' is the fixed collocation for the most extreme and degrading poverty. 'Utter', 'downright' and 'sheer' are intensifiers but do not conventionally modify 'poverty'."
    },
    {
      text: "When the 'unsinkable' venture collapsed within a year, its cheerleaders were forced to eat their ____.",
      options: ["speech", "claims", "words", "tongue"],
      answer: 2,
      explanation: "'Eat one's words' is the idiom meaning to admit that what one said was wrong. 'Hold one's tongue' is a different idiom, and 'speech' and 'claims' do not combine with 'eat'."
    },
    {
      text: "The letters on the gravestone are so worn that I can barely ____ out the name.",
      options: ["figure", "work", "puzzle", "make"],
      answer: 3,
      explanation: "'Make out' means to manage to see or read something with difficulty. 'Figure out', 'work out' and 'puzzle out' all mean to solve by reasoning, which does not fit deciphering faint letters by sight."
    },
    {
      text: "The distillery has ____ out a lucrative niche for itself in the Asian market.",
      options: ["chiselled", "carved", "sculpted", "etched"],
      answer: 1,
      explanation: "'Carve out a niche' is the fixed metaphor for establishing a distinctive position through effort. 'Chiselled', 'sculpted' and 'etched' are literal cutting verbs that do not form this idiom."
    },
    {
      text: "She begged the council to reconsider the demolition order, but to no ____.",
      options: ["avail", "gain", "worth", "result"],
      answer: 0,
      explanation: "'To no avail' is the fixed phrase meaning without success. 'Gain', 'worth' and 'result' cannot follow 'to no' in this idiomatic pattern."
    },
    {
      text: "The unearthed correspondence ____ considerable credence to the theory that the two composers collaborated.",
      options: ["gives", "lends", "offers", "grants"],
      answer: 1,
      explanation: "'Lend credence to' is the collocation meaning to make a theory more believable. 'Give credence to' means to believe something (with a person as subject), while 'offer' and 'grant' do not collocate with 'credence'."
    },
    {
      text: "Absorbed in his crossword, he remained ____ unaware of the chaos unfolding around him.",
      options: ["blissfully", "gladly", "merrily", "cheerfully"],
      answer: 0,
      explanation: "'Blissfully unaware' is the fixed collocation for happy ignorance of something one ought to notice. 'Gladly', 'merrily' and 'cheerfully' describe deliberate cheerful action, not an unconscious state."
    },
    {
      text: "It ____ without saying that all submissions will be treated in the strictest confidence.",
      options: ["comes", "stands", "goes", "passes"],
      answer: 2,
      explanation: "'It goes without saying' is the fixed expression meaning something is so obvious it need not be stated. The other verbs cannot substitute in this idiom."
    },
    {
      text: "Despite persistent questioning, the minister refused to be ____ on the timing of the election.",
      options: ["dragged", "pulled", "lured", "drawn"],
      answer: 3,
      explanation: "'Refuse to be drawn on' is the fixed journalistic expression for declining to be provoked into commenting. 'Dragged', 'pulled' and 'lured' convey coercion but do not form this idiom."
    },
    {
      text: "After the third interruption her patience finally ____ out and she abandoned the seminar.",
      options: ["held", "wore", "ran", "died"],
      answer: 2,
      explanation: "'Patience runs out' is the standard collocation for patience becoming exhausted. Patience 'wears thin' rather than 'wears out', 'held out' would mean it lasted, and 'died out' is used of species and customs."
    },
    {
      text: "The fixture was cancelled on the ____ of safety, following crowd trouble at the previous match.",
      options: ["grounds", "reasons", "basis", "causes"],
      answer: 0,
      explanation: "'On the grounds of' is the fixed phrase for citing a justification. 'Basis' requires 'on the basis of' with a fuller complement, and 'reasons' and 'causes' do not enter this construction."
    },
    {
      text: "The trilogy ____ heavily on the author's years as a war correspondent.",
      options: ["leans", "rests", "pulls", "draws"],
      answer: 3,
      explanation: "'Draw on' means to use experience or material as a source, the standard collocation for a writer's inspiration. 'Lean on' and 'rest on' mean to depend on for support, and 'pull on' is not used figuratively this way."
    },
    {
      text: "Restoration of the frescoes could take decades, though I wouldn't like to ____ a guess at the final cost.",
      options: ["gamble", "hazard", "stake", "wager"],
      answer: 1,
      explanation: "'Hazard a guess' is the fixed collocation meaning to venture a tentative estimate. 'Gamble', 'stake' and 'wager' all relate to betting but never combine with 'a guess'."
    },
    {
      text: "Realising they were hopelessly outnumbered, the protesters beat a hasty ____.",
      options: ["exit", "escape", "retreat", "withdrawal"],
      answer: 2,
      explanation: "'Beat a (hasty) retreat' is the idiom for withdrawing quickly from a difficult situation. 'Exit', 'escape' and 'withdrawal' are semantically close but do not collocate with 'beat'."
    },
    {
      text: "____ from resolving the border dispute, the tribunal's ruling has inflamed it further.",
      options: ["Far", "Away", "Aside", "Apart"],
      answer: 0,
      explanation: "'Far from doing something' is the fixed structure meaning 'instead of' or 'not at all'. 'Apart from' and 'aside from' mean 'except for', and 'away from' is purely spatial."
    },
    {
      text: "A single canvas from her blue period can now fetch ____ of ten million dollars.",
      options: ["excess", "beyond", "above", "upwards"],
      answer: 3,
      explanation: "'Upwards of' means more than a stated amount. 'Excess' requires 'in excess of', while 'beyond' and 'above' cannot combine with 'of' in this pattern."
    },
    {
      text: "He has achieved more than any of his rivals, yet he is the last person to ____ his own trumpet.",
      options: ["sound", "toot", "blow", "ring"],
      answer: 2,
      explanation: "'Blow one's own trumpet' is the British idiom for boasting about one's achievements. 'Toot one's own horn' is the American variant with 'horn', not 'trumpet', and 'sound' and 'ring' do not form the idiom."
    },
    {
      text: "The director ____ refused to apologise, insisting the documentary was accurate in every particular.",
      options: ["bluntly", "starkly", "squarely", "flatly"],
      answer: 3,
      explanation: "'Flatly refuse' is the fixed collocation for an absolute, unqualified refusal. 'Bluntly' describes a manner of speaking rather than the completeness of refusal, and 'starkly' and 'squarely' do not collocate with 'refuse'."
    },
    {
      text: "The tribunal concluded that the allegations of match-fixing were entirely without ____.",
      options: ["root", "foundation", "base", "ground"],
      answer: 1,
      explanation: "'Without foundation' is the fixed phrase meaning having no factual basis. 'Ground' would need the plural 'grounds', and 'root' and 'base' do not enter this expression."
    },
    {
      text: "None of the children would own ____ to letting the rabbit out of its hutch.",
      options: ["up", "in", "out", "over"],
      answer: 0,
      explanation: "'Own up to' is the phrasal verb meaning to confess to a misdeed. The verb 'own' does not combine with 'in', 'out' or 'over'."
    },
    {
      text: "Finding the original blueprints in a skip was a sheer ____ of luck for the restoration team.",
      options: ["hit", "blow", "stroke", "strike"],
      answer: 2,
      explanation: "'A stroke of luck' is the fixed expression for a fortunate chance event. 'Hit', 'blow' and 'strike' share the physical sense of 'stroke' but cannot replace it in this idiom."
    },
    {
      text: "It simply never ____ to me that the signature might be forged.",
      options: ["struck", "dawned", "came", "occurred"],
      answer: 3,
      explanation: "'It occurred to me that...' is the fixed pattern for an idea entering one's mind. 'Struck' would need 'it struck me that' without 'to', and 'dawned' takes 'on', not 'to'."
    },
    {
      text: "Since the forensic evidence was inconclusive, the jury gave the accused the benefit of the ____.",
      options: ["query", "doubt", "suspicion", "dispute"],
      answer: 1,
      explanation: "'Give someone the benefit of the doubt' is the fixed idiom for choosing the more favourable interpretation when guilt is uncertain. None of the other nouns forms this expression."
    },
    {
      text: "A single night of frost ____ havoc on the region's vineyards.",
      options: ["wreaked", "waged", "dealt", "spun"],
      answer: 0,
      explanation: "'Wreak havoc on' is the fixed collocation for causing widespread damage. 'Wage' pairs with 'war', 'deal' with 'a blow', and 'spin' does not collocate with 'havoc'."
    },
    {
      text: "Years in the public eye have left her utterly impervious ____ criticism.",
      options: ["of", "against", "to", "from"],
      answer: 2,
      explanation: "'Impervious to' is the fixed dependent preposition, meaning unaffected by. The adjective never takes 'of', 'against' or 'from'."
    },
    {
      text: "Successive governments have paid ____ service to rural development while cutting its funding.",
      options: ["mouth", "tongue", "word", "lip"],
      answer: 3,
      explanation: "'Pay lip service to' is the idiom meaning to express support insincerely, without acting on it. 'Mouth', 'tongue' and 'word' do not combine with 'service'."
    },
    {
      text: "The theory is elegant, but it simply doesn't ____ up to close scrutiny.",
      options: ["stand", "bear", "live", "keep"],
      answer: 0,
      explanation: "'Stand up to scrutiny' is the fixed expression for surviving critical examination. 'Bear scrutiny' exists but not with 'up to'; 'live up to' pairs with expectations, and 'keep up' means to maintain pace."
    },
    {
      text: "The memorial honours officers who lost their lives in the ____ of duty.",
      options: ["path", "way", "line", "course"],
      answer: 2,
      explanation: "'In the line of duty' is the fixed phrase for something occurring while performing one's official duties. 'Course' appears in 'in the course of events', while 'path' and 'way' do not form this expression."
    },
    {
      text: "I recognised his face instantly, but his name completely ____ me until the following morning.",
      options: ["avoided", "escaped", "evaded", "missed"],
      answer: 1,
      explanation: "'The name escaped me' is the idiomatic way of saying one cannot recall something. 'Avoided' and 'evaded' imply deliberate agency, and 'missed' reverses the required relationship."
    },
    {
      text: "The columnist was taken to task for making ____ generalisations about an entire generation.",
      options: ["brushing", "sprawling", "spreading", "sweeping"],
      answer: 3,
      explanation: "'Sweeping generalisations' is the fixed collocation for statements that are too broad to be accurate. 'Brushing', 'sprawling' and 'spreading' do not modify 'generalisations'."
    },
    {
      text: "The framework agreement was hammered out ____ closed doors over a single weekend.",
      options: ["behind", "under", "beneath", "within"],
      answer: 0,
      explanation: "'Behind closed doors' is the fixed expression for proceedings conducted in secret. 'Under', 'beneath' and 'within' are spatially plausible but do not form the idiom."
    },
    {
      text: "The audit brought to ____ a series of irregular payments stretching back a decade.",
      options: ["sight", "view", "light", "surface"],
      answer: 2,
      explanation: "'Bring to light' is the fixed expression meaning to reveal something hidden. 'Sight', 'view' and 'surface' relate to visibility but do not combine with 'bring to' in this idiom."
    },
    {
      text: "As the landlord of three city-centre properties, he has a vested ____ in blocking the rent cap.",
      options: ["stake", "share", "claim", "interest"],
      answer: 3,
      explanation: "'A vested interest' is the fixed collocation for a personal stake that biases one's position. Although one can 'have a stake in' something, 'vested' collocates only with 'interest'."
    },
    {
      text: "The report ____ no punches in its assessment of the hospital's management.",
      options: ["held", "pulled", "drew", "threw"],
      answer: 1,
      explanation: "'Pull no punches' is the idiom, from boxing, meaning to criticise with full force. 'Held no punches' is a common error, and 'drew' and 'threw' do not form the expression."
    },
    {
      text: "At ninety-two, and still swimming daily, my grandmother remains in the ____ of health.",
      options: ["bloom", "glow", "pink", "flush"],
      answer: 2,
      explanation: "'In the pink of health' (from 'in the pink') is the idiom for being in excellent condition. 'Bloom' and 'flush' collocate with 'youth', and 'glow' with 'health' only as 'a healthy glow'."
    },
    {
      text: "Whether the vaccine reaches remote communities hinges ____ the reliability of the cold chain.",
      options: ["at", "on", "over", "from"],
      answer: 1,
      explanation: "'Hinge on' is the fixed verb-preposition pairing meaning to depend entirely on. The verb does not combine with 'at', 'over' or 'from'."
    },
    {
      text: "Three senior executives resigned in the ____ of the emissions revelations.",
      options: ["wave", "trail", "track", "wake"],
      answer: 3,
      explanation: "'In the wake of' is the fixed phrase meaning as a consequence of, or following, an event. 'Wave', 'trail' and 'track' evoke similar imagery but do not form the idiom."
    },
    {
      text: "It beggars ____ that the bridge was signed off without a single structural survey.",
      options: ["belief", "credence", "reason", "thought"],
      answer: 0,
      explanation: "'It beggars belief' is the fixed expression meaning something is too extraordinary or foolish to be believed. 'Credence', 'reason' and 'thought' cannot follow 'beggars'."
    },
    {
      text: "The novelist is famously difficult to pin ____ on the question of her influences.",
      options: ["up", "back", "down", "off"],
      answer: 2,
      explanation: "'Pin down' means to force someone to commit to a definite position or answer. 'Pin up' and 'pin back' are literal, and 'pin off' does not exist."
    },
    {
      text: "The studio went to extraordinary ____ to keep the sequel's plot under wraps.",
      options: ["distances", "lengths", "extents", "measures"],
      answer: 1,
      explanation: "'Go to great/extraordinary lengths' is the fixed idiom for making exceptional efforts. 'Distances', 'extents' and 'measures' are semantically related but do not collocate with 'go to' here."
    },
    {
      text: "The verdict could not, by any ____ of the imagination, be described as lenient.",
      options: ["reach", "span", "extent", "stretch"],
      answer: 3,
      explanation: "'By any stretch of the imagination' is the fixed idiom used to emphasise that something is not true however generously one views it. The other nouns cannot replace 'stretch'."
    },
    {
      text: "The privatisation plan hit an unexpected ____ when the unions secured an injunction.",
      options: ["snag", "knot", "block", "dent"],
      answer: 0,
      explanation: "'Hit a snag' is the fixed collocation for encountering an unforeseen obstacle. 'Knot', 'block' and 'dent' suggest difficulty but do not collocate with 'hit' in this sense."
    },
    {
      text: "The judge threw the libel case ____ of court for want of evidence.",
      options: ["out", "off", "away", "aside"],
      answer: 0,
      explanation: "'Throw a case out of court' is the fixed legal expression for dismissing it. 'Off', 'away' and 'aside' do not combine with 'of court'."
    },
    {
      text: "The product launch was an ____ disaster: the servers crashed and the demo unit caught fire on stage.",
      options: ["unrelieved", "unmitigated", "unreserved", "unabridged"],
      answer: 1,
      explanation: "'An unmitigated disaster' is the fixed collocation for a complete, unqualified failure. 'Unreserved' pairs with apologies, 'unabridged' with texts, and 'unrelieved' with gloom or monotony."
    },
    {
      text: "With three departments to merge and a budget to halve, the incoming director has her work cut ____ for her.",
      options: ["off", "up", "out", "down"],
      answer: 2,
      explanation: "'Have one's work cut out (for one)' is the idiom meaning to face a very difficult task. No other particle forms this fixed expression."
    },
    {
      text: "Smaller class sizes create an atmosphere far more conducive ____ genuine discussion.",
      options: ["for", "with", "of", "to"],
      answer: 3,
      explanation: "'Conducive to' is the fixed dependent preposition, meaning tending to bring about. The adjective never takes 'for', 'with' or 'of'."
    },
    {
      text: "It took the older staff several weeks to get to ____ with the new booking system.",
      options: ["terms", "grips", "holds", "hands"],
      answer: 1,
      explanation: "'Get to grips with' means to begin to understand and deal with something difficult. 'Terms' belongs to 'come to terms with', which takes a different verb, and 'holds' and 'hands' form no such idiom."
    },
    {
      text: "The doping revelations dealt a severe ____ to the credibility of the entire sport.",
      options: ["hit", "stroke", "blow", "knock"],
      answer: 2,
      explanation: "'Deal a blow to' is the fixed collocation for causing serious damage to something abstract. Reputations may 'take a knock', but 'deal' pairs with 'blow', not with 'hit', 'stroke' or 'knock'."
    },
    {
      text: "The gallery will remain closed for the ____ being while the roof is made safe.",
      options: ["time", "while", "moment", "period"],
      answer: 0,
      explanation: "'For the time being' is the fixed phrase meaning temporarily, until further notice. 'Moment' works in 'for the moment' but not with 'being', and 'while' and 'period' form no such expression."
    },
    {
      text: "The trial results fly in the ____ of everything we thought we knew about the disease.",
      options: ["teeth", "eye", "front", "face"],
      answer: 3,
      explanation: "'Fly in the face of' is the idiom meaning to contradict accepted beliefs directly. 'In the teeth of' means 'despite opposition' and takes different verbs, while 'eye' and 'front' form no idiom here."
    },
    {
      text: "Like many memoirists, he is prone ____ embellishment when the facts are dull.",
      options: ["for", "to", "of", "with"],
      answer: 1,
      explanation: "'Prone to' is the fixed dependent preposition, meaning having a tendency towards something undesirable. 'For', 'of' and 'with' never follow 'prone'."
    },
    {
      text: "Details of the settlement remain sketchy at ____, since both parties signed confidentiality agreements.",
      options: ["best", "least", "most", "worst"],
      answer: 0,
      explanation: "'At best' means even under the most favourable interpretation, which fits 'sketchy'. 'At least' introduces a minimum, 'at most' a maximum quantity, and 'at worst' the least favourable case, none of which fits."
    },
    {
      text: "The board dismissed the whistle-blower's concerns out of ____, without so much as an internal inquiry.",
      options: ["mind", "turn", "hand", "order"],
      answer: 2,
      explanation: "'Dismiss something out of hand' means to reject it immediately without consideration. 'Out of turn' and 'out of order' are different idioms, and 'out of mind' belongs to 'out of sight, out of mind'."
    },
    {
      text: "The coalition partners remain poles ____ on the question of nuclear energy.",
      options: ["away", "across", "aloof", "apart"],
      answer: 3,
      explanation: "'Poles apart' is the fixed idiom meaning completely opposed in opinion. 'Away', 'across' and 'aloof' cannot combine with 'poles'."
    },
    {
      text: "The two ministries have been at ____ over who should fund coastal defences for the best part of a decade.",
      options: ["loggerheads", "daggers", "knives", "blows"],
      answer: 0,
      explanation: "'At loggerheads' is the idiom meaning in stubborn disagreement. 'Daggers' requires 'at daggers drawn', 'blows' requires 'come to blows', and 'at knives' does not exist."
    },
    {
      text: "It will be years before the economy begins to ____ the benefits of the education reforms.",
      options: ["harvest", "reap", "gather", "glean"],
      answer: 1,
      explanation: "'Reap the benefits' is the fixed collocation for enjoying the rewards of earlier effort. 'Harvest', 'gather' and 'glean' share the agricultural metaphor but do not collocate with 'benefits'."
    },
    {
      text: "Even after the auditors signed off the accounts, she couldn't shake off a ____ suspicion that something was amiss.",
      options: ["biting", "itching", "nagging", "aching"],
      answer: 2,
      explanation: "'A nagging suspicion' is the collocation for a persistent, low-level worry. 'Biting', 'itching' and 'aching' describe physical sensations and do not modify 'suspicion'."
    },
    {
      text: "Having maintained these engines for thirty years, he knows them inside ____.",
      options: ["over", "through", "down", "out"],
      answer: 3,
      explanation: "'Know something inside out' is the idiom meaning to know it thoroughly. The other particles do not combine with 'inside' in this expression."
    },
    {
      text: "For its first five years the theatre company operated on a ____ budget, rehearsing in a disused warehouse.",
      options: ["bootlace", "shoestring", "thread", "wire"],
      answer: 1,
      explanation: "'A shoestring budget' is the fixed expression for a very small amount of money. 'Bootlace', 'thread' and 'wire' evoke thinness but do not collocate with 'budget'."
    },
    {
      text: "The senator complained that her remarks had been taken out of ____ and spliced into a misleading montage.",
      options: ["context", "perspective", "proportion", "place"],
      answer: 0,
      explanation: "'Taken out of context' is the fixed phrase for quoting words in a way that distorts their intended meaning. Things are 'blown out of proportion' and 'kept in perspective', but not 'taken out of' either."
    },
    {
      text: "The federation condemned the pitch invasion in no ____ terms.",
      options: ["unclear", "doubtful", "uncertain", "vague"],
      answer: 2,
      explanation: "'In no uncertain terms' is the fixed idiom meaning clearly and forcefully. 'Unclear', 'doubtful' and 'vague' are near-synonyms but cannot replace 'uncertain' in the expression."
    },
    {
      text: "The monsoon has battered the coast for a week and shows no sign of letting ____.",
      options: ["off", "down", "in", "up"],
      answer: 3,
      explanation: "'Let up' means to become less intense or stop, used of weather or pressure. 'Let off' means to release or excuse, 'let down' to disappoint, and 'let in' to admit."
    },
    {
      text: "Coming from a firm with a stake in the outcome, the consultancy's findings should be taken with a ____ of salt.",
      options: ["spoon", "pinch", "dash", "drop"],
      answer: 1,
      explanation: "'Take something with a pinch of salt' is the British idiom meaning to regard it with scepticism. 'Spoon', 'dash' and 'drop' are measures of quantity that do not form the idiom."
    },
    {
      text: "The film's portrait of small-town loneliness struck a ____ with audiences far beyond its native Finland.",
      options: ["note", "tune", "chord", "string"],
      answer: 2,
      explanation: "'Strike a chord with' is the idiom meaning to arouse sympathy or recognition. One can 'strike a note' of caution, but only 'chord' combines with 'with audiences' in this sense."
    },
    {
      text: "Thanks to a string of bequests, the college's laboratories are now on a ____ with those of far wealthier institutions.",
      options: ["par", "peer", "match", "rank"],
      answer: 0,
      explanation: "'On a par with' is the fixed phrase meaning equal in standard to. 'Peer', 'match' and 'rank' relate to equality but do not enter this construction."
    },
    {
      text: "After a decade of broken promises, the mayor's pledges on housing now ring ____.",
      options: ["empty", "void", "blank", "hollow"],
      answer: 3,
      explanation: "'Ring hollow' is the fixed collocation for words that sound insincere or unconvincing. 'Empty', 'void' and 'blank' convey a similar idea but do not collocate with 'ring'."
    },
    {
      text: "The jury is still ____ on whether open-plan offices actually improve collaboration.",
      options: ["off", "out", "away", "apart"],
      answer: 1,
      explanation: "'The jury is still out' is the idiom meaning no definite conclusion has yet been reached. The other particles do not form this expression."
    },
    {
      text: "The rooms were modest, but the service was second to ____.",
      options: ["all", "most", "none", "best"],
      answer: 2,
      explanation: "'Second to none' is the fixed idiom meaning the best there is. 'All', 'most' and 'best' cannot follow 'second to' in this expression."
    },
    {
      text: "The newspaper retracted the allegations under ____ of legal action.",
      options: ["threat", "menace", "fear", "risk"],
      answer: 0,
      explanation: "'Under threat of' is the fixed phrase for acting because of a threatened consequence. 'Fear' takes 'for fear of', 'risk' takes 'at risk of', and 'menace' does not enter this construction."
    },
    {
      text: "The suspect's account of his movements simply doesn't ____ with the CCTV footage.",
      options: ["match", "balance", "equal", "tally"],
      answer: 3,
      explanation: "'Tally with' means to correspond with or match another account. 'Match' is transitive and takes no preposition here, while 'balance' and 'equal' do not express consistency between accounts."
    },
    {
      text: "The soprano's farewell performance was greeted with ____ applause and a twenty-minute standing ovation.",
      options: ["delirious", "rapturous", "euphoric", "hysterical"],
      answer: 1,
      explanation: "'Rapturous applause' is the fixed collocation for wildly enthusiastic clapping. 'Delirious', 'euphoric' and 'hysterical' describe people's states rather than collocating with 'applause'."
    },
    {
      text: "Over several months the conman wormed his way ____ the widow's confidence.",
      options: ["into", "onto", "under", "through"],
      answer: 0,
      explanation: "'Worm one's way into someone's confidence' is the idiom for gaining trust by sly, gradual means. 'Onto', 'under' and 'through' do not complete the expression."
    },
    {
      text: "The planning committee gave the skyscraper proposal short ____, rejecting it within minutes.",
      options: ["shift", "thrift", "shrift", "script"],
      answer: 2,
      explanation: "'Give something short shrift' is the idiom meaning to dismiss it quickly and unsympathetically. 'Shift', 'thrift' and 'script' are sound-alike traps that form no idiom with 'short'."
    },
    {
      text: "With the ceasefire fraying at the edges, time is fast running ____ for a negotiated settlement.",
      options: ["out", "off", "down", "over"],
      answer: 0,
      explanation: "'Time is running out' is the fixed expression meaning little time remains. A clockwork mechanism may 'run down', but time itself 'runs out'; 'off' and 'over' do not fit."
    },
    {
      text: "Throughout the takeover talks her assistant was the very ____ of discretion, deflecting every journalist's call.",
      options: ["heart", "spirit", "core", "soul"],
      answer: 3,
      explanation: "'The soul of discretion' is the fixed expression for a perfectly discreet person. 'Heart', 'spirit' and 'core' convey centrality but do not form this idiom."
    },
    {
      text: "He inherited a fine Georgian townhouse and let it go to rack and ____ within a decade.",
      options: ["waste", "ruin", "dust", "shambles"],
      answer: 1,
      explanation: "'Go to rack and ruin' is the fixed binomial meaning to fall into decay through neglect. 'Waste', 'dust' and 'shambles' relate to deterioration but cannot complete the phrase."
    },
    {
      text: "The prosecution has produced not a ____ of evidence linking my client to the warehouse.",
      options: ["shred", "slice", "thread", "chip"],
      answer: 0,
      explanation: "'Not a shred of evidence' is the fixed collocation for a total absence of proof. 'Slice', 'thread' and 'chip' are small quantities but do not collocate with 'evidence'."
    },
    {
      text: "Her valedictory lecture ranged ____ topics as diverse as birdsong, cryptography and medieval trade routes.",
      options: ["about", "along", "over", "between"],
      answer: 2,
      explanation: "'Range over' is the collocation for a talk or discussion covering many topics. 'Range between' is used of numerical limits, and 'about' and 'along' do not combine with 'range' in this sense."
    },
    {
      text: "The extension was praised for being entirely in ____ with the chapel's Romanesque character.",
      options: ["holding", "fitting", "according", "keeping"],
      answer: 3,
      explanation: "'In keeping with' is the fixed phrase meaning consistent or harmonious with. 'Fitting' and 'according' suggest suitability but do not form this expression, and 'in holding with' does not exist."
    },
    {
      text: "Officials sought to play ____ the significance of the leaked memo, calling it an early draft.",
      options: ["off", "down", "under", "away"],
      answer: 1,
      explanation: "'Play down' means to make something seem less important than it is. 'Play off' means to set parties against each other, and 'play under' and 'play away' do not carry this meaning."
    },
    {
      text: "The trade delegation crammed five countries into a week-long whistle-stop ____ of the region.",
      options: ["tour", "trip", "visit", "ride"],
      answer: 0,
      explanation: "'A whistle-stop tour' is the fixed collocation for a rapid journey with many brief stops. 'Trip', 'visit' and 'ride' do not combine with 'whistle-stop'."
    },
    {
      text: "By his own ____, he spent more of his undergraduate years on the river than in the library.",
      options: ["concession", "permission", "admission", "submission"],
      answer: 2,
      explanation: "'By his own admission' is the fixed phrase meaning as he himself has acknowledged. 'Concession', 'permission' and 'submission' are morphological look-alikes that do not form this expression."
    },
    {
      text: "For most patients, the drug's proven benefits comfortably ____ its occasional side effects.",
      options: ["overweigh", "outweigh", "outgrow", "overrule"],
      answer: 1,
      explanation: "'Outweigh' is the verb meaning to be greater or more important than. 'Overweigh' is not standard in this sense, 'outgrow' means to grow too big for, and 'overrule' applies to decisions."
    },
    {
      text: "She was walking on ____ for days after being offered the fellowship.",
      options: ["clouds", "wind", "heights", "air"],
      answer: 3,
      explanation: "'Walking on air' is the idiom for feeling elated. 'Clouds' belongs to 'on cloud nine', a different expression, and 'wind' and 'heights' form no idiom with 'walking on'."
    },
    {
      text: "The stadium deal fell ____ at the eleventh hour when a key investor withdrew.",
      options: ["down", "off", "through", "over"],
      answer: 2,
      explanation: "'Fall through' means a plan or arrangement fails to happen. 'Fall down' is where an argument is weakest, 'fall off' means to decline, and 'fall over' is literal."
    },
    {
      text: "His review reads less like criticism than the settling of scores; he clearly has an axe to ____.",
      options: ["grind", "sharpen", "wield", "hone"],
      answer: 0,
      explanation: "'Have an axe to grind' is the idiom for harbouring a private grievance or ulterior motive. 'Sharpen', 'wield' and 'hone' are literal axe verbs that do not form the expression."
    },
    {
      text: "The first edition was rushed to press and is ____ with typographical errors.",
      options: ["pierced", "drilled", "punctured", "riddled"],
      answer: 3,
      explanation: "'Riddled with errors' is the fixed collocation meaning full of faults throughout. 'Pierced', 'drilled' and 'punctured' share the literal sense of making holes but do not collocate with 'errors'."
    },
    {
      text: "As a session musician he can switch from jazz to flamenco at the drop of a ____.",
      options: ["pin", "hat", "coin", "glove"],
      answer: 1,
      explanation: "'At the drop of a hat' is the idiom meaning instantly, without hesitation. 'Pin', 'coin' and 'glove' do not complete this fixed expression."
    },
    {
      text: "The projected cost of decommissioning should give ministers pause for ____.",
      options: ["thought", "mind", "concern", "idea"],
      answer: 0,
      explanation: "'Give someone pause for thought' is the fixed expression meaning to make someone stop and reconsider. 'Mind', 'concern' and 'idea' cannot follow 'pause for' idiomatically."
    },
    {
      text: "For years the council turned a ____ ear to residents' complaints about the crumbling viaduct.",
      options: ["blind", "dumb", "deaf", "numb"],
      answer: 2,
      explanation: "'Turn a deaf ear to' means to refuse to listen to requests or complaints. 'Blind' belongs to the parallel idiom 'turn a blind eye', and 'dumb' and 'numb' form no idiom with 'ear'."
    },
    {
      text: "The ministry's denial was couched ____ terms so vague as to be almost meaningless.",
      options: ["with", "in", "under", "by"],
      answer: 1,
      explanation: "'Couched in... terms' is the fixed pattern for how a statement is worded. The verb 'couch' takes only 'in' in this construction."
    },
    {
      text: "Attendance at the festival has fallen for the third year ____, prompting talk of cancellation.",
      options: ["passing", "going", "coming", "running"],
      answer: 3,
      explanation: "'For the third year running' means for three consecutive years. 'Passing', 'going' and 'coming' cannot be used post-nominally in this sense."
    },
    {
      text: "Though visibly stung by the reviews, she bore the criticism with good ____ and even thanked her detractors.",
      options: ["grace", "mood", "manner", "spirit"],
      answer: 0,
      explanation: "'With good grace' is the fixed phrase meaning willingly and without resentment. 'Mood', 'manner' and 'spirit' are plausible but do not collocate with 'with good' in this idiom."
    },
    {
      text: "It wasn't a planned purchase; we saw the cottage on a Sunday drive and bought it on the spur of the ____.",
      options: ["minute", "instant", "moment", "second"],
      answer: 2,
      explanation: "'On the spur of the moment' is the idiom meaning impulsively, without prior planning. 'Minute', 'instant' and 'second' denote short times but cannot replace 'moment' here."
    },
    {
      text: "Many independent bookshops are struggling to stay ____ in the face of online discounting.",
      options: ["aboard", "afloat", "adrift", "ashore"],
      answer: 1,
      explanation: "'Stay afloat' is the idiom meaning to survive financially, avoiding failure. 'Adrift' means directionless, and 'aboard' and 'ashore' are literal nautical terms."
    },
    {
      text: "Though she retired from the bench years ago, her opinions still carry considerable ____ in legal circles.",
      options: ["force", "mass", "load", "weight"],
      answer: 3,
      explanation: "'Carry weight' is the fixed collocation meaning to be influential or taken seriously. 'Force', 'mass' and 'load' relate to heaviness but do not collocate with 'carry' in this figurative sense."
    },
    {
      text: "Two goals down with ten minutes left, the visitors somehow snatched victory from the ____ of defeat.",
      options: ["jaws", "teeth", "claws", "fangs"],
      answer: 0,
      explanation: "'Snatch victory from the jaws of defeat' is the fixed idiom for winning when loss seemed certain. 'Teeth', 'claws' and 'fangs' fit the animal imagery but do not form the expression."
    },
    {
      text: "I sympathise entirely, but disciplinary matters fall ____ my remit; you will need to write to the dean.",
      options: ["without", "apart", "outside", "aside"],
      answer: 2,
      explanation: "'Fall outside someone's remit' means to lie beyond their area of responsibility. 'Without' in this sense is archaic, and 'apart' and 'aside' do not combine with 'fall' plus a noun here."
    },
    {
      text: "The retrospective traces the designer's rise from ____ beginnings in a Naples backstreet workshop.",
      options: ["meek", "shy", "timid", "humble"],
      answer: 3,
      explanation: "'Humble beginnings' is the fixed collocation for a modest or lowly start in life. 'Meek', 'shy' and 'timid' describe temperament, not social circumstances, and do not modify 'beginnings'."
    },
    {
      text: "Mediators worked around the ____ for three days to avert the port strike.",
      options: ["watch", "clock", "hour", "dial"],
      answer: 1,
      explanation: "'Work around the clock' is the idiom meaning to work continuously, day and night. 'Watch', 'hour' and 'dial' relate to timekeeping but do not form the expression."
    },
    {
      text: "The ruling set a ____ that courts have followed in every comparable dispute since.",
      options: ["precedent", "precedence", "antecedent", "preference"],
      answer: 0,
      explanation: "'Set a precedent' is the fixed legal collocation for establishing an example for future decisions. 'Precedence' means priority of rank, and 'antecedent' and 'preference' do not collocate with 'set' here."
    },
    {
      text: "Her career really took ____ after a chance appearance on a late-night chat show.",
      options: ["up", "on", "over", "off"],
      answer: 3,
      explanation: "'Take off' means to become suddenly successful. 'Take up' means to begin a hobby, 'take on' to assume responsibility, and 'take over' to assume control."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
