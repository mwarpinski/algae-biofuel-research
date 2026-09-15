# 03 - Chemical Conversion & Refining Pathways

## 1. Process Comparison: Solvent Extraction vs. Hydrothermal Liquefaction (HTL)

To convert microalgae into liquid biofuels, two primary chemical engineering pathways exist:
1. **Pathway A (Baseline V1.0)**: Dry Biomass $\rightarrow$ Mechanical Cell Disruption $\rightarrow$ Hexane Solvent Extraction $\rightarrow$ Lipid Transesterification (Biodiesel/FAME) + Extraction Meal Waste.
2. **Pathway B (Ultra-Efficient V2.0)**: Wet Biomass Paste (20% Solids) $\rightarrow$ Hydrothermal Liquefaction (HTL) $\rightarrow$ Raw Biocrude $\rightarrow$ Catalytic Hydrotreating (Renewable Hydrocarbon Diesel / HEFA).

```
                             CONVERSION PATHWAY COMPARISON
+-----------------------------------------------------------------------------------------+
| PATHWAY A: CONVENTIONAL SOLVENT EXTRACTION (BASELINE)                                  |
| Wet Algae (20%) --> [Thermal Dryer] --> Dry Algae --> [Hexane Extraction] --> Algal Oil|
|                                                                                    |    |
|                                                     Algal Oil --> [Transester] --> FAME |
+-----------------------------------------------------------------------------------------+
| PATHWAY B: HYDROTHERMAL LIQUEFACTION - HTL (V2.0 TARGET $1/GAL)                         |
| Wet Algae (20%) --> [HTL Reactor 350°C, 20 MPa] --> Biocrude --> [Hydrotreat] --> Diesel|
|                             |                                                           |
|                             v                                                           |
|                     [CHG Aqueous Gasifier] --> CH4/H2 Energy + Recycled N/P Nutrients   |
+-----------------------------------------------------------------------------------------+
```

### Yield & Energy Efficiency Breakdown

| Conversion Parameter | Solvent Extraction (Pathway A) | Hydrothermal Liquefaction (Pathway B) |
| :--- | :--- | :--- |
| **Feedstock Condition** | Completely Dry ($< 10\%$ Water) | Wet Paste ($80\%$ Water / $20\%$ Solids) |
| **Feed Component Utilization** | Lipids Only ($30 – 40\%$ of biomass) | Whole Biomass (Lipids + Proteins + Carbohydrates) |
| **Carbon Yield to Liquid Fuel** | $35 – 45\%$ | **$70 – 82\%$** |
| **Net Energy Balance Ratio (EROI)** | $0.8 – 1.2$ (Negative or marginal) | **$3.5 – 4.8$** (Highly net positive) |
| **Fuel Quality** | Fatty Acid Methyl Esters (FAME) | Drop-in Hydrocarbon Diesel ($C_{10}-C_{20}$) |
| **Oxygen Content of Intermediate** | $10 – 12\%$ | **$5 – 8\%$** |

---

## 2. Hydrothermal Liquefaction (HTL) Unit Operations

HTL operates in subcritical water conditions where water's dielectric constant drops from $80$ (at room temp) to $\approx 15$, behaving like a non-polar solvent that rapidly hydrolyzes structural carbohydrates, proteins, and triglycerides.

### Reaction Conditions & Thermodynamics
- **Operating Temperature**: $350^\circ\text{C}$ ($662^\circ\text{F}$)
- **Operating Pressure**: $20.0\text{ MPa}$ ($2,900\text{ psi}$) (Sufficient to maintain liquid phase)
- **Residence Time**: $15 – 30\text{ minutes}$ in continuous plug-flow reactor.
- **Heat of Reaction ($\Delta H_{rxn}$)**: Exothermic net reaction ($-0.6 \text{ MJ/kg dry algae}$).

### Reaction Stoichiometry & Products
For $1.0\text{ kg dry biomass}$ fed as a 20% slurry ($5.0\text{ kg total wet paste}$):

$$\text{1.0 kg Algae Slurry} \longrightarrow 0.42\text{ kg Biocrude} + 0.33\text{ kg Aqueous Organics} + 0.18\text{ kg Gases } (CO_2/CH_4) + 0.07\text{ kg Solid Char}$$

