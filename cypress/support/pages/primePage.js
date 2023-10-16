/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  titulos: {
    prime: 'Amazon.com.br: Amazon Prime',
  },
  textos: {
    prime: '#primeDetailPage > p',
  }
}
export default {
  conferePrime() {
    cy.title(elements.titulos.prime)
    cy.get(elements.textos.prime)
      .then((element) => {
        expect(element.text()).eq('Ainda mais motivos para amar o Amazon Prime:')
      })
  }
}  