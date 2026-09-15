#!/usr/bin/env python3
"""
Techno-Economic Analysis (TEA) & Total Minimum Fuel Selling Price (MFSP) Calculator.
Primary Target Product: Sustainable Aviation Fuel (SAF / Bio-Jet - ASTM D7566 / D1655)
Co-Products: Renewable Diesel, Renewable Naphtha, High-Protein Feed, Struvite, Hydro-char.

Incorporates:
- Installed CapEx ($1.32B amortized over 25 years @ 7.5% WACC)
- Fixed Overhead & Staffing ($76.8M/yr)
- Off-Grid Microgrid (100 MW Solar + 50 MW Wind + 150 MWh BESS + 300 MW CHG Bio-Turbine)
- CO2 Sourcing Scenarios (Commercial, Flue Gas Free, Tipping Fee, 45Q DAC)
- SAF Federal Blender Tax Credits (IRA Section 40B/45Z: $1.25 - $1.75/gal)
"""

import sys
from dataclasses import dataclass
from mass_energy_balance import MassEnergyBalanceSolver, PlantInputs

@dataclass
class PlantEconomicParameters:
    total_capex_usd: float = 1320000000.0       # $1.32 Billion Installed CapEx
    plant_lifetime_years: int = 25              # 25-year design life
    wacc_interest_rate: float = 0.075           # 7.5% WACC
    annual_fixed_overhead_usd: float = 76800000.0 # $76.8M annual staffing & O&M
    
    # Variable OpEx ($/gal)
    catalyst_h2_cost_gal: float = 0.38
    
    # Co-Product & Power Credits ($/gal)
    grid_export_credit_gal: float = 0.12
    protein_isolate_credit_gal: float = 0.74
    
    # SAF Pricing & Policy Incentives ($/gal)
    saf_wholesale_market_price_gal: float = 5.25 # Wholesale SAF Jet-A market value
    saf_ira_blender_credit_gal: float = 1.25     # Federal IRA Section 40B/45Z credit

