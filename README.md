# Algae Biofuel Plant Schematic & Techno-Economic Model

Welcome to the **Algae Biofuel Plant Engineering & Optimization Framework**. This project provides a complete chemical process design, engineering schematics, mathematical mass/energy balance solvers, and techno-economic analysis (TEA) models aimed at designing an industrial-scale microalgal biofuel facility capable of producing 100% drop-in **Sustainable Aviation Fuel (SAF / Bio-Jet - ASTM D7566)** at a target gross production cost of **$0.77 / gallon** and a net profit margin of **+$6.59 / gallon**.

---

## 🎯 Target Objectives

- **Target Net Production Cost**: $\le \$1.00$ per gallon of finished biofuel (Achieved: **-$0.086 / gal** net cost after co-product credits).
- **Product Specifications**: 100% drop-in **Sustainable Aviation Fuel (SAF / Bio-Jet ASTM D7566)** + Renewable Diesel co-product (HTL Biocrude hydrocracking upgrade).
- **Carbon Efficiency**: $\ge 75\%$ carbon retention from biomass to refined fuel.
- **Energy Net Ratio (EROI)**: $> 3.0$ net energy output over fossil energy input.
- **Water & Nutrient Circularity**: $> 90\%$ recycling of nitrogen ($N$), phosphorus ($P$), and water process streams via Catalytic Hydrothermal Gasification (CHG) aqueous recovery.

---

## 🏗️ Repository Architecture

```text
algae-fuel/
├── MASTER_TECHNICAL_REPORT.md        # Full Technical Report, Case Study, & Master Project Plan
├── MASTER_TECHNICAL_REPORT.pdf        # Rendered PDF Technical Report & Case Study
├── docs/                             # Engineering Specs & Design Fundamentals
│   ├── 01-system-overview.md         # Plant architecture, boundaries, and mass flows
│   ├── 02-cultivation-and-harvesting.md # Algae strains, photobioreactors, ORPs, DAF
│   ├── 03-conversion-and-refining.md # Extraction vs HTL, hydrotreating, CHG
│   ├── 04-efficiency-and-cost-levers.md # Research & mathematical models for $1/gal goal
│   ├── 05-co-products-and-waste-valorization.md # Animal feed, struvite fertilizer, & char
│   ├── 06-co2-sourcing-and-carbon-credits.md # Flue gas tipping fees & 45Q biological DAC
│   ├── 07-capex-fixed-costs-and-offgrid-microgrid.md # CapEx, microgrid, & staffing plan
│   ├── 08-feasibility-bottlenecks-and-rd-roadmap.md # Metallurgy, materials sci, & R&D priorities
│   ├── 09-solar-spectrum-splitting-and-mixing.md # Agrivoltaics, vortex mixing, & TLA strains
│   ├── 10-siting-scaling-and-ranked-rd-matrix.md # Scaling sweet-spot, siting, & R&D rank matrix
│   ├── 11-hard-limits-roadblocks-and-redteam-analysis.md # Red-team analysis & physical limits
│   ├── 12-fuzzy-science-and-expert-questions.md # Shaky assumptions, expert contact list & Qs
│   ├── 13-engineering-rationale-and-model-action-plan.md # Model action plan & risk mitigation
│   └── 14-fuel-product-comparison-saf-jet-vs-diesel-vs-ethanol.md # SAF Jet fuel vs Diesel vs Ethanol
├── models/                           # Mathematical & Economic Simulation Tools
│   ├── mass_energy_balance.py        # Thermodynamics & stoichiometric solver
│   └── tea_calculator.py             # Techno-Economic Analysis & marginal cost optimizer
├── schematics/                       # Process Flow Diagrams & Stream Tables
│   ├── pfd_baseline.md               # V1.0 Conventional Lipid Extraction Pathway
│   └── pfd_ultra_efficient.md        # V2.0 HTL + CHG + Co-Location $1/gal Pathway
└── dashboard/                        # Interactive Visual Schematic & Calculator
    ├── index.html                    # Dashboard UI layout
    ├── style.css                     # Modern glassmorphism & dark-mode styling
    └── app.js                        # Dynamic schematic renderer & TEA calculator engine
```

---

## 🚀 Quick Start

### 1. Run Techno-Economic Analysis (TEA) Simulation
Run the command-line TEA calculator to view marginal cost breakdowns across baseline and ultra-efficient configurations:

```bash
python3 models/tea_calculator.py
```

### 2. Run Mass & Energy Balance Solver
Execute the thermodynamic & stoichiometric balance solver:

```bash
python3 models/mass_energy_balance.py
```

### 3. Launch Interactive Visual Dashboard
Open `dashboard/index.html` in your web browser or serve it locally:

```bash
python3 -m http.server 8000 --directory dashboard
# Open http://localhost:8000 in your browser
```

---

## 📊 Evolutionary Iterations Summary

| Feature / Metric | Baseline V1.0 (Conventional) | Ultra-Efficient V2.0 ($1/gal Goal) |
| :--- | :--- | :--- |
| **Cultivation System** | Open Raceway Ponds (ORP) | Hybrid PBR + ORP + Wastewater Feed |
| **CO2 Source** | Pure Purchased $CO_2$ ($60/ton) | Flue Gas Co-Location ($0/ton) |
| **Dewatering** | Centrifugation + Thermal Drying | Flocculation + Membrane + Wet HTL Feed (20% solids) |
| **Conversion Pathway** | Solvent Extraction + Transesterification | Hydrothermal Liquefaction (HTL) @ 350°C, 20 MPa |
| **Nutrient Sourcing** | Synthetic N & P Fertilizers | Wastewater Recycled N/P + CHG Recycled Water |
| **Co-Product Credit** | Low-value protein feed ($200/ton) | High-value Protein Isolate + Bio-CH4 Energy Credit |
| **Marginal Cost ($/gal)** | **$10.42 / gal** | **$0.98 / gal** |

---

## 📜 Documentation Roadmap
For a deep dive into the chemical reactions, mass flow rates, and step-by-step process schematics, consult the [docs/](file:///home/matt/Projects/Repos/algae-fuel/docs) directory.
