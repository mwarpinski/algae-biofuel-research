#!/usr/bin/env python3
"""
Mass and Energy Balance Solver for Algae Biofuel Plant.
Calculates stoichiometry, carbon balance, water flows, HTL reaction enthalpy, 
CHG gas production, co-product recovery rates (Animal Feed, Bio-Fertilizer, Hydrochar),
and overall net energy ratio (EROI).
"""

import math
from dataclasses import dataclass

@dataclass
class PlantInputs:
    biomass_dry_tons_per_day: float = 10000.0  # Dry MT/day
    algae_carbon_content: float = 0.52          # 52% C
    algae_protein_content: float = 0.40         # 40% crude protein
    algae_nitrogen_content: float = 0.092       # 9.2% N
    algae_phosphorus_content: float = 0.013     # 1.3% P
    harvest_solids_fraction: float = 0.20       # 20% solids wet paste to HTL
    htl_carbon_efficiency: float = 0.70         # 70% carbon converted to biocrude
    biocrude_carbon_content: float = 0.76       # 76% C in biocrude
    biocrude_hhv_mj_kg: float = 38.5            # MJ/kg biocrude
    hydrotreating_yield: float = 0.85           # 85% biocrude to diesel conversion
    diesel_density_kg_gal: float = 3.00         # ~3.0 kg per gallon finished diesel
    co2_sparging_efficiency: float = 0.88       # 88% dissolution efficiency

class MassEnergyBalanceSolver:
    def __init__(self, inputs: PlantInputs = PlantInputs()):
        self.p = inputs

    def solve(self):
        # 1. Carbon & Feedstock Stoichiometry
        dry_kg_per_day = self.p.biomass_dry_tons_per_day * 1000.0
        carbon_kg_per_day = dry_kg_per_day * self.p.algae_carbon_content
        
        # Stoichiometric CO2 required (44/12 ratio for CO2 to C)
        co2_required_stoichiometric_kg = carbon_kg_per_day * (44.0 / 12.0)
        co2_gross_required_kg = co2_required_stoichiometric_kg / self.p.co2_sparging_efficiency
        
        # Nutrients
        nitrogen_kg_per_day = dry_kg_per_day * self.p.algae_nitrogen_content
        phosphorus_kg_per_day = dry_kg_per_day * self.p.algae_phosphorus_content
        
        # 2. Dewatering & Wet Slurry Stream
        wet_slurry_kg_per_day = dry_kg_per_day / self.p.harvest_solids_fraction
        water_in_slurry_kg_per_day = wet_slurry_kg_per_day - dry_kg_per_day
        
        # 3. HTL Reactor Conversion
        biocrude_carbon_kg_per_day = carbon_kg_per_day * self.p.htl_carbon_efficiency
        biocrude_mass_kg_per_day = biocrude_carbon_kg_per_day / self.p.biocrude_carbon_content
        biocrude_barrels_per_day = (biocrude_mass_kg_per_day / 136.4) # ~136.4 kg per bbl biocrude
        
        # Co-Product Stream Yields
        # Protein Extraction / Animal Feed (12% of biomass harvested as feed meal)
        animal_feed_mt_per_day = self.p.biomass_dry_tons_per_day * 0.12
        
        # Struvite Bio-Fertilizer (Precipitated MgNH4PO4 from CHG aqueous)
        struvite_fertilizer_mt_per_day = (phosphorus_kg_per_day * (245.4 / 31.0)) / 1000.0 * 0.60
        
        # HTL Hydro-char Soil Amendment (5% of biomass dry mass)
        hydrochar_mt_per_day = self.p.biomass_dry_tons_per_day * 0.05

        # Aqueous Phase Organics & CHG Gas Yield
        aqueous_carbon_kg_per_day = carbon_kg_per_day * 0.22 # 22% carbon to aqueous phase
        chg_methane_mass_kg_per_day = aqueous_carbon_kg_per_day * (16.0 / 12.0) * 0.75 # 75% conversion to CH4
        chg_energy_gj_per_day = (chg_methane_mass_kg_per_day * 55.5) / 1000.0 # 55.5 MJ/kg CH4
        
        # 4. Hydrotreating & Finished Biofuel Yield
        finished_fuel_mass_kg_per_day = biocrude_mass_kg_per_day * self.p.hydrotreating_yield
        gallons_diesel_per_day = finished_fuel_mass_kg_per_day / self.p.diesel_density_kg_gal
        gallons_diesel_per_year = gallons_diesel_per_day * 365.0
        
        # Energy Content of Finished Fuel
        fuel_energy_gj_per_day = (finished_fuel_mass_kg_per_day * 44.0) / 1000.0 # 44 MJ/kg diesel
        
        # 5. Energy Balances & Net Energy Ratio (EROI)
        electricity_demand_kwh_per_day = dry_kg_per_day * 0.18
        electricity_demand_mwh_per_day = electricity_demand_kwh_per_day / 1000.0
        electricity_demand_mw = electricity_demand_mwh_per_day / 24.0
        
        # Power generation from CHG Methane CHP Turbine (40% electrical efficiency)
        electricity_generation_mw = (chg_energy_gj_per_day * 1000.0 / 86400.0) * 0.40
        net_electricity_mw = electricity_generation_mw - electricity_demand_mw
        
        # EROI (Energy Return on Energy Invested)
        total_fossil_energy_input_gj_day = (electricity_demand_mwh_per_day * 3.6) * 0.20 # 80% renewable self-power
        eroi = fuel_energy_gj_per_day / max(1.0, total_fossil_energy_input_gj_day)

        return {
            "biomass_dry_mt_day": self.p.biomass_dry_tons_per_day,
            "co2_gross_mt_day": co2_gross_required_kg / 1000.0,
            "wet_slurry_mt_day": wet_slurry_kg_per_day / 1000.0,
            "biocrude_mt_day": biocrude_mass_kg_per_day / 1000.0,
            "biocrude_bbl_day": biocrude_barrels_per_day,
            "chg_methane_mt_day": chg_methane_mass_kg_per_day / 1000.0,
            "animal_feed_mt_day": animal_feed_mt_per_day,
            "struvite_fertilizer_mt_day": struvite_fertilizer_mt_per_day,
            "hydrochar_mt_day": hydrochar_mt_per_day,
            "chg_power_gen_mw": electricity_generation_mw,
            "plant_power_demand_mw": electricity_demand_mw,
            "net_power_export_mw": net_electricity_mw,
            "finished_diesel_gal_day": gallons_diesel_per_day,
            "finished_diesel_gal_year": gallons_diesel_per_year,
            "fuel_yield_gal_per_ton": gallons_diesel_per_day / self.p.biomass_dry_tons_per_day,
            "eroi": eroi
        }

