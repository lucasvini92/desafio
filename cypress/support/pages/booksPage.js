/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  menus: {
    livros: '.acsUxWidget h2',
    pesquisa: '#twotabsearchtextbox',
    selecionaLivro: 'div.s-desktop-width-max.s-desktop-content.s-wide-grid-style-t1.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(8) > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-4-of-16.sg-col-4-of-20.sg-col-4-of-24.s-list-col-left > div > div.s-product-image-container.aok-relative.s-text-center.s-image-overlay-grey.puis-image-overlay-grey.s-padding-left-small.s-padding-right-small.s-flex-expand-height.puis.puis-v3vtwxgppca0z12v18v51zrqona > div > span > a > div > img'
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
  },
  pesquisaLivros() {
    cy.get(elements.menus.pesquisa).type('do mil ao milhão{enter}')
  },
  selecionaLivro() {
    cy.get(elements.menus.selecionaLivro, { timeout: 20000 }).click()
  }
}  