/* CPE Prep extra bank: part1 wave 5 */
(function () {
  var BANK = [
    {
      text: "The pensioner had to ____ out a meagre living by selling home-grown vegetables at the market.",
      options: ["string", "spin", "eke", "stretch"],
      answer: 2,
      explanation: "'Eke out a living' is the fixed phrase for scraping together barely enough to survive on. 'Spin out' means to prolong something, and 'string out' and 'stretch out' do not collocate with 'a living'."
    },
    {
      text: "She waited for a quiet moment to ____ the awkward question of who would inherit the house.",
      options: ["broach", "breach", "hatch", "launch"],
      answer: 0,
      explanation: "'Broach a subject/question' means to raise it for the first time. 'Breach' means to break a rule or barrier, 'hatch' pairs with plots or schemes, and we 'launch' campaigns or products, not questions."
    },
    {
      text: "His constant flattery of the director was a transparent attempt to ____ favour.",
      options: ["brew", "stir", "milk", "curry"],
      answer: 3,
      explanation: "'Curry favour (with someone)' is the idiom for ingratiating oneself through flattery. 'Brew', 'stir' and 'milk' all have figurative uses (brew trouble, stir resentment, milk a situation) but none combines with 'favour'."
    },
    {
      text: "Knowing the dog's temper, the postman gave the front gate a wide ____.",
      options: ["margin", "berth", "clearance", "distance"],
      answer: 1,
      explanation: "'Give something a wide berth' is the fixed idiom for deliberately avoiding it. 'Margin', 'clearance' and 'distance' all relate to space but none forms this expression with 'give... a wide'."
    },
    {
      text: "Despite the doctors' best efforts, the patient eventually ____ to the infection.",
      options: ["capitulated", "succumbed", "conceded", "expired"],
      answer: 1,
      explanation: "'Succumb to' is the standard verb for dying of or being overcome by an illness. 'Capitulate' describes surrendering to an enemy or demand, 'concede' takes a direct object, and 'expire' is not followed by 'to'."
    },
    {
      text: "In a ____, the report concludes that the scheme costs far more than it will ever save.",
      options: ["capsule", "shell", "kernel", "nutshell"],
      answer: 3,
      explanation: "'In a nutshell' is the fixed phrase meaning 'to sum up briefly'. 'Capsule', 'shell' and 'kernel' evoke similar images of compactness but none forms this idiom."
    },
    {
      text: "There was a ____ understanding between the two firms that neither would poach the other's staff.",
      options: ["tacit", "taciturn", "muted", "unsaid"],
      answer: 0,
      explanation: "A 'tacit understanding/agreement' is one implied without being stated. 'Taciturn' describes an uncommunicative person, 'muted' means subdued in tone, and 'unsaid' is predicative (left unsaid), not attributive here; 'unspoken' would be needed instead."
    },
    {
      text: "He has no ____ about charging his closest friends full price for his services.",
      options: ["excuses", "apologies", "qualms", "offences"],
      answer: 2,
      explanation: "'Have no qualms about doing something' means to feel no unease or scruples. 'Excuses' and 'apologies' take 'for' rather than 'about' in this sense, and 'offences' is simply wrong in meaning."
    },
    {
      text: "Rather than ____ away his inheritance on gadgets and gambling, he invested the lot in bonds.",
      options: ["fritter", "dwindle", "trickle", "seep"],
      answer: 0,
      explanation: "'Fritter away' means to waste money or time on trifles and is transitive. 'Dwindle', 'trickle' and 'seep' are all intransitive verbs of gradual decrease or flow, so none can take 'his inheritance' as an object."
    },
    {
      text: "The discovery was ____ as a turning point in the treatment of diabetes.",
      options: ["saluted", "cheered", "hailed", "clapped"],
      answer: 2,
      explanation: "'Hailed as' is the standard collocation for publicly acclaiming something as significant. 'Saluted', 'cheered' and 'clapped' express approval but do not take the 'as + noun' complement idiomatically."
    },
    {
      text: "The government announced a ____ of measures aimed at helping first-time buyers.",
      options: ["fleet", "raft", "barge", "flotilla"],
      answer: 1,
      explanation: "'A raft of measures/proposals' is the fixed collocation for a large collection of them. 'Fleet', 'barge' and 'flotilla' are literal nautical terms with no such figurative use."
    },
    {
      text: "Club members must ____ by the rules or face immediate expulsion.",
      options: ["adhere", "comply", "conform", "abide"],
      answer: 3,
      explanation: "'Abide by' is the correct verb-preposition pairing for obeying rules. 'Adhere', 'comply' and 'conform' express the same idea but take 'to', 'with' and 'to' respectively, not 'by'."
    },
    {
      text: "The committee produced only a skeleton proposal and asked us to ____ out the details.",
      options: ["pad", "beef", "fatten", "flesh"],
      answer: 3,
      explanation: "'Flesh out' means to add substance and detail to an outline. 'Pad out' means to lengthen with unnecessary material, 'beef' pairs with 'up' not 'out', and 'fatten out' is not idiomatic."
    },
    {
      text: "She was ____ aware that every mistake she made would be scrutinised by the press.",
      options: ["sharply", "acutely", "piercingly", "severely"],
      answer: 1,
      explanation: "'Acutely aware' is the established intensifying collocation. 'Sharply', 'piercingly' and 'severely' convey intensity but none conventionally modifies 'aware'."
    },
    {
      text: "His sudden burst of generosity ____ of a guilty conscience.",
      options: ["whiffs", "tastes", "smacks", "sniffs"],
      answer: 2,
      explanation: "'Smack of' means to suggest the presence of something, usually unwelcome. 'Taste of' is literal, and 'whiff' and 'sniff' are not used as verbs with 'of' in this figurative sense."
    },
    {
      text: "For working parents, the school's free breakfast club has proved an absolute ____.",
      options: ["godsend", "windfall", "jackpot", "bonanza"],
      answer: 0,
      explanation: "A 'godsend' is something unexpectedly helpful in a time of need. 'Windfall', 'jackpot' and 'bonanza' all refer to sudden financial gain, which does not fit a service that saves parents time."
    },
    {
      text: "Details of the new model are being kept firmly under ____ until the official launch.",
      options: ["covers", "seals", "wraps", "veils"],
      answer: 2,
      explanation: "'Under wraps' is the fixed idiom for keeping something secret. 'Covers', 'seals' and 'veils' all suggest concealment but do not form this expression with 'under'."
    },
    {
      text: "It took every ounce of courage she could ____ to step out onto the stage.",
      options: ["assemble", "amass", "harvest", "muster"],
      answer: 3,
      explanation: "'Muster courage' (like 'summon') is the standard collocation for gathering one's nerve. 'Assemble', 'amass' and 'harvest' apply to people, wealth and crops respectively, not to courage."
    },
    {
      text: "The union rejected the one-per-cent pay offer as ____, given double-digit inflation.",
      options: ["derisory", "derisive", "dismissive", "scornful"],
      answer: 0,
      explanation: "'Derisory' means so small as to be laughable — the classic word for an insultingly low offer. 'Derisive', 'dismissive' and 'scornful' describe a mocking attitude, not the inadequacy of an amount."
    },
    {
      text: "Chaos ____ when the floodlights failed midway through the cup final.",
      options: ["pursued", "ensued", "proceeded", "succeeded"],
      answer: 1,
      explanation: "'Ensue' means to happen as a result, and 'chaos ensued' is a stock phrase. 'Pursued' and 'succeeded' need objects in the relevant senses, and 'proceeded' means continued rather than followed from."
    },
    {
      text: "The paper's conclusions rested on ____ statistics that no independent reviewer could verify.",
      options: ["spurious", "superficial", "superfluous", "supercilious"],
      answer: 0,
      explanation: "'Spurious' means false or fabricated, fitting data that cannot be verified. 'Superficial' means shallow, 'superfluous' means unnecessary, and 'supercilious' means arrogant — none captures falseness."
    },
    {
      text: "Had the crew paid proper ____ to the storm warnings, the tragedy could have been averted.",
      options: ["regard", "heed", "mind", "observance"],
      answer: 1,
      explanation: "'Pay heed to' is the fixed collocation for taking warnings seriously. 'Regard' takes 'have regard to' in formal use, 'mind' does not combine with 'pay', and 'observance' refers to complying with customs or laws."
    },
    {
      text: "Despite mounting losses, the family firm ____ on for another decade before finally closing.",
      options: ["trooped", "marched", "paraded", "soldiered"],
      answer: 3,
      explanation: "'Soldier on' means to persevere doggedly through difficulty. 'Troop', 'march' and 'parade' describe literal collective movement and do not form this idiom with 'on'."
    },
    {
      text: "The lawyer approved the contract, with the ____ that clause nine be reworded first.",
      options: ["reserve", "exception", "caveat", "objection"],
      answer: 2,
      explanation: "A 'caveat' (like a proviso) is a stated condition or warning attached to an agreement. 'With the exception that' would mean excluding something, 'reserve' needs 'reservation', and 'objection' implies refusal rather than conditional approval."
    },
    {
      text: "In many workplaces a ____ still attaches to admitting you suffer from mental illness.",
      options: ["taint", "stigma", "blot", "smear"],
      answer: 1,
      explanation: "'A stigma attaches to' something is the standard pattern for social disgrace. 'Taint', 'blot' and 'smear' all denote marks on reputation but do not combine with 'attach to' in this way."
    },
    {
      text: "The audition process is designed to ____ out candidates who crumble under pressure.",
      options: ["weed", "prune", "mow", "rake"],
      answer: 0,
      explanation: "'Weed out' means to identify and remove unwanted members of a group. 'Prune', 'mow' and 'rake' are literal gardening verbs that do not form this phrasal verb with 'out'."
    },
    {
      text: "All this technical wrangling ultimately ____ down to one simple question: who pays?",
      options: ["melts", "stews", "boils", "simmers"],
      answer: 2,
      explanation: "'Boil down to' means to have as its essential point. 'Melt', 'stew' and 'simmer' are cooking verbs without this figurative use with 'down to'."
    },
    {
      text: "Any talk of privatising the service is ____ to the union's older members.",
      options: ["allergy", "hostility", "aversion", "anathema"],
      answer: 3,
      explanation: "'Anathema to someone' means utterly abhorrent to them. 'Allergy' and 'aversion' run in the opposite direction (one has an allergy/aversion TO a thing), and 'hostility' describes the members' feeling, not the idea itself."
    },
    {
      text: "Volunteers went from door to door trying to ____ up support for the referendum campaign.",
      options: ["beat", "knock", "bang", "drum"],
      answer: 3,
      explanation: "'Drum up' means to actively solicit support, business or interest. 'Beat', 'knock' and 'bang' share the percussion image but none forms a phrasal verb with 'up' meaning to canvass support."
    },
    {
      text: "The storm finally ____ towards dawn, allowing the rescue boats to set out.",
      options: ["waived", "expired", "abated", "lapsed"],
      answer: 2,
      explanation: "'Abate' is the verb for storms, pain or anger becoming less intense. 'Waive' means to forgo a right, 'expire' means to run out or die, and 'lapse' describes agreements or standards, not weather."
    },
    {
      text: "Only three senior aides were ____ to the details of the secret negotiations.",
      options: ["privy", "subject", "liable", "accustomed"],
      answer: 0,
      explanation: "'Privy to' means having secret knowledge shared with few others. 'Subject to' means governed by, 'liable to' means prone to, and 'accustomed to' means used to — none conveys insider knowledge."
    },
    {
      text: "During a brief ____ in the fighting, medics rushed forward to reach the wounded.",
      options: ["void", "lull", "slack", "droop"],
      answer: 1,
      explanation: "A 'lull' is a temporary quiet interval in activity, the standard word for a pause in fighting. 'Void' is emptiness, 'slack' refers to looseness or a quiet business period, and 'droop' describes physical sagging."
    },
    {
      text: "Investigating private-sector fraud falls well outside the committee's ____.",
      options: ["errand", "agenda", "remit", "manifesto"],
      answer: 2,
      explanation: "A body's 'remit' is the official scope of its authority, and 'outside its remit' is the set phrase. An 'agenda' lists items for one meeting, an 'errand' is a small task, and a 'manifesto' is a statement of policy."
    },
    {
      text: "The initial cost estimates for the tunnel proved ____ inaccurate.",
      options: ["strongly", "heavily", "broadly", "wildly"],
      answer: 3,
      explanation: "'Wildly inaccurate' is the natural intensifying collocation for estimates that miss by a huge margin. 'Broadly' pairs with 'accurate' (broadly accurate), and 'strongly' and 'heavily' do not modify 'inaccurate'."
    },
    {
      text: "The official inquiry fully ____ the pilot of any blame for the crash.",
      options: ["exonerated", "vindicated", "redeemed", "pardoned"],
      answer: 0,
      explanation: "'Exonerate someone of/from blame' means to clear them officially. 'Vindicate' takes a direct object without 'of blame', 'redeem' means to compensate for faults, and 'pardon' forgives someone 'for' an offence already established."
    },
    {
      text: "The bribery allegations ____ his hitherto spotless reputation.",
      options: ["rusted", "tarnished", "corroded", "withered"],
      answer: 1,
      explanation: "'Tarnish a reputation' is the standard figurative collocation for damaging it. 'Rust' and 'corrode' remain literal for metals in this context, and 'wither' is intransitive when applied to things fading."
    },
    {
      text: "He called round on the ____ of returning a borrowed book, hoping to see her again.",
      options: ["alibi", "motive", "pretext", "disguise"],
      answer: 2,
      explanation: "'On the pretext of' is the fixed phrase for a false stated reason. An 'alibi' proves absence from a crime scene, a 'motive' is a real underlying reason, and 'disguise' takes 'in' or 'under', not 'on the... of'."
    },
    {
      text: "After a brief ____ as a war correspondent, she settled into a quieter editing job.",
      options: ["bout", "streak", "term", "stint"],
      answer: 3,
      explanation: "A 'stint' is a fixed period spent doing a particular job. A 'bout' is a spell of illness or activity like drinking, a 'streak' is a run of luck or results, and a 'term' implies a formally defined period of office."
    },
    {
      text: "Patients were strongly advised to ____ from alcohol while taking the medication.",
      options: ["abstain", "restrain", "avoid", "resist"],
      answer: 0,
      explanation: "'Abstain from' is the correct verb-preposition pairing for deliberately not consuming something. 'Restrain' needs an object (restrain oneself), and 'avoid' and 'resist' take direct objects without 'from'."
    },
    {
      text: "Public interest in the series began to ____ noticeably after the third season.",
      options: ["halt", "flag", "crumble", "topple"],
      answer: 1,
      explanation: "'Flag' means to weaken or fade gradually, the natural verb for waning interest or energy. 'Halt' implies a sudden complete stop, while 'crumble' and 'topple' describe structures or regimes collapsing."
    },
    {
      text: "One careless remark to the press could ____ months of delicate diplomacy.",
      options: ["forfeit", "hazard", "jeopardise", "overthrow"],
      answer: 2,
      explanation: "'Jeopardise' means to put at risk of failure. 'Forfeit' means to lose as a penalty, 'hazard' as a verb means to venture (hazard a guess), and 'overthrow' applies to governments or regimes."
    },
    {
      text: "In ____, selling the house just before the property boom was a costly mistake.",
      options: ["review", "reflection", "recollection", "retrospect"],
      answer: 3,
      explanation: "'In retrospect' is the fixed phrase for looking back with later knowledge. 'Reflection' requires 'on' (on reflection), and 'in review' and 'in recollection' are not idiomatic equivalents."
    },
    {
      text: "As a former minister she still carries considerable political ____ in the capital.",
      options: ["clout", "punch", "fist", "grip"],
      answer: 0,
      explanation: "'Clout' means influence or power, and 'political clout' is the standard collocation with 'carry'. 'Punch' figures in 'pack a punch', while 'fist' and 'grip' do not denote influence here."
    },
    {
      text: "His frankness at the dinner table was ____ on rudeness.",
      options: ["edging", "verging", "brimming", "leaning"],
      answer: 1,
      explanation: "'Verge on' means to be very close to a (usually undesirable) state. 'Brim' takes 'with', 'lean' takes 'towards', and 'edge on' is not an idiomatic combination."
    },
    {
      text: "Plans for the bypass were ____ indefinitely when the funding collapsed.",
      options: ["drawered", "tabled", "shelved", "boarded"],
      answer: 2,
      explanation: "'Shelve' means to postpone or abandon a plan. 'Table' is a trap: in British English it means to formally submit something for discussion, the opposite of postponing; 'drawered' and 'boarded' are not verbs of postponement."
    },
    {
      text: "Lower prices boost demand; by the same ____, higher wages tend to push prices up.",
      options: ["sign", "measure", "mark", "token"],
      answer: 3,
      explanation: "'By the same token' is the fixed phrase meaning 'following the same line of reasoning'. 'Sign', 'measure' and 'mark' cannot replace 'token' in this idiom."
    },
    {
      text: "The director dismissed the attacks on the film as wholly ____ and refused to respond.",
      options: ["unwarranted", "unqualified", "unlicensed", "unauthorized"],
      answer: 0,
      explanation: "'Unwarranted' means without justification, the usual word for undeserved criticism. 'Unqualified' criticism would mean absolute criticism, while 'unlicensed' and 'unauthorized' concern official permission."
    },
    {
      text: "The airline offered meal vouchers in a vain attempt to ____ the stranded passengers.",
      options: ["mitigate", "placate", "alleviate", "moderate"],
      answer: 1,
      explanation: "'Placate' means to calm an angry person, so it takes people as its object. 'Mitigate' and 'alleviate' reduce problems or suffering, not people, and 'moderate' means to make less extreme."
    },
    {
      text: "A sudden spike in fuel prices ____ the haulage industry's existing woes.",
      options: ["thickened", "doubled", "compounded", "enlarged"],
      answer: 2,
      explanation: "'Compound' means to make a bad situation worse, collocating naturally with 'woes' or 'problems'. 'Thicken' pairs with plots, 'double' implies exact multiplication, and 'enlarge' does not take abstract troubles."
    },
    {
      text: "The plant will remain closed for the ____ future while safety checks continue.",
      options: ["predictable", "conceivable", "imminent", "foreseeable"],
      answer: 3,
      explanation: "'For the foreseeable future' is the fixed phrase meaning for as far ahead as can be judged. 'Predictable', 'conceivable' and 'imminent' do not form this expression with 'future'."
    },
    {
      text: "The independent report was commissioned at the ____ of the finance minister herself.",
      options: ["behest", "order", "decree", "summons"],
      answer: 0,
      explanation: "'At the behest of' is the formal fixed phrase meaning at someone's command or request. 'Order' would require 'on the orders of', and 'decree' and 'summons' do not fit the 'at the ____ of' frame."
    },
    {
      text: "After the children left home, the big house seemed ____ of all life and noise.",
      options: ["absent", "bereft", "forlorn", "vacant"],
      answer: 1,
      explanation: "'Bereft of' means sadly deprived of something and is the only option that takes 'of'. 'Absent', 'forlorn' and 'vacant' are close in feeling but none combines with 'of all life'."
    },
    {
      text: "He ____ through the final exam with just one mark to spare.",
      options: ["crawled", "slid", "scraped", "skidded"],
      answer: 2,
      explanation: "'Scrape through' means to pass only narrowly. 'Crawl', 'slide' and 'skid' describe literal movement and do not form this idiom for a marginal pass."
    },
    {
      text: "The referee was ____ criticised for failing to consult the video replay.",
      options: ["squarely", "thickly", "richly", "roundly"],
      answer: 3,
      explanation: "'Roundly criticised/condemned' means severely and unreservedly. 'Richly' pairs with 'deserved', 'squarely' with 'blamed' in the sense of directly, and 'thickly' has no such use."
    },
    {
      text: "She has a well-known ____ for wearing outrageous hats to formal occasions.",
      options: ["penchant", "habit", "custom", "routine"],
      answer: 0,
      explanation: "'A penchant for' is the correct noun-preposition pairing for a strong liking. 'Habit' and 'custom' take 'of' plus gerund, and 'routine' does not take 'for wearing' at all."
    },
    {
      text: "Examples of such quiet generosity ____ in the historical record, if one cares to look.",
      options: ["thrive", "abound", "swell", "heap"],
      answer: 1,
      explanation: "'Abound' means to exist in large numbers and is used intransitively of examples or opportunities. 'Thrive' means to flourish, 'swell' means to grow larger, and 'heap' is transitive."
    },
    {
      text: "The parcel was promised for Friday morning and ____ arrived on the dot of nine.",
      options: ["thereby", "hence", "duly", "thus"],
      answer: 2,
      explanation: "'Duly' means as expected or arranged, exactly fitting something happening as promised. 'Thereby', 'hence' and 'thus' all express consequence or manner, not fulfilled expectation."
    },
    {
      text: "Rebel forces fought for weeks to ____ control of the port from government troops.",
      options: ["tug", "yank", "clasp", "wrest"],
      answer: 3,
      explanation: "'Wrest control/power from' is the fixed collocation for seizing it after a struggle. 'Tug', 'yank' and 'clasp' are literal hand movements with no such figurative use."
    },
    {
      text: "Offering to resign was a calculated ____ designed to force the board's hand.",
      options: ["gambit", "gimmick", "riddle", "hunch"],
      answer: 0,
      explanation: "A 'gambit' is a strategic opening move involving calculated risk. A 'gimmick' is an attention-grabbing trick, a 'riddle' is a puzzle, and a 'hunch' is an intuitive feeling."
    },
    {
      text: "Research on the epidemic is hampered by the ____ of reliable data from the region.",
      options: ["deficit", "paucity", "vacancy", "brevity"],
      answer: 1,
      explanation: "'Paucity' means an insufficient quantity and collocates with 'of data/evidence'. A 'deficit' is a financial or measurable shortfall, 'vacancy' is an unfilled post, and 'brevity' concerns shortness of duration."
    },
    {
      text: "The band reunited last summer after a ten-year ____.",
      options: ["standby", "recess", "hiatus", "adjournment"],
      answer: 2,
      explanation: "A 'hiatus' is an extended break in an activity or career. A 'recess' is a scheduled break in parliamentary or court business, an 'adjournment' is the formal suspension of a meeting, and 'standby' means readiness to act."
    },
    {
      text: "With a mixture of flattery and promises, she ____ her reluctant brother into joining the choir.",
      options: ["cajoled", "jeered", "taunted", "mocked"],
      answer: 0,
      explanation: "'Cajole someone into doing something' means to persuade them with coaxing or flattery. 'Jeer', 'taunt' and 'mock' express ridicule and do not take the 'into + gerund' persuasion pattern."
    },
    {
      text: "The rented generator is only a ____ until mains power can be restored to the village.",
      options: ["foothold", "stopgap", "milestone", "bottleneck"],
      answer: 1,
      explanation: "A 'stopgap' is a temporary substitute used until something better is available. A 'foothold' is an initial secure position, a 'milestone' marks progress, and a 'bottleneck' is a point of congestion."
    },
    {
      text: "Given her decades of experience, she is ____ qualified to lead the review.",
      options: ["gravely", "keenly", "utterly", "eminently"],
      answer: 3,
      explanation: "'Eminently' means 'to a notable degree' and collocates with positive adjectives like 'qualified', 'sensible' and 'suitable'. 'Gravely', 'keenly' and 'utterly' do not idiomatically modify 'qualified'."
    },
    {
      text: "The whole appointment process ____ of cronyism, according to opposition MPs.",
      options: ["reeks", "fumes", "odours", "scents"],
      answer: 0,
      explanation: "'Reek of' means to suggest something unpleasant very strongly. 'Fume' means to show anger, and 'odour' and 'scent' are not used as verbs with 'of' in this figurative sense."
    },
    {
      text: "Teachers are given considerable ____ in how they choose to deliver the syllabus.",
      options: ["breadth", "latitude", "longitude", "width"],
      answer: 1,
      explanation: "'Latitude' means freedom of action or choice. 'Breadth' describes range or scope rather than permitted freedom, and 'longitude' and 'width' are purely spatial terms."
    },
    {
      text: "Feigning injury was merely a ____ to waste the last few minutes of the match.",
      options: ["trap", "antic", "ploy", "prank"],
      answer: 2,
      explanation: "A 'ploy' is a cunning act performed to gain an advantage. A 'trap' catches someone else, an 'antic' is playful behaviour, and a 'prank' is a practical joke, not a tactical manoeuvre."
    },
    {
      text: "The home team ____ a three-goal lead in a disastrous final quarter.",
      options: ["mislaid", "drained", "forfeited", "squandered"],
      answer: 3,
      explanation: "'Squander a lead/opportunity' means to waste it carelessly. 'Forfeit' means to lose something as a formal penalty, 'mislay' applies to physical objects, and 'drain' does not take 'a lead'."
    },
    {
      text: "Her debut novel won widespread critical ____ and several literary prizes.",
      options: ["acclaim", "ovation", "cheering", "standing"],
      answer: 0,
      explanation: "'Critical acclaim' is the fixed collocation for praise from reviewers. An 'ovation' is applause at a live event (usually 'a standing ovation'), and 'cheering' and 'standing' do not combine with 'critical'."
    },
    {
      text: "An air of quiet menace ____ from the abandoned house at the end of the lane.",
      options: ["erupted", "emanated", "ejected", "evacuated"],
      answer: 1,
      explanation: "'Emanate from' is the verb for a quality or feeling flowing out from a source. 'Erupt' implies sudden violence, and 'eject' and 'evacuate' are transitive verbs of physical removal."
    },
    {
      text: "The minister took a great deal of ____ for the botched vaccine rollout.",
      options: ["thunder", "hail", "flak", "shrapnel"],
      answer: 2,
      explanation: "'Take/get flak' is the idiom for receiving heavy criticism. 'Thunder', 'hail' and 'shrapnel' evoke similar images of bombardment but none is used in this fixed expression."
    },
    {
      text: "The summit gave fresh ____ to the stalled peace negotiations.",
      options: ["thrust", "propulsion", "velocity", "impetus"],
      answer: 3,
      explanation: "'Give (fresh) impetus to' is the standard collocation for re-energising a process. 'Thrust', 'propulsion' and 'velocity' are technical terms of motion that do not fit this figurative frame."
    },
    {
      text: "Applicants must be fully ____ with current data-protection legislation.",
      options: ["conversant", "versed", "fluent", "cognizant"],
      answer: 0,
      explanation: "'Conversant with' is the correct pairing for having good working knowledge of something. 'Versed' takes 'in', 'cognizant' takes 'of', and 'fluent' takes 'in' and applies to languages."
    },
    {
      text: "The stage adaptation earned ____ from even the sternest of the London critics.",
      options: ["salutes", "plaudits", "medals", "toasts"],
      answer: 1,
      explanation: "'Plaudits' means expressions of praise, typically 'earned/won from critics'. 'Salutes', 'medals' and 'toasts' are literal gestures or awards that do not collocate here."
    },
    {
      text: "The chairman deftly ____ round the question of executive bonuses.",
      options: ["ducked", "veered", "skirted", "swayed"],
      answer: 2,
      explanation: "'Skirt (round) an issue' means to avoid addressing it directly. 'Duck' takes the question as a direct object without 'round', 'veer' describes changing direction, and 'sway' means to swing or influence."
    },
    {
      text: "The film's connection to the novel it claims to adapt is ____ at best.",
      options: ["feeble", "meagre", "sparse", "tenuous"],
      answer: 3,
      explanation: "'Tenuous' is the classic adjective for a weak, barely perceptible link or connection. 'Meagre' describes insufficient amounts, 'sparse' describes thin distribution, and 'feeble' applies to strength or arguments."
    },
    {
      text: "He spent his later years quietly trying to ____ for the wrongs of his youth.",
      options: ["atone", "repent", "expiate", "regret"],
      answer: 0,
      explanation: "'Atone for' is the correct verb-preposition pairing for making amends. 'Repent' takes 'of' or a direct object, 'expiate' is transitive without 'for', and 'regret' takes a direct object."
    },
    {
      text: "Analysts believe the country stands on the ____ of a digital revolution.",
      options: ["hinge", "cusp", "rim", "ledge"],
      answer: 1,
      explanation: "'On the cusp of' means at the point of transition into a new state. 'Hinge', 'rim' and 'ledge' are physical edges that do not form this idiom."
    },
    {
      text: "Campaigners dismissed the official report as a ____ designed to shield senior officials.",
      options: ["bleach", "varnish", "whitewash", "polish"],
      answer: 2,
      explanation: "A 'whitewash' is an attempt to conceal wrongdoing by glossing over the facts. 'Bleach', 'varnish' and 'polish' are literal surface treatments without this established figurative noun use."
    },
    {
      text: "A skilled interviewer establishes an easy ____ with guests within minutes.",
      options: ["liaison", "harmony", "affinity", "rapport"],
      answer: 3,
      explanation: "'Establish/build a rapport with' someone is the standard collocation for a relationship of mutual understanding. A 'liaison' is a working link or affair, and 'harmony' and 'affinity' are not things one 'establishes with' a person."
    },
    {
      text: "The new manager ____ with the weekly progress meetings altogether.",
      options: ["dispensed", "disposed", "discarded", "dispatched"],
      answer: 0,
      explanation: "'Dispense with' means to do away with something unnecessary. 'Dispose' takes 'of', while 'discard' and 'dispatch' are transitive verbs that do not combine with 'with'."
    },
    {
      text: "Journalists somehow got ____ of the impending merger a week before the announcement.",
      options: ["breath", "wind", "whiff", "sniff"],
      answer: 1,
      explanation: "'Get wind of' is the idiom for hearing about something secret. 'Whiff' and 'sniff' would need an article ('get a whiff of'), and 'get breath of' is not idiomatic."
    },
    {
      text: "The dress rehearsal was a complete ____, with actors missing their cues throughout.",
      options: ["wreckage", "turmoil", "shambles", "rubble"],
      answer: 2,
      explanation: "'A (complete) shambles' is the idiom for a scene of total disorder. 'Turmoil' is uncountable and cannot follow 'a complete', while 'wreckage' and 'rubble' refer to physical debris."
    },
    {
      text: "He would live to ____ the day he signed away the patent rights.",
      options: ["mourn", "grieve", "repent", "rue"],
      answer: 3,
      explanation: "'Rue the day' is the fixed idiom for bitterly regretting a past action. 'Mourn' and 'grieve' concern loss and death, and 'repent' takes 'of' or concerns sin rather than this expression."
    },
    {
      text: "By ____ of sheer persistence, she eventually talked her way into the closed archive.",
      options: ["dint", "strength", "weight", "stroke"],
      answer: 0,
      explanation: "'By dint of' is the fixed phrase meaning 'by means of (sustained effort)'. 'Strength', 'weight' and 'stroke' do not form this expression with 'by... of'."
    },
    {
      text: "The celebrity chef's first ____ into television ended after a single poorly received series.",
      options: ["excursion", "foray", "incursion", "trespass"],
      answer: 1,
      explanation: "A 'foray into' a field is a first attempt at a new activity. An 'excursion' is a pleasure trip, an 'incursion' is a hostile raid into territory, and 'trespass' is unlawful entry onto land."
    },
    {
      text: "Detectives spent weeks ____ through thousands of phone records in search of a pattern.",
      options: ["straining", "filtering", "sifting", "screening"],
      answer: 2,
      explanation: "'Sift through' means to examine a mass of material carefully to find what matters. 'Strain', 'filter' and 'screen' are transitive separation verbs that do not idiomatically take 'through'."
    },
    {
      text: "Halfway through the meeting she had a sudden ____: why not sell the licence rather than the company?",
      options: ["mindset", "impulse", "whim", "brainwave"],
      answer: 3,
      explanation: "A 'brainwave' is a sudden brilliant idea. An 'impulse' and a 'whim' are sudden urges to act rather than ideas, and a 'mindset' is a settled way of thinking."
    },
    {
      text: "Fortunately the two departments' timetables ____ neatly, allowing shared use of the laboratories.",
      options: ["dovetail", "entwine", "huddle", "collide"],
      answer: 0,
      explanation: "'Dovetail' means to fit together conveniently, like the carpentry joint. 'Entwine' means to twist together, 'huddle' describes people crowding close, and 'collide' means the opposite of fitting neatly."
    },
    {
      text: "He regarded the joke as a ____ on his professional integrity and demanded an apology.",
      options: ["taunt", "slur", "scoff", "sneer"],
      answer: 1,
      explanation: "'A slur on someone's character/integrity' is the fixed pattern for a damaging insinuation. 'Taunt', 'scoff' and 'sneer' express mockery but none takes 'on' in this construction."
    },
    {
      text: "Sales of the toy took a ____ once the safety scandal broke.",
      options: ["capsize", "stumble", "nosedive", "downfall"],
      answer: 2,
      explanation: "'Take a nosedive' is the idiom for a sudden sharp decline in sales or popularity. 'Capsize' is a verb for boats, and neither 'stumble' nor 'downfall' combines with 'take a' in this sense."
    },
    {
      text: "Unwilling to commit to either supplier, the firm decided to ____ its bets and order from both.",
      options: ["hedge", "fence", "shield", "guard"],
      answer: 0,
      explanation: "'Hedge your bets' is the fixed idiom for protecting yourself by backing more than one option. 'Fence', 'shield' and 'guard' all suggest protection but none forms this expression with 'bets'."
    },
    {
      text: "Never one to ____ his words, the coach described the performance as disgraceful.",
      options: ["chew", "mince", "grind", "chop"],
      answer: 1,
      explanation: "'Not mince (one's) words' means to speak bluntly. 'Chew', 'grind' and 'chop' share the food-preparation image but do not form this idiom."
    },
    {
      text: "Despite meeting only that morning, the two composers were instantly on the same ____.",
      options: ["channel", "circuit", "current", "wavelength"],
      answer: 3,
      explanation: "'On the same wavelength' is the idiom for understanding each other effortlessly. 'Channel', 'circuit' and 'current' belong to the same semantic field but none forms this expression."
    },
    {
      text: "Several unforeseen problems ____ up during the installation of the new system.",
      options: ["cropped", "sprouted", "budded", "bloomed"],
      answer: 0,
      explanation: "'Crop up' means to appear unexpectedly. 'Sprout', 'bud' and 'bloom' are literal verbs of plant growth that do not form a phrasal verb with 'up' meaning to arise."
    },
    {
      text: "The new border measures aim to ____ the smuggling of stolen antiquities.",
      options: ["detain", "curb", "apprehend", "confiscate"],
      answer: 1,
      explanation: "'Curb' means to restrain or limit an undesirable activity. 'Detain' and 'apprehend' take people as objects, and 'confiscate' takes the goods themselves, not the activity of smuggling."
    },
    {
      text: "Much of the syllabus was memorised by ____ rather than genuinely understood.",
      options: ["drill", "recital", "rote", "chant"],
      answer: 2,
      explanation: "'By rote' is the fixed phrase for learning through mechanical repetition. 'Drill', 'recital' and 'chant' relate to repetition but none combines with 'by' in this expression."
    },
    {
      text: "The West End production was comprehensively ____ by reviewers as self-indulgent nonsense.",
      options: ["potted", "canned", "tinned", "panned"],
      answer: 3,
      explanation: "'Pan' means to criticise a performance or work severely. 'Pot', 'can' and 'tin' are container verbs with no sense of harsh reviewing ('canned' colloquially means dismissed from a job)."
    },
    {
      text: "The early trial results ____ well for the vaccine's chances of regulatory approval.",
      options: ["bode", "herald", "signal", "foretell"],
      answer: 0,
      explanation: "'Bode well/ill for' is the fixed pattern for being a good or bad sign. 'Herald', 'signal' and 'foretell' are transitive and cannot be followed by 'well for'."
    },
    {
      text: "He remained curiously ____ about his years in the diplomatic service.",
      options: ["muffled", "reticent", "confidential", "unspoken"],
      answer: 1,
      explanation: "'Reticent about' describes a person unwilling to reveal information. 'Confidential' and 'unspoken' describe the information itself, and 'muffled' describes deadened sound."
    },
    {
      text: "The device is being ____ as the biggest leap in home computing for a decade.",
      options: ["flaunted", "boasted", "touted", "brandished"],
      answer: 2,
      explanation: "'Tout something as' means to promote it enthusiastically with a particular claim. 'Flaunt' and 'brandish' mean to display ostentatiously without 'as', and 'boast' takes 'of/about' or a clause."
    },
    {
      text: "Researchers ____ a cache of letters that completely rewrote the poet's biography.",
      options: ["uprooted", "exhumed", "excavated", "unearthed"],
      answer: 3,
      explanation: "'Unearth' is the standard figurative verb for discovering hidden documents or facts. 'Exhume' applies to buried bodies, 'excavate' to archaeological sites, and 'uproot' to plants or settled people."
    },
    {
      text: "The snub at the awards ceremony still ____ with him years later.",
      options: ["rankled", "festered", "throbbed", "smarted"],
      answer: 0,
      explanation: "'Rankle (with someone)' means to continue causing resentment. 'Fester' describes wounds or resentments worsening but does not take 'with him', and 'throb' and 'smart' describe physical pain."
    },
    {
      text: "The market has become ____ with cheap imitations of the original design.",
      options: ["drenched", "saturated", "soaked", "steeped"],
      answer: 1,
      explanation: "'Saturated with' is the standard term for a market completely filled with products. 'Drenched' and 'soaked' remain literal for liquids, and 'steeped in' is used of history or tradition."
    },
    {
      text: "After weeks of dithering, the couple finally ____ for the cheaper of the two venues.",
      options: ["swayed", "leaned", "plumped", "inclined"],
      answer: 2,
      explanation: "'Plump for' means to choose decisively after hesitation. 'Lean' and 'incline' take 'towards' and suggest tendency rather than final choice, and 'sway' does not take 'for'."
    },
    {
      text: "She couldn't shake off a ____ doubt about his version of that evening's events.",
      options: ["itching", "scratching", "pinching", "niggling"],
      answer: 3,
      explanation: "A 'niggling doubt' is a persistent small worry that refuses to go away. 'Itching', 'scratching' and 'pinching' describe physical irritation and do not collocate with 'doubt'."
    },
    {
      text: "The early conviction remains a ____ on an otherwise distinguished career.",
      options: ["blot", "dent", "bruise", "smudge"],
      answer: 0,
      explanation: "'A blot on someone's record/career' is the fixed expression for a mark of disgrace. 'Dent' takes 'in' (a dent in his confidence), and 'bruise' and 'smudge' lack this figurative pattern with 'on'."
    },
    {
      text: "The album's lush string sound ____ back to the disco era of the late seventies.",
      options: ["turns", "harks", "bends", "leans"],
      answer: 1,
      explanation: "'Hark back to' means to evoke or recall an earlier period or style. 'Turn', 'bend' and 'lean' describe physical orientation and do not form this idiom with 'back to'."
    },
    {
      text: "All speakers are carefully ____ by security before being allowed anywhere near the royal party.",
      options: ["auditioned", "probed", "vetted", "invigilated"],
      answer: 2,
      explanation: "'Vet' means to check a person's background and suitability. 'Audition' assesses performing ability, 'probe' investigates matters rather than clears people, and 'invigilate' means to supervise an exam."
    },
    {
      text: "A small loan from her sister was enough to ____ her over until payday.",
      options: ["pull", "carry", "see", "tide"],
      answer: 3,
      explanation: "'Tide someone over' means to help them through a temporary difficulty. 'See' would need 'through' (see her through), and 'pull' and 'carry' do not form this phrasal verb with 'over'."
    },
    {
      text: "Weeks of ideal weather produced a ____ harvest of soft fruit this year.",
      options: ["bumper", "banner", "buoyant", "booming"],
      answer: 0,
      explanation: "'A bumper harvest/crop/year' is the fixed collocation for an unusually abundant one. 'Banner' collocates with 'year' in American English, and 'buoyant' and 'booming' describe markets and economies."
    },
    {
      text: "After thirty years behind the bar, Marge had become a permanent ____ of the village pub.",
      options: ["landmark", "fixture", "furniture", "monument"],
      answer: 1,
      explanation: "A 'permanent fixture' is the idiom for a person or thing that seems always to be present somewhere. 'Furniture' figures in 'part of the furniture' but cannot follow 'a permanent', and 'landmark' and 'monument' apply to places."
    },
    {
      text: "The dispute over the succession opened a deep ____ within the ruling family.",
      options: ["cleft", "crevice", "rift", "ravine"],
      answer: 2,
      explanation: "A 'rift' is the standard figurative word for a serious breach in a relationship. 'Cleft', 'crevice' and 'ravine' denote literal splits in rock or ground."
    },
    {
      text: "A well-timed joke from the chairwoman helped to ____ the mounting tension in the room.",
      options: ["dismantle", "disband", "disarm", "defuse"],
      answer: 3,
      explanation: "'Defuse tension/a crisis' means to make it less dangerous, extending the bomb metaphor. 'Dismantle' takes structures or systems, 'disband' takes groups, and 'disarm' takes people or criticism."
    },
    {
      text: "The consultants produced ____ of analysis but not one workable recommendation.",
      options: ["reams", "bales", "wads", "sheaves"],
      answer: 0,
      explanation: "'Reams of' is the idiom for very large quantities of writing or documentation. 'Bales', 'wads' and 'sheaves' are literal bundles of paper or straw without this figurative use."
    },
    {
      text: "The opening of the festival was ____ by news of the director's sudden death.",
      options: ["obscured", "overshadowed", "darkened", "shrouded"],
      answer: 1,
      explanation: "'Overshadow' is the verb for a sad event dominating and spoiling an occasion. 'Obscure' means to make hard to see or understand, 'darken' is chiefly literal, and 'shroud' pairs with mystery or secrecy."
    },
    {
      text: "Budget carriers have made significant ____ into the national airline's market share.",
      options: ["invasions", "incisions", "inroads", "intrusions"],
      answer: 2,
      explanation: "'Make inroads into' is the fixed collocation for gradually encroaching on territory or market share. 'Invasions', 'incisions' and 'intrusions' do not combine with 'make... into' in this sense."
    },
    {
      text: "On market days the normally sleepy square becomes a veritable ____ of activity.",
      options: ["swarm", "nest", "web", "hive"],
      answer: 3,
      explanation: "'A hive of activity' is the fixed idiom for a place buzzing with busy people. 'Swarm', 'nest' and 'web' belong to the same insect imagery but none forms this expression."
    },
    {
      text: "I wouldn't ____ on the trains running to timetable during the strike.",
      options: ["bank", "hinge", "perch", "anchor"],
      answer: 0,
      explanation: "'Bank on' means to rely confidently on something happening. 'Hinge on' means to depend on but takes an outcome as its subject, and 'perch' and 'anchor' are literal with 'on'."
    },
    {
      text: "The ____ chief executive faced yet another shareholder revolt at Friday's meeting.",
      options: ["belaboured", "becalmed", "beleaguered", "bemused"],
      answer: 2,
      explanation: "'Beleaguered' means under sustained pressure or criticism from all sides. 'Belaboured' means over-elaborated, 'becalmed' describes a ship without wind, and 'bemused' means puzzled."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
