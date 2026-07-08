/* CAE Reading — Multiple matching, wave 2 */
(function () {
  var BANK = [
    {
      id: "c-rmatch2-01",
      title: "The Future of Libraries: Four Academic Perspectives",
      sections: [
        {
          label: "A",
          text: "Professor Lena Ashworth: The obituary for the public library has been written so many times that one grows weary of correcting it. Visitor numbers in my longitudinal study have not collapsed; they have shifted in composition. Students, freelancers and jobseekers now outnumber leisure readers, and libraries have quietly retooled themselves as civic workspaces. What worries me is not demand but funding models that still measure success by book loans alone, a metric as outdated as counting telegrams. Until we persuade policymakers to value libraries as infrastructure rather than as warehouses of print, budgets will keep shrinking while need keeps growing."
        },
        {
          label: "B",
          text: "Dr Marcus Okafor: I take a less sanguine view than many colleagues. Digitisation has been sold to libraries as salvation, yet licensing regimes for e-books frequently cost institutions several times the retail price and expire after a fixed number of loans. In effect, libraries no longer own their collections; they rent them from publishers on punitive terms. Unless legislation restores something equivalent to the traditional right of purchase and lending, the digital library will remain a tenant in its own house. I would rather see modest, well-funded print collections than sprawling digital catalogues we control in name only."
        },
        {
          label: "C",
          text: "Professor Ines Kaufmann: My fieldwork in rural regions suggests the library's most valuable asset is neither books nor bandwidth but staff. When a branch loses its trained librarian and is run by volunteers, usage falls within eighteen months even if opening hours are preserved. Patrons come with tangled problems, from navigating benefit applications to spotting misinformation, and they need a professional who can triage. I am cautiously optimistic about the future, provided we stop treating librarianship as a clerical role and start treating it as the information profession it has always been. Machines catalogue; people counsel."
        },
        {
          label: "D",
          text: "Dr Priya Raman: Debates about libraries tend to be conducted in an elegiac register, as though we were arguing over how to arrange flowers on a coffin. I find this tiresome and empirically wrong. In my comparative study of twelve cities, libraries that embraced maker spaces, language cafes and health outreach saw double-digit growth, while those that changed nothing declined. The lesson is not that books are finished but that the library is a platform whose content is negotiable. Institutions willing to ask their communities what they actually need will flourish; those that merely defend tradition will not."
        },
        {
          label: "E",
          text: "Professor Daniel Whitfield: As a historian, I would caution against both nostalgia and novelty-worship. Libraries have reinvented themselves repeatedly, from chained reference rooms to open stacks to lending records on microfilm, and each transition provoked identical anxieties to today's. What is genuinely new is the concentration of information power in a handful of private platforms. The library's future role, I suspect, will be less about providing access, which is now abundant, and more about providing trustworthy curation and a public space that asks nothing of you commercially. That combination is rarer, and therefore more precious, than ever."
        }
      ],
      questions: [
        { q: "Which section argues that the criteria used to evaluate libraries are obsolete?", answer: 0, explanation: "A calls funding models that measure success by book loans alone \"a metric as outdated as counting telegrams\", urging libraries be valued as infrastructure." },
        { q: "Which section claims that libraries do not truly own their digital collections?", answer: 1, explanation: "B says that under e-book licensing regimes \"libraries no longer own their collections; they rent them from publishers on punitive terms\"." },
        { q: "Which section maintains that professional expertise matters more than resources?", answer: 2, explanation: "C's fieldwork suggests the library's most valuable asset is \"neither books nor bandwidth but staff\", the trained professional who can triage patrons' problems." },
        { q: "Which section expresses irritation at the mournful tone of current debates?", answer: 3, explanation: "D finds the \"elegiac register\" of library debates, like arranging flowers on a coffin, both tiresome and empirically wrong." },
        { q: "Which section draws on past transformations to put present anxieties in context?", answer: 4, explanation: "E, as a historian, recalls libraries reinventing themselves from chained reference rooms to open stacks, each transition provoking \"identical anxieties to today's\"." },
        { q: "Which section suggests that consulting users should guide institutional change?", answer: 3, explanation: "D says the library is a platform whose content is negotiable: \"Institutions willing to ask their communities what they actually need will flourish\"." },
        { q: "Which section calls for legal reform to protect lending rights?", answer: 1, explanation: "B calls for legislation to restore \"something equivalent to the traditional right of purchase and lending\", or the digital library stays a tenant in its own house." },
        { q: "Which section identifies a change in who uses libraries rather than a fall in demand?", answer: 0, explanation: "A says visitor numbers \"have not collapsed; they have shifted in composition\", with students, freelancers and jobseekers now outnumbering leisure readers." },
        { q: "Which section warns that replacing trained staff leads to measurable decline?", answer: 2, explanation: "C reports that when a branch loses its trained librarian and is run by volunteers, \"usage falls within eighteen months even if opening hours are preserved\"." },
        { q: "Which section sees the library's future value in offering a space free of commercial pressure?", answer: 4, explanation: "E sees the future role in trustworthy curation and \"a public space that asks nothing of you commercially\", a combination rarer and more precious than ever." }
      ]
    },
    {
      id: "c-rmatch2-02",
      title: "Lessons from Failure: Entrepreneurs Look Back",
      sections: [
        {
          label: "A",
          text: "Sofia Delgado, food-tech founder: My first company folded because I mistook enthusiasm for evidence. Investors loved the pitch, journalists loved the story, and I confused that applause with proof of demand. Actual customers, it turned out, liked the idea but would not pay for it. The collapse was humiliating, yet in retrospect it was the cheapest education I could have bought. In my current venture, no feature ships until a stranger has paid real money for a rough prototype. I now treat compliments as noise and invoices as signal, and I would not trade that discipline for a smoother beginning."
        },
        {
          label: "B",
          text: "Rajan Mehta, logistics entrepreneur: People romanticise failure in a way I find faintly dishonest. When my haulage platform went under, I lost my savings, two friendships and eighteen months of sleep, and no amount of reframing turns that into a gift. What I will concede is that the failure was survivable because I had kept my personal finances ring-fenced and had been candid with staff about the risks. If there is a lesson, it is about damage limitation rather than transformation: build the parachute before you need it, and never let optimism write cheques that your contingency plan cannot cash."
        },
        {
          label: "C",
          text: "Amelia Fontaine, fashion retailer: My setback was not a bankruptcy but a slow, comfortable stagnation, which I would argue is more dangerous because nothing forces you to act. For six years the boutique broke even, and breaking even became my ambition. It took a blunt question from a junior employee, asking why we still did things a certain way, to make me realise the business was preserved rather than alive. We overhauled everything within a year. My advice to founders is to fear plateaus more than cliffs; a fall at least tells you unambiguously that something must change."
        },
        {
          label: "D",
          text: "Tomasz Nowak, software founder: After our product was cloned by a far larger competitor, my co-founder wanted to litigate and I wanted to out-build them. We did neither well because we never resolved the disagreement, and the company drifted while we argued. The venture failed not from the competition itself but from paralysis at the top. These days I insist on a written mechanism for breaking deadlocks between partners before a single line of code is written. It feels bureaucratic and mildly pessimistic on day one, and it is also the clause most likely to save the company on day five hundred."
        },
        {
          label: "E",
          text: "Grace Owusu, health-tech founder: The setback that shaped me most was one nobody else even noticed: a pilot with a hospital that quietly lapsed because I was too proud to chase a reply. I told myself their silence was rejection when it was merely inertia. A year later I learned the project had simply fallen off someone's desk. Since then I have followed up with an almost embarrassing persistence, and roughly a third of my current contracts exist only because I refused to interpret silence as an answer. Politeness, I discovered, kills more young companies than competition does."
        }
      ],
      questions: [
        { q: "Which section describes mistaking public approval for genuine market demand?", answer: 0, explanation: "A admits confusing investor and press applause \"with proof of demand\", while actual customers liked the idea but would not pay for it." },
        { q: "Which section rejects the fashionable tendency to glorify failure?", answer: 1, explanation: "B says people \"romanticise failure in a way I find faintly dishonest\", insisting no amount of reframing turns real losses into a gift." },
        { q: "Which section argues that steady mediocrity is riskier than outright collapse?", answer: 2, explanation: "C argues slow, comfortable stagnation \"is more dangerous because nothing forces you to act\", advising founders to fear plateaus more than cliffs." },
        { q: "Which section attributes a company's failure to unresolved conflict between its leaders?", answer: 3, explanation: "D says the venture \"failed not from the competition itself but from paralysis at the top\", as the co-founders never resolved their disagreement." },
        { q: "Which section credits a subordinate's question with prompting a turnaround?", answer: 2, explanation: "C says it took \"a blunt question from a junior employee\" to reveal the business was preserved rather than alive, prompting a year-long overhaul." },
        { q: "Which section now demands payment as the only trustworthy form of validation?", answer: 0, explanation: "A says no feature now ships \"until a stranger has paid real money for a rough prototype\", treating compliments as noise and invoices as signal." },
        { q: "Which section emphasises preparing safeguards before disaster strikes?", answer: 1, explanation: "B's lesson is damage limitation: \"build the parachute before you need it\" and never let optimism outrun the contingency plan." },
        { q: "Which section learned that a lack of response should not be read as refusal?", answer: 4, explanation: "E mistook a hospital's silence for rejection \"when it was merely inertia\", and has since followed up with almost embarrassing persistence." },
        { q: "Which section recommends agreeing on dispute-resolution rules at the very start of a venture?", answer: 3, explanation: "D now insists on \"a written mechanism for breaking deadlocks between partners before a single line of code is written\"." },
        { q: "Which section claims that excessive courtesy can be fatal to new businesses?", answer: 4, explanation: "E concludes that \"Politeness, I discovered, kills more young companies than competition does\"." }
      ]
    },
    {
      id: "c-rmatch2-03",
      title: "Wild Neighbours: Naturalists on City Park Wildlife",
      sections: [
        {
          label: "A",
          text: "Dr Harriet Boyle, ornithologist: The great tits in my study plots sing at a noticeably higher pitch than their woodland cousins, a workaround that lets them be heard above traffic. What delights me is how quickly such adjustments spread; birds are effectively holding a conversation over the rumble of the city, and they are winning. I do worry about one thing, though: artificial light. Robins in floodlit parks now sing at two in the morning, and while it sounds charming to insomniac joggers, we do not yet know what this costs the birds in rest and body condition."
        },
        {
          label: "B",
          text: "Callum Reyes, urban ecologist: Foxes are the great misunderstood commuters of the city. Radio-collar data from my team shows most park foxes follow tidy nightly circuits, visiting the same bins, hedges and quiet lawns with the punctuality of a delivery round. Far from being bold invaders, they are creatures of anxious habit that go to great lengths to avoid us. The popular image of the swaggering urban fox says more about our storytelling than their behaviour. If anything has grown bolder, it is people, who now try to hand-feed animals that would be far healthier keeping their professional distance from us."
        },
        {
          label: "C",
          text: "Professor Yuki Tanaka, botanist: Everyone watches the animals; almost no one watches the pavement. Yet the plants colonising park edges are running one of evolution's fastest experiments. Hawksbeard growing in small city plots now produces heavier seeds that drop close to the parent, because feather-light seeds landing on tarmac are wasted. That is natural selection observable within a human decade, no museum required. My plea is simply for a little less tidiness: every time a council scrubs a wall or strims a verge to perfection, it erases a study site and, more importantly, a pantry for the insects that the beloved birds depend on."
        },
        {
          label: "D",
          text: "Marcus Lindqvist, wildlife recorder: I have kept notebooks on the same park for thirty years, and the headline is not decline but reshuffling. Species I once cycled miles to glimpse, like peregrine falcons, now nest on the gasworks opposite my flat, while some once-common sparrows have thinned out. Amateur recorders documented all of this long before official surveys caught up, which is my quiet boast: the most valuable instrument in urban ecology is a patient person with a pencil. Anyone with a lunch break and a bench can contribute observations that professional science, with its short funding cycles, simply cannot gather."
        },
        {
          label: "E",
          text: "Dr Femi Adeyemi, behavioural biologist: What fascinates me is not that wildlife tolerates cities but that some animals appear to prefer them. The crows I study solve puzzle feeders faster in parks than their rural counterparts do in field trials, and juveniles learn tricks by watching older birds queue at reliable human food sources. Cities may be functioning as schools, concentrating clever, flexible individuals and rewarding innovation. I resist calling any species intelligent or stupid; what we are seeing is a filter. The park is quietly selecting for curiosity, and the long-term consequences of that are anybody's guess, which is exactly why I find it thrilling."
        }
      ],
      questions: [
        { q: "Which section reserves judgement about the cost of a behaviour that outwardly seems appealing?", answer: 0, explanation: "A notes robins singing at two in the morning may sound charming, but \"we do not yet know what this costs the birds in rest and body condition\"." },
        { q: "Which section challenges a popular stereotype about an animal's character?", answer: 1, explanation: "B rejects \"the popular image of the swaggering urban fox\": collar data shows anxious, habitual creatures that go to great lengths to avoid us." },
        { q: "Which section complains that a whole category of organisms is overlooked?", answer: 2, explanation: "C complains that \"Everyone watches the animals; almost no one watches the pavement\", though park-edge plants are running one of evolution's fastest experiments." },
        { q: "Which section champions the contribution of non-professionals to science?", answer: 3, explanation: "D boasts that amateur recorders documented the changes before official surveys, calling \"a patient person with a pencil\" urban ecology's most valuable instrument." },
        { q: "Which section suggests cities may be actively favouring certain mental traits?", answer: 4, explanation: "E suggests cities function as schools and a filter, \"quietly selecting for curiosity\" and rewarding clever, flexible individuals." },
        { q: "Which section argues that humans, not animals, have become less cautious?", answer: 1, explanation: "B says \"If anything has grown bolder, it is people\", who now try to hand-feed animals better off keeping their distance." },
        { q: "Which section describes evolutionary change observable within a single human decade?", answer: 2, explanation: "C cites hawksbeard producing heavier seeds in city plots as \"natural selection observable within a human decade, no museum required\"." },
        { q: "Which section presents overall change as redistribution rather than loss?", answer: 3, explanation: "D says thirty years of notebooks show \"not decline but reshuffling\": peregrines now nest on the gasworks while once-common sparrows have thinned out." },
        { q: "Which section appeals for less rigorous maintenance of public spaces?", answer: 2, explanation: "C pleads \"for a little less tidiness\", since scrubbing walls and strimming verges erases study sites and a pantry for the insects birds depend on." },
        { q: "Which section admits that the eventual outcome of a trend is unpredictable and finds that exciting?", answer: 4, explanation: "E admits the long-term consequences are \"anybody's guess, which is exactly why I find it thrilling\"." }
      ]
    },
    {
      id: "c-rmatch2-04",
      title: "Stepping Into the Story: Critics on Immersive Theatre",
      sections: [
        {
          label: "A",
          text: "Vivienne Marsh: I went into the warehouse a sceptic and came out, three hours later, having wept in a stairwell with a stranger dressed as a lighthouse keeper. Immersive theatre at its best does what proscenium drama only gestures at: it makes you complicit. You cannot fold your arms in row F when a character presses a letter into your hand and asks you to deliver it. My reservation is practical rather than artistic. At ninety pounds a ticket, the form is pricing out precisely the young, curious audiences whose instincts it needs, and no amount of critical rapture changes that arithmetic."
        },
        {
          label: "B",
          text: "Douglas Okonkwo: Let us be honest about what much of this genre actually offers: a scavenger hunt with mood lighting. Too many productions confuse disorientation with depth, sending audiences trotting down corridors in masks while the actual drama, such as it is, happens elsewhere. I keep being told I had the wrong experience, that I missed the crucial scene in the attic. A form in which the reviewer must apologise for the show's structure has a design problem, not a marketing one. Until immersive companies learn that freedom without dramaturgy is just wandering, I will keep my seat in row F, gratefully."
        },
        {
          label: "C",
          text: "Priya Chandrasekaran: The question I bring to every immersive show is not whether it thrilled me but whom it asked me to be. The most sophisticated productions cast the spectator deliberately: as a witness, an accomplice, an intruder. The laziest simply cast us as consumers, hoovering up atmosphere. Last month's asylum-set piece troubled me for exactly this reason; we were tourists in other people's imagined suffering, and the form's intimacy made that voyeurism worse, not better. Immersion is not automatically empathy. Sometimes standing at a respectful distance, in the dark, in a seat, is the more ethical place to look from."
        },
        {
          label: "D",
          text: "Henrik Sorensen: As someone who has reviewed both theatre and video games, I find the panic about immersive work destroying traditional drama rather quaint. The two forms are converging, and the traffic runs both ways: game designers are hiring dramaturgs, and directors are borrowing branching structures from games. My prediction is that in twenty years the distinction will feel as dated as arguing over whether cinema is photographed theatre. What excites me is the craft problem, which is how to write a scene that survives an unpredictable audience. The writers who solve it will be the Chekhovs of a genuinely new form."
        },
        {
          label: "E",
          text: "Lucia Ferreira: Everyone reviews the spectacle; I want to talk about the labour. I have interviewed performers who spend six-hour shifts improvising in character while being touched, tested and occasionally propositioned by ticket-holders emboldened by masks. The best companies now employ consent frameworks, safe words and pastoral support, and their shows are artistically sharper for it, because a secure performer takes bigger creative risks. Audiences assume the danger in immersive theatre is theirs, deliciously so; more often it belongs to the cast. Any review that praises a production's edge without asking who absorbs the risk is, in my view, only half written."
        }
      ],
      questions: [
        { q: "Which section describes being won over despite initial doubt?", answer: 0, explanation: "A \"went into the warehouse a sceptic\" and emerged three hours later having wept in a stairwell with a stranger dressed as a lighthouse keeper." },
        { q: "Which section blames poor structure rather than poor publicity for the genre's problems?", answer: 1, explanation: "B says a form in which the reviewer must apologise for missing the crucial scene \"has a design problem, not a marketing one\"." },
        { q: "Which section argues that physical closeness can intensify an ethical failing?", answer: 2, explanation: "C says the asylum-set piece made spectators \"tourists in other people's imagined suffering\", and the form's intimacy \"made that voyeurism worse, not better\"." },
        { q: "Which section dismisses fears that one art form threatens another?", answer: 3, explanation: "D finds \"the panic about immersive work destroying traditional drama rather quaint\", arguing the two forms are converging with traffic running both ways." },
        { q: "Which section focuses on risks borne by those working in the productions?", answer: 4, explanation: "E interviews performers touched, tested and propositioned during six-hour shifts, arguing the danger in immersive theatre \"more often belongs to the cast\"." },
        { q: "Which section objects to the cost of attending such performances?", answer: 0, explanation: "A's reservation is that \"at ninety pounds a ticket, the form is pricing out\" the young, curious audiences it needs most." },
        { q: "Which section evaluates shows by the role they assign to the audience?", answer: 2, explanation: "C judges every show by \"whom it asked me to be\": a witness, an accomplice, an intruder, or merely a consumer." },
        { q: "Which section links performer welfare to artistic quality?", answer: 4, explanation: "E says companies with consent frameworks produce artistically sharper shows \"because a secure performer takes bigger creative risks\"." },
        { q: "Which section identifies writing for unpredictable spectators as the key creative challenge?", answer: 3, explanation: "D is excited by the craft problem of \"how to write a scene that survives an unpredictable audience\"." },
        { q: "Which section accuses many productions of mistaking confusion for profundity?", answer: 1, explanation: "B accuses too many productions of confusing \"disorientation with depth\", sending masked audiences down corridors while the actual drama happens elsewhere." }
      ]
    }
  ];
  if (typeof module !== "undefined" && module.exports) { module.exports = BANK; return; }
  window.READING = window.READING || { mc: [], gap: [], match: [] };
  window.READING.match = window.READING.match.concat(BANK);
})();
