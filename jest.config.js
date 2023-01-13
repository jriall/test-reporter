module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  // https://github.com/uuidjs/uuid/issues/451#issuecomment-1112328417
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve("uuid"),
  },
};
