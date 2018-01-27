const threshold = 90

module.exports = {
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    'index.js$',
    'theme.js$',
    'redux/enhancers/middlewares.js$',
    'redux/store.js$'
  ],
  coverageThreshold: {
    global: {
      statements: threshold,
      branches: threshold,
      functions: threshold,
      lines: threshold
    }
  },
  moduleNameMapper: {
    '^@actions(.*)': '<rootDir>/src/redux/actions$1',
    '^@assets(.*)': '<rootDir>/src/assets$1',
    '^@atoms(.*)': '<rootDir>/src/components/atoms$1',
    '^@molecules(.*)': '<rootDir>/src/components/molecules$1',
    '^@organisms(.*)': '<rootDir>/src/components/organisms$1',
    '^@pages(.*)': '<rootDir>/src/components/pages$1',
    '^@redux(.*)': '<rootDir>/src/redux$1',
    '^@selectors(.*)': '<rootDir>/src/redux/selectors$1',
    '^@services(.*)': '<rootDir>/src/services$1',
    '^@templates(.*)': '<rootDir>/src/components/templates$1'
  },
  setupFiles: [
    './tests/setup.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironmentOptions: {
    url: 'https://abc.def.ghi/base'
  }
}