### Biocrude Properties
- **Higher Heating Value (HHV)**: $37 – 39\text{ MJ/kg}$ (vs. petroleum crude $42\text{ MJ/kg}$).
- **Elemental Profile**: $76\text{ wt\% C}$, $9.5\text{ wt\% H}$, $6.0\text{ wt\% O}$, $4.5\text{ wt\% N}$, $0.5\text{ wt\% S}$.
- **Viscosity**: $0.15\text{ Pa}\cdot\text{s}$ at $60^\circ\text{C}$.

---

## 3. Catalytic Hydrothermal Gasification (CHG) Module

The aqueous byproduct stream from HTL contains $30 – 35\%$ of the initial biomass carbon and nearly all the dissolved nitrogen ($N$) and phosphorus ($P$). Returning this stream directly to ponds would cause toxic ammonia inhibition.

### CHG Unit Specs
- **Reactor Type**: Fixed-bed continuous catalytic reactor.
- **Catalyst**: Ruthenium on carbon ($\text{Ru/C}$) or specialized Nickel-promoted titania ($\text{Ni/TiO}_2$).
- **Operating Parameters**: $380^\circ\text{C}, 20.0\text{ MPa}$.
- **Conversion Efficiency**: $>99\%$ destruction of chemical oxygen demand (COD).

### Chemical Reaction & Outputs
$$\text{Dissolved Organics } (C, H, O, N) + H_2O \longrightarrow CH_4 + CO_2 + H_2 + NH_4^+ + PO_4^{3-}$$

- **Energy Output**: Produces $0.18\text{ Nm}^3\text{ CH}_4 / \text{kg dry algae fed}$, supplying **100% of the plant's process heat and power requirements** when combusted in a Combined Heat & Power (CHP) gas turbine.
- **Nutrient Output**: $95\%$ of nitrogen recovered as ammonium ions ($\text{NH}_4^+$) and phosphorus as phosphate ($\text{PO}_4^{3-}$), continuously recycled to Module 100 cultivation ponds.

---

## 4. Biocrude Hydrotreating & Refining

Raw HTL biocrude contains heteroatoms ($N, O, S$) that must be removed via catalytic hydroprocessing to meet ASTM D975 diesel specifications.

```
                          HYDROTREATING CATALYTIC BLOCK
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  Raw Biocrude --------> [ Hydrotreating Guard Bed ] ---> [ Fixed-Bed Hydrotreater ]     |
|  Hydrogen (H2) -------> (Metal Trap & Demetallation)    (380°C, 10 MPa NiMo/Al2O3)      |
|                                                                 |                       |
|                                                                 v                       |
|  [Off-Gas H2S/NH3] <--- [ High-Pressure Separator ] <--- Deoxygenated Hydrocarbons       |
|                                                                 |                       |
|                                                                 v                       |
|                                                      [ Fractionation Column ]           |
|                                                      /          |         \             |
|                                               Naphtha        Diesel       Heavy Fuel   |
|                                               (15%)          (75%)        (10%)         |
+-----------------------------------------------------------------------------------------+
```

### Hydrotreating Reactions
1. **Hydrodeoxygenation (HDO)**:
   $$\text{R-OH} + H_2 \longrightarrow \text{R-H} + H_2O$$
2. **Hydrodenitrogenation (HDN)**:
   $$\text{R-NH}_2 + 2 H_2 \longrightarrow \text{R-H} + NH_3$$
3. **Hydrodesulfurization (HDS)**:
   $$\text{R-SH} + H_2 \longrightarrow \text{R-H} + H_2S$$

### Finished Refined Fuel Specifications (Algal Renewable Diesel)
- **Cetane Number**: $68 – 75$ (vs. fossil diesel standard $\ge 40$).
- **Density at 15°C**: $0.78 \text{ g/cm}^3$.
- **Sulfur Content**: $< 5 \text{ ppm}$ (Ultra-low sulfur compliant).
- **Cold Filter Plugging Point (CFPP)**: $-15^\circ\text{C}$ (Excellent cold-flow characteristics).
