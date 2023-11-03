import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsConfig from './tsconfig.json';

const createJestConfig = nextJest({
  dir: './',
});

export default createJestConfig({
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/src' }),
  setupFiles: ['./src/test/setup.ts'],
});
