/* CPE Prep extra speaking prompts */
(function () {
  var BANK = [
  {
    question: "Does travel genuinely broaden the mind?",
    bullets: ["tourism versus real encounter", "what travellers bring home", "learning about elsewhere without leaving"]
  },
  {
    question: "Is competition a better motivator than cooperation?",
    bullets: ["sport, business and school", "what rivalry brings out in people", "achievements only teamwork makes possible"]
  },
  {
    question: "How far should we trust experts?",
    bullets: ["specialist knowledge and its limits", "when experts disagree", "the appeal of distrusting authority"]
  },
  {
    question: "Is failure a better teacher than success?",
    bullets: ["lessons that only mistakes teach", "the cost of failing", "how societies treat those who fail"]
  },
  {
    question: "Should we always tell the truth?",
    bullets: ["honesty in close relationships", "kind lies and diplomacy", "trust once truth is optional"]
  },
  {
    question: "What makes a piece of work 'art' rather than entertainment?",
    bullets: ["who decides the difference", "whether the distinction matters", "popular works that became classics"]
  },
  {
    question: "Is it possible to have too much choice?",
    bullets: ["choice as freedom", "the anxiety of endless options", "who benefits from offering more"]
  },
  {
    question: "Do possessions bring happiness?",
    bullets: ["comfort and security", "the treadmill of acquiring more", "experiences versus objects"]
  },
  {
    question: "How much should the past be allowed to shape the present?",
    bullets: ["lessons of history", "grievances handed down", "when to draw a line"]
  },
  {
    question: "Is fame worth having?",
    bullets: ["influence and opportunity", "loss of a private life", "why so many pursue it"]
  },
  {
    question: "Should children be shielded from bad news?",
    bullets: ["protecting innocence", "preparing them for reality", "what children understand anyway"]
  },
  {
    question: "Is humour essential to a healthy society?",
    bullets: ["laughter as a coping mechanism", "what jokes reveal about a culture", "limits on what can be laughed at"]
  },
  {
    question: "Does language shape the way we think?",
    bullets: ["words we lack for certain ideas", "bilingual perspectives", "how vocabulary frames debate"]
  },
  {
    question: "Is loyalty always a virtue?",
    bullets: ["loyalty to people versus principles", "when loyalty becomes complicity", "earning and losing it"]
  },
  {
    question: "Should the state decide what is taught in schools?",
    bullets: ["a common curriculum for all", "parents' and communities' wishes", "education as a political tool"]
  },
  {
    question: "Are we too dependent on convenience?",
    bullets: ["skills we no longer practise", "what saving time is for", "resilience when systems fail"]
  },
  {
    question: "Is silence undervalued in modern life?",
    bullets: ["constant noise and stimulation", "silence in conversation", "places where quiet survives"]
  },
  {
    question: "Do national borders still matter?",
    bullets: ["global problems and local politics", "identity and belonging", "the movement of people and ideas"]
  },
  {
    question: "Should scientific research have ethical limits?",
    bullets: ["knowledge for its own sake", "who sets the boundaries", "discoveries that cannot be undone"]
  },
  {
    question: "Is charity the best way to help others?",
    bullets: ["generosity and its motives", "addressing causes rather than symptoms", "the dignity of those who receive"]
  },
  {
    question: "How important is it to belong to a community?",
    bullets: ["support in difficult times", "the pressure to conform", "communities of choice versus of birth"]
  },
  {
    question: "Does advertising do more harm than good?",
    bullets: ["information versus manipulation", "funding for media and sport", "created wants and discontent"]
  },
  {
    question: "Is patience still a virtue in an instant world?",
    bullets: ["what waiting used to teach", "technology and expectation", "things that cannot be hurried"]
  },
  {
    question: "Should we strive to extend the human lifespan?",
    bullets: ["more years versus better years", "consequences for younger generations", "accepting mortality"]
  },
  {
    question: "Is forgetting sometimes as important as remembering?",
    bullets: ["moving on after conflict", "a digital world that forgets nothing", "memory and identity"]
  },
  {
    question: "Do leaders make history, or does history make leaders?",
    bullets: ["individuals who changed events", "circumstances that create greatness", "how we tell the story afterwards"]
  },
  {
    question: "Is work becoming too central to people's identity?",
    bullets: ["'What do you do?' as the first question", "self-worth and employment", "life beyond a career"]
  },
  {
    question: "Should animals have rights?",
    bullets: ["where to draw the moral line", "food, research and entertainment", "duties without reciprocity"]
  },
  {
    question: "Is originality overrated?",
    bullets: ["whether anything is truly new", "the value of imitation in learning", "why we prize the original"]
  },
  {
    question: "How should societies treat their oldest members?",
    bullets: ["wisdom and experience", "care and independence", "generations living apart"]
  },
  {
    question: "Is it better to be a specialist or a generalist?",
    bullets: ["depth versus breadth", "what employers and societies need", "adapting to change"]
  },
  {
    question: "Should sport and politics be kept separate?",
    bullets: ["athletes as public voices", "boycotts and international events", "whether separation was ever real"]
  },
  {
    question: "What do we lose when a language dies?",
    bullets: ["culture carried in words", "the convenience of global languages", "efforts to revive what is fading"]
  },
  {
    question: "Is solitude necessary for creativity?",
    bullets: ["ideas born in isolation", "collaboration and creative friction", "finding solitude in a connected age"]
  },
  {
    question: "Should wealth be inherited?",
    bullets: ["family duty and legacy", "equal opportunity at birth", "what inheritance does to the inheritor"]
  },
  {
    question: "Are apologies losing their meaning?",
    bullets: ["public versus private apology", "words without changed behaviour", "what genuine repair requires"]
  },
  {
    question: "Is curiosity always a good thing?",
    bullets: ["the engine of discovery", "prying into others' lives", "questions best left unasked"]
  },
  {
    question: "Do rules make us more or less moral?",
    bullets: ["obedience versus judgement", "rules as protection for the weak", "when breaking a rule is right"]
  },
  {
    question: "Is the pursuit of perfection worthwhile?",
    bullets: ["excellence and craftsmanship", "perfectionism's personal cost", "knowing when good enough is enough"]
  },
  {
    question: "Should we fear being ordinary?",
    bullets: ["a culture of standing out", "the value of unremarkable lives", "who defines what counts as ordinary"]
  }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  SPEAKING = SPEAKING.concat(BANK);
})();
