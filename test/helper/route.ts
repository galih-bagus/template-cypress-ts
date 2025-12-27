export function visit(routes: string): void {
   const baseUrl = Cypress.env("baseUrl");

   if (!baseUrl) {
      throw new Error("Cypress env 'baseUrl' is not defined");
   }

   cy.visit(`${baseUrl}${routes}`);
}
