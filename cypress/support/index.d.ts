/// <reference types="cypress" />

declare namespace Cypress {
   interface Chainable {
      xpath<E extends Node = HTMLElement>(
         selector: string,
         options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
      ): Chainable<JQuery<E>>;
   }
}
