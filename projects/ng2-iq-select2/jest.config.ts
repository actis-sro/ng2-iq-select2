import { Config } from 'jest';
const jestConfig: Config = {

  preset: 'jest-preset-angular',
  testEnvironment: 'jest-preset-angular/environments/jest-jsdom-env',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  reporters: [
    'default',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['cobertura', 'text', 'text-summary', 'html'],
  cacheDirectory: '.jestcache'
};

export default jestConfig;
