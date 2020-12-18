const data = require("../jsonToExcel/nodeConversion");

exports.adequateRateCalculation = {
  acid_gas: {
    connections:
      data.input.aggregated_items_for_substance.acid_gas.connections /
      data.input.aggregated_items_for_substance.Totals.connections,
    flanges:
      data.input.aggregated_items_for_substance.acid_gas.flanges /
      data.input.aggregated_items_for_substance.Totals.flanges,
    open_endeds:
      data.input.aggregated_items_for_substance.acid_gas["open-endeds"] /
      data.input.aggregated_items_for_substance.Totals["open-endeds"],
    pumps:
      data.input.aggregated_items_for_substance.acid_gas.pumps /
      data.input.aggregated_items_for_substance.Totals.pumps,
    valves:
      data.input.aggregated_items_for_substance.acid_gas.valves /
      data.input.aggregated_items_for_substance.Totals.valves,
    others:
      data.input.aggregated_items_for_substance.acid_gas.others /
      data.input.aggregated_items_for_substance.Totals.others,
  },
  condensate: {
    connections:
      data.input.aggregated_items_for_substance.condensate.connections /
      data.input.aggregated_items_for_substance.Totals.connections,
    flanges:
      data.input.aggregated_items_for_substance.condensate.flanges /
      data.input.aggregated_items_for_substance.Totals.flanges,
    open_endeds:
      data.input.aggregated_items_for_substance.condensate["open-endeds"] /
      data.input.aggregated_items_for_substance.Totals["open-endeds"],
    pumps:
      data.input.aggregated_items_for_substance.condensate.pumps /
      data.input.aggregated_items_for_substance.Totals.pumps,
    valves:
      data.input.aggregated_items_for_substance.condensate.valves /
      data.input.aggregated_items_for_substance.Totals.valves,
    others:
      data.input.aggregated_items_for_substance.condensate.others /
      data.input.aggregated_items_for_substance.Totals.others,
  },
  fuel_gas: {
    connections:
      data.input.aggregated_items_for_substance.fuel_gas.connections /
      data.input.aggregated_items_for_substance.Totals.connections,
    flanges:
      data.input.aggregated_items_for_substance.fuel_gas.flanges /
      data.input.aggregated_items_for_substance.Totals.flanges,
    open_endeds:
      data.input.aggregated_items_for_substance.fuel_gas["open-endeds"] /
      data.input.aggregated_items_for_substance.Totals["open-endeds"],
    pumps:
      data.input.aggregated_items_for_substance.fuel_gas.pumps /
      data.input.aggregated_items_for_substance.Totals.pumps,
    valves:
      data.input.aggregated_items_for_substance.fuel_gas.valves /
      data.input.aggregated_items_for_substance.Totals.valves,
    others:
      data.input.aggregated_items_for_substance.fuel_gas.others /
      data.input.aggregated_items_for_substance.Totals.others,
  },
};
const checkCondition = () => {
  if (data.input.aggregated_items_for_substance.Totals.connections === 0) {
    this.adequateRateCalculation.acid_gas.connections = 0;
    this.adequateRateCalculation.condensate.connections = 0;
    this.adequateRateCalculation.fuel_gas.connections = 0;
  }
  if (data.input.aggregated_items_for_substance.Totals.flanges === 0) {
    this.adequateRateCalculation.acid_gas.flanges = 0;
    this.adequateRateCalculation.condensate.flanges = 0;
    this.adequateRateCalculation.fuel_gas.flanges = 0;
  }
  if (data.input.aggregated_items_for_substance.Totals["open-endeds"] === 0) {
    this.adequateRateCalculation.acid_gas.open_endeds = 0;
    this.adequateRateCalculation.condensate.open_endeds = 0;
    this.adequateRateCalculation.fuel_gas.open_endeds = 0;
    console.log("passed successfully")
  }
  if (data.input.aggregated_items_for_substance.Totals.pumps === 0) {
    this.adequateRateCalculation.acid_gas.pumps = 0;
    this.adequateRateCalculation.condensate.pumps = 0;
    this.adequateRateCalculation.fuel_gas.pumps = 0;
  }
  if (data.input.aggregated_items_for_substance.Totals.valves === 0) {
    this.adequateRateCalculation.acid_gas.valves = 0;
    this.adequateRateCalculation.condensate.valves = 0;
    this.adequateRateCalculation.fuel_gas.valves = 0;
  }
  if (data.input.aggregated_items_for_substance.Totals.others === 0) {
    this.adequateRateCalculation.acid_gas.others = 0;
    this.adequateRateCalculation.condensate.others = 0;
    this.adequateRateCalculation.fuel_gas.others = 0;
  }
};
checkCondition()
exports.emission = {
  acid_gas:
    (this.adequateRateCalculation.acid_gas.connections *
      data.input.caliculation_summary.eq_items[0]["Total Emissions (lbs/day)"] +
      this.adequateRateCalculation.acid_gas.flanges *
        data.input.caliculation_summary.eq_items[1][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.acid_gas.open_endeds *
        data.input.caliculation_summary.eq_items[2][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.acid_gas.pumps *
        data.input.caliculation_summary.eq_items[3][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.acid_gas.valves *
        data.input.caliculation_summary.eq_items[4][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.acid_gas.others *
        data.input.caliculation_summary.eq_items[5][
          "Total Emissions (lbs/day)"
        ]) /
    data.input.caliculation_summary["sub_total (lbs/day)"],
  condensate:
    (this.adequateRateCalculation.condensate.connections *
      data.input.caliculation_summary.eq_items[0]["Total Emissions (lbs/day)"] +
      this.adequateRateCalculation.condensate.flanges *
        data.input.caliculation_summary.eq_items[1][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.condensate.open_endeds *
        data.input.caliculation_summary.eq_items[2][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.condensate.pumps *
        data.input.caliculation_summary.eq_items[3][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.condensate.valves *
        data.input.caliculation_summary.eq_items[4][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.condensate.others *
        data.input.caliculation_summary.eq_items[5][
          "Total Emissions (lbs/day)"
        ]) /
    data.input.caliculation_summary["sub_total (lbs/day)"],
  fuel_gas:
    (this.adequateRateCalculation.fuel_gas.connections *
      data.input.caliculation_summary.eq_items[0]["Total Emissions (lbs/day)"] +
      this.adequateRateCalculation.fuel_gas.flanges *
        data.input.caliculation_summary.eq_items[1][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.fuel_gas.open_endeds *
        data.input.caliculation_summary.eq_items[2][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.fuel_gas.pumps *
        data.input.caliculation_summary.eq_items[3][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.fuel_gas.valves *
        data.input.caliculation_summary.eq_items[4][
          "Total Emissions (lbs/day)"
        ] +
      this.adequateRateCalculation.fuel_gas.others *
        data.input.caliculation_summary.eq_items[5][
          "Total Emissions (lbs/day)"
        ]) /
    data.input.caliculation_summary["sub_total (lbs/day)"],
};

exports.calculatedHydrocarbonMolecularWeight =
  this.emission.acid_gas * 34.1 +
  this.emission.condensate * 81.6 +
  this.emission.fuel_gas * 16.04;

exports.combinedLFLofMixture =
  1 /
  (this.emission.acid_gas / 4 +
    this.emission.condensate / 1.5 +
    this.emission.fuel_gas / 5);

exports.correctedVolume =
  359 * (data.input.building_parameters["Maximum Ambient Temperature"].R / 492);

exports.totalHydrocarbonLeakRate =
  (data.input.caliculation_summary["sub_total w/CF (lbs/hr)"] *
    this.correctedVolume) /
  (60 * this.calculatedHydrocarbonMolecularWeight);

exports.freshAirIntroductionRate =
  (this.totalHydrocarbonLeakRate /
    (data.input.building_parameters["Max % of Lower Explosive Limit (LEL)"] /
      100)) *
  this.combinedLFLofMixture;

exports.minFreshAirIntroductionRate = 4 * this.freshAirIntroductionRate;

exports.minAirChangeRequiredForAdequateVentilation =
  (this.minFreshAirIntroductionRate * 60) /
  data.input.building_parameters["Building Volume Without Equipment(cu-ft)"];
