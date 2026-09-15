# 07 - CapEx, Fixed Overhead, & Off-Grid Renewable Microgrid Architecture

## 1. Executive Summary: Off-Grid Facility Vision

To achieve true operational independence, immunity from grid price spikes, and absolute zero Net-Zero carbon intensity, the **10,000 Dry MT/day Algae Bio-Refinery** is designed to operate **100% off-grid**.

The facility combines a massive **24/7 firm bio-energy baseline** (from CHG bio-methane gas turbines) with an on-site **Solar PV + Wind + Battery Storage (BESS)** microgrid.

```
                           OFF-GRID MICROGRID HYBRID ARCHITECTURE
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  [ Solar PV Array (100 MW) ] ----+                                                      |
|  [ Wind Turbine Farm (50 MW)] ---+---> [ 150 MWh BESS Battery ]                          |
|                                                |                                        |
|                                                v                                        |
|  [ CHG Bio-Gas Turbine (300 MW)] ----> [ 24/7 FIRM MICROGRID BUS ] ---> [ PLANT DEMAND ]|
|  (293.9 MW Dispatchable Baseload)              |                        (75 MW Load)    |
|                                                v                                        |
|                                    [ Surplus Green Power ]                              |
|                                    (EV Fleets / Hydrogen)                               |
+-----------------------------------------------------------------------------------------+
```

> [!NOTE]
> **Reviewer's Skeptical Note on CapEx Learning Curves & Microgrid Declines**:
> 1. **Swanson's Law & Battery Price Trends**: Solar PV modules drop ~20% per doubling of global capacity, and lithium battery cell prices fell 85% between 2010 and 2024. The 100 MW PV + 150 MWh BESS microgrid CapEx ($110M) will drop to **$60M–$70M by 2030**.
> 2. **FOAK to NOAK High-Pressure Alloy Scaling**: The first 10,000 MT/day HTL reactor built (FOAK) will suffer a ~40% cost premium due to Inconel 625 fabrication tooling ($390M module CapEx). By the 5th plant (NOAK), standardized modular fabrication will drop HTL CapEx down to **$210M–$240M**.

---

## 2. Capital Expenditure (CapEx) Breakdown ($10,000\text{ Dry MT/day}$ Plant)

Scale: **10,000 Dry MT/day Algae Biomass** (~12,000 acres total footprint) | **495.3 Million Gallons/year Fuel**

```
====================================================================================================
PROCESS MODULE / INFRASTRUCTURE SYSTEM                TOTAL CAPEX ($M)   PERCENTAGE OF CAPEX
====================================================================================================
100. Cultivation Ponds (10,000 ac ORP + PBR Seed + Sumps)$380.0 M        28.8%
200. Harvesting & Dewatering (DAF + Hollow Fiber Memb)  $120.0 M         9.1%
300. Hydrothermal Liquefaction (HTL Reactor Train 350°C)$280.0 M         21.2%
400. Catalytic Hydrothermal Gasification (CHG System)   $160.0 M         12.1%
500. Biocrude Hydrotreating & Refining Plant           $140.0 M         10.6%
600. Off-Grid Microgrid System (Solar + Wind + BESS)    $110.0 M         8.3%
700. Offsite Infrastructure (Land, Roads, Water, Civil) $50.0 M          3.8%
800. Engineering, Procurement, Construction (EPC & Cont) $80.0 M         6.1%
----------------------------------------------------------------------------------------------------
TOTAL INSTALLED FACILITY CAPEX                          $1,320.0 M       100.0%
====================================================================================================
```

### Amortized CapEx per Gallon Calculation
- **Facility Lifetime**: 25 years ($300\text{ months}$).
- **Weighted Average Cost of Capital (WACC)**: $7.5\%$ interest rate.
- **Annual Amortization Capital Recovery Factor (CRF)**: $0.0897$.
- **Annual Capital Charge**: $\$1,320\text{M} \times 0.0897 = \mathbf{\$118.4\text{ Million / year}}$.
- **Amortized Capital Cost per Gallon**:
  $$\text{CapEx Charge} = \frac{\$118,400,000\text{ / year}}{495,300,000\text{ gallons / year}} = \mathbf{\$0.239 / \text{gallon}}$$

---

## 3. Off-Grid Renewable Microgrid System Specs

The plant requires **75 MW continuous electrical power** for paddlewheel mixing, pond harvesting pumps, membrane filtration, gas sparging, and hydrotreater hydrogen compression.

### Microgrid Components
1. **Primary Firm Baseload: CHG Bio-Gas Combined Cycle Turbine (300 MW Capacity)**:
   - Fuel Source: 1,144 MT/day of synthetic natural gas ($CH_4 + H_2$) generated on-site by Catalytic Hydrothermal Gasification.
   - Continuous Output: **293.9 MW continuous power**.
   - Role: Provides $100\%$ dispatchable baseload power day and night, immune to weather fluctuations.
