/* FCE Prep extra bank: writing */
(function () {
  var BANK = [
    /* ---------- Part 1 Essays (18) ---------- */
    {
      id: "fwx01",
      part: 1,
      type: "Essay",
      title: "Essay — 學校制服",
      length: "140–190 words",
      task: "In your English class you have been talking about school life. Now your teacher has asked you to write an essay. 'All secondary school students should wear a school uniform. Do you agree?' Write about: 1. equality between students, 2. personal freedom, 3. (your own idea).",
      checklist: [
        "Content：兩個 notes（equality、freedom）加自己的想法都要處理，並明確回答是否同意",
        "Communicative Achievement：essay 語域—中立正式，不用口語縮寫過多",
        "Organisation：Intro → 論點段落 → Conclusion，每段一個主要論點",
        "Language：對比連接詞（whereas, on the other hand）與意見句型使用正確"
      ],
      model: "Model outline — Intro: uniforms are common, but are they a good idea? Para 2 (equality): everyone looks the same, so nobody is judged by expensive clothes. Para 3 (freedom): clothes are a way to express personality, and teenagers value that. Para 4 (own idea): uniforms save time and arguments in the morning. Conclusion: on balance, I agree, because equality matters more than fashion."
    },
    {
      id: "fwx02",
      part: 1,
      type: "Essay",
      title: "Essay — 線上學習",
      length: "140–190 words",
      task: "In your English class you have been talking about education. Now your teacher has asked you to write an essay. 'Studying online is just as good as studying in a classroom. Do you agree?' Write about: 1. contact with teachers, 2. flexibility, 3. (your own idea).",
      checklist: [
        "Content：teachers、flexibility 與自己的想法三點齊全，回答『是否一樣好』",
        "Communicative Achievement：客觀比較兩種學習方式，避免只寫個人經驗",
        "Organisation：advantages / disadvantages 分段清楚，段落間有銜接詞",
        "Language：比較級與讓步句（Although…, Even though…）正確使用"
      ],
      model: "Model outline — Intro: online courses are everywhere, but can a screen replace a classroom? Para 2 (teachers): in class you can ask questions instantly; online replies can take days. Para 3 (flexibility): online learners study anywhere and repeat lessons. Para 4 (own idea): classmates provide motivation that videos cannot. Conclusion: I partly agree — online works for independent learners, but classrooms suit most people better."
    },
    {
      id: "fwx03",
      part: 1,
      type: "Essay",
      title: "Essay — 免費大眾運輸",
      length: "140–190 words",
      task: "In your English class you have been talking about transport in cities. Now your teacher has asked you to write an essay. 'Public transport should be free for everyone. Do you agree?' Write about: 1. traffic and pollution, 2. who pays for it, 3. (your own idea).",
      checklist: [
        "Content：交通污染、經費來源、自己的想法三點都要有明確論述",
        "Communicative Achievement：essay 需權衡利弊，語氣中立而有立場",
        "Organisation：一段一論點，結論呼應開頭問題",
        "Language：因果連接（as a result, therefore）與條件句運用自然"
      ],
      model: "Model outline — Intro: cities are choking on traffic; would free buses help? Para 2 (pollution): free transport encourages drivers to leave cars at home, cutting emissions. Para 3 (cost): somebody must pay — probably through higher taxes, which many oppose. Para 4 (own idea): cheaper tickets for students and the elderly might be a fairer compromise. Conclusion: I disagree with totally free transport, but strongly support lower fares."
    },
    {
      id: "fwx04",
      part: 1,
      type: "Essay",
      title: "Essay — 青少年打工",
      length: "140–190 words",
      task: "In your English class you have been talking about work. Now your teacher has asked you to write an essay. 'Teenagers should have a part-time job while they are still at school. Do you agree?' Write about: 1. schoolwork, 2. learning about money, 3. (your own idea).",
      checklist: [
        "Content：課業影響、金錢觀念、自己的想法都要討論並下結論",
        "Communicative Achievement：面向青少年議題仍保持 essay 的正式語氣",
        "Organisation：清楚的 intro / body / conclusion，論點不重複",
        "Language：義務與建議句型（should, ought to, it is worth -ing）"
      ],
      model: "Model outline — Intro: many teenagers work at weekends, but is it wise? Para 2 (schoolwork): a job takes hours that could be spent studying or resting. Para 3 (money): earning your own salary teaches budgeting better than any lesson. Para 4 (own idea): work experience makes a CV stronger for future applications. Conclusion: I agree, provided the job is limited to a few hours a week."
    },
    {
      id: "fwx05",
      part: 1,
      type: "Essay",
      title: "Essay — 動物園存廢",
      length: "140–190 words",
      task: "In your English class you have been talking about animals. Now your teacher has asked you to write an essay. 'Zoos do more harm than good. Do you agree?' Write about: 1. protecting endangered species, 2. animal welfare, 3. (your own idea).",
      checklist: [
        "Content：保育功能、動物福利、自己的想法（如教育功能）都要提到",
        "Communicative Achievement：呈現兩面論點後給出清楚立場",
        "Organisation：正反論點分段，避免在同一段內跳來跳去",
        "Language：被動語態（are kept, are protected）與評價形容詞"
      ],
      model: "Model outline — Intro: zoos attract millions of visitors, yet critics call them prisons. Para 2 (species): breeding programmes have saved animals that would otherwise be extinct. Para 3 (welfare): small cages and crowds cause stress that no animal deserves. Para 4 (own idea): modern zoos educate children who may become tomorrow's conservationists. Conclusion: I disagree — well-run zoos do more good than harm."
    },
    {
      id: "fwx06",
      part: 1,
      type: "Essay",
      title: "Essay — 校內手機禁令",
      length: "140–190 words",
      task: "In your English class you have been talking about technology. Now your teacher has asked you to write an essay. 'Mobile phones should be banned in schools. Do you agree?' Write about: 1. concentration in lessons, 2. safety and emergencies, 3. (your own idea).",
      checklist: [
        "Content：專注力、緊急聯絡、自己的想法三個角度都要涵蓋",
        "Communicative Achievement：不要變成抱怨文，維持論說文格式",
        "Organisation：論點先後有邏輯（先讓步再反駁效果佳）",
        "Language：讓步與反駁（Admittedly…, However…）句型"
      ],
      model: "Model outline — Intro: phones are part of teenage life, but do they belong in school? Para 2 (concentration): notifications interrupt lessons and tempt students to check social media. Para 3 (safety): parents feel safer knowing they can reach their children at any time. Para 4 (own idea): phones can be learning tools — dictionaries, calculators, research. Conclusion: I disagree with a total ban; strict rules during lessons are enough."
    },
    {
      id: "fwx07",
      part: 1,
      type: "Essay",
      title: "Essay — 速食普及",
      length: "140–190 words",
      task: "In your English class you have been talking about food. Now your teacher has asked you to write an essay. 'Fast food is becoming too popular and this is a serious problem. Do you agree?' Write about: 1. health, 2. price and convenience, 3. (your own idea).",
      checklist: [
        "Content：健康影響、便宜方便的吸引力、自己的想法都要寫",
        "Communicative Achievement：以事實與例子支持論點而非情緒字眼",
        "Organisation：段落主題句明確，結尾重申立場",
        "Language：數量與程度表達（a great deal of, increasingly, far more）"
      ],
      model: "Model outline — Intro: burger chains open daily around the world — should we worry? Para 2 (health): fast food is high in fat, salt and sugar, and obesity rates keep rising. Para 3 (convenience): busy workers and students choose it because it is cheap and quick. Para 4 (own idea): schools could teach cooking so young people have real alternatives. Conclusion: I agree it is a problem, but education is better than blame."
    },
    {
      id: "fwx08",
      part: 1,
      type: "Essay",
      title: "Essay — 家庭作業價值",
      length: "140–190 words",
      task: "In your English class you have been talking about studying. Now your teacher has asked you to write an essay. 'Homework does not really help students learn. Do you agree?' Write about: 1. practising what you learn, 2. free time and stress, 3. (your own idea).",
      checklist: [
        "Content：練習效果、壓力與休閒、自己的想法三點齊備",
        "Communicative Achievement：以學生角度寫但避免抱怨語氣",
        "Organisation：正反並陳後在結論表態",
        "Language：目的與結果句型（so that, in order to, leads to）"
      ],
      model: "Model outline — Intro: every student knows homework, but does it actually teach us anything? Para 2 (practice): revising at home fixes new grammar or formulas in the memory. Para 3 (stress): hours of exercises leave no time for sport, hobbies or family. Para 4 (own idea): quality matters more than quantity — one thoughtful task beats twenty repetitive ones. Conclusion: I disagree with the statement, but homework should be shorter and smarter."
    },
    {
      id: "fwx09",
      part: 1,
      type: "Essay",
      title: "Essay — 名人榜樣",
      length: "140–190 words",
      task: "In your English class you have been talking about fame. Now your teacher has asked you to write an essay. 'Celebrities make good role models for young people. Do you agree?' Write about: 1. hard work and success, 2. lifestyle shown on social media, 3. (your own idea).",
      checklist: [
        "Content：努力成功的一面、社群媒體形象、自己的想法都要討論",
        "Communicative Achievement：舉例可提『某類名人』而非八卦細節",
        "Organisation：每段聚焦一個 note，段落長度平均",
        "Language：泛指表達（those who…, many of them）避免重複 celebrities"
      ],
      model: "Model outline — Intro: teenagers follow stars online every day, but should they copy them? Para 2 (hard work): top athletes and musicians show that years of practice bring success. Para 3 (social media): perfect photos and luxury lifestyles create unrealistic expectations. Para 4 (own idea): parents and teachers influence young people more directly than any star. Conclusion: I partly agree — some celebrities inspire, but they should not be the only models."
    },
    {
      id: "fwx10",
      part: 1,
      type: "Essay",
      title: "Essay — 市中心禁車",
      length: "140–190 words",
      task: "In your English class you have been talking about the environment. Now your teacher has asked you to write an essay. 'Cars should be banned from city centres. Do you agree?' Write about: 1. air quality, 2. people who need to drive, 3. (your own idea).",
      checklist: [
        "Content：空氣品質、必要駕駛者（殘障、送貨等）、自己的想法",
        "Communicative Achievement：政策類議題需考量不同族群觀點",
        "Organisation：先優點後困難，或反之，順序一致",
        "Language：假設句（If cars were banned, …would…）自然使用"
      ],
      model: "Model outline — Intro: city air is dirty and streets are jammed — is banning cars the answer? Para 2 (air): fewer engines mean cleaner air and quieter, safer streets for walking. Para 3 (drivers): delivery vans, disabled residents and shift workers cannot simply take a bus. Para 4 (own idea): charging drivers a fee, as some cities do, reduces traffic without a full ban. Conclusion: I disagree with a complete ban; smart restrictions work better."
    },
    {
      id: "fwx11",
      part: 1,
      type: "Essay",
      title: "Essay — 學習外語必要性",
      length: "140–190 words",
      task: "In your English class you have been talking about languages. Now your teacher has asked you to write an essay. 'Everyone should learn at least one foreign language at school. Do you agree?' Write about: 1. future careers, 2. understanding other cultures, 3. (your own idea).",
      checklist: [
        "Content：職涯優勢、文化理解、自己的想法（如翻譯科技）都要有",
        "Communicative Achievement：主題與英語學習相關，可舉自身以外的例子",
        "Organisation：introduction 點出議題，conclusion 給明確答案",
        "Language：未來與可能性（will be able to, is likely to）表達"
      ],
      model: "Model outline — Intro: in a connected world, is one language ever enough? Para 2 (careers): companies trade globally, and bilingual employees get better opportunities. Para 3 (culture): learning a language opens the door to films, music and ways of thinking. Para 4 (own idea): although translation apps improve, real conversation still needs human skill. Conclusion: I fully agree — languages are an investment every school should make."
    },
    {
      id: "fwx12",
      part: 1,
      type: "Essay",
      title: "Essay — 體育必修",
      length: "140–190 words",
      task: "In your English class you have been talking about health. Now your teacher has asked you to write an essay. 'Sport should be a compulsory subject at school for all ages. Do you agree?' Write about: 1. physical health, 2. students who prefer other activities, 3. (your own idea).",
      checklist: [
        "Content：健康益處、不愛運動學生的立場、自己的想法",
        "Communicative Achievement：兼顧不同學生觀點，展現公平討論",
        "Organisation：論點段各有主題句與支持例子",
        "Language：頻率與義務用語（regularly, be required to, make sb do）"
      ],
      model: "Model outline — Intro: screens keep teenagers sitting still — should schools force them to move? Para 2 (health): regular exercise fights obesity and improves concentration in other lessons. Para 3 (other interests): forcing an artistic student onto a football pitch can destroy motivation. Para 4 (own idea): offering choices — dance, swimming, climbing — keeps sport compulsory but enjoyable. Conclusion: I agree, as long as students can choose the activity."
    },
    {
      id: "fwx13",
      part: 1,
      type: "Essay",
      title: "Essay — 網購與在地商店",
      length: "140–190 words",
      task: "In your English class you have been talking about shopping. Now your teacher has asked you to write an essay. 'Shopping online is better than shopping in local shops. Do you agree?' Write about: 1. choice and price, 2. the effect on the local community, 3. (your own idea).",
      checklist: [
        "Content：選擇價格、社區影響、自己的想法（如退貨、環保）",
        "Communicative Achievement：比較文需兩邊都給篇幅",
        "Organisation：比較結構清楚（one advantage / another drawback）",
        "Language：比較與對比語言（far cheaper, unlike, in contrast）"
      ],
      model: "Model outline — Intro: a few clicks or a walk down the high street — which wins? Para 2 (choice): online stores offer endless products at lower prices, delivered to the door. Para 3 (community): when local shops close, town centres become empty and jobs disappear. Para 4 (own idea): in a shop you can touch products and get advice from real people. Conclusion: I disagree overall — convenience should not cost us our communities."
    },
    {
      id: "fwx14",
      part: 1,
      type: "Essay",
      title: "Essay — 博物館免費",
      length: "140–190 words",
      task: "In your English class you have been talking about culture. Now your teacher has asked you to write an essay. 'Museums and art galleries should be free for everyone. Do you agree?' Write about: 1. access to culture, 2. money for running the museums, 3. (your own idea).",
      checklist: [
        "Content：文化近用、營運經費、自己的想法三點完整",
        "Communicative Achievement：抽象議題要用具體例子支撐",
        "Organisation：段落銜接自然（Firstly, In addition, Nevertheless）",
        "Language：名詞化與正式語彙（admission, funding, access）"
      ],
      model: "Model outline — Intro: culture belongs to everyone, but someone has to pay the electricity bill. Para 2 (access): free entry lets families and students visit regardless of income. Para 3 (funding): without ticket money, museums depend on governments or donations, which are not guaranteed. Para 4 (own idea): free entry on certain days combines access with income. Conclusion: I agree in principle, with practical compromises like free weekends."
    },
    {
      id: "fwx15",
      part: 1,
      type: "Essay",
      title: "Essay — 電視的教育價值",
      length: "140–190 words",
      task: "In your English class you have been talking about the media. Now your teacher has asked you to write an essay. 'Watching television is a waste of time. Do you agree?' Write about: 1. documentaries and news, 2. time spent watching, 3. (your own idea).",
      checklist: [
        "Content：教育性節目、觀看時間、自己的想法（如全家共處）",
        "Communicative Achievement：避免絕對化字眼（always, never）過多",
        "Organisation：讓步—反駁結構或利弊並列皆可，但要一致",
        "Language：動名詞主語（Watching…, Spending hours…）運用"
      ],
      model: "Model outline — Intro: television is blamed for many things, but is it really wasted time? Para 2 (documentaries): nature programmes and news teach viewers about the world in an entertaining way. Para 3 (time): hours in front of any screen replace exercise, reading and conversation. Para 4 (own idea): what matters is choosing programmes actively instead of watching whatever is on. Conclusion: I disagree — television wastes time only when we let it."
    },
    {
      id: "fwx16",
      part: 1,
      type: "Essay",
      title: "Essay — 學校教理財",
      length: "140–190 words",
      task: "In your English class you have been talking about life skills. Now your teacher has asked you to write an essay. 'Schools should teach students how to manage money. Do you agree?' Write about: 1. preparing for adult life, 2. time taken from other subjects, 3. (your own idea).",
      checklist: [
        "Content：成人生活準備、排擠其他科目、自己的想法（如家庭角色）",
        "Communicative Achievement：實用議題仍需正式論述架構",
        "Organisation：結論提出具體可行的建議加分",
        "Language：必要性表達（essential, crucial, there is no point in）"
      ],
      model: "Model outline — Intro: young adults sign phone contracts and take loans — but who taught them how? Para 2 (adult life): budgeting, saving and understanding interest are skills everyone needs. Para 3 (timetable): school days are already full, and adding subjects means cutting others. Para 4 (own idea): money topics could fit inside maths lessons instead of being separate. Conclusion: I strongly agree — financial education prevents expensive mistakes later."
    },
    {
      id: "fwx17",
      part: 1,
      type: "Essay",
      title: "Essay — 電玩利弊",
      length: "140–190 words",
      task: "In your English class you have been talking about free time. Now your teacher has asked you to write an essay. 'Playing video games has more advantages than disadvantages for teenagers. Do you agree?' Write about: 1. skills that games develop, 2. time and health, 3. (your own idea).",
      checklist: [
        "Content：遊戲培養的能力、時間健康代價、自己的想法（如社交）",
        "Communicative Achievement：避免只站在玩家立場，需平衡討論",
        "Organisation：advantages 與 disadvantages 段落對稱",
        "Language：技能相關詞彙（problem-solving, reactions, teamwork）"
      ],
      model: "Model outline — Intro: parents worry, teenagers play on — who is right about video games? Para 2 (skills): strategy games train planning, and online play teaches teamwork across countries. Para 3 (health): long sessions damage sleep, eyesight and fitness. Para 4 (own idea): games connect shy teenagers with friends who share their interests. Conclusion: I agree, but only when playing time is kept under control."
    },
    {
      id: "fwx18",
      part: 1,
      type: "Essay",
      title: "Essay — 在地或出國度假",
      length: "140–190 words",
      task: "In your English class you have been talking about holidays. Now your teacher has asked you to write an essay. 'It is better to spend your holidays in your own country than to go abroad. Do you agree?' Write about: 1. cost, 2. discovering new things, 3. (your own idea).",
      checklist: [
        "Content：費用、新鮮體驗、自己的想法（如環境影響）三點齊全",
        "Communicative Achievement：比較式 essay，避免變成遊記",
        "Organisation：兩個選項比較的框架前後一致",
        "Language：偏好與比較（would rather, it is worth, less tiring than）"
      ],
      model: "Model outline — Intro: when the holidays arrive, should we book a flight or explore our own region? Para 2 (cost): staying local saves money on flights and hotels, so holidays can be longer. Para 3 (discovery): foreign countries offer new languages, food and customs that home cannot. Para 4 (own idea): short flights harm the environment, which matters more every year. Conclusion: I partly agree — home holidays suit most years, with occasional trips abroad."
    },

    /* ---------- Part 2: Articles (8) ---------- */
    {
      id: "fwx19",
      part: 2,
      type: "Article",
      title: "Article — A hobby that changed my life",
      length: "140–190 words",
      task: "You see this announcement on an English-language website for young people: 'Articles wanted! A HOBBY THAT CHANGED MY LIFE — What is the hobby? How did you start it? How has it changed you? The best articles will be published next month.' Write your article.",
      checklist: [
        "Content：嗜好是什麼、怎麼開始、如何改變你，三個問題都答",
        "Communicative Achievement：article 要吸引讀者—開頭可用問句或驚喜句",
        "Organisation：有標題，段落各答一問，結尾給讀者建議或感想",
        "Language：敘事時態（past simple / present perfect）與感受形容詞"
      ],
      model: "Model opening — Two years ago I could not run for a bus without losing my breath. Then a friend dragged me to a beginners' climbing class, and everything changed. In this article I want to explain why hanging off a wall became the best part of my week."
    },
    {
      id: "fwx20",
      part: 2,
      type: "Article",
      title: "Article — 我最崇拜的人",
      length: "140–190 words",
      task: "You see this announcement in an international English-language magazine: 'SOMEONE I REALLY ADMIRE — Who is the person? What have they done? Why do you admire them so much? Write us an article answering these questions. We will publish the most interesting ones.' Write your article.",
      checklist: [
        "Content：人物、事蹟、崇拜原因三個問題完整回答",
        "Communicative Achievement：語氣熱情但具體，用小故事說服讀者",
        "Organisation：開頭引起好奇（先不說是誰也可以），結尾總結影響",
        "Language：性格形容詞（determined, generous, down-to-earth）"
      ],
      model: "Model opening — She has never won a prize, appeared on television or written a book, yet she is the most impressive person I know. My grandmother raised four children alone while running a tiny shop, and she still finds energy to laugh every single day."
    },
    {
      id: "fwx21",
      part: 2,
      type: "Article",
      title: "Article — 不能沒有的科技",
      length: "140–190 words",
      task: "You see this announcement on an English-language technology website: 'Articles wanted! A PIECE OF TECHNOLOGY I COULD NOT LIVE WITHOUT — What is it? How do you use it every day? Would your life really be worse without it? The best articles win a bluetooth speaker.' Write your article.",
      checklist: [
        "Content：是什麼、每天怎麼用、沒有它會怎樣，三問都要答",
        "Communicative Achievement：輕鬆幽默的 article 語氣，可自嘲",
        "Organisation：標題吸睛，段落分明，收尾呼應開頭",
        "Language：日常習慣表達（I tend to, I can't help -ing, whenever）"
      ],
      model: "Model opening — Confession time: the first thing I touch every morning is not my alarm clock but my wireless earphones. From podcasts on the bus to language lessons while washing dishes, these tiny devices have quietly taken over my daily routine — and honestly, I would not want them back out of my life."
    },
    {
      id: "fwx22",
      part: 2,
      type: "Article",
      title: "Article — 最棒的季節",
      length: "140–190 words",
      task: "You see this announcement on your college English-language website: 'THE BEST SEASON OF THE YEAR — Which season do you like most? What do you enjoy doing then? Why is it better than the other seasons? Write us an article. The best ones will appear on the site.' Write your article.",
      checklist: [
        "Content：哪個季節、做什麼活動、為何勝過其他季節",
        "Communicative Achievement：用五感描寫讓讀者身歷其境",
        "Organisation：描寫段與比較段分開，結尾邀請讀者認同",
        "Language：天氣與感官詞彙（crisp air, golden leaves, the smell of rain）"
      ],
      model: "Model opening — Some people live for summer beaches, but I count the days until October. Autumn paints the streets gold, fills the air with the smell of roasted chestnuts, and finally makes it cool enough to enjoy a long walk without melting."
    },
    {
      id: "fwx23",
      part: 2,
      type: "Article",
      title: "Article — 難忘的一餐",
      length: "140–190 words",
      task: "You see this announcement on an English-language food blog: 'Articles wanted! A MEAL I WILL NEVER FORGET — Where were you? What did you eat? Why was it so memorable? Send us your article — the best ones will be published on the blog.' Write your article.",
      checklist: [
        "Content：地點、食物、難忘原因三個問題都回答",
        "Communicative Achievement：說故事的口吻，讓讀者聞得到味道",
        "Organisation：時間順序清楚，高潮放在『為何難忘』",
        "Language：食物描寫（crispy, melt-in-the-mouth, home-made）與過去時態"
      ],
      model: "Model opening — It was past midnight, we were lost in a mountain village, and every restaurant was closed. Then an old lady opened her door and offered us the simplest meal of my life: fresh bread, tomatoes from her garden and soup that tasted of kindness."
    },
    {
      id: "fwx24",
      part: 2,
      type: "Article",
      title: "Article — 理想的週末",
      length: "140–190 words",
      task: "You see this announcement in an English-language student magazine: 'MY PERFECT WEEKEND — What would you do? Who would you spend it with? Why would it be so special? Write us an article answering these questions. We will print the best ones in our next issue.' Write your article.",
      checklist: [
        "Content：活動、同伴、特別原因三點完整",
        "Communicative Achievement：想像類文章可用 would 營造夢想感",
        "Organisation：週六／週日或早中晚的時間軸讓文章好讀",
        "Language：假設與願望（If I could…, I would spend…, ideally）"
      ],
      model: "Model opening — No alarms, no homework, no notifications — my perfect weekend starts with silence. Then my two best friends arrive with their bikes, and we head for the coast with nothing planned except sunshine and fried noodles from our favourite stall."
    },
    {
      id: "fwx25",
      part: 2,
      type: "Article",
      title: "Article — 讓小鎮更好",
      length: "140–190 words",
      task: "You see this announcement on an English-language community website: 'ONE THING THAT WOULD MAKE MY TOWN BETTER — What does your town need? Why would it help? Who would use it? Write us an article. The town council will read the most popular suggestions.' Write your article.",
      checklist: [
        "Content：需要什麼、為何有幫助、誰會使用，三問齊答",
        "Communicative Achievement：article 兼具說服力—讀者是居民與議會",
        "Organisation：問題→建議→好處的邏輯線清楚",
        "Language：建議與說服（What we really need is…, Imagine if…）"
      ],
      model: "Model opening — Ask any teenager in my town what there is to do on a rainy Sunday, and you will get the same answer: nothing. That is why I believe an indoor sports and arts centre would transform life here for young and old alike."
    },
    {
      id: "fwx26",
      part: 2,
      type: "Article",
      title: "Article — 學英文的方法",
      length: "140–190 words",
      task: "You see this announcement on an English-language learning website: 'Articles wanted! HOW I IMPROVED MY ENGLISH — What methods worked for you? What was difficult? What advice would you give other learners? The best articles will be shared with our readers worldwide.' Write your article.",
      checklist: [
        "Content：有效方法、遇到的困難、給讀者的建議三點都寫",
        "Communicative Achievement：以同學口吻分享，親切但有料",
        "Organisation：方法可條列式融入段落，結尾一句鼓勵",
        "Language：學習相關動詞（pick up, look up, get used to）"
      ],
      model: "Model opening — I used to think English lived only in textbooks — until I changed the language on my phone and joined an online gaming team from three different countries. Suddenly, English was not a subject any more; it was the only way to win."
    },

    /* ---------- Part 2: Email / Letter (8) ---------- */
    {
      id: "fwx27",
      part: 2,
      type: "Email/Letter",
      title: "Email — 朋友來訪",
      length: "140–190 words",
      task: "You have received this email from your English-speaking friend Sam: 'Great news — I'm coming to your town for a week in August! What's the weather like then? What should I pack? And what can we do together while I'm there? Can't wait! Sam.' Write your email.",
      checklist: [
        "Content：天氣、行李建議、一起做的活動三個問題都回覆",
        "Communicative Achievement：非正式 email—縮寫、驚嘆、친切開頭結尾",
        "Organisation：開頭回應好消息，一段答一題，結尾期待見面",
        "Language：非正式用語（Guess what, You'd better bring, We could…）"
      ],
      model: "Model opening — Hi Sam! That's fantastic news — August is actually the best month to visit. Fair warning though: it gets seriously hot here, often over 33 degrees, so leave your jeans at home and pack shorts, sunglasses and your swimming stuff."
    },
    {
      id: "fwx28",
      part: 2,
      type: "Email/Letter",
      title: "Letter — 應徵夏令營助理",
      length: "140–190 words",
      task: "You see this advertisement in an English-language newspaper: 'SUMMER CAMP HELPERS WANTED — We need friendly young people to help run activities (sports, art, games) for children aged 8–12 in July. Good English needed. Tell us why you would be suitable and which activities you could help with. Write to Mrs Reed.' Write your letter of application.",
      checklist: [
        "Content：說明適任原因與可帶的活動，回應廣告所有要求",
        "Communicative Achievement：正式書信—Dear Mrs Reed、無縮寫、客氣結尾",
        "Organisation：目的→經驗與特質→可帶活動→期待回覆",
        "Language：正式應徵句型（I am writing to apply for…, I would be grateful if…）"
      ],
      model: "Model opening — Dear Mrs Reed, I am writing to apply for the position of summer camp helper advertised in Tuesday's newspaper. I am seventeen years old, I have looked after my younger cousins for several summers, and I believe my patience and energy make me well suited to working with children."
    },
    {
      id: "fwx29",
      part: 2,
      type: "Email/Letter",
      title: "Email — 生日派對心得",
      length: "140–190 words",
      task: "You have received this email from your English-speaking friend Alex: 'I heard you went to your cousin's surprise birthday party at the weekend! Was the surprise a success? What was the party like? Did anything funny happen? Tell me everything! Alex.' Write your email.",
      checklist: [
        "Content：驚喜成功與否、派對情況、趣事三個問題都答",
        "Communicative Achievement：說故事給好友聽的興奮語氣",
        "Organisation：時間順序敘事，趣事當高潮，結尾互動問句",
        "Language：敘事連接詞（at first, suddenly, in the end）與過去時態"
      ],
      model: "Model opening — Hey Alex! You won't believe how the party went. We all hid behind the sofa for twenty minutes, and when my cousin finally walked in, she screamed so loudly that the neighbours came to check if everything was OK!"
    },
    {
      id: "fwx30",
      part: 2,
      type: "Email/Letter",
      title: "Email — 選社團建議",
      length: "140–190 words",
      task: "You have received this email from your English-speaking friend Jo: 'My new school lets us choose one after-school club — drama, photography or basketball — and I can't decide! You know me well. Which one do you think I should pick, and why? What are the good and bad points of each? Jo.' Write your email.",
      checklist: [
        "Content：給出明確推薦並比較三個選項的優缺點",
        "Communicative Achievement：朋友間給建議—直接但貼心",
        "Organisation：先同理→逐一比較→明確建議收尾",
        "Language：建議句型（If I were you, You've always been good at, Why not…?）"
      ],
      model: "Model opening — Hi Jo! Lucky you — my school never gave us choices like that. Honestly though, I don't think this is a hard decision at all. Remember how you kept borrowing my camera all last summer and refused to give it back? That tells you something!"
    },
    {
      id: "fwx31",
      part: 2,
      type: "Email/Letter",
      title: "Letter — 語言學校詢問",
      length: "140–190 words",
      task: "You saw this advertisement on an English-language website: 'CLIFTON LANGUAGE SCHOOL — Summer English courses by the sea! All levels. Accommodation with local families available.' You are interested but you need more information. Write a letter to the school asking about course dates and prices, class sizes, and what the host families provide.",
      checklist: [
        "Content：三項詢問（日期價格、班級人數、寄宿家庭內容）都要問到",
        "Communicative Achievement：半正式書信—禮貌請求資訊",
        "Organisation：說明來意→分段提問→感謝與期待回覆",
        "Language：間接問句（Could you tell me whether…, I would like to know…）"
      ],
      model: "Model opening — Dear Sir or Madam, I am writing in response to your advertisement for summer English courses, which I saw on your website last week. Before enrolling, I would be grateful if you could answer a few questions about the courses and the accommodation you offer."
    },
    {
      id: "fwx32",
      part: 2,
      type: "Email/Letter",
      title: "Email — 借宿道謝",
      length: "140–190 words",
      task: "You have just returned home after staying with your English-speaking friend Charlie's family for a week. Write an email to Charlie thanking the family, saying what you enjoyed most about the stay, and inviting Charlie to visit you next summer.",
      checklist: [
        "Content：道謝、最喜歡的部分、邀請回訪三個功能都要完成",
        "Communicative Achievement：溫暖真誠的非正式語氣",
        "Organisation：謝→回憶亮點→邀請與具體提案→結尾",
        "Language：感謝與邀請句型（Thanks a million for…, How about coming…?）"
      ],
      model: "Model opening — Hi Charlie! I got home last night, and the house feels strangely quiet without your dog stealing my socks. I just wanted to say a huge thank you to you and your parents — that week was easily the best holiday I've had in years."
    },
    {
      id: "fwx33",
      part: 2,
      type: "Email/Letter",
      title: "Email — 手機遺失求助後續",
      length: "140–190 words",
      task: "You have received this email from your English-speaking friend Robin: 'Disaster — I'm visiting your country next month and I've just read that my phone might not work there! How do people usually pay for things where you live? Is public wifi easy to find? And is there anything else I should sort out before I arrive? Robin.' Write your email.",
      checklist: [
        "Content：付款方式、wifi、其他行前建議三問都回答",
        "Communicative Achievement：安撫朋友＋實用資訊的平衡",
        "Organisation：先安撫→逐題回答→結尾表示期待",
        "Language：安撫與建議（Don't panic, Make sure you…, It might be worth -ing）"
      ],
      model: "Model opening — Hi Robin! Take a deep breath — it's really not a disaster. Most shops here accept foreign bank cards, and street markets prefer cash, so just bring both and you'll be fine. As for wifi, almost every café and metro station has a free network."
    },
    {
      id: "fwx34",
      part: 2,
      type: "Email/Letter",
      title: "Letter — 向校長提議",
      length: "140–190 words",
      task: "The principal of your college has asked students to write letters suggesting one way to make new students feel welcome in their first week. Write a letter to the principal describing your idea, explaining why it would help, and saying what the college would need to provide.",
      checklist: [
        "Content：提出構想、說明幫助、列出學校需提供的資源",
        "Communicative Achievement：正式但有建設性的語氣，對象是校長",
        "Organisation：目的→構想細節→好處→所需資源→客氣收尾",
        "Language：正式建議句型（I would like to suggest…, This would enable…）"
      ],
      model: "Model opening — Dear Principal, I am writing in response to your request for suggestions on welcoming new students. I would like to propose a 'buddy scheme', in which every first-year student is paired with a volunteer from the second year for their first month at the college."
    },

    /* ---------- Part 2: Reports (7) ---------- */
    {
      id: "fwx35",
      part: 2,
      type: "Report",
      title: "Report — 學校餐廳改善",
      length: "140–190 words",
      task: "Your college principal wants to improve the college canteen and has asked students for their views. Write a report for the principal describing what students think of the food and the seating, and recommending two changes the canteen should make.",
      checklist: [
        "Content：食物意見、座位意見、兩項具體建議都要涵蓋",
        "Communicative Achievement：report 語域—客觀、非個人化、對象是校長",
        "Organisation：標題與小標（Introduction / Findings / Recommendations）",
        "Language：報告用語（The aim of this report, The majority of students, It is recommended that）"
      ],
      model: "Model outline — Introduction: this report presents students' views on the canteen and suggests improvements. Food: most students find the menu repetitive and would like more vegetarian choices. Seating: at lunchtime there are not enough tables, so many eat standing. Recommendations: introduce a weekly rotating menu and extend lunch service by thirty minutes to reduce crowding."
    },
    {
      id: "fwx36",
      part: 2,
      type: "Report",
      title: "Report — 校外教學評估",
      length: "140–190 words",
      task: "Your class recently went on a day trip to a science museum, and your teacher has asked you to write a report. Describe what the class did during the visit, explain what students liked and disliked, and say whether you would recommend the trip for next year's class.",
      checklist: [
        "Content：活動內容、好惡回饋、是否推薦三部分俱全",
        "Communicative Achievement：中立評估語氣，寫給老師看",
        "Organisation：小標分節，結論明確表態是否推薦",
        "Language：評估語言（overall, however, the main drawback was）"
      ],
      model: "Model outline — Introduction: this report evaluates the recent class visit to the City Science Museum. Activities: the class attended a robotics workshop and explored the space exhibition. Feedback: students loved the hands-on experiments, but many felt the guided tour was too long. Recommendation: the trip is worth repeating next year, ideally with more free time in the interactive halls."
    },
    {
      id: "fwx37",
      part: 2,
      type: "Report",
      title: "Report — 鎮上青少年休閒設施",
      length: "140–190 words",
      task: "An international student organisation is collecting information about facilities for young people around the world. Write a report describing the sports and entertainment facilities for teenagers in your town, explaining which are the most popular, and suggesting one facility your town needs.",
      checklist: [
        "Content：現有設施、最受歡迎者、一項新設施建議",
        "Communicative Achievement：寫給國際組織—客觀介紹，不需在地細節術語",
        "Organisation：分節（Sports / Entertainment / Suggestion）條理分明",
        "Language：描述與量化（a wide range of, poorly equipped, well attended）"
      ],
      model: "Model outline — Introduction: this report outlines what my town offers teenagers. Sports: there is a public swimming pool and several football pitches; the skate park is by far the most popular spot. Entertainment: apart from one small cinema, options are limited. Suggestion: the town urgently needs a low-cost music and arts space where young people can meet indoors."
    },
    {
      id: "fwx38",
      part: 2,
      type: "Report",
      title: "Report — 學生科技使用",
      length: "140–190 words",
      task: "Your teacher is researching how students use technology for their studies and has asked you to write a report. Describe which devices and apps students in your class use for schoolwork, explain the main problems they experience, and recommend one way the school could help.",
      checklist: [
        "Content：使用的裝置與 app、主要問題、一項學校可行的協助",
        "Communicative Achievement：以調查發現的口吻概括同學情況",
        "Organisation：Findings 與 Recommendation 清楚分節",
        "Language：概括表達（most students, a significant number, tend to）"
      ],
      model: "Model outline — Introduction: this report summarises how students in my class use technology for study. Devices and apps: nearly everyone uses a smartphone for dictionaries and flashcards, while about half use a laptop for essays. Problems: slow school wifi and the distraction of social media are mentioned most often. Recommendation: the school should upgrade the wifi and run a short workshop on focused study apps."
    },
    {
      id: "fwx39",
      part: 2,
      type: "Report",
      title: "Report — 圖書館使用情況",
      length: "140–190 words",
      task: "The director of your local library wants to attract more young visitors and has asked for a report. Describe how often young people currently use the library and what they use it for, and recommend two changes that would bring more teenagers in.",
      checklist: [
        "Content：使用頻率、使用目的、兩項改善建議",
        "Communicative Achievement：對圖書館主任—正式、建設性",
        "Organisation：Current use → Recommendations 的報告結構",
        "Language：建議句（It would be advisable to, One option would be to）"
      ],
      model: "Model outline — Introduction: this report examines teenage use of the Central Library. Current use: few teenagers visit weekly; those who do mainly come to study before exams rather than to borrow books. Recommendations: first, create a relaxed zone with sofas, group tables and charging points; second, host monthly events such as game evenings and author talks aimed at younger readers."
    },
    {
      id: "fwx40",
      part: 2,
      type: "Report",
      title: "Report — 校園環保行動",
      length: "140–190 words",
      task: "Your school wants to become more environmentally friendly, and the head teacher has asked students to report on the situation. Write a report describing what the school already does well, identifying one area where it wastes energy or resources, and recommending two practical improvements.",
      checklist: [
        "Content：現有優點、一項浪費問題、兩項具體改善",
        "Communicative Achievement：客觀報告，避免指責語氣",
        "Organisation：小標分節（Strengths / Problem / Recommendations）",
        "Language：環境詞彙（recycling bins, energy-saving, single-use plastic）"
      ],
      model: "Model outline — Introduction: this report reviews the school's environmental performance. Strengths: recycling bins are available in every corridor and are widely used. Problem: lights and projectors are frequently left on in empty classrooms, wasting electricity daily. Recommendations: install motion-sensor lights in classrooms and appoint student 'eco monitors' to check rooms at the end of each day."
    },
    {
      id: "fwx41",
      part: 2,
      type: "Report",
      title: "Report — 新生歡迎週檢討",
      length: "140–190 words",
      task: "Your college recently held a welcome week for new students, and the organisers have asked for feedback. Write a report describing which activities were most and least successful, explaining why, and suggesting one new activity for next year's welcome week.",
      checklist: [
        "Content：最成功與最不成功的活動＋原因＋一項新活動建議",
        "Communicative Achievement：平衡的評估—肯定與批評並存",
        "Organisation：依成功→不成功→建議的順序分節",
        "Language：評價與原因（proved extremely popular, largely because, failed to attract）"
      ],
      model: "Model outline — Introduction: this report evaluates this year's welcome week. Successes: the campus treasure hunt proved the most popular activity, largely because it mixed students from different courses in small teams. Weaknesses: the two-hour welcome lecture attracted many complaints for being repetitive. Suggestion: next year, replace part of the lecture with an informal barbecue where new students can meet their tutors."
    },

    /* ---------- Part 2: Reviews (7) ---------- */
    {
      id: "fwx42",
      part: 2,
      type: "Review",
      title: "Review — 一部值得看的電影",
      length: "140–190 words",
      task: "You see this announcement on an English-language film website: 'Reviews wanted! Have you seen a film recently that surprised you? Tell us what it is about, what makes it different from other films, and whether you would recommend it. The best reviews will appear on our homepage.' Write your review.",
      checklist: [
        "Content：劇情簡介（不爆雷）、與眾不同之處、是否推薦",
        "Communicative Achievement：review 語氣—個人觀點＋娛樂性",
        "Organisation：吸睛開頭→簡介→評價→明確推薦結尾",
        "Language：影評詞彙（gripping plot, stunning visuals, a slow start）"
      ],
      model: "Model opening — I walked into the cinema expecting yet another superhero film and walked out two hours later with tears in my eyes. 'The Last Lighthouse' looks like an action movie on the poster, but it is really a quiet story about a father and daughter rebuilding their lives on a remote island."
    },
    {
      id: "fwx43",
      part: 2,
      type: "Review",
      title: "Review — 餐廳評論",
      length: "140–190 words",
      task: "An English-language website for visitors to your area has asked for restaurant reviews: 'Tell us about a local restaurant you know well. What kind of food does it serve? What are the atmosphere and service like? Would you recommend it to visitors?' Write your review.",
      checklist: [
        "Content：菜色、氣氛與服務、是否推薦三點齊全",
        "Communicative Achievement：對象是觀光客—補充在地人才知道的細節",
        "Organisation：整體印象→細節評價→建議點餐→結論",
        "Language：餐廳評論語彙（generous portions, cosy, slightly overpriced）"
      ],
      model: "Model opening — Hidden down a narrow lane behind the night market, Grandma Lin's Kitchen is the kind of place tourists walk past — and locals queue for. This tiny family-run restaurant serves just twelve dishes, all cooked the way they were fifty years ago."
    },
    {
      id: "fwx44",
      part: 2,
      type: "Review",
      title: "Review — 改變想法的一本書",
      length: "140–190 words",
      task: "You see this announcement in an English-language student magazine: 'Book reviews wanted! Tell us about a book you could not put down. What is it about? Why did you enjoy it so much? Who would you recommend it to?' Write your review.",
      checklist: [
        "Content：內容簡介、喜歡的原因、推薦對象三問都答",
        "Communicative Achievement：熱情但不劇透，讓讀者想找來看",
        "Organisation：開頭鉤子→簡介→亮點→推薦對象收尾",
        "Language：書評語彙（page-turner, believable characters, a twist I never saw coming）"
      ],
      model: "Model opening — I planned to read one chapter before bed and finished the whole book at four in the morning. 'The Memory Shop' tells the story of a girl who discovers a shop where people can sell their unwanted memories — and the terrible price the shopkeeper pays for keeping them."
    },
    {
      id: "fwx45",
      part: 2,
      type: "Review",
      title: "Review — 手機 App 評論",
      length: "140–190 words",
      task: "An English-language technology website has announced: 'App reviews wanted! Review an app you use regularly. What does it do? What are its best and worst features? Is it worth downloading?' Write your review.",
      checklist: [
        "Content：功能、最佳與最差特點、是否值得下載",
        "Communicative Achievement：科技評論—具體優缺點比籠統稱讚有說服力",
        "Organisation：用途→優點→缺點→結論評分或建議",
        "Language：app 評論語彙（user-friendly, crashes occasionally, free version）"
      ],
      model: "Model opening — Like most students, I have downloaded a dozen study apps and deleted eleven of them within a week. 'FocusTree' is the one that survived. The idea is simple: you plant a virtual tree, and it grows only while you leave your phone alone."
    },
    {
      id: "fwx46",
      part: 2,
      type: "Review",
      title: "Review — 演唱會體驗",
      length: "140–190 words",
      task: "You see this announcement on an English-language music website: 'Concert reviews wanted! Have you been to a live concert recently? Tell us about the performance and the atmosphere, mention anything that disappointed you, and say whether the tickets were worth the money.' Write your review.",
      checklist: [
        "Content：表演與氣氛、失望之處、票價值不值三點都寫",
        "Communicative Achievement：現場感描寫＋公平的批評",
        "Organisation：進場→表演高潮→缺點→值不值得的結論",
        "Language：音樂會語彙（the crowd went wild, sound quality, encore）"
      ],
      model: "Model opening — Two hours before the doors opened, the queue already stretched around the stadium — and by the second song, I understood why. The band played for over two hours with an energy that made twenty thousand people feel like guests at a private party."
    },
    {
      id: "fwx47",
      part: 2,
      type: "Review",
      title: "Review — 電視影集",
      length: "140–190 words",
      task: "An English-language entertainment website has asked for reviews: 'Which TV series should everyone watch? Describe what the series is about, explain what makes the characters or story special, and say who would enjoy it most.' Write your review.",
      checklist: [
        "Content：影集內容、角色或故事的特別之處、適合觀眾",
        "Communicative Achievement：說服讀者去看，但誠實提醒缺點更可信",
        "Organisation：簡介→亮點分析→適合對象→結論",
        "Language：影集語彙（season, episode, binge-watch, cliffhanger）"
      ],
      model: "Model opening — Most detective series follow a brilliant investigator; 'Corner Shop Mysteries' follows a retired maths teacher who solves crimes between serving customers instant noodles. It sounds ridiculous — and somehow it is the cleverest show I have watched all year."
    },
    {
      id: "fwx48",
      part: 2,
      type: "Review",
      title: "Review — 電玩遊戲",
      length: "140–190 words",
      task: "You see this announcement on an English-language gaming website: 'Game reviews wanted! Review a video game you have played a lot. What type of game is it and what do you do in it? What are its strengths and weaknesses? Would you recommend it to our readers?' Write your review.",
      checklist: [
        "Content：遊戲類型與玩法、優缺點、是否推薦",
        "Communicative Achievement：對玩家讀者—用語內行但不排外",
        "Organisation：介紹→優點→缺點→推薦結論",
        "Language：遊戲評論語彙（addictive gameplay, steep learning curve, multiplayer）"
      ],
      model: "Model opening — 'Skyfarers' hooked me from the opening scene: your village is floating away into the clouds, and you have exactly one airship, three crew members and no map. This open-world adventure game rewards curiosity more than fast fingers, which is exactly why I love it."
    }
  ];
  if (typeof module !== 'undefined') { module.exports = BANK; return; }
  WRITING = WRITING.concat(BANK);
})();