def main():
    solver = MassEnergyBalanceSolver()
    results = solver.solve()
    print("=" * 75)
    print("ALGAE BIO-REFINERY - MASS, ENERGY, & CO-PRODUCT BALANCE")
    print("=" * 75)
    print(f"Biomass Feedstock Rate    : {results['biomass_dry_mt_day']:,.0f} Dry MT/day")
    print(f"Gross CO2 Requirement     : {results['co2_gross_mt_day']:,.1f} MT CO2/day")
    print(f"HTL Biocrude Production   : {results['biocrude_mt_day']:,.1f} MT/day ({results['biocrude_bbl_day']:,.0f} bbl/day)")
    print("-" * 75)
    print("CO-PRODUCT PRODUCTION RATES:")
    print(f"  1. High-Protein Animal Feed  : {results['animal_feed_mt_day']:,.1f} MT/day")
    print(f"  2. Struvite Bio-Fertilizer  : {results['struvite_fertilizer_mt_day']:,.1f} MT/day")
    print(f"  3. Hydro-Char Soil Amendment : {results['hydrochar_mt_day']:,.1f} MT/day")
    print(f"  4. Bio-Methane Energy Fuel   : {results['chg_methane_mt_day']:,.1f} MT/day ({results['chg_power_gen_mw']:.1f} MW)")
    print("-" * 75)
    print(f"FINISHED DIESEL PRODUCTION : {results['finished_diesel_gal_day']:,.0f} gallons/day")
    print(f"ANNUAL FUEL PRODUCTION     : {results['finished_diesel_gal_year']/1e6:,.2f} Million gallons/year")
    print(f"NET ENERGY RATIO (EROI)    : {results['eroi']:.2f}x")
    print("=" * 75)

if __name__ == "__main__":
    main()
