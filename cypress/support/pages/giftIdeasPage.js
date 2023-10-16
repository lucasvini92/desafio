/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  menus: {
    ideiasDePresente: '#reactApp > div > div > div:nth-child(4) > h2',
  },
  titulos: {
    ideiasDePresente: 'Presentes para adultos | Amazon.com.br Dicas de presentes',
  }
}
export default {
  confereIdeiasDePresente() {
    cy.title(elements.titulos.ideiasDePresente)
    cy.get(elements.menus.ideiasDePresente)
      .then((element) => {
        expect(element.text()).eq('Navegue pelas dicas de presente')
      })
  }
}  