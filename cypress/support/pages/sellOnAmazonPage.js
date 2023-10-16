/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  menus: {
    vendaNaAmazon: '.navFooterBackToTopText',
  },
  titulos: {
    vendaNaAmazon: 'Comece a Vender na Amazon | Amazon.com.br ',
  }
}
export default {
  confereVendaNaAmazon() {
    cy.title(elements.titulos.vendaNaAmazon)
    cy.get(elements.menus.vendaNaAmazon)
      .should('be.visible')
  }
}  