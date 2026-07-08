/* FCE Reading — Multiple matching, wave 2 */
(function () {
  var BANK = [
    {
      id: "f-rmatch2-01",
      title: "My First Job",
      sections: [
        {
          label: "A",
          text: "Marta: My first job was delivering newspapers around our neighbourhood when I was fourteen. I had to get up at half past five every single morning, even in the middle of winter, which was tough at first. I was saving every penny for a new bicycle, and after eight months I finally bought it. Looking back, that job taught me the importance of always being on time, a habit that has stayed with me ever since."
        },
        {
          label: "B",
          text: "Daniel: I started out as a waiter in my aunt's small cafe by the seaside. On my very first weekend I dropped a whole tray of drinks in front of a table of tourists, and I wanted to disappear. Luckily everyone laughed, including my aunt. I discovered that I actually enjoyed talking to customers, and today, fifteen years later, I still work in hospitality as the manager of a busy restaurant in the city centre."
        },
        {
          label: "C",
          text: "Priya: At seventeen I stacked shelves in a large supermarket, usually on the night shift. Honestly, the work itself was incredibly dull, just endless boxes of tins and cereal, hour after hour. The one wonderful thing that came out of it was meeting Sam, who worked in the next aisle and is still my best friend today. After a year I gave up the job so that I could concentrate fully on my final school exams."
        },
        {
          label: "D",
          text: "Tomas: My uncle ran a fruit and vegetable stall at the weekend market, and when I was fifteen he asked me to help him. For the first couple of months he did not pay me anything at all, saying I was learning the trade, but later he gave me a fair weekly wage. Adding up prices in my head all day without a calculator really sharpened my mental arithmetic, which helped me enormously at school."
        }
      ],
      questions: [
        { q: "Which person had to wake up extremely early for work?", answer: 0, explanation: "A 提到每天清晨五點半就要起床送報，即使冬天也一樣。" },
        { q: "Which person still works in the same industry today?", answer: 1, explanation: "B 說十五年後的今天仍在餐飲服務業工作，現在是餐廳經理。" },
        { q: "Which person received no payment at the beginning?", answer: 3, explanation: "D 提到頭幾個月叔叔完全沒付薪水，說他是在學做生意。" },
        { q: "Which person found the work itself extremely boring?", answer: 2, explanation: "C 直言上架工作非常無聊，只是無止盡地搬罐頭和麥片。" },
        { q: "Which person made a lasting friendship through the job?", answer: 2, explanation: "C 在超市認識了 Sam，至今仍是最好的朋友。" },
        { q: "Which person was saving their earnings for a particular item?", answer: 0, explanation: "A 說每一分錢都存起來買新腳踏車，八個月後如願買到。" },
        { q: "Which person made an embarrassing mistake in front of customers?", answer: 1, explanation: "B 第一個週末就在遊客面前打翻整盤飲料，尷尬到想消失。" },
        { q: "Which person says the job improved their maths skills?", answer: 3, explanation: "D 提到整天心算價錢，大幅增進了他的心算能力。" },
        { q: "Which person left the job in order to focus on their studies?", answer: 2, explanation: "C 做了一年後辭職，為了專心準備學校的期末考試。" },
        { q: "Which person believes the job taught them punctuality?", answer: 0, explanation: "A 說送報工作讓她學會準時的重要，這習慣一直保持至今。" }
      ]
    },
    {
      id: "f-rmatch2-02",
      title: "Reviews of Unusual Museums",
      sections: [
        {
          label: "A",
          text: "The Instant Noodle Museum was a delightful surprise. The highlight is a workshop where visitors design their own cup of noodles, choosing the soup flavour and toppings, then sealing the package themselves. My two children were completely absorbed for over an hour, and I would say this place is perfect for families with young kids. Entry costs almost nothing, and the staff were friendly and spoke excellent English throughout our visit."
        },
        {
          label: "B",
          text: "I had high hopes for the Museum of Failed Inventions, and in some ways it delivered. The exhibits, from a bicycle with square wheels to an umbrella for two people walking in opposite directions, are genuinely hilarious, and I laughed out loud several times. However, the ticket price is shockingly high for what you get, and the whole museum is far smaller than the website photographs suggest, with only three modest rooms."
        },
        {
          label: "C",
          text: "The Underground Sewer Museum is not for everyone, I admit. You can only visit as part of a guided tour, which lasts ninety minutes and takes you through genuine nineteenth-century tunnels beneath the city. Be warned that there is a distinctly unpleasant smell in certain sections, though you soon get used to it. The guides are brilliant storytellers. My strong advice is to book your place online well in advance, because tours sell out days ahead."
        },
        {
          label: "D",
          text: "The Museum of Miniature Worlds contains hundreds of astonishing tiny scenes, from a complete circus that fits inside a matchbox to a library carved from a single grain of rice. Magnifying glasses are provided at every display. Expect to queue outside for at least forty-five minutes at weekends, as the rooms only hold a few visitors at a time. The gift shop is superb, selling miniature kits you can assemble at home."
        }
      ],
      questions: [
        { q: "Which reviewer complains about the cost of admission?", answer: 1, explanation: "B 抱怨門票價格高得嚇人，與內容不成比例。" },
        { q: "Which museum allows visitors to create something of their own?", answer: 0, explanation: "A 提到工作坊可以自己設計泡麵口味與配料並親手封裝。" },
        { q: "Which reviewer recommends reserving a place before visiting?", answer: 2, explanation: "C 強烈建議提前上網預約，因為導覽好幾天前就會售完。" },
        { q: "Which reviewer mentions waiting a long time to get in?", answer: 3, explanation: "D 說週末要在門外排隊至少四十五分鐘才能進場。" },
        { q: "Which museum is described as ideal for families with children?", answer: 0, explanation: "A 明確說這裡非常適合帶小孩的家庭，孩子玩了一個多小時。" },
        { q: "Which reviewer found the exhibits very funny?", answer: 1, explanation: "B 說失敗發明的展品真的很好笑，讓他多次大笑出聲。" },
        { q: "Which museum can only be seen with a guide?", answer: 2, explanation: "C 提到只能參加九十分鐘的導覽行程，不能自由參觀。" },
        { q: "Which reviewer praises the items on sale at the museum?", answer: 3, explanation: "D 稱讚禮品店很棒，賣可以帶回家組裝的迷你模型。" },
        { q: "Which reviewer warns about a bad smell?", answer: 2, explanation: "C 提醒下水道某些路段有明顯的難聞氣味。" },
        { q: "Which reviewer says the museum is smaller than expected?", answer: 1, explanation: "B 說博物館比網站照片看起來小得多，只有三個小展間。" }
      ]
    },
    {
      id: "f-rmatch2-03",
      title: "A New Career After Forty",
      sections: [
        {
          label: "A",
          text: "Robert, 52: I spent twenty years in investment banking until a serious health scare at forty-five forced me to rethink everything. My doctor told me plainly that the stress was destroying me. I enrolled at my local college to retrain as a professional gardener, and now I design gardens for private clients. I earn far less than I used to, but honestly, I have never been happier, and my blood pressure agrees with me."
        },
        {
          label: "B",
          text: "Angela, 47: I taught geography in a secondary school for nearly two decades before switching to software development. For two years I studied programming through online courses every evening after marking homework, which was exhausting. My biggest fear was being the oldest person in the office, surrounded by graduates half my age, but my new colleagues could not have been more welcoming. Surprisingly, my salary is now considerably higher than it ever was in teaching."
        },
        {
          label: "C",
          text: "Marcus, 55: After twenty-five years as a corporate lawyer, I opened a small neighbourhood bakery at forty-eight. I put my entire life savings into the ovens, the shop lease and the renovation, which terrified my accountant. People assume I have an easier life now, but I actually work far longer hours than I ever did at the law firm, starting at four in the morning. Thankfully my wife and daughter help behind the counter at weekends."
        },
        {
          label: "D",
          text: "Sofia, 49: I was a police officer for twenty-two years, but ever since I was a little girl I had dreamed of writing novels. At forty-four I finally handed in my resignation and finished the crime story I had been planning for decades. My income is very unpredictable now, some months bring almost nothing, and I could never have managed without my husband's steady salary and his constant encouragement during the difficult first years."
        }
      ],
      questions: [
        { q: "Which person now earns more than in their previous career?", answer: 1, explanation: "B 說現在的薪水明顯比當老師時高出許多。" },
        { q: "Which person changed careers because of a health problem?", answer: 0, explanation: "A 在四十五歲時因嚴重的健康警訊，醫生直言壓力正在摧毀他。" },
        { q: "Which person fulfilled an ambition they had had since childhood?", answer: 3, explanation: "D 說從小就夢想寫小說，四十四歲終於辭職完成作品。" },
        { q: "Which person invested all their savings in the new venture?", answer: 2, explanation: "C 把畢生積蓄全投入烤箱、店面租約和裝修。" },
        { q: "Which person was afraid of being older than their colleagues?", answer: 1, explanation: "B 最大的恐懼是成為辦公室裡年紀最大的人，被年輕畢業生包圍。" },
        { q: "Which person works longer hours now than before?", answer: 2, explanation: "C 說現在工時比在律師事務所時更長，清晨四點就開工。" },
        { q: "Which person retrained at a local college?", answer: 0, explanation: "A 到當地學院重新受訓，成為專業園藝師。" },
        { q: "Which person depended on their partner's income?", answer: 3, explanation: "D 說收入很不穩定，全靠丈夫穩定的薪水和鼓勵撐過頭幾年。" },
        { q: "Which person receives help from family members in their business?", answer: 2, explanation: "C 提到太太和女兒週末會到店裡櫃檯幫忙。" },
        { q: "Which person accepts lower pay in return for greater happiness?", answer: 0, explanation: "A 承認收入比以前少很多，但從未如此快樂，健康也改善了。" }
      ]
    },
    {
      id: "f-rmatch2-04",
      title: "How I Learned to Cook",
      sections: [
        {
          label: "A",
          text: "Elena: Everything I know about cooking comes from my grandmother, who let me stand on a stool beside her in the kitchen from the age of six. She never owned a single cookbook; her recipes existed only in her head and were never written down anywhere. She measured with her hands and judged by smell. Her greatest lesson was patience, telling me that a good sauce simply cannot be hurried, no matter how hungry you are."
        },
        {
          label: "B",
          text: "Jake: I taught myself entirely through videos on the internet, pausing and rewinding a thousand times. My early attempts were genuine disasters; once I burned a frying pan so badly that the smoke alarm went off and my neighbours knocked on the door in alarm. But I kept practising every weekend, and these days I cook dinner for my three flatmates almost every night, and they actually request my curry regularly."
        },
        {
          label: "C",
          text: "Nadia: I signed up for an evening cookery course at a college across town, mostly because I was tired of eating toast for dinner. The classes turned out to cost far more than the advertisement had suggested once ingredients were added, which annoyed me at first. However, I cannot complain about the result, because the man chopping onions at the next station is now my husband. I also finally learned proper knife skills."
        },
        {
          label: "D",
          text: "Liam: I picked up everything during a year of travelling through Southeast Asia. Every morning I visited the local markets to buy vegetables, spices and fish, pointing and smiling because I barely spoke a word of the languages. Misunderstanding instructions was a daily event, and I once bought a kilo of chillies instead of peppers. The street food stalls inspired most of the dishes I still cook at home today."
        }
      ],
      questions: [
        { q: "Which person learned recipes that were never written down?", answer: 0, explanation: "A 說祖母沒有食譜書，所有食譜只存在她腦中，從未寫下來。" },
        { q: "Which person accidentally set off an alarm while cooking?", answer: 1, explanation: "B 提到燒焦平底鍋，煙霧警報器大響，連鄰居都來敲門。" },
        { q: "Which person met their future husband or wife while learning?", answer: 2, explanation: "C 說在隔壁料理台切洋蔥的男士後來成了她的丈夫。" },
        { q: "Which person was taught by a member of their family?", answer: 0, explanation: "A 的廚藝全部來自祖母，從六歲起就站在她身旁學習。" },
        { q: "Which person learned to cook while in foreign countries?", answer: 3, explanation: "D 在東南亞旅行一年期間學會做菜。" },
        { q: "Which person found the lessons more expensive than advertised?", answer: 2, explanation: "C 抱怨加上食材費後，課程比廣告寫的貴很多。" },
        { q: "Which person regularly cooks for the people they live with?", answer: 1, explanation: "B 說現在幾乎每晚為三位室友做晚餐，他們還常點他的咖哩。" },
        { q: "Which person bought ingredients at local markets?", answer: 3, explanation: "D 每天早上到當地市場買蔬菜、香料和魚。" },
        { q: "Which person taught themselves using online videos?", answer: 1, explanation: "B 完全靠網路影片自學，不斷暫停和倒帶練習。" },
        { q: "Which person had difficulty understanding another language?", answer: 3, explanation: "D 幾乎不會當地語言，只能比手畫腳，還曾誤買一公斤辣椒。" }
      ]
    }
  ];
  if (typeof module !== "undefined" && module.exports) { module.exports = BANK; return; }
  window.READING = window.READING || { mc: [], gap: [], match: [] };
  window.READING.match = window.READING.match.concat(BANK);
})();
