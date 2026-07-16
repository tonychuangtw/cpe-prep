/* CPE Prep extra bank: IELTS Writing Task 1 */
(function () {
  var BANK = [
    {
      id: "piw01",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Urban commuting modes, three cities",
      length: "at least 150 words · about 20 minutes",
      task: "The graph shows the percentage of commuters using cars, public transport and bicycles in three cities between 2000 and 2020. City X: car use fell from 64% to 38%, public transport rose from 28% to 43%, cycling from 8% to 19%. City Y: car use stayed near 70% throughout, public transport around 25%, cycling under 5%. City Z: car use fell modestly from 55% to 47%, public transport rose from 30% to 36%, cycling from 15% to 17%. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      checklist: [
        "Task Achievement: overview contrasting the three trajectories (X transformed, Z drifted, Y static) — nine data series demand ruthless selection",
        "Coherence & Cohesion: organise by city, ordered by degree of change; avoid mechanical repetition of the same sentence frame",
        "Lexical Resource: gradation language (fell precipitously vs declined modestly vs remained entrenched)",
        "Grammar: complex comparisons across time and place (whereas car use in Y had barely shifted by 2020, X's had almost halved)"
      ],
      model: "Model outline — Overview: only City X saw a decisive shift away from cars; Z moved in the same direction far more slowly, and Y hardly changed at all. Para 2: X in detail, the crossover between cars and public transport. Para 3: Z's gentle drift set against Y's inertia."
    },
    {
      id: "piw02",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Museum funding and attendance table",
      length: "at least 150 words · about 20 minutes",
      task: "The table shows four museums' public funding (as % of income) and annual attendance in 2010 and 2022. Museum A: funding 75% → 40%, attendance 1.2m → 1.9m. Museum B: funding 80% → 78%, attendance 0.9m → 0.8m. Museum C: funding 45% → 20%, attendance 2.1m → 3.4m. Museum D: funding 60% → 55%, attendance 1.5m → 1.4m. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      checklist: [
        "Task Achievement: the salient pattern is the inverse relationship — museums whose public funding fell most grew attendance most; the overview should surface it without claiming causation",
        "Coherence & Cohesion: pair the museums (A and C vs B and D) rather than plodding through all four in turn",
        "Lexical Resource: financial and audience vocabulary (state subsidy, self-generated income, visitor numbers, footfall)",
        "Grammar: cautious correlational language (coincided with, was accompanied by) rather than caused"
      ],
      model: "Model outline — Overview: the two museums that reduced their reliance on public money saw attendance surge, while the two that changed little saw slight declines. Para 2: A and C, funding drops against attendance gains. Para 3: B and D's stasis, closing with the caveat that the data show correlation only."
    },
    {
      id: "piw03",
      part: "IELTS Task 1",
      type: "Report",
      title: "IELTS Task 1 — Geothermal electricity generation (process)",
      length: "at least 150 words · about 20 minutes",
      task: "The diagram shows how a geothermal power station generates electricity, in seven stages: 1) cold water is pumped down an injection well about 4 km deep; 2) the water passes through fractured hot rock, where it is heated to around 200°C; 3) the hot water returns to the surface under pressure through a production well; 4) in a flash tank, the pressure drop turns part of the water to steam; 5) the steam drives a turbine connected to a generator; 6) electricity is fed to the grid via a transformer; 7) the steam is condensed back to water and returned to the injection well, closing the loop. Summarise the information by selecting and reporting the main features.",
      checklist: [
        "Task Achievement: overview identifying it as a closed-loop process converting underground heat to electricity; every stage mentioned, none belaboured",
        "Coherence & Cohesion: exploit the cyclical structure — signal the loop's closure explicitly at the end",
        "Lexical Resource: technical paraphrase without distortion (subterranean, pressurised, condensed) plus process connectives beyond first/then (at which point, whereupon, having driven the turbine)",
        "Grammar: present simple passive as the backbone, varied with participle clauses (Having passed through the turbine, the steam is condensed...)"
      ],
      model: "Model outline — Overview: a continuous cycle in which water carries heat from deep rock to a surface turbine and is then reused. Para 2: the underground half — injection, heating, pressurised return. Para 3: the surface half — flash tank, turbine and generator, transformer, condensation back into the loop."
    }
  ];
  if (typeof module !== "undefined") { module.exports = BANK; return; }
  window.WRITING = (window.WRITING || []).concat(BANK);
})();
