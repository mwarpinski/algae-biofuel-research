# 13 - Engineering Rationale & Model Action Plan

## 1. Executive Summary: Why We Need Answers & What We Will Do

Asking targeted questions to domain experts is not just an academic exercise—it is the direct mechanism used to **refine mathematical models**, **size physical equipment**, **eliminate catastrophic failure modes**, and **lock in bankable economics**.

```
                        QUESTION-TO-ACTION MATRIX
+-----------------------------------------------------------------------------------------+
| DOMAIN QUESTION            WHY WE NEED TO KNOW          WHAT WE WILL DO WITH THE ANSWER |
+-----------------------------------------------------------------------------------------+
| 1. Slurry Rheology         Prevent HTL pipe clogging    Size heat exchangers & pump MW  |
| 2. Catalyst Deactivation   Catalyst replacement cost    Size guard beds & TEA OpEx ($/g)|
| 3. Biological DAC Flux     Verify atmospheric growth    Decide if air blowers needed    |
| 4. Agrivoltaic Soiling     Solar PV power & PAR light   Add robot wash CapEx & PV yield |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Detailed Rationale & Action Plan by Question Category

### Category 1: High-Pressure Slurry Rheology (20% Wet Algae Paste)

#### Why We Need to Know
Concentrated algae paste (200 dry g/L) is a non-Newtonian viscoelastic gel. If yield stress ($\tau_0$) is too high:
- High-pressure feed pumps will cavitate.
- Stagnant boundary layers will form in heat exchanger tubes, leading to thermal baking and reactor shutdown.

#### Our Specific Goals
- Eliminate heat exchanger tube plugging risks.
- Accurately size feed pump electrical motors ($P_{pump} = \frac{Q \cdot \Delta P}{\eta}$).

#### What We Will Do With the Information
1. **Mathematical Solver**: Update `models/mass_energy_balance.py` with real-world fluid friction factors ($f$) and pressure drop ($\Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho v^2}{2}$).
2. **Process Redesign**: If 20% solids is un-pumpable, we will re-calibrate the dewatering module to **15% solids + inline ultrasonic shear-thinning**, recalculating HTL heat duties and yield balances.

---

### Category 2: CHG Catalyst Lifetime & Poisoning Rates ($\text{Ru/TiO}_2$)

#### Why We Need to Know
Catalyst deactivation dictates replacement frequency (1,000 hrs vs 8,000 hrs). Replacing precious Ruthenium/Nickel catalysts 4x more often increases operating costs by **+$0.45 / \text{gallon}$**.

#### Our Specific Goals
- Protect our target net fuel price ($<\$1.00 / \text{gal}$).
- Design protective guard beds to trap sulfur and heavy metals upstream.

#### What We Will Do With the Information
1. **TEA Calculator**: Update `models/tea_calculator.py` with verified catalyst depletion rates and annual O&M replacement reserves.
2. **Process Schematics**: Insert a **Sacrificial Guard Bed Absorber (ZnO / Active Carbon)** directly into [schematics/pfd_ultra_efficient.md](file:///home/matt/Projects/Repos/algae-fuel/schematics/pfd_ultra_efficient.md) upstream of the CHG reactor.

---

### Category 3: Passive Atmospheric $CO_2$ Direct Air Capture (DAC) Flux ($k_L a$)

#### Why We Need to Know
Knowing the true passive mass transfer rate ($\text{g CO}_2/\text{m}^2/\text{day}$) determines whether open raceways can hit $35\text{ g/m}^2/\text{day}$ growth without mechanical air blowers.

#### Our Specific Goals
- Verify Section 45Q Biological DAC credit eligibility ($130/t$).
- Prevent unexpected electrical power drains from air blowers.

#### What We Will Do With the Information
1. **System Boundaries**: If passive absorption caps growth at $18\text{ g/m}^2/\text{day}$, we will add low-pressure micro-spargers or flue-gas pipes to the cultivation loops and update internal electrical demand in `models/mass_energy_balance.py`.

---

### Category 4: Agrivoltaic Panel Optics & Soiling Loss

#### Why We Need to Know
Quantifying Red (660nm) and Blue (430nm) PAR light transmission and desert soiling rates dictates real-world solar electricity generation ($W/m^2$) and biomass growth.

#### Our Specific Goals
- Protect the **$110M microgrid CapEx investment** (100 MW solar PV + 150 MWh BESS).
- Ensure algae ponds underneath receive sufficient PAR photons.

#### What We Will Do With the Information
1. **CapEx & OpEx Modeling**: Add automated robotic panel-cleaning O&M costs ($+\$0.015/gal$) to `docs/07-capex-fixed-costs-and-offgrid-microgrid.md`.
2. **Optical Calibration**: Recalibrate panel tilt angles and anti-reflective hydrophobic coating specs in `docs/09-solar-spectrum-splitting-and-mixing.md`.

---

## 3. Summary: The Value of Precision

| Information Source | Risk Eliminated | Economic Impact | Model Updated |
| :--- | :--- | :--- | :--- |
| **Slurry Rheology Data** | Heat Exchanger Clogging | Avoids $12M/yr downtime | `mass_energy_balance.py` |
| **Catalyst Life Data** | Unexpected OpEx Spikes | Prevents +$0.45/gal penalty | `tea_calculator.py` |
| **Pond DAC Flux Data** | Parasitic Electrical Load | Preserves 218 MW power surplus | `docs/06-co2-sourcing.md` |
| **Agrivoltaic Optics Data** | Microgrid Power Deficit | Protects 100 MW PV yield | `docs/09-agrivoltaics.md` |
