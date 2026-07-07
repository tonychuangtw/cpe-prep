/* CPE Prep extra bank: part3 wave 1 */
(function () {
  var BANK = [
    /* ---------- batch 1 (1-30) ---------- */
    {
      text: "Psychologists argue that many of our deepest fears are rooted in experiences from early ____.",
      stem: "CHILD",
      answers: ["childhood"],
      explanation: "A noun for the period of being a child is needed: child + -hood = childhood."
    },
    {
      text: "House prices in this once run-down ____ have tripled since the metro line opened.",
      stem: "NEIGHBOUR",
      answers: ["neighbourhood", "neighborhood"],
      explanation: "A noun meaning 'local district' is required: neighbour + -hood. Both British and American spellings are accepted."
    },
    {
      text: "Caring for three elderly relatives had become so ____ that she was forced to give up her job.",
      stem: "BURDEN",
      answers: ["burdensome"],
      explanation: "An adjective after 'so' describing a heavy load: burden + -some = burdensome."
    },
    {
      text: "The auditors concluded that the firm's accounts were wholly ____ and refused to sign them off.",
      stem: "TRUST",
      answers: ["untrustworthy"],
      explanation: "The refusal to sign signals a negative adjective: trust → trustworthy → untrustworthy."
    },
    {
      text: "The volunteers' ____ efforts during the floods earned them a civic medal.",
      stem: "PRAISE",
      answers: ["praiseworthy"],
      explanation: "An adjective meaning 'deserving praise' modifies 'efforts': praise + -worthy."
    },
    {
      text: "Editors must decide within minutes whether a breaking story is genuinely ____.",
      stem: "NEWS",
      answers: ["newsworthy"],
      explanation: "An adjective meaning 'important enough to report' is needed: news + -worthy."
    },
    {
      text: "Even as a boy he was ____, picking fights with anyone who contradicted him.",
      stem: "QUARREL",
      answers: ["quarrelsome"],
      explanation: "An adjective describing a person given to arguing: quarrel + -some = quarrelsome."
    },
    {
      text: "Villagers soon tired of their ____ new councillor, who poked his nose into every private matter.",
      stem: "MEDDLE",
      answers: ["meddlesome"],
      explanation: "An adjective meaning 'interfering' is needed: meddle + -some = meddlesome."
    },
    {
      text: "Filling in the same form in triplicate is a ____ chore that the new software should eliminate.",
      stem: "TIRE",
      answers: ["tiresome"],
      explanation: "An adjective meaning 'annoyingly tedious' modifies 'chore': tire + -some = tiresome."
    },
    {
      text: "The committee criticised the sheer ____ of the application process, which can drag on for a year.",
      stem: "LONG",
      answers: ["length"],
      explanation: "A noun is needed after 'the sheer', with an internal vowel change: long → length."
    },
    {
      text: "Regular resistance training can significantly ____ the muscles that support the spine.",
      stem: "STRONG",
      answers: ["strengthen"],
      explanation: "A verb is needed after 'can': strong → strength → strengthen (internal change plus -en)."
    },
    {
      text: "Few readers appreciate the ____ of research that underpins a single page of her fiction.",
      stem: "DEEP",
      answers: ["depth"],
      explanation: "A noun is required after 'the': deep → depth, with an internal vowel change."
    },
    {
      text: "The bridge had to be rebuilt because its ____ could not accommodate modern lorries.",
      stem: "WIDE",
      answers: ["width"],
      explanation: "A noun meaning 'how wide something is' is needed: wide → width."
    },
    {
      text: "The director uses silence deliberately to ____ the tension before the final confrontation.",
      stem: "HIGH",
      answers: ["heighten"],
      explanation: "A verb meaning 'intensify' is needed after 'to': high → height → heighten."
    },
    {
      text: "What impressed the examiners was the sheer ____ of her reading, from medieval poetry to quantum physics.",
      stem: "BROAD",
      answers: ["breadth"],
      explanation: "A noun meaning 'wide range' is needed: broad → breadth, an internal change."
    },
    {
      text: "He refused all offers of charity, insisting that his ____ would not allow it.",
      stem: "PROUD",
      answers: ["pride"],
      explanation: "A noun is required after 'his': proud → pride, involving an internal vowel change."
    },
    {
      text: "Our connecting ____ was cancelled, leaving us stranded in Istanbul overnight.",
      stem: "FLY",
      answers: ["flight"],
      explanation: "A noun for a plane journey is needed: fly → flight, an irregular derivation."
    },
    {
      text: "For most economists, the benefits of free trade comfortably ____ its costs.",
      stem: "WEIGH",
      answers: ["outweigh"],
      explanation: "A verb meaning 'be greater than' is needed: the prefix out- gives outweigh."
    },
    {
      text: "The sudden ____ of the contract forced the firm to lay off a quarter of its workforce.",
      stem: "LOSE",
      answers: ["loss"],
      explanation: "A noun is needed after 'the sudden': lose → loss, an irregular internal change."
    },
    {
      text: "Faced with such an agonising ____, she asked for another week to think it over.",
      stem: "CHOOSE",
      answers: ["choice"],
      explanation: "A noun is required after the adjective 'agonising': choose → choice."
    },
    {
      text: "Overfishing threatens the ____ of thousands of coastal families.",
      stem: "LIVE",
      answers: ["livelihoods", "livelihood"],
      explanation: "A noun meaning 'means of earning a living' is needed: live → livelihood, with the suffix -hood."
    },
    {
      text: "In all ____, the manuscript was destroyed in the fire of 1731.",
      stem: "LIKELY",
      answers: ["likelihood"],
      explanation: "The fixed phrase 'in all likelihood' (= almost certainly) requires the noun with -hood."
    },
    {
      text: "The memoir was withdrawn from sale after several of its central claims were exposed as ____.",
      stem: "FALSE",
      answers: ["falsehoods"],
      explanation: "A plural noun meaning 'lies' is needed: false + -hood(s) = falsehoods."
    },
    {
      text: "His father threatened to ____ him if he abandoned the family business.",
      stem: "OWN",
      answers: ["disown"],
      explanation: "A verb meaning 'refuse to acknowledge as one's relative' is needed: dis- + own."
    },
    {
      text: "In an ____ moment, the minister admitted the policy had been a mistake.",
      stem: "GUARD",
      answers: ["unguarded"],
      explanation: "The article 'an' and the admission point to the negative adjective: un- + guarded (= careless, off guard)."
    },
    {
      text: "After his wife's death, he came to value the ____ of his dog above almost everything.",
      stem: "COMPANION",
      answers: ["companionship"],
      explanation: "An abstract noun for the state of having company is needed: companion + -ship."
    },
    {
      text: "The settlers endured terrible ____ during their first winter on the plains.",
      stem: "HARD",
      answers: ["hardships", "hardship"],
      explanation: "A noun meaning 'severe suffering or deprivation' is needed: hard + -ship."
    },
    {
      text: "Under the military government, strict ____ of the press silenced all dissenting voices.",
      stem: "CENSOR",
      answers: ["censorship"],
      explanation: "An abstract noun for the practice of suppressing material is needed: censor + -ship."
    },
    {
      text: "Her ____ articles are dense with footnotes, yet her lectures are wonderfully accessible.",
      stem: "SCHOLAR",
      answers: ["scholarly"],
      explanation: "An adjective describing academic writing is needed: scholar + -ly (here forming an adjective, not an adverb)."
    },
    {
      text: "For sheer variety of landscape, New Zealand is ____ among countries of its size.",
      stem: "RIVAL",
      answers: ["unrivalled", "unrivaled"],
      explanation: "An adjective meaning 'having no equal' is needed: un- + rival + -ed. Both spellings are accepted."
    },

    /* ---------- batch 2 (31-60) ---------- */
    {
      text: "His constant boasting is generally thought to mask a deep-seated ____.",
      stem: "SECURE",
      answers: ["insecurity"],
      explanation: "A negative noun is needed after the adjective: secure → security → insecurity."
    },
    {
      text: "Performance ____ affects even the most seasoned musicians before a premiere.",
      stem: "ANXIOUS",
      answers: ["anxiety"],
      explanation: "A noun is needed: anxious → anxiety, with an internal spelling change."
    },
    {
      text: "It was pure ____ rather than suspicion that made her open the unmarked box.",
      stem: "CURIOUS",
      answers: ["curiosity"],
      explanation: "A noun is required after 'pure': curious → curiosity (note the loss of the 'u')."
    },
    {
      text: "The ____ of affordable housing has pushed many young families out of the capital.",
      stem: "SCARCE",
      answers: ["scarcity"],
      explanation: "A noun meaning 'shortage' is needed: scarce + -ity = scarcity."
    },
    {
      text: "Experts spent months verifying the ____ of the newly discovered diaries.",
      stem: "AUTHENTIC",
      answers: ["authenticity"],
      explanation: "A noun meaning 'genuineness' is needed: authentic + -ity."
    },
    {
      text: "Critics loved the ____ of her acceptance speech, which was clearly not scripted.",
      stem: "SPONTANEOUS",
      answers: ["spontaneity"],
      explanation: "A noun is needed: spontaneous → spontaneity, with a tricky internal spelling change."
    },
    {
      text: "The government's ____ to control inflation triggered a run on the currency.",
      stem: "ABLE",
      answers: ["inability"],
      explanation: "A negative noun after 'The government's' is required: able → ability → inability."
    },
    {
      text: "Political ____ in the region has scared away nearly all foreign investment.",
      stem: "STABLE",
      answers: ["instability"],
      explanation: "The context of scared-off investors forces the negative noun: stable → stability → instability."
    },
    {
      text: "The report found that the chemicals had been stored ____, in direct violation of safety codes.",
      stem: "RESPONSIBLE",
      answers: ["irresponsibly"],
      explanation: "An adverb with negative meaning modifies 'stored': ir- + responsible + -ly."
    },
    {
      text: "The recordings had been obtained ____ and were therefore ruled inadmissible in court.",
      stem: "LEGAL",
      answers: ["illegally"],
      explanation: "An adverb modifying 'obtained' with negative force is needed: il- + legal + -ly."
    },
    {
      text: "The election was annulled after observers documented widespread ____ in the count.",
      stem: "REGULAR",
      answers: ["irregularities"],
      explanation: "A plural noun meaning 'improper practices' is needed: ir- + regular + -ity → irregularities."
    },
    {
      text: "Critics say the drug was released ____, before long-term trials had been completed.",
      stem: "MATURE",
      answers: ["prematurely"],
      explanation: "An adverb meaning 'too early' is needed: pre- + mature + -ly = prematurely."
    },
    {
      text: "Her ____ with slow learners made her quite unsuited to teaching.",
      stem: "PATIENT",
      answers: ["impatience"],
      explanation: "A negative noun after 'Her' is required: patient → patience → impatience."
    },
    {
      text: "Against all predictions, the untrained crew ____ survived three weeks adrift in the Pacific.",
      stem: "PROBABLE",
      answers: ["improbably"],
      explanation: "An adverb meaning 'in an unlikely way' is needed: im- + probable → improbably."
    },
    {
      text: "Handwritten letters from the poet are effectively ____, so the archive insures each one for a fortune.",
      stem: "REPLACE",
      answers: ["irreplaceable"],
      explanation: "An adjective meaning 'impossible to replace' is needed: ir- + replace + -able."
    },
    {
      text: "The bakery's aroma drifted ____ across the square, drawing in passers-by all morning.",
      stem: "RESIST",
      answers: ["irresistibly"],
      explanation: "An adverb is needed: resist → irresistible → irresistibly (impossible to resist)."
    },
    {
      text: "Scientists warn that the melting of the ice sheet may already be ____.",
      stem: "REVERSE",
      answers: ["irreversible"],
      explanation: "An adjective meaning 'impossible to undo' is needed: ir- + reverse + -ible."
    },
    {
      text: "Investors often behave ____, selling in a panic at the very bottom of the market.",
      stem: "RATIONAL",
      answers: ["irrationally"],
      explanation: "An adverb with negative meaning modifies 'behave': ir- + rational + -ly."
    },
    {
      text: "The judge dismissed the witness's remarks about the defendant's clothing as an ____.",
      stem: "RELEVANT",
      answers: ["irrelevance"],
      explanation: "A negative noun is needed after 'an': relevant → irrelevant → irrelevance."
    },
    {
      text: "Adult ____ remains stubbornly high in regions where schooling was disrupted by the war.",
      stem: "LITERATE",
      answers: ["illiteracy"],
      explanation: "A negative noun meaning 'inability to read and write' is needed: il- + literate → illiteracy."
    },
    {
      text: "The translation was withdrawn after reviewers catalogued dozens of factual ____.",
      stem: "ACCURATE",
      answers: ["inaccuracies"],
      explanation: "A plural negative noun is needed: accurate → inaccuracy → inaccuracies."
    },
    {
      text: "The inquiry blamed the disaster on the ____ of the safety inspections.",
      stem: "ADEQUATE",
      answers: ["inadequacy"],
      explanation: "A negative noun is needed after 'the': adequate → inadequacy (insufficiency)."
    },
    {
      text: "By the end of the interrogation his answers had become rambling and ____.",
      stem: "COHERE",
      answers: ["incoherent"],
      explanation: "A negative adjective parallel to 'rambling' is needed: cohere → coherent → incoherent."
    },
    {
      text: "The DNA evidence proved ____, so the case rested entirely on witness testimony.",
      stem: "CONCLUDE",
      answers: ["inconclusive"],
      explanation: "A negative adjective is required: conclude → conclusive → inconclusive (not decisive)."
    },
    {
      text: "Detectives noticed several glaring ____ between his two statements to the police.",
      stem: "CONSIST",
      answers: ["inconsistencies"],
      explanation: "A plural negative noun is needed: consist → consistency → inconsistencies (contradictions)."
    },
    {
      text: "The airline apologised for the delay and offered vouchers to compensate for the ____.",
      stem: "CONVENIENT",
      answers: ["inconvenience"],
      explanation: "A negative noun is needed after 'the': convenient → convenience → inconvenience."
    },
    {
      text: "Weeks of ____ over the venue nearly caused the summit to be cancelled altogether.",
      stem: "DECIDE",
      answers: ["indecision"],
      explanation: "A negative noun meaning 'inability to decide' is needed: decide → decision → indecision."
    },
    {
      text: "The northern lights were ____ beautiful; no photograph does them justice.",
      stem: "DESCRIBE",
      answers: ["indescribably"],
      explanation: "An adverb modifying 'beautiful' is needed: describe → indescribable → indescribably."
    },
    {
      text: "A reliable dictionary is an ____ tool for any serious translator.",
      stem: "DISPENSE",
      answers: ["indispensable"],
      explanation: "An adjective meaning 'absolutely essential' is needed: in- + dispense + -able (cannot be dispensed with)."
    },
    {
      text: "The satellite ____ vanished from radar screens somewhere over the Indian Ocean.",
      stem: "EXPLAIN",
      answers: ["inexplicably"],
      explanation: "An adverb meaning 'in a way that cannot be explained' is needed: explain → inexplicable → inexplicably."
    },

    /* ---------- batch 3 (61-90) ---------- */
    {
      text: "She drew on a seemingly ____ supply of anecdotes to keep the audience entertained.",
      stem: "EXHAUST",
      answers: ["inexhaustible"],
      explanation: "An adjective meaning 'impossible to use up' is needed: in- + exhaust + -ible."
    },
    {
      text: "The novel is above all a protest against the ____ of the colonial legal system.",
      stem: "JUST",
      answers: ["injustice", "injustices"],
      explanation: "A negative noun is needed: just → justice → injustice (unfairness)."
    },
    {
      text: "The archive contains ____ letters, most of which have never been catalogued.",
      stem: "NUMBER",
      answers: ["innumerable"],
      explanation: "An adjective meaning 'too many to count' is needed: in- + number → innumerable."
    },
    {
      text: "His lawyers entered a plea of ____, citing three separate psychiatric reports.",
      stem: "SANE",
      answers: ["insanity"],
      explanation: "A negative noun is needed in the legal phrase 'plea of insanity': sane → sanity → insanity."
    },
    {
      text: "The vaccine was ____ tested on older patients, so its effects on that group remain unclear.",
      stem: "SUFFICIENT",
      answers: ["insufficiently"],
      explanation: "An adverb with negative meaning modifies 'tested': in- + sufficient + -ly."
    },
    {
      text: "Conditions in the overcrowded camp were described by inspectors as ____.",
      stem: "TOLERATE",
      answers: ["intolerable"],
      explanation: "A negative adjective is needed: tolerate → tolerable → intolerable (impossible to endure)."
    },
    {
      text: "Whatever the question, his answer was ____ the same: 'Wait and see.'",
      stem: "VARY",
      answers: ["invariably"],
      explanation: "An adverb meaning 'always, without variation' is needed: vary → invariable → invariably."
    },
    {
      text: "Cuttlefish achieve near ____ by matching both the colour and texture of the seabed.",
      stem: "VISIBLE",
      answers: ["invisibility"],
      explanation: "A negative noun is needed after 'near': visible → invisibility (the state of being unseen)."
    },
    {
      text: "The scandal exposed a culture of ____ reaching to the very top of the bank.",
      stem: "HONEST",
      answers: ["dishonesty"],
      explanation: "A negative noun is needed: honest → honesty → dishonesty."
    },
    {
      text: "Voting with the opposition was seen by party elders as an act of open ____.",
      stem: "LOYAL",
      answers: ["disloyalty"],
      explanation: "A negative noun is needed after 'an act of open': loyal → loyalty → disloyalty."
    },
    {
      text: "The campaign of civil ____ brought the capital to a standstill for a week.",
      stem: "OBEY",
      answers: ["disobedience"],
      explanation: "The fixed phrase 'civil disobedience' requires the negative noun: obey → obedience → disobedience."
    },
    {
      text: "The rejection letter was so ____ that she almost gave up writing altogether.",
      stem: "COURAGE",
      answers: ["discouraging"],
      explanation: "A negative -ing adjective describing the letter's effect is needed: dis- + courage → discouraging."
    },
    {
      text: "The scholarship scheme targets pupils from the most economically ____ backgrounds.",
      stem: "ADVANTAGE",
      answers: ["disadvantaged"],
      explanation: "A negative participial adjective is needed: dis- + advantage + -ed (lacking advantages)."
    },
    {
      text: "He became positively ____ when tired, snapping at waiters and quibbling over bills.",
      stem: "AGREE",
      answers: ["disagreeable"],
      explanation: "A negative adjective meaning 'bad-tempered, unpleasant' is needed: dis- + agree + -able."
    },
    {
      text: "Rumblings of ____ among junior staff eventually erupted into a full-scale strike.",
      stem: "CONTENT",
      answers: ["discontent", "discontentment"],
      explanation: "A negative noun meaning 'dissatisfaction' is needed: dis- + content."
    },
    {
      text: "Many young doctors leave the profession within five years, worn down by ____.",
      stem: "ILLUSION",
      answers: ["disillusionment", "disillusion"],
      explanation: "A noun meaning 'disappointment from lost ideals' is needed: dis- + illusion + -ment."
    },
    {
      text: "Most commentators found the mocking tone of the obituary deeply ____.",
      stem: "TASTE",
      answers: ["distasteful"],
      explanation: "A negative adjective meaning 'offensive' is needed: dis- + taste + -ful."
    },
    {
      text: "A single ____ in the fuel figures left the aircraft dangerously short of its destination.",
      stem: "CALCULATE",
      answers: ["miscalculation"],
      explanation: "A noun meaning 'a wrong calculation' is needed: mis- + calculate + -ion."
    },
    {
      text: "The diplomatic row arose from a simple ____ over the wording of the treaty.",
      stem: "UNDERSTAND",
      answers: ["misunderstanding"],
      explanation: "A noun meaning 'a failure to understand correctly' is needed: mis- + understand + -ing."
    },
    {
      text: "The senator claims his remarks were wilfully ____ by the press.",
      stem: "INTERPRET",
      answers: ["misinterpreted"],
      explanation: "A passive participle with negative prefix is needed: mis- + interpret + -ed (understood wrongly)."
    },
    {
      text: "He bore each fresh ____ with the same wry, uncomplaining humour.",
      stem: "FORTUNE",
      answers: ["misfortune"],
      explanation: "A noun meaning 'piece of bad luck' is needed: mis- + fortune."
    },
    {
      text: "Persistent ____ in class eventually earned him a week's suspension.",
      stem: "BEHAVE",
      answers: ["misbehaviour", "misbehavior"],
      explanation: "A noun meaning 'bad conduct' is needed: mis- + behave → misbehaviour."
    },
    {
      text: "Years of financial ____ left the club saddled with debts it could never repay.",
      stem: "MANAGE",
      answers: ["mismanagement"],
      explanation: "A noun meaning 'incompetent handling' is needed: mis- + manage + -ment."
    },
    {
      text: "His confident ____ of the word 'hyperbole' betrayed the fact that he had only ever read it.",
      stem: "PRONOUNCE",
      answers: ["mispronunciation"],
      explanation: "A noun with the mis- prefix and an internal change is needed: pronounce → pronunciation → mispronunciation."
    },
    {
      text: "The belief that bats are blind is a popular ____ with no basis in fact.",
      stem: "CONCEIVE",
      answers: ["misconception"],
      explanation: "A noun meaning 'mistaken belief' is needed: mis- + conceive → misconception."
    },
    {
      text: "The charity documents the ____ of working animals in quarries and brick kilns.",
      stem: "TREAT",
      answers: ["mistreatment"],
      explanation: "A noun meaning 'cruel handling' is needed: mis- + treat + -ment."
    },
    {
      text: "Try not to be ____ by one poor review; the response elsewhere has been glowing.",
      stem: "HEART",
      answers: ["disheartened"],
      explanation: "A negative participial adjective meaning 'discouraged' is needed: dis- + hearten + -ed."
    },
    {
      text: "Youth ____ has fallen to its lowest level since records began.",
      stem: "EMPLOY",
      answers: ["unemployment"],
      explanation: "A negative noun is needed: employ → employment → unemployment (the state of being without work)."
    },
    {
      text: "The talks, which everyone assumed would collapse, ____ produced a lasting ceasefire.",
      stem: "EXPECT",
      answers: ["unexpectedly"],
      explanation: "An adverb meaning 'surprisingly' is needed: un- + expect + -ed + -ly."
    },
    {
      text: "She is ____ the finest cellist of her generation, whatever the juries may decide.",
      stem: "DOUBT",
      answers: ["undoubtedly"],
      explanation: "An adverb meaning 'certainly' is needed: doubt → undoubted → undoubtedly."
    },

    /* ---------- batch 4 (91-120) ---------- */
    {
      text: "The heatwave has brought ____ temperatures to towns north of the Arctic Circle.",
      stem: "PRECEDENT",
      answers: ["unprecedented"],
      explanation: "An adjective meaning 'never seen before' is needed: un- + precedent + -ed."
    },
    {
      text: "The brushwork is ____ that of Turner; no forger has ever captured it convincingly.",
      stem: "MISTAKE",
      answers: ["unmistakably"],
      explanation: "An adverb meaning 'in a way impossible to mistake' is needed: mistake → unmistakable → unmistakably."
    },
    {
      text: "She is ____ qualified for the post; the only doubts concern her temperament.",
      stem: "QUESTION",
      answers: ["unquestionably"],
      explanation: "An adverb meaning 'beyond doubt' is needed: question → unquestionable → unquestionably."
    },
    {
      text: "Remarkably, the driver walked away from the wreckage completely ____.",
      stem: "SCATHE",
      answers: ["unscathed"],
      explanation: "An adjective meaning 'unharmed' is needed: un- + scathe + -d; the word survives almost only in this negative form."
    },
    {
      text: "The first laptops were ____ machines, weighing as much as a small suitcase.",
      stem: "WIELD",
      answers: ["unwieldy"],
      explanation: "An adjective meaning 'awkward to handle' is needed: un- + wield + -y = unwieldy."
    },
    {
      text: "A good air-traffic controller must remain utterly ____ when three emergencies occur at once.",
      stem: "FLAP",
      answers: ["unflappable"],
      explanation: "An adjective meaning 'impossible to fluster' is needed: un- + flap + -able."
    },
    {
      text: "For reasons that remain ____, the captain ordered the ship to change course at midnight.",
      stem: "FATHOM",
      answers: ["unfathomable"],
      explanation: "An adjective meaning 'impossible to understand' is needed: un- + fathom + -able."
    },
    {
      text: "With ten games to play, the champions have built an apparently ____ lead.",
      stem: "ASSAIL",
      answers: ["unassailable"],
      explanation: "An adjective meaning 'impossible to attack or overturn' is needed: un- + assail + -able."
    },
    {
      text: "The candidate's links to several ____ business figures dominated the campaign coverage.",
      stem: "SAVOUR",
      answers: ["unsavoury", "unsavory"],
      explanation: "A negative adjective meaning 'morally offensive, disreputable' is needed: un- + savour + -y."
    },
    {
      text: "There was something deeply ____ about the way the house fell silent whenever she entered a room.",
      stem: "NERVE",
      answers: ["unnerving"],
      explanation: "An -ing adjective meaning 'making one lose courage' is needed: un- + nerve + -ing."
    },
    {
      text: "The documentary draws ____ parallels between the propaganda of that era and today's advertising.",
      stem: "SETTLE",
      answers: ["unsettling"],
      explanation: "An -ing adjective meaning 'disquieting' is needed: un- + settle + -ing."
    },
    {
      text: "The defenders finally surrendered after six months of ____ bombardment.",
      stem: "RELENT",
      answers: ["unrelenting"],
      explanation: "An adjective meaning 'never easing off' is needed: un- + relent + -ing."
    },
    {
      text: "Through every scandal, his wife remained ____ in her public support.",
      stem: "WAVER",
      answers: ["unwavering"],
      explanation: "An adjective meaning 'steady, never faltering' is needed: un- + waver + -ing."
    },
    {
      text: "Her ____ eye for talent made her the most feared scout in European football.",
      stem: "ERR",
      answers: ["unerring"],
      explanation: "An adjective meaning 'consistently accurate' is needed: un- + err + -ing (never making a mistake)."
    },
    {
      text: "____ by two earlier failures, the team began preparing a third summit attempt.",
      stem: "DAUNT",
      answers: ["undaunted"],
      explanation: "A participial adjective meaning 'not discouraged' is needed: un- + daunt + -ed."
    },
    {
      text: "His account of meeting the president in a launderette struck everyone as distinctly ____.",
      stem: "FETCH",
      answers: ["far-fetched", "farfetched"],
      explanation: "A compound adjective meaning 'implausible' is needed: far + fetched = far-fetched."
    },
    {
      text: "The discovery of penicillin was arguably the greatest medical ____ of the century.",
      stem: "BREAK",
      answers: ["breakthrough"],
      explanation: "A compound noun meaning 'major advance' is needed: break + through = breakthrough."
    },
    {
      text: "Analysts are reluctant to predict the ____ of a referendum this finely balanced.",
      stem: "COME",
      answers: ["outcome"],
      explanation: "A compound noun meaning 'result' is needed: out + come = outcome."
    },
    {
      text: "A crowd of curious ____ gathered as the divers brought the wreck's bell ashore.",
      stem: "LOOK",
      answers: ["onlookers"],
      explanation: "A plural compound noun meaning 'spectators' is needed: on + look + -er(s)."
    },
    {
      text: "Farmers were caught off guard by the unusually early ____ of winter.",
      stem: "SET",
      answers: ["onset"],
      explanation: "A compound noun meaning 'beginning' is needed: on + set = onset."
    },
    {
      text: "Restoring the cathedral proved a far costlier ____ than anyone had envisaged.",
      stem: "TAKE",
      answers: ["undertaking"],
      explanation: "A noun meaning 'large task or project' is needed: under + take + -ing = undertaking."
    },
    {
      text: "With the polls showing a twenty-point gap, the result was widely seen as a ____ conclusion.",
      stem: "GO",
      answers: ["foregone"],
      explanation: "The fixed phrase 'a foregone conclusion' (an inevitable result) requires fore- + gone."
    },
    {
      text: "The sudden ____ of foreign capital plunged the country into recession.",
      stem: "DRAW",
      answers: ["withdrawal"],
      explanation: "A noun meaning 'removal, pulling out' is needed: with- + draw + -al = withdrawal."
    },
    {
      text: "She graduated with the most ____ results the faculty had seen in a decade.",
      stem: "STAND",
      answers: ["outstanding"],
      explanation: "An adjective meaning 'exceptionally good' is needed: out + stand + -ing."
    },
    {
      text: "The wounded animal disappeared into the thick ____ before the rangers could reach it.",
      stem: "GROW",
      answers: ["undergrowth"],
      explanation: "A compound noun for dense low vegetation is needed: under + growth (grow → growth)."
    },
    {
      text: "The engineers had badly ____ the force of the river, and the temporary dam was swept away.",
      stem: "ESTIMATE",
      answers: ["underestimated"],
      explanation: "A past participle meaning 'judged to be smaller than it was' is needed: under- + estimate + -d."
    },
    {
      text: "Many critics now regard the once-celebrated novel as vastly ____.",
      stem: "RATE",
      answers: ["overrated"],
      explanation: "The contrast with 'once-celebrated' forces the negative-leaning participle: over- + rate + -d (valued too highly)."
    },
    {
      text: "The exchange programme aims to ____ students' understanding of cultures other than their own.",
      stem: "RICH",
      answers: ["enrich"],
      explanation: "A verb is needed after 'to': the prefix en- turns the adjective rich into the verb enrich (improve, enhance)."
    },
    {
      text: "The reserve was created to protect several critically ____ species of amphibian.",
      stem: "DANGER",
      answers: ["endangered"],
      explanation: "A participial adjective meaning 'at risk of extinction' is needed: en- + danger + -ed."
    },
    {
      text: "Employees who lose their jobs through no fault of their own are legally ____ to compensation.",
      stem: "TITLE",
      answers: ["entitled"],
      explanation: "The structure 'be ____ to something' requires the participle entitled: en- + title + -d (having a right to)."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
