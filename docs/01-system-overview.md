# 01 - Algae Fuel Plant System Overview

## 1. Executive Summary & Facility Scope

This document defines the overarching system architecture, process boundaries, mass balance stoichiometry, energy integration flows, and techno-economic principles for an industrial algal biofuel facility.

The facility is modeled for a scale of **10,000 dry metric tons of algal biomass per day** (~3.65 million dry metric tons/year), yielding approximately **70–90 million gallons of refined drop-in biofuel per year**.

```
                           PLANT BOUNDARY SCHEMATIC
+----------------------------------------------------------------------------------+
|                                                                                  |
|  [Flue Gas CO2] ------+                                                          |
|  [Wastewater N/P] ----+---> [ CULTIVATION ] ---> [ HARVESTING & DEWATERING ]     |
|                             (Raceway/PBR)         (Auto-flocculation / DAF)     |
|                                                                 |                |
|                                                      Wet Paste (20% Solids)      |
|                                                                 v                |
|  [Off-Gas CH4/H2] <--- [ HYDROTHERMAL GASIFICATION ] <--- [ HTL REACTOR ]        |
|          |                 (CHG Aqueous Upgrading)        (350°C, 20 MPa)       |
|          v                                                      |                |
|   [HEAT & POWER]                                           Raw Biocrude          |
|          |                                                      v                |
|          +--------------------------------------------> [ HYDROTREATING ]        |
|                                                           (Fixed-Bed Catalytic)  |
|                                                                 |                |
|                                                          Refined Biofuel         |
|                                                          (Renewable Diesel)      |
+----------------------------------------------------------------------------------+
```

---

## 2. Chemical Stoichiometry & Biomass Composition

Algae biomass composition varies by strain, light exposure, and nutrient stress conditions. For our modeling, we utilize a optimized strain of *Nannochloropsis oculata* (or *Chlorella vulgaris* derivative) exhibiting high growth rates and robust lipid/protein accumulation.

### Molecular Formula of Algal Biomass
Empirical formula for dry algal biomass:
$$\text{C}_{106} \text{H}_{181} \text{O}_{45} \text{N}_{16} \text{P}$$
Molecular weight $\approx 2428.9\text{ g/mol}$.

### Elemental Composition by Dry Weight
- **Carbon (C)**: $52.0\%$
- **Hydrogen (H)**: $7.5\%$
- **Oxygen (O)**: $29.6\%$
- **Nitrogen (N)**: $9.2\%$
- **Phosphorus (P)**: $1.3\%$
- **Ash / Minerals**: $0.4\%$

### Photosynthetic Stoichiometry
$$\text{106 } CO_2 + \text{90 } H_2O + \text{16 } HNO_3 + H_3PO_4 + \text{Solar Energy} \longrightarrow \text{C}_{106} \text{H}_{181} \text{O}_{45} \text{N}_{16} \text{P} + \text{154 } O_2$$

To produce **1 dry kg of algal biomass**:
- $1.83\text{ kg } CO_2$ consumed.
- $0.092\text{ kg } N$ (Nitrogen) consumed.
- $0.013\text{ kg } P$ (Phosphorus) consumed.
- $1.31\text{ kg } O_2$ released.

---

## 3. Subsystem Breakdown

### Module 100: Primary Cultivation
- **Open Raceway Ponds (ORP)**: Paddlewheel-driven shallow raceways (20–30 cm deep) occupying 5,000 to 10,000 acres.
- **Photobioreactors (PBR) Seed Stage**: Tubular PBRs utilized for pure seed strain inoculation to prevent contamination.
- **Flue Gas Injection Grid**: Spargers dissolved at bottom sump pits for $>85\%$ $CO_2$ mass transfer efficiency.

