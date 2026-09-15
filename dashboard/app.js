// Process Module Inspector Database
const moduleDB = {
    cultivation: {
        tag: "MODULE 100: CULTIVATION & AGRIVOLTAICS",
        title: "Primary Cultivation, CO2 Deep Sumps, & Agrivoltaics",
        tech: "Hybrid PBR-ORP + Semitransparent Spectrum-Splitting PV",
        tp: "22°C – 30°C / 1.0 – 1.5 bar",
        mat: "Dichroic Semitransparent Glass, PFA Liners, Paddlewheels",
        throughput: "10,000 Dry MT/day Biomass (20,000,000 MT/day slurry)",
        lever: "Free Flue Gas ($0/t) + 100 MW Solar PV Power",
        narrative: "Cultivation utilizes shallow open raceways (20-30 cm deep) covered by semitransparent agrivoltaic PV panels. Panels absorb Green & NIR light (generating 100 MW power) while transmitting Red (660nm) and Blue (430nm) PAR light to algae. Deep 5m sumps achieve 88% CO2 absorption. Vortex hydrofoils induce flashing-light kinetics, while TLA antenna strains double yield to 38-48 g/m²/day."
    },
    dewatering: {
        tag: "MODULE 200: HARVESTING & DEWATERING",
        title: "3-Stage Dewatering Pipeline (To 20% Wet Paste)",
        tech: "Auto-flocculation -> Dissolved Air Flotation (DAF) -> Hollow Fiber Membrane",
        tp: "25°C – 30°C / 1.2 bar",
        mat: "Zwitterionic Polymeric Membranes (0.1 µm), Stainless Steel DAF",
        throughput: "0.05% Solids Slurry (20M t/d) -> 20.0% Wet Paste (50,000 t/d)",
        lever: "Zero Thermal Drying (92.5% Energy Overhead Saving)",
        narrative: "Concentrates algae cells from 0.5 g/L (0.05%) to 200 g/L (20% solids wet paste). Stage 1 pH-shift auto-flocculation at pH 10.5 achieves 90% settling in 30 mins. Stage 2 DAF floats sludge to 8% solids. Stage 3 cross-flow hollow fiber membranes yield a 20% solids wet paste fed directly into HTL, eliminating $3.10/gal in thermal drying natural gas expenses."
    },
    htl: {
        tag: "MODULE 300: HYDROTHERMAL LIQUEFACTION",
        title: "Subcritical Hydrothermal Liquefaction (HTL) Reactor Train",
        tech: "Continuous Plug-Flow High-Pressure HTL Reactor",
        tp: "350°C (662°F) / 20.0 MPa (2,900 psi)",
        mat: "Inconel 625 / Titanium Grade 2, Sintered SiC Letdown Trim",
        throughput: "50,000 MT/day Wet Paste -> 4,789.5 MT/day Biocrude (35,113 bbl/d)",
        lever: "Whole Biomass Conversion (70-80% Carbon Yield)",
        narrative: "Subcritical water at 350°C and 20 MPa acts as a nucleophilic reactant, rapidly hydrolyzing lipids, proteins, and carbohydrates into biocrude (HHV 38.5 MJ/kg). Heat recovery exchangers capture 78% of effluent thermal energy. Pressure-letdown valves feature Silicon Carbide (SiC) trims to resist supersonic slurry erosion."
    },
    hydrotreater: {
        tag: "MODULE 500: HYDROTREATING & REFINING",
        title: "Fixed-Bed Catalytic Hydrotreater & Fractionation Column",
        tech: "Fixed-Bed Hydrodeoxygenation (HDO) & Hydrodenitrogenation (HDN)",
        tp: "380°C / 10.0 MPa (1,450 psi) H2",
        mat: "NiMo/Al2O3 Fixed-Bed Catalyst, Alloy 20 Fractionation Column",
        throughput: "4,789 MT/day Raw Biocrude -> 1,357,018 gal/day ASTM D975 Diesel",
        lever: "Zero Purchased H2 (In-situ CHG Hydrogen Supply)",
        narrative: "Upgrades raw HTL biocrude into drop-in renewable diesel conforming to ASTM D975 standards (Cetane 68-75, <5 ppm sulfur). Hydroprocessing removes oxygen (HDO), nitrogen (HDN), and sulfur (HDS). Hydrogen is supplied directly by Catalytic Hydrothermal Gasification (CHG) of waste streams."
    },
    chg: {
        tag: "MODULE 400: CHG & POWER AUTONOMY",
        title: "Catalytic Hydrothermal Gasification & CHP Power Microgrid",
        tech: "Fixed-Bed Catalytic Gasification + Combined Cycle Bio-Turbine",
        tp: "380°C / 20.0 MPa",
        mat: "Monolithic Ru/TiO2 Catalyst Bed, Sacrificial ZnO Guard Bed",
        throughput: "35,000 MT/day HTL Aqueous Stream -> 1,144 MT/day Bio-Methane Gas",
        lever: "100% Off-Grid Power Autonomy (+218.9 MW Net Surplus Power)",
        narrative: "Processes the HTL aqueous stream to gasify dissolved organic carbon into bio-methane gas (1,144 MT/day). Methane fuels a 300 MW Combined Heat & Power (CHP) turbine, generating 293.9 MW of electricity to self-power the 75 MW plant load and export +218.9 MW to the grid. Recovers 92% N and 95% P for pond recycling."
    },
    coproducts: {
        tag: "MODULE 600: CO-PRODUCTS & WASTE VALORIZATION",
        title: "Co-Product Extraction & Mineral Crystallization",
        tech: "Enzymatic Protein Isolation + Struvite Crystallization",
        tp: "25°C – 80°C / 1.0 – 5.0 bar",
        mat: "Stainless Steel Crystallizers, Spray Dryers, Pelletizers",
        throughput: "Animal Feed (1,200 t/d), Struvite (617.5 t/d), Hydro-Char (500 t/d)",
        lever: "Co-Product Revenue Offset (+$1,282,216 / day)",
        narrative: "Converts all side-streams into commercial products: (1) High-Protein Aquaculture Feed meal (1,200 MT/day @ $550/t), (2) Slow-release Struvite Bio-Fertilizer crystals (617.5 MT/day @ $400/t), and (3) Soil Hydro-Char for carbon removal credits (500 MT/day @ $120/t). Generates +$0.74/gal in direct cost offsets."
    }
};

