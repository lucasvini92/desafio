/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  textos: {
    ofertaDoDia: '#slot-2 h1',
  },
  titulos: {
    ofertasDoDia: 'Ofertas e Promoções | Amazon.com.br',
  }
}
export default {
  confereOfertasDoDia() {
    cy.title(elements.titulos.ofertasDoDia)
    cy.get(elements.textos.ofertaDoDia)
      .then((element) => {
        expect(element.text()).eq('Ofertas e Promoções')
      })
  }
}  