### Module 200: Harvesting & Dewatering
- **Primary Dewatering (Auto-flocculation / Electro-coagulation)**: Concentration from $0.05\%$ w/w ($0.5\text{ g/L}$) to $2.0\%$ w/w solids.
- **Secondary Dewatering (Dissolved Air Flotation + Membrane Filtration)**: Concentration from $2.0\%$ w/w to $20.0\%$ w/w wet biomass paste.
- *Crucial Engineering Decision*: **NO thermal drying**. Wet paste at $20\%$ solids is fed directly into Hydrothermal Liquefaction (HTL), eliminating $80\%$ of traditional energy overhead.

### Module 300: Hydrothermal Liquefaction (HTL)
- High-pressure continuous plug-flow reactor operating at $350^\circ\text{C}$ ($662^\circ\text{F}$) and $20\text{ MPa}$ ($2,900\text{ psi}$).
- Water acts as both a nucleophilic reactant and catalyst in subcritical regime.
- Yields: $40-45\%$ Biocrude, $30-35\%$ Aqueous Phase, $15-20\%$ Gas Phase ($CO_2, CH_4, H_2$), $5\%$ Solids (Ash/Char).

### Module 400: Catalytic Hydrothermal Gasification (CHG) & Wastewater Treatment
- Recovers residual dissolved organics from the HTL aqueous phase.
- Fixed-bed ruthenium/nickel catalyst at $380^\circ\text{C}, 20\text{ MPa}$.
- Produces synthetic natural gas ($CH_4 + H_2$) and yields sterile water rich in inorganic $N$ and $P$ recycled back to Module 100 ponds.

### Module 500: Biocrude Upgrading (Hydrotreating & Hydrocracking)
- Fixed-bed hydrotreating reactor using $\text{NiMo}/\gamma\text{-Al}_2\text{O}_3$ catalyst at $380^\circ\text{C}, 10\text{ MPa } H_2$.
- Deoxygenation, denitrogenation, and desulfurization convert biocrude into drop-in paraffinic hydrocarbon diesel ($C_{10}-C_{20}$).

---

## 4. Overall Plant Mass Balance Flow (Target $10,000\text{ MT/day}$ Biomass)

```
===================================================================================
STREAM NAME                 MASS FLOW (MT/day)    SOLIDS W/W (%)    VOLUMETRIC / ENERGY
===================================================================================
101. Flue Gas CO2           18,300                -                 1.83 kg CO2/kg algae
102. Fresh/Recycled Water   5,000,000             -                 5,000 m3/day net
103. Raw Pond Culture Stream20,000,000            0.05%             20,000,000 m3/day
201. Primary Flocculated    500,000               2.0%              500,000 m3/day
202. Dewatered HTL Feed     50,000                20.0%             50,000 MT/day wet
301. HTL Raw Biocrude       4,200                 98.0%             ~30,000 bbl/day
302. HTL Aqueous Stream     35,000                3.0% (Organics)   Recycled to CHG
303. HTL Off-Gas            7,000                 -                 CO2/CH4 mixture
401. CHG Methane/Hydrogen   1,800                 -                 Fuel for plant power
501. Hydrotreated Fuel      3,250                 100.0%            ~260,000 gal/day
===================================================================================
```

---

## 5. Marginal Cost Drivers & Target $1/gal Economics

To achieve the **$1.00/gallon marginal operating cost** goal, the system replaces traditional linear inputs with closed-loop industrial ecology:

1. **CO2 Input Cost**: Reduced from **$60/ton** (purchased pure liquid $CO_2$) to **$0/ton** (co-located flue gas capture from adjacent industrial/power plant).
2. **Nutrient Input Cost**: Reduced from **$450/ton** (synthetic urea + diammonium phosphate) to **$0/ton** (municipal wastewater feed + 92% recycled CHG aqueous nutrients).
3. **Dewatering Energy**: Reduced from **$2.50/gal** (thermal drying) to **$0.12/gal** (membrane/DAF paste directly to HTL).
4. **Plant Power Autonomy**: HTL off-gas and CHG bio-methane generate 100% of internal electricity and process heat via combined heat and power (CHP) turbines.
5. **Co-product Valorization**: Separation of high-value proteins before HTL yields a **$0.40–$0.70/gal credit**, pushing net marginal cost below $1.00/gal.
