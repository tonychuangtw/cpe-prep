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
      { q: "Which person deliberately moved house in order to improve their journey to work?", answer: 3, explanation: "D 段 Leo 說他放棄郊區便宜公寓，改租離辦公室走路二十分鐘的住處，「purely to escape the daily bus ride」，是刻意搬家改善通勤。" },
      { q: "Which person experienced a physical benefit they had not been expecting?", answer: 0, explanation: "A 段 Marta 說沒人告訴她會變多強壯，「I'm fitter now than I've ever been, which was never part of the plan」，健康好處是意料之外。" },
      { q: "Which person has part of their travel costs paid by their employer?", answer: 1, explanation: "B 段 Daniel 提到公司透過綠色通勤方案負擔三分之一的季票費用（my company pays a third of it）。" },
      { q: "Which person feels guilty about the effect their commute has on the environment?", answer: 2, explanation: "C 段 Priya 說「What bothers me is the pollution I'm responsible for. I feel genuinely bad every time I fill the tank」，明確表達環境罪惡感。" },
      { q: "Which person tries to avoid travelling when their form of transport is at its busiest?", answer: 1, explanation: "B 段 Daniel 討厭尖峰擠滿人的車廂，並說「Whenever possible I take an earlier, emptier service」，刻意避開最擁擠時段。" },
      { q: "Which person felt nervous when they first started commuting this way?", answer: 0, explanation: "A 段 Marta 說起初「I was terrified of the traffic on the main road」，還會繞遠路避開，符合一開始緊張的描述。" },
      { q: "Which person says they have no realistic alternative to their current way of travelling?", answer: 2, explanation: "C 段 Priya 住在偏遠村莊，每天只有一班公車且時間不合，「I really have no choice but to drive」，別無選擇。" },
      { q: "Which person misses the social side of the way they used to travel?", answer: 3, explanation: "D 段 Leo 說唯一遺憾是失去和同事在公車上的閒聊，「those silly conversations ... were more valuable than I realised」。" },
      { q: "Which person uses the journey to get some of their job done before arriving?", answer: 1, explanation: "B 段 Daniel 在火車上回信、準備會議，「arrive with half my morning tasks already done」，把通勤當工作時間。" },
      { q: "Which person finds the equipment their commute requires irritating?", answer: 0, explanation: "A 段 Marta 抱怨雨天要穿脫防水衣物、鞋套和手套，「takes forever and never stops being annoying」，對裝備感到厭煩。" }
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
      { q: "Which reviewer says a special pass for visitors turned out to be good value?", answer: 2, explanation: "C 段瓦倫西亞的評論提到購買 official visitor card 涵蓋交通和博物館，「saved us more than forty euros」，通行證非常划算。" },
      { q: "Which reviewer warns readers to protect their belongings?", answer: 4, explanation: "E 段那不勒斯提醒「keep your phone and wallet somewhere secure」，並提到同伴差點被搶包，是防竊警告。" },
      { q: "Which reviewer was caught out by the weather?", answer: 1, explanation: "B 段克拉科夫的作者說沒人警告十月氣溫驟降，只好第二天早上買毛帽和手套，顯示被天氣嚇到。" },
      { q: "Which reviewer recommends a trip to a site outside the city itself?", answer: 4, explanation: "E 段建議搭便宜火車去龐貝古城一日遊（catching the cheap local train out to the ruins of Pompeii），是城外景點。" },
      { q: "Which reviewer found the city physically tiring to explore?", answer: 0, explanation: "A 段波多提到城市建在陡峭山丘上，爬了兩天樓梯和石板坡後「my legs were genuinely aching」，遊覽很耗體力。" },
      { q: "Which reviewer was emotionally affected by learning about the city's past?", answer: 1, explanation: "B 段作者參觀戰爭歷史博物館後「I left in tears」，被城市的歷史深深觸動。" },
      { q: "Which reviewer particularly enjoyed how few other tourists there were?", answer: 3, explanation: "D 段里加的評論說新藝術建築區幾乎只有他們，「wandering without being surrounded by tour groups felt like a luxury」。" },
      { q: "Which reviewer liked being able to combine sightseeing with time by the sea?", answer: 2, explanation: "C 段說瓦倫西亞是「two holidays in one」：早上看建築、下午躺在沙灘，城市觀光加海邊兼得。" },
      { q: "Which reviewer found that some attractions were closed at the time of their visit?", answer: 3, explanation: "D 段提到二月造訪時，數間博物館和露天民俗園區「were shut for the season」，部分景點沒開。" },
      { q: "Which reviewer says their accommodation was remarkably cheap?", answer: 0, explanation: "A 段稱他們的河畔民宿是「the cheapest decent room I have ever booked anywhere in Europe」，住宿便宜得驚人。" }
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
      { q: "Whose business began without any planning at all?", answer: 2, explanation: "C 段 Nadia 說生意「began completely by accident」，鄰居看到她拍自家狗的照片後主動付費請她拍，完全是意外開始。" },
      { q: "Who found it difficult to decide how much to charge?", answer: 0, explanation: "A 段 Amelia 說最難的一課是訂價（The hardest lesson was working out prices），起初只算材料忘了工時，幾乎沒賺。" },
      { q: "Who is required to save a fixed proportion of what they earn?", answer: 0, explanation: "A 段提到父母的規定：「half of everything I earn goes straight into a savings account」，必須存下一半收入。" },
      { q: "Who spends their profits on improving their equipment?", answer: 2, explanation: "C 段 Nadia 說每一鎊都投回事業，已從二手相機升級到專業鏡頭和燈光設備，獲利用於添購器材。" },
      { q: "Who intends to turn the business into their full-time job?", answer: 3, explanation: "D 段 Tom 說畢業後要開正式車行，已和銀行談貸款，「it's the start of my career」，打算全職經營。" },
      { q: "Who was taught their skill by a member of their family?", answer: 3, explanation: "D 段 Tom 說修車知識全來自祖父（Everything I know about bikes comes from my grandfather），從八歲就在工作棚幫忙。" },
      { q: "Whose income varies greatly from one month to the next?", answer: 1, explanation: "B 段 Josh 說收入「all over the place」，有時一個月五個客戶、有時幾乎沒有，收入起伏很大。" },
      { q: "Who follows a fixed timetable to make sure schoolwork comes first?", answer: 1, explanation: "B 段 Josh 因父母擔心課業而制定嚴格週計畫，先排功課和複習，剪輯只能利用空檔，成績因此未受影響。" },
      { q: "Whose customers are mostly people organising celebrations?", answer: 0, explanation: "A 段 Amelia 說大多數訂單來自辦派對的家庭（families organising parties），生日和受洗蛋糕是主要客源。" },
      { q: "Who provides a service to other people doing the same hobby?", answer: 1, explanation: "B 段 Josh 為其他年輕遊戲創作者剪輯影片（a small editing service for creators），服務對象是同好。" }
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
      { q: "Who only came to appreciate the teacher a long time after leaving school?", answer: 0, explanation: "A 段 Grace 說多年後考會計師考試才明白老師給她的訓練，「the gratitude came a decade too late」，感激來得很晚。" },
      { q: "Whose choice of career was a direct result of the teacher's influence?", answer: 1, explanation: "B 段 Sam 說自己現在是職業演員，能「draw a straight line from his words ... to the job I do today」，職業直接源自老師。" },
      { q: "Who regrets never thanking the teacher?", answer: 2, explanation: "C 段 Ines 說老師突然退休，她在考試忙亂中沒回去道謝，「I still feel a sting of regret about that」。" },
      { q: "Who was given extra support during a difficult period in their family life?", answer: 3, explanation: "D 段 Kofi 在父母離婚、成績崩盤時，Miss Hartley 每週兩次留下來幫他補課，在家庭困難期給予協助。" },
      { q: "Who is still in touch with the teacher today?", answer: 3, explanation: "D 段 Kofi 說十五年後「we still write to each other every Christmas」，至今仍與老師保持聯絡。" },
      { q: "Whose teacher organised an educational visit to another country?", answer: 4, explanation: "E 段 Madame Roche 花一整年安排到法國家鄉的交換旅行（arranging an exchange trip），是出國參訪。" },
      { q: "Who says the teacher's lessons felt more like entertainment than work?", answer: 2, explanation: "C 段 Ines 描述化學課有爆炸和汽水瓶火箭，「it never felt like study; it felt like play」，上課像玩樂。" },
      { q: "Who was frightened of the teacher to begin with?", answer: 0, explanation: "A 段 Grace 說第一學期「I was scared stiff of her」，老師挑一下眉毛全班就安靜，起初非常害怕。" },
      { q: "Whose teacher spotted a talent the writer didn't know they had?", answer: 1, explanation: "B 段老師說 Sam 有喜劇天分，而 Sam 自己都不相信（no one, least of all me, suspected I could perform），是被發掘的才能。" },
      { q: "Who admits that the teacher's normal lessons were not actually very good?", answer: 4, explanation: "E 段 Lily 坦言「Madame Roche was not a brilliant classroom teacher」，文法解釋令人困惑、考試混亂，課堂教學不佳。" }
    ]
  }
];
if (typeof module !== "undefined") { module.exports = BANK; return; }
window.READING = window.READING || { mc: [], gap: [], match: [] };
window.READING.match = window.READING.match.concat(BANK);
})();
