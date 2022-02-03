describe('Navigation', () => {
  it('should navigate to the page 2 and back', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "page_2" and click it
    cy.get('a[href*="page_2"]').click()

    // The new url should include "/page_2"
    cy.url().should('include', '/page_2')

    // The new page should contain an footer with "Footer"
    cy.get('footer').contains('Footer 2')

    // Find a lik with an href attribute containing "/" and click it
    cy.get('a').contains('Home').click()


    // The new page should contain an footer with "Footer Home"
    cy.get('footer').contains('Footer Home')
  })
})
