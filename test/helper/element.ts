export function getXpath(selector: string) {
   return cy.xpath(selector);
}

export function fillFilledXpath(selector: string, value: string) {
   return cy.xpath(selector).type(value).should("have.value", value);
}

export function fillSelectXpath(selector: string, value: string) {
   return cy.xpath(selector).select(value).should("have.value", value);
}

export function clickXpath(selector: string, options?: Partial<Cypress.ClickOptions>) {
   return cy.xpath(selector).click(options);
}

export function fillFilledXpathSearch(selector: string, value: string) {
   return cy.xpath(selector).type(`${value}{enter}`);
}

export function clearFilledXpath(selector: string) {
   return cy.xpath(selector).clear();
}

export function countElementXpath(selector: string) {
   return cy.xpath(selector).its("length");
}

export function createLog(message: string) {
   return cy.log(message);
}
