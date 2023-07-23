import type { Config } from 'jest';
import * as dotenv from 'dotenv-flow';

dotenv.config();

export default (): Config => {
  return {
    clearMocks: true,
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
      '!<rootDir>/src/**/*.d.ts',
      '!<rootDir>/src/routes/**',
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleDirectories: ['node_modules', 'src'],
  };
};
