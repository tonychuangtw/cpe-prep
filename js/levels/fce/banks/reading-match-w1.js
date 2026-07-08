(function () {
var BANK = [
  {
    id: "f-rmatch1-01",
    title: "Four People Talk About Getting to Work",
    sections: [
      {
        label: "A",
        text: "Marta: I switched to cycling two years ago, mainly to save money, and I honestly can't imagine going back. At the beginning I was terrified of the traffic on the main road and would plan long detours just to avoid it, but my confidence grew within a few weeks. What nobody told me was how much stronger I would feel; I'm fitter now than I've ever been, which was never part of the plan. The one thing that still drives me mad is all the waterproof clothing. Pulling on jackets, overshoes and gloves every rainy morning, then peeling it all off at the office, takes forever and never stops being annoying."
      },
      {
        label: "B",
        text: "Daniel: My journey to the city takes fifty minutes by train, and I've learned to treat those minutes as part of my working day. I answer emails, prepare notes for meetings and often arrive with half my morning tasks already done. A yearly season ticket costs a frightening amount, though luckily my company pays a third of it as part of a green travel scheme, which makes it just about acceptable. The worst part is travelling during the rush; when the carriages are packed and you're pressed against strangers, even a short delay feels endless. Whenever possible I take an earlier, emptier service."
      },
      {
        label: "C",
        text: "Priya: Living in a small village fifteen miles from the nearest town, I really have no choice but to drive. There's one bus a day, and it leaves long after I need to be at my desk. To make the drive bearable I've become addicted to podcasts about history and true crime; some mornings I actually sit in the car park to hear the end of an episode. What bothers me is the pollution I'm responsible for. I feel genuinely bad every time I fill the tank, so I've started asking around to see whether any colleagues from nearby villages would share the journey with me."
      },
      {
        label: "D",
        text: "Leo: A year ago I did something drastic: I gave up my cheap flat in the suburbs and rented a smaller, pricier one twenty minutes' walk from the office, purely to escape the daily bus ride. It was absolutely the right decision. The walk clears my head before work and helps me switch off afterwards, and my mood has improved noticeably. Strangely, the only thing I regret losing is the gossip. A group of us from the same department used to catch the same bus, and those silly conversations about weekend plans and office news were more valuable than I realised at the time."
      }
    ],
    questions: [
      { q: "Which person deliberately moved house in order to improve their journey to work?", answer: 3, explanation: "In D, Leo gave up his cheap flat and rented one twenty minutes' walk from the office 'purely to escape the daily bus ride'." },
      { q: "Which person experienced a physical benefit they had not been expecting?", answer: 0, explanation: "In A, Marta says nobody told her how much stronger she would feel: 'I'm fitter now than I've ever been, which was never part of the plan'." },
      { q: "Which person has part of their travel costs paid by their employer?", answer: 1, explanation: "In B, Daniel's company pays a third of his season ticket as part of a green travel scheme." },
      { q: "Which person feels guilty about the effect their commute has on the environment?", answer: 2, explanation: "In C, Priya says 'What bothers me is the pollution I'm responsible for. I feel genuinely bad every time I fill the tank'." },
      { q: "Which person tries to avoid travelling when their form of transport is at its busiest?", answer: 1, explanation: "In B, Daniel hates the packed rush-hour carriages and says 'Whenever possible I take an earlier, emptier service'." },
      { q: "Which person felt nervous when they first started commuting this way?", answer: 0, explanation: "In A, Marta was 'terrified of the traffic on the main road' at first and planned long detours to avoid it." },
      { q: "Which person says they have no realistic alternative to their current way of travelling?", answer: 2, explanation: "In C, Priya lives in a remote village with one badly timed bus a day: 'I really have no choice but to drive'." },
      { q: "Which person misses the social side of the way they used to travel?", answer: 3, explanation: "In D, Leo's only regret is losing the bus chats with colleagues: 'those silly conversations ... were more valuable than I realised'." },
      { q: "Which person uses the journey to get some of their job done before arriving?", answer: 1, explanation: "In B, Daniel answers emails and prepares meeting notes on the train, arriving 'with half my morning tasks already done'." },
      { q: "Which person finds the equipment their commute requires irritating?", answer: 0, explanation: "In A, Marta complains that pulling on and peeling off waterproof clothing 'takes forever and never stops being annoying'." }
    ]
  },
  {
    id: "f-rmatch1-02",
    title: "Five Reviews of Budget City Breaks",
    sections: [
      {
        label: "A",
        text: "Porto, Portugal: For a long weekend, Porto is hard to beat on price. We ate generous meals with local wine for less than a sandwich costs at home, and our riverside guesthouse was the cheapest decent room I have ever booked anywhere in Europe. Be warned, though: the city is built on steep hills, and after two days of climbing endless staircases and cobbled slopes my legs were genuinely aching. The reward for all that effort is a series of stunning free viewpoints over the river. Take comfortable shoes, skip the taxis, and your wallet will barely notice the trip."
      },
      {
        label: "B",
        text: "Kraków, Poland: Kraków combines beauty with astonishingly low prices. The free walking tours run by local students were excellent, and restaurant meals in the old town cost half what I expected. The highlight, if that's the right word, was the museum dedicated to the city's wartime history; I left in tears, and I'd urge every visitor to go. My only mistake was packing for the mild autumn we'd had at home. Nobody had warned me how sharply the temperature drops there in October, and I ended up buying a woolly hat and gloves on the second morning."
      },
      {
        label: "C",
        text: "Valencia, Spain: What makes Valencia special is that you get two holidays in one: in the morning we wandered around the futuristic arts and science complex, and by afternoon we were lying on a wide sandy beach a short ride away. We hired bicycles for next to nothing and followed the old riverbed park across the city. The smartest thing we did was buy the official visitor card, which covered all our buses and metro trips and got us into several museums; we worked out afterwards that it had saved us more than forty euros between us."
      },
      {
        label: "D",
        text: "Riga, Latvia: Our flights to Riga cost less than a night out at home, and the city turned out to be a quiet treasure. The art nouveau district has street after street of extraordinary decorated buildings, and we often had them almost to ourselves; compared with the crowds elsewhere in Europe, wandering without being surrounded by tour groups felt like a luxury. One caution: we went in February, and several museums and the famous open-air ethnographic park were shut for the season, so check opening times before you plan your days. Even so, cafés were cosy and prices tiny."
      },
      {
        label: "E",
        text: "Naples, Italy: Naples is loud, messy and completely thrilling. The famous pizza costs a few euros and is worth the flight alone, and every alley seems to hide a chapel or a market. Do keep your phone and wallet somewhere secure, though; a member of our group nearly lost her bag to a passing scooter, and locals themselves told us to stay alert in crowded streets. The best decision we made was catching the cheap local train out to the ruins of Pompeii for a day; walking those ancient streets was unforgettable and cost less than a cinema ticket."
      }
    ],
    questions: [
      { q: "Which reviewer says a special pass for visitors turned out to be good value?", answer: 2, explanation: "In C, the official visitor card covered all buses, metro trips and several museums and 'saved us more than forty euros'." },
      { q: "Which reviewer warns readers to protect their belongings?", answer: 4, explanation: "In E, the reviewer says to 'keep your phone and wallet somewhere secure' after a group member nearly lost her bag to a passing scooter." },
      { q: "Which reviewer was caught out by the weather?", answer: 1, explanation: "In B, nobody had warned the writer how sharply temperatures drop in October, so they had to buy a woolly hat and gloves." },
      { q: "Which reviewer recommends a trip to a site outside the city itself?", answer: 4, explanation: "In E, the best decision was catching the cheap local train out to the ruins of Pompeii for a day." },
      { q: "Which reviewer found the city physically tiring to explore?", answer: 0, explanation: "In A, Porto's steep hills and endless staircases left the writer's legs 'genuinely aching' after two days." },
      { q: "Which reviewer was emotionally affected by learning about the city's past?", answer: 1, explanation: "In B, the writer 'left in tears' after visiting the museum dedicated to the city's wartime history." },
      { q: "Which reviewer particularly enjoyed how few other tourists there were?", answer: 3, explanation: "In D, wandering the art nouveau district 'without being surrounded by tour groups felt like a luxury'." },
      { q: "Which reviewer liked being able to combine sightseeing with time by the sea?", answer: 2, explanation: "In C, Valencia offers 'two holidays in one': the arts and science complex in the morning and a sandy beach in the afternoon." },
      { q: "Which reviewer found that some attractions were closed at the time of their visit?", answer: 3, explanation: "In D, several museums and the open-air ethnographic park 'were shut for the season' during the February visit." },
      { q: "Which reviewer says their accommodation was remarkably cheap?", answer: 0, explanation: "In A, the riverside guesthouse was 'the cheapest decent room I have ever booked anywhere in Europe'." }
    ]
  },
  {
    id: "f-rmatch1-03",
    title: "Teenagers Whose Hobbies Became Small Businesses",
    sections: [
      {
        label: "A",
        text: "Amelia, 16: Baking started as a way to relax after exams, but when friends began ordering my cupcakes for birthdays and christenings, it turned into something bigger. Most of my orders now come from families organising parties, and decorating a themed cake for a five-year-old is the best part of my week. The hardest lesson was working out prices; at first I only counted the ingredients and forgot my hours of work, so I barely broke even. My parents support the business, but they made one firm rule: half of everything I earn goes straight into a savings account I can't touch until I'm eighteen."
      },
      {
        label: "B",
        text: "Josh, 17: I used to spend hours editing videos of myself gaming just for fun. Then other young gamers started asking whether I'd edit their footage too, and now I run a small editing service for creators who don't have the time or skills to do it themselves. The money is honestly all over the place; one month I'll have five clients, the next almost none, so I never rely on it. Because my parents worried about school, I built a strict weekly plan: homework and revision are blocked out first, and editing only happens in the gaps. So far my grades haven't suffered at all."
      },
      {
        label: "C",
        text: "Nadia, 15: My business began completely by accident. I was photographing my own dog in the park when a neighbour admired the pictures and asked if I'd do the same for her spaniel, and she insisted on paying me. Word spread, and now I photograph pets most weekends. I don't treat the money as spending money; every pound I make goes back into the business, and I've already upgraded from my old second-hand camera to a proper lens and lighting kit. Animals are unpredictable models, so patience matters more than technical skill, but that unpredictability is exactly what makes the photos feel alive."
      },
      {
        label: "D",
        text: "Tom, 17: Everything I know about bikes comes from my grandfather, who repaired them all his life and let me hand him tools in his shed from the age of eight. These days I run a repair stand at the Saturday market, fixing punctures, brakes and gears while customers wait. It's steady work because everyone in our town cycles. Unlike my mates, I'm not doing this just for pocket money; when I finish school next year I plan to open a proper workshop, and I've already talked to the bank about a small loan. This isn't a hobby anymore — it's the start of my career."
      }
    ],
    questions: [
      { q: "Whose business began without any planning at all?", answer: 2, explanation: "In C, Nadia's business 'began completely by accident' when a neighbour admired her dog photos and insisted on paying her." },
      { q: "Who found it difficult to decide how much to charge?", answer: 0, explanation: "In A, Amelia says 'The hardest lesson was working out prices'; she counted only ingredients, forgot her hours, and barely broke even." },
      { q: "Who is required to save a fixed proportion of what they earn?", answer: 0, explanation: "In A, Amelia's parents made a firm rule that 'half of everything I earn goes straight into a savings account'." },
      { q: "Who spends their profits on improving their equipment?", answer: 2, explanation: "In C, Nadia puts every pound back into the business and has upgraded from a second-hand camera to a proper lens and lighting kit." },
      { q: "Who intends to turn the business into their full-time job?", answer: 3, explanation: "In D, Tom plans to open a proper workshop after school and has talked to the bank about a loan: 'it's the start of my career'." },
      { q: "Who was taught their skill by a member of their family?", answer: 3, explanation: "In D, 'Everything I know about bikes comes from my grandfather', who let Tom help in his shed from the age of eight." },
      { q: "Whose income varies greatly from one month to the next?", answer: 1, explanation: "In B, Josh's earnings are 'all over the place': five clients one month, almost none the next." },
      { q: "Who follows a fixed timetable to make sure schoolwork comes first?", answer: 1, explanation: "In B, Josh built a strict weekly plan blocking out homework and revision first, with editing only in the gaps." },
      { q: "Whose customers are mostly people organising celebrations?", answer: 0, explanation: "In A, most of Amelia's orders come from 'families organising parties', with birthday and christening cakes as the core work." },
      { q: "Who provides a service to other people doing the same hobby?", answer: 1, explanation: "In B, Josh runs an editing service for other gaming creators who lack the time or skills to edit their own footage." }
    ]
  },
  {
    id: "f-rmatch1-04",
    title: "Five People Remember a Teacher",
    sections: [
      {
        label: "A",
        text: "Grace: Mrs Okafor taught me maths, and to be honest, for the first term I was scared stiff of her. She never raised her voice, but her standards were so high that a single lifted eyebrow could make the whole class fall silent. I resented the endless practice she demanded and thought she was simply harsh. It was only years later, sitting my accountancy exams and finding them strangely easy, that I understood what she had given me: habits of care and persistence that nobody else ever taught me. At school I couldn't see it at all; the gratitude came a decade too late."
      },
      {
        label: "B",
        text: "Sam: Mr Delaney ran the drama club, and I only joined because my best friend dragged me along. After one rehearsal he took me aside and said, quite calmly, that I had a gift for comedy and he intended to develop it. I laughed — I'd always been the quiet kid, and no one, least of all me, suspected I could perform. He gave me bigger roles each year and eventually persuaded me to audition for a youth theatre company. I'm a professional actor now, and I can draw a straight line from his words in that dusty hall to the job I do today."
      },
      {
        label: "C",
        text: "Ines: Our chemistry teacher, Mr Silva, turned every lesson into a kind of glorious chaos. There were controlled explosions, colour-changing liquids and one legendary afternoon involving a rocket made from a lemonade bottle. We were learning serious science, but it never felt like study; it felt like play, and I looked forward to his classes all week. He retired suddenly at the end of my final year, and in the rush of exams I never went back to tell him what those lessons had meant to me. I still feel a sting of regret about that, even now."
      },
      {
        label: "D",
        text: "Kofi: When my parents were divorcing, my schoolwork collapsed, and most teachers just handed out warnings. Miss Hartley was different. She noticed something was wrong, and instead of punishing me she stayed behind twice a week to help me catch up, never once forcing me to explain what was happening at home. She was less like a teacher and more like a wise older friend who happened to know a lot about geography. That was fifteen years ago, and we still write to each other every Christmas; her card is always the first one I open, and mine, she says, is hers."
      },
      {
        label: "E",
        text: "Lily: I'll be honest: Madame Roche was not a brilliant classroom teacher. Her grammar explanations left most of us baffled, and her tests were famously disorganised. But she did one thing no other teacher ever did: she spent a whole year arranging an exchange trip to her home town in France, battling paperwork and fundraising bake sales. That fortnight abroad, staying with a family and hearing the language all around me, changed the direction of my whole life. I fell in love with living in another country, and thirty years later I'm still doing it. Imperfect lessons, unforgettable gift."
      }
    ],
    questions: [
      { q: "Who only came to appreciate the teacher a long time after leaving school?", answer: 0, explanation: "In A, Grace only understood Mrs Okafor's gift years later during her accountancy exams: 'the gratitude came a decade too late'." },
      { q: "Whose choice of career was a direct result of the teacher's influence?", answer: 1, explanation: "In B, Sam is now a professional actor and can 'draw a straight line from his words ... to the job I do today'." },
      { q: "Who regrets never thanking the teacher?", answer: 2, explanation: "In C, Ines never went back to thank Mr Silva after his sudden retirement: 'I still feel a sting of regret about that'." },
      { q: "Who was given extra support during a difficult period in their family life?", answer: 3, explanation: "In D, while Kofi's parents were divorcing, Miss Hartley stayed behind twice a week to help him catch up." },
      { q: "Who is still in touch with the teacher today?", answer: 3, explanation: "In D, fifteen years on, Kofi and Miss Hartley 'still write to each other every Christmas'." },
      { q: "Whose teacher organised an educational visit to another country?", answer: 4, explanation: "In E, Madame Roche spent a whole year arranging an exchange trip to her home town in France." },
      { q: "Who says the teacher's lessons felt more like entertainment than work?", answer: 2, explanation: "In C, the chemistry lessons with explosions and a lemonade-bottle rocket 'never felt like study; it felt like play'." },
      { q: "Who was frightened of the teacher to begin with?", answer: 0, explanation: "In A, Grace admits that 'for the first term I was scared stiff of her', with a lifted eyebrow silencing the class." },
      { q: "Whose teacher spotted a talent the writer didn't know they had?", answer: 1, explanation: "In B, Mr Delaney said Sam had a gift for comedy when 'no one, least of all me, suspected I could perform'." },
      { q: "Who admits that the teacher's normal lessons were not actually very good?", answer: 4, explanation: "In E, Lily concedes 'Madame Roche was not a brilliant classroom teacher', with baffling grammar explanations and disorganised tests." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
