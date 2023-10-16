/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elementos = {
  menus: {
    eletronicos: '#s-refinements > div:nth-child(1) > ul > li:nth-child(1) > span > span',
    selecionaProduto: '#acs-product-block-0 > a',
  },
  titulos: {
    eletronicos: 'Eletrônicos e Tecnologia | Amazon.com.br'
  }
}
export default {
  confereEletronicos() {
    cy.title(elementos.titulos.eletronicos)
    cy.get(elementos.menus.eletronicos)
      .then((element) => {
        expect(element.text()).eq('Eletrônicos e Tecnologia')
      })
  },
  selecionaProdutoEletronico() {
    cy.get(elementos.menus.selecionaProduto).click()
  }
}  