// Markdown Documents Manifest
const docManifest = [
    { id: "MASTER_TECHNICAL_REPORT.md", title: "MASTER REPORT: Executive Project Case Study" },
    { id: "docs/01-system-overview.md", title: "01 - System Overview & Stoichiometry" },
    { id: "docs/02-cultivation-and-harvesting.md", title: "02 - Cultivation & Dewatering Kinetics" },
    { id: "docs/03-conversion-and-refining.md", title: "03 - HTL Conversion & Hydrotreating" },
    { id: "docs/04-efficiency-and-cost-levers.md", title: "04 - 5 Core Efficiency Cost Levers" },
    { id: "docs/05-co-products-and-waste-valorization.md", title: "05 - Co-Products & Waste Valorization" },
    { id: "docs/06-co2-sourcing-and-carbon-credits.md", title: "06 - CO2 Sourcing & 45Q Carbon Credits" },
    { id: "docs/07-capex-fixed-costs-and-offgrid-microgrid.md", title: "07 - CapEx, Overhead, & Off-Grid Microgrid" },
    { id: "docs/08-feasibility-bottlenecks-and-rd-roadmap.md", title: "08 - Feasibility & Metallurgy Bottlenecks" },
    { id: "docs/09-solar-spectrum-splitting-and-mixing.md", title: "09 - Agrivoltaics & Vortex Flashing Light" },
    { id: "docs/10-siting-scaling-and-ranked-rd-matrix.md", title: "10 - Siting Matrix & Ranked R&D Matrix" },
    { id: "docs/11-hard-limits-roadblocks-and-redteam-analysis.md", title: "11 - Red-Team Reality Check & Hard Limits" },
    { id: "docs/12-fuzzy-science-and-expert-questions.md", title: "12 - Shaky Assumptions & Expert Questions" },
    { id: "docs/13-engineering-rationale-and-model-action-plan.md", title: "13 - Engineering Rationale & Action Plan" },
    { id: "docs/14-fuel-product-comparison-saf-jet-vs-diesel-vs-ethanol.md", title: "14 - SAF Jet Fuel vs. Diesel vs. Ethanol" }
];

