module.exports = {
  testURL: 'http://localhost:8080',
  moduleNameMapper: {
    '^Src(.*)$': '<rootDir>/src$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg|jpg)$': '<rootDir>/src/test-helpers/__mocks__/file-mock.js',
  },
  roots: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/main.jsx',
    '<rootDir>/src/redux/(root-reducer|store).js',
    '/node_modules/',
    '/test-helpers/',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/test-helpers/setup-tests.js',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
}
