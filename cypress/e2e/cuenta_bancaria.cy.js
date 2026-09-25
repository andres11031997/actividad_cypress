describe('Prueba inicial Cypress', () => {
  it('Navega y escribe correo correctamente', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.get('.action-email')
      .type('test@correo.com')
      .should('have.value', 'test@correo.com')
  })
})
