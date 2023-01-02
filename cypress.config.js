const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'isnr2r',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
