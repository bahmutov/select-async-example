// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('react-select/lib/Async', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads colors', () => {
    // have to use scoped style classes unfortunately
    // since the controller does not have other ways
    cy.contains('[class$=control]', 'Select...')
      .find('[class$=indicatorContainer]')
      .click()

    // while loading the menu contains only "Loading..."
    cy.contains('[class$=menu]', 'Loading...').should('be.visible')

    // after 15 seconds, the menu should show colors
    cy.contains('[class$=menu] [class$=option]', 'Blue', {
      timeout: 16000
    }).click()

    // the Blue color has been selected
    cy.contains('[class$=singleValue]', 'Blue').should('be.visible')
  })
})
