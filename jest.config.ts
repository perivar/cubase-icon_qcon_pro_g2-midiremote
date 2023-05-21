import { Config } from '@jest/types';

// By default, all files inside `node_modules` are not transformed. But some 3rd party
// modules are published as untranspiled, Jest will not understand the code in these modules.
// To overcome this, exclude these modules in the ignore pattern.
// const untranspiledModulePatterns = []

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  transform: {
    '\\.[t]sx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  testRegex: '/__tests__/.*.test.ts$',
  // transformIgnorePatterns: [`node_modules/(?!${untranspiledModulePatterns.join('|')})`],
  verbose: true,
  moduleNameMapper: {
    midiremote_api_v1: '<rootDir>/api/v1/midiremote_api_v1',
  },
};

export default config;