// Switch Tab Navigation
function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-page').forEach(page => page.classList.remove('active'));

    const activeTabBtn = Array.from(document.querySelectorAll('.nav-tab')).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeTabBtn) activeTabBtn.classList.add('active');

    const activeTabPage = document.getElementById(tabId);
    if (activeTabPage) activeTabPage.classList.add('active');
}

// Module Inspector Function
function inspectModule(moduleId) {
    document.querySelectorAll('.node-group').forEach(node => node.classList.remove('active-node'));
    const selectedNode = document.getElementById(`node-${moduleId}`);
    if (selectedNode) selectedNode.classList.add('active-node');

    const data = moduleDB[moduleId];
    if (data) {
        document.getElementById('inspect-tag').innerText = data.tag;
        document.getElementById('inspect-title').innerText = data.title;
        document.getElementById('inspect-tech').innerText = data.tech;
        document.getElementById('inspect-tp').innerText = data.tp;
        document.getElementById('inspect-mat').innerText = data.mat;
        document.getElementById('inspect-throughput').innerText = data.throughput;
        document.getElementById('inspect-lever').innerText = data.lever;
        document.getElementById('inspect-narrative').innerText = data.narrative;
    }
}

// Live Dynamic TEA Simulation Engine
function runSimulation() {
    const biomass = parseFloat(document.getElementById('sl-biomass').value);
    const co2Mode = document.getElementById('sel-co2-mode').value;
    const htlYield = parseFloat(document.getElementById('sl-htl').value);
    const proteinCredit = parseFloat(document.getElementById('sl-protein').value);
    const wacc = parseFloat(document.getElementById('sl-wacc').value) / 100.0;

    // Update Slider Display Labels
    document.getElementById('txt-biomass').innerText = biomass.toLocaleString();
    document.getElementById('txt-htl').innerText = htlYield;
    document.getElementById('txt-protein').innerText = proteinCredit.toFixed(2);
    document.getElementById('txt-wacc').innerText = (wacc * 100).toFixed(1);

    // Fuel Yield Calculation
    const dailyGallons = biomass * 135.7; // ~1.35M gal/day @ 10k tons
    const annualGallons = dailyGallons * 365.0;

    // Amortized CapEx ($1.32B over 25 yrs @ WACC)
    const totalCapEx = 1320000000.0;
    const n = 25;
    const crf = (wacc * Math.pow(1 + wacc, n)) / (Math.pow(1 + wacc, n) - 1);
    const annualCapExCharge = totalCapEx * crf;
    const capexPerGal = annualCapExCharge / annualGallons;

    // Fixed Overhead & Labor ($76.8M/yr)
    const fixedOverheadPerGal = 76800000.0 / annualGallons;

    // Variable OpEx
    const variableOpExPerGal = 0.38;

    // CO2 Mode Calculation
    let co2CostGal = 0.0;
    let co2CreditGal = 0.0;
    const co2TonsDay = biomass * 2.1666;

    if (co2Mode === "commercial") {
        co2CostGal = (co2TonsDay * 60.0) / dailyGallons;
    } else if (co2Mode === "tipping_fee") {
        co2CreditGal = (co2TonsDay * 25.0) / dailyGallons;
    } else if (co2Mode === "45q_dac") {
        co2CreditGal = (co2TonsDay * 130.0) / dailyGallons;
    }

    const grossCost = capexPerGal + fixedOverheadPerGal + variableOpExPerGal + co2CostGal;
    const totalCredits = 0.12 + proteinCredit + co2CreditGal;
    const netMFSP = grossCost - totalCredits;

    // Update Results Display
    document.getElementById('res-fuel-gal').innerText = `${(dailyGallons / 1e6).toFixed(2)} M gal/day`;
    document.getElementById('res-fuel-yr').innerText = `${(annualGallons / 1e6).toFixed(1)} M gal/year`;
    document.getElementById('res-capex').innerText = `$${capexPerGal.toFixed(3)} / gal`;
    document.getElementById('res-fixed').innerText = `$${fixedOverheadPerGal.toFixed(3)} / gal`;

    const mfspText = `$${netMFSP.toFixed(2)} / gal`;
    document.getElementById('res-mfsp').innerText = mfspText;
    document.getElementById('nav-cost-display').innerText = mfspText;

    const statusMsg = document.getElementById('res-mfsp-status');
    const pill = document.getElementById('target-pill');

    if (netMFSP <= 1.00) {
        statusMsg.innerText = "Below $1.00 Target! (Financially Solvent)";
        statusMsg.style.color = "#10b981";
        pill.style.borderColor = "#10b981";
        pill.style.color = "#10b981";
    } else {
        statusMsg.innerText = "Above $1.00 Target (Adjust Parameters)";
        statusMsg.style.color = "#ef4444";
        pill.style.borderColor = "#ef4444";
        pill.style.color = "#ef4444";
    }

    // Update Cost Bar Stack
    document.getElementById('txt-gross-val').innerText = `$${grossCost.toFixed(2)} / gal`;
    document.getElementById('txt-credit-val').innerText = `-$${totalCredits.toFixed(2)} / gal`;

    const maxScale = Math.max(2.0, grossCost, totalCredits);
    document.getElementById('bar-gross').style.width = `${(grossCost / maxScale) * 100}%`;
    document.getElementById('bar-credit').style.width = `${(totalCredits / maxScale) * 100}%`;
}

