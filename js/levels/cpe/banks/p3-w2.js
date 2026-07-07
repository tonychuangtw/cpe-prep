/* CPE Prep extra bank: part3 wave 2 */
(function () {
  var BANK = [
    {
      text: "The defence lawyer's closing speech was so ____ that even her own client looked doubtful.",
      stem: "PERSUADE",
      answers: ["unpersuasive"],
      explanation: "The negative adjective 'unpersuasive' is needed: even the client was left doubtful, so the speech failed to convince."
    },
    {
      text: "As a teenager he was so ____ that family dinners routinely turned into debating contests.",
      stem: "ARGUE",
      answers: ["argumentative"],
      explanation: "'Argumentative' describes a person fond of arguing; the suffix -ative forms the adjective from the verb."
    },
    {
      text: "The committee found the minister's conduct utterly ____ and demanded his resignation.",
      stem: "DEFEND",
      answers: ["indefensible"],
      explanation: "'Indefensible' (in- + defensible) means impossible to justify, which fits the demand for resignation."
    },
    {
      text: "The ____ of the mountain villages in winter means supplies must be flown in by helicopter.",
      stem: "ACCESS",
      answers: ["inaccessibility"],
      explanation: "A negative abstract noun is required: 'inaccessibility' explains why supplies cannot arrive by road."
    },
    {
      text: "Chronic ____ at school is often a sign of boredom rather than lack of ability.",
      stem: "ACHIEVE",
      answers: ["underachievement"],
      explanation: "'Underachievement' — performing below one's potential — contrasts with 'lack of ability' in the sentence."
    },
    {
      text: "A brief ____ of the sources appears at the end of the article, as the journal requires.",
      stem: "ACKNOWLEDGE",
      answers: ["acknowledgement", "acknowledgment"],
      explanation: "The noun 'acknowledgement' (also spelt 'acknowledgment') refers to the formal crediting of sources."
    },
    {
      text: "Employers now prize ____ above technical skill, since technology changes so quickly.",
      stem: "ADAPT",
      answers: ["adaptability"],
      explanation: "The abstract noun 'adaptability' — the capacity to adjust to new conditions — is the quality employers value."
    },
    {
      text: "The judge ruled the recording ____ because it had been obtained without a warrant.",
      stem: "ADMIT",
      answers: ["inadmissible"],
      explanation: "In legal contexts, evidence obtained unlawfully is 'inadmissible' — not allowed to be used in court."
    },
    {
      text: "The sudden ____ of the expedition leader left the team without a map or a plan.",
      stem: "APPEAR",
      answers: ["disappearance"],
      explanation: "The noun 'disappearance' (dis- + appear + -ance) is required: the leader vanished, leaving the team stranded."
    },
    {
      text: "Average temperatures have risen ____ over the past three decades, according to the survey.",
      stem: "APPRECIATE",
      answers: ["appreciably"],
      explanation: "The adverb 'appreciably' means 'to a noticeable degree', describing how much temperatures have risen."
    },
    {
      text: "The critic shook her head ____ as the actors stumbled through the final scene.",
      stem: "APPROVE",
      answers: ["disapprovingly"],
      explanation: "A negative adverb is needed: shaking one's head signals disapproval, hence 'disapprovingly'."
    },
    {
      text: "The theory rests on the ____ that consumers always behave rationally, which is questionable.",
      stem: "ASSUME",
      answers: ["assumption"],
      explanation: "The noun 'assumption' — something taken for granted without proof — fits the 'rests on the' structure."
    },
    {
      text: "For most club runners, a two-hour marathon is simply an ____ dream.",
      stem: "ATTAIN",
      answers: ["unattainable"],
      explanation: "'Unattainable' means impossible to achieve; the article 'an' and 'simply' signal an out-of-reach goal."
    },
    {
      text: "The tutor blamed the boy's poor marks on his chronic ____ during lessons.",
      stem: "ATTEND",
      answers: ["inattentiveness", "inattention"],
      explanation: "A negative noun is needed: 'inattentiveness' (or 'inattention') means failure to pay attention."
    },
    {
      text: "Brutalist architecture strikes many people as cold and ____, yet it has devoted admirers.",
      stem: "ATTRACT",
      answers: ["unattractive"],
      explanation: "'Unattractive' pairs with 'cold' as a negative judgement, contrasted by 'yet it has devoted admirers'."
    },
    {
      text: "The ____ of affordable housing has forced many young workers to leave the capital.",
      stem: "AVAIL",
      answers: ["unavailability"],
      explanation: "The negative noun 'unavailability' explains why workers must leave: affordable homes cannot be found."
    },
    {
      text: "The storm caught the fishing fleet ____, and several boats were badly damaged.",
      stem: "AWARE",
      answers: ["unawares"],
      explanation: "The fixed adverbial 'catch someone unawares' means to surprise someone who is unprepared."
    },
    {
      text: "The heat in the engine room was almost ____ hot, and shifts were cut to twenty minutes.",
      stem: "BEAR",
      answers: ["unbearably"],
      explanation: "The adverb 'unbearably' modifies 'hot', meaning intolerably; hence the shortened shifts."
    },
    {
      text: "She stared at the winning lottery ticket in complete ____, reading the numbers again and again.",
      stem: "BELIEVE",
      answers: ["disbelief"],
      explanation: "'In disbelief' is the natural collocation for being unable to accept something astonishing."
    },
    {
      text: "The main ____ of the new tax relief will be small family-run businesses.",
      stem: "BENEFIT",
      answers: ["beneficiaries"],
      explanation: "The plural noun 'beneficiaries' — those who gain from something — is required after 'the main'."
    },
    {
      text: "From the summit the desert stretched away, ____ and utterly silent, to every horizon.",
      stem: "BOUND",
      answers: ["boundless"],
      explanation: "'Boundless' (without limits) describes the seemingly endless desert; the suffix -less negates the stem."
    },
    {
      text: "After the exams finished, we spent a gloriously ____ fortnight by the sea.",
      stem: "CARE",
      answers: ["carefree"],
      explanation: "The compound adjective 'carefree' — free from worries — suits the relief after examinations."
    },
    {
      text: "The pneumatic drills hammered ____ outside the office from dawn until dusk.",
      stem: "CEASE",
      answers: ["incessantly", "ceaselessly"],
      explanation: "An adverb meaning 'without stopping' is required; 'incessantly' (or 'ceaselessly') fits the dawn-to-dusk noise."
    },
    {
      text: "Investors hate ____ above all else, which is why markets fell after the ambiguous announcement.",
      stem: "CERTAIN",
      answers: ["uncertainty", "uncertainties"],
      explanation: "The negative noun 'uncertainty' names what investors dislike: not knowing what will happen."
    },
    {
      text: "Normally so composed, the professor reacted ____ badly to the mild criticism.",
      stem: "CHARACTER",
      answers: ["uncharacteristically"],
      explanation: "A double transformation to the adverb 'uncharacteristically' shows the reaction was unlike his usual self."
    },
    {
      text: "The report was praised for the ____ of its prose as much as for its findings.",
      stem: "CLEAR",
      answers: ["clarity", "clearness"],
      explanation: "The abstract noun 'clarity' (with internal change from 'clear') denotes the quality of being easy to understand."
    },
    {
      text: "Quite ____, the two rivals had booked rooms in the same small hotel.",
      stem: "COINCIDE",
      answers: ["coincidentally"],
      explanation: "The sentence adverb 'coincidentally' signals that the double booking happened by chance."
    },
    {
      text: "Long-haul passengers in economy endure hours of considerable ____ in cramped seats.",
      stem: "COMFORT",
      answers: ["discomfort"],
      explanation: "The negative noun 'discomfort' captures the unpleasant physical experience of cramped seating."
    },
    {
      text: "When pressed about the merger, the chairman gave a deliberately ____ answer.",
      stem: "COMMIT",
      answers: ["noncommittal", "non-committal"],
      explanation: "'Noncommittal' describes an answer that avoids expressing a definite opinion or commitment."
    },
    {
      text: "The soprano's farewell performance was ____ finer than anything else heard that season.",
      stem: "COMPARE",
      answers: ["incomparably"],
      explanation: "The adverb 'incomparably' means 'beyond comparison', intensifying 'finer'."
    },
    {
      text: "He felt an almost physical ____ to confess, though no one suspected him at all.",
      stem: "COMPEL",
      answers: ["compulsion"],
      explanation: "The noun 'compulsion' — an irresistible urge — is formed with the internal change from 'compel'."
    },
    {
      text: "Decades of protection had left the national airline bloated and hopelessly ____.",
      stem: "COMPETE",
      answers: ["uncompetitive"],
      explanation: "'Uncompetitive' means unable to compete effectively, the result of the airline's long protection."
    },
    {
      text: "Reviewers criticised the ____ of the data set, which omitted the entire southern region.",
      stem: "COMPLETE",
      answers: ["incompleteness"],
      explanation: "The negative noun 'incompleteness' names the flaw: a whole region was missing from the data."
    },
    {
      text: "Doctors are bound by strict rules of ____ and may not discuss patients with outsiders.",
      stem: "CONFIDE",
      answers: ["confidentiality"],
      explanation: "'Confidentiality' — the duty to keep information secret — collocates with 'rules of'."
    },
    {
      text: "A lifelong ____, she refused to join any party, church or club whatsoever.",
      stem: "CONFORM",
      answers: ["nonconformist", "non-conformist"],
      explanation: "The personal noun 'nonconformist' denotes someone who rejects established conventions and institutions."
    },
    {
      text: "Advertising works largely ____, shaping preferences we never realise we have absorbed.",
      stem: "CONSCIOUS",
      answers: ["subconsciously", "unconsciously"],
      explanation: "An adverb meaning 'below the level of awareness' is needed; 'subconsciously' fits how advertising influences us."
    },
    {
      text: "The error seemed ____ at the time, yet it eventually cost the firm millions.",
      stem: "CONSEQUENT",
      answers: ["inconsequential"],
      explanation: "'Inconsequential' means trivial or unimportant, contrasting with the costly outcome introduced by 'yet'."
    },
    {
      text: "The abrupt ____ of the night bus service left shift workers stranded across the city.",
      stem: "CONTINUE",
      answers: ["discontinuation", "discontinuance"],
      explanation: "The negative noun 'discontinuation' refers to the ending of the service, hence stranded workers."
    },
    {
      text: "The witness gave two entirely ____ accounts of the evening, and the jury believed neither.",
      stem: "CONTRADICT",
      answers: ["contradictory"],
      explanation: "'Contradictory' describes accounts that cannot both be true, which destroyed the witness's credibility."
    },
    {
      text: "The panel deliberately chose an ____ figure to chair the inquiry, hoping to please everyone.",
      stem: "CONTROVERSY",
      answers: ["uncontroversial"],
      explanation: "'Uncontroversial' — unlikely to provoke disagreement — explains the hope of pleasing everyone."
    },
    {
      text: "The spokesman denied the rumours, but so ____ that speculation only intensified.",
      stem: "CONVINCE",
      answers: ["unconvincingly"],
      explanation: "The adverb 'unconvincingly' shows the denial failed to persuade, so speculation grew."
    },
    {
      text: "Colleagues regarded the old auditor as utterly ____; no bribe had ever tempted him.",
      stem: "CORRUPT",
      answers: ["incorruptible"],
      explanation: "'Incorruptible' means impossible to bribe or morally compromise, as the second clause confirms."
    },
    {
      text: "The park was set aside for ____ purposes such as picnicking, boating and cycling.",
      stem: "CREATE",
      answers: ["recreational"],
      explanation: "The adjective 'recreational' (re- + create + -ional) relates to leisure activities like those listed."
    },
    {
      text: "She raised an eyebrow ____ when he claimed to have climbed Everest twice without oxygen.",
      stem: "CREDIT",
      answers: ["incredulously"],
      explanation: "'Incredulously' — in a disbelieving manner — matches the raised eyebrow at an implausible claim."
    },
    {
      text: "Students who accept sources ____ risk repeating errors and even deliberate falsehoods.",
      stem: "CRITIC",
      answers: ["uncritically"],
      explanation: "The adverb 'uncritically' means without questioning or evaluating, which leads to repeating errors."
    },
    {
      text: "The mushroom looks ____ similar to an edible variety, which makes it especially dangerous.",
      stem: "DECEIVE",
      answers: ["deceptively"],
      explanation: "'Deceptively' indicates that the resemblance misleads people — the source of the danger."
    },
    {
      text: "The captain stood ____ at the gates, refusing to surrender the fortress.",
      stem: "DEFY",
      answers: ["defiantly"],
      explanation: "The adverb 'defiantly' — with bold resistance — matches the refusal to surrender."
    },
    {
      text: "Globalisation has created such ____ among economies that no country can prosper alone.",
      stem: "DEPEND",
      answers: ["interdependence"],
      explanation: "'Interdependence' — mutual reliance — is required: economies now depend on one another."
    },
    {
      text: "The plastic casing is marketed as virtually ____, surviving drops, fire and salt water.",
      stem: "DESTROY",
      answers: ["indestructible"],
      explanation: "'Indestructible' means impossible to destroy; the examples of drops, fire and water support this."
    },
    {
      text: "Heavy fines are intended to act as a ____ against illegal dumping.",
      stem: "DETER",
      answers: ["deterrent"],
      explanation: "The noun 'deterrent' — something that discourages an action — collocates with 'act as a'."
    },
    {
      text: "Critics argue the outcome of the vote was ____, since the rules had been rewritten beforehand.",
      stem: "DETERMINE",
      answers: ["predetermined"],
      explanation: "'Predetermined' means decided in advance, which the rewritten rules made possible."
    },
    {
      text: "The tabloid printed an ____ photograph of the senator wrestling with an umbrella.",
      stem: "DIGNITY",
      answers: ["undignified"],
      explanation: "The adjective 'undignified' — lacking dignity — fits the embarrassing photograph."
    },
    {
      text: "The firm's survival owed much to its early ____ into software and consulting services.",
      stem: "DIVERSE",
      answers: ["diversification"],
      explanation: "'Diversification' — expanding into varied fields — is the noun required after 'its early'."
    },
    {
      text: "The region's exports still consist ____ of raw minerals rather than finished goods.",
      stem: "DOMINATE",
      answers: ["predominantly"],
      explanation: "The adverb 'predominantly' means 'mainly'; exports are mostly raw minerals."
    },
    {
      text: "Heating the entire warehouse for two employees proved wildly ____.",
      stem: "ECONOMY",
      answers: ["uneconomical", "uneconomic"],
      explanation: "'Uneconomical' means wasteful of money or resources — obviously so for two employees."
    },
    {
      text: "Successive reforms proved ____, and the waiting lists grew longer every year.",
      stem: "EFFECT",
      answers: ["ineffectual", "ineffective"],
      explanation: "A negative adjective is needed: 'ineffectual' reforms produced no result, so lists lengthened."
    },
    {
      text: "Auditors traced the losses to sheer ____ rather than to any fraud.",
      stem: "EFFICIENT",
      answers: ["inefficiency"],
      explanation: "The negative noun 'inefficiency' — wasteful working practices — is contrasted with fraud."
    },
    {
      text: "The director denied ____ that any jobs would be lost in the takeover.",
      stem: "EMPHASIS",
      answers: ["emphatically"],
      explanation: "'Emphatically' — in a forceful, definite manner — is the adverb derived from 'emphasis'."
    },
    {
      text: "The silence in the interrogation room became almost ____ after the first hour.",
      stem: "ENDURE",
      answers: ["unendurable"],
      explanation: "'Unendurable' means impossible to bear; 'almost' intensifies the oppressive silence."
    },
    {
      text: "The class greeted the extra homework with ____ silence and folded arms.",
      stem: "ENTHUSIASM",
      answers: ["unenthusiastic"],
      explanation: "The negative adjective 'unenthusiastic' matches the silence and folded arms of reluctant students."
    },
    {
      text: "Telling loyal staff they were redundant was the ____ task that fell to the new manager.",
      stem: "ENVY",
      answers: ["unenviable"],
      explanation: "'Unenviable' describes a task nobody would wish to have — such as announcing redundancies."
    },
    {
      text: "The report documents growing ____ between the richest and poorest districts of the city.",
      stem: "EQUAL",
      answers: ["inequality"],
      explanation: "The negative noun 'inequality' names the widening gap between rich and poor districts."
    },
    {
      text: "Afternoon tea, with its scones and polite chatter, is often seen as ____ English.",
      stem: "ESSENCE",
      answers: ["quintessentially"],
      explanation: "'Quintessentially' means 'in the most typical, perfect form' — afternoon tea as the essence of Englishness."
    },
    {
      text: "The novel was criticised for its ____ long descriptions of furniture and wallpaper.",
      stem: "EXCEED",
      answers: ["excessively"],
      explanation: "The adverb 'excessively' — to too great a degree — modifies 'long' to criticise the descriptions."
    },
    {
      text: "His exam results were ____, neither shameful nor worth celebrating.",
      stem: "EXCEPT",
      answers: ["unexceptional"],
      explanation: "'Unexceptional' means ordinary — not standing out — as the second clause makes clear."
    },
    {
      text: "The promised rescue fund turned out to be entirely ____, a mere line in a press release.",
      stem: "EXIST",
      answers: ["nonexistent", "non-existent"],
      explanation: "'Nonexistent' means not existing at all: the fund was never real, only announced."
    },
    {
      text: "Through forty years of service she proved ____ loyal to the institution.",
      stem: "FAIL",
      answers: ["unfailingly"],
      explanation: "The adverb 'unfailingly' means consistently and without ever lapsing — over forty years."
    },
    {
      text: "The expedition was postponed owing to ____ weather over the Southern Ocean.",
      stem: "FAVOUR",
      answers: ["unfavourable", "unfavorable"],
      explanation: "'Unfavourable' weather — adverse conditions — is the standard collocation explaining the postponement."
    },
    {
      text: "The union blamed the breakdown of talks on the management's ____.",
      stem: "FLEXIBLE",
      answers: ["inflexibility"],
      explanation: "The negative noun 'inflexibility' — refusal to adapt or compromise — caused the talks to fail."
    },
    {
      text: "For those who saw it live, the eclipse was a truly ____ spectacle.",
      stem: "FORGET",
      answers: ["unforgettable"],
      explanation: "'Unforgettable' — impossible to forget — is the adjective for a remarkable, memorable event."
    },
    {
      text: "To her mind, betraying a friend's secret was simply ____.",
      stem: "FORGIVE",
      answers: ["unforgivable"],
      explanation: "'Unforgivable' means too bad to be pardoned; the double transformation adds un- and -able."
    },
    {
      text: "During his first lonely term abroad he was ____ by an elderly couple who lived next door.",
      stem: "FRIEND",
      answers: ["befriended"],
      explanation: "The verb 'befriend' (be- prefix) means to act as a friend to someone; the passive past form fits here."
    },
    {
      text: "The campaign came to an ____ end amid accusations of fraud and infighting.",
      stem: "GLORY",
      answers: ["inglorious"],
      explanation: "'Inglorious' means shameful or dishonourable — the opposite of a glorious ending."
    },
    {
      text: "The team captain behaved ____ after the defeat, refusing to shake hands with the winners.",
      stem: "GRACE",
      answers: ["disgracefully", "ungraciously"],
      explanation: "An adverb of shameful conduct is needed: 'disgracefully' fits the refusal to shake hands."
    },
    {
      text: "He ____ checked the locks three times before going to bed, as he had done for decades.",
      stem: "HABIT",
      answers: ["habitually"],
      explanation: "The adverb 'habitually' — as a fixed habit — matches the decades-old routine."
    },
    {
      text: "The bacteria pass ____ through most people, causing illness only in the very frail.",
      stem: "HARM",
      answers: ["harmlessly"],
      explanation: "The adverb 'harmlessly' — without causing damage — contrasts with illness in the frail."
    },
    {
      text: "The ceasefire collapsed within a week, and ____ resumed along the entire frontier.",
      stem: "HOSTILE",
      answers: ["hostilities"],
      explanation: "The plural noun 'hostilities' is the formal term for acts of warfare, which 'resumed' after the ceasefire."
    },
    {
      text: "The wreckage was so badly burned that the aircraft type was almost ____.",
      stem: "IDENTIFY",
      answers: ["unidentifiable"],
      explanation: "'Unidentifiable' means impossible to recognise or identify — the result of severe burning."
    },
    {
      text: "Critics dismissed the sequel as ____, a tired rehash of the original's best scenes.",
      stem: "IMAGINE",
      answers: ["unimaginative"],
      explanation: "'Unimaginative' — lacking originality — is confirmed by 'tired rehash'."
    },
    {
      text: "Her ____ comic timing made her the most sought-after actress of her generation.",
      stem: "IMITATE",
      answers: ["inimitable"],
      explanation: "'Inimitable' means so distinctive that it cannot be copied — a hallmark of unique talent."
    },
    {
      text: "Advertisers deliberately target ____ teenagers, who are still forming their tastes.",
      stem: "IMPRESS",
      answers: ["impressionable"],
      explanation: "'Impressionable' describes people easily influenced — hence attractive to advertisers."
    },
    {
      text: "Despite the honour, she felt a strong ____ to accept a post so far from her family.",
      stem: "INCLINE",
      answers: ["disinclination"],
      explanation: "The double transformation 'disinclination' — reluctance — fits her unwillingness to move away."
    },
    {
      text: "The pamphlet, though crudely printed, proved enormously ____ in shaping public opinion.",
      stem: "INFLUENCE",
      answers: ["influential"],
      explanation: "'Influential' — having great influence — describes the pamphlet's effect on opinion."
    },
    {
      text: "The prize rewards the most ____ solution to an engineering problem, however impractical.",
      stem: "INNOVATE",
      answers: ["innovative", "innovatory"],
      explanation: "'Innovative' — introducing new ideas or methods — is the adjective the prize criterion requires."
    },
    {
      text: "Residents complained that the constant surveillance felt deeply ____.",
      stem: "INTRUDE",
      answers: ["intrusive"],
      explanation: "'Intrusive' — unwelcomely invading one's privacy — describes constant surveillance."
    },
    {
      text: "Stranded without tools, the crew survived thanks to the engineer's sheer ____.",
      stem: "INVENT",
      answers: ["inventiveness"],
      explanation: "The noun 'inventiveness' — creative resourcefulness — explains how they improvised to survive."
    },
    {
      text: "Try not to sound so ____; people rarely confide in those who criticise them.",
      stem: "JUDGE",
      answers: ["judgemental", "judgmental"],
      explanation: "'Judgemental' (also 'judgmental') describes someone too quick to criticise others."
    },
    {
      text: "____ to the guests, the hotel had been sold that very morning to a demolition firm.",
      stem: "KNOW",
      answers: ["unbeknown", "unbeknownst"],
      explanation: "'Unbeknown to' (or 'unbeknownst to') means 'without the knowledge of', introducing the guests' ignorance."
    },
    {
      text: "The protesters were charged with ____ occupying government property.",
      stem: "LAW",
      answers: ["unlawfully"],
      explanation: "The adverb 'unlawfully' — in a way that breaks the law — modifies 'occupying' in the formal charge."
    },
    {
      text: "The brochure was ____ vague about the building work next to the 'sea-view' rooms.",
      stem: "LEAD",
      answers: ["misleadingly"],
      explanation: "'Misleadingly' — in a way that gives a false impression — fits the brochure's deceptive vagueness."
    },
    {
      text: "The internet offers ____ opportunities for self-education, yet many use it only for gossip.",
      stem: "LIMIT",
      answers: ["limitless", "unlimited"],
      explanation: "'Limitless' — without bounds — describes the vast opportunities the internet provides."
    },
    {
      text: "The reviewer ____ picked apart every sentence of the debut novel.",
      stem: "MERCY",
      answers: ["mercilessly"],
      explanation: "The adverb 'mercilessly' — without pity — fits the harsh, exhaustive criticism."
    },
    {
      text: "The philosopher argued that ____ spreads fastest where poverty and despair take hold.",
      stem: "MORAL",
      answers: ["immorality"],
      explanation: "The negative noun 'immorality' — wicked behaviour — is what allegedly spreads amid poverty."
    },
    {
      text: "The granite altar proved ____, so the church was rebuilt around it.",
      stem: "MOVE",
      answers: ["immovable", "unmovable"],
      explanation: "'Immovable' means impossible to move — hence rebuilding the church around the altar."
    },
    {
      text: "The lights in the abandoned lighthouse flickered ____ every night at exactly midnight.",
      stem: "MYSTERY",
      answers: ["mysteriously"],
      explanation: "The adverb 'mysteriously' — in an unexplained way — suits the strange midnight flickering."
    },
    {
      text: "The difference in performance between the two engines is ____ and hardly worth the extra cost.",
      stem: "NEGLECT",
      answers: ["negligible"],
      explanation: "'Negligible' means so small it can be ignored — hence not worth paying more."
    },
    {
      text: "Strict ____ of the fasting rules is expected of every adult during the holy month.",
      stem: "OBSERVE",
      answers: ["observance"],
      explanation: "The noun 'observance' — the practice of obeying rules or customs — collocates with religious rules."
    },
    {
      text: "Doctors warned that a second ____ of the infection could prove far more serious.",
      stem: "OCCUR",
      answers: ["occurrence"],
      explanation: "The noun 'occurrence' — an instance of something happening — is needed after 'a second'."
    },
    {
      text: "The comedian kept his material deliberately ____ so as not to alienate any of the audience.",
      stem: "OFFEND",
      answers: ["inoffensive"],
      explanation: "'Inoffensive' — causing no offence — explains how he avoided alienating anyone."
    },
    {
      text: "The incumbent mayor ran ____ after both challengers withdrew at the last minute.",
      stem: "OPPOSE",
      answers: ["unopposed"],
      explanation: "'Unopposed' means without any rival candidates, which the withdrawals made possible."
    },
    {
      text: "Melting snow made the mountain road ____ for anything larger than a mule.",
      stem: "PASS",
      answers: ["impassable"],
      explanation: "'Impassable' means impossible to travel along — the effect of the melting snow."
    },
    {
      text: "Sheer ____ finally paid off when, after two hundred rejections, her manuscript was accepted.",
      stem: "PERSIST",
      answers: ["persistence"],
      explanation: "The noun 'persistence' — refusing to give up — explains success after two hundred rejections."
    },
    {
      text: "The queen made no attempt to hide her ____ at the ambassador's late arrival.",
      stem: "PLEASE",
      answers: ["displeasure"],
      explanation: "The negative noun 'displeasure' — annoyance — is what the queen openly showed."
    },
    {
      text: "The tax's ____ was so great that it was repealed within a year of its introduction.",
      stem: "POPULAR",
      answers: ["unpopularity"],
      explanation: "The double transformation 'unpopularity' — being widely disliked — explains the swift repeal."
    },
    {
      text: "Thousands of ____ farmers marched on the capital to demand the return of their land.",
      stem: "POSSESS",
      answers: ["dispossessed"],
      explanation: "'Dispossessed' describes people deprived of their land or property — hence the demand for its return."
    },
    {
      text: "The charity focuses on the ____ of rural women through education and small loans.",
      stem: "POWER",
      answers: ["empowerment"],
      explanation: "The double transformation 'empowerment' (em- + power + -ment) means giving people control over their lives."
    },
    {
      text: "The scheme was abandoned once its sheer ____ became clear: no city could afford it.",
      stem: "PRACTICAL",
      answers: ["impracticality"],
      explanation: "The negative noun 'impracticality' — being unworkable — explains why the scheme was dropped."
    },
    {
      text: "It is the ____ of mountain weather, rather than the cold, that kills the unprepared.",
      stem: "PREDICT",
      answers: ["unpredictability"],
      explanation: "The double transformation 'unpredictability' — sudden, unforeseeable change — is the real danger."
    },
    {
      text: "Micromanaging talented staff is ____; it breeds resentment and slows everything down.",
      stem: "PRODUCE",
      answers: ["counterproductive"],
      explanation: "'Counterproductive' means having the opposite of the intended effect — hindering rather than helping."
    },
    {
      text: "The branch was closed after years of trading at an ____ loss.",
      stem: "PROFIT",
      answers: ["unprofitable"],
      explanation: "'Unprofitable' — failing to make money — explains the closure; note 'an' requires a vowel-initial form."
    },
    {
      text: "Rural areas were hit ____ hard by the fuel tax, since residents must drive everywhere.",
      stem: "PROPORTION",
      answers: ["disproportionately"],
      explanation: "The adverb 'disproportionately' means to an unfairly large extent relative to others."
    },
    {
      text: "The port's ____ in the eighteenth century rested almost entirely on the sugar trade.",
      stem: "PROSPER",
      answers: ["prosperity"],
      explanation: "The noun 'prosperity' — wealth and economic success — is what rested on the sugar trade."
    },
    {
      text: "Psychologists warn that ____ parents can leave children unable to assess risk for themselves.",
      stem: "PROTECT",
      answers: ["overprotective"],
      explanation: "'Overprotective' — shielding children excessively — is the compound adjective the warning requires."
    },
    {
      text: "The striker winked ____ at the home fans, and the referee reached for a yellow card.",
      stem: "PROVOKE",
      answers: ["provocatively"],
      explanation: "The adverb 'provocatively' — in a way intended to anger — explains the referee's reaction."
    },
    {
      text: "Her single-minded ____ of perfection left little room for friendship or rest.",
      stem: "PURSUE",
      answers: ["pursuit"],
      explanation: "The noun 'pursuit' (with internal change from 'pursue') means the act of striving for something."
    },
    {
      text: "The landlord ____ withheld the entire deposit over a single scratch on a door.",
      stem: "REASON",
      answers: ["unreasonably"],
      explanation: "The adverb 'unreasonably' — beyond what is fair — fits keeping a whole deposit for one scratch."
    },
    {
      text: "The flood damaged the frescoes ____; restorers could save only fragments.",
      stem: "REPAIR",
      answers: ["irreparably"],
      explanation: "'Irreparably' means beyond the possibility of repair — only fragments could be saved."
    },
    {
      text: "Weak and ____, the council debated for months without ever reaching a decision.",
      stem: "RESOLVE",
      answers: ["irresolute"],
      explanation: "'Irresolute' — unable to decide firmly — matches months of debate with no decision."
    },
    {
      text: "The instructions were so ____ that we assembled the wardrobe upside down.",
      stem: "SENSE",
      answers: ["nonsensical", "senseless"],
      explanation: "'Nonsensical' — making no sense — explains why the wardrobe ended up upside down."
    },
    {
      text: "The con artists preyed on ____ tourists outside the railway station.",
      stem: "SUSPECT",
      answers: ["unsuspecting"],
      explanation: "'Unsuspecting' describes victims who have no idea they are being deceived."
    },
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part3 = QUESTIONS.part3.concat(BANK);
})();
