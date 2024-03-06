/// <reference types="cypress" />

describe('Testing <App>', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  });

  describe('Testing <GenreSelect>', () => {
    it('displays the GenreSelect with 5 items', () => {
      cy.get('[data-testid="genre-selector"]').within(() => {
        cy.get('button').should('have.length', 5);
      });
    });

    it('marks the first genre as selected after clicking on it', () => {
      cy.get('[data-testid="genre-selector"]').within(() => {
        cy.get('button')
          .first()
          .click()
          .parent('li')
          .should('have.class', "border-red-400");
      });
    });
  });

})