// Populate Documentation Library Menu
function initDocsBrowser() {
    const menuList = document.getElementById('doc-menu-list');
    menuList.innerHTML = "";

    docManifest.forEach((doc, idx) => {
        const li = document.createElement('li');
        li.innerText = doc.title;
        if (idx === 0) li.classList.add('active-doc');

        li.onclick = () => {
            document.querySelectorAll('.doc-menu li').forEach(el => el.classList.remove('active-doc'));
            li.classList.add('active-doc');
            loadDocContent(doc.id, doc.title);
        };

        menuList.appendChild(li);
    });

    // Load first doc by default
    loadDocContent(docManifest[0].id, docManifest[0].title);
}

// Fetch and render document content
async function loadDocContent(docId, docTitle) {
    document.getElementById('doc-active-path').innerText = docId;
    document.getElementById('doc-active-title').innerText = docTitle;
    
    const bodyEl = document.getElementById('doc-body-content');
    bodyEl.innerHTML = "<p>Loading document content...</p>";

    // Build candidate fetch paths
    const candidatePaths = [
        `./${docId}`,
        `/${docId}`,
        `../${docId}`,
        docId
    ];

    let text = null;

    for (const path of candidatePaths) {
        try {
            const response = await fetch(path);
            if (response.ok) {
                text = await response.text();
                break;
            }
        } catch (e) {
            // try next path
        }
    }

    if (text) {
        if (typeof marked !== 'undefined' && typeof marked.parse === 'function') {
            bodyEl.innerHTML = marked.parse(text);
        } else {
            // High-grade fallback markdown formatter
            const formatted = text
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
                .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
                .replace(/\n\n/gim, '</p><p>');
            bodyEl.innerHTML = `<p>${formatted}</p>`;
        }
    } else {
        bodyEl.innerHTML = `
            <div style="padding: 20px; background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 8px;">
                <h4 style="color: #ef4444; margin-bottom: 8px;">Document Load Warning</h4>
                <p>Could not fetch <code>${docId}</code> over HTTP. Ensure the web server is running from the repository root directory.</p>
                <p>You can also read the complete file directly at <a href="file:///home/matt/Projects/Repos/algae-fuel/${docId}" target="_blank" style="color: #3b82f6;">file:///home/matt/Projects/Repos/algae-fuel/${docId}</a>.</p>
            </div>
        `;
    }
}

// Initialize Application on Page Load
document.addEventListener('DOMContentLoaded', () => {
    inspectModule('cultivation');
    runSimulation();
    initDocsBrowser();
});
