/* CAE Prep extra bank: IELTS Writing Task 1 */
(function () {
  var BANK = [
    {
      id: "ciw01",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Energy sources line graph",
      length: "at least 150 words · about 20 minutes",
      task: "The graph below shows the share of electricity generated from four sources in one country from 1995 to 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "line",
        title: "Share of electricity generation by source, 1995\u20132020",
        yUnit: "%",
        yMax: 60,
        xLabels: ["1995", "2000", "2005", "2010", "2015", "2020"],
        series: [
          { name: "Coal", values: [52, 45, 39, 32, 19, 14] },
          { name: "Gas", values: [20, 26, 32, 38, 31, 29] },
          { name: "Wind & solar", values: [1, 3, 4, 5, 24, 31] },
          { name: "Nuclear", values: [26, 26, 25, 25, 26, 26] }
        ]
      },
      checklist: [
        "Task Achievement: overview capturing the structural shift (fossil decline, renewables surge, nuclear stable) with the crossover in 2018 as a key feature",
        "Coherence & Cohesion: organise by trend direction rather than source-by-source listing; signal the turning points",
        "Lexical Resource: precise trend language (fell sharply, peaked at, overtook, remained flat) and paraphrase of 'share' (proportion, percentage)",
        "Grammar: past simple with accurate time phrases; try a perfect structure for change over the whole period (had fallen to 14% by 2020)"
      ],
      model: "Model outline — Overview: the mix shifted decisively away from coal towards renewables, while nuclear barely moved. Para 2: the two movers — coal's halving-and-more vs wind/solar's rise from nothing, with the 2018 crossover. Para 3: gas's rise-then-fall and nuclear's stability."
    },
    {
      id: "ciw02",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Graduate destinations bar chart",
      length: "at least 150 words · about 20 minutes",
      task: "The bar chart below compares what graduates of one university were doing six months after finishing, in 2005 and in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "bar",
        title: "Graduate destinations six months after finishing",
        yUnit: "%",
        yMax: 70,
        categories: ["Full-time employment", "Further study", "Part-time / temporary work", "Unemployed", "Travel or other"],
        series: [
          { name: "2005", values: [62, 18, 9, 6, 5] },
          { name: "2020", values: [48, 29, 15, 5, 3] }
        ]
      },
      checklist: [
        "Task Achievement: overview identifying the headline change (full-time work down, further study up) rather than reciting all ten numbers",
        "Coherence & Cohesion: compare across years within each category; use 'whereas' and 'by contrast' to mark the two directions of change",
        "Lexical Resource: vary 'increase/decrease' (climbed, contracted, edged down) and paraphrase categories accurately",
        "Grammar: comparative structures with figures (nearly a third, down 14 percentage points); note percentage vs percentage point"
      ],
      model: "Model outline — Overview: graduates moved away from immediate full-time employment towards further study and part-time work; unemployment barely changed. Para 2: the two big shifts with figures. Para 3: the minor categories, noting relative stability."
    },
    {
      id: "ciw03",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Water use pie charts",
      length: "at least 150 words · about 20 minutes",
      task: "The two pie charts below show how water was used in one region in 1990 and in 2015. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "pie",
        title: "Water use by sector, 1990 and 2015",
        pies: [
          { label: "1990", slices: [
            { name: "Agriculture", value: 58 },
            { name: "Industry", value: 23 },
            { name: "Households", value: 12 },
            { name: "Leisure", value: 7 }
          ] },
          { label: "2015", slices: [
            { name: "Agriculture", value: 41 },
            { name: "Industry", value: 20 },
            { name: "Households", value: 26 },
            { name: "Leisure", value: 13 }
          ] }
        ],
        note: "Total water consumption in 2015 was double the 1990 level."
      },
      checklist: [
        "Task Achievement: overview noting agriculture's shrinking share against growing household and leisure shares — and the doubling of total use",
        "Coherence & Cohesion: a paragraph for the declining shares and one for the growing shares works cleanly",
        "Lexical Resource: fraction/proportion paraphrases (well over half, roughly a quarter, more than doubled its share)",
        "Grammar: mind the trap — a falling share of a doubled total can still mean more water; one sentence acknowledging this shows precision"
      ],
      model: "Model outline — Overview: agriculture stayed the largest user but its dominance eroded, mainly to households and leisure, while total consumption doubled. Para 2: agriculture and industry declines in share. Para 3: household share more than doubling, leisure nearly doubling; close by noting absolute use rose across the board."
    }
  ];
  if (typeof module !== "undefined") { module.exports = BANK; return; }
  window.WRITING = (window.WRITING || []).concat(BANK);
})();
