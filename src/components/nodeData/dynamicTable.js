/* eslint-disable no-unused-expressions */
const { input } = require("../jsonToExcel/nodeConversion");
exports.dynamicTableSpecification = {
  col_10: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_11: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_12: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_13: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_14: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_15: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
};
let dynamicData = [];
let dynamicHeader = {};
let dynamicHeaderTitle = {};
let dynamicConnection = {};
let dynamicFlanges = {};
let dynamicOpenEndeds = {};
let dynamicPumps = {};
let dynamicValves = {};
let dynamicOthers = {};
const handleDynamicData = () => {
  input.items_per_substance.map((value, index) => {
    (dynamicHeader["col_1"] = ""),
      (dynamicHeader["col_1" + (index + index * 2)] = "P&ID Name:"),
      (dynamicHeader["col_1" + (index + index * 2 + 1)] = value.pnId),
      (dynamicHeader["col_1" + (index + index * 2 + 2)] = ""),
      (dynamicHeaderTitle["col_1" + (index + index * 2)] = "Acid Gas"),
      (dynamicHeaderTitle["col_1" + (index + index * 2 + 1)] = "Condensate"),
      (dynamicHeaderTitle["col_1" + (index + index * 2 + 2)] = "Fuel Gas"),
      (dynamicConnection["col_1" + (index + index * 2)] =
        value.acid_gas.connections),
      (dynamicConnection["col_1" + (index + index * 2 + 1)] =
        value.condensate.connections),
      (dynamicConnection["col_1" + (index + index * 2 + 2)] =
        value.fuel_gas.connections),
      (dynamicFlanges["col_1" + (index + index * 2)] = value.acid_gas.flanges),
      (dynamicFlanges["col_1" + (index + index * 2 + 1)] =
        value.condensate.flanges),
      (dynamicFlanges["col_1" + (index + index * 2 + 2)] =
        value.fuel_gas.flanges),
      (dynamicOpenEndeds["col_1" + (index + index * 2)] =
        value.acid_gas["open-endeds"]),
      (dynamicOpenEndeds["col_1" + (index + index * 2 + 1)] =
        value.condensate["open-endeds"]),
      (dynamicOpenEndeds["col_1" + (index + index * 2 + 2)] =
        value.fuel_gas["open-endeds"]),
      (dynamicPumps["col_1" + (index + index * 2)] = value.acid_gas.pumps),
      (dynamicPumps["col_1" + (index + index * 2 + 1)] =
        value.condensate.pumps),
      (dynamicPumps["col_1" + (index + index * 2 + 2)] = value.fuel_gas.pumps),
      (dynamicValves["col_1" + (index + index * 2)] = value.acid_gas.valves),
      (dynamicValves["col_1" + (index + index * 2 + 1)] =
        value.condensate.valves),
      (dynamicValves["col_1" + (index + index * 2 + 2)] =
        value.fuel_gas.valves),
      (dynamicOthers["col_1" + (index + index * 2)] = value.acid_gas.others),
      (dynamicOthers["col_1" + (index + index * 2 + 1)] =
        value.condensate.others),
      (dynamicOthers["col_1" + (index + index * 2 + 2)] =
        value.fuel_gas.others);
  });
  dynamicData.push(
    dynamicHeader,
    dynamicHeaderTitle,
    dynamicConnection,
    dynamicFlanges,
    dynamicOpenEndeds,
    dynamicPumps,
    dynamicValves,
    dynamicOthers
  );
  return dynamicHeader;
};

exports.dynamicTableData = handleDynamicData();
