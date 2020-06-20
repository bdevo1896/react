module.exports = {
  verbose: true,

  setupFiles: ['./src/tests/setup.js'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  testPathIgnorePatterns: ['/pages/', '/dist/', '/lib/'],

  transform: {
    '^.+\\.tsx?$': ['babel-jest', {configFile: './src/tests/.babelrc.js'}],
  },

  testRegex: '.*\\.test\\.(j|t)sx?$',
  // testRegex: 'grid\\/.*\\.test\\.(j|t)sx?$',

  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/styles.{ts,tsx}',
    '!src/components/**/*types.{ts,tsx}',
    '!src/components/styles/*',
    '!src/components/index.ts',
    '!src/components/utils/*',
  ],

  moduleNameMapper: {
    'tests/(.*)$': '<rootDir>/src/tests/$1',
    components: '<rootDir>/src/components/index.ts',
  },
};
