const { TextEncoder, TextDecoder } = require("util");

Object.assign(global, { TextDecoder, TextEncoder });

const customJestConfig = {
  transform: {
    "^.+\\.m?tsx?$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

export default customJestConfig;
