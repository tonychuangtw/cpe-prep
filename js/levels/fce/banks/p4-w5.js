/* FCE Prep extra bank: part4 wave 5 */
(function () {
  var BANK = [
    {
      original: "Could I use your calculator for a minute?",
      keyword: "BORROWED",
      gapped: "Would you mind ____ calculator for a minute?",
      answers: ["if I borrowed your"],
      model: "if I borrowed your",
      explanation: "After 'Would you mind if', a past tense verb is used to make a polite request, so 'borrowed' replaces 'use'."
    },
    {
      original: "Workers took the old statue down from its base last month.",
      keyword: "REMOVED",
      gapped: "The old statue ____ its base last month.",
      answers: ["was removed from"],
      model: "was removed from",
      explanation: "The active sentence becomes passive: the statue is the subject, so we need 'was removed from'."
    },
    {
      original: "Rita can translate legal documents without any help.",
      keyword: "CAPABLE",
      gapped: "Rita is ____ legal documents without any help.",
      answers: ["capable of translating"],
      model: "capable of translating",
      explanation: "'Capable' is followed by the preposition 'of' plus an -ing form, replacing the modal 'can'."
    },
    {
      original: "Jamie finds it impossible to distinguish the twin brothers.",
      keyword: "APART",
      gapped: "Jamie finds it impossible to ____.",
      answers: ["tell the twin brothers apart", "tell the twins apart"],
      model: "tell the twin brothers apart",
      explanation: "'Tell somebody apart' means to distinguish between two very similar people or things."
    },
    {
      original: "Do you still communicate with your university friends?",
      keyword: "TOUCH",
      gapped: "Do you still ____ your university friends?",
      answers: ["keep in touch with", "stay in touch with"],
      model: "keep in touch with",
      explanation: "'Keep/stay in touch with someone' means to continue communicating with them."
    },
    {
      original: "About two hundred runners competed in the charity race.",
      keyword: "PART",
      gapped: "About two hundred runners ____ the charity race.",
      answers: ["took part in"],
      model: "took part in",
      explanation: "'Take part in' means to participate or compete in an event; the past form 'took' matches the original tense."
    },
    {
      original: "Nobody listened to the safety announcement at the airport.",
      keyword: "ATTENTION",
      gapped: "Nobody ____ the safety announcement at the airport.",
      answers: ["paid attention to", "paid any attention to"],
      model: "paid attention to",
      explanation: "'Pay attention to something' means to listen to or watch it carefully."
    },
    {
      original: "Marek organises all the deliveries at the warehouse.",
      keyword: "RESPONSIBLE",
      gapped: "Marek is ____ all the deliveries at the warehouse.",
      answers: ["responsible for organising"],
      model: "responsible for organising",
      explanation: "'Responsible' takes the preposition 'for' followed by an -ing form."
    },
    {
      original: "Yusuf stopped finding stamp collecting interesting years ago.",
      keyword: "INTEREST",
      gapped: "Yusuf ____ stamp collecting years ago.",
      answers: ["lost interest in", "lost his interest in", "lost all interest in"],
      model: "lost interest in",
      explanation: "'Lose interest in something' means to stop finding it interesting."
    },
    {
      original: "The weather will determine whether we hold the ceremony outdoors.",
      keyword: "DEPENDS",
      gapped: "Whether we hold the ceremony outdoors ____ weather.",
      answers: ["depends on the", "depends upon the"],
      model: "depends on the",
      explanation: "'Depend on something' expresses that one thing determines another; note the preposition 'on'."
    },
    {
      original: "Nadia's parents dislike her staying out so late.",
      keyword: "APPROVE",
      gapped: "Nadia's parents do not ____ staying out so late.",
      answers: ["approve of her"],
      model: "approve of her",
      explanation: "'Not approve of someone doing something' means to dislike or disagree with their behaviour."
    },
    {
      original: "Ravi didn't drive to the conference; he took the coach.",
      keyword: "INSTEAD",
      gapped: "Ravi took the coach ____ to the conference.",
      answers: ["instead of driving"],
      model: "instead of driving",
      explanation: "'Instead of' is followed by an -ing form to show the action that was replaced."
    },
    {
      original: "Buying a season ticket is sensible if you commute every day.",
      keyword: "SENSE",
      gapped: "It ____ a season ticket if you commute every day.",
      answers: ["makes sense to buy"],
      model: "makes sense to buy",
      explanation: "'It makes sense to do something' means it is a sensible or reasonable thing to do."
    },
    {
      original: "Dozens of trains were cancelled because of the signal failure.",
      keyword: "RESULT",
      gapped: "Dozens of trains were cancelled as a ____ signal failure.",
      answers: ["result of the"],
      model: "result of the",
      explanation: "'As a result of' is a formal way of saying 'because of'."
    },
    {
      original: "Farid and his landlord have an excellent relationship.",
      keyword: "TERMS",
      gapped: "Farid is on very good ____ landlord.",
      answers: ["terms with his"],
      model: "terms with his",
      explanation: "'Be on good terms with someone' means to have a friendly relationship with them."
    },
    {
      original: "Greta really likes old black-and-white films.",
      keyword: "FOND",
      gapped: "Greta is very ____ black-and-white films.",
      answers: ["fond of old"],
      model: "fond of old",
      explanation: "'Be fond of something' means to like it very much; 'fond' is followed by 'of'."
    },
    {
      original: "If you skip breakfast, you might feel dizzy later.",
      keyword: "RISK",
      gapped: "If you skip breakfast, you ____ feeling dizzy later.",
      answers: ["run the risk of"],
      model: "run the risk of",
      explanation: "'Run the risk of doing something' means there is a danger that it might happen."
    },
    {
      original: "Elif manages the ticket office on Sundays.",
      keyword: "CHARGE",
      gapped: "Elif is ____ the ticket office on Sundays.",
      answers: ["in charge of"],
      model: "in charge of",
      explanation: "'Be in charge of something' means to be responsible for managing it."
    },
    {
      original: "A kind woman helped me; her son goes to my school.",
      keyword: "WHOSE",
      gapped: "The kind woman ____ to my school helped me.",
      answers: ["whose son goes"],
      model: "whose son goes",
      explanation: "The relative pronoun 'whose' shows possession and joins the two sentences into one."
    },
    {
      original: "Dmitri quickly got used to the freezing winters.",
      keyword: "ACCUSTOMED",
      gapped: "Dmitri quickly became ____ the freezing winters.",
      answers: ["accustomed to"],
      model: "accustomed to",
      explanation: "'Become accustomed to something' is a more formal equivalent of 'get used to'."
    },
    {
      original: "The new parking rules start to apply in April.",
      keyword: "EFFECT",
      gapped: "The new parking rules ____ in April.",
      answers: ["come into effect", "take effect", "will come into effect", "will take effect"],
      model: "come into effect",
      explanation: "'Come into effect' or 'take effect' means that a rule or law officially starts to apply."
    },
    {
      original: "Kasia couldn't decide which course to choose.",
      keyword: "MIND",
      gapped: "Kasia couldn't ____ which course to choose.",
      answers: ["make up her mind", "make up her mind about"],
      model: "make up her mind",
      explanation: "'Make up your mind' means to reach a decision about something."
    },
    {
      original: "Timo disappointed his teammates by missing the penalty.",
      keyword: "DOWN",
      gapped: "Timo ____ by missing the penalty.",
      answers: ["let his teammates down"],
      model: "let his teammates down",
      explanation: "The phrasal verb 'let somebody down' means to disappoint them."
    },
    {
      original: "Zosia made a formal request for the scholarship in March.",
      keyword: "APPLIED",
      gapped: "Zosia ____ the scholarship in March.",
      answers: ["applied for"],
      model: "applied for",
      explanation: "'Apply for something' means to make a formal request for it, such as a job or scholarship."
    },
    {
      original: "The tournament was postponed because the rain was so heavy.",
      keyword: "OWING",
      gapped: "The tournament was postponed ____ heavy rain.",
      answers: ["owing to the", "owing to"],
      model: "owing to the",
      explanation: "'Owing to' is a formal way of saying 'because of' and is followed by a noun phrase."
    },
    {
      original: "In my opinion, the ending spoiled the whole film.",
      keyword: "FAR",
      gapped: "As ____ concerned, the ending spoiled the whole film.",
      answers: ["far as I am", "far as I'm"],
      model: "far as I am",
      explanation: "'As far as I am concerned' is a fixed expression meaning 'in my opinion'."
    },
    {
      original: "My colleagues started cycling as a hobby last summer.",
      keyword: "TOOK",
      gapped: "My colleagues ____ a hobby last summer.",
      answers: ["took up cycling as"],
      model: "took up cycling as",
      explanation: "The phrasal verb 'take up' means to start doing a new hobby or activity."
    },
    {
      original: "We found it hard to follow the guide's instructions.",
      keyword: "TROUBLE",
      gapped: "We ____ the guide's instructions.",
      answers: ["had trouble following", "had trouble in following"],
      model: "had trouble following",
      explanation: "'Have trouble doing something' means to find it difficult to do."
    },
    {
      original: "Did you succeed in booking the campsite for August?",
      keyword: "MANAGE",
      gapped: "Did you ____ the campsite for August?",
      answers: ["manage to book"],
      model: "manage to book",
      explanation: "'Manage to do something' means to succeed in doing it; note the to-infinitive after 'manage'."
    },
    {
      original: "Ines had never flown a drone before yesterday.",
      keyword: "FIRST",
      gapped: "Yesterday was the ____ ever flown a drone.",
      answers: ["first time Ines had"],
      model: "first time Ines had",
      explanation: "'The first time' plus past perfect expresses that the action had never happened before that moment."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part4 = QUESTIONS.part4.concat(BANK);
})();
