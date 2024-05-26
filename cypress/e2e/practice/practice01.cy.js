/// <reference types="cypress"/>
describe('Practice01 - Validate Google Home Page', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/');
  })
  
  it('TASK-1: Validate the Google Home Page Title and URL', () => {
  cy.title().should('include',"Google");
cy.url().should('include','https://www.google.com/')
  
    });
    it('TASK-2 Validate the Google Logo Presence',() => {
      
    cy.get('.lnXdpd');
    });
     
    it('TASK-3: Validate the Google Search Results', () => {
     cy.get('#APjFqb').type('Cypress{enter}');
  
     })

     it.only('TASK-4: Validate the Google Search Autocomplete Suggestions',() =>{
cy.get('#APjFqb').type('Artificial Intelligence');
     cy.get('#jZ2SBf > .wM6W7d > span').click();
     cy.url().should('include', "q=artificial+intelligence");
    });
});