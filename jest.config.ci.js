module.exports = {
  ...require("./jest.config"),
  coverageReporters: ["json"],
  reporters: [
    [
      "jest-junit",
      { outputDirectory: "reports", outputName: "js-test-results.xml" },
    ],
    // [
    //   "jest-silent-reporter",
    //   { showPaths: true, showWarnings: true, useDots: true },
    // ],
  ],
};
