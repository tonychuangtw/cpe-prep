(function () {
var BANK = [
  {
    id: "f-rmatch4-01",
    title: "Four People Talk About Their Collections",
    sections: [
      {
        label: "A",
        text: "Elena: My grandfather left me a shoebox of old postcards when I was twelve, and I've been adding to it ever since — over three thousand now. People assume it's about the pictures, but honestly it's the messages on the back that fascinate me: tiny windows into ordinary lives, holiday complaints, love notes, a century of handwriting. I photograph my duplicates and swap them through an online club with collectors in places I'll never visit; last month a parcel arrived from Uruguay from a man I know only by his username. My one genuine problem is space. Three thousand postcards weigh more than you'd think, and my shelves are starting to protest."
      },
      {
        label: "B",
        text: "Tomas: I collect vinyl records, but I have a strict rule: one shelf, no more. If I buy a record, another one has to leave the same week, usually to a friend or the charity shop. It sounds harsh, but it keeps the whole thing joyful instead of turning my flat into a warehouse. If I'm honest, the searching is the best part anyway — up at six for the flea market, coffee in one hand, flicking through crates in the cold. Owning the record almost matters less. My best find cost me fifty pence from a seller who clearly had no idea it was a rare first pressing; I still feel slightly guilty about that one."
      },
      {
        label: "C",
        text: "Grace: My first typewriter was sitting next to a rubbish skip in the rain, and I carried it home mostly out of pity. Getting it working took months, and by the end I'd taught myself to clean mechanisms, replace springs and cut new rubber feet — skills I now use on every machine I rescue. I've got eleven typewriters now, which my husband describes as ten too many. The nicest development came last year, when the writing club at our library asked to borrow a few for their evenings; apparently composing a poem on a 1950s machine feels completely different. Four of my typewriters now spend more time out being used than at home."
      },
      {
        label: "D",
        text: "Noel: A school geography trip to the coast changed everything for me: our teacher cracked open a dull grey pebble and there was an ammonite inside, curled up like a secret. I was hooked on fossils from that afternoon. These days I'm methodical about it — every find gets photographed where it lies, logged with the exact map reference and the date, because a fossil without its location is just a pretty stone to scientists. Two summers ago I found a nearly complete sea urchin that turned out to be genuinely unusual for our coastline. It's in the county museum now; I decided it deserved a bigger audience than my spare bedroom."
      }
    ],
    questions: [
      { q: "Which person received the start of their collection from a family member?", answer: 0, explanation: "In A, Elena's grandfather 'left me a shoebox of old postcards when I was twelve', which began her collection." },
      { q: "Which person limits how large their collection is allowed to grow?", answer: 1, explanation: "In B, Tomas has 'a strict rule: one shelf, no more' - if he buys a record, another must leave the same week." },
      { q: "Which person taught themselves practical skills to look after their collection?", answer: 2, explanation: "In C, Grace 'taught myself to clean mechanisms, replace springs and cut new rubber feet' while restoring her first typewriter." },
      { q: "Which person gave their best item to a public institution?", answer: 3, explanation: "In D, Noel's unusual sea urchin fossil 'is in the county museum now' because it 'deserved a bigger audience than my spare bedroom'." },
      { q: "Which person values what is written on their items more than how they look?", answer: 0, explanation: "In A, Elena says 'it's the messages on the back that fascinate me', not the pictures people assume she collects for." },
      { q: "Which person bought a valuable item for a very low price?", answer: 1, explanation: "In B, Tomas's best find 'cost me fifty pence' from a seller who did not realise it was a rare first pressing." },
      { q: "Which person keeps precise records of where each item was found?", answer: 3, explanation: "In D, every fossil is 'photographed where it lies, logged with the exact map reference and the date'." },
      { q: "Which person exchanges items with people they have never met?", answer: 0, explanation: "In A, Elena swaps duplicates through an online club, receiving a parcel 'from a man I know only by his username'." },
      { q: "Which person lets other people make use of their collection?", answer: 2, explanation: "In C, the library writing club borrows Grace's typewriters, and four of them 'now spend more time out being used than at home'." },
      { q: "Which person enjoys the search for new items more than owning them?", answer: 1, explanation: "In B, Tomas says 'the searching is the best part anyway' and that 'owning the record almost matters less'." }
    ]
  },
  {
    id: "f-rmatch4-02",
    title: "Four Reviews of Guided Walking Tours",
    sections: [
      {
        label: "A",
        text: "Shadows of the Old Town (evening ghost walk): Our guide, Marcus, trained as a stage actor before turning to tours, and it shows — he doesn't tell the stories so much as perform them, complete with sudden silences that made a grown man behind me yelp. The history is real, too, drawn from court records rather than invention. My only complaint is the size of the group: nearly forty of us trailed through the alleys, and at the quieter spots those at the back missed half the words. Arrive early and stay close to the front. The walk ends, sensibly, at the oldest pub in the city, where Marcus answers questions for anyone who buys him a lemonade."
      },
      {
        label: "B",
        text: "Colour on Concrete (street-art tour): This one is genuinely special because the guide, Ines, painted several of the murals herself and knows the artists behind most of the others. Numbers are capped at eight people, so it feels like walking with a well-informed friend rather than following an umbrella. Be aware that the route is never the same twice — street art gets painted over constantly, so the tour is rebuilt every month around what has appeared and what has vanished. The afternoon finishes in a courtyard where everyone gets a board, a stencil and a can, and my attempt now hangs, slightly crooked, in my kitchen."
      },
      {
        label: "C",
        text: "Six Stalls at Dawn (food-market tour): The single most important instruction comes in the confirmation email: do not eat breakfast beforehand. I ignored it and regretted every pastry I couldn't finish. Tastings at all six stalls are included in the price, from smoked cheese to a fish stew the recipe for which is apparently a state secret. Our guide, Bruno, has shopped at this market for thirty years, and every stallholder greeted him by name, which opened doors — we stood behind one counter while the baker shaped loaves. Officially the tour lasts two hours; ours ran to nearly three and nobody complained. Book early: weekend dates sell out about a month ahead."
      },
      {
        label: "D",
        text: "Cliffs and Seals (coastal wildlife walk): Rachel, a retired marine biologist, leads this three-hour walk along the headland, and her commentary turns an ordinary clifftop into a documentary. Decent binoculars are provided for everyone, which saved me buying a pair for one holiday. Fair warning: the path climbs steeply in two places and there is no shortcut back, so this is not the outing for anyone unsteady on their feet. Our first booking was cancelled when a storm rolled in, and the company rebooked us for the next morning within ten minutes, with no fuss and no fee. Worth it entirely for the moment eleven seals surfaced together below us."
      }
    ],
    questions: [
      { q: "Which tour is led by someone who created part of what visitors see?", answer: 1, explanation: "In B, the guide Ines 'painted several of the murals herself' and knows the artists behind the others." },
      { q: "Which review warns that the route is physically demanding?", answer: 3, explanation: "In D, 'the path climbs steeply in two places and there is no shortcut back', so it is unsuitable for anyone unsteady on their feet." },
      { q: "Which review criticises the number of people on the tour?", answer: 0, explanation: "In A, 'nearly forty of us trailed through the alleys' and people at the back missed half the words - the reviewer's only complaint." },
      { q: "Which review advises against eating before the tour?", answer: 2, explanation: "In C, the confirmation email says 'do not eat breakfast beforehand', advice the reviewer ignored and regretted." },
      { q: "Which tour is led by a guide with professional performance training?", answer: 0, explanation: "In A, Marcus 'trained as a stage actor before turning to tours' and performs the stories rather than telling them." },
      { q: "Which tour changes its content regularly?", answer: 1, explanation: "In B, 'the route is never the same twice' and the tour is 'rebuilt every month' as street art appears and vanishes." },
      { q: "Which reviewer praises how the company dealt with a cancellation?", answer: 3, explanation: "In D, after a storm cancelled the first booking, the company 'rebooked us for the next morning within ten minutes, with no fuss and no fee'." },
      { q: "Which tour lasted longer than officially advertised?", answer: 2, explanation: "In C, 'officially the tour lasts two hours; ours ran to nearly three and nobody complained'." },
      { q: "Which tour provides equipment for the participants to use?", answer: 3, explanation: "In D, 'decent binoculars are provided for everyone', saving the reviewer from buying a pair." },
      { q: "Which reviewer says places must be reserved well ahead of time?", answer: 2, explanation: "In C, the reviewer says 'Book early: weekend dates sell out about a month ahead'." }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
