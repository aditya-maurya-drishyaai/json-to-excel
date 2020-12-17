exports.methodologySpecification = {
  col_1: {
    // <- the key should match the actual data key
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (
        value ===
        "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions"
      ) {
        return { font: { sz: "14", bold: "true" } };
      } else if (
        value === "Steps to Calculate the Buildings Natural Ventilation"
      ) {
        return { font: { sz: "14", bold: "true" } };
      } else if (value === "References") {
        return { font: { sz: "12", bold: "true" } };
      } else if (value === "Formula's Used in Calculations") {
        return { font: { sz: "12", bold: "true" } };
      } else if (value === "h=") {
        return { alignment: { horizontal: "right" } };
      } else if (value === "[1]") {
        return {
          alignment: { horizontal: "center" },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "[2]") {
        return {
          alignment: { horizontal: "center" },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "[3]") {
        return {
          alignment: { horizontal: "center" },
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      }
      return { font: { sz: "12" } };
    },
    width: 120, // <- width in pixels
  },
  col_2: {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "H") {
        return {
          alignment: { horizontal: "center" },
          border: { bottom: { style: "medium" } },
        };
      } else if (value === "1 + [(A1/A2)2(Ti/To)]") {
        return { alignment: { horizontal: "center" } };
      } else if (value === "API RP-505") {
        return {
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "API RP-500") {
        return {
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      } else if (value === "ASHRAE Handbook, Chapter 22") {
        return {
          border: {
            top: { style: "medium" },
            right: { style: "medium" },
            bottom: { style: "medium" },
            left: { style: "medium" },
          },
        };
      }
      return { alignment: { horizontal: "left" } };
    },
    width: "27", // <- width in chars (when the number is passed as string)
  },
  col_3: {
    displayName: " ",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    width: "16", // <- width in pixels
  },
  col_4: {
    displayName: " ",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_5: {
    displayName: "a",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
};

exports.methodologyData = [
  {
    col_1:
      "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "1. Find Building Information and populate all deminsions",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1:
      "2. Set contingency factor based on how confident you feel with current P&ID Rev.",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1:
      "3. Using the P&IDs count and catorgrize all items were fugitives emsiions may leak from",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "4. Select the appropriate facility type",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "5. Populate gas stream information.",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Formula's Used in Calculations",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Corrected Volume [ft3/lb-mol] = V",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "V = (Vconst x Ta) / Tconst",
    col_2: "",
    col_3: "",
    col_4: "Where:",
    col_5: "Vconst = 359 [ft3]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "Ta = Ambient Building Temperature in Rankine",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "Tconst = 492 [R]",
  },
  {
    col_1: "Total Hydrocarbon leak Rate [cfm] = G",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "G = [( E) (V)] / [60 x mwavg]",
    col_2: "",
    col_3: "",
    col_4: "Where:",
    col_5: "E = Emission Rate [lb/hr]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "V = Corrected Volume [ft3/lb-mol]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "mwavg = Average Molecular Weight",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Fresh Air Introduction Rate [cfm] = Qr",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Qr = G/C",
    col_2: "",
    col_3: "",
    col_4: "Where:",
    col_5: "G = Total Hydrocarbon Leak Rate [cfm]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "C = LEL x 5% concentration",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Minimum Fresh Air Introduction Rate [cfm] = Q",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Q = Qr x 4",
    col_2: "",
    col_3: "",
    col_4: "Where:",
    col_5: "Qr = Fresh Air Quality Rate [cfm]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "4 = Safety Factor (API RP-505 para. )",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Minimum Air Change Required Per Hour",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "= (Q x 60) /Bldg. Vol.",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Steps to Calculate the Buildings Natural Ventilation",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1:
      "1. Measure the distance from the center of the lower and upper building vents",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "2. Determine the number and size of vents on building",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1:
      "3. Determine what case you would like to study to set louver opening percent (i.e. 100% open for summer season)",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Formula's Used in Calculations",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Neutral Pressure Level [m] = h",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "h=",
    col_2: "H",
    col_3: "(Assume Ti > To)",
    col_4: "Where:",
    col_5: "h = Neutral Pressure Level above center of lower vent [m]",
  },
  {
    col_1: "",
    col_2: "1 + [(A1/A2)2(Ti/To)]",
    col_3: "",
    col_4: "",
    col_5: "A1 = Free area of lower vent [m2]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "A2 = Free area of upper vent [m2]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "Ti = Internal Building Tempature [K]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "To = External Building Tempature [K]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "H = Vertical distance (center-t-center) between A1 and A2 [m]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Air Flow due to Stack Effect [m3/hr] = Q",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "Q = [15940 (Cv)(A) [h (Ti - To) / Ti]1/2 ] x 2",
    col_2: "",
    col_3: "",
    col_4: "Where:",
    col_5: "15940 = Conversion Factor",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "Cv = Effectiveness of Openings (Percent open values)",
  },
  {
    col_1: "If A1 and A2 are not equal, Q is multiplyed but corrention",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "A = Area of the  smallest of the lower and upeer vents [m2]",
  },
  {
    col_1: "factor from API RP-500 Figure 1.",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "h = Neutral Pressure Level [m]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "Ti = Internal Building Tempature [K]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "To = External Building Tempature [K]",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "2 = Safety Factor (API RP-500 para. 6.3.2.4.5)",
  },
  {
    col_1: "Air Changes Per Hour due to Stack Effect",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "= (Q x 60) /Bldg. Vol.",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "References",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "[1]",
    col_2: "API RP-505",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "[2]",
    col_2: "API RP-500",
    col_3: "",
    col_4: "",
    col_5: "",
  },
  {
    col_1: "[3]",
    col_2: "ASHRAE Handbook, Chapter 22",
    col_3: "",
    col_4: "",
    col_5: "",
  },
];
