/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  menus: {
    maisVendidos: '#zg_banner_subtext',
    selecionaProduto: '#B08TRM2YNX > a > span > div'
  },
  titulos: {
    maisVendidos: 'Amazon.com.br Mais Vendidos: Os itens mais populares na Amazon',
  }
}
export default {
  confereMaisVendidos() {
    cy.title(elements.titulos.maisVendidos)
    cy.get(elements.menus.maisVendidos)
      .then((element) => {
        expect(element.text()).eq('Nossos produtos mais populares com base nas vendas.  Atualizado com frequência.')
      })
  },
  selecionaProdutoMaisVendido() {
    cy.get(elements.menus.selecionaProduto).click()
  }
}  