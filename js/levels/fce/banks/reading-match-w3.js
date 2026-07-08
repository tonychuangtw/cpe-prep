(function () {
var BANK = [
  {
    id: "f-rmatch3-01",
    title: "Four People Talk About Learning a Language",
    sections: [
      {
        label: "A",
        text: "Sofia: I started Japanese three years ago because of anime, which everybody finds hilarious, but it got me through the boring beginner stage when nothing makes sense. I use an app on the bus every morning and I'm weirdly protective of my daily streak — four hundred days and counting. The thing nobody warned me about was the writing system; I assumed I'd pick it up alongside speaking, but in the end I had to set aside separate evenings just for the characters. My spoken Japanese is still far behind my reading, mostly because I've never once had a real conversation with a native speaker, and I know that has to change this year."
      },
      {
        label: "B",
        text: "Callum: My company transferred me to their Lisbon office with six weeks' notice, so Portuguese wasn't a hobby — it was survival. I signed up for an intensive course that met every single evening, which nearly finished me off after full days of work. What actually taught me the most was making a fool of myself daily: ordering the wrong food, mixing up words, getting laughed at kindly by the baker downstairs. I stopped being embarrassed after about a month, and that was the real breakthrough. My grammar is still a mess, frankly, but I can argue with my landlord about the boiler, and in my book that's fluency."
      },
      {
        label: "C",
        text: "Renata: I grew up hearing Polish from my grandmother but answering her in English, which I regret enormously now she's gone. Two years ago I decided to properly learn the language she tried to give me. I found an online tutor from Kraków whom I meet twice a week, and between lessons I watch Polish soap operas with the subtitles switched off — painful at first, addictive now. The strangest discovery was how much was already in my head; words I didn't know I knew kept surfacing. Last summer I visited my cousins near Gdańsk and managed a whole dinner in Polish. I cried afterwards, to be honest."
      },
      {
        label: "D",
        text: "Marcus: I've been learning French on and off since school, and 'on and off' is precisely my problem. Every January I restart with enormous enthusiasm, buy a new textbook, and by March it's gathering dust. This year I tried something different: I joined a conversation group at the library where we're not allowed to speak any English for an hour. No teacher, no marking, just people at all levels helping each other. Committing to real people, it turns out, works far better for me than committing to a book. I still won't touch grammar exercises, and my mistakes are legendary, but for the first time ever I haven't quit by spring."
      }
    ],
    questions: [
      { q: "Which person had very little time to prepare before needing the language?", answer: 1, explanation: "In B, Callum was transferred to Lisbon 'with six weeks' notice', so Portuguese 'wasn't a hobby - it was survival'." },
      { q: "Which person underestimated how difficult one aspect of the language would be?", answer: 0, explanation: "In A, Sofia says 'nobody warned me about the writing system' and she assumed she would pick it up alongside speaking, but needed separate evenings for the characters." },
      { q: "Which person found that losing their fear of embarrassment was a turning point?", answer: 1, explanation: "In B, Callum 'stopped being embarrassed after about a month, and that was the real breakthrough'." },
      { q: "Which person has a family reason for learning the language?", answer: 2, explanation: "In C, Renata grew up hearing Polish from her grandmother and decided 'to properly learn the language she tried to give me'." },
      { q: "Which person admits they have never practised speaking with a native speaker?", answer: 0, explanation: "In A, Sofia says her spoken Japanese lags behind 'mostly because I've never once had a real conversation with a native speaker'." },
      { q: "Which person repeatedly abandoned their studies in the past?", answer: 3, explanation: "In D, Marcus has learned French 'on and off since school': every January he restarts and 'by March it's gathering dust'." },
      { q: "Which person was surprised to find they knew more than they realised?", answer: 2, explanation: "In C, Renata's 'strangest discovery was how much was already in my head; words I didn't know I knew kept surfacing'." },
      { q: "Which person found that being accountable to other learners kept them going?", answer: 3, explanation: "In D, Marcus says 'Committing to real people, it turns out, works far better for me than committing to a book', and he hasn't quit by spring for the first time." },
      { q: "Which person uses their journey to work for regular practice?", answer: 0, explanation: "In A, Sofia uses 'an app on the bus every morning' and protects her 400-day streak." },
      { q: "Which person watches television programmes as part of their learning?", answer: 2, explanation: "In C, Renata watches 'Polish soap operas with the subtitles switched off - painful at first, addictive now'." }
    ]
  },
  {
    id: "f-rmatch3-02",
    title: "Four Reviews of Family Camping Sites",
    sections: [
      {
        label: "A",
        text: "Larkfield Meadow, Devon: We chose Larkfield for its no-cars rule — you park in a field by the entrance and wheelbarrow your gear to your pitch, which sounds tiresome but means children can roam completely safely. Ours vanished within an hour and returned only for meals. The compost toilets take some getting used to, I'll admit, and there are no showers at all, just a rather bracing stream. What sold it to us was the evening fire circle, where the owner tells stories and families share marshmallows. Book months ahead, though; there are only twenty pitches and the regulars snap them up in January."
      },
      {
        label: "B",
        text: "Sandpiper Holiday Park, Norfolk: Sandpiper is camping for people who don't really want to rough it, and after a stressful year that was exactly us. Heated shower blocks, a laundry, a small supermarket, and — the children's highlight — a proper pool with a slide. The pitches are close together, so you'll hear your neighbours' every word, and at peak season the queue for the showers before nine can be twenty minutes. But when it rained for two solid days, the indoor games barn saved our holiday and probably our sanity. It's not wild, it's not quiet, but everything simply works."
      },
      {
        label: "C",
        text: "Bryn Awel Farm, Snowdonia: This is a working sheep farm with a camping field attached, and the setting is simply extraordinary — mountains on three sides and not another building in view. The farmer's wife sells eggs and bacon from the kitchen door each morning, and our kids helped bottle-feed lambs, which they still talk about months later. Be prepared: the weather changes in minutes, and when the cloud comes down the temperature drops sharply even in July. Our cheap tent leaked on the second night and we nearly gave up. Buy decent equipment before you come — this is proper mountain camping, not a garden sleepover."
      },
      {
        label: "D",
        text: "Oakhurst Woods, Sussex: Oakhurst pitches are scattered through mature woodland, each one screened by trees, so even when the site is full you feel almost alone. Every pitch has its own fire pit with logs delivered by quad bike each afternoon, and cooking over flames became the whole point of the trip for my teenagers, who barely glanced at their phones all week — a miracle I still can't explain. The one real drawback is the darkness: the canopy blocks so much light that torches are essential from early evening, and our first walk to the toilet block involved two wrong turns and a badger."
      }
    ],
    questions: [
      { q: "Which site is recommended for families who want plenty of facilities?", answer: 1, explanation: "In B, Sandpiper has heated showers, a laundry, a supermarket and a pool - 'camping for people who don't really want to rough it'." },
      { q: "Which reviewer warns that good-quality gear is essential?", answer: 2, explanation: "In C, the reviewer's cheap tent leaked and they advise 'Buy decent equipment before you come - this is proper mountain camping'." },
      { q: "Which site keeps vehicles away from the tents?", answer: 0, explanation: "In A, Larkfield has a 'no-cars rule' - you park by the entrance and wheelbarrow your gear to the pitch." },
      { q: "Which reviewer says the site feels private even when it is busy?", answer: 3, explanation: "In D, pitches are 'screened by trees, so even when the site is full you feel almost alone'." },
      { q: "Which reviewer was grateful for indoor activities during bad weather?", answer: 1, explanation: "In B, 'when it rained for two solid days, the indoor games barn saved our holiday and probably our sanity'." },
      { q: "Which site gave children the chance to help care for animals?", answer: 2, explanation: "In C, the kids 'helped bottle-feed lambs, which they still talk about months later'." },
      { q: "Which reviewer advises booking a long time in advance?", answer: 0, explanation: "In A, the reviewer says 'Book months ahead' because there are only twenty pitches and regulars 'snap them up in January'." },
      { q: "Which reviewer was surprised by how little their children used technology?", answer: 3, explanation: "In D, the teenagers 'barely glanced at their phones all week - a miracle I still can't explain'." },
      { q: "Which reviewer mentions having to wait to use the washing facilities?", answer: 1, explanation: "In B, 'at peak season the queue for the showers before nine can be twenty minutes'." },
      { q: "Which reviewer found it difficult to find their way around after dark?", answer: 3, explanation: "In D, the canopy blocks the light, torches are essential, and the 'first walk to the toilet block involved two wrong turns and a badger'." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
