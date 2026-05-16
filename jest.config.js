const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: { url: 'http://localhost:3000' },
  roots: ['<rootDir>/src/', '<rootDir>/app/'],
  moduleNameMapper: {
    '^Src(.*)$': '<rootDir>/src$1',
    '^next/image$': '<rootDir>/src/test-helpers/__mocks__/next-image.tsx',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-helpers/setup-tests.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'src/test-helpers'],
})
