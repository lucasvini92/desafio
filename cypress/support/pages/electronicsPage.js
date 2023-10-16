/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elementos = {
  menus: {
    eletronicos: '#s-refinements > div:nth-child(1) > ul > li:nth-child(1) > span > span',
    selecionaProduto: 'div.s-desktop-width-max.s-desktop-content.s-wide-grid-style-t1.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(7) > div > div > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a > span',
    pesquisa: '#twotabsearchtextbox'
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
  },
  pesquisaEletronicos() {
    cy.get(elementos.menus.pesquisa).type('iphone 15{enter}')
  }
}   