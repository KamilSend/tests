describe('Base website test', () => {
  it('Count cards', () => {
      cy.visit('https://demoqa.com/')
      cy.get('div.top-card').should('have.length', 6)
  })

  it('Check header', () => {
    cy.visit('https://demoqa.com/')
    cy.get('header').should('be.visible')
    cy.get('header a').should("have.attr", "href", "https://demoqa.com");
  })

  it('Check footer', () => {
    cy.visit('https://demoqa.com/')
    cy.get('footer').should('exist').should('contain', 'ALL RIGHTS RESERVED')
  })
})
