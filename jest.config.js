
const dotenv = require('dotenv');

dotenv.config({ path: './.env.test' });
module.exports = {
    collectCoverageFrom: [
        // "src/**",
        "src/**/*.{js,jsx}",
        "!src/index.js",
        "!src/modules/clientManagement/bulkOnboard/**/*.{js,jsx}",
    ],
    verbose: true,
    snapshotSerializers: [
        "enzyme-to-json/serializer",
    ],
    moduleDirectories: [
        "node_modules",
        "src",
    ],
    coveragePathIgnorePatterns: [
        // "/node_modules/",
        // "src/Apollo-Client",
        // "src/config",
        ".*\\.d\\.{js|jsx}",
    ],
    testResultsProcessor: "jest-sonar-reporter",
    resolver: "jest-pnp-resolver",
    setupFiles: [
        "react-app-polyfill/jsdom",
    ],
    setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
        "<rootDir>/src/**/?(*.)(spec|test).{js,jsx}",
    ],
    testEnvironment: "jsdom",
    testURL: "http://localhost",
    transform: {
        // [`<rootDir>/(${dentsuModules}).+\\.(js|jsx)$`]: 'babel-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\](?!(@dentsu)\\/).+\\.(js|jsx|ts|tsx)$",
        // "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
        // `/node_modules/(?!${dentsuModules}.(js!jsx))`,
        // "^.+\\.module\\.(css|sass|scss)$",
    ],
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    moduleFileExtensions: [
        "web.js",
        "js",
        "json",
        "web.jsx",
        "jsx",
        "node",
    ],
};
