# 12 - Fuzzy Science, Shaky Assumptions, & Expert Interview Question Guide

## 1. Executive Summary: Exposing Model Vulnerabilities

To transition this bio-refinery design from theoretical modeling to bankable commercial reality, we must candidly expose **where our science is fuzzy**, **where our assumptions are shaky**, and **which domain experts can validate or correct our numbers**.

```
                        MODEL VULNERABILITY SUMMARY
+-----------------------------------------------------------------------------------------+
| ASSUMPTION AREA            SHAKY ASSUMPTION IN MODEL    REAL-WORLD RISKS / FUZZY SCIENCE|
+-----------------------------------------------------------------------------------------+
| 1. Slurry Rheology         20% wet paste pumps smoothly Viscoelastic gel plugging risk  |
| 2. CHG Catalyst Life       8,000 hr Ru/TiO2 catalyst life Deactivation via coking/sulfur |
| 3. Biological DAC Flux     Passive air capture at 35 g/m² Mass transfer (kLa) bottleneck|
| 4. Agrivoltaic Optics      80% PAR light transmission   Optical degradation & salt crust|
+-----------------------------------------------------------------------------------------+
```

---

## 2. The 4 "Shaky" Assumptions & Limits of Known Science

### Shaky Assumption #1: High-Pressure Slurry Rheology (20% Wet Algae Paste)

#### The Assumption
We assumed that dewatered algae paste at **20% solids (200 dry g/L)** behaves as a pumpable shear-thinning fluid that can be pressurized to $20.0\text{ MPa}$ ($2,900\text{ psi}$) and pumped through heat exchanger tubes without plugging.

#### Why It's Fuzzy
Concentrated microalgae paste at 20% solids is not a simple fluid; it behaves as a **dense, viscoelastic, non-Newtonian yield-stress gel** (similar to thick toothpaste or wet clay).
- **The Risk**: If the yield stress ($\tau_0$) is too high, standard centrifugal or screw pumps will cavitate. Heat exchanger tubes will develop stagnant wall boundary layers, causing severe thermal clogging and catastrophic pressure drops ($\Delta P > 10\text{ MPa}$).

---

### Shaky Assumption #2: CHG Catalyst Deactivation & Lifetime

#### The Assumption
We assumed an **8,000-hour (1-year) continuous catalyst lifetime** for Ruthenium-on-Titania ($\text{Ru/TiO}_2$) in the Catalytic Hydrothermal Gasification (CHG) reactor.

#### Why It's Fuzzy
Hydrothermal gasification of real algal aqueous phase exposes the catalyst to dissolved organosulfur, organonitrogen, and alkali salts at $380^\circ\text{C}$ and $20\text{ MPa}$.
- **The Risk**: Lab tests at Pacific Northwest National Laboratory (PNNL) show that organic nitrogen (pyrroles/ammonia) and residual sulfur can cause **catalyst surface coking and metal sintering within 1,000 to 2,000 hours**, requiring frequent expensive catalyst replacements that could add **+$0.45/gal** to fuel costs.

---

### Shaky Assumption #3: Passive Atmospheric $CO_2$ Direct Air Capture (DAC) Flux

#### The Assumption
We assumed that high-pH (10.5) alkaline pond water naturally absorbs atmospheric $CO_2$ ($420\text{ ppm}$) fast enough to support an areal yield of **$35\text{ g/m}^2/\text{day}$** without active mechanical air blowing.

#### Why It's Fuzzy
The liquid-film mass transfer coefficient ($k_L a$) for atmospheric $CO_2$ crossing an open air-water interface at $0.3\text{ m/s}$ channel velocity is physically limited.
- **The Risk**: Passive atmospheric absorption may max out at **$12 – 18\text{ g/m}^2/\text{day}$**. To hit $35\text{ g/m}^2/\text{day}$, the plant may need to blow millions of cubic feet of air through spargers, requiring electrical blower power that would reduce our net energy surplus.

---

