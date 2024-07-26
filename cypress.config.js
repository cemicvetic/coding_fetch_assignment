const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://sdetchallenge.fetch.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
