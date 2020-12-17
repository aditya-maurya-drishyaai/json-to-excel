exports.sheetReviewSpecification = {
  col_1: {
    // <- the key should match the actual data key
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  },
  col_2: {
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
  },
  col_3: {
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
  },
  col_4: {
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
  },
  col_5: {
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
  },
  col_6: {
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
  },
  col_7: {
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
  },
};
exports.sheetReviewData = [
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
    col_6: "",
    col_7: "",
  },
  {
    col_1: "",
    col_2: "",
    col_3: "",
    col_4: "",
    col_5: "",
    col_6: "",
    col_7: "",
  },
  {
    col_1: "",
    col_2: "Rev",
    col_3: "Description",
    col_4: "Date",
    col_5: "By",
    col_6: "Checked",
    col_7: "Approved",
  },
  {
    col_1: "",
    col_2: "0",
    col_3: "Standardizing Formatting of Spreadsheet",
    col_4: "07/23/2015",
    col_5: "RW",
    col_6: "TA",
    col_7: "TA",
  },
  {
    col_1: "",
    col_2: "1",
    col_3: "Added multiple P&IDs for counting",
    col_4: "Oct 2 2017",
    col_5: "WDS",
    col_6: "TA",
    col_7: "TA",
  },
];
