export default {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom", "./jest.setup.js"],
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
  };