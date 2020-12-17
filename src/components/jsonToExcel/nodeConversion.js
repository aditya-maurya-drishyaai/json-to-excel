const excel = require("node-excel-export");
const express = require("express");
const http = require("http");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressRouter = express.Router();

const port = 3001;
const hostname = "localhost";

let isRequest = false;
const reportPromise = () => {
  if (isRequest) {
    const methodology = require("../nodeData/methodology");
    const fugitiveEmission = require("../nodeData/fugitiveEmission");
    const naturalVegitaion = require("../nodeData/naturalVegitation");
    const apiRpFigure = require("../nodeData/apiRpFigure");
    const sheetReview = require("../nodeData/sheetReview");
    return excel.buildExport([
      {
        name: "Methodology",
        specification: methodology.methodologySpecification,
        data: methodology.methodologyData,
      },
      {
        name: "Fugitive Emission",
        specification: fugitiveEmission.fugitiveEmissionSpecification,
        merges: fugitiveEmission.fugitiveEmissionMerges,
        data: fugitiveEmission.fugitiveEmissionData,
      },
      {
        name: "Natuarl Vegitation",
        merges: naturalVegitaion.naturalVegitationMerges,
        specification: naturalVegitaion.naturalVegitationSpecification,
        data: naturalVegitaion.naturalVegitaionData,
      },
      {
        name: "API RP-505 Figure 1",
        specification: apiRpFigure.apiRpFigureSpecification,
        data: apiRpFigure.apiRpFigureData,
      },
      {
        name: "Calculation Sheet Revisions",
        specification: sheetReview.sheetReviewSpecification,
        data: sheetReview.sheetReviewData,
      },
    ]);
  }
};

expressRouter.use(morgan("dev"));
expressRouter.use(bodyParser.json());

expressRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    next();
  })
  .get((req, res, next) => {
    exports.input = req.body;
    if (req.body !== null) {
      isRequest = true;
      res.attachment("report.xlsx");
      res.send(reportPromise());
    }
  });
app.use("/report", expressRouter);
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log("server is running successfully");
});
