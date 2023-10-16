/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  titulos: {
    novidadesNaAmazon: 'Amazon.com.br Novidades na Amazon: Os mais vendidos lançamentos novos e futuros no Amazon',
  },
  textos: {
    novidadesNaAmazon: '#zg_banner_text',
  }
}
export default {
  confereNovidadesNaAmazon() {
    cy.title(elements.titulos.novidadesNaAmazon)
    cy.get(elements.textos.novidadesNaAmazon)
      .then((element) => {
        expect(element.text()).eq('Novidades na Amazon')
      })
  }
}  