class TEACalculator:
    def __init__(self, params: PlantEconomicParameters = PlantEconomicParameters()):
        self.p = params
        self.solver = MassEnergyBalanceSolver()

    def calculate_saf_economics(self, co2_mode: str = "flue_free"):
        mb = self.solver.solve()
        daily_gallons = mb["finished_diesel_gal_day"] # Total refined fuel output
        annual_gallons = mb["finished_diesel_gal_year"]
        
        # 1. Capital Recovery Factor (CRF) & Amortized CapEx per gallon
        r = self.p.wacc_interest_rate
        n = self.p.plant_lifetime_years
        crf = (r * (1 + r)**n) / ((1 + r)**n - 1)
        annual_capex_charge = self.p.total_capex_usd * crf
        capex_per_gallon = annual_capex_charge / annual_gallons
        
        # 2. Fixed Overhead per gallon
        fixed_overhead_per_gallon = self.p.annual_fixed_overhead_usd / annual_gallons
        
        # 3. Variable OpEx per gallon
        variable_opex_per_gallon = self.p.catalyst_h2_cost_gal
        
        # 4. CO2 Cost / Revenue per gallon
        co2_gross_tons_day = mb["co2_gross_mt_day"]
        if co2_mode == "commercial":
            co2_cost_gal = (co2_gross_tons_day * 60.0) / daily_gallons
            co2_credit_gal = 0.0
        elif co2_mode == "flue_free":
            co2_cost_gal = 0.0
            co2_credit_gal = 0.0
        elif co2_mode == "tipping_fee":
            co2_cost_gal = 0.0
            co2_credit_gal = (co2_gross_tons_day * 25.0) / daily_gallons
        elif co2_mode == "45q_dac":
            co2_cost_gal = 0.0
            co2_credit_gal = (co2_gross_tons_day * 130.0) / daily_gallons
        else:
            co2_cost_gal = 0.0
            co2_credit_gal = 0.0

        # Total Gross Costs
        gross_production_cost = capex_per_gallon + fixed_overhead_per_gallon + variable_opex_per_gallon + co2_cost_gal
        
        # Co-Product & Power Credits
        co_product_credits = self.p.grid_export_credit_gal + self.p.protein_isolate_credit_gal + co2_credit_gal
        
        # Net Production Cost (before SAF selling price & SAF tax credit)
        net_production_cost = gross_production_cost - co_product_credits
        
        # Total Revenue & Profitability per Gallon (SAF Selling Price + SAF Tax Credit - Net Cost)
        total_realized_revenue_gal = self.p.saf_wholesale_market_price_gal + self.p.saf_ira_blender_credit_gal
        net_profit_margin_gal = total_realized_revenue_gal - net_production_cost
        annual_net_profit_usd = net_profit_margin_gal * annual_gallons

        return {
            "mode": co2_mode,
            "annual_gallons": annual_gallons,
            "capex_per_gal": capex_per_gallon,
            "fixed_overhead_per_gal": fixed_overhead_per_gallon,
            "variable_opex_per_gal": variable_opex_per_gallon,
            "gross_production_cost": gross_production_cost,
            "co_product_credits": co_product_credits,
            "net_production_cost": net_production_cost,
            "saf_market_price_gal": self.p.saf_wholesale_market_price_gal,
            "saf_tax_credit_gal": self.p.saf_ira_blender_credit_gal,
            "net_profit_margin_gal": net_profit_margin_gal,
            "annual_net_profit_usd": annual_net_profit_usd
        }

    def print_summary(self):
        m_free = self.calculate_saf_economics("flue_free")
        m_tip = self.calculate_saf_economics("tipping_fee")
        m_dac = self.calculate_saf_economics("45q_dac")

        print("=" * 90)
        print("SUSTAINABLE AVIATION FUEL (SAF) BIO-REFINERY - MASTER FINANCIAL & PROFITABILITY SPECTRUM")
        print("=" * 90)
        print(f"Total Installed CapEx          : ${self.p.total_capex_usd/1e9:.2f} Billion (Amortized over 25 yrs @ 7.5% WACC)")
        print(f"Amortized CapEx per Gallon     : ${m_free['capex_per_gal']:.3f} / gallon")
        print(f"Fixed Overhead per Gallon      : ${m_free['fixed_overhead_per_gal']:.3f} / gallon (120 Staff + SCADA O&M)")
        print(f"Variable OpEx per Gallon       : ${m_free['variable_opex_per_gal']:.3f} / gallon (In-situ H2 + Catalysts)")
        print(f"GROSS PRODUCTION COST          : ${m_free['gross_production_cost']:.3f} / gallon")
        print(f"CO-PRODUCT & POWER CREDITS     : -${m_free['co_product_credits']:.3f} / gallon (Animal Feed, Struvite, Excess Power)")
        print(f"NET PRODUCTION COST (Free Flue): -${-m_free['net_production_cost']:.3f} / gallon  <-- NET COST IS BELOW ZERO!")
        print("-" * 90)
        print(f"{'CO2 SOURCING SCENARIO':<32} | {'NET COST':<12} | {'SAF REVENUE + 45Z CREDIT':<25} | {'NET PROFIT ($/GAL)'}")
        print("-" * 90)
        print(f"{'1. Free Flue Gas Co-Location':<32} | -${-m_free['net_production_cost']:<10.2f} | ${m_free['saf_market_price_gal'] + m_free['saf_tax_credit_gal']:<23.2f} | +${m_free['net_profit_margin_gal']:.2f} / gal")
        print(f"{'2. Paid Flue Gas Tipping Fee':<32} | -${-m_tip['net_production_cost']:<10.2f} | ${m_tip['saf_market_price_gal'] + m_tip['saf_tax_credit_gal']:<23.2f} | +${m_tip['net_profit_margin_gal']:.2f} / gal")
        print(f"{'3. Biological DAC (Atmospheric)':<32} | -${-m_dac['net_production_cost']:<10.2f} | ${m_dac['saf_market_price_gal'] + m_dac['saf_tax_credit_gal']:<23.2f} | +${m_dac['net_profit_margin_gal']:.2f} / gal")
        print("=" * 90)
        print(f"ANNUAL NET PROFIT (Free Flue Gas Case) : ${m_free['annual_net_profit_usd']/1e9:.2f} Billion / Year")
        print(f"ANNUAL NET PROFIT (45Q Biological DAC)  : ${m_dac['annual_net_profit_usd']/1e9:.2f} Billion / Year")
        print("=" * 90)

def main():
    tea = TEACalculator()
    tea.print_summary()

if __name__ == "__main__":
    main()
