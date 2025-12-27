/// <reference types="cypress" />

import * as element from "@helper/element";
import * as route from "@helper/route";
import * as authPage from "@test/page/auth/auth.page";
import * as assert from "@helper/assertion";
import * as data from "@test/data/auth/auth.data";
beforeEach(() => {
   route.visit(`/`);
   element.createLog(data.VALID_LOGIN.username);
   element.createLog(data.VALID_LOGIN.password);
});
describe("Test Case Login", () => {
   it("Login with valid data", () => {
      element.fillFilledXpath(authPage.usernameField(), data.VALID_LOGIN.username);
      element.fillFilledXpath(authPage.passwordField(), data.VALID_LOGIN.password);
      element.clickXpath(authPage.loginButton());
      assert.shouldBeVisibleXpath(authPage.headerProduct());
      assert.shouldContainTextXpath(authPage.headerProduct(), "Products1");
   });

   it("Login with invalid data", () => {
      element.fillFilledXpath(authPage.usernameField(), data.VALID_LOGIN.username);
      element.fillFilledXpath(authPage.passwordField(), "password");
      element.clickXpath(authPage.loginButton());
      assert.shouldBeVisibleXpath(authPage.errorMessage());
      assert.shouldContainTextXpath(authPage.errorMessage(), "any user");
   });
});
