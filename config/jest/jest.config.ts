import path from 'path';

import type { Config } from 'jest';

const jestConfig: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  coverageProvider: 'v8',
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/svgMock.tsx',
  },
  modulePaths: ['<rootDir>/src'],
  rootDir: path.resolve(__dirname, '..', '..'),
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['\\\\node_modules\\\\', '\\.pnp\\.[^\\\\]+$'],
};

export default jestConfig;
