import { defineConfig } from "cypress";
import dotenv from "dotenv";
import { allureCypress } from "allure-cypress/reporter";

dotenv.config();

export default defineConfig({
   e2e: {
      supportFile: "cypress/support/e2e.ts",
      specPattern: "test/**/*.{cy,spec,test}.{ts,js,tsx}",
      viewportWidth: 1920,
      viewportHeight: 1080,
      video: false,
      defaultCommandTimeout: 20000,
      screenshotOnRunFailure: true,
      screenshotsFolder: "cypress/screenshots",
      env: {
         baseUrl: process.env.BASE_URL,
         username: process.env.VALID_USERNAME,
         password: process.env.VALID_PASSWORD,
         allureResultsPath: "allure-results"
      },

      setupNodeEvents(on, config) {
         allureCypress(on, config);
         return config;
      }
   }
});
