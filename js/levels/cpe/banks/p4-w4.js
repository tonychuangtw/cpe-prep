/* CPE Prep extra bank: part4 wave 4 */
(function () {
  var BANK = [
    {
      original: "The government raised interest rates, trying to curb inflation.",
      keyword: "ATTEMPT",
      gapped: "The government raised interest rates in ____ inflation.",
      answers: ["an attempt to curb"],
      model: "an attempt to curb",
      explanation: "'Trying to do' becomes the noun phrase 'in an attempt to do'."
    },
    {
      original: "She moved to the capital hoping to further her career.",
      keyword: "BID",
      gapped: "She moved to the capital in ____ her career.",
      answers: ["a bid to further"],
      model: "a bid to further",
      explanation: "'Hoping to do' can be rephrased as 'in a bid to do', meaning with the aim of doing."
    },
    {
      original: "They tried to revive the stranded whale, but without success.",
      keyword: "VAIN",
      gapped: "They tried ____ the stranded whale.",
      answers: ["in vain to revive"],
      model: "in vain to revive",
      explanation: "'Tried..., but without success' is expressed as 'tried in vain to do'."
    },
    {
      original: "Thousands of migrants crossed the border hoping to find work.",
      keyword: "SEARCH",
      gapped: "Thousands of migrants crossed the border ____ work.",
      answers: ["in search of"],
      model: "in search of",
      explanation: "'Hoping to find something' is condensed into the fixed phrase 'in search of something'."
    },
    {
      original: "A banquet was held to celebrate the retiring professor.",
      keyword: "HONOUR",
      gapped: "A banquet was held ____ the retiring professor.",
      answers: ["in honour of"],
      model: "in honour of",
      explanation: "An event held to celebrate someone is held 'in honour of' that person."
    },
    {
      original: "The new extension matches the style of the original building.",
      keyword: "KEEPING",
      gapped: "The new extension is ____ the style of the original building.",
      answers: ["in keeping with"],
      model: "in keeping with",
      explanation: "'Matches / is consistent with' becomes the fixed phrase 'in keeping with'."
    },
    {
      original: "Employees must follow the safety regulations at all times.",
      keyword: "ACCORDANCE",
      gapped: "Employees must act ____ the safety regulations at all times.",
      answers: ["in accordance with"],
      model: "in accordance with",
      explanation: "'Follow the rules' is formally rendered as 'act in accordance with the rules'."
    },
    {
      original: "They let her stay rent-free because she looked after the garden.",
      keyword: "RETURN",
      gapped: "They let her stay rent-free ____ after the garden.",
      answers: ["in return for looking"],
      model: "in return for looking",
      explanation: "'Because she did X' becomes 'in return for doing X', showing an exchange."
    },
    {
      original: "She was awarded a medal because of her services to medicine.",
      keyword: "RECOGNITION",
      gapped: "She was awarded a medal ____ her services to medicine.",
      answers: ["in recognition of"],
      model: "in recognition of",
      explanation: "An award given 'because of' someone's contribution is given 'in recognition of' it."
    },
    {
      original: "Extra staff were hired because a busy holiday season was expected.",
      keyword: "ANTICIPATION",
      gapped: "Extra staff were hired ____ a busy holiday season.",
      answers: ["in anticipation of"],
      model: "in anticipation of",
      explanation: "'Because something was expected' becomes 'in anticipation of something'."
    },
    {
      original: "Looking back, I realise that accepting the job was unwise.",
      keyword: "RETROSPECT",
      gapped: "____ that accepting the job was unwise.",
      answers: ["In retrospect I realise", "In retrospect I realize"],
      model: "In retrospect I realise",
      explanation: "'Looking back' is expressed with the fixed phrase 'in retrospect'."
    },
    {
      original: "He usually goes for a run before breakfast.",
      keyword: "HABIT",
      gapped: "He is ____ for a run before breakfast.",
      answers: ["in the habit of going"],
      model: "in the habit of going",
      explanation: "'Usually does' becomes 'is in the habit of doing'."
    },
    {
      original: "They are currently converting the barn into a studio.",
      keyword: "PROCESS",
      gapped: "They are ____ the barn into a studio.",
      answers: ["in the process of converting"],
      model: "in the process of converting",
      explanation: "'Currently doing' becomes 'in the process of doing'."
    },
    {
      original: "I really don't feel like arguing tonight.",
      keyword: "MOOD",
      gapped: "I am ____ arguing tonight.",
      answers: ["in no mood for"],
      model: "in no mood for",
      explanation: "'Don't feel like doing' becomes 'am in no mood for doing'."
    },
    {
      original: "The police found the suspect carrying a forged passport.",
      keyword: "POSSESSION",
      gapped: "The suspect was found ____ a forged passport.",
      answers: ["in possession of"],
      model: "in possession of",
      explanation: "'Carrying / having' something illicit is formally 'in possession of' it."
    },
    {
      original: "The scandal could endanger the whole peace process.",
      keyword: "JEOPARDY",
      gapped: "The whole peace process could ____ the scandal.",
      answers: ["be put in jeopardy by", "be placed in jeopardy by"],
      model: "be put in jeopardy by",
      explanation: "'Endanger' becomes the passive 'be put in jeopardy by'."
    },
    {
      original: "There were not enough qualified engineers at the time.",
      keyword: "SUPPLY",
      gapped: "Qualified engineers ____ at the time.",
      answers: ["were in short supply"],
      model: "were in short supply",
      explanation: "'Not enough of something' means it is 'in short supply'."
    },
    {
      original: "Everyone wants to hire experienced translators these days.",
      keyword: "DEMAND",
      gapped: "Experienced translators are ____ these days.",
      answers: ["in great demand", "in high demand"],
      model: "in great demand",
      explanation: "'Everyone wants' someone or something means they are 'in great/high demand'."
    },
    {
      original: "The robbery took place somewhere near the harbour.",
      keyword: "VICINITY",
      gapped: "The robbery took place ____ the harbour.",
      answers: ["in the vicinity of"],
      model: "in the vicinity of",
      explanation: "'Somewhere near' is formally expressed as 'in the vicinity of'."
    },
    {
      original: "The young players deeply admire and revere their coach.",
      keyword: "AWE",
      gapped: "The young players stand ____ their coach.",
      answers: ["in awe of"],
      model: "in awe of",
      explanation: "'Deeply admire and revere' becomes 'stand in awe of'."
    },
    {
      original: "The company cut prices to try to attract younger customers.",
      keyword: "EFFORT",
      gapped: "The company cut prices in ____ younger customers.",
      answers: ["an effort to attract"],
      model: "an effort to attract",
      explanation: "'To try to do' becomes the noun phrase 'in an effort to do'."
    },
    {
      original: "Most committee members supported the proposal.",
      keyword: "FAVOUR",
      gapped: "Most committee members were ____ the proposal.",
      answers: ["in favour of"],
      model: "in favour of",
      explanation: "'Supported' becomes 'were in favour of'."
    },
    {
      original: "The original film was thrilling, whereas the sequel is dull.",
      keyword: "CONTRAST",
      gapped: "____ the thrilling original film, the sequel is dull.",
      answers: ["In contrast to", "In marked contrast to"],
      model: "In contrast to",
      explanation: "'Whereas' can be replaced by the fronted phrase 'in contrast to'."
    },
    {
      original: "He agreed to testify provided he received immunity.",
      keyword: "EXCHANGE",
      gapped: "He agreed to testify ____ immunity.",
      answers: ["in exchange for"],
      model: "in exchange for",
      explanation: "'Provided he received X' expresses a bargain: 'in exchange for X'."
    },
    {
      original: "All new buildings must meet the fire regulations.",
      keyword: "COMPLIANCE",
      gapped: "All new buildings must be ____ the fire regulations.",
      answers: ["in compliance with", "in full compliance with"],
      model: "in compliance with",
      explanation: "'Meet the regulations' becomes 'be in compliance with the regulations'."
    },
    {
      original: "The country was undergoing an economic crisis when the war broke out.",
      keyword: "MIDST",
      gapped: "The country was ____ an economic crisis when the war broke out.",
      answers: ["in the midst of"],
      model: "in the midst of",
      explanation: "'Undergoing / in the middle of' becomes 'in the midst of'."
    },
    {
      original: "There is no rush for us to sell the house.",
      keyword: "HURRY",
      gapped: "We are ____ to sell the house.",
      answers: ["in no hurry", "in no particular hurry"],
      model: "in no hurry",
      explanation: "'There is no rush for X to do' becomes 'X is in no hurry to do'."
    },
    {
      original: "I am extremely grateful to my mentor for everything she taught me.",
      keyword: "DEBT",
      gapped: "I am forever ____ for everything she taught me.",
      answers: ["in my mentor's debt"],
      model: "in my mentor's debt",
      explanation: "'Extremely grateful to someone' can be expressed as 'in someone's debt'."
    },
    {
      original: "The prosecution alleged that she had falsified the accounts.",
      keyword: "ACCUSED",
      gapped: "She ____ the accounts by the prosecution.",
      answers: ["was accused of falsifying", "was accused of having falsified"],
      model: "was accused of falsifying",
      explanation: "'Alleged that she had done' becomes the passive 'was accused of doing/having done'."
    },
    {
      original: "Everyone praised Maria warmly when she won the scholarship.",
      keyword: "CONGRATULATED",
      gapped: "Everyone warmly ____ the scholarship.",
      answers: ["congratulated Maria on winning"],
      model: "congratulated Maria on winning",
      explanation: "'Praised her when she won' becomes 'congratulated her on winning'."
    },
    {
      original: "'Sorry I'm late — the traffic was terrible,' said Tom.",
      keyword: "APOLOGISED",
      gapped: "Tom ____ late, blaming the terrible traffic.",
      answers: ["apologised for being", "apologised for arriving"],
      model: "apologised for being",
      explanation: "Direct speech 'Sorry I'm late' is reported as 'apologised for being late'."
    },
    {
      original: "The heavy snow made it impossible for us to reach the summit.",
      keyword: "PREVENTED",
      gapped: "The heavy snow ____ the summit.",
      answers: ["prevented us from reaching"],
      model: "prevented us from reaching",
      explanation: "'Made it impossible for X to do' becomes 'prevented X from doing'."
    },
    {
      original: "The high entrance fee did not discourage people from visiting the exhibition.",
      keyword: "DETERRED",
      gapped: "People ____ visiting the exhibition by the high entrance fee.",
      answers: ["were not deterred from"],
      model: "were not deterred from",
      explanation: "'Did not discourage from doing' becomes the passive 'were not deterred from doing'."
    },
    {
      original: "Her friends persuaded her not to resign.",
      keyword: "DISSUADED",
      gapped: "Her friends ____ resigning.",
      answers: ["dissuaded her from"],
      model: "dissuaded her from",
      explanation: "'Persuade someone not to do' equals 'dissuade someone from doing'."
    },
    {
      original: "The doctor told him he must not lift heavy weights.",
      keyword: "WARNED",
      gapped: "The doctor ____ heavy weights.",
      answers: ["warned him not to lift", "warned him against lifting"],
      model: "warned him not to lift",
      explanation: "A prohibition can be reported with 'warned someone not to do / against doing'."
    },
    {
      original: "'You should really see a specialist,' my sister told me.",
      keyword: "URGED",
      gapped: "My sister ____ a specialist.",
      answers: ["urged me to see"],
      model: "urged me to see",
      explanation: "Strong advice is reported with 'urged someone to do'."
    },
    {
      original: "He promised himself he would never gamble again.",
      keyword: "VOWED",
      gapped: "He ____ again.",
      answers: ["vowed never to gamble"],
      model: "vowed never to gamble",
      explanation: "A solemn promise is reported with 'vowed (never) to do'."
    },
    {
      original: "She admitted that she had leaked the document.",
      keyword: "CONFESSED",
      gapped: "She ____ the document.",
      answers: ["confessed to leaking", "confessed to having leaked"],
      model: "confessed to leaking",
      explanation: "'Admitted doing' becomes 'confessed to doing/having done'; 'to' here is a preposition."
    },
    {
      original: "The pilot was held responsible for the crash.",
      keyword: "BLAMED",
      gapped: "The pilot ____ crash.",
      answers: ["was blamed for the"],
      model: "was blamed for the",
      explanation: "'Held responsible for' becomes the passive 'was blamed for'."
    },
    {
      original: "Reviewers attacked the novel because of its weak ending.",
      keyword: "CRITICISED",
      gapped: "The novel ____ reviewers for its weak ending.",
      answers: ["was criticised by", "was heavily criticised by"],
      model: "was criticised by",
      explanation: "'Attacked' (verbally) becomes the passive 'was criticised by'."
    },
    {
      original: "The jury praised the firefighter for her bravery.",
      keyword: "COMMENDED",
      gapped: "The firefighter ____ the jury for her bravery.",
      answers: ["was commended by"],
      model: "was commended by",
      explanation: "'Praised' becomes the more formal passive 'was commended by'."
    },
    {
      original: "My father told me off for neglecting my studies.",
      keyword: "REPROACHED",
      gapped: "My father ____ my studies.",
      answers: ["reproached me for neglecting"],
      model: "reproached me for neglecting",
      explanation: "'Told someone off for doing' becomes 'reproached someone for doing'."
    },
    {
      original: "The landlord finally agreed to let us repaint the flat.",
      keyword: "CONSENTED",
      gapped: "The landlord finally ____ the flat.",
      answers: ["consented to our repainting", "consented to us repainting"],
      model: "consented to our repainting",
      explanation: "'Agreed to let X do' becomes 'consented to X('s) doing'."
    },
    {
      original: "In the end, they decided not to appeal against the verdict.",
      keyword: "OPTED",
      gapped: "In the end, they ____ against the verdict.",
      answers: ["opted not to appeal"],
      model: "opted not to appeal",
      explanation: "'Decided not to do' becomes 'opted not to do'."
    },
    {
      original: "As no better offer emerged, we accepted the smaller apartment.",
      keyword: "SETTLED",
      gapped: "As no better offer emerged, we ____ apartment.",
      answers: ["settled for the smaller"],
      model: "settled for the smaller",
      explanation: "'Accepted (reluctantly)' becomes 'settled for', meaning accepted as second best."
    },
    {
      original: "The team eventually managed to isolate the virus.",
      keyword: "SUCCEEDED",
      gapped: "The team eventually ____ the virus.",
      answers: ["succeeded in isolating"],
      model: "succeeded in isolating",
      explanation: "'Managed to do' becomes 'succeeded in doing'."
    },
    {
      original: "Despite the ridicule, he continued to defend his theory.",
      keyword: "PERSISTED",
      gapped: "Despite the ridicule, he ____ his theory.",
      answers: ["persisted in defending"],
      model: "persisted in defending",
      explanation: "'Continued to do (despite opposition)' becomes 'persisted in doing'."
    },
    {
      original: "The company began an ambitious expansion programme last year.",
      keyword: "EMBARKED",
      gapped: "The company ____ ambitious expansion programme last year.",
      answers: ["embarked on an", "embarked upon an"],
      model: "embarked on an",
      explanation: "'Began (a major undertaking)' becomes 'embarked on/upon'."
    },
    {
      original: "The club obeyed the new licensing rules without protest.",
      keyword: "COMPLIED",
      gapped: "The club ____ new licensing rules without protest.",
      answers: ["complied with the"],
      model: "complied with the",
      explanation: "'Obeyed the rules' becomes 'complied with the rules'."
    },
    {
      original: "The festival took place at the same time as the royal visit.",
      keyword: "COINCIDED",
      gapped: "The festival ____ royal visit.",
      answers: ["coincided with the"],
      model: "coincided with the",
      explanation: "'Took place at the same time as' becomes 'coincided with'."
    },
    {
      original: "Years of research finally led to a Nobel Prize.",
      keyword: "CULMINATED",
      gapped: "Years of research finally ____ Nobel Prize.",
      answers: ["culminated in a"],
      model: "culminated in a",
      explanation: "A process that 'finally led to' a climax 'culminated in' it."
    },
    {
      original: "Her fear of dogs is the result of a childhood incident.",
      keyword: "STEMS",
      gapped: "Her fear of dogs ____ childhood incident.",
      answers: ["stems from a"],
      model: "stems from a",
      explanation: "'Is the result of' becomes 'stems from'."
    },
    {
      original: "Whether the deal goes ahead depends entirely on the bank's approval.",
      keyword: "HINGES",
      gapped: "The deal ____ the bank's approval.",
      answers: ["hinges entirely on", "hinges entirely upon"],
      model: "hinges entirely on",
      explanation: "'Depends entirely on' becomes 'hinges entirely on/upon'."
    },
    {
      original: "Ultimately, the dispute is simply a question of money.",
      keyword: "BOILS",
      gapped: "Ultimately, the dispute ____ question of money.",
      answers: ["boils down to a"],
      model: "boils down to a",
      explanation: "'Is simply / essentially' becomes 'boils down to'."
    },
    {
      original: "His silence is effectively an admission of guilt.",
      keyword: "AMOUNTS",
      gapped: "His silence effectively ____ of guilt.",
      answers: ["amounts to an admission"],
      model: "amounts to an admission",
      explanation: "'Is effectively (equivalent to)' becomes 'amounts to'."
    },
    {
      original: "The hotel provides for the needs of disabled guests.",
      keyword: "CATERS",
      gapped: "The hotel ____ needs of disabled guests.",
      answers: ["caters for the", "caters to the"],
      model: "caters for the",
      explanation: "'Provides for the needs of' becomes 'caters for/to'."
    },
    {
      original: "The station received a flood of complaints after the broadcast.",
      keyword: "INUNDATED",
      gapped: "The station ____ complaints after the broadcast.",
      answers: ["was inundated with"],
      model: "was inundated with",
      explanation: "'Received a flood of' becomes the passive 'was inundated with'."
    },
    {
      original: "The returning astronauts received endless praise.",
      keyword: "SHOWERED",
      gapped: "The returning astronauts ____ praise.",
      answers: ["were showered with"],
      model: "were showered with",
      explanation: "'Received a great deal of (praise, gifts)' becomes 'were showered with'."
    },
    {
      original: "They gave the intern responsibility for the entire archive.",
      keyword: "ENTRUSTED",
      gapped: "The intern ____ the entire archive.",
      answers: ["was entrusted with"],
      model: "was entrusted with",
      explanation: "'Gave X responsibility for Y' becomes 'X was entrusted with Y'."
    },
    {
      original: "After the takeover, the firm had to bear enormous debts.",
      keyword: "SADDLED",
      gapped: "After the takeover, the firm ____ enormous debts.",
      answers: ["was saddled with", "found itself saddled with"],
      model: "was saddled with",
      explanation: "'Had to bear (an unwanted burden)' becomes 'was saddled with'."
    },
    {
      original: "Marconi is regarded as the inventor of radio communication.",
      keyword: "CREDITED",
      gapped: "Marconi ____ radio communication.",
      answers: ["is credited with inventing", "is generally credited with inventing"],
      model: "is credited with inventing",
      explanation: "'Regarded as the inventor of' becomes 'credited with inventing'."
    },
    {
      original: "The soprano has a naturally remarkable voice.",
      keyword: "ENDOWED",
      gapped: "The soprano ____ remarkable voice.",
      answers: ["is endowed with a", "is naturally endowed with a"],
      model: "is naturally endowed with a",
      explanation: "'Has (a natural gift)' becomes 'is (naturally) endowed with'."
    },
    {
      original: "Technical problems troubled the project from the start.",
      keyword: "PLAGUED",
      gapped: "The project ____ technical problems from the start.",
      answers: ["was plagued by", "was plagued with"],
      model: "was plagued by",
      explanation: "'Troubled by persistent problems' becomes 'was plagued by/with'."
    },
    {
      original: "The report contained a great many errors.",
      keyword: "RIDDLED",
      gapped: "The report ____ errors.",
      answers: ["was riddled with"],
      model: "was riddled with",
      explanation: "'Contained a great many (faults)' becomes 'was riddled with'."
    },
    {
      original: "The expedition involved considerable danger.",
      keyword: "FRAUGHT",
      gapped: "The expedition ____ danger.",
      answers: ["was fraught with"],
      model: "was fraught with",
      explanation: "'Involved considerable (danger, difficulty)' becomes 'was fraught with'."
    },
    {
      original: "The landscape had no vegetation whatsoever.",
      keyword: "DEVOID",
      gapped: "The landscape was ____ whatsoever.",
      answers: ["devoid of any vegetation"],
      model: "devoid of any vegetation",
      explanation: "'Had no X whatsoever' becomes 'was devoid of any X'."
    },
    {
      original: "The performance had no real passion.",
      keyword: "LACKING",
      gapped: "The performance was ____ passion.",
      answers: ["lacking in real", "sorely lacking in real"],
      model: "lacking in real",
      explanation: "'Had no X' becomes 'was lacking in X'."
    },
    {
      original: "Charities do not have to pay this tax.",
      keyword: "EXEMPT",
      gapped: "Charities ____ this tax.",
      answers: ["are exempt from", "are exempt from paying"],
      model: "are exempt from",
      explanation: "'Do not have to pay' becomes 'are exempt from (paying)'."
    },
    {
      original: "Only permanent staff can apply for the bonus.",
      keyword: "ELIGIBLE",
      gapped: "Only permanent staff ____ the bonus.",
      answers: ["are eligible for", "are eligible to apply for"],
      model: "are eligible for",
      explanation: "'Can apply for' becomes 'are eligible for / to apply for'."
    },
    {
      original: "Season-ticket holders may claim a full refund.",
      keyword: "ENTITLED",
      gapped: "Season-ticket holders ____ full refund.",
      answers: ["are entitled to a", "are entitled to claim a"],
      model: "are entitled to a",
      explanation: "'May claim' becomes 'are entitled to (claim)'."
    },
    {
      original: "He tends to exaggerate whenever he tells a story.",
      keyword: "PRONE",
      gapped: "He ____ whenever he tells a story.",
      answers: ["is prone to exaggerating", "is prone to exaggeration", "is prone to exaggerate"],
      model: "is prone to exaggerating",
      explanation: "'Tends to do (something undesirable)' becomes 'is prone to doing / to do'."
    },
    {
      original: "She completely failed to notice the chaos around her.",
      keyword: "OBLIVIOUS",
      gapped: "She was ____ chaos around her.",
      answers: ["completely oblivious to the", "totally oblivious to the", "oblivious to the"],
      model: "completely oblivious to the",
      explanation: "'Failed to notice' becomes 'was oblivious to'."
    },
    {
      original: "He doesn't mind taking the occasional risk.",
      keyword: "AVERSE",
      gapped: "He is ____ the occasional risk.",
      answers: ["not averse to taking"],
      model: "not averse to taking",
      explanation: "'Doesn't mind doing' becomes the litotes 'is not averse to doing'."
    },
    {
      original: "For many people, the brand means luxury.",
      keyword: "SYNONYMOUS",
      gapped: "For many people, the brand ____ luxury.",
      answers: ["is synonymous with", "has become synonymous with"],
      model: "is synonymous with",
      explanation: "'Means / is identified with' becomes 'is synonymous with'."
    },
    {
      original: "The noisy office makes concentration difficult.",
      keyword: "CONDUCIVE",
      gapped: "The noisy office ____ concentration.",
      answers: ["is not conducive to", "is hardly conducive to"],
      model: "is not conducive to",
      explanation: "'Makes X difficult' becomes 'is not conducive to X'."
    },
    {
      original: "Refusing the invitation would be practically an insult.",
      keyword: "TANTAMOUNT",
      gapped: "Refusing the invitation would be ____ insult.",
      answers: ["tantamount to an"],
      model: "tantamount to an",
      explanation: "'Practically the same as' becomes 'tantamount to'."
    },
    {
      original: "She played a key role in securing the contract.",
      keyword: "INSTRUMENTAL",
      gapped: "She ____ securing the contract.",
      answers: ["was instrumental in"],
      model: "was instrumental in",
      explanation: "'Played a key role in' becomes 'was instrumental in'."
    },
    {
      original: "The region is famous for its excellent wines.",
      keyword: "RENOWNED",
      gapped: "The region ____ excellent wines.",
      answers: ["is renowned for its"],
      model: "is renowned for its",
      explanation: "'Famous for' becomes the stronger 'renowned for'."
    },
    {
      original: "The pass has a bad reputation for sudden storms.",
      keyword: "NOTORIOUS",
      gapped: "The pass ____ sudden storms.",
      answers: ["is notorious for", "is notorious for its"],
      model: "is notorious for",
      explanation: "'Has a bad reputation for' becomes 'is notorious for'."
    },
    {
      original: "Young children catch colds very easily.",
      keyword: "SUSCEPTIBLE",
      gapped: "Young children ____ colds.",
      answers: ["are highly susceptible to", "are very susceptible to", "are susceptible to"],
      model: "are highly susceptible to",
      explanation: "'Catch X easily' becomes 'are (highly) susceptible to X'."
    },
    {
      original: "He simply can't stop checking his phone.",
      keyword: "ADDICTED",
      gapped: "He ____ his phone.",
      answers: ["is addicted to checking"],
      model: "is addicted to checking",
      explanation: "'Can't stop doing' becomes 'is addicted to doing'."
    },
    {
      original: "Coastal towns can easily be damaged by flooding.",
      keyword: "VULNERABLE",
      gapped: "Coastal towns ____ flooding.",
      answers: ["are vulnerable to", "are highly vulnerable to"],
      model: "are vulnerable to",
      explanation: "'Can easily be damaged by' becomes 'are vulnerable to'."
    },
    {
      original: "The new software does not work with older systems.",
      keyword: "COMPATIBLE",
      gapped: "The new software is ____ older systems.",
      answers: ["not compatible with"],
      model: "not compatible with",
      explanation: "'Does not work with' becomes 'is not compatible with'."
    },
    {
      original: "My grandmother rather likes a glass of sherry.",
      keyword: "PARTIAL",
      gapped: "My grandmother is ____ glass of sherry.",
      answers: ["rather partial to a", "quite partial to a", "partial to a"],
      model: "rather partial to a",
      explanation: "'Rather likes' becomes 'is (rather) partial to'."
    },
    {
      original: "His unconventional outfit surprised many at the ceremony.",
      keyword: "EYEBROWS",
      gapped: "His unconventional outfit ____ at the ceremony.",
      answers: ["raised many eyebrows", "raised a few eyebrows", "raised quite a few eyebrows"],
      model: "raised many eyebrows",
      explanation: "Something that surprises or mildly shocks people 'raises eyebrows'."
    },
    {
      original: "Someone told a joke, which helped everyone relax at the start of the meeting.",
      keyword: "ICE",
      gapped: "Someone told a joke, which helped ____ at the start of the meeting.",
      answers: ["to break the ice", "break the ice"],
      model: "to break the ice",
      explanation: "'Break the ice' means to ease initial social awkwardness."
    },
    {
      original: "His argument doesn't stand up to scrutiny.",
      keyword: "WATER",
      gapped: "His argument simply ____.",
      answers: ["does not hold water", "doesn't hold water"],
      model: "does not hold water",
      explanation: "An argument that fails under scrutiny 'does not hold water'."
    },
    {
      original: "Who revealed the secret about the surprise party?",
      keyword: "CAT",
      gapped: "Who let ____ the bag about the surprise party?",
      answers: ["the cat out of"],
      model: "the cat out of",
      explanation: "'Let the cat out of the bag' means to reveal a secret."
    },
    {
      original: "Trying to renegotiate now is a complete waste of effort.",
      keyword: "HORSE",
      gapped: "Trying to renegotiate now is like ____.",
      answers: ["flogging a dead horse", "beating a dead horse"],
      model: "flogging a dead horse",
      explanation: "'Flogging a dead horse' means wasting effort on something hopeless."
    },
    {
      original: "If you keep raising false alarms, no one will believe you in a real emergency.",
      keyword: "WOLF",
      gapped: "If you ____, no one will believe you in a real emergency.",
      answers: ["keep crying wolf", "go on crying wolf"],
      model: "keep crying wolf",
      explanation: "'Cry wolf' means to raise repeated false alarms."
    },
    {
      original: "She adapted to her new school with remarkable ease.",
      keyword: "DUCK",
      gapped: "She took to her new school like ____ water.",
      answers: ["a duck to"],
      model: "a duck to",
      explanation: "'Take to something like a duck to water' means to adapt very naturally."
    },
    {
      original: "He only just managed to pass the exam.",
      keyword: "SKIN",
      gapped: "He passed the exam by ____ teeth.",
      answers: ["the skin of his"],
      model: "the skin of his",
      explanation: "'By the skin of one's teeth' means by the narrowest of margins."
    },
    {
      original: "The proposal was pushed through despite fierce opposition.",
      keyword: "TEETH",
      gapped: "The proposal was pushed through in ____ fierce opposition.",
      answers: ["the teeth of"],
      model: "the teeth of",
      explanation: "'In the teeth of' means in direct defiance of opposition."
    },
    {
      original: "The final round of the quiz turned out to be very easy.",
      keyword: "CAKE",
      gapped: "The final round of the quiz turned out to be ____.",
      answers: ["a piece of cake"],
      model: "a piece of cake",
      explanation: "'A piece of cake' means something very easy."
    },
    {
      original: "The inheritance has been a source of dispute in the family for years.",
      keyword: "BONE",
      gapped: "The inheritance has been ____ contention in the family for years.",
      answers: ["a bone of"],
      model: "a bone of",
      explanation: "'A bone of contention' is a subject of ongoing dispute."
    },
    {
      original: "They criticise their manager whenever she isn't there.",
      keyword: "BACK",
      gapped: "They criticise their manager ____.",
      answers: ["behind her back"],
      model: "behind her back",
      explanation: "'Behind someone's back' means in their absence, without their knowledge."
    },
    {
      original: "He suffered badly the last time he invested in shares.",
      keyword: "FINGERS",
      gapped: "He ____ badly the last time he invested in shares.",
      answers: ["burnt his fingers", "burned his fingers", "got his fingers burnt"],
      model: "burnt his fingers",
      explanation: "'Burn one's fingers' means to suffer from a risky venture."
    },
    {
      original: "As a general guideline, allow one bottle per guest.",
      keyword: "THUMB",
      gapped: "As ____, allow one bottle per guest.",
      answers: ["a rule of thumb", "a general rule of thumb"],
      model: "a rule of thumb",
      explanation: "'A rule of thumb' is a rough practical guideline."
    },
    {
      original: "He's always resentful because he never went to university.",
      keyword: "CHIP",
      gapped: "He has ____ shoulder about never having gone to university.",
      answers: ["a chip on his"],
      model: "a chip on his",
      explanation: "'Have a chip on one's shoulder' means to harbour lasting resentment."
    },
    {
      original: "The manager broke his promise to promote her.",
      keyword: "WENT",
      gapped: "The manager ____ his promise to promote her.",
      answers: ["went back on"],
      model: "went back on",
      explanation: "'Go back on a promise' means to fail to keep it."
    },
    {
      original: "We had no petrol left halfway home.",
      keyword: "RAN",
      gapped: "We ____ petrol halfway home.",
      answers: ["ran out of"],
      model: "ran out of",
      explanation: "'Run out of something' means to use up one's supply of it."
    },
    {
      original: "The novelty of the gadget gradually disappeared.",
      keyword: "WORE",
      gapped: "The novelty of the gadget ____.",
      answers: ["gradually wore off"],
      model: "gradually wore off",
      explanation: "'Wear off' means to fade or disappear gradually."
    },
    {
      original: "The match was cancelled because of the waterlogged pitch.",
      keyword: "CALLED",
      gapped: "The match ____ because of the waterlogged pitch.",
      answers: ["was called off"],
      model: "was called off",
      explanation: "'Call off' means to cancel; here it appears in the passive."
    },
    {
      original: "The police say the possibility of arson cannot be excluded.",
      keyword: "RULED",
      gapped: "The police say arson cannot ____.",
      answers: ["be ruled out"],
      model: "be ruled out",
      explanation: "'Rule out' means to exclude as a possibility."
    },
    {
      original: "The critics picked out her performance for special praise.",
      keyword: "SINGLED",
      gapped: "Her performance ____ the critics for special praise.",
      answers: ["was singled out by"],
      model: "was singled out by",
      explanation: "'Single out' means to select one from a group for particular attention."
    },
    {
      original: "The old currency will be gradually withdrawn over five years.",
      keyword: "PHASED",
      gapped: "The old currency will be gradually ____ five years.",
      answers: ["phased out over"],
      model: "phased out over",
      explanation: "'Phase out' means to withdraw something gradually in stages."
    },
    {
      original: "By leaving early, she failed to benefit from the free samples.",
      keyword: "MISSED",
      gapped: "By leaving early, she ____ the free samples.",
      answers: ["missed out on"],
      model: "missed out on",
      explanation: "'Miss out on something' means to lose the chance to benefit from it."
    },
    {
      original: "The younger players greatly admire the captain.",
      keyword: "LOOKED",
      gapped: "The captain ____ by the younger players.",
      answers: ["is greatly looked up to", "is looked up to"],
      model: "is greatly looked up to",
      explanation: "'Look up to someone' means to admire them; here in the passive."
    },
    {
      original: "Smoking is considered unacceptable in most offices nowadays.",
      keyword: "FROWNED",
      gapped: "Smoking ____ in most offices nowadays.",
      answers: ["is frowned upon", "is frowned on"],
      model: "is frowned upon",
      explanation: "'Be frowned upon' means to be disapproved of."
    },
    {
      original: "She rejected the chance to work in Milan.",
      keyword: "PASSED",
      gapped: "She ____ chance to work in Milan.",
      answers: ["passed up the"],
      model: "passed up the",
      explanation: "'Pass up a chance' means to decline an opportunity."
    },
    {
      original: "The recipe has been passed from generation to generation.",
      keyword: "HANDED",
      gapped: "The recipe has ____ from generation to generation.",
      answers: ["been handed down"],
      model: "been handed down",
      explanation: "'Hand down' means to pass on to later generations."
    },
    {
      original: "Despite the setbacks, the team managed to achieve a victory.",
      keyword: "PULLED",
      gapped: "Despite the setbacks, the team ____ victory.",
      answers: ["pulled off a"],
      model: "pulled off a",
      explanation: "'Pull off' means to succeed in something difficult."
    },
    {
      original: "As he practised, his confidence steadily grew.",
      keyword: "MORE",
      gapped: "The ____ confident he became.",
      answers: ["more he practised, the more", "more he practiced, the more"],
      model: "more he practised, the more",
      explanation: "Parallel growth is expressed with the double comparative 'the more..., the more...'."
    },
    {
      original: "The medicine is supposed to be taken with food.",
      keyword: "MEANT",
      gapped: "The medicine ____ taken with food.",
      answers: ["is meant to be"],
      model: "is meant to be",
      explanation: "'Is supposed to be done' equals 'is meant to be done'."
    },
    {
      original: "I don't mind in the slightest if you borrow the car.",
      keyword: "LEAST",
      gapped: "I do not mind ____ if you borrow the car.",
      answers: ["in the least"],
      model: "in the least",
      explanation: "'In the slightest' can be replaced by 'in the least' after a negative."
    },
    {
      original: "Her second album is just as inventive as her first.",
      keyword: "EVERY",
      gapped: "Her second album is ____ inventive as her first.",
      answers: ["every bit as"],
      model: "every bit as",
      explanation: "'Just as... as' can be intensified as 'every bit as... as'."
    },
    {
      original: "Nobody warned us about the roadworks until yesterday.",
      keyword: "IT",
      gapped: "____ yesterday that anyone warned us about the roadworks.",
      answers: ["It was not until", "It wasn't until"],
      model: "It was not until",
      explanation: "The cleft structure 'It was not until X that...' emphasises the time."
    },
    {
      original: "It would be worth your while visiting the archives.",
      keyword: "PAY",
      gapped: "It would ____ the archives.",
      answers: ["pay you to visit"],
      model: "pay you to visit",
      explanation: "'It would be worth your while doing' equals 'it would pay you to do'."
    },
    {
      original: "Nobody took any notice of the safety briefing.",
      keyword: "ATTENTION",
      gapped: "Nobody paid ____ the safety briefing.",
      answers: ["any attention to", "the slightest attention to"],
      model: "any attention to",
      explanation: "'Take notice of' becomes 'pay attention to'."
    },
    {
      original: "We should exploit this rare opportunity fully.",
      keyword: "MOST",
      gapped: "We should make ____ this rare opportunity.",
      answers: ["the most of"],
      model: "the most of",
      explanation: "'Exploit fully' becomes 'make the most of'."
    },
    {
      original: "She openly admits that she dislikes committee meetings.",
      keyword: "SECRET",
      gapped: "She makes ____ her dislike of committee meetings.",
      answers: ["no secret of"],
      model: "no secret of",
      explanation: "'Openly admits' becomes 'makes no secret of'."
    },
    {
      original: "The negotiators have made hardly any progress this week.",
      keyword: "HEADWAY",
      gapped: "The negotiators have made ____ this week.",
      answers: ["hardly any headway", "very little headway"],
      model: "hardly any headway",
      explanation: "'Progress' collocates with 'make'; 'headway' is a formal synonym."
    },
    {
      original: "He wants to compensate for the trouble he caused.",
      keyword: "AMENDS",
      gapped: "He wants to ____ the trouble he caused.",
      answers: ["make amends for"],
      model: "make amends for",
      explanation: "'Compensate for a wrong' becomes 'make amends for'."
    },
    {
      original: "The rigged vote made the whole election meaningless.",
      keyword: "MOCKERY",
      gapped: "The rigged vote made ____ the whole election.",
      answers: ["a mockery of"],
      model: "a mockery of",
      explanation: "'Make a mockery of' means to render something absurd or worthless."
    },
    {
      original: "The young chef became famous through her fusion cooking.",
      keyword: "NAME",
      gapped: "The young chef made ____ herself through her fusion cooking.",
      answers: ["a name for"],
      model: "a name for",
      explanation: "'Become famous' becomes 'make a name for oneself'."
    },
    {
      original: "He became extremely rich by selling vintage guitars.",
      keyword: "FORTUNE",
      gapped: "He made ____ vintage guitars.",
      answers: ["a fortune selling", "a fortune by selling", "a fortune from selling"],
      model: "a fortune selling",
      explanation: "'Become extremely rich' becomes 'make a fortune'."
    },
    {
      original: "She complained loudly and at length about the delayed flight.",
      keyword: "FUSS",
      gapped: "She made ____ the delayed flight.",
      answers: ["a great fuss about", "a big fuss about", "a fuss about"],
      model: "a great fuss about",
      explanation: "'Complain loudly and at length' becomes 'make a (great) fuss about'."
    },
    {
      original: "Thousands of jobs may be lost if the plant closes.",
      keyword: "STAKE",
      gapped: "Thousands of jobs ____ if the plant closes.",
      answers: ["are at stake", "will be at stake"],
      model: "are at stake",
      explanation: "'May be lost / at risk' becomes 'at stake'."
    },
    {
      original: "When you first look at it, the plan seems flawless.",
      keyword: "GLANCE",
      gapped: "____, the plan seems flawless.",
      answers: ["At first glance"],
      model: "At first glance",
      explanation: "'When you first look at it' becomes 'at first glance'."
    },
    {
      original: "The winning tickets are chosen without any system.",
      keyword: "RANDOM",
      gapped: "The winning tickets ____.",
      answers: ["are chosen at random", "are drawn at random", "are picked at random"],
      model: "are chosen at random",
      explanation: "'Without any system' becomes 'at random'."
    },
    {
      original: "After the fire, they had to rebuild the workshop completely, starting again.",
      keyword: "SCRATCH",
      gapped: "After the fire, the workshop had to ____.",
      answers: ["be rebuilt from scratch"],
      model: "be rebuilt from scratch",
      explanation: "'Starting again from nothing' becomes 'from scratch'; note the passive."
    },
    {
      original: "The project was doomed from the very beginning.",
      keyword: "OUTSET",
      gapped: "The project was doomed ____.",
      answers: ["from the outset", "from the very outset"],
      model: "from the very outset",
      explanation: "'From the (very) beginning' becomes 'from the (very) outset'."
    },
    {
      original: "She only just won the election.",
      keyword: "MARGIN",
      gapped: "She won the election by ____.",
      answers: ["a narrow margin", "a very narrow margin"],
      model: "a narrow margin",
      explanation: "'Only just won' becomes 'won by a narrow margin'."
    },
    {
      original: "The cyclist only just qualified for the final.",
      keyword: "WHISKER",
      gapped: "The cyclist qualified for the final ____.",
      answers: ["by a whisker"],
      model: "by a whisker",
      explanation: "'Only just' becomes the idiom 'by a whisker'."
    },
    {
      original: "Purely by chance, we were staying at the same hotel.",
      keyword: "COINCIDENCE",
      gapped: "____ that we were staying at the same hotel.",
      answers: ["It was pure coincidence", "It was sheer coincidence", "It was a coincidence"],
      model: "It was pure coincidence",
      explanation: "'Purely by chance' becomes 'it was pure/sheer coincidence that'."
    },
    {
      original: "Because she has seniority, she gets first choice of office.",
      keyword: "VIRTUE",
      gapped: "She gets first choice of office ____ her seniority.",
      answers: ["by virtue of"],
      model: "by virtue of",
      explanation: "'Because of (a status or quality)' becomes 'by virtue of'."
    },
    {
      original: "The ambulance arrived just in time to save him.",
      keyword: "NICK",
      gapped: "The ambulance arrived in ____ time to save him.",
      answers: ["the nick of"],
      model: "the nick of",
      explanation: "'Just in time' becomes 'in the nick of time'."
    },
    {
      original: "The launch proceeded entirely without problems.",
      keyword: "HITCH",
      gapped: "The launch went ____.",
      answers: ["off without a hitch"],
      model: "off without a hitch",
      explanation: "'Proceed without problems' becomes 'go off without a hitch'."
    },
    {
      original: "When one airline cut fares, the others quickly did the same.",
      keyword: "SUIT",
      gapped: "When one airline cut fares, the others ____.",
      answers: ["quickly followed suit", "soon followed suit"],
      model: "quickly followed suit",
      explanation: "'Do the same' becomes 'follow suit'."
    },
    {
      original: "Like her mother before her, she became a barrister.",
      keyword: "FOOTSTEPS",
      gapped: "She ____ by becoming a barrister.",
      answers: ["followed in her mother's footsteps"],
      model: "followed in her mother's footsteps",
      explanation: "'Do the same as a parent did' becomes 'follow in someone's footsteps'."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
