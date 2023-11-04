const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 6000,
    env: {
      url : "https://rahulshettyacademy.com"
    },
    retries: {
      runMode: 1,
    },
    setupNodeEvents(on, config) {
      // node event listeners
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
});