### Shaky Assumption #4: Semitransparent Agrivoltaic Panel Optical Durability

#### The Assumption
We assumed semitransparent dichroic/perovskite PV panels suspended over raceways transmit **$>80\%$ of Red (660nm) and Blue (430nm) PAR light** to the algae while maintaining $150\text{ W/m}^2$ electrical output for 25 years.

#### Why It's Fuzzy
Operating solar panels directly over high-humidity, warm, salty algae ponds creates an intense microclimate.
- **The Risk**: Water vapor, salt spray, and aerosolized algae spores cause **rapid surface soiling and thin-film optical degradation**, dropping PAR transmission to $<50\%$ within 18 months unless expensive automated robot cleaning systems are installed.

---

## 3. Expert Directory: Who to Contact to Clear Up the Information

```
====================================================================================================
DOMAIN AREA             RECOMMENDED EXPERT / INSTITUTION                  KEY EXPERTISE
====================================================================================================
1. HTL & CHG Processing Dr. Igor Kutnyakov / Dr. Andrew Schmidt (PNNL)    PNNL Hydrothermal Group
2. Bio-Refinery TEA     Dr. Ryan Davis / Dr. Philip Pienkos (NREL)       NREL Algal TEA Models
3. Algae Microhydrodynamics Dr. John Benemann (Microbio Resources Inc.)  Pond Mass Transfer Pioneer
4. Semitransparent PV   Dr. Stephen Forrest (Univ. of Michigan / NREL)   Organic & Perovskite PV
5. High-Pressure Pumps  FELUWA Pumpen / GEA Group / KAMAT GmbH           Slurry Diaphragm Pumps
====================================================================================================
```

---

## 4. Master Interview Question List for Subject Matter Experts

### Category A: Questions for HTL & CHG Experts (PNNL / NREL)
1. **Q-A1 (Slurry Flow)**: "What is the measured yield stress ($\tau_0$) and apparent viscosity of *Nannochloropsis* slurry at 20% dry solids when preheated to 200°C? What pipe diameter and Reynolds number are required to prevent tube-wall fouling in heat exchangers?"
2. **Q-A2 (Catalyst Lifetime)**: "In your longest continuous CHG bench-top runs, what was the exact deactivation rate of $\text{Ru/TiO}_2$ when processing HTL aqueous phase with $>3,000\text{ ppm}$ dissolved organic nitrogen? What guard bed chemistry best extends catalyst life beyond 5,000 hours?"
3. **Q-A3 (Depressurization Valves)**: "What valve trim material (Tungsten Carbide, Silicon Carbide, Diamond-coated) has demonstrated the longest operational life during 20 MPa continuous HTL slurry letdown?"

### Category B: Questions for Microalgae Photobioreactor Experts (Dr. John Benemann)
4. **Q-B1 (Atmospheric DAC Flux)**: "Under open raceway conditions ($0.3\text{ m/s}$ fluid velocity, pH 10.5), what is the maximum measured flux of atmospheric $CO_2$ into the liquid phase ($\text{g CO}_2/\text{m}^2/\text{day}$) without active gas sparging?"
5. **Q-B2 (TLA Antenna Mutants)**: "Have TLA truncated antenna strains of *Nannochloropsis* demonstrated long-term genetic stability in unsterilized outdoor raceways, or do wild revertants with full antennas outcompete them over 30-day cycles?"

### Category C: Questions for Agrivoltaic & PV Materials Scientists (NREL / Univ. of Michigan)
6. **Q-C1 (PAR Transmittance)**: "What is the measured optical transmission spectrum of semitransparent perovskite/organic solar modules in the 430–450 nm and 660–680 nm bands? How does long-term moisture exposure affect dichroic filtering performance?"
7. **Q-C2 (Soiling & Encapsulation)**: "What anti-reflective, hydrophobic coatings are recommended to prevent algae aerosol soiling and salt crusting on panels mounted 2 meters above open raceway ponds?"
