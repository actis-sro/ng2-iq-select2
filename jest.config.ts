import { Config } from 'jest';
const jestConfig: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  reporters: [
    'default',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['cobertura', 'text', 'text-summary', 'html'],
  cacheDirectory: '.jestcache'
};

export default jestConfig;
