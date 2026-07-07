/* FCE Prep extra bank: part1 wave 1 */
(function () {
  var BANK = [
    /* ---------- Travel ---------- */
    {
      text: "By the time we ____ the airport, the check-in desk had already closed.",
      options: ["arrived", "reached", "got", "came"],
      answer: 1,
      explanation: "'Reach' takes a direct object: 'reach the airport'. 'Arrived' needs 'at', while 'got' and 'came' need 'to'."
    },
    {
      text: "The tour guide ____ out that the castle dated back to the twelfth century.",
      options: ["showed", "indicated", "remarked", "pointed"],
      answer: 3,
      explanation: "'Point out' is the phrasal verb meaning to draw attention to a fact. The other verbs do not combine with 'out' in this meaning."
    },
    {
      text: "We decided to ____ the night in a small guesthouse near the harbour.",
      options: ["spend", "pass", "stay", "take"],
      answer: 0,
      explanation: "'Spend the night' is the standard collocation. 'Stay' would need a place, not 'the night' as its object, and 'pass' and 'take' do not collocate here."
    },
    {
      text: "Our flight was delayed, so we didn't ____ it to the hotel until after midnight.",
      options: ["reach", "get", "make", "arrive"],
      answer: 2,
      explanation: "'Make it to' a place means to succeed in arriving. 'Reach', 'get' and 'arrive' cannot be followed by 'it to' in this pattern."
    },
    {
      text: "The travel agency offers a full refund if you ____ your booking at least a week in advance.",
      options: ["resign", "retire", "cancel", "dismiss"],
      answer: 2,
      explanation: "You 'cancel' a booking. 'Resign' and 'retire' are about leaving jobs, and 'dismiss' means to send someone away or fire them."
    },
    {
      text: "I always ____ into a hotel early so I can leave my luggage before exploring.",
      options: ["check", "sign", "book", "move"],
      answer: 0,
      explanation: "'Check into' a hotel means to register on arrival. 'Book' is used for reserving in advance, and 'sign' and 'move' do not form this expression."
    },
    {
      text: "The ferry service was ____ due to strong winds in the channel.",
      options: ["expired", "suspended", "dismissed", "resigned"],
      answer: 1,
      explanation: "'Suspended' means temporarily stopped, which fits a service. 'Expired' is for documents or deadlines, and 'dismissed' and 'resigned' relate to people and jobs."
    },
    {
      text: "The old town is well ____ a visit if you have a spare afternoon.",
      options: ["valued", "deserved", "merited", "worth"],
      answer: 3,
      explanation: "'Well worth a visit' is a fixed expression meaning it deserves your time. The other verbs cannot follow 'well' and take 'a visit' this way."
    },
    {
      text: "We ____ off early to avoid the morning traffic on the motorway.",
      options: ["put", "got", "took", "set"],
      answer: 3,
      explanation: "'Set off' means to begin a journey. 'Put off' means to postpone, and 'got off' and 'took off' do not describe starting a car journey."
    },
    {
      text: "The hotel room had a wonderful ____ of the mountains.",
      options: ["sight", "scenery", "view", "look"],
      answer: 2,
      explanation: "A 'view of' something is what you can see from a place. 'Scenery' is uncountable, and 'sight' and 'look' do not collocate with 'of the mountains' here."
    },
    {
      text: "Make sure your passport is valid; otherwise you may not be ____ to board the plane.",
      options: ["allowed", "let", "admitted", "approved"],
      answer: 0,
      explanation: "'Be allowed to' + infinitive expresses permission. 'Let' is not used in the passive with 'to', and 'admitted' and 'approved' do not fit this structure."
    },
    {
      text: "After a long day of sightseeing, we ____ across a charming little café by the river.",
      options: ["got", "came", "went", "fell"],
      answer: 1,
      explanation: "'Come across' means to find something by chance. 'Get across' means to communicate an idea, and the others do not have this meaning."
    },

    /* ---------- Work ---------- */
    {
      text: "She was ____ a promotion after only a year with the company.",
      options: ["offered", "suggested", "proposed", "provided"],
      answer: 0,
      explanation: "You 'offer someone a promotion', so the passive 'was offered' works. 'Suggest' and 'propose' cannot take two objects like this, and 'provide' needs 'with'."
    },
    {
      text: "He decided to ____ in his notice after being refused a pay rise.",
      options: ["take", "hand", "put", "send"],
      answer: 1,
      explanation: "'Hand in your notice' means to formally resign. 'Take in', 'put in' and 'send in' do not form this fixed expression with 'notice'."
    },
    {
      text: "The manager asked us to ____ up with some fresh ideas for the campaign.",
      options: ["get", "put", "think", "come"],
      answer: 3,
      explanation: "'Come up with' means to produce or invent an idea. 'Put up with' means to tolerate, and 'get' and 'think' do not combine with 'up with' in this meaning."
    },
    {
      text: "Applicants must be able to work under ____ and meet tight deadlines.",
      options: ["weight", "load", "pressure", "push"],
      answer: 2,
      explanation: "'Work under pressure' is the standard collocation for coping with stressful demands. 'Weight', 'load' and 'push' do not collocate with 'under' in this sense."
    },
    {
      text: "It took me a while to get ____ to working night shifts.",
      options: ["aware", "used", "familiar", "known"],
      answer: 1,
      explanation: "'Get used to' + -ing means to become accustomed to something. 'Aware' takes 'of', 'familiar' takes 'with', and 'known' does not fit."
    },
    {
      text: "The interview panel was impressed by how she ____ with the difficult questions.",
      options: ["treated", "handled", "managed", "dealt"],
      answer: 3,
      explanation: "'Deal with' means to handle a situation. 'Handled' and 'managed' take a direct object without 'with', and 'treated with' has a different meaning."
    },
    {
      text: "If sales don't improve, the firm may have to ____ off some of its staff.",
      options: ["lay", "set", "cut", "put"],
      answer: 0,
      explanation: "'Lay off' means to dismiss workers, usually for economic reasons. 'Set off', 'cut off' and 'put off' have completely different meanings."
    },
    {
      text: "The staff meeting has been ____ until next Thursday.",
      options: ["expired", "abolished", "postponed", "withdrawn"],
      answer: 2,
      explanation: "'Postponed until' means moved to a later time. 'Abolished' means permanently ended, and 'expired' and 'withdrawn' do not fit a rearranged meeting."
    },
    {
      text: "My colleague kindly agreed to ____ over my duties while I was on leave.",
      options: ["get", "hand", "take", "turn"],
      answer: 2,
      explanation: "'Take over' means to assume responsibility for something. 'Hand over' means to give responsibility to someone else, the opposite direction."
    },
    {
      text: "You'll need to ____ a good impression at the interview.",
      options: ["make", "do", "take", "have"],
      answer: 0,
      explanation: "'Make an impression' is the correct collocation. 'Do', 'take' and 'have' do not collocate with 'impression' in this sense."
    },
    {
      text: "The company is looking for someone with hands-on ____ in digital marketing.",
      options: ["practice", "experience", "habit", "knowledge"],
      answer: 1,
      explanation: "'Hands-on experience' is the standard collocation for practical work done in a field. 'Knowledge' takes 'of', and 'practice' and 'habit' do not fit."
    },
    {
      text: "After weeks of negotiation, the two sides finally ____ an agreement.",
      options: ["arrived", "achieved", "got", "reached"],
      answer: 3,
      explanation: "'Reach an agreement' is the fixed collocation. 'Arrive' would need 'at', and 'achieve' and 'get' do not collocate naturally with 'agreement' here."
    },

    /* ---------- Study ---------- */
    {
      text: "I'll have to stay up late tonight to ____ up on the reading I've missed.",
      options: ["take", "keep", "make", "catch"],
      answer: 3,
      explanation: "'Catch up on' means to do something you have fallen behind with. 'Keep up' means not to fall behind in the first place, and the others do not fit."
    },
    {
      text: "He failed the test because he hadn't ____ any revision.",
      options: ["made", "taken", "done", "given"],
      answer: 2,
      explanation: "'Do revision' is the correct collocation, like 'do homework'. 'Make', 'take' and 'give' do not collocate with 'revision'."
    },
    {
      text: "The lecture was so boring that I found it hard to ____ attention.",
      options: ["pay", "lend", "spend", "put"],
      answer: 0,
      explanation: "'Pay attention' is a fixed collocation. 'Lend', 'spend' and 'put' are not used with 'attention' in this way."
    },
    {
      text: "You should ____ up any new words you meet in a dictionary.",
      options: ["search", "look", "find", "check"],
      answer: 1,
      explanation: "'Look up' means to find information in a reference book. 'Search', 'find' and 'check' do not combine with 'up' to give this meaning."
    },
    {
      text: "She's ____ behind with her coursework because of illness.",
      options: ["fallen", "dropped", "gone", "stayed"],
      answer: 0,
      explanation: "'Fall behind with' means to fail to keep up with work. 'Dropped', 'gone' and 'stayed' do not form this expression."
    },
    {
      text: "The professor encouraged us to ____ notes during the lecture.",
      options: ["hold", "take", "catch", "keep"],
      answer: 1,
      explanation: "'Take notes' is the collocation for writing down key points as you listen. 'Hold', 'catch' and 'keep' do not collocate with 'notes' in this meaning."
    },
    {
      text: "It's difficult to ____ the difference between the two words in fast speech.",
      options: ["say", "speak", "talk", "tell"],
      answer: 3,
      explanation: "'Tell the difference' means to distinguish between things. 'Say', 'speak' and 'talk' cannot be used with 'the difference' in this way."
    },
    {
      text: "Hard work eventually ____ off, and she won a scholarship.",
      options: ["turned", "showed", "paid", "worked"],
      answer: 2,
      explanation: "'Pay off' means to bring a good result after effort. 'Turned off', 'showed off' and 'worked off' have different meanings."
    },
    {
      text: "The course ____ of ten weekly seminars and a final project.",
      options: ["includes", "consists", "contains", "involves"],
      answer: 1,
      explanation: "Only 'consist' is followed by 'of'. 'Includes', 'contains' and 'involves' take a direct object without a preposition."
    },
    {
      text: "I couldn't ____ sense of the diagram in the textbook.",
      options: ["do", "get", "take", "make"],
      answer: 3,
      explanation: "'Make sense of' means to manage to understand something. 'Do', 'get' and 'take' do not form this expression with 'sense of'."
    },
    {
      text: "Students are not ____ to use their phones during the exam.",
      options: ["permitted", "let", "approved", "accepted"],
      answer: 0,
      explanation: "'Be permitted to' + infinitive expresses formal permission. 'Let' cannot be used in this passive pattern, and 'approved' and 'accepted' do not fit."
    },
    {
      text: "Whether you pass ____ entirely on how much effort you make.",
      options: ["stands", "counts", "depends", "hangs"],
      answer: 2,
      explanation: "'Depend on' is the correct verb-preposition pairing for expressing what determines a result. The other verbs do not work with 'on' in this meaning."
    },

    /* ---------- Technology ---------- */
    {
      text: "My laptop keeps ____ down whenever I open too many programs.",
      options: ["falling", "tearing", "breaking", "wearing"],
      answer: 2,
      explanation: "'Break down' means to stop working, used for machines. 'Falling', 'tearing' and 'wearing' do not describe a machine failing in this way."
    },
    {
      text: "Don't forget to ____ up your files before updating the software.",
      options: ["back", "save", "store", "copy"],
      answer: 0,
      explanation: "'Back up' means to make a safety copy of computer data. 'Save', 'store' and 'copy' are not used with 'up' in this technical sense."
    },
    {
      text: "You can ____ the app for free from the official store.",
      options: ["descend", "download", "unload", "discharge"],
      answer: 1,
      explanation: "'Download' is the verb for transferring software onto your device. 'Descend', 'unload' and 'discharge' are unrelated to obtaining apps."
    },
    {
      text: "We were ____ off in the middle of the phone call.",
      options: ["hung", "broken", "switched", "cut"],
      answer: 3,
      explanation: "'Be cut off' means the phone connection was suddenly lost. 'Hung', 'broken' and 'switched' do not combine with 'off' to give this meaning."
    },
    {
      text: "Scientists have ____ a device that can translate speech instantly.",
      options: ["evolved", "grown", "progressed", "developed"],
      answer: 3,
      explanation: "'Develop a device' means to create it through research. 'Evolve' and 'grow' describe natural change, and 'progress' cannot take an object."
    },
    {
      text: "Many people worry that machines will soon ____ humans in routine jobs.",
      options: ["exchange", "swap", "replace", "convert"],
      answer: 2,
      explanation: "'Replace' means to take the place of someone or something. 'Exchange' and 'swap' involve trading two things, and 'convert' means to change form."
    },
    {
      text: "The website was temporarily ____ down for maintenance.",
      options: ["taken", "put", "got", "held"],
      answer: 0,
      explanation: "'Take down' a website means to remove it from the internet. 'Put down', 'got down' and 'held down' do not have this meaning."
    },
    {
      text: "I had to ____ my password because I'd forgotten it.",
      options: ["replay", "reset", "return", "revise"],
      answer: 1,
      explanation: "'Reset a password' means to create a new one when the old one is lost. 'Replay', 'return' and 'revise' are not used with passwords."
    },
    {
      text: "Sales of smart speakers have ____ sharply over the past year.",
      options: ["risen", "raised", "lifted", "arisen"],
      answer: 0,
      explanation: "'Rise' is intransitive and describes an increase by itself. 'Raise' and 'lift' need an object, and 'arise' means to occur, not to increase."
    },
    {
      text: "The new phone ____ a much better camera than the previous model.",
      options: ["consists", "features", "composes", "belongs"],
      answer: 1,
      explanation: "'Feature' means to include something as an important part. 'Consists' needs 'of', 'belongs' needs 'to', and 'composes' does not fit this meaning."
    },
    {
      text: "Please ____ off your devices before the presentation begins.",
      options: ["close", "put", "set", "switch"],
      answer: 3,
      explanation: "'Switch off' means to turn off a machine or device. 'Close', 'put off' and 'set off' do not mean stopping a device."
    },
    {
      text: "It didn't take her long to get the ____ of the new editing software.",
      options: ["grip", "hold", "hang", "catch"],
      answer: 2,
      explanation: "'Get the hang of' is an idiom meaning to learn how to do or use something. 'Grip', 'hold' and 'catch' do not appear in this expression."
    },

    /* ---------- Sport ---------- */
    {
      text: "Our team was knocked ____ of the tournament in the semi-final.",
      options: ["off", "out", "away", "down"],
      answer: 1,
      explanation: "'Knock out of' a competition means to eliminate. 'Knocked off', 'away' and 'down' do not describe elimination from a tournament."
    },
    {
      text: "She ____ the world record by almost two seconds.",
      options: ["won", "earned", "gained", "broke"],
      answer: 3,
      explanation: "'Break a record' is the collocation for setting a new best performance. You cannot 'win', 'earn' or 'gain' a record in this sense."
    },
    {
      text: "You should warm ____ properly before doing any strenuous exercise.",
      options: ["up", "on", "in", "over"],
      answer: 0,
      explanation: "'Warm up' means to prepare your body gently before exercise. The other particles do not combine with 'warm' in this meaning."
    },
    {
      text: "The final score was 2-2, so the match ended in a ____.",
      options: ["balance", "level", "draw", "equal"],
      answer: 2,
      explanation: "'End in a draw' means neither side won. 'Balance', 'level' and 'equal' are not used as nouns for a match with the same score."
    },
    {
      text: "He took ____ tennis when he was only five years old.",
      options: ["on", "over", "up", "off"],
      answer: 2,
      explanation: "'Take up' a sport or hobby means to start doing it. 'Take on' means to accept a challenge, and 'take over' and 'take off' have other meanings."
    },
    {
      text: "The referee ____ the whistle and the game began.",
      options: ["blew", "rang", "sounded", "beat"],
      answer: 0,
      explanation: "You 'blow' a whistle. 'Ring' is for bells, 'sound' is used for alarms or horns, and 'beat' is for drums."
    },
    {
      text: "She trains hard every day because she's determined to ____ her ambition of competing at the Olympics.",
      options: ["succeed", "achieve", "manage", "win"],
      answer: 1,
      explanation: "'Achieve an ambition' is the correct collocation. 'Succeed' needs 'in', 'manage' takes an infinitive, and 'win' does not collocate with 'ambition'."
    },
    {
      text: "Our club has ____ part in the regional league for over a decade.",
      options: ["made", "held", "got", "taken"],
      answer: 3,
      explanation: "'Take part in' means to participate. 'Made', 'held' and 'got' do not form this expression with 'part'."
    },
    {
      text: "The coach told us not to give ____, even when we were losing badly.",
      options: ["out", "off", "away", "up"],
      answer: 3,
      explanation: "'Give up' means to stop trying. 'Give out' means to distribute or run out, and 'give off' and 'give away' have different meanings."
    },
    {
      text: "He picked up a nasty ____ during Saturday's match and will be out for six weeks.",
      options: ["damage", "harm", "injury", "hurt"],
      answer: 2,
      explanation: "'Injury' is the countable noun for physical harm to a person, and 'pick up an injury' is a common sports collocation. 'Damage' and 'harm' are uncountable and used for things."
    },
    {
      text: "The runners set ____ at a fast pace despite the heat.",
      options: ["off", "up", "down", "about"],
      answer: 0,
      explanation: "'Set off' means to start moving or begin a race or journey. 'Set up' means to establish, and 'set down' and 'set about' do not fit here."
    },
    {
      text: "United ____ Rovers 3-0 in front of a record crowd.",
      options: ["won", "beat", "gained", "succeeded"],
      answer: 1,
      explanation: "'Beat' takes the opposing team as its object. 'Win' takes the match or trophy, not the opponent, and 'gained' and 'succeeded' do not fit."
    },

    /* ---------- Food ---------- */
    {
      text: "The recipe says to ____ the mixture gently until it thickens.",
      options: ["stir", "shake", "wave", "spin"],
      answer: 0,
      explanation: "'Stir' means to mix with a spoon in circular movements, the normal verb in recipes. 'Shake', 'wave' and 'spin' describe other kinds of movement."
    },
    {
      text: "I think this milk has gone ____ — it smells terrible.",
      options: ["out", "off", "down", "away"],
      answer: 1,
      explanation: "'Go off' means food or drink has become bad to eat. 'Go out', 'go down' and 'go away' do not describe food spoiling."
    },
    {
      text: "Could you ____ the table while I finish cooking?",
      options: ["put", "place", "fix", "lay"],
      answer: 3,
      explanation: "'Lay the table' means to put plates and cutlery on it before a meal. 'Put', 'place' and 'fix' are not used in this fixed expression."
    },
    {
      text: "We were so hungry that we ____ up every last scrap of food.",
      options: ["drank", "fed", "ate", "chewed"],
      answer: 2,
      explanation: "'Eat up' means to finish all your food. 'Drank' is for liquids, 'fed' means to give food to others, and 'chewed up' means to damage by chewing."
    },
    {
      text: "The restaurant was fully ____, so we had to find somewhere else.",
      options: ["ordered", "engaged", "booked", "filled"],
      answer: 2,
      explanation: "'Fully booked' means all tables have been reserved. 'Engaged' is used for phone lines or people, and 'ordered' and 'filled' do not collocate with 'fully' here."
    },
    {
      text: "Try not to eat too much junk food between ____.",
      options: ["meals", "dishes", "plates", "courses"],
      answer: 0,
      explanation: "'Between meals' refers to the time between breakfast, lunch and dinner. 'Dishes' and 'plates' are containers or items of food, and 'courses' are parts of one meal."
    },
    {
      text: "She's decided to ____ down on sugar for health reasons.",
      options: ["drop", "cut", "slice", "bring"],
      answer: 1,
      explanation: "'Cut down on' means to consume less of something. 'Drop', 'slice' and 'bring' do not combine with 'down on' in this meaning."
    },
    {
      text: "The soup was far too salty for my ____.",
      options: ["flavour", "tongue", "appetite", "taste"],
      answer: 3,
      explanation: "'For my taste' means according to my personal preference. 'Flavour' belongs to the food itself, and 'tongue' and 'appetite' do not fit this expression."
    },
    {
      text: "Would you like a second ____ of pasta?",
      options: ["handing", "sharing", "dividing", "helping"],
      answer: 3,
      explanation: "A 'helping' is an amount of food served to one person. 'Handing', 'sharing' and 'dividing' are not nouns for a serving of food."
    },
    {
      text: "He ____ out the wine while the guests took their seats.",
      options: ["spilled", "flowed", "poured", "dripped"],
      answer: 2,
      explanation: "'Pour out' means to serve a drink deliberately. 'Spill' means to drop liquid accidentally, and 'flow' and 'drip' describe how liquid moves by itself."
    },
    {
      text: "Fresh fruit and vegetables are an essential ____ of a balanced diet.",
      options: ["part", "piece", "slice", "share"],
      answer: 0,
      explanation: "'An essential part of' is the natural collocation. 'Piece', 'slice' and 'share' refer to physical portions, not to a component of a diet."
    },
    {
      text: "I'm afraid the cake didn't ____ out as well as I'd hoped.",
      options: ["go", "turn", "end", "result"],
      answer: 1,
      explanation: "'Turn out' means to develop or finish in a particular way. 'Go out', 'end out' and 'result out' do not exist with this meaning."
    },

    /* ---------- Environment ---------- */
    {
      text: "Governments must take urgent ____ to reduce carbon emissions.",
      options: ["action", "acts", "deeds", "moves"],
      answer: 0,
      explanation: "'Take action' is the fixed collocation meaning to do something about a problem. 'Acts', 'deeds' and 'moves' do not collocate with 'take' in this sense."
    },
    {
      text: "Several rare species are in ____ of extinction.",
      options: ["fear", "danger", "threat", "doubt"],
      answer: 1,
      explanation: "'In danger of' is the correct pattern. 'Threat' is used with 'under threat of', and 'fear' and 'doubt' do not fit this structure."
    },
    {
      text: "The council is encouraging residents to ____ away less food.",
      options: ["put", "take", "waste", "throw"],
      answer: 3,
      explanation: "'Throw away' means to get rid of something as rubbish. 'Put away' means to tidy something into its place, and 'take away' and 'waste away' do not fit."
    },
    {
      text: "Air pollution in the city has reached an all-time ____.",
      options: ["tall", "top", "high", "upper"],
      answer: 2,
      explanation: "'An all-time high' is a fixed expression meaning the highest level ever recorded. 'Tall', 'top' and 'upper' are not used in this phrase."
    },
    {
      text: "Cutting down forests can have a devastating ____ on wildlife.",
      options: ["affect", "result", "effect", "consequence"],
      answer: 2,
      explanation: "'Have an effect on' is the correct collocation. 'Affect' is a verb, 'result' takes 'of' or 'in', and 'consequence' is usually followed by 'for'."
    },
    {
      text: "More people are choosing to travel by bike in order to ____ their carbon footprint.",
      options: ["reduce", "shorten", "decline", "descend"],
      answer: 0,
      explanation: "'Reduce' means to make smaller in amount and collocates with 'carbon footprint'. 'Shorten' is for length or time, and 'decline' and 'descend' are intransitive."
    },
    {
      text: "Plastic waste often ends ____ in the ocean, harming marine life.",
      options: ["out", "up", "over", "off"],
      answer: 1,
      explanation: "'End up' means to finally arrive in a place or situation. 'End out', 'end over' and 'end off' do not exist."
    },
    {
      text: "The charity is ____ money to protect endangered tigers.",
      options: ["rising", "lifting", "growing", "raising"],
      answer: 3,
      explanation: "'Raise money' means to collect funds for a cause. 'Rise' is intransitive, and 'lift' and 'grow' do not collocate with 'money' in this sense."
    },
    {
      text: "If we don't act now, the damage to the planet may be beyond ____.",
      options: ["mend", "fix", "cure", "repair"],
      answer: 3,
      explanation: "'Beyond repair' is a fixed phrase meaning too damaged to be put right. 'Mend', 'fix' and 'cure' are not used after 'beyond' in this way."
    },
    {
      text: "Wind farms provide a clean ____ of energy.",
      options: ["origin", "root", "source", "base"],
      answer: 2,
      explanation: "'A source of energy' is the standard collocation for where energy comes from. 'Origin', 'root' and 'base' do not collocate here."
    },
    {
      text: "Temperatures are expected to ____ steadily over the coming decades.",
      options: ["rise", "raise", "arise", "lift"],
      answer: 0,
      explanation: "'Rise' is intransitive and means to increase. 'Raise' and 'lift' require an object, and 'arise' means to occur or appear."
    },
    {
      text: "The new law aims to ____ people from dumping rubbish in rivers.",
      options: ["avoid", "prevent", "refuse", "deny"],
      answer: 1,
      explanation: "'Prevent someone from doing something' is the correct pattern. 'Avoid', 'refuse' and 'deny' cannot take an object plus 'from' + -ing."
    },

    /* ---------- Relationships ---------- */
    {
      text: "The two sisters don't really get ____ with each other, sadly.",
      options: ["on", "up", "by", "through"],
      answer: 0,
      explanation: "'Get on with someone' means to have a good relationship. 'Get by' means to manage financially, and 'get up' and 'get through' have other meanings."
    },
    {
      text: "He takes ____ his father — they have exactly the same sense of humour.",
      options: ["over", "after", "up", "on"],
      answer: 1,
      explanation: "'Take after' means to resemble an older relative. 'Take over', 'take up' and 'take on' do not describe family resemblance."
    },
    {
      text: "They fell ____ over money and didn't speak for years.",
      options: ["off", "down", "in", "out"],
      answer: 3,
      explanation: "'Fall out' means to quarrel and stop being friendly. 'Fall off', 'fall down' and 'fall in' do not describe an argument."
    },
    {
      text: "I've known Marta ____ we were at primary school together.",
      options: ["for", "during", "since", "from"],
      answer: 2,
      explanation: "'Since' introduces the starting point of a period with the present perfect. 'For' takes a length of time, and 'during' and 'from' do not fit this clause."
    },
    {
      text: "You can always ____ on Daniel to help in a crisis.",
      options: ["trust", "believe", "count", "hold"],
      answer: 2,
      explanation: "'Count on' means to depend on someone. 'Trust' and 'believe' take a direct object or 'in', and 'hold on' means to wait or grip."
    },
    {
      text: "After the argument, it took weeks for them to make ____.",
      options: ["up", "out", "off", "over"],
      answer: 0,
      explanation: "'Make up' means to become friends again after a quarrel. 'Make out', 'make off' and 'make over' have entirely different meanings."
    },
    {
      text: "We've ____ in touch ever since we met on holiday ten years ago.",
      options: ["held", "kept", "stood", "carried"],
      answer: 1,
      explanation: "'Keep in touch' means to continue communicating with someone. 'Held', 'stood' and 'carried' do not form this expression."
    },
    {
      text: "He finds it hard to ____ friends because he's so shy.",
      options: ["do", "take", "earn", "make"],
      answer: 3,
      explanation: "'Make friends' is the fixed collocation for forming friendships. 'Do', 'take' and 'earn' do not collocate with 'friends'."
    },
    {
      text: "My grandparents brought ____ six children on a very small income.",
      options: ["on", "over", "out", "up"],
      answer: 3,
      explanation: "'Bring up' means to raise children. 'Bring on', 'bring over' and 'bring out' do not mean caring for children until they are adults."
    },
    {
      text: "I bumped ____ an old classmate at the supermarket yesterday.",
      options: ["onto", "at", "into", "with"],
      answer: 2,
      explanation: "'Bump into' means to meet someone by chance. The other prepositions do not combine with 'bump' in this meaning."
    },
    {
      text: "They've been going ____ with each other for about six months.",
      options: ["out", "on", "off", "away"],
      answer: 0,
      explanation: "'Go out with someone' means to have a romantic relationship. 'Go on', 'go off' and 'go away' do not have this meaning."
    },
    {
      text: "It was kind of you to stick ____ for me when everyone else was criticising.",
      options: ["out", "up", "on", "in"],
      answer: 1,
      explanation: "'Stick up for' means to defend someone who is being criticised. 'Stick out', 'stick on' and 'stick in' do not carry this meaning."
    },

    /* ---------- Media ---------- */
    {
      text: "The story was ____ live on all the main news channels.",
      options: ["broadcast", "announced", "published", "printed"],
      answer: 0,
      explanation: "'Broadcast' is used for transmitting on television or radio, and collocates with 'live'. 'Published' and 'printed' are for written media."
    },
    {
      text: "The film ____ mixed reviews from critics when it came out.",
      options: ["accepted", "received", "welcomed", "admitted"],
      answer: 1,
      explanation: "'Receive reviews' is the natural collocation for how critics respond to a film. 'Accepted', 'welcomed' and 'admitted' do not fit here."
    },
    {
      text: "Millions of viewers ____ in to watch the final episode.",
      options: ["turned", "watched", "looked", "tuned"],
      answer: 3,
      explanation: "'Tune in' means to watch or listen to a broadcast. 'Turn in' means to go to bed, and 'watched' and 'looked' do not combine with 'in' this way."
    },
    {
      text: "According ____ a recent survey, teenagers spend five hours a day online.",
      options: ["with", "by", "to", "on"],
      answer: 2,
      explanation: "'According to' is the fixed phrase for reporting a source of information. The other prepositions never follow 'according'."
    },
    {
      text: "The documentary ____ with the lives of fishermen in the North Sea.",
      options: ["treats", "handles", "deals", "concerns"],
      answer: 2,
      explanation: "'Deal with' means to be about a particular subject. 'Handles' and 'concerns' take a direct object without 'with', and 'treats with' does not fit."
    },
    {
      text: "Celebrities often complain that the press ____ their privacy.",
      options: ["invades", "intrudes", "interferes", "enters"],
      answer: 0,
      explanation: "'Invade someone's privacy' is the fixed collocation. 'Intrude' and 'interfere' need prepositions ('on'/'with'), and 'enters' does not collocate with 'privacy'."
    },
    {
      text: "The series was so popular that it ____ for ten seasons.",
      options: ["went", "ran", "held", "kept"],
      answer: 1,
      explanation: "A show 'runs' for a period of time, meaning it continues to be broadcast. 'Went' would need 'on', and 'held' and 'kept' do not fit."
    },
    {
      text: "I only found ____ about the concert from a post on social media.",
      options: ["up", "on", "over", "out"],
      answer: 3,
      explanation: "'Find out about' means to discover information. 'Find up', 'find on' and 'find over' do not exist as phrasal verbs."
    },
    {
      text: "The advert was banned for making false ____ about the product.",
      options: ["demands", "requests", "appeals", "claims"],
      answer: 3,
      explanation: "'Make claims' means to state that something is true, often without proof. 'Demands', 'requests' and 'appeals' involve asking for something."
    },
    {
      text: "She writes a weekly ____ for a national newspaper.",
      options: ["line", "row", "column", "list"],
      answer: 2,
      explanation: "A 'column' is a regular article by the same writer in a newspaper. 'Line', 'row' and 'list' are not used for this kind of article."
    },
    {
      text: "The interviewer kept ____ the politician when he tried to answer.",
      options: ["interrupting", "interfering", "intervening", "obstructing"],
      answer: 0,
      explanation: "'Interrupt' means to stop someone while they are speaking and takes a direct object. 'Interfering' and 'intervening' need prepositions, and 'obstructing' does not fit speech."
    },
    {
      text: "Fake news spreads quickly because so few people ____ the facts.",
      options: ["control", "check", "prove", "test"],
      answer: 1,
      explanation: "'Check the facts' means to make sure information is correct. 'Control' is a false friend here, and 'prove' and 'test' do not fit the meaning of verifying."
    },

    /* ---------- Health ---------- */
    {
      text: "The doctor advised him to ____ up smoking immediately.",
      options: ["give", "put", "take", "get"],
      answer: 0,
      explanation: "'Give up' means to stop a habit. 'Take up' means to start a new activity — the opposite — and 'put up' and 'get up' do not fit."
    },
    {
      text: "I've come ____ with a cold, so I'm staying in bed today.",
      options: ["up", "down", "over", "out"],
      answer: 1,
      explanation: "'Come down with' means to become ill with something minor. 'Come up with' means to think of an idea, and the others do not describe falling ill."
    },
    {
      text: "It took him several weeks to ____ from the operation.",
      options: ["cure", "improve", "relieve", "recover"],
      answer: 3,
      explanation: "'Recover from' means to get better after illness or surgery. 'Cure' and 'relieve' take an object, and 'improve' is not followed by 'from'."
    },
    {
      text: "Regular exercise helps to ____ stress.",
      options: ["repair", "mend", "relieve", "solve"],
      answer: 2,
      explanation: "'Relieve stress' means to make it less severe. 'Repair' and 'mend' are for broken objects, and 'solve' is for problems and puzzles."
    },
    {
      text: "She's allergic ____ nuts, so check the ingredients carefully.",
      options: ["with", "at", "to", "of"],
      answer: 2,
      explanation: "'Allergic to' is the correct dependent preposition. 'With', 'at' and 'of' never follow 'allergic'."
    },
    {
      text: "You should make an ____ with the dentist before the pain gets worse.",
      options: ["appointment", "date", "meeting", "reservation"],
      answer: 0,
      explanation: "You make an 'appointment' to see a doctor or dentist. A 'date' is romantic, a 'meeting' is for work, and a 'reservation' is for tables or rooms."
    },
    {
      text: "He was ____ painkillers for his back problem.",
      options: ["described", "prescribed", "subscribed", "inscribed"],
      answer: 1,
      explanation: "'Prescribe' is what a doctor does when ordering medicine for a patient. 'Described', 'subscribed' and 'inscribed' look similar but have unrelated meanings."
    },
    {
      text: "A balanced diet and enough sleep will help you stay in good ____.",
      options: ["fitness", "wellness", "strength", "health"],
      answer: 3,
      explanation: "'In good health' is the fixed expression. 'Fitness', 'wellness' and 'strength' are not used after 'in good' in this way."
    },
    {
      text: "Symptoms include a sore throat and a ____ nose.",
      options: ["rainy", "flowing", "leaky", "runny"],
      answer: 3,
      explanation: "'A runny nose' is the fixed collocation for a nose producing liquid when you have a cold. 'Rainy', 'flowing' and 'leaky' do not collocate with 'nose'."
    },
    {
      text: "He fainted, but came ____ after a few seconds.",
      options: ["up", "over", "round", "off"],
      answer: 2,
      explanation: "'Come round' means to regain consciousness. 'Come up', 'come over' and 'come off' do not describe waking after fainting."
    },
    {
      text: "Too much screen time can ____ your eyesight.",
      options: ["damage", "injure", "wound", "break"],
      answer: 0,
      explanation: "'Damage' is used for harm to things or faculties like eyesight. 'Injure' and 'wound' are used for people or body parts hurt physically, and 'break' does not fit."
    },
    {
      text: "The waiting room was full of patients ____ from flu.",
      options: ["hurting", "suffering", "aching", "paining"],
      answer: 1,
      explanation: "'Suffer from' an illness is the correct verb-preposition pairing. 'Hurting', 'aching' and 'paining' are not followed by 'from' + an illness."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  QUESTIONS.part1 = QUESTIONS.part1.concat(BANK);
})();
