module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["./node_modules"],
  moduleNameMapper: {
    "\\.(s?css|less)$": "identity-obj-proxy",
  },
};