2. **Solar PV Array (100 MW Peak)**:
   - Single-axis tracking bifacial solar panels occupying ~400 acres adjacent to ponds.
   - Generates daytime peak power to offset peak pumping loads during solar maximum.
3. **Wind Farm (50 MW Capacity)**:
   - 10 x 5 MW wind turbines capturing diurnal desert/coastal winds.
4. **Battery Energy Storage System (BESS - 150 MWh LFP)**:
   - Lithium Iron Phosphate ($\text{LiFePO}_4$) battery bank.
   - Role: Microgrid frequency regulation, millisecond voltage stabilization, and black-start capability.

```
                           OFF-GRID POWER BALANCE (MW)
  350 MW +-----------------------------------------------------------------------+
         | [ Total Generation Capacity: 443.9 MW Peak ]                          |
  300 MW |   - CHG Bio-Methane Firm Power: 293.9 MW                              |
         |   - Solar PV Daytime Peak: 100 MW                                     |
  200 MW |   - Wind Farm Peak: 50 MW                                             |
         |                                                                       |
  100 MW |                                                                       |
   75 MW | ===== PLANT DEMAND: 75.0 MW CONTINUOUS LOAD ========================= |
    0 MW +-----------------------------------------------------------------------+
         | [ NET SURPLUS: +218.9 MW (Exportable to Local EV Fleets / Grid) ]      |
         +-----------------------------------------------------------------------+
```

---

## 4. Fixed Operating Overhead & Labor Breakdown (Fixed OpEx)

Fixed overhead encompasses all non-variable expenses required to maintain, staff, insure, and automate the 12,000-acre facility.

```
====================================================================================================
OVERHEAD CATEGORY                ANNUAL COST ($M/YR)   COST PER GALLON ($/GAL)
====================================================================================================
1. Plant Staffing & Labor        $18.5 M / yr          $0.037 / gal
2. Scheduled O&M & Spares        $26.4 M / yr          $0.053 / gal
3. SCADA Automation & Sensors    $6.2 M / yr           $0.013 / gal
4. Insurance & Risk Management   $13.2 M / yr          $0.027 / gal
5. Environmental Compliance      $4.5 M / yr           $0.009 / gal
6. Land Lease / Property Tax     $8.0 M / yr           $0.016 / gal
----------------------------------------------------------------------------------------------------
TOTAL FIXED OVERHEAD OPEX        $76.8 M / yr          $0.155 / gal
====================================================================================================
```

### Staffing Plan (24/7 Shift Operations - 120 Total Employees)
- **Executive & Engineering**: 1 Plant Manager, 4 Chemical Process Engineers, 2 Bio-Refinery Specialists.
- **SCADA Control & Automation**: 16 SCADA Operators (4 per shift across 4 shifts).
- **Field & Pond Operations**: 40 Technicians for paddlewheels, sumps, and membrane backwashing.
- **Refinery & HTL Operators**: 24 High-pressure reactor technicians.
- **Maintenance & Electrical**: 20 Electricians, mechanics, and microgrid technicians.
- **Quality Assurance & Safety**: 14 Laboratory chemists and EHS officers.

---

## 5. Total Economics: Minimum Fuel Selling Price (MFSP)

By adding Amortized CapEx ($0.24/gal) and Fixed Overhead ($0.15/gal) to our Marginal Operating Cost ($0.98/gal), we determine the **Minimum Fuel Selling Price (MFSP)** required for project solvency:

```
===================================================================================
COST ELEMENT                     MARGINAL OPEX LEVER    COST PER GALLON ($/GAL)
===================================================================================
Variable Operating Expense (OpEx)In-situ $H_2$, Catalysts $0.38 / gal
Fixed Overhead & Staffing        120 Staff + SCADA O&M  $0.15 / gal
Amortized Capital Cost (CapEx)   $1.32B @ 7.5% WACC    $0.24 / gal
-----------------------------------------------------------------------------------
GROSS TOTAL PRODUCTION COST                             $0.77 / gal
Co-Product & Power Credits       Protein + Excess Power -$0.86 / gal
CO2 Credit Option A (Free Flue Gas)$0/t CO2             $0.00 / gal
-----------------------------------------------------------------------------------
NET MINIMUM FUEL SELLING PRICE (MFSP - Free Flue Gas)   $0.91 / gal  <-- UNDER $1.00!
NET MFSP (With $25/t Tipping Fee)  Industrial Tipping   $0.51 / gal
NET MFSP (With 45Q DAC Credit)     Atmospheric DAC      -$1.17 / gal (NET PROFIT!)
===================================================================================
```
