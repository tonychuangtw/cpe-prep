/* CPE Prep extra vocab wave 2 */
(function () {
  var BANK = [
  {
    "front": "abate",
    "pos": "v.",
    "def": "to become less intense or widespread",
    "example": "The storm finally abated, allowing rescue teams to reach the stranded villagers.",
    "zh": "減弱、緩和"
  },
  {
    "front": "aberration",
    "pos": "n.",
    "def": "a departure from what is normal or expected",
    "example": "The committee dismissed the poor results as a statistical aberration.",
    "zh": "偏差、異常現象"
  },
  {
    "front": "abhor",
    "pos": "v.",
    "def": "to regard with disgust and hatred",
    "example": "She abhors any form of cruelty, however trivial it may seem.",
    "zh": "憎惡、厭惡"
  },
  {
    "front": "abstruse",
    "pos": "adj.",
    "def": "difficult to understand; obscure",
    "example": "His lecture on quantum field theory proved too abstruse for the lay audience.",
    "zh": "深奧難懂的"
  },
  {
    "front": "accolade",
    "pos": "n.",
    "def": "an award or expression of praise",
    "example": "The novelist received the highest accolade her country could bestow.",
    "zh": "榮譽、讚揚"
  },
  {
    "front": "acerbic",
    "pos": "adj.",
    "def": "sharp and forthright in tone or manner",
    "example": "Her acerbic wit made her a feared but compelling columnist.",
    "zh": "尖酸刻薄的"
  },
  {
    "front": "acrimonious",
    "pos": "adj.",
    "def": "angry and bitter, typically of a dispute",
    "example": "The merger talks collapsed after weeks of acrimonious negotiation.",
    "zh": "充滿火藥味的、激烈的"
  },
  {
    "front": "adroit",
    "pos": "adj.",
    "def": "clever or skilful in using the hands or mind",
    "example": "An adroit negotiator, she defused the crisis without conceding a single point.",
    "zh": "熟練的、機敏的"
  },
  {
    "front": "alacrity",
    "pos": "n.",
    "def": "brisk and cheerful readiness",
    "example": "He accepted the overseas posting with surprising alacrity.",
    "zh": "欣然、敏捷"
  },
  {
    "front": "ambivalent",
    "pos": "adj.",
    "def": "having mixed or contradictory feelings",
    "example": "Voters remain deeply ambivalent about the proposed constitutional reforms.",
    "zh": "矛盾的、態度不明確的"
  },
  {
    "front": "amenable",
    "pos": "adj.",
    "def": "open and responsive to suggestion",
    "example": "The new director proved far more amenable to staff input than her predecessor.",
    "zh": "願意接受的、順從的"
  },
  {
    "front": "amorphous",
    "pos": "adj.",
    "def": "without a clearly defined shape or form",
    "example": "The movement remained an amorphous coalition with no discernible leadership.",
    "zh": "無定形的、模糊的"
  },
  {
    "front": "anachronistic",
    "pos": "adj.",
    "def": "belonging to a period other than the present; outdated",
    "example": "Critics deride the ceremony as an anachronistic relic of imperial pomp.",
    "zh": "不合時宜的"
  },
  {
    "front": "animosity",
    "pos": "n.",
    "def": "strong hostility or resentment",
    "example": "Decades of animosity between the two factions hindered any reconciliation.",
    "zh": "敵意、仇恨"
  },
  {
    "front": "antipathy",
    "pos": "n.",
    "def": "a deep-seated feeling of aversion",
    "example": "His antipathy towards bureaucracy coloured his entire political career.",
    "zh": "反感、厭惡"
  },
  {
    "front": "aplomb",
    "pos": "n.",
    "def": "self-confidence or assurance, especially under pressure",
    "example": "She fielded the hostile questions with remarkable aplomb.",
    "zh": "沉著、泰然自若"
  },
  {
    "front": "appease",
    "pos": "v.",
    "def": "to pacify by acceding to demands",
    "example": "The concessions were intended to appease the striking workers.",
    "zh": "安撫、平息"
  },
  {
    "front": "apprehensive",
    "pos": "adj.",
    "def": "anxious that something bad may happen",
    "example": "Investors grew increasingly apprehensive as the deadline loomed.",
    "zh": "憂慮的、擔心的"
  },
  {
    "front": "arduous",
    "pos": "adj.",
    "def": "involving strenuous effort; difficult and tiring",
    "example": "The expedition faced an arduous trek across the glacier.",
    "zh": "艱鉅的、費力的"
  },
  {
    "front": "artifice",
    "pos": "n.",
    "def": "clever devices or trickery used to deceive",
    "example": "Her charm was pure artifice, calculated to disarm potential rivals.",
    "zh": "詭計、巧妙手法"
  },
  {
    "front": "astute",
    "pos": "adj.",
    "def": "having sharp judgement; shrewd",
    "example": "An astute observer of markets, he anticipated the downturn months earlier.",
    "zh": "精明的、敏銳的"
  },
  {
    "front": "atone",
    "pos": "v.",
    "def": "to make amends for a wrong",
    "example": "No apology could fully atone for the harm his negligence had caused.",
    "zh": "贖罪、彌補"
  },
  {
    "front": "atrophy",
    "pos": "v.",
    "def": "to waste away through disuse or neglect",
    "example": "Without regular debate, critical thinking skills inevitably atrophy.",
    "zh": "萎縮、退化"
  },
  {
    "front": "augment",
    "pos": "v.",
    "def": "to make greater by adding to it",
    "example": "She augmented her modest salary with freelance translation work.",
    "zh": "增加、擴大"
  },
  {
    "front": "austere",
    "pos": "adj.",
    "def": "severe or strict; markedly plain",
    "example": "The monastery's austere interior reflected the order's vow of poverty.",
    "zh": "簡樸的、嚴峻的"
  },
  {
    "front": "aversion",
    "pos": "n.",
    "def": "a strong dislike or disinclination",
    "example": "His aversion to publicity kept him out of the limelight for decades.",
    "zh": "厭惡、反感"
  },
  {
    "front": "beguile",
    "pos": "v.",
    "def": "to charm or enchant, sometimes deceptively",
    "example": "Audiences were beguiled by the tenor's effortless phrasing.",
    "zh": "迷惑、使著迷"
  },
  {
    "front": "belie",
    "pos": "v.",
    "def": "to fail to give a true impression of; contradict",
    "example": "Her calm demeanour belied the turmoil she felt inside.",
    "zh": "掩飾、與…不符"
  },
  {
    "front": "benevolent",
    "pos": "adj.",
    "def": "well-meaning and kindly",
    "example": "The trust was established by a benevolent industrialist in the 1920s.",
    "zh": "仁慈的、慈善的"
  },
  {
    "front": "bequeath",
    "pos": "v.",
    "def": "to leave property to someone by a will",
    "example": "She bequeathed her entire art collection to the national gallery.",
    "zh": "遺贈、傳給後人"
  },
  {
    "front": "blithe",
    "pos": "adj.",
    "def": "showing a casual, cheerful indifference",
    "example": "He displayed a blithe disregard for the consequences of his remarks.",
    "zh": "漫不經心的、無憂無慮的"
  },
  {
    "front": "brusque",
    "pos": "adj.",
    "def": "abrupt or offhand in speech or manner",
    "example": "Her brusque reply left no doubt that the meeting was over.",
    "zh": "唐突的、無禮的"
  },
  {
    "front": "capitulate",
    "pos": "v.",
    "def": "to cease resisting; surrender",
    "example": "Faced with mounting losses, the board finally capitulated to shareholder demands.",
    "zh": "投降、屈服"
  },
  {
    "front": "censure",
    "pos": "v.",
    "def": "to express severe disapproval formally",
    "example": "Parliament voted to censure the minister for misleading the House.",
    "zh": "譴責、責難"
  },
  {
    "front": "circumvent",
    "pos": "v.",
    "def": "to find a way around an obstacle or rule",
    "example": "The firm restructured offshore to circumvent the new tax regulations.",
    "zh": "規避、繞過"
  },
  {
    "front": "clemency",
    "pos": "n.",
    "def": "mercy or lenience shown to an offender",
    "example": "The condemned man's lawyers petitioned the governor for clemency.",
    "zh": "寬恕、仁慈"
  },
  {
    "front": "coerce",
    "pos": "v.",
    "def": "to persuade someone by using force or threats",
    "example": "Witnesses claimed they had been coerced into signing false statements.",
    "zh": "脅迫、強迫"
  },
  {
    "front": "commiserate",
    "pos": "v.",
    "def": "to express sympathy for someone's misfortune",
    "example": "Colleagues gathered to commiserate with her over the failed bid.",
    "zh": "同情、慰問"
  },
  {
    "front": "compunction",
    "pos": "n.",
    "def": "a feeling of guilt about doing something",
    "example": "He fired half the staff without the slightest compunction.",
    "zh": "內疚、良心不安"
  },
  {
    "front": "conciliatory",
    "pos": "adj.",
    "def": "intended to placate or reconcile",
    "example": "The premier struck a conciliatory tone in her address to the opposition.",
    "zh": "安撫的、和解的"
  },
  {
    "front": "condone",
    "pos": "v.",
    "def": "to accept or allow behaviour considered wrong",
    "example": "The university insisted it would never condone plagiarism, however minor.",
    "zh": "縱容、寬恕"
  },
  {
    "front": "back down",
    "pos": "phrasal v.",
    "def": "to withdraw a claim or position under pressure",
    "example": "Neither side seemed willing to back down over the disputed territory.",
    "zh": "讓步、退縮"
  },
  {
    "front": "bail out",
    "pos": "phrasal v.",
    "def": "to rescue from financial difficulty",
    "example": "Taxpayers were furious at being asked to bail out the failing banks.",
    "zh": "紓困、救援"
  },
  {
    "front": "bandy about",
    "pos": "phrasal v.",
    "def": "to mention an idea or name frequently and casually",
    "example": "Figures of a billion pounds were bandied about with little scrutiny.",
    "zh": "隨意談論、到處傳"
  },
  {
    "front": "blot out",
    "pos": "phrasal v.",
    "def": "to obscure completely; erase from memory",
    "example": "She tried in vain to blot out the memory of that evening.",
    "zh": "遮蔽、抹去"
  },
  {
    "front": "boil down to",
    "pos": "phrasal v.",
    "def": "to amount essentially to",
    "example": "The entire dispute boils down to a question of trust.",
    "zh": "歸結為"
  },
  {
    "front": "bow out",
    "pos": "phrasal v.",
    "def": "to withdraw gracefully from a position or activity",
    "example": "After three decades in office, she chose to bow out at the height of her popularity.",
    "zh": "退出、隱退"
  },
  {
    "front": "buckle down",
    "pos": "phrasal v.",
    "def": "to start working seriously",
    "example": "With finals a fortnight away, he finally buckled down to revision.",
    "zh": "認真投入、埋頭苦幹"
  },
  {
    "front": "butter up",
    "pos": "phrasal v.",
    "def": "to flatter someone to gain favour",
    "example": "He spent the dinner buttering up the investors with lavish compliments.",
    "zh": "奉承、討好"
  },
  {
    "front": "buy into",
    "pos": "phrasal v.",
    "def": "to accept an idea as valid",
    "example": "Few economists buy into the notion that the boom is sustainable.",
    "zh": "相信、接受（想法）"
  },
  {
    "front": "carve out",
    "pos": "phrasal v.",
    "def": "to create or establish through effort",
    "example": "She carved out a niche for herself in forensic linguistics.",
    "zh": "開創、努力取得"
  },
  {
    "front": "cave in",
    "pos": "phrasal v.",
    "def": "to yield to pressure or demands",
    "example": "The government caved in to public outcry and scrapped the levy.",
    "zh": "屈服、讓步"
  },
  {
    "front": "a chip on one's shoulder",
    "pos": "idiom",
    "def": "a persistent grievance or sense of inferiority",
    "example": "He has carried a chip on his shoulder ever since being passed over for promotion.",
    "zh": "耿耿於懷、心懷不滿"
  },
  {
    "front": "a hard pill to swallow",
    "pos": "idiom",
    "def": "an unpleasant fact difficult to accept",
    "example": "Losing the contract to a former apprentice was a hard pill to swallow.",
    "zh": "難以接受的事實"
  },
  {
    "front": "a hot potato",
    "pos": "idiom",
    "def": "a controversial issue nobody wants to handle",
    "example": "Pension reform remains a political hot potato that successive governments have dodged.",
    "zh": "燙手山芋"
  },
  {
    "front": "a shot in the dark",
    "pos": "idiom",
    "def": "a guess made with little information",
    "example": "His diagnosis was little more than a shot in the dark.",
    "zh": "瞎猜、碰運氣"
  },
  {
    "front": "a wild goose chase",
    "pos": "idiom",
    "def": "a hopeless or futile pursuit",
    "example": "The tip-off sent detectives on a wild goose chase across three counties.",
    "zh": "徒勞無功的追尋"
  },
  {
    "front": "back to square one",
    "pos": "idiom",
    "def": "back to the starting point after failure",
    "example": "The trial's collapse put the prosecution back to square one.",
    "zh": "回到原點"
  },
  {
    "front": "bark up the wrong tree",
    "pos": "idiom",
    "def": "to pursue a mistaken line of thought or action",
    "example": "If they suspect the accountant, they are barking up the wrong tree entirely.",
    "zh": "搞錯方向、找錯對象"
  },
  {
    "front": "bend over backwards",
    "pos": "idiom",
    "def": "to make every possible effort to help",
    "example": "The staff bent over backwards to accommodate the delegation's requests.",
    "zh": "竭盡全力"
  },
  {
    "front": "between a rock and a hard place",
    "pos": "idiom",
    "def": "facing two equally unpleasant choices",
    "example": "Caught between a rock and a hard place, she could betray neither her employer nor her conscience.",
    "zh": "進退兩難"
  },
  {
    "front": "bite the bullet",
    "pos": "idiom",
    "def": "to endure something painful with courage",
    "example": "The council bit the bullet and approved the unpopular rate increase.",
    "zh": "咬牙硬撐、硬著頭皮"
  },
  {
    "front": "bury the hatchet",
    "pos": "idiom",
    "def": "to end a quarrel and become friendly",
    "example": "The rival editors finally buried the hatchet after years of public feuding.",
    "zh": "言歸於好、化干戈為玉帛"
  },
  {
    "front": "acute shortage",
    "pos": "collocation",
    "def": "a severe lack of something essential",
    "example": "Rural hospitals face an acute shortage of qualified anaesthetists.",
    "zh": "嚴重短缺"
  },
  {
    "front": "ailing economy",
    "pos": "collocation",
    "def": "an economy in poor condition",
    "example": "The stimulus package did little to revive the ailing economy.",
    "zh": "疲弱的經濟"
  },
  {
    "front": "bitter dispute",
    "pos": "collocation",
    "def": "an intensely hostile disagreement",
    "example": "The bitter dispute over fishing rights has soured diplomatic relations.",
    "zh": "激烈爭端"
  },
  {
    "front": "blanket ban",
    "pos": "collocation",
    "def": "a prohibition covering all cases without exception",
    "example": "Critics argue a blanket ban on vaping would drive users to the black market.",
    "zh": "全面禁令"
  },
  {
    "front": "breakneck speed",
    "pos": "collocation",
    "def": "dangerously or extremely fast pace",
    "example": "The city has expanded at breakneck speed over the past decade.",
    "zh": "飛快的速度"
  },
  {
    "front": "cautious optimism",
    "pos": "collocation",
    "def": "hopeful attitude tempered by wariness",
    "example": "Analysts greeted the ceasefire with cautious optimism.",
    "zh": "審慎樂觀"
  },
  {
    "front": "chronic underfunding",
    "pos": "collocation",
    "def": "persistent insufficient financial support",
    "example": "Chronic underfunding has left the archives in a parlous state.",
    "zh": "長期經費不足"
  },
  {
    "front": "close scrutiny",
    "pos": "collocation",
    "def": "careful and thorough examination",
    "example": "The minister's expenses will now come under close scrutiny.",
    "zh": "嚴密審查"
  },
  {
    "front": "concerted effort",
    "pos": "collocation",
    "def": "a coordinated, determined attempt",
    "example": "Only a concerted effort by all agencies will curb the trafficking networks.",
    "zh": "齊心協力"
  },
  {
    "front": "conclusive proof",
    "pos": "collocation",
    "def": "evidence that settles a question definitively",
    "example": "The manuscript offers conclusive proof of the poem's disputed authorship.",
    "zh": "確鑿證據"
  },
  {
    "front": "conspicuous absence",
    "pos": "collocation",
    "def": "a noticeable and telling failure to appear",
    "example": "The chairman's conspicuous absence from the gala fuelled speculation of a rift.",
    "zh": "引人注目的缺席"
  },
  {
    "front": "crucial juncture",
    "pos": "collocation",
    "def": "a critically important point in time",
    "example": "The negotiations have reached a crucial juncture where compromise is essential.",
    "zh": "關鍵時刻"
  },
  {
    "front": "confound",
    "pos": "v.",
    "def": "to baffle or prove wrong",
    "example": "The team's resurgence confounded pundits who had written them off.",
    "zh": "使困惑、使（預測）落空"
  },
  {
    "front": "connoisseur",
    "pos": "n.",
    "def": "an expert judge in matters of taste",
    "example": "As a connoisseur of Burgundy, he could identify the vintage blindfolded.",
    "zh": "鑑賞家、行家"
  },
  {
    "front": "consternation",
    "pos": "n.",
    "def": "feelings of anxiety or dismay",
    "example": "The verdict was greeted with consternation by civil liberties groups.",
    "zh": "驚愕、驚恐"
  },
  {
    "front": "contravene",
    "pos": "v.",
    "def": "to violate a law, treaty, or code",
    "example": "The airstrikes plainly contravene international humanitarian law.",
    "zh": "違反、牴觸"
  },
  {
    "front": "convivial",
    "pos": "adj.",
    "def": "friendly, lively, and enjoyable",
    "example": "Negotiations resumed in a more convivial atmosphere after dinner.",
    "zh": "歡樂融洽的"
  },
  {
    "front": "convoluted",
    "pos": "adj.",
    "def": "extremely complex and difficult to follow",
    "example": "The bill's convoluted wording left even seasoned lawyers perplexed.",
    "zh": "錯綜複雜的"
  },
  {
    "front": "countenance",
    "pos": "v.",
    "def": "to tolerate or give approval to",
    "example": "The dean refused to countenance any relaxation of admission standards.",
    "zh": "容許、贊同"
  },
  {
    "front": "craven",
    "pos": "adj.",
    "def": "contemptibly lacking in courage",
    "example": "His craven refusal to testify drew scorn from both parties.",
    "zh": "怯懦的、卑怯的"
  },
  {
    "front": "cryptic",
    "pos": "adj.",
    "def": "having a hidden or ambiguous meaning",
    "example": "Her cryptic resignation letter sparked frenzied speculation in the press.",
    "zh": "隱晦難解的"
  },
  {
    "front": "culminate",
    "pos": "v.",
    "def": "to reach a climax or final point",
    "example": "Months of protest culminated in the president's abrupt resignation.",
    "zh": "達到頂點、告終"
  },
  {
    "front": "culpable",
    "pos": "adj.",
    "def": "deserving blame for a fault or wrong",
    "example": "The inquiry found the contractors culpable for the bridge's collapse.",
    "zh": "應受責備的、有罪的"
  },
  {
    "front": "cumbersome",
    "pos": "adj.",
    "def": "awkwardly large, heavy, or inefficient",
    "example": "The visa process remains so cumbersome that many applicants simply give up.",
    "zh": "笨重的、繁瑣的"
  },
  {
    "front": "debase",
    "pos": "v.",
    "def": "to reduce in quality, value, or dignity",
    "example": "Critics argue that reality television debases public discourse.",
    "zh": "貶低、降低品質"
  },
  {
    "front": "debilitate",
    "pos": "v.",
    "def": "to make someone or something very weak",
    "example": "Years of sanctions have debilitated the country's healthcare system.",
    "zh": "使衰弱"
  },
  {
    "front": "decry",
    "pos": "v.",
    "def": "to publicly denounce",
    "example": "Scholars decried the museum's decision to sell off its antiquities.",
    "zh": "公開譴責"
  },
  {
    "front": "deft",
    "pos": "adj.",
    "def": "neatly skilful and quick",
    "example": "With a few deft strokes, the caricaturist captured the senator's pomposity.",
    "zh": "靈巧的、嫻熟的"
  },
  {
    "front": "deign",
    "pos": "v.",
    "def": "to do something considered beneath one's dignity",
    "example": "The maestro rarely deigned to answer his critics.",
    "zh": "屈尊、俯就"
  },
  {
    "front": "delineate",
    "pos": "v.",
    "def": "to describe or portray precisely",
    "example": "The treaty clearly delineates each nation's territorial waters.",
    "zh": "描繪、界定"
  },
  {
    "front": "demeanour",
    "pos": "n.",
    "def": "outward behaviour or bearing",
    "example": "Despite the verdict, the defendant's demeanour remained impassive.",
    "zh": "舉止、風度"
  },
  {
    "front": "denounce",
    "pos": "v.",
    "def": "to condemn publicly as wrong or evil",
    "example": "Opposition leaders denounced the election as a charade.",
    "zh": "譴責、痛斥"
  },
  {
    "front": "deplete",
    "pos": "v.",
    "def": "to use up the supply of; exhaust",
    "example": "Overfishing has severely depleted stocks in the North Atlantic.",
    "zh": "耗盡、使枯竭"
  },
  {
    "front": "deplore",
    "pos": "v.",
    "def": "to feel or express strong disapproval of",
    "example": "The bishops issued a statement deploring the escalation of violence.",
    "zh": "強烈反對、悲嘆"
  },
  {
    "front": "deprecate",
    "pos": "v.",
    "def": "to express disapproval of",
    "example": "She deprecated the growing tendency to reduce debate to slogans.",
    "zh": "不贊成、反對"
  },
  {
    "front": "destitute",
    "pos": "adj.",
    "def": "extremely poor; lacking basic necessities",
    "example": "The floods left thousands of families destitute overnight.",
    "zh": "一貧如洗的"
  },
  {
    "front": "deter",
    "pos": "v.",
    "def": "to discourage from acting through fear or doubt",
    "example": "Harsher sentences have done little to deter repeat offenders.",
    "zh": "嚇阻、使打消念頭"
  },
  {
    "front": "dexterity",
    "pos": "n.",
    "def": "skill in performing tasks, especially with hands",
    "example": "Microsurgery demands extraordinary manual dexterity.",
    "zh": "靈巧、熟練"
  },
  {
    "front": "digress",
    "pos": "v.",
    "def": "to stray from the main topic",
    "example": "Forgive me if I digress, but the anecdote is instructive.",
    "zh": "離題、岔開話題"
  },
  {
    "front": "disabuse",
    "pos": "v.",
    "def": "to free someone from a mistaken belief",
    "example": "Let me disabuse you of the notion that this will be easy.",
    "zh": "使醒悟、糾正錯誤想法"
  },
  {
    "front": "discrepancy",
    "pos": "n.",
    "def": "a lack of consistency between facts",
    "example": "Auditors flagged a glaring discrepancy between the two sets of accounts.",
    "zh": "差異、不一致"
  },
  {
    "front": "disparage",
    "pos": "v.",
    "def": "to belittle or speak of dismissively",
    "example": "He never missed a chance to disparage his rival's scholarship.",
    "zh": "貶低、輕視"
  },
  {
    "front": "dispassionate",
    "pos": "adj.",
    "def": "not influenced by strong emotion; impartial",
    "example": "The report offers a dispassionate assessment of the war's origins.",
    "zh": "冷靜客觀的"
  },
  {
    "front": "disseminate",
    "pos": "v.",
    "def": "to spread information widely",
    "example": "The findings were disseminated through journals and public lectures alike.",
    "zh": "散播、傳播"
  },
  {
    "front": "dissuade",
    "pos": "v.",
    "def": "to persuade someone not to do something",
    "example": "Nothing could dissuade her from pursuing the appeal.",
    "zh": "勸阻"
  },
  {
    "front": "divulge",
    "pos": "v.",
    "def": "to reveal private or secret information",
    "example": "The journalist was jailed for refusing to divulge her sources.",
    "zh": "洩露、透露"
  },
  {
    "front": "docile",
    "pos": "adj.",
    "def": "ready to accept control; submissive",
    "example": "The regime relied on a docile press to launder its image.",
    "zh": "溫順的、易管教的"
  },
  {
    "front": "dormant",
    "pos": "adj.",
    "def": "temporarily inactive",
    "example": "The dispute lay dormant for years before flaring up again.",
    "zh": "休眠的、潛伏的"
  },
  {
    "front": "dour",
    "pos": "adj.",
    "def": "severe, stern, or gloomy in manner",
    "example": "The dour headmaster rarely permitted himself a smile.",
    "zh": "陰沉的、嚴厲的"
  },
  {
    "front": "dubious",
    "pos": "adj.",
    "def": "hesitating or doubtful; of questionable value",
    "example": "The award went to a firm with a dubious environmental record.",
    "zh": "可疑的、半信半疑的"
  },
  {
    "front": "ebb",
    "pos": "v.",
    "def": "to gradually decrease or decline",
    "example": "Public enthusiasm for the project ebbed as costs spiralled.",
    "zh": "衰退、減弱"
  },
  {
    "front": "edify",
    "pos": "v.",
    "def": "to instruct or improve morally or intellectually",
    "example": "The documentary aims to edify rather than merely entertain.",
    "zh": "啟迪、陶冶"
  },
  {
    "front": "effusive",
    "pos": "adj.",
    "def": "expressing feelings in an unrestrained way",
    "example": "The critics were uncharacteristically effusive in their praise of the debut.",
    "zh": "熱情洋溢的"
  },
  {
    "front": "chalk up",
    "pos": "phrasal v.",
    "def": "to achieve or record a success",
    "example": "The party chalked up its third consecutive by-election victory.",
    "zh": "獲得、記下（成績）"
  },
  {
    "front": "chime in",
    "pos": "phrasal v.",
    "def": "to interject in a conversation",
    "example": "Several delegates chimed in with objections of their own.",
    "zh": "插話、附和"
  },
  {
    "front": "churn out",
    "pos": "phrasal v.",
    "def": "to produce in large quantities mechanically",
    "example": "The studio churns out formulaic sequels at an alarming rate.",
    "zh": "大量粗製濫造"
  },
  {
    "front": "clam up",
    "pos": "phrasal v.",
    "def": "to refuse abruptly to speak",
    "example": "The witness clammed up the moment lawyers mentioned her employer.",
    "zh": "閉口不談"
  },
  {
    "front": "clamp down on",
    "pos": "phrasal v.",
    "def": "to suppress or restrict firmly",
    "example": "Regulators vowed to clamp down on misleading advertising.",
    "zh": "取締、嚴加管制"
  },
  {
    "front": "cobble together",
    "pos": "phrasal v.",
    "def": "to assemble roughly or hastily",
    "example": "The coalition was cobbled together from parties with little in common.",
    "zh": "拼湊而成"
  },
  {
    "front": "conjure up",
    "pos": "phrasal v.",
    "def": "to bring to mind; create as if by magic",
    "example": "The novel conjures up the stifling atmosphere of a colonial outpost.",
    "zh": "使浮現、喚起"
  },
  {
    "front": "cough up",
    "pos": "phrasal v.",
    "def": "to hand over money or information reluctantly",
    "example": "The insurers finally coughed up after months of stalling.",
    "zh": "勉強付出、交出"
  },
  {
    "front": "crop up",
    "pos": "phrasal v.",
    "def": "to appear or occur unexpectedly",
    "example": "The same procedural objections crop up at every annual meeting.",
    "zh": "突然出現"
  },
  {
    "front": "dawn on",
    "pos": "phrasal v.",
    "def": "to become evident to someone",
    "example": "It slowly dawned on investigators that the ledger had been doctored.",
    "zh": "開始明白、恍然大悟"
  },
  {
    "front": "delve into",
    "pos": "phrasal v.",
    "def": "to investigate deeply",
    "example": "The biography delves into the composer's troubled final years.",
    "zh": "深入探究"
  },
  {
    "front": "break new ground",
    "pos": "idiom",
    "def": "to do something innovative",
    "example": "Her research broke new ground in the study of epigenetic inheritance.",
    "zh": "開創先河"
  },
  {
    "front": "cast a long shadow",
    "pos": "idiom",
    "def": "to have a lasting negative influence",
    "example": "The scandal cast a long shadow over his otherwise distinguished career.",
    "zh": "留下長遠的陰影"
  },
  {
    "front": "catch someone off guard",
    "pos": "idiom",
    "def": "to surprise someone unprepared",
    "example": "The sudden resignation caught even her closest aides off guard.",
    "zh": "使措手不及"
  },
  {
    "front": "come out of the woodwork",
    "pos": "idiom",
    "def": "to appear suddenly after being hidden",
    "example": "Once the lottery win was announced, distant relatives came out of the woodwork.",
    "zh": "紛紛冒出來"
  },
  {
    "front": "cross that bridge when you come to it",
    "pos": "idiom",
    "def": "to deal with a problem only when it arises",
    "example": "Funding may become an issue, but we'll cross that bridge when we come to it.",
    "zh": "船到橋頭自然直"
  },
  {
    "front": "cut corners",
    "pos": "idiom",
    "def": "to do something cheaply or carelessly",
    "example": "The inquiry revealed that contractors had cut corners on fire safety.",
    "zh": "偷工減料、走捷徑"
  },
  {
    "front": "dodge a bullet",
    "pos": "idiom",
    "def": "to narrowly avoid a disaster",
    "example": "By pulling out of the deal early, the fund dodged a bullet.",
    "zh": "躲過一劫"
  },
  {
    "front": "drag one's feet",
    "pos": "idiom",
    "def": "to act with deliberate slowness",
    "example": "Ministers have been dragging their feet on air quality legislation for years.",
    "zh": "拖拖拉拉、故意拖延"
  },
  {
    "front": "draw a blank",
    "pos": "idiom",
    "def": "to fail to get a result or remember",
    "example": "Detectives drew a blank in their search for the getaway vehicle.",
    "zh": "毫無所獲、想不起來"
  },
  {
    "front": "fall through the cracks",
    "pos": "idiom",
    "def": "to be overlooked by a system",
    "example": "Children of seasonal workers too often fall through the cracks of the school system.",
    "zh": "被制度遺漏"
  },
  {
    "front": "few and far between",
    "pos": "idiom",
    "def": "rare and infrequent",
    "example": "Affordable flats in the capital are few and far between.",
    "zh": "寥寥無幾、稀少"
  },
  {
    "front": "damning indictment",
    "pos": "collocation",
    "def": "a devastating criticism or condemnation",
    "example": "The report is a damning indictment of the prison service's failures.",
    "zh": "強烈的控訴"
  },
  {
    "front": "deafening silence",
    "pos": "collocation",
    "def": "a pointed, conspicuous lack of response",
    "example": "Her appeal for witnesses was met with a deafening silence.",
    "zh": "震耳欲聾的沉默"
  },
  {
    "front": "deep-rooted tradition",
    "pos": "collocation",
    "def": "a custom firmly established over time",
    "example": "Communal harvest feasts remain a deep-rooted tradition in the region.",
    "zh": "根深柢固的傳統"
  },
  {
    "front": "delicate balance",
    "pos": "collocation",
    "def": "an equilibrium easily disturbed",
    "example": "The constitution strikes a delicate balance between liberty and security.",
    "zh": "微妙的平衡"
  },
  {
    "front": "devastating blow",
    "pos": "collocation",
    "def": "an extremely damaging setback",
    "example": "The factory closure dealt a devastating blow to the local economy.",
    "zh": "毀滅性打擊"
  },
  {
    "front": "diametrically opposed",
    "pos": "collocation",
    "def": "completely and directly opposite",
    "example": "The two parties hold diametrically opposed views on immigration.",
    "zh": "截然相反"
  },
  {
    "front": "dismal performance",
    "pos": "collocation",
    "def": "a very poor showing",
    "example": "The party's dismal performance at the polls triggered a leadership contest.",
    "zh": "慘澹的表現"
  },
  {
    "front": "driving force",
    "pos": "collocation",
    "def": "the main impetus behind something",
    "example": "She was the driving force behind the city's literacy campaign.",
    "zh": "推動力、主導力量"
  },
  {
    "front": "exorbitant fees",
    "pos": "collocation",
    "def": "unreasonably high charges",
    "example": "Students protested against the exorbitant fees charged for accommodation.",
    "zh": "過高的費用"
  },
  {
    "front": "fatal flaw",
    "pos": "collocation",
    "def": "a defect that causes complete failure",
    "example": "Overconfidence proved the fatal flaw in an otherwise brilliant strategy.",
    "zh": "致命缺陷"
  },
  {
    "front": "fleeting glimpse",
    "pos": "collocation",
    "def": "a very brief look",
    "example": "Fans caught only a fleeting glimpse of the reclusive author.",
    "zh": "驚鴻一瞥"
  },
  {
    "front": "formidable opponent",
    "pos": "collocation",
    "def": "an adversary inspiring respect or fear",
    "example": "In debate she was a formidable opponent, rarely conceding an inch.",
    "zh": "勁敵、難纏的對手"
  },
  {
    "front": "egalitarian",
    "pos": "adj.",
    "def": "believing in equal rights for all",
    "example": "The kibbutz was founded on strictly egalitarian principles.",
    "zh": "平等主義的"
  },
  {
    "front": "elicit",
    "pos": "v.",
    "def": "to draw out a response or reaction",
    "example": "The proposal elicited a storm of protest from conservationists.",
    "zh": "引出、誘出"
  },
  {
    "front": "eloquent",
    "pos": "adj.",
    "def": "fluent and persuasive in expression",
    "example": "Her eloquent plea for tolerance moved even her fiercest detractors.",
    "zh": "雄辯的、有說服力的"
  },
  {
    "front": "emancipate",
    "pos": "v.",
    "def": "to free from legal or social restrictions",
    "example": "Education, she argued, is what truly emancipates the mind.",
    "zh": "解放、使自由"
  },
  {
    "front": "encroach",
    "pos": "v.",
    "def": "to intrude gradually on rights or territory",
    "example": "Surveillance laws increasingly encroach upon personal privacy.",
    "zh": "侵佔、蠶食"
  },
  {
    "front": "endemic",
    "pos": "adj.",
    "def": "regularly found in a particular place or group",
    "example": "Corruption had become endemic in the licensing bureau.",
    "zh": "地方性的、特有且普遍的"
  },
  {
    "front": "engender",
    "pos": "v.",
    "def": "to cause or give rise to a feeling or situation",
    "example": "Opaque decision-making inevitably engenders distrust.",
    "zh": "產生、引起"
  },
  {
    "front": "ensconce",
    "pos": "v.",
    "def": "to settle comfortably or securely",
    "example": "By noon he was ensconced in the library with a pot of tea.",
    "zh": "安置、安坐"
  },
  {
    "front": "enthral",
    "pos": "v.",
    "def": "to captivate or fascinate completely",
    "example": "The soprano enthralled the audience from her very first note.",
    "zh": "使著迷"
  },
  {
    "front": "entice",
    "pos": "v.",
    "def": "to attract by offering pleasure or advantage",
    "example": "Tax breaks were offered to entice manufacturers back to the region.",
    "zh": "引誘、誘惑"
  },
  {
    "front": "enumerate",
    "pos": "v.",
    "def": "to mention items one by one",
    "example": "The auditor enumerated no fewer than forty procedural breaches.",
    "zh": "列舉"
  },
  {
    "front": "equitable",
    "pos": "adj.",
    "def": "fair and impartial",
    "example": "The tribunal sought an equitable division of the disputed estate.",
    "zh": "公平合理的"
  },
  {
    "front": "eradicate",
    "pos": "v.",
    "def": "to destroy or eliminate completely",
    "example": "The campaign aims to eradicate polio within the decade.",
    "zh": "根除、消滅"
  },
  {
    "front": "erratic",
    "pos": "adj.",
    "def": "unpredictable or inconsistent in behaviour",
    "example": "His increasingly erratic conduct alarmed the board.",
    "zh": "反覆無常的、不穩定的"
  },
  {
    "front": "espouse",
    "pos": "v.",
    "def": "to adopt or support a cause or belief",
    "example": "In later life she espoused a radical form of pacifism.",
    "zh": "擁護、信奉"
  },
  {
    "front": "estrange",
    "pos": "v.",
    "def": "to cause someone to become alienated",
    "example": "His single-mindedness gradually estranged him from old allies.",
    "zh": "使疏遠"
  },
  {
    "front": "exacting",
    "pos": "adj.",
    "def": "demanding great care, effort, or precision",
    "example": "The conservatory's exacting standards weed out all but the most dedicated.",
    "zh": "嚴苛的、要求極高的"
  },
  {
    "front": "excoriate",
    "pos": "v.",
    "def": "to criticise severely",
    "example": "The editorial excoriated the council for its handling of the tender.",
    "zh": "嚴厲抨擊"
  },
  {
    "front": "exude",
    "pos": "v.",
    "def": "to display an emotion or quality strongly",
    "example": "Even under cross-examination, she exuded quiet confidence.",
    "zh": "散發、流露"
  },
  {
    "front": "extrapolate",
    "pos": "v.",
    "def": "to extend conclusions from known data",
    "example": "It is risky to extrapolate national trends from a single constituency.",
    "zh": "推斷、外推"
  },
  {
    "front": "fallacious",
    "pos": "adj.",
    "def": "based on mistaken reasoning",
    "example": "The argument rests on the fallacious assumption that growth is limitless.",
    "zh": "謬誤的"
  },
  {
    "front": "fawning",
    "pos": "adj.",
    "def": "excessively flattering to gain favour",
    "example": "The dictator surrounded himself with fawning courtiers.",
    "zh": "阿諛奉承的"
  },
  {
    "front": "feckless",
    "pos": "adj.",
    "def": "lacking initiative, strength of character, or efficiency",
    "example": "The novel's feckless hero drifts from one failure to the next.",
    "zh": "無能的、不負責任的"
  },
  {
    "front": "feign",
    "pos": "v.",
    "def": "to pretend to feel or be affected by",
    "example": "She feigned indifference, though the snub clearly stung.",
    "zh": "假裝"
  },
  {
    "front": "fetter",
    "pos": "v.",
    "def": "to restrain or restrict",
    "example": "Innovation is fettered by layers of redundant regulation.",
    "zh": "束縛、限制"
  },
  {
    "front": "fiasco",
    "pos": "n.",
    "def": "a complete, humiliating failure",
    "example": "The product launch descended into an unmitigated fiasco.",
    "zh": "慘敗、大失敗"
  },
  {
    "front": "flounder",
    "pos": "v.",
    "def": "to struggle clumsily or be in difficulty",
    "example": "Without its founder, the charity floundered for direction.",
    "zh": "掙扎、陷入困境"
  },
  {
    "front": "foible",
    "pos": "n.",
    "def": "a minor weakness in character",
    "example": "Her biographer treats the great man's foibles with affectionate irony.",
    "zh": "小缺點、怪癖"
  },
  {
    "front": "foray",
    "pos": "n.",
    "def": "a brief attempt at a new activity",
    "example": "His foray into politics ended after a single bruising campaign.",
    "zh": "初次嘗試、涉足"
  },
  {
    "front": "forbearance",
    "pos": "n.",
    "def": "patient self-control and tolerance",
    "example": "She endured the heckling with admirable forbearance.",
    "zh": "克制、寬容忍耐"
  },
  {
    "front": "forgo",
    "pos": "v.",
    "def": "to go without something desirable",
    "example": "Executives agreed to forgo their bonuses during the restructuring.",
    "zh": "放棄、犧牲"
  },
  {
    "front": "forlorn",
    "pos": "adj.",
    "def": "pitifully sad; unlikely to succeed",
    "example": "They clung to the forlorn hope that survivors might yet be found.",
    "zh": "淒涼的、渺茫的"
  },
  {
    "front": "fraught",
    "pos": "adj.",
    "def": "filled with something undesirable; anxious",
    "example": "The peace process remains fraught with difficulty at every turn.",
    "zh": "充滿（問題）的、緊張的"
  },
  {
    "front": "frenetic",
    "pos": "adj.",
    "def": "fast, energetic, and rather wild",
    "example": "Trading reached a frenetic pace in the final hour before the announcement.",
    "zh": "狂熱的、忙亂的"
  },
  {
    "front": "gaffe",
    "pos": "n.",
    "def": "an embarrassing social blunder",
    "example": "The ambassador's gaffe at the banquet made headlines worldwide.",
    "zh": "失言、失態"
  },
  {
    "front": "galling",
    "pos": "adj.",
    "def": "extremely annoying or humiliating",
    "example": "It was particularly galling to lose to a team they had thrashed in autumn.",
    "zh": "令人惱火的"
  },
  {
    "front": "gambit",
    "pos": "n.",
    "def": "a calculated opening move or remark",
    "example": "Offering early concessions was a risky gambit that ultimately paid off.",
    "zh": "開場策略、開局讓棋"
  },
  {
    "front": "garner",
    "pos": "v.",
    "def": "to gather or collect, especially support",
    "example": "The petition garnered over a million signatures within a week.",
    "zh": "獲得、收集"
  },
  {
    "front": "garish",
    "pos": "adj.",
    "def": "obtrusively bright and showy",
    "example": "The historic square is now disfigured by garish neon signage.",
    "zh": "俗豔的、花俏刺眼的"
  },
  {
    "front": "genial",
    "pos": "adj.",
    "def": "friendly and cheerful",
    "example": "Behind his genial manner lay a formidably sharp negotiator.",
    "zh": "和藹親切的"
  },
  {
    "front": "gruelling",
    "pos": "adj.",
    "def": "extremely tiring and demanding",
    "example": "The candidates face a gruelling schedule of debates and rallies.",
    "zh": "使人筋疲力盡的"
  },
  {
    "front": "die down",
    "pos": "phrasal v.",
    "def": "to become gradually less intense",
    "example": "The controversy eventually died down once the minister resigned.",
    "zh": "平息、減弱"
  },
  {
    "front": "dish out",
    "pos": "phrasal v.",
    "def": "to distribute freely, often carelessly",
    "example": "He is quick to dish out criticism but slow to accept it.",
    "zh": "大肆給予、分發"
  },
  {
    "front": "dole out",
    "pos": "phrasal v.",
    "def": "to distribute in small portions",
    "example": "Aid was doled out sparingly to the queuing refugees.",
    "zh": "少量發放"
  },
  {
    "front": "double down on",
    "pos": "phrasal v.",
    "def": "to reinforce commitment to a risky position",
    "example": "Rather than apologise, the network doubled down on its original claims.",
    "zh": "變本加厲、加碼堅持"
  },
  {
    "front": "drag on",
    "pos": "phrasal v.",
    "def": "to continue tediously for too long",
    "example": "The inquiry dragged on for years without producing a single indictment.",
    "zh": "拖延、久拖不決"
  },
  {
    "front": "drown out",
    "pos": "phrasal v.",
    "def": "to make inaudible with louder noise",
    "example": "Jeers from the gallery drowned out the chairman's closing remarks.",
    "zh": "蓋過（聲音）"
  },
  {
    "front": "ease off",
    "pos": "phrasal v.",
    "def": "to become less intense; reduce pressure",
    "example": "Inflationary pressures finally eased off in the third quarter.",
    "zh": "減緩、放鬆"
  },
  {
    "front": "edge out",
    "pos": "phrasal v.",
    "def": "to defeat or displace narrowly",
    "example": "The incumbent was edged out by a political novice in the run-off.",
    "zh": "險勝、擠掉"
  },
  {
    "front": "factor in",
    "pos": "phrasal v.",
    "def": "to include in a calculation or decision",
    "example": "Once maintenance costs are factored in, the savings all but vanish.",
    "zh": "納入考量"
  },
  {
    "front": "fall through",
    "pos": "phrasal v.",
    "def": "to fail to happen or be completed",
    "example": "The takeover fell through at the eleventh hour over pension liabilities.",
    "zh": "告吹、落空"
  },
  {
    "front": "farm out",
    "pos": "phrasal v.",
    "def": "to delegate work to others outside",
    "example": "Much of the coding was farmed out to overseas contractors.",
    "zh": "外包、轉交他人"
  },
  {
    "front": "fight tooth and nail",
    "pos": "idiom",
    "def": "to fight with utmost determination",
    "example": "Residents fought tooth and nail to save the Victorian library from demolition.",
    "zh": "全力抗爭"
  },
  {
    "front": "flog a dead horse",
    "pos": "idiom",
    "def": "to waste effort on a hopeless cause",
    "example": "Reviving the franchise yet again strikes me as flogging a dead horse.",
    "zh": "白費力氣、徒勞"
  },
  {
    "front": "fly off the handle",
    "pos": "idiom",
    "def": "to lose one's temper suddenly",
    "example": "He is apt to fly off the handle at the mildest criticism.",
    "zh": "勃然大怒"
  },
  {
    "front": "get cold feet",
    "pos": "idiom",
    "def": "to lose courage before a commitment",
    "example": "The investors got cold feet and withdrew on the eve of signing.",
    "zh": "臨陣退縮"
  },
  {
    "front": "give someone a run for their money",
    "pos": "idiom",
    "def": "to compete strongly with someone",
    "example": "The upstart label is giving the fashion houses a run for their money.",
    "zh": "與…勢均力敵、構成挑戰"
  },
  {
    "front": "go back to the drawing board",
    "pos": "idiom",
    "def": "to start planning again after failure",
    "example": "After the prototype failed, the engineers went back to the drawing board.",
    "zh": "從頭再來、重新規劃"
  },
  {
    "front": "hang by a thread",
    "pos": "idiom",
    "def": "to be in a very precarious state",
    "example": "With rebels at the gates, the regime's survival hung by a thread.",
    "zh": "命懸一線"
  },
  {
    "front": "hit the ground running",
    "pos": "idiom",
    "def": "to start something with immediate effectiveness",
    "example": "The new CEO hit the ground running, restructuring three divisions in her first month.",
    "zh": "迅速進入狀況"
  },
  {
    "front": "jump on the bandwagon",
    "pos": "idiom",
    "def": "to join a trend for advantage",
    "example": "Once the diet became fashionable, celebrities jumped on the bandwagon.",
    "zh": "跟風、趕流行"
  },
  {
    "front": "leave much to be desired",
    "pos": "idiom",
    "def": "to be far from satisfactory",
    "example": "The hotel's service left much to be desired for the price.",
    "zh": "尚有許多不足"
  },
  {
    "front": "frosty reception",
    "pos": "collocation",
    "def": "an unfriendly, cold welcome",
    "example": "The proposal received a frosty reception from the unions.",
    "zh": "冷淡的回應"
  },
  {
    "front": "gross negligence",
    "pos": "collocation",
    "def": "an extreme, blameworthy lack of care",
    "example": "The operator was found guilty of gross negligence over the derailment.",
    "zh": "重大過失"
  },
  {
    "front": "growing consensus",
    "pos": "collocation",
    "def": "an increasingly shared opinion",
    "example": "There is a growing consensus that the voting age should be lowered.",
    "zh": "日益增加的共識"
  },
  {
    "front": "hard-won victory",
    "pos": "collocation",
    "def": "a success achieved with great difficulty",
    "example": "Universal suffrage was a hard-won victory, secured over generations.",
    "zh": "得來不易的勝利"
  },
  {
    "front": "harsh reality",
    "pos": "collocation",
    "def": "an unpleasant truth that must be faced",
    "example": "Graduates soon confront the harsh reality of a saturated job market.",
    "zh": "殘酷的現實"
  },
  {
    "front": "heavy toll",
    "pos": "collocation",
    "def": "serious damage or loss suffered",
    "example": "The drought has taken a heavy toll on livestock across the plains.",
    "zh": "重大損失、沉重代價"
  },
  {
    "front": "heightened awareness",
    "pos": "collocation",
    "def": "an increased consciousness of something",
    "example": "The campaign produced a heightened awareness of coastal pollution.",
    "zh": "提高的意識"
  },
  {
    "front": "herculean effort",
    "pos": "collocation",
    "def": "a task requiring enormous strength or effort",
    "example": "Rebuilding the archive after the fire demanded a herculean effort.",
    "zh": "艱鉅的努力"
  },
  {
    "front": "hollow victory",
    "pos": "collocation",
    "def": "a win that brings no real benefit",
    "example": "Winning the lawsuit but losing every client proved a hollow victory.",
    "zh": "空洞的勝利"
  },
  {
    "front": "idle threat",
    "pos": "collocation",
    "def": "a threat not intended to be carried out",
    "example": "Her promise to resign was dismissed as an idle threat.",
    "zh": "虛張聲勢的威脅"
  },
  {
    "front": "impending doom",
    "pos": "collocation",
    "def": "a feeling that disaster is imminent",
    "example": "A sense of impending doom hung over the trading floor all morning.",
    "zh": "大難臨頭之感"
  },
  {
    "front": "inextricably linked",
    "pos": "collocation",
    "def": "connected so closely as to be inseparable",
    "example": "The region's prosperity is inextricably linked to the port.",
    "zh": "密不可分"
  },
  {
    "front": "gossamer",
    "pos": "adj.",
    "def": "extremely light, delicate, or flimsy",
    "example": "The treaty rests on the gossamer assumption of mutual goodwill.",
    "zh": "薄如蟬翼的、脆弱的"
  },
  {
    "front": "grandiloquent",
    "pos": "adj.",
    "def": "pompous or extravagant in language",
    "example": "His grandiloquent speeches concealed a poverty of actual policy.",
    "zh": "誇大浮誇的（言辭）"
  },
  {
    "front": "gullible",
    "pos": "adj.",
    "def": "easily deceived or tricked",
    "example": "The scheme preyed on gullible pensioners promised impossible returns.",
    "zh": "容易受騙的"
  },
  {
    "front": "halcyon",
    "pos": "adj.",
    "def": "denoting an idyllically happy, peaceful past period",
    "example": "Veterans of the newsroom reminisce about the halcyon days of print.",
    "zh": "太平美好的（往昔）"
  },
  {
    "front": "harrowing",
    "pos": "adj.",
    "def": "acutely distressing",
    "example": "Survivors gave harrowing accounts of the crossing.",
    "zh": "令人痛心的、悲慘的"
  },
  {
    "front": "hegemony",
    "pos": "n.",
    "def": "dominance of one group or state over others",
    "example": "The summit sought to counter the superpower's regional hegemony.",
    "zh": "霸權"
  },
  {
    "front": "hoodwink",
    "pos": "v.",
    "def": "to deceive or trick someone",
    "example": "Shareholders were hoodwinked by a masterfully falsified prospectus.",
    "zh": "蒙騙、欺瞞"
  },
  {
    "front": "hyperbole",
    "pos": "n.",
    "def": "deliberately exaggerated statement",
    "example": "Stripped of hyperbole, the manifesto contained few concrete commitments.",
    "zh": "誇飾、誇張法"
  },
  {
    "front": "imbue",
    "pos": "v.",
    "def": "to inspire or permeate with a quality",
    "example": "Her upbringing imbued her with a fierce sense of justice.",
    "zh": "灌輸、使充滿"
  },
  {
    "front": "impassive",
    "pos": "adj.",
    "def": "showing no emotion",
    "example": "The general remained impassive as the charges were read out.",
    "zh": "面無表情的"
  },
  {
    "front": "impecunious",
    "pos": "adj.",
    "def": "having little or no money",
    "example": "The garret housed a succession of impecunious poets.",
    "zh": "身無分文的、貧窮的"
  },
  {
    "front": "impede",
    "pos": "v.",
    "def": "to delay or obstruct progress",
    "example": "Heavy snowfall impeded the delivery of relief supplies.",
    "zh": "妨礙、阻礙"
  },
  {
    "front": "imperturbable",
    "pos": "adj.",
    "def": "unable to be upset or excited; calm",
    "example": "The pilot's imperturbable voice reassured the shaken passengers.",
    "zh": "沉著冷靜的"
  },
  {
    "front": "impinge",
    "pos": "v.",
    "def": "to have a negative effect on; encroach",
    "example": "The new curfew impinges directly on freedom of assembly.",
    "zh": "侵犯、對…有影響"
  },
  {
    "front": "impromptu",
    "pos": "adj.",
    "def": "done without preparation",
    "example": "She delivered an impromptu tribute that reduced the hall to tears.",
    "zh": "即興的、臨時的"
  },
  {
    "front": "impugn",
    "pos": "v.",
    "def": "to dispute the truth or honesty of",
    "example": "Counsel repeatedly sought to impugn the witness's motives.",
    "zh": "質疑、非難"
  },
  {
    "front": "inane",
    "pos": "adj.",
    "def": "silly and lacking sense or meaning",
    "example": "The interview lapsed into inane chatter about celebrity diets.",
    "zh": "愚蠢無聊的"
  },
  {
    "front": "inchoate",
    "pos": "adj.",
    "def": "just begun and not fully formed",
    "example": "What began as inchoate discontent hardened into organised resistance.",
    "zh": "初始的、未成形的"
  },
  {
    "front": "incontrovertible",
    "pos": "adj.",
    "def": "impossible to deny or dispute",
    "example": "The DNA evidence provided incontrovertible proof of his innocence.",
    "zh": "無可辯駁的"
  },
  {
    "front": "inculcate",
    "pos": "v.",
    "def": "to instil ideas by persistent instruction",
    "example": "The academy inculcates discipline from the very first day.",
    "zh": "諄諄教誨、灌輸"
  },
  {
    "front": "indomitable",
    "pos": "adj.",
    "def": "impossible to subdue or defeat",
    "example": "Her indomitable spirit carried the team through the disastrous season.",
    "zh": "不屈不撓的"
  },
  {
    "front": "ingratiate",
    "pos": "v.",
    "def": "to bring oneself into favour by flattery",
    "example": "He sought to ingratiate himself with the committee through lavish praise.",
    "zh": "討好、逢迎"
  },
  {
    "front": "inimitable",
    "pos": "adj.",
    "def": "so good as to be impossible to copy",
    "example": "She recounted the fiasco in her own inimitable style.",
    "zh": "無法模仿的、獨特的"
  },
  {
    "front": "innuendo",
    "pos": "n.",
    "def": "an indirect, usually disparaging insinuation",
    "example": "The campaign descended into a swamp of rumour and innuendo.",
    "zh": "影射、暗諷"
  },
  {
    "front": "inordinate",
    "pos": "adj.",
    "def": "unusually or disproportionately large",
    "example": "The board devoted an inordinate amount of time to trivialities.",
    "zh": "過度的、過多的"
  },
  {
    "front": "insatiable",
    "pos": "adj.",
    "def": "impossible to satisfy",
    "example": "The tabloids feed the public's insatiable appetite for scandal.",
    "zh": "永不滿足的"
  },
  {
    "front": "insinuate",
    "pos": "v.",
    "def": "to suggest something unpleasant indirectly",
    "example": "The article insinuated that the judge had been bought.",
    "zh": "暗示、影射"
  },
  {
    "front": "insouciant",
    "pos": "adj.",
    "def": "showing casual lack of concern",
    "example": "He gave an insouciant shrug when asked about the mounting debts.",
    "zh": "滿不在乎的"
  },
  {
    "front": "instigate",
    "pos": "v.",
    "def": "to bring about or incite an action",
    "example": "Prosecutors allege he instigated the riot through inflammatory broadcasts.",
    "zh": "煽動、發起"
  },
  {
    "front": "inundate",
    "pos": "v.",
    "def": "to overwhelm with things to deal with",
    "example": "The helpline was inundated with calls within minutes of the broadcast.",
    "zh": "淹沒、應接不暇"
  },
  {
    "front": "invidious",
    "pos": "adj.",
    "def": "likely to arouse resentment; unfairly discriminating",
    "example": "Ranking colleagues publicly places managers in an invidious position.",
    "zh": "招怨的、不公平的"
  },
  {
    "front": "irksome",
    "pos": "adj.",
    "def": "irritating and tedious",
    "example": "Commuters find the endless ticket barriers particularly irksome.",
    "zh": "令人厭煩的"
  },
  {
    "front": "jettison",
    "pos": "v.",
    "def": "to abandon or discard something",
    "example": "The party quietly jettisoned its pledge to abolish tuition fees.",
    "zh": "拋棄、放棄"
  },
  {
    "front": "jocular",
    "pos": "adj.",
    "def": "humorous or playful in manner",
    "example": "His jocular tone seemed ill-suited to so grave an occasion.",
    "zh": "詼諧的、愛開玩笑的"
  },
  {
    "front": "kudos",
    "pos": "n.",
    "def": "praise and acclaim for an achievement",
    "example": "The young director earned considerable kudos on the festival circuit.",
    "zh": "讚譽、名聲"
  },
  {
    "front": "labyrinthine",
    "pos": "adj.",
    "def": "intricately complicated, like a maze",
    "example": "Applicants despair of the ministry's labyrinthine appeals procedure.",
    "zh": "錯綜複雜如迷宮的"
  },
  {
    "front": "lassitude",
    "pos": "n.",
    "def": "a state of physical or mental weariness",
    "example": "A profound lassitude settled over the delegates after midnight.",
    "zh": "倦怠、無力"
  },
  {
    "front": "lugubrious",
    "pos": "adj.",
    "def": "sad and dismal, often exaggeratedly so",
    "example": "The undertaker's lugubrious expression never varied.",
    "zh": "陰鬱的、哀傷的"
  },
  {
    "front": "machination",
    "pos": "n.",
    "def": "a scheming plot to gain power",
    "example": "The memoir lays bare the machinations behind the palace coup.",
    "zh": "陰謀、詭計"
  },
  {
    "front": "malaise",
    "pos": "n.",
    "def": "a general feeling of unease or decline",
    "example": "The strike is a symptom of a deeper malaise within the industry.",
    "zh": "萎靡不振、隱憂"
  },
  {
    "front": "fawn over",
    "pos": "phrasal v.",
    "def": "to flatter or attend to excessively",
    "example": "The press corps fawned over the visiting royals all week.",
    "zh": "諂媚、極力奉承"
  },
  {
    "front": "firm up",
    "pos": "phrasal v.",
    "def": "to make an arrangement more definite",
    "example": "The two sides met to firm up the details of the ceasefire.",
    "zh": "敲定、使確定"
  },
  {
    "front": "flare up",
    "pos": "phrasal v.",
    "def": "to erupt or intensify suddenly",
    "example": "Border tensions flared up again after the disputed patrol incident.",
    "zh": "突然爆發"
  },
  {
    "front": "fob off",
    "pos": "phrasal v.",
    "def": "to deceive someone with excuses or inferior substitutes",
    "example": "Customers complained of being fobbed off with vague assurances.",
    "zh": "敷衍、搪塞"
  },
  {
    "front": "fork out",
    "pos": "phrasal v.",
    "def": "to pay reluctantly, especially a large amount",
    "example": "Season-ticket holders must fork out an extra hundred pounds this year.",
    "zh": "不情願地支付"
  },
  {
    "front": "gear up for",
    "pos": "phrasal v.",
    "def": "to prepare for an activity or event",
    "example": "The party machine is already gearing up for a snap election.",
    "zh": "為…做準備"
  },
  {
    "front": "gnaw at",
    "pos": "phrasal v.",
    "def": "to trouble persistently",
    "example": "Doubts about the verdict gnawed at the juror for years.",
    "zh": "折磨、使不安"
  },
  {
    "front": "hammer out",
    "pos": "phrasal v.",
    "def": "to reach agreement after long negotiation",
    "example": "Delegates hammered out a compromise in the small hours.",
    "zh": "反覆磋商達成"
  },
  {
    "front": "hash out",
    "pos": "phrasal v.",
    "def": "to discuss thoroughly to reach a decision",
    "example": "The co-founders met privately to hash out their differences.",
    "zh": "詳細討論解決"
  },
  {
    "front": "head off",
    "pos": "phrasal v.",
    "def": "to prevent something by taking early action",
    "example": "Swift diplomacy headed off a full-blown trade war.",
    "zh": "預先阻止、化解"
  },
  {
    "front": "hunker down",
    "pos": "phrasal v.",
    "def": "to settle in and prepare to endure",
    "example": "Businesses hunkered down for a long recession.",
    "zh": "蟄伏應對、做好長期準備"
  },
  {
    "front": "let sleeping dogs lie",
    "pos": "idiom",
    "def": "to avoid stirring up old problems",
    "example": "Reopening the inheritance dispute seems unwise; better to let sleeping dogs lie.",
    "zh": "別自找麻煩、不要舊事重提"
  },
  {
    "front": "miss the boat",
    "pos": "idiom",
    "def": "to lose an opportunity by being slow",
    "example": "Retailers who ignored e-commerce missed the boat entirely.",
    "zh": "錯失良機"
  },
  {
    "front": "muddy the waters",
    "pos": "idiom",
    "def": "to make an issue more confused",
    "example": "The minister's contradictory statements only muddied the waters further.",
    "zh": "混淆視聽、把事情攪渾"
  },
  {
    "front": "on thin ice",
    "pos": "idiom",
    "def": "in a risky or precarious situation",
    "example": "After the leaked memo, the spokesman knew he was on thin ice.",
    "zh": "如履薄冰、處境危險"
  },
  {
    "front": "open a can of worms",
    "pos": "idiom",
    "def": "to create numerous new problems",
    "example": "Auditing the offshore accounts would open a can of worms nobody wanted.",
    "zh": "捅出一堆麻煩"
  },
  {
    "front": "pass the buck",
    "pos": "idiom",
    "def": "to shift responsibility to someone else",
    "example": "Each department passed the buck until the complaint simply vanished.",
    "zh": "推卸責任"
  },
  {
    "front": "pull strings",
    "pos": "idiom",
    "def": "to use influence secretly to gain advantage",
    "example": "Her uncle pulled strings to secure the internship for her.",
    "zh": "走後門、動用關係"
  },
  {
    "front": "push the envelope",
    "pos": "idiom",
    "def": "to go beyond accepted limits; innovate",
    "example": "The choreographer keeps pushing the envelope of what ballet can express.",
    "zh": "挑戰極限、突破框架"
  },
  {
    "front": "put the cart before the horse",
    "pos": "idiom",
    "def": "to do things in the wrong order",
    "example": "Marketing a drug before the trials conclude is putting the cart before the horse.",
    "zh": "本末倒置"
  },
  {
    "front": "read between the lines",
    "pos": "idiom",
    "def": "to infer an unstated meaning",
    "example": "Reading between the lines, the communiqué signals a policy retreat.",
    "zh": "讀出言外之意"
  },
  {
    "front": "rock the boat",
    "pos": "idiom",
    "def": "to disturb a stable situation",
    "example": "Junior partners were warned not to rock the boat before the merger.",
    "zh": "興風作浪、破壞現狀"
  },
  {
    "front": "insurmountable obstacle",
    "pos": "collocation",
    "def": "a barrier impossible to overcome",
    "example": "The funding gap proved an insurmountable obstacle to the expedition.",
    "zh": "無法克服的障礙"
  },
  {
    "front": "intrinsic value",
    "pos": "collocation",
    "def": "worth belonging naturally to something",
    "example": "Wilderness, she argued, possesses intrinsic value beyond any economic measure.",
    "zh": "內在價值"
  },
  {
    "front": "irreparable damage",
    "pos": "collocation",
    "def": "harm that cannot be undone",
    "example": "The leak caused irreparable damage to relations between the allies.",
    "zh": "無法彌補的損害"
  },
  {
    "front": "looming crisis",
    "pos": "collocation",
    "def": "a crisis that is threateningly imminent",
    "example": "Demographers have long warned of a looming pensions crisis.",
    "zh": "迫在眉睫的危機"
  },
  {
    "front": "lucrative deal",
    "pos": "collocation",
    "def": "an agreement producing great profit",
    "example": "The striker signed a lucrative deal with a rival club.",
    "zh": "利潤豐厚的交易"
  },
  {
    "front": "marked improvement",
    "pos": "collocation",
    "def": "a clearly noticeable advance",
    "example": "Inspectors noted a marked improvement in the school's results.",
    "zh": "顯著改善"
  },
  {
    "front": "mutual distrust",
    "pos": "collocation",
    "def": "suspicion felt by each side toward the other",
    "example": "Decades of mutual distrust have stalled every disarmament initiative.",
    "zh": "相互猜忌"
  },
  {
    "front": "narrow escape",
    "pos": "collocation",
    "def": "a situation barely avoided disaster",
    "example": "The crew had a narrow escape when the rig caught fire.",
    "zh": "死裡逃生、僥倖脫險"
  },
  {
    "front": "niggling doubt",
    "pos": "collocation",
    "def": "a small but persistent uncertainty",
    "example": "A niggling doubt about the alibi kept the detective awake.",
    "zh": "揮之不去的疑慮"
  },
  {
    "front": "overriding concern",
    "pos": "collocation",
    "def": "the most important worry or priority",
    "example": "Passenger safety must remain the overriding concern in any redesign.",
    "zh": "首要考量"
  },
  {
    "front": "overwhelming majority",
    "pos": "collocation",
    "def": "a very large proportion of a group",
    "example": "An overwhelming majority of members endorsed the strike action.",
    "zh": "壓倒性多數"
  },
  {
    "front": "palpable tension",
    "pos": "collocation",
    "def": "tension so intense it seems physically felt",
    "example": "There was palpable tension in the chamber as the votes were counted.",
    "zh": "幾乎可以感覺到的緊張"
  },
  {
    "front": "malign",
    "pos": "v.",
    "def": "to speak harmful untruths about someone",
    "example": "The whistle-blower was maligned in the press for months.",
    "zh": "誹謗、中傷"
  },
  {
    "front": "mawkish",
    "pos": "adj.",
    "def": "sentimental in an exaggerated, sickly way",
    "example": "The film's mawkish finale undermined its otherwise unflinching realism.",
    "zh": "多愁善感到令人膩的"
  },
  {
    "front": "mercenary",
    "pos": "adj.",
    "def": "motivated chiefly by money",
    "example": "Critics dismissed the reunion tour as a purely mercenary exercise.",
    "zh": "唯利是圖的"
  },
  {
    "front": "mettle",
    "pos": "n.",
    "def": "spirit and resilience under pressure",
    "example": "The away fixture will truly test the young squad's mettle.",
    "zh": "勇氣、毅力"
  },
  {
    "front": "milieu",
    "pos": "n.",
    "def": "a person's social environment",
    "example": "The novelist depicts the bohemian milieu of interwar Paris.",
    "zh": "社會環境、圈子"
  },
  {
    "front": "minutiae",
    "pos": "n.",
    "def": "small, precise, often trivial details",
    "example": "She delegated the minutiae of scheduling to her assistant.",
    "zh": "枝微末節"
  },
  {
    "front": "misanthrope",
    "pos": "n.",
    "def": "a person who dislikes humankind",
    "example": "The reclusive author cultivated his reputation as a misanthrope.",
    "zh": "厭世者、憤世嫉俗的人"
  },
  {
    "front": "modicum",
    "pos": "n.",
    "def": "a small quantity of something",
    "example": "Anyone with a modicum of sense would have declined the wager.",
    "zh": "少量、一點點"
  },
  {
    "front": "moratorium",
    "pos": "n.",
    "def": "a temporary official ban on an activity",
    "example": "The council imposed a moratorium on new licences for short-term lets.",
    "zh": "暫停令、延期償付"
  },
  {
    "front": "moribund",
    "pos": "adj.",
    "def": "in terminal decline; near death",
    "example": "Foreign investment briefly revived the moribund shipbuilding industry.",
    "zh": "垂死的、奄奄一息的"
  },
  {
    "front": "motley",
    "pos": "adj.",
    "def": "incongruously varied in composition",
    "example": "A motley coalition of anarchists and farmers occupied the square.",
    "zh": "混雜的、五花八門的"
  },
  {
    "front": "multifarious",
    "pos": "adj.",
    "def": "having many varied parts or aspects",
    "example": "Her multifarious duties ranged from fundraising to fixing the boiler.",
    "zh": "五花八門的、多方面的"
  },
  {
    "front": "myopic",
    "pos": "adj.",
    "def": "lacking foresight; short-sighted",
    "example": "A myopic obsession with quarterly earnings blinds firms to systemic risk.",
    "zh": "短視的"
  },
  {
    "front": "nascent",
    "pos": "adj.",
    "def": "just coming into existence",
    "example": "The nascent democracy faced its first real test at the ballot box.",
    "zh": "初生的、萌芽的"
  },
  {
    "front": "nemesis",
    "pos": "n.",
    "def": "an arch-rival or agent of downfall",
    "example": "The prosecutor became the cartel's most feared nemesis.",
    "zh": "剋星、報應"
  },
  {
    "front": "neophyte",
    "pos": "n.",
    "def": "a beginner in a subject or activity",
    "example": "The manual assumes no knowledge, guiding the neophyte step by step.",
    "zh": "新手、初學者"
  },
  {
    "front": "noxious",
    "pos": "adj.",
    "def": "harmful, poisonous, or very unpleasant",
    "example": "Residents complained of noxious fumes drifting from the plant.",
    "zh": "有害的、有毒的"
  },
  {
    "front": "nuance",
    "pos": "n.",
    "def": "a subtle difference in meaning or tone",
    "example": "Machine translation still struggles with the nuances of diplomatic language.",
    "zh": "細微差別"
  },
  {
    "front": "nullify",
    "pos": "v.",
    "def": "to make legally void; cancel out",
    "example": "The appellate court nullified the contract on grounds of duress.",
    "zh": "使無效、作廢"
  },
  {
    "front": "obliterate",
    "pos": "v.",
    "def": "to destroy utterly; wipe out",
    "example": "The bombardment obliterated the medieval quarter in a single night.",
    "zh": "徹底摧毀、抹除"
  },
  {
    "front": "obstinate",
    "pos": "adj.",
    "def": "stubbornly refusing to change one's position",
    "example": "His obstinate refusal to compromise doomed the coalition talks.",
    "zh": "固執的、頑固的"
  },
  {
    "front": "odious",
    "pos": "adj.",
    "def": "extremely unpleasant; repulsive",
    "example": "The court heard details of the regime's most odious practices.",
    "zh": "可憎的、令人作嘔的"
  },
  {
    "front": "ominous",
    "pos": "adj.",
    "def": "suggesting that something bad will happen",
    "example": "An ominous silence followed the chairman's final question.",
    "zh": "不祥的"
  },
  {
    "front": "opaque",
    "pos": "adj.",
    "def": "not transparent; hard to understand",
    "example": "The fund's opaque ownership structure frustrated investigators for years.",
    "zh": "不透明的、難懂的"
  },
  {
    "front": "opprobrium",
    "pos": "n.",
    "def": "harsh public criticism or disgrace",
    "example": "The senator faced international opprobrium for his remarks.",
    "zh": "公眾的譴責、恥辱"
  },
  {
    "front": "oscillate",
    "pos": "v.",
    "def": "to waver between extremes of opinion or state",
    "example": "Policy has oscillated between engagement and containment for a decade.",
    "zh": "搖擺、擺盪"
  },
  {
    "front": "ostentatious",
    "pos": "adj.",
    "def": "designed to impress through conspicuous display",
    "example": "The oligarch's ostentatious mansion dwarfed the surrounding village.",
    "zh": "炫耀的、鋪張的"
  },
  {
    "front": "overt",
    "pos": "adj.",
    "def": "done or shown openly",
    "example": "The report documents overt discrimination in the hiring process.",
    "zh": "公開的、明顯的"
  },
  {
    "front": "panache",
    "pos": "n.",
    "def": "flamboyant confidence of style",
    "example": "She defended her thesis with characteristic panache.",
    "zh": "瀟灑的氣派、神采"
  },
  {
    "front": "parochial",
    "pos": "adj.",
    "def": "narrow in outlook or scope",
    "example": "Critics accused the broadcaster of a parochial fixation on domestic trivia.",
    "zh": "狹隘的、地方本位的"
  },
  {
    "front": "pedantic",
    "pos": "adj.",
    "def": "excessively concerned with minor rules or details",
    "example": "His pedantic corrections derailed an otherwise fruitful seminar.",
    "zh": "賣弄學問的、吹毛求疵的"
  },
  {
    "front": "perfidious",
    "pos": "adj.",
    "def": "deceitful and untrustworthy",
    "example": "The memoirs brand his former patron a perfidious schemer.",
    "zh": "背信棄義的"
  },
  {
    "front": "peruse",
    "pos": "v.",
    "def": "to read carefully and thoroughly",
    "example": "Counsel spent the weekend perusing the leaked correspondence.",
    "zh": "細讀、詳閱"
  },
  {
    "front": "pervasive",
    "pos": "adj.",
    "def": "spreading widely through every part",
    "example": "A pervasive culture of secrecy stifled internal criticism.",
    "zh": "無所不在的、瀰漫的"
  },
  {
    "front": "petulant",
    "pos": "adj.",
    "def": "childishly sulky or bad-tempered",
    "example": "The star's petulant outburst overshadowed the premiere.",
    "zh": "鬧脾氣的、任性的"
  },
  {
    "front": "pilfer",
    "pos": "v.",
    "def": "to steal items of little value",
    "example": "Stationery was routinely pilfered from the supply cupboard.",
    "zh": "小偷小摸"
  },
  {
    "front": "placate",
    "pos": "v.",
    "def": "to make someone less angry",
    "example": "A hasty refund did little to placate the stranded passengers.",
    "zh": "安撫、平息怒氣"
  },
  {
    "front": "plaintive",
    "pos": "adj.",
    "def": "sounding sad and mournful",
    "example": "A plaintive folk melody drifted across the abandoned square.",
    "zh": "哀怨的、悲傷的"
  },
  {
    "front": "plaudits",
    "pos": "n.",
    "def": "enthusiastic praise or applause",
    "example": "The restoration project won plaudits from conservationists worldwide.",
    "zh": "喝采、讚揚"
  },
  {
    "front": "pliable",
    "pos": "adj.",
    "def": "easily bent or influenced",
    "example": "The junta installed a pliable technocrat as figurehead president.",
    "zh": "柔韌的、易受擺布的"
  },
  {
    "front": "poignant",
    "pos": "adj.",
    "def": "evoking a keen sense of sadness",
    "example": "The unfinished letter made a poignant coda to the exhibition.",
    "zh": "令人心酸的、動人的"
  },
  {
    "front": "lap up",
    "pos": "phrasal v.",
    "def": "to accept or enjoy eagerly and uncritically",
    "example": "The tabloids lapped up every salacious detail of the trial.",
    "zh": "欣然接受、照單全收"
  },
  {
    "front": "lash out at",
    "pos": "phrasal v.",
    "def": "to attack verbally or physically in anger",
    "example": "The coach lashed out at referees after the controversial defeat.",
    "zh": "猛烈抨擊"
  },
  {
    "front": "let up",
    "pos": "phrasal v.",
    "def": "to become less intense; stop",
    "example": "The downpour showed no sign of letting up before kick-off.",
    "zh": "減弱、停歇"
  },
  {
    "front": "live down",
    "pos": "phrasal v.",
    "def": "to make people forget an embarrassment",
    "example": "He never quite lived down his on-air blunder.",
    "zh": "洗刷（羞恥）、使被淡忘"
  },
  {
    "front": "map out",
    "pos": "phrasal v.",
    "def": "to plan in detail",
    "example": "The committee mapped out a ten-year strategy for the port's expansion.",
    "zh": "詳細規劃"
  },
  {
    "front": "mete out",
    "pos": "phrasal v.",
    "def": "to dispense punishment or harsh treatment",
    "example": "Draconian penalties were meted out to even minor offenders.",
    "zh": "施加（懲罰）"
  },
  {
    "front": "muddle through",
    "pos": "phrasal v.",
    "def": "to cope despite lacking a clear plan",
    "example": "With half the staff absent, the office simply muddled through.",
    "zh": "勉強應付過去"
  },
  {
    "front": "muscle in on",
    "pos": "phrasal v.",
    "def": "to force one's way into another's territory",
    "example": "The conglomerate is muscling in on the artisan coffee market.",
    "zh": "強行插足、硬擠進"
  },
  {
    "front": "notch up",
    "pos": "phrasal v.",
    "def": "to achieve or score something",
    "example": "The airline notched up record profits despite soaring fuel costs.",
    "zh": "取得（成績）"
  },
  {
    "front": "opt out of",
    "pos": "phrasal v.",
    "def": "to choose not to participate in",
    "example": "Several member states opted out of the data-sharing scheme.",
    "zh": "選擇退出"
  },
  {
    "front": "pass off as",
    "pos": "phrasal v.",
    "def": "to falsely present something as genuine",
    "example": "The gallery unwittingly passed off forgeries as lost masterpieces.",
    "zh": "冒充、偽稱為"
  },
  {
    "front": "ring hollow",
    "pos": "idiom",
    "def": "to seem insincere or unconvincing",
    "example": "The apology rang hollow given the airline's repeated failures.",
    "zh": "聽起來空洞不真誠"
  },
  {
    "front": "ruffle feathers",
    "pos": "idiom",
    "def": "to annoy or upset people",
    "example": "Her blunt appraisal of the syllabus ruffled feathers in the faculty.",
    "zh": "得罪人、惹惱他人"
  },
  {
    "front": "second to none",
    "pos": "idiom",
    "def": "better than all others",
    "example": "The conservatory's teaching facilities are second to none in Europe.",
    "zh": "首屈一指"
  },
  {
    "front": "steal someone's thunder",
    "pos": "idiom",
    "def": "to take attention or credit from someone",
    "example": "The surprise royal announcement stole the chancellor's thunder entirely.",
    "zh": "搶走風頭"
  },
  {
    "front": "stem the tide",
    "pos": "idiom",
    "def": "to stop the course of an unfavourable trend",
    "example": "Nothing seemed able to stem the tide of counterfeit goods.",
    "zh": "遏止（不利的趨勢）"
  },
  {
    "front": "take stock of",
    "pos": "idiom",
    "def": "to assess a situation carefully",
    "example": "After the defeat, the party paused to take stock of its direction.",
    "zh": "審視評估"
  },
  {
    "front": "the last straw",
    "pos": "idiom",
    "def": "the final problem that makes a situation unbearable",
    "example": "The pay freeze was the last straw for the exhausted nursing staff.",
    "zh": "壓垮駱駝的最後一根稻草"
  },
  {
    "front": "the tip of the iceberg",
    "pos": "idiom",
    "def": "a small visible part of a larger problem",
    "example": "The reported cases are merely the tip of the iceberg.",
    "zh": "冰山一角"
  },
  {
    "front": "tighten one's belt",
    "pos": "idiom",
    "def": "to spend less because of hardship",
    "example": "Households have tightened their belts as energy bills soar.",
    "zh": "勒緊褲帶、縮衣節食"
  },
  {
    "front": "toe the line",
    "pos": "idiom",
    "def": "to conform to rules or authority",
    "example": "Backbenchers who refused to toe the line lost their committee seats.",
    "zh": "服從、乖乖聽話"
  },
  {
    "front": "turn the tables",
    "pos": "idiom",
    "def": "to reverse a position of disadvantage",
    "example": "The defence turned the tables by putting the accuser's conduct on trial.",
    "zh": "扭轉局勢、反敗為勝"
  },
  {
    "front": "patently absurd",
    "pos": "collocation",
    "def": "obviously ridiculous",
    "example": "The claim that no one foresaw the crash is patently absurd.",
    "zh": "顯然荒謬"
  },
  {
    "front": "plummeting sales",
    "pos": "collocation",
    "def": "rapidly falling sales figures",
    "example": "Plummeting sales forced the chain to shutter fifty branches.",
    "zh": "銷售額暴跌"
  },
  {
    "front": "pressing need",
    "pos": "collocation",
    "def": "an urgent requirement",
    "example": "There is a pressing need for interpreters in the asylum courts.",
    "zh": "迫切需求"
  },
  {
    "front": "prohibitive cost",
    "pos": "collocation",
    "def": "expense so high it prevents action",
    "example": "The prohibitive cost of insurance keeps young drivers off the road.",
    "zh": "高得令人卻步的成本"
  },
  {
    "front": "rigorous analysis",
    "pos": "collocation",
    "def": "a thorough, exacting examination",
    "example": "The claims collapsed under rigorous analysis of the raw data.",
    "zh": "嚴謹的分析"
  },
  {
    "front": "rude awakening",
    "pos": "collocation",
    "def": "a sudden, unpleasant realisation",
    "example": "Graduates expecting instant success are in for a rude awakening.",
    "zh": "殘酷的覺醒"
  },
  {
    "front": "scant regard",
    "pos": "collocation",
    "def": "very little attention or respect",
    "example": "The developers showed scant regard for the site's archaeological value.",
    "zh": "毫不在意、極少的重視"
  },
  {
    "front": "seismic shift",
    "pos": "collocation",
    "def": "a fundamental, far-reaching change",
    "example": "Streaming triggered a seismic shift in how music is consumed.",
    "zh": "劇烈變革"
  },
  {
    "front": "simmering tensions",
    "pos": "collocation",
    "def": "suppressed hostility close to eruption",
    "example": "Simmering tensions between the two communities finally boiled over.",
    "zh": "暗潮洶湧的緊張情勢"
  },
  {
    "front": "soaring unemployment",
    "pos": "collocation",
    "def": "rapidly rising joblessness",
    "example": "Soaring unemployment fuelled support for the populist fringe.",
    "zh": "飆升的失業率"
  },
  {
    "front": "spotless reputation",
    "pos": "collocation",
    "def": "a completely unblemished public standing",
    "example": "One indiscretion destroyed a spotless reputation built over decades.",
    "zh": "毫無瑕疵的名聲"
  },
  {
    "front": "staggering amount",
    "pos": "collocation",
    "def": "an astonishingly large quantity",
    "example": "A staggering amount of food is discarded before reaching shelves.",
    "zh": "驚人的數量"
  }
];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  VOCAB = VOCAB.concat(BANK);
})();
