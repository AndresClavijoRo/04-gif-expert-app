module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx', 'mjs'],
    transformIgnorePatterns: ['/node_modules/']
  };