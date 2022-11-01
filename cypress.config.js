const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 25000
  },
});
