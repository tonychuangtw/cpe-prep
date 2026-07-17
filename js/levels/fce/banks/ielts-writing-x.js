/* FCE Prep extra bank: IELTS Writing Task 1 */
(function () {
  var BANK = [
    {
      id: "fiw01",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Cinema visits line graph",
      length: "at least 150 words · about 20 minutes",
      task: "The graph below shows how often three age groups in one country went to the cinema between 2000 and 2020, measured as the percentage of each group going at least once a month. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "line",
        title: "Cinema-goers attending at least once a month, by age group",
        yUnit: "%",
        yMax: 50,
        xLabels: ["2000", "2005", "2010", "2015", "2020"],
        series: [
          { name: "15\u201324", values: [15, 22, 29, 36, 43] },
          { name: "25\u201349", values: [28, 31, 32, 30, 29] },
          { name: "Over 50", values: [22, 19, 16, 13, 11] }
        ]
      },
      checklist: [
        "Task Achievement: give a clear overview (young people up, older people down, middle stable) and support it with key figures",
        "Coherence & Cohesion: group the data logically — rising vs falling — and link ideas with while, whereas, in contrast",
        "Lexical Resource: use trend vocabulary (rose steadily, fell, remained stable) without repeating the same verb",
        "Grammar: past simple for the period shown; check subject-verb agreement with percentages"
      ],
      model: "Model outline — Overview: cinema-going grew among the young but declined among the over-50s, while the middle group barely changed. Para 2: describe the rise for 15-24s with start and end figures. Para 3: contrast the fall for over-50s and the stability of 25-49s."
    },
    {
      id: "fiw02",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Household spending table",
      length: "at least 150 words · about 20 minutes",
      task: "The table below compares average monthly household spending in two countries, A and B. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chart: {
        type: "table",
        title: "Average monthly household spending (US$)",
        columns: ["Category", "Country A", "Country B"],
        rows: [
          ["Housing", "$950", "$520"],
          ["Food", "$420", "$460"],
          ["Transport", "$310", "$140"],
          ["Entertainment", "$180", "$95"],
          ["Education", "$120", "$210"]
        ]
      },
      checklist: [
        "Task Achievement: overview first (A spends more in most categories; B spends more on food and education), then key numbers",
        "Coherence & Cohesion: organise by country or by category — pick one and stay consistent",
        "Lexical Resource: comparison language (almost double, slightly higher, less than half)",
        "Grammar: present simple is fine for a table with no dates; practise 'spend on' + noun"
      ],
      model: "Model outline — Overview: households in A spend more overall, especially on housing and transport, while B outspends A only on food and education. Para 2: A's biggest items with figures. Para 3: the two categories where B is higher, ending with the largest gap (transport, less than half)."
    },
    {
      id: "fiw03",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — How recycled paper is made (process)",
      length: "at least 150 words · about 20 minutes",
      task: "The diagram shows how recycled paper is produced, in six stages: 1) used paper is collected from homes and offices; 2) it is sorted by hand and staples or plastic are removed; 3) the paper is mixed with water and chemicals in a large tank to make pulp; 4) the pulp is cleaned and ink is removed by passing it through screens; 5) the clean pulp is pressed between rollers and dried into thin sheets; 6) the sheets are rolled up and delivered to printers. Summarise the information by selecting and reporting the main features.",
      checklist: [
        "Task Achievement: overview stating the number of stages plus start and end points; cover every stage briefly",
        "Coherence & Cohesion: sequence words (first, next, after that, finally) to guide the reader through the process",
        "Lexical Resource: paraphrase the prompt verbs (collected → gathered, removed → taken out)",
        "Grammar: present simple passive is the key structure (is sorted, is mixed, is dried)"
      ],
      model: "Model outline — Overview: a six-stage process turning waste paper into new rolls of paper, from collection to delivery. Para 2: stages 1-3 (collection, sorting, pulping) in the passive. Para 3: stages 4-6 (cleaning, pressing and drying, delivery)."
    }
  ];
  if (typeof module !== "undefined") { module.exports = BANK; return; }
  window.WRITING = (window.WRITING || []).concat(BANK);
})();
