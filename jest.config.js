module.exports = {
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    'index.js$'
  ],
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 99,
      functions: 99,
      lines: 99
    }
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
