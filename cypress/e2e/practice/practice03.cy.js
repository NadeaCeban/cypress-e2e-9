/// <reference types="cypress" />
import WikiPage from '../../pages/WikiPage';


const wikiPage = new WikiPage()

describe('Wikipedia Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/')
  });

  it('TASK-1: Validate the Wikipedia Logo and Slogan', () => {
    wikiPage.getLogo().should('be.visible').and('have.text', '\nWikipedia\n')
    wikiPage.getSlogan().should('be.visible').and('have.text', 'The Free Encyclopedia')
  });

  it('TASK-2: Validate the Wikipedia Top Ten Languages', () => {
    wikiPage.getLanguages().should('be.visible')
    wikiPage.getEnglish().should('have.text', 'English')
  });

  it('TASK-3: Validate the Wikipedia Search Results', () => {
    wikiPage.typeInSearchBar('Cypress{enter}')
    cy.title().should('contain', 'Cypress')
    cy.url().should('contain', 'Cypress')
    wikiPage.getMainHeading().should('be.visible').and('have.text', 'Cypress')
  });

  it.only('TASK-4: Validate the Wikipedia Article Numbers for All Languages', () => {
    wikiPage.clickLanguageList()
    const numOfLangs = [18,53, 99, 126, 29]
    for (let i = 0; i <= 4; i++) {
      wikiPage.getLanguageGroups().eq(i).find('a').should('have.length', numOfLangs[i])
    }
  });

});