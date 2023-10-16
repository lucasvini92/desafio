/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  menus: {
    livros: '.acsUxWidget h2',
  },
  titulos: {
    livros: 'Livros | Amazon.com.br',
  },
  textos: {
    livros: '#merchandised-search-7 h2'
  }
}
export default {
  confereLivros() {
    cy.title(elements.titulos.livros)
    cy.get(elements.textos.livros)
      .then((element) => {
        expect(element.text()).eq('Livros em oferta')
      })
  }
}  