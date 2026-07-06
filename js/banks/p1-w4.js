/* CPE Prep extra bank: part1 wave 4 */
(function () {
  var BANK = [
    {
      text: "Engineers hope to ____ the energy of the tides to power coastal towns.",
      options: ["harness", "bridle", "saddle", "muzzle"],
      answer: 0,
      explanation: "'Harness' is the standard verb for capturing natural forces and putting them to use. 'Bridle', 'saddle' and 'muzzle' are literal terms for equipment on animals and do not collocate with energy."
    },
    {
      text: "After months of losses, the airline is teetering on the ____ of bankruptcy.",
      options: ["rim", "ledge", "brink", "margin"],
      answer: 2,
      explanation: "'On the brink of' is the fixed phrase for being about to experience something disastrous. 'Rim', 'ledge' and 'margin' are literal edges and do not form this idiom."
    },
    {
      text: "The haulage firm was fined for having openly ____ the safety regulations for years.",
      options: ["flaunted", "flouted", "scoffed", "spurned"],
      answer: 1,
      explanation: "'Flout' means to disobey rules openly and contemptuously. 'Flaunt' (to display showily) is the classic confusion, 'scoff' requires 'at', and 'spurn' applies to rejecting offers rather than breaking rules."
    },
    {
      text: "Remarkably, the driver emerged from the wreckage completely ____.",
      options: ["unspoilt", "untarnished", "unblemished", "unscathed"],
      answer: 3,
      explanation: "'Unscathed' means physically unharmed after an accident or ordeal. 'Untarnished' and 'unblemished' describe reputations or surfaces, and 'unspoilt' describes landscapes or character."
    },
    {
      text: "She kept a bag of nuts in her desk to ____ off hunger between meetings.",
      options: ["stave", "shrug", "brush", "see"],
      answer: 0,
      explanation: "'Stave off' means to delay or prevent something unpleasant. 'Shrug off' and 'brush off' mean to dismiss lightly, and 'see off' means to defeat or accompany someone leaving."
    },
    {
      text: "The band's ____ rise from pub gigs to stadium tours took barely two years.",
      options: ["cosmic", "meteoric", "astral", "stellar"],
      answer: 1,
      explanation: "'Meteoric rise' is the fixed collocation for extremely rapid success. 'Stellar' describes quality rather than speed, while 'cosmic' and 'astral' do not collocate with 'rise'."
    },
    {
      text: "He gave his colleagues no ____ of what he was planning to announce.",
      options: ["insight", "hunch", "inkling", "glimpse"],
      answer: 2,
      explanation: "'Inkling' means a slight idea or suspicion and collocates with 'give no inkling of'. You 'have' a hunch rather than give one, 'insight' takes 'into', and 'glimpse' refers to seeing briefly."
    },
    {
      text: "Weeks of sporadic protest finally ____ in a nationwide general strike.",
      options: ["peaked", "amounted", "heightened", "culminated"],
      answer: 3,
      explanation: "'Culminate in' means to reach a final climactic point. 'Peak' takes 'at', 'amount' takes 'to', and 'heighten' is transitive or takes no preposition here."
    },
    {
      text: "The summit took place against a ____ of escalating border tensions.",
      options: ["backdrop", "panorama", "scenery", "landscape"],
      answer: 0,
      explanation: "'Against a backdrop of' is the fixed phrase for the circumstances surrounding an event. 'Panorama', 'scenery' and 'landscape' are literal visual terms that do not form this idiom."
    },
    {
      text: "Her conduct throughout the inquiry was beyond ____.",
      options: ["rebuke", "reproach", "reprimand", "remorse"],
      answer: 1,
      explanation: "'Beyond reproach' is the fixed phrase meaning impossible to criticise. 'Rebuke' and 'reprimand' are acts of telling someone off, not standards, and 'remorse' is the wrongdoer's own regret."
    },
    {
      text: "Any editor worth their ____ would have spotted the fabricated quotation.",
      options: ["mettle", "gold", "salt", "grain"],
      answer: 2,
      explanation: "'Worth one's salt' is the idiom meaning competent and deserving of one's position. 'Mettle' is tested or shown, 'gold' requires 'worth their weight in gold', and 'grain' does not fit."
    },
    {
      text: "After a third sleepless night with the baby, she was at the end of her ____.",
      options: ["leash", "rope", "cord", "tether"],
      answer: 3,
      explanation: "'At the end of one's tether' is the fixed idiom for having exhausted one's patience. 'Leash', 'rope' and 'cord' are literal synonyms that do not form this expression."
    },
    {
      text: "The signalling failures played ____ with the morning commute.",
      options: ["havoc", "mayhem", "chaos", "turmoil"],
      answer: 0,
      explanation: "'Play havoc with' is the fixed collocation for causing serious disruption. 'Mayhem', 'chaos' and 'turmoil' are close in meaning but none of them collocates with 'play'."
    },
    {
      text: "The court ____ the marriage on the grounds that it had never been valid.",
      options: ["repealed", "annulled", "rescinded", "revoked"],
      answer: 1,
      explanation: "'Annul' is the legal verb for declaring a marriage void. Laws are 'repealed', decisions and orders 'rescinded', and licences 'revoked'."
    },
    {
      text: "He gets by in Lisbon with little more than a ____ of Portuguese.",
      options: ["scattering", "sprinkling", "smattering", "splattering"],
      answer: 2,
      explanation: "'A smattering of' a language means a slight superficial knowledge of it. 'Scattering' and 'sprinkling' describe distributed physical things, and 'splattering' refers to liquid."
    },
    {
      text: "Practising doctors are expected to keep ____ of developments in their field.",
      options: ["adrift", "astride", "alongside", "abreast"],
      answer: 3,
      explanation: "'Keep abreast of' is the fixed phrase for staying informed about the latest developments. 'Adrift' means aimless, 'astride' means straddling, and 'alongside' does not take 'of'."
    },
    {
      text: "The scent of woodsmoke ____ up memories of childhood holidays.",
      options: ["conjured", "evoked", "invoked", "elicited"],
      answer: 0,
      explanation: "'Conjure up' is the phrasal collocation for bringing images or memories vividly to mind. 'Evoke', 'invoke' and 'elicit' can relate to memory or response but none of them combines with 'up'."
    },
    {
      text: "The chancellor is under pressure to ____ in the ballooning welfare budget.",
      options: ["tug", "rein", "buckle", "strap"],
      answer: 1,
      explanation: "'Rein in' means to bring spending or behaviour under control, from controlling a horse. 'Tug', 'buckle' and 'strap' are literal actions that do not form this phrasal verb."
    },
    {
      text: "With its bare walls and single bloom, the room was the ____ of understated elegance.",
      options: ["prototype", "benchmark", "epitome", "summit"],
      answer: 2,
      explanation: "'The epitome of' means a perfect embodiment of a quality. A 'prototype' is a first model, a 'benchmark' a standard of comparison, and 'summit' a highest point, none of which fits embodiment."
    },
    {
      text: "With the benefit of ____, selling the shares that spring was clearly a mistake.",
      options: ["foresight", "oversight", "insight", "hindsight"],
      answer: 3,
      explanation: "'With the benefit of hindsight' is the fixed phrase for judging past events with present knowledge. 'Foresight' looks ahead, 'oversight' is supervision or an omission, and 'insight' is deep understanding."
    },
    {
      text: "Left unsupervised for a moment, the toddlers ran ____ in the toy department.",
      options: ["amok", "adrift", "astray", "askew"],
      answer: 0,
      explanation: "'Run amok' means to behave in a wild, uncontrolled way. 'Adrift' pairs with 'cast' or 'set', 'astray' with 'go' or 'lead', and 'askew' describes crooked objects."
    },
    {
      text: "He worked punishing hours, to the ____ of his health and his marriage.",
      options: ["expense", "detriment", "damage", "downfall"],
      answer: 1,
      explanation: "'To the detriment of' is the fixed phrase meaning causing harm to. 'Expense' requires 'at the expense of', and 'damage' and 'downfall' do not fit this structure."
    },
    {
      text: "She suspected his sudden generosity concealed some ____ motive.",
      options: ["anterior", "exterior", "ulterior", "inferior"],
      answer: 2,
      explanation: "'Ulterior motive' is the fixed collocation for a hidden, usually self-serving reason. 'Anterior', 'exterior' and 'inferior' share the Latinate form but none collocates with 'motive'."
    },
    {
      text: "Public appetite for celebrity gossip shows no sign of being on the ____.",
      options: ["slump", "dip", "fade", "wane"],
      answer: 3,
      explanation: "'On the wane' is the fixed phrase meaning gradually decreasing. 'Slump', 'dip' and 'fade' can describe decline as verbs or nouns but do not follow 'on the' in this idiom."
    },
    {
      text: "Ministers are ____ to admit that the flagship policy has failed.",
      options: ["loath", "loathe", "adverse", "opposed"],
      answer: 0,
      explanation: "'Loath to do something' means reluctant. 'Loathe' is the verb meaning to hate, 'adverse' describes conditions rather than people, and 'opposed' takes 'to' plus a gerund."
    },
    {
      text: "The cottage is a ____ throw from the harbour, yet remarkably quiet.",
      options: ["rock's", "stone's", "pebble's", "brick's"],
      answer: 1,
      explanation: "'A stone's throw' is the fixed idiom meaning a very short distance. No other noun can replace 'stone's' in this expression."
    },
    {
      text: "As the family's only heir, he kept a retinue of lawyers at his ____ and call.",
      options: ["nod", "whim", "beck", "wink"],
      answer: 2,
      explanation: "'At someone's beck and call' is the fixed idiom meaning always ready to obey. 'Nod', 'whim' and 'wink' relate to signals or fancies but cannot replace 'beck' here."
    },
    {
      text: "I couldn't follow the technical detail, but I got the ____ of her argument.",
      options: ["jest", "grist", "zest", "gist"],
      answer: 3,
      explanation: "'Get the gist' means to grasp the essential meaning. 'Jest' is a joke, 'grist' appears in 'grist to the mill', and 'zest' means enthusiasm or lemon peel."
    },
    {
      text: "Anxious to make ____ for his outburst, he wrote each colleague a note of apology.",
      options: ["amends", "remedies", "repairs", "corrections"],
      answer: 0,
      explanation: "'Make amends for' is the fixed phrase for compensating for wrongdoing. 'Remedies', 'repairs' and 'corrections' address problems or errors but do not collocate with 'make ... for' in this sense."
    },
    {
      text: "Rural surgeries are closing because of a chronic ____ of qualified doctors.",
      options: ["glut", "dearth", "surfeit", "deluge"],
      answer: 1,
      explanation: "'Dearth' means a serious scarcity. 'Glut', 'surfeit' and 'deluge' all denote excess, the opposite of what the closing surgeries imply."
    },
    {
      text: "It is ____ upon every board member to disclose any conflict of interest.",
      options: ["imperative", "obligatory", "incumbent", "compulsory"],
      answer: 2,
      explanation: "'Incumbent upon someone to do something' is the fixed formal structure for a duty. 'Imperative', 'obligatory' and 'compulsory' express obligation but take 'for' or 'that', not 'upon'."
    },
    {
      text: "Critics say the reforms merely ____ over the cracks in the pension system.",
      options: ["brushed", "coated", "wiped", "papered"],
      answer: 3,
      explanation: "'Paper over the cracks' is the idiom for concealing problems rather than solving them. 'Brush', 'coat' and 'wipe' are literal surface actions that do not form this expression."
    },
    {
      text: "Since the damage occurred in transit, the courier company will have to ____ the bill.",
      options: ["foot", "arm", "leg", "hand"],
      answer: 0,
      explanation: "'Foot the bill' is the fixed idiom meaning to pay, usually reluctantly, for something. The other body-part nouns cannot replace 'foot' in this expression."
    },
    {
      text: "Despite her nerves, she came through the audition with ____ colours.",
      options: ["soaring", "flying", "blazing", "waving"],
      answer: 1,
      explanation: "'With flying colours' is the fixed idiom meaning with great success, from ships flying flags after victory. None of the other participles forms this phrase."
    },
    {
      text: "A compromise was reached at the ____ hour, minutes before the strike deadline.",
      options: ["final", "closing", "eleventh", "midnight"],
      answer: 2,
      explanation: "'At the eleventh hour' is the fixed idiom meaning at the last possible moment. 'Final', 'closing' and 'midnight' do not form this expression with 'hour'."
    },
    {
      text: "New recruits must ____ through hundreds of pages of compliance documents.",
      options: ["tread", "stroll", "march", "wade"],
      answer: 3,
      explanation: "'Wade through' means to work laboriously through long, tedious material. 'Tread', 'stroll' and 'march' describe manners of walking and do not carry this figurative sense."
    },
    {
      text: "Over coffee, the three interns ____ a plan to impress the visiting directors.",
      options: ["hatched", "spawned", "incubated", "bred"],
      answer: 0,
      explanation: "'Hatch a plan' is the fixed collocation for secretly devising a scheme. 'Spawn', 'incubate' and 'breed' share the biological metaphor but do not collocate with 'plan' this way."
    },
    {
      text: "The report contains one ____ omission: it never mentions cost.",
      options: ["dazzling", "glaring", "blinding", "gleaming"],
      answer: 1,
      explanation: "'Glaring' collocates with 'omission' or 'error' to mean conspicuously obvious. 'Dazzling', 'blinding' and 'gleaming' describe literal brightness and do not modify 'omission'."
    },
    {
      text: "The chairman has been making discreet ____ to potential merger partners.",
      options: ["preludes", "preambles", "overtures", "interludes"],
      answer: 2,
      explanation: "'Make overtures to' means to make initial approaches with a view to negotiation. 'Preludes', 'preambles' and 'interludes' are introductory or intervening passages, not approaches."
    },
    {
      text: "The suspect was remanded in ____ pending a psychiatric assessment.",
      options: ["captivity", "confinement", "detention", "custody"],
      answer: 3,
      explanation: "'Remanded in custody' is the fixed legal phrase for being held before trial. 'Captivity' applies to animals or hostages, and 'confinement' and 'detention' do not collocate with 'remanded'."
    },
    {
      text: "Whenever his childhood was mentioned, the conversation abruptly ____ off in another direction.",
      options: ["veered", "lurched", "careered", "toppled"],
      answer: 0,
      explanation: "'Veer off' is the natural verb for a conversation suddenly changing direction. 'Lurch' and 'career' suggest uncontrolled physical movement, and 'topple' means to fall over."
    },
    {
      text: "We ____ our brains all evening but couldn't remember the hotel's name.",
      options: ["wrung", "racked", "drained", "squeezed"],
      answer: 1,
      explanation: "'Rack one's brains' is the fixed idiom for thinking very hard. 'Wring', 'drain' and 'squeeze' convey extraction but do not collocate with 'brains'."
    },
    {
      text: "Members pay only a ____ fee, as the club is subsidised by the council.",
      options: ["titular", "honorary", "nominal", "notational"],
      answer: 2,
      explanation: "'Nominal fee' is the collocation for a token amount, small in relation to real value. 'Titular' and 'honorary' describe positions held in name only, and 'notational' relates to notation."
    },
    {
      text: "Investigators are still trying to ____ exactly when the leak began.",
      options: ["ascribe", "assert", "assent", "ascertain"],
      answer: 3,
      explanation: "'Ascertain' means to find out with certainty. 'Ascribe' means to attribute, 'assert' to state firmly, and 'assent' to agree, and none fits discovering facts."
    },
    {
      text: "The expansion plans have been put on the back ____ until the market recovers.",
      options: ["burner", "boiler", "stove", "hob"],
      answer: 0,
      explanation: "'Put on the back burner' is the idiom for postponing something to give it low priority. 'Boiler', 'stove' and 'hob' are kitchen equipment that do not form this expression."
    },
    {
      text: "The recruitment freeze will be held in ____ until the tribunal delivers its ruling.",
      options: ["hibernation", "abeyance", "dormancy", "suspense"],
      answer: 1,
      explanation: "'Held in abeyance' is the formal fixed phrase for temporarily suspending a rule or plan. 'Hibernation' and 'dormancy' are biological states, and 'in suspense' describes an anxious person."
    },
    {
      text: "It would be ____ of me not to thank the volunteers who made tonight possible.",
      options: ["amiss", "lax", "remiss", "slack"],
      answer: 2,
      explanation: "'It would be remiss of me not to' is the fixed formula for acknowledging a duty. 'Amiss' pairs with 'take' or 'go', and 'lax' and 'slack' describe standards, not this structure."
    },
    {
      text: "The country was still in the ____ of a painful transition to democracy.",
      options: ["throngs", "thrills", "threads", "throes"],
      answer: 3,
      explanation: "'In the throes of' is the fixed phrase for struggling through a difficult process. 'Throngs' are crowds, and 'thrills' and 'threads' do not form this idiom."
    },
    {
      text: "Most of what we know about the poet's life has been ____ from her letters.",
      options: ["gleaned", "harvested", "plucked", "reaped"],
      answer: 0,
      explanation: "'Glean information from' is the collocation for gathering facts gradually from scattered sources. 'Harvest', 'pluck' and 'reap' keep the agricultural sense and do not collocate with biographical detail."
    },
    {
      text: "The prime minister gave the beleaguered minister her ____ backing.",
      options: ["unilateral", "unequivocal", "univocal", "uniform"],
      answer: 1,
      explanation: "'Unequivocal backing' means support expressed without any ambiguity. 'Unilateral' means one-sided, 'univocal' is a technical term for having one meaning, and 'uniform' means unvarying."
    },
    {
      text: "The documentary probes the ____ world of offshore shell companies.",
      options: ["dusky", "misty", "murky", "foggy"],
      answer: 2,
      explanation: "'Murky' is the adjective for morally dubious or deliberately obscure dealings. 'Dusky', 'misty' and 'foggy' describe literal light and weather conditions."
    },
    {
      text: "The two clans had been ____ enemies for as long as anyone could remember.",
      options: ["vowed", "pledged", "oathed", "sworn"],
      answer: 3,
      explanation: "'Sworn enemies' is the fixed collocation for people determined to remain hostile. 'Vowed' and 'pledged' are not used attributively this way, and 'oathed' is not a word."
    },
    {
      text: "The attack advertisement ____ badly, generating sympathy for its target.",
      options: ["backfired", "backtracked", "backpedalled", "backslid"],
      answer: 0,
      explanation: "'Backfire' means to produce the opposite of the intended effect. 'Backtrack' and 'backpedal' mean to retreat from a position, and 'backslide' means to relapse into bad habits."
    },
    {
      text: "Police evacuated every building in the immediate ____ of the gas leak.",
      options: ["proximity", "vicinity", "adjacency", "closeness"],
      answer: 1,
      explanation: "'In the immediate vicinity of' is the fixed phrase for the surrounding area. 'Proximity' requires 'in close proximity to', and 'adjacency' and 'closeness' do not fit this structure."
    },
    {
      text: "She was so ____ in the novel that she missed her stop entirely.",
      options: ["enclosed", "entangled", "engrossed", "engraved"],
      answer: 2,
      explanation: "'Engrossed in' means completely absorbed by an activity. 'Enclosed' and 'engraved' are physical, and 'entangled in' suggests being caught up in difficulties."
    },
    {
      text: "The clerk recorded the exchange ____, hesitations and all.",
      options: ["literally", "orally", "liberally", "verbatim"],
      answer: 3,
      explanation: "'Verbatim' means word for word, exactly as spoken. 'Literally' concerns non-figurative meaning, 'orally' means by mouth, and 'liberally' means generously."
    },
    {
      text: "The smuggling ring operated for years with the ____ of corrupt border officials.",
      options: ["connivance", "contrivance", "conveyance", "convenience"],
      answer: 0,
      explanation: "'With the connivance of' means with someone's secret, willing tolerance of wrongdoing. 'Contrivance' is a scheme or device, 'conveyance' is transport, and 'convenience' is unrelated."
    },
    {
      text: "Witnesses refused to testify for fear of ____ against their families.",
      options: ["retributions", "reprisals", "requitals", "revenges"],
      answer: 1,
      explanation: "'Reprisals' is the standard plural noun for retaliatory acts against individuals. 'Retribution' and 'revenge' are normally uncountable, and 'requital' is archaic and does not fit."
    },
    {
      text: "For decades the militia looted villages with apparent ____.",
      options: ["immunity", "liberty", "impunity", "exemption"],
      answer: 2,
      explanation: "'With impunity' is the fixed phrase meaning without fear of punishment. 'Immunity' and 'exemption' take 'from', and 'liberty' appears in 'at liberty'."
    },
    {
      text: "Though it was her first appearance in court, the young barrister ____ herself admirably.",
      options: ["absolved", "exonerated", "vindicated", "acquitted"],
      answer: 3,
      explanation: "'Acquit oneself well' is the fixed reflexive idiom for performing creditably. 'Absolve', 'exonerate' and 'vindicate' all mean clearing someone of blame and are not used reflexively this way."
    },
    {
      text: "News of the takeover triggered a ____ of activity on the trading floor.",
      options: ["flurry", "gust", "swirl", "flicker"],
      answer: 0,
      explanation: "'A flurry of activity' is the fixed collocation for a short burst of intense action. 'Gust', 'swirl' and 'flicker' describe wind, motion and light rather than activity."
    },
    {
      text: "The developers are still ____ out a few glitches before the public release.",
      options: ["pressing", "ironing", "flattening", "steaming"],
      answer: 1,
      explanation: "'Iron out' is the phrasal verb for resolving minor problems. 'Press', 'flatten' and 'steam' relate to literal smoothing and do not carry this figurative sense."
    },
    {
      text: "Residents have been ____ for a bypass ever since the third fatal accident.",
      options: ["clattering", "chattering", "clamouring", "clanging"],
      answer: 2,
      explanation: "'Clamour for' means to demand something loudly and insistently. 'Clatter', 'chatter' and 'clang' are noise verbs that do not take 'for' with this meaning."
    },
    {
      text: "The dip in sales is largely ____ to unseasonably warm weather.",
      options: ["accountable", "dependable", "accredited", "attributable"],
      answer: 3,
      explanation: "'Attributable to' means able to be explained as caused by something. 'Accountable' means answerable to a person, 'accredited' means officially recognised, and 'dependable' means reliable."
    },
    {
      text: "An unexpected ____ from a great-aunt's will allowed her to clear the mortgage.",
      options: ["windfall", "downpour", "landslide", "outbreak"],
      answer: 0,
      explanation: "'Windfall' means a sum of money received unexpectedly, from fruit blown off trees. 'Downpour', 'landslide' and 'outbreak' keep their literal or negative senses."
    },
    {
      text: "The restorers worked with ____ care, cataloguing every fragment of paint.",
      options: ["strenuous", "scrupulous", "tenacious", "vigorous"],
      answer: 1,
      explanation: "'Scrupulous care' is the collocation for painstaking, conscientious attention. 'Strenuous' and 'vigorous' describe physical effort, and 'tenacious' describes persistence rather than care."
    },
    {
      text: "Despite twelve hours of talks, neither side would ____ an inch.",
      options: ["stir", "bend", "budge", "sway"],
      answer: 2,
      explanation: "'Not budge an inch' is the fixed expression for refusing to change position at all. 'Stir', 'bend' and 'sway' do not combine with 'an inch' in this idiom."
    },
    {
      text: "Leaving the courthouse, she had to run the ____ of jeering protesters.",
      options: ["gamut", "garret", "gimlet", "gauntlet"],
      answer: 3,
      explanation: "'Run the gauntlet' means to endure attack or criticism from a hostile crowd. 'Run the gamut' is the classic confusion but means to cover a whole range; 'garret' and 'gimlet' are unrelated."
    },
    {
      text: "The pamphlet was a crude attempt to ____ the judge's good name.",
      options: ["besmirch", "begrudge", "bemoan", "beguile"],
      answer: 0,
      explanation: "'Besmirch someone's good name' is the collocation for damaging a reputation. 'Begrudge' means to resent, 'bemoan' to lament, and 'beguile' to charm or deceive."
    },
    {
      text: "Instead of addressing the strategy, the committee spent an hour ____ over wording.",
      options: ["quivering", "quibbling", "quaking", "quailing"],
      answer: 1,
      explanation: "'Quibble over' means to argue about trivial details. 'Quiver' and 'quake' mean to tremble, and 'quail' means to flinch in fear."
    },
    {
      text: "As the rescue entered its fourth day, hope slowly ____ away.",
      options: ["sank", "shrank", "ebbed", "slumped"],
      answer: 2,
      explanation: "'Ebb away' is the fixed pairing for hope or strength gradually draining, like the tide. 'Sink', 'shrink' and 'slump' express decline but do not combine with 'away'."
    },
    {
      text: "From our ____ point on the ridge, the whole battlefield was visible.",
      options: ["advantage", "vintage", "visage", "vantage"],
      answer: 3,
      explanation: "'Vantage point' is the fixed compound for a position giving a good view. 'Advantage' is the near-identical trap, while 'vintage' and 'visage' are unrelated."
    },
    {
      text: "Commanders were accused of dismissing civilian deaths as ____ damage.",
      options: ["collateral", "lateral", "peripheral", "auxiliary"],
      answer: 0,
      explanation: "'Collateral damage' is the fixed euphemism for unintended harm to civilians. 'Lateral', 'peripheral' and 'auxiliary' share the sense of 'to the side' but do not form this phrase."
    },
    {
      text: "The auditors concluded that the warehouse manager was in ____ with the thieves.",
      options: ["cohorts", "cahoots", "unison", "accord"],
      answer: 1,
      explanation: "'In cahoots with' is the idiom for secretly conspiring with someone. 'In cohorts' is a common malapropism, 'in unison' means simultaneously, and 'in accord' means in agreement."
    },
    {
      text: "The squad faces a ____ schedule of nine matches in twenty-four days.",
      options: ["grovelling", "grumbling", "gruelling", "growling"],
      answer: 2,
      explanation: "'Gruelling' means extremely tiring and demanding, and collocates with 'schedule'. 'Grovelling' means abjectly submissive, and 'grumbling' and 'growling' are complaint and animal noises."
    },
    {
      text: "The sentence was reduced because of ____ circumstances, including the defendant's age.",
      options: ["extraneous", "extensive", "extrinsic", "extenuating"],
      answer: 3,
      explanation: "'Extenuating circumstances' is the fixed legal collocation for factors that reduce blame. 'Extraneous' means irrelevant, 'extrinsic' means external, and 'extensive' means wide-ranging."
    },
    {
      text: "With its rivals in disarray, the firm is ____ to dominate the market for years.",
      options: ["poised", "perched", "postured", "propped"],
      answer: 0,
      explanation: "'Poised to' means fully ready and likely to do something imminently. 'Perched' and 'propped' are physical positions, and 'postured' means behaved affectedly."
    },
    {
      text: "Vaccination is most effective when given before the ____ of symptoms.",
      options: ["upshot", "onset", "offset", "outcome"],
      answer: 1,
      explanation: "'Onset' is the standard noun for the beginning of something unpleasant such as illness. 'Upshot' and 'outcome' are results, and 'offset' is a counterbalance."
    },
    {
      text: "The ____ of the emergency meeting was that the product launch was postponed indefinitely.",
      options: ["offshoot", "uptake", "upshot", "downfall"],
      answer: 2,
      explanation: "'The upshot' means the final result or conclusion of a discussion or events. 'Offshoot' is a branch, 'uptake' appears in 'quick on the uptake', and 'downfall' is a ruin."
    },
    {
      text: "In the bazaar you are expected to spend a few minutes ____ over the price.",
      options: ["heckling", "hassling", "hustling", "haggling"],
      answer: 3,
      explanation: "'Haggle over the price' is the collocation for bargaining persistently. 'Heckle' means to interrupt a speaker, 'hassle' to pester, and 'hustle' to hurry or swindle."
    },
    {
      text: "Witnesses described a masked figure ____ a machete outside the bank.",
      options: ["brandishing", "branding", "blandishing", "burnishing"],
      answer: 0,
      explanation: "'Brandish' means to wave a weapon threateningly. 'Brand' means to mark or label, 'blandish' to coax with flattery, and 'burnish' to polish."
    },
    {
      text: "With city rents soaring, young families are looking further ____ for affordable homes.",
      options: ["astray", "afield", "aloft", "ashore"],
      answer: 1,
      explanation: "'Further afield' is the fixed phrase meaning in more distant places. 'Astray' means off the right path, 'aloft' means up high, and 'ashore' means onto land."
    },
    {
      text: "After the leaked memo contradicted his testimony, the director's position was no longer ____.",
      options: ["tensile", "tangible", "tenable", "tenacious"],
      answer: 2,
      explanation: "'Tenable' describes a position or argument that can be defended. 'Tensile' relates to stretching, 'tangible' means touchable or concrete, and 'tenacious' means persistent."
    },
    {
      text: "Few voters have grasped the full ____ of leaving the customs union.",
      options: ["ratifications", "ruminations", "remunerations", "ramifications"],
      answer: 3,
      explanation: "'Ramifications' are the complex, far-reaching consequences of an action. 'Ratifications' are formal approvals, 'ruminations' are ponderings, and 'remunerations' are payments."
    },
    {
      text: "He ____ at the memory of his speech at the wedding, even years later.",
      options: ["winced", "twitched", "blinked", "jerked"],
      answer: 0,
      explanation: "'Wince at' means to grimace involuntarily from embarrassment or pain. 'Twitch', 'blink' and 'jerk' are physical movements that do not convey embarrassed recollection with 'at'."
    },
    {
      text: "Thousands of pensioners were ____ into investing in the fraudulent scheme.",
      options: ["doped", "duped", "dubbed", "dumped"],
      answer: 1,
      explanation: "'Dupe someone into doing something' means to deceive them into it. 'Dope' means to drug, 'dub' to name or re-voice, and 'dump' to discard."
    },
    {
      text: "The regulator has ordered a root-and-branch ____ of the licensing system.",
      options: ["override", "overture", "overhaul", "overdrive"],
      answer: 2,
      explanation: "'Overhaul' means a thorough examination and reform of a system. 'Override' is an act of overruling, 'overture' an approach or musical opening, and 'overdrive' a state of intense activity."
    },
    {
      text: "The results bear out the old ____ that you get what you pay for.",
      options: ["adagio", "addendum", "appendage", "adage"],
      answer: 3,
      explanation: "'Adage' means a traditional saying expressing a general truth. 'Adagio' is a musical tempo, 'addendum' an addition to a document, and 'appendage' an attached part."
    },
    {
      text: "After the divorce, she sought ____ in long solitary walks along the coast.",
      options: ["solace", "penance", "respite", "remorse"],
      answer: 0,
      explanation: "'Seek solace in' means to find comfort in something during distress. 'Penance' is self-punishment, 'respite' is a pause from something arduous, and 'remorse' is guilt."
    },
    {
      text: "The report warns that speculation in farmland is now ____ across the region.",
      options: ["rambling", "rampant", "rampaging", "rancid"],
      answer: 1,
      explanation: "'Rampant' describes something undesirable spreading unchecked. 'Rambling' means digressive, 'rampaging' describes violent crowds or animals, and 'rancid' describes spoiled fat."
    },
    {
      text: "Within twenty minutes the annual general meeting had ____ into farce.",
      options: ["submerged", "stooped", "descended", "toppled"],
      answer: 2,
      explanation: "'Descend into farce' is the fixed collocation for a formal occasion deteriorating into absurdity. 'Submerge' and 'topple' are physical, and 'stoop' takes 'to', not 'into'."
    },
    {
      text: "By morning the kidnappers seemed more ____ to reason.",
      options: ["amiable", "amicable", "affable", "amenable"],
      answer: 3,
      explanation: "'Amenable to reason' means willing to be persuaded. 'Amiable', 'amicable' and 'affable' all mean friendly and describe temperament, not openness to persuasion."
    },
    {
      text: "Like many memoirists, he is ____ to exaggeration when the facts are dull.",
      options: ["prone", "apt", "eager", "capable"],
      answer: 0,
      explanation: "'Prone to' plus a noun means having a tendency towards something undesirable. 'Apt' takes an infinitive ('apt to exaggerate'), 'capable' takes 'of', and 'eager' implies willing enthusiasm."
    },
    {
      text: "The dispute was settled privately, without ____ to the courts.",
      options: ["discourse", "recourse", "resource", "concourse"],
      answer: 1,
      explanation: "'Without recourse to' means without resorting to a source of help. 'Resource' is the classic spelling trap, 'discourse' is discussion, and 'concourse' is an open area in a building."
    },
    {
      text: "Dozens of former patients will ____ to the surgeon's extraordinary skill.",
      options: ["vouch", "verify", "attest", "certify"],
      answer: 2,
      explanation: "'Attest to' means to bear witness to a quality. 'Vouch' takes 'for', while 'verify' and 'certify' are transitive and take a direct object."
    },
    {
      text: "At this critical ____ in the negotiations, any leak could be fatal.",
      options: ["junction", "joint", "interval", "juncture"],
      answer: 3,
      explanation: "'At this juncture' is the fixed formal phrase for a particular, often critical, point in events. 'Junction' is a physical meeting of roads, and 'joint' and 'interval' do not fit."
    },
    {
      text: "The study highlights the growing ____ between executive pay and average wages.",
      options: ["disparity", "dispersion", "disparagement", "desperation"],
      answer: 0,
      explanation: "'Disparity between' is the collocation for a great and unfair difference. 'Dispersion' is scattering, 'disparagement' is belittling criticism, and 'desperation' is hopelessness."
    },
    {
      text: "The treasurer had ____ club funds for years by forging invoices.",
      options: ["embellished", "embezzled", "embroiled", "embodied"],
      answer: 1,
      explanation: "'Embezzle' means to steal money entrusted to one's care. 'Embellish' means to decorate or exaggerate, 'embroil' to involve in conflict, and 'embody' to represent."
    },
    {
      text: "What began as a ____ of curious visitors soon swelled into a daily flood.",
      options: ["drip", "leak", "trickle", "splash"],
      answer: 2,
      explanation: "'Trickle' is the standard metaphor for a very small, slow flow of people, contrasting with 'flood'. 'Drip', 'leak' and 'splash' stay literal and do not describe visitors."
    },
    {
      text: "Lunch breaks are ____ so that the helpline is never left unstaffed.",
      options: ["straggled", "stumbled", "swerved", "staggered"],
      answer: 3,
      explanation: "'Staggered' means arranged at different, overlapping times. 'Straggle' means to trail untidily, and 'stumble' and 'swerve' describe movement, not scheduling."
    },
    {
      text: "The new contract gives freelancers more ____ in how they schedule their work.",
      options: ["leeway", "headway", "gangway", "runway"],
      answer: 0,
      explanation: "'Leeway' means freedom of action within limits. 'Headway' is progress made ('make headway'), and 'gangway' and 'runway' are physical passages."
    },
    {
      text: "Their ____ divorce filled the tabloids for the best part of a year.",
      options: ["sanctimonious", "acrimonious", "parsimonious", "ceremonious"],
      answer: 1,
      explanation: "'Acrimonious' means marked by bitterness and anger, and typically modifies disputes and divorces. 'Sanctimonious' means self-righteous, 'parsimonious' stingy, and 'ceremonious' formal."
    },
    {
      text: "The tribunal dismissed the allegation as based on nothing more than ____.",
      options: ["heresy", "earshot", "hearsay", "wordplay"],
      answer: 2,
      explanation: "'Hearsay' means second-hand information that cannot be verified. 'Heresy' is the near-homophone trap meaning unorthodox belief, and 'earshot' and 'wordplay' are unrelated."
    },
    {
      text: "Campaigners are demanding a ____ on deep-sea mining until its effects are understood.",
      options: ["memorandum", "momentum", "mausoleum", "moratorium"],
      answer: 3,
      explanation: "'A moratorium on' is the fixed structure for a temporary official ban. 'Memorandum' is a note, 'momentum' is impetus, and 'mausoleum' is a tomb."
    },
    {
      text: "Thousands of users became ____ accomplices when the virus forwarded itself from their accounts.",
      options: ["unwitting", "unassuming", "uncanny", "untold"],
      answer: 0,
      explanation: "'Unwitting' means unaware of one's role, and 'unwitting accomplice' is a fixed collocation. 'Unassuming' means modest, 'uncanny' eerie, and 'untold' immeasurable."
    },
    {
      text: "Critics argue that such casting decisions merely ____ tired stereotypes.",
      options: ["perpetrate", "perpetuate", "permeate", "penetrate"],
      answer: 1,
      explanation: "'Perpetuate stereotypes' means to cause them to continue. 'Perpetrate' (to commit a crime) is the classic confusion, and 'permeate' and 'penetrate' mean to spread or pass through."
    },
    {
      text: "The club said it would never ____ such behaviour, whatever the provocation.",
      options: ["condole", "condemn", "condone", "condense"],
      answer: 2,
      explanation: "'Condone' means to accept or overlook wrongdoing. 'Condemn' is its near-opposite, 'condole' means to express sympathy, and 'condense' to make shorter or denser."
    },
    {
      text: "The seamstresses worked twelve-hour days and were paid a ____ for it.",
      options: ["penance", "pretence", "pretext", "pittance"],
      answer: 3,
      explanation: "'A pittance' means a very small, inadequate amount of money. 'Penance' is self-punishment, 'pretence' is a false show, and 'pretext' a false reason."
    },
    {
      text: "She found herself in a ____ about whether to report her closest friend.",
      options: ["quandary", "quarry", "query", "quota"],
      answer: 0,
      explanation: "'In a quandary about' means unable to decide what to do. 'Quarry' is a pit or prey, 'query' a question, and 'quota' a fixed share."
    },
    {
      text: "Two senior aides were ____ in the scheme to funnel donations offshore.",
      options: ["implied", "implicated", "imputed", "imported"],
      answer: 1,
      explanation: "'Implicated in' means shown to be involved in wrongdoing. 'Implied' means suggested indirectly, 'imputed' attributes blame to someone with 'to', and 'imported' is unrelated."
    },
    {
      text: "Tenants more than two months in ____ now face automatic eviction proceedings.",
      options: ["arrest", "debts", "arrears", "deficits"],
      answer: 2,
      explanation: "'In arrears' is the fixed phrase for being behind with payments. 'In debt' would need the singular, and 'arrest' and 'deficits' do not form this expression."
    },
    {
      text: "The appeal court ____ the conviction after new DNA evidence emerged.",
      options: ["overthrew", "overtook", "overshadowed", "overturned"],
      answer: 3,
      explanation: "'Overturn a conviction' is the legal collocation for reversing a court's decision. Governments are 'overthrown', and 'overtake' and 'overshadow' do not apply to verdicts."
    },
    {
      text: "The documentary celebrates the ____ heroes who keep the city running overnight.",
      options: ["unsung", "unspoken", "untold", "unheard"],
      answer: 0,
      explanation: "'Unsung heroes' is the fixed collocation for people whose contributions go unrecognised. 'Unspoken', 'untold' and 'unheard' modify words, stories and voices, not heroes."
    },
    {
      text: "The assumption of rational behaviour continues to ____ most economic models.",
      options: ["undergo", "underpin", "undercut", "undertake"],
      answer: 1,
      explanation: "'Underpin' means to form the basis or support for a theory. 'Undergo' means to experience, 'undercut' to weaken or undersell, and 'undertake' to take on a task."
    },
    {
      text: "Historians regard the invention of movable type as a ____ in the spread of ideas.",
      options: ["waterline", "watermark", "watershed", "waterfront"],
      answer: 2,
      explanation: "'Watershed' means a turning point marking a decisive change. 'Waterline', 'watermark' and 'waterfront' retain their literal senses and do not carry this meaning."
    },
    {
      text: "Facing a consumer boycott, the chain finally ____ to demands for a living wage.",
      options: ["congratulated", "recapitulated", "capsized", "capitulated"],
      answer: 3,
      explanation: "'Capitulate to' means to stop resisting and give in to demands. 'Recapitulate' means to summarise, 'capsize' to overturn in water, and 'congratulate' is unrelated."
    },
    {
      text: "A party ____ of forty years' standing, she had stuffed envelopes for ten leaders.",
      options: ["stalwart", "bystander", "stowaway", "bulwark"],
      answer: 0,
      explanation: "'Stalwart' as a noun means a loyal, hard-working supporter of an organisation. 'Bystander' is an onlooker, 'stowaway' a hidden traveller, and 'bulwark' a defence against something."
    },
    {
      text: "Only when the evacuation began did residents grasp the ____ of the situation.",
      options: ["gravitas", "gravity", "grandeur", "gratitude"],
      answer: 1,
      explanation: "'The gravity of the situation' is the fixed collocation for its seriousness. 'Gravitas' is a person's dignified manner, and 'grandeur' and 'gratitude' do not fit."
    },
    {
      text: "The developer ____ on its promise to build affordable housing on the site.",
      options: ["renounced", "retracted", "reneged", "revolted"],
      answer: 2,
      explanation: "'Renege on a promise' means to fail to honour it. 'Renounce' and 'retract' are transitive and take the promise directly, and 'revolt' means to rebel."
    },
    {
      text: "Sandbags did little to ____ the effects of the worst flooding in decades.",
      options: ["militate", "meditate", "mediate", "mitigate"],
      answer: 3,
      explanation: "'Mitigate' means to make something less severe. 'Militate' (which takes 'against') is the classic confusion, while 'meditate' and 'mediate' concern reflection and arbitration."
    },
    {
      text: "Halfway across the Atlantic, the yacht's navigation system went ____.",
      options: ["haywire", "wildfire", "overdrive", "turmoil"],
      answer: 0,
      explanation: "'Go haywire' is the idiom for equipment malfunctioning erratically. 'Wildfire' pairs with 'spread like', 'overdrive' requires 'go into', and 'turmoil' takes 'in'."
    },
    {
      text: "Winning the Palme d'Or was, she said, the ____ of her forty-year career.",
      options: ["spire", "pinnacle", "turret", "steeple"],
      answer: 1,
      explanation: "'The pinnacle of one's career' is the fixed collocation for its highest point of achievement. 'Spire', 'turret' and 'steeple' remain strictly architectural."
    },
    {
      text: "A good juror weighs the evidence without being ____ by clever rhetoric.",
      options: ["swung", "tilted", "swayed", "wavered"],
      answer: 2,
      explanation: "'Swayed by' means influenced or persuaded by something. 'Swing' and 'tilt' describe physical movement, and 'waver' is intransitive so cannot be passive."
    },
    {
      text: "Reports of a rift between the two ministers remain pure ____.",
      options: ["conjuncture", "conjugation", "concoction", "conjecture"],
      answer: 3,
      explanation: "'Pure conjecture' is the collocation for an opinion based on guesswork. 'Conjuncture' is a combination of circumstances, 'conjugation' a grammatical term, and 'concoction' a mixture or fabricated story."
    },
    {
      text: "Serious allegations of bribery have been ____ at three members of the board.",
      options: ["levelled", "pitched", "angled", "pointed"],
      answer: 0,
      explanation: "'Level accusations at someone' is the fixed collocation for directing charges formally. 'Pitch', 'angle' and 'point' involve direction but do not collocate with allegations."
    },
    {
      text: "When the project collapsed, the junior consultant was made a ____ for the directors' failings.",
      options: ["figurehead", "scapegoat", "pushover", "mascot"],
      answer: 1,
      explanation: "'Made a scapegoat for' means unfairly blamed for others' mistakes. A 'figurehead' is a leader without power, a 'pushover' someone easily beaten, and a 'mascot' a good-luck symbol."
    },
    {
      text: "Judging by the flurry of closed-door meetings, a boardroom coup is ____.",
      options: ["aloft", "adrift", "afoot", "agog"],
      answer: 2,
      explanation: "'Afoot' means being planned or already in progress, usually of something secretive. 'Aloft' means up high, 'adrift' means drifting, and 'agog' means eagerly expectant."
    },
    {
      text: "Diplomats tried to ____ something from the wreckage of the failed summit.",
      options: ["scavenge", "forage", "loot", "salvage"],
      answer: 3,
      explanation: "'Salvage something from the wreckage' is the fixed metaphor for rescuing what can be saved from a failure. 'Scavenge', 'forage' and 'loot' describe searching or stealing, not rescue."
    },
    {
      text: "The hearing was ____ until Thursday so that new witnesses could be traced.",
      options: ["adjourned", "adjoined", "adjudged", "adjusted"],
      answer: 0,
      explanation: "'Adjourn' means to suspend proceedings until a later time. 'Adjoin' means to be next to, 'adjudge' to declare formally, and 'adjust' to alter slightly."
    },
    {
      text: "There was a great ____ and cry when the council proposed felling the ancient oaks.",
      options: ["hew", "hue", "howl", "hush"],
      answer: 1,
      explanation: "'Hue and cry' is the fixed idiom for a loud public outcry. 'Hew' is the homophone trap meaning to chop, and 'howl' and 'hush' do not form this binomial."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
