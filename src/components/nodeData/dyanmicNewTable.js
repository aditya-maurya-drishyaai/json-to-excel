const { input } = require("../jsonToExcel/nodeConversion");
const facility_type = input.caliculation_summary.facility_type;
let dynamicData = {};
let dynamicHeader = {};
let dynamicHeaderTitle = {};
let dynamicConnection = {};
let dynamicFlanges = {};
let dynamicOpenEndeds = {};
let dynamicPumps = {};
let dynamicValves = {};
let dynamicOthers = {};
const handleNewDynamicData = () => {
  input.items_per_substance.forEach((value, index) => {
    dynamicHeader["col_1"] = "";
    dynamicHeader["col_2"] = "Number of Items Per Substance";
    dynamicHeader["col_3"] = "";
    dynamicHeader["col_4"] = "";
    dynamicHeader["col_5"] = "";
    dynamicHeader["col_6"] = "";
    dynamicHeader["col_7"] = "";
    dynamicHeader["col_8"] = "";
    dynamicHeader["col_9"] = "";
    dynamicHeader["col_10"] = "";
    dynamicHeader["col_1" + (index + index * 2 + 1)] = "P&ID Name:";
    dynamicHeader["col_1" + (index + index * 2 + 2)] = value.pnId;
    dynamicHeader["col_1" + (index + index * 2 + 3)] = "";
    dynamicHeaderTitle["col_1"] = "";
    dynamicHeaderTitle["col_2"] = "Items";
    dynamicHeaderTitle["col_3"] = "";
    dynamicHeaderTitle["col_4"] = "";
    dynamicHeaderTitle["col_5"] = "Condensate";
    dynamicHeaderTitle["col_6"] = "Fuel Gas";
    dynamicHeaderTitle["col_7"] = "Acid Gas";
    dynamicHeaderTitle["col_8"] = "Total";
    dynamicHeaderTitle["col_9"] = "";
    dynamicHeaderTitle["col_10"] = "";
    dynamicHeaderTitle["col_1" + (index + index * 2 + 1)] = "Acid Gas";
    dynamicHeaderTitle["col_1" + (index + index * 2 + 2)] = "Condensate";
    dynamicHeaderTitle["col_1" + (index + index * 2 + 3)] = "Fuel Gas";
    dynamicConnection["col_1"] = "";
    dynamicConnection["col_2"] = "Connections";
    dynamicConnection["col_3"] = "";
    dynamicConnection["col_4"] = "";
    dynamicConnection["col_5"] = parseInt(
      `${input.aggregated_items_for_substance.acid_gas.connections}`
    );
    dynamicConnection["col_6"] = parseInt(
      `${input.aggregated_items_for_substance.condensate.connections}`
    );
    dynamicConnection["col_7"] = parseInt(
      `${input.aggregated_items_for_substance.fuel_gas.connections}`
    );
    dynamicConnection["col_8"] = parseInt(
      `${input.aggregated_items_for_substance.Totals.connections}`
    );
    dynamicConnection["col_9"] = "";
    dynamicConnection["col_10"] = "";
    dynamicConnection["col_1" + (index + index * 2 + 1)] =
      value.acid_gas.connections;
    dynamicConnection["col_1" + (index + index * 2 + 2)] =
      value.condensate.connections;
    dynamicConnection["col_1" + (index + index * 2 + 3)] =
      value.fuel_gas.connections;
    dynamicFlanges["col_1"] = "";
    dynamicFlanges["col_2"] = "Flanges";
    dynamicFlanges["col_3"] = "";
    dynamicFlanges["col_4"] = "";
    dynamicFlanges["col_5"] = parseInt(
      `${input.aggregated_items_for_substance.acid_gas.flanges}`
    );
    dynamicFlanges["col_6"] = parseInt(
      `${input.aggregated_items_for_substance.condensate.flanges}`
    );
    dynamicFlanges["col_7"] = parseInt(
      `${input.aggregated_items_for_substance.fuel_gas.flanges}`
    );
    dynamicFlanges["col_8"] = parseInt(
      `${input.aggregated_items_for_substance.Totals.flanges}`
    );
    dynamicFlanges["col_9"] = "";
    dynamicFlanges["col_10"] = "";
    dynamicFlanges["col_1" + (index + index * 2 + 1)] = value.acid_gas.flanges;
    dynamicFlanges["col_1" + (index + index * 2 + 2)] =
      value.condensate.flanges;
    dynamicFlanges["col_1" + (index + index * 2 + 3)] = value.fuel_gas.flanges;
    dynamicOpenEndeds["col_1"] = "";
    dynamicOpenEndeds["col_2"] = "Open-Endeds";
    dynamicOpenEndeds["col_3"] = "";
    dynamicOpenEndeds["col_4"] = "";
    dynamicOpenEndeds["col_5"] = parseInt(
      `${input.aggregated_items_for_substance.acid_gas["open-endeds"]}`
    );
    dynamicOpenEndeds["col_6"] = parseInt(
      `${input.aggregated_items_for_substance.condensate["open-endeds"]}`
    );
    dynamicOpenEndeds["col_7"] = parseInt(
      `${input.aggregated_items_for_substance.fuel_gas["open-endeds"]}`
    );
    dynamicOpenEndeds["col_8"] = parseInt(
      `${input.aggregated_items_for_substance.Totals["open-endeds"]}`
    );
    dynamicOpenEndeds["col_9"] = "";
    dynamicOpenEndeds["col_10"] = "";
    dynamicOpenEndeds["col_1" + (index + index * 2 + 1)] =
      value.acid_gas["open-endeds"];
    dynamicOpenEndeds["col_1" + (index + index * 2 + 2)] =
      value.condensate["open-endeds"];
    dynamicOpenEndeds["col_1" + (index + index * 2 + 3)] =
      value.fuel_gas["open-endeds"];
    dynamicPumps["col_1"] = "";
    dynamicPumps["col_2"] = "Pumps";
    dynamicPumps["col_3"] = "";
    dynamicPumps["col_4"] = "";
    dynamicPumps["col_5"] = parseInt(
      `${input.aggregated_items_for_substance.acid_gas.pumps}`
    );
    dynamicPumps["col_6"] = parseInt(
      `${input.aggregated_items_for_substance.condensate.pumps}`
    );
    dynamicPumps["col_7"] = parseInt(
      `${input.aggregated_items_for_substance.fuel_gas.pumps}`
    );
    dynamicPumps["col_8"] = parseInt(
      `${input.aggregated_items_for_substance.Totals.pumps}`
    );
    dynamicPumps["col_9"] = "";
    dynamicPumps["col_10"] = "";
    dynamicPumps["col_1" + (index + index * 2 + 1)] = value.acid_gas.pumps;
    dynamicPumps["col_1" + (index + index * 2 + 2)] = value.condensate.pumps;
    dynamicPumps["col_1" + (index + index * 2 + 3)] = value.fuel_gas.pumps;
    dynamicValves["col_1"] = "";
    dynamicValves["col_2"] = "Valves";
    dynamicValves["col_3"] = "";
    dynamicValves["col_4"] = "";
    dynamicValves["col_5"] = parseInt(
      `${input.aggregated_items_for_substance.acid_gas.valves}`
    );
    dynamicValves["col_6"] = parseInt(
      `${input.aggregated_items_for_substance.condensate.valves}`
    );
    dynamicValves["col_7"] = parseInt(
      `${input.aggregated_items_for_substance.fuel_gas.valves}`
    );
    dynamicValves["col_8"] = parseInt(
      `${input.aggregated_items_for_substance.Totals.valves}`
    );
    dynamicValves["col_9"] = "";
    dynamicValves["col_10"] = "";
    dynamicValves["col_1" + (index + index * 2 + 1)] = value.acid_gas.valves;
    dynamicValves["col_1" + (index + index * 2 + 2)] = value.condensate.valves;
    dynamicValves["col_1" + (index + index * 2 + 3)] = value.fuel_gas.valves;
    dynamicOthers["col_1"] = "";
    dynamicOthers["col_2"] = "*Others";
    dynamicOthers["col_3"] = "";
    dynamicOthers["col_4"] = "";
    dynamicOthers["col_5"] = parseInt(
      `${input.aggregated_items_for_substance.acid_gas.others}`
    );
    dynamicOthers["col_6"] = parseInt(
      `${input.aggregated_items_for_substance.condensate.others}`
    );
    dynamicOthers["col_7"] = parseInt(
      `${input.aggregated_items_for_substance.fuel_gas.others}`
    );
    dynamicOthers["col_8"] = parseInt(
      `${input.aggregated_items_for_substance.Totals.others}`
    );
    dynamicOthers["col_9"] = "";
    dynamicOthers["col_10"] = "";
    dynamicOthers["col_1" + (index + index * 2 + 1)] = value.acid_gas.others;
    dynamicOthers["col_1" + (index + index * 2 + 2)] = value.condensate.others;
    dynamicOthers["col_1" + (index + index * 2 + 3)] = value.fuel_gas.others;
  });
  dynamicData["header"] = dynamicHeader;
  dynamicData["title"] = dynamicHeaderTitle;
  dynamicData["connection"] = dynamicConnection;
  dynamicData["flanges"] = dynamicFlanges;
  dynamicData["open_endeds"] = dynamicOpenEndeds;
  dynamicData["pumps"] = dynamicPumps;
  dynamicData["valves"] = dynamicValves;
  dynamicData["others"] = dynamicOthers;
  return dynamicData;
};
const dynamicCol = {};
const handleDynamicSpecification = () => {
  dynamicCol["col_1"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  };
  dynamicCol["col_2"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return { alignment: { horizontal: "left" } };
      } else if (value === "Spreadsheet Description:") {
        return {
          alignment: {
            wrapText: true,
            vertical: "center",
            horizontal: "center",
          },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "Building Parameters") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      } else if (value === "Description") {
        return {
          font: { sz: "12", bold: true },
        };
      } else if (value === "Number of Items Per Substance") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      } else if (value === "Fugitive Emissions Calculation Summary") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      } else if (value === "Adequate Ventilation Rate Calculation:") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      } else if (value === "Facility Type") {
        return {
          alignment: { horizontal: "center", vertical: "center" },
        };
      } else if (value === facility_type) {
        return {
          alignment: { horizontal: "center", vertical: "center" },
        };
      } else if (value === "Sour Gas Dehy. Skid (BU-406)") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
        };
      } else if (
        value ===
        "*Others includes: instruments, loading arms, pressure relief valves, stuffing boxes, compressor seals, dump lever arms, vents"
      ) {
        return { font: { italic: true } };
      } else if (value === "References") {
        return {
          font: { sz: "12", bold: true },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_3"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_4"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return { alignment: { horizontal: "left" } };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true, horizontal: "center" },
      };
    },
  };
  dynamicCol["col_5"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      } else if (value === "H2S") {
        return {
          font: { bold: true },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_6"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_7"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      } else if (value === "Total =") {
        return {
          alignment: { horizontal: "right" },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "=") {
        return {
          alignment: { horizontal: "right" },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "Total w/CF =") {
        return {
          alignment: { horizontal: "right" },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === ">=C5") {
        return {
          font: { bold: true },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_8"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_9"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      } else if (value === "87% C1") {
        return {
          font: { bold: true },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      }
      return {
        border: {
          top: { style: "medium" },
          right: { style: "medium" },
          bottom: { style: "medium" },
          left: { style: "medium" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol["col_10"] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return { alignment: { horizontal: "right" } };
      } else if (typeof value === "string") {
        return {
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
          alignment: { wrapText: true },
        };
      } else if (typeof value === "number") {
        return {
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
          alignment: { wrapText: true },
        };
      }
    },
  };
  input.items_per_substance.forEach((value, index) => {
    dynamicCol["col_1" + (index + index * 2 + 1)] = {
      displayName: "",
      headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
      cellStyle: (value, row) => {
        if (value === "") {
          return { alignment: { horizontal: "right" } };
        } else if (typeof value === "string") {
          return {
            border: {
              top: { style: "medium" },
              right: { style: "medium" },
              bottom: { style: "medium" },
              left: { style: "medium" },
            },
            alignment: { wrapText: true },
          };
        } else if (typeof value === "number") {
          return {
            border: {
              top: { style: "medium" },
              right: { style: "medium" },
              bottom: { style: "medium" },
              left: { style: "medium" },
            },
            alignment: { wrapText: true },
          };
        }
      },
    };
    dynamicCol["col_1" + (index + index * 2 + 2)] = {
      displayName: "",
      headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
      cellStyle: (value, row) => {
        if (value === "") {
          return { alignment: { horizontal: "right" } };
        } else if (typeof value === "string") {
          return {
            border: {
              top: { style: "medium" },
              right: { style: "medium" },
              bottom: { style: "medium" },
              left: { style: "medium" },
            },
            alignment: { wrapText: true },
          };
        } else if (typeof value === "number") {
          return {
            border: {
              top: { style: "medium" },
              right: { style: "medium" },
              bottom: { style: "medium" },
              left: { style: "medium" },
            },
            alignment: { wrapText: true },
          };
        }
      },
    };
    dynamicCol["col_1" + (index + index * 2 + 3)] = {
      displayName: "",
      headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
      cellStyle: (value, row) => {
        if (value === "") {
          return { alignment: { horizontal: "right" } };
        } else if (typeof value === "string") {
          return {
            border: {
              top: { style: "medium" },
              right: { style: "medium" },
              bottom: { style: "medium" },
              left: { style: "medium" },
            },
            alignment: { wrapText: true },
          };
        } else if (typeof value === "number") {
          return {
            border: {
              top: { style: "medium" },
              right: { style: "medium" },
              bottom: { style: "medium" },
              left: { style: "medium" },
            },
            alignment: { wrapText: true },
          };
        }
      },
    };
  });
  return dynamicCol;
};
console.log(handleDynamicSpecification());
exports.dynamicSpecification = handleDynamicSpecification();

exports.dynamicNewTableData = handleNewDynamicData();
exports.dynamicSpecification = handleDynamicSpecification();
