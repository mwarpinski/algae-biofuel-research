# 02 - Algal Cultivation & Harvesting Engineering

## 1. Cultivation Strategy: Open Raceway Ponds vs. Photobioreactors (PBR)

Cultivation is the largest spatial footprint and capital cost component of an algal biofuel facility. Achieving a low marginal operating cost requires maximizing areal productivity ($\text{g/m}^2/\text{day}$) while minimizing paddlewheel energy consumption and construction CapEx.

### Comparative Technology Matrix

| Parametric Index | Open Raceway Ponds (ORP) | Tubular Photobioreactors (PBR) | Hybrid PBR-ORP System (Selected) |
| :--- | :--- | :--- | :--- |
| **Capital Cost ($/ha)** | $40,000 – $70,000 | $300,000 – $600,000 | $80,000 – $110,000 |
| **Areal Biomass Yield** | $15 – 25 \text{ g/m}^2/\text{day}$ | $35 – 50 \text{ g/m}^2/\text{day}$ | **$28 – 35 \text{ g/m}^2/\text{day}$** |
| **Pumping/Power Duty** | $4 – 8 \text{ W/m}^3$ | $25 – 60 \text{ W/m}^3$ | **$6 – 10 \text{ W/m}^3$** |
| **CO2 Retention Ratio** | $45 – 65\%$ | $85 – 95\%$ | **$85 – 92\%$** (via deep sump sparging) |
| **Contamination Risk** | High | Low | Low (Continuous strain re-seeding) |
| **Water Evaporation** | High ($0.5\text{ cm/day}$) | Zero | Low (Enclosed raceway covers) |

```
                              HYBRID PBR-ORP CULTIVATION FLOW
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  [Sterile Inoculum] ---> [ Closed PBR Inoculation ] ---> [ High-Yield Inoculum Seed ]   |
|                                                                   |                     |
|                                                                   v                     |
|  [Flue Gas CO2] --------> [ Deep Sump Injection ] -----> [ Open Raceway Ponds ]        |
|  [Wastewater N/P] ------> [ Nutrient Dosing ]            (Covered PFA / Thin Film)     |
|                                                                   |                     |
|                                                                   v                     |
|                                                       Harvesting Harvest Pump       |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Microalgal Strain Selection & Growth Kinetics

The plant design is calibrated for *Nannochloropsis oculata* (marine microalga) or modified *Chlorella vulgaris*.

### Strain Performance Parameters
- **Specific Growth Rate ($\mu_{max}$)**: $1.2 – 1.8\text{ day}^{-1}$
- **Optimal Temperature Range**: $22^\circ\text{C} – 30^\circ\text{C}$
- **Salinity Tolerance**: $15 – 35\text{ ppt}$ (enables brackish water and seawater utilization)
- **Biomass Lipid Fraction**: $30 – 45\%$ dry weight (under nitrogen starvation stress)
- **Protein Fraction**: $35 – 45\%$ dry weight
- **Carbohydrate Fraction**: $15 – 25\%$ dry weight

### Light Absorption & Specific Growth Rate Equation
Growth rate as a function of photosynthetically active radiation (PAR, $I$ in $\mu\text{mol photons/m}^2/\text{s}$):

$$\mu = \mu_{max} \frac{I}{I_k + I} - \mu_{respiration}$$

Where $I_k$ is the light saturation threshold ($\approx 120 \mu\text{mol/m}^2/\text{s}$).

---

## 3. Carbon Dioxide Supply & Mass Transfer Dynamics

Carbon dioxide is the largest chemical feedstock requirement. For a 10,000 MT/day dry biomass plant, **18,300 MT/day of $CO_2$** must be dissolved into the liquid phase.

### CO2 Transfer Rate (CTR) Equation
$$CTR = k_L a \cdot (C^* - C_L)$$

Where:
- $k_L a$: Volumetric liquid-phase mass transfer coefficient ($\approx 15 – 35 \text{ hr}^{-1}$ in deep sumps).
- $C^*$: Equilibrium dissolved $CO_2$ saturation concentration.
- $C_L$: Bulk liquid phase $CO_2$ concentration (maintained at $10 – 15 \text{ mg/L}$).

### Deep-Sump Sparging Pit Schematic
To achieve $>85\%$ $CO_2$ mass transfer efficiency without gas escape loss, gas spargers are situated at the bottom of **5-meter deep sumps** integrated into the pond loops. The hydrostatic head increases local pressure ($1.5\text{ bar}$ abs), driving $CO_2$ into solution prior to entering the shallow raceway channel.

---

## 4. Harvesting & Dewatering Dewatering Pipeline

Harvesting requires concentrating algae cells from **$0.5\text{ g/L}$ ($0.05\%$ w/w)** to **$200\text{ g/L}$ ($20\%$ w/w)**—a **400x volumetric reduction**.

```
                        DEWATERING STAGE SOLIDS CONCENTRATION
+-----------------------------------------------------------------------------------+
| Stage                 Technology                      Solids In (%)   Solids Out (%) |
+-----------------------------------------------------------------------------------+
| Primary Dewatering    Auto-flocculation / Electro-coag 0.05%          2.0%           |
| Secondary Dewatering  Dissolved Air Flotation (DAF)   2.0%            8.0%           |
| Tertiary Dewatering   Membrane Filtration / Centrifuge8.0%            20.0%          |
+-----------------------------------------------------------------------------------+
```

### Stage 1: Auto-Flocculation / pH Shift
- **Mechanism**: Raising pH to $10.5 – 11.0$ using lime ($\text{Ca(OH)}_2$) or utilizing native multivalent cations ($\text{Mg}^{2+}, \text{Ca}^{2+}$) causes cell surface charge neutralization, precipitating $90\%$ of cells in under 30 minutes.
- **Energy Input**: $< 0.02\text{ kWh/m}^3$.

### Stage 2: Dissolved Air Flotation (DAF)
- Micro-bubbles ($30 – 50\mu\text{m}$) attach to flocculated algal aggregates, floating them to the surface.
- Surface skimmers harvest the concentrated sludge blanket at **$8.0\%$ dry solids**.
- **Energy Input**: $0.15\text{ kWh/m}^3$.

### Stage 3: Hollow-Fiber Cross-Flow Membrane Dewatering
- Low-pressure polymeric hollow-fiber membrane modules ($0.1\mu\text{m}$ pore size) separate liquid permeate from retentate.
- Retentate output reaches **$20.0\%$ w/w solids (wet paste)**.
- **Energy Input**: $0.35\text{ kWh/m}^3$.

### Dewatering Energy Comparison
- **Conventional Thermal Drying (V1.0 Baseline)**: $2.40\text{ kWh/kg dry algae}$ ($2,400\text{ kWh/ton}$).
- **Advanced Mechanical Dewatering to 20% HTL Feed (V2.0 Goal)**: $0.18\text{ kWh/kg dry algae}$ ($180\text{ kWh/ton}$).
- **Energy Reduction**: **$92.5\%$ saving**, enabling low marginal cost viability.
