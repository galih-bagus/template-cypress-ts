export function shouldBeVisibleXpath(selector: string): void {
   cy.xpath(selector, { timeout: 10000 }).should("be.visible");
}

export function shouldNotBeVisibleXpath(selector: string): void {
   cy.xpath(selector, { timeout: 10000 }).should("not.be.visible");
}

export function shouldContainTextXpath(selector: string, value: string): void {
   cy.xpath(selector, { timeout: 10000 }).should("contain.text", value);
}

export function shouldContainXpath(selector: string, ...args: Parameters<Cypress.Chainable["should"]>): void {
   cy.xpath(selector, { timeout: 10000 }).should(...args);
}

export function shouldContainValueXpath(selector: string, value: string): void {
   cy.xpath(selector, { timeout: 10000 }).should("have.value", value);
}

export function shouldExistXpath(selector: string): void {
   cy.xpath(selector, { timeout: 10000 }).should("exist");
}

export function invokeXpathValidationMessage(selector: string): void {
   cy.xpath(selector, { timeout: 10000 })
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
}
