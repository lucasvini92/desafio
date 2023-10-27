/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  buttons: {
    todasCategorias: '.hm-icon-label',
    vendaNaAmazon: '#nav-xshop > a:nth-child(2)',
    maisVendidos: '#nav-xshop > a:nth-child(3)',
    ofertasDoDia: '#nav-xshop > a:nth-child(4)',
    prime: '#nav-xshop > a:nth-child(5)',
    novidadesNaAmazon: '#nav-xshop > a:nth-child(6)',
    livros: '#nav-xshop > a:nth-child(7)',
    musica: '#nav-xshop > a:nth-child(8)',
    ideiasDePresente: '#nav-xshop > a:nth-child(9)',
    eletronicos: '#nav-xshop > a:nth-child(10)',
  },
  images: {
    logo: '#nav-logo-sprites',
  },
  menus: {
    todasCategorias: '#hmenu-canvas',
  },
  titulos: {
    home: 'Amazon.com.br | Tudo pra você, de A a Z.',
  }
}
export default {
  conferindoHome() {
    cy.visit('/')
    cy.title(elements.titulos.home)
      .get(elements.images.logo)
  },

  acessaTodasCategorias() {
    cy.get(elements.buttons.todasCategorias).click()
      .should('be.visible', elements.menus.todasCategorias)
  },

  acessaVendaNaAmazon() {
    cy.get(elements.buttons.vendaNaAmazon).click()
  },

  acessaMaisVendidos() {
    cy.get(elements.buttons.maisVendidos).click()
  },

  acessaOfertasDoDia() {
    cy.get(elements.buttons.ofertasDoDia).click()
  },

  acessaPrime() {
    cy.get(elements.buttons.prime).click()
  },

  acessaNovidadesNaAmazon() {
    cy.get(elements.buttons.novidadesNaAmazon).click()
  },

  acessaIdeiasDePresente() {
    cy.get(elements.buttons.ideiasDePresente).click()
  },

  acessaLivros() {
    cy.get(elements.buttons.livros).click()
  },

  acessaMusica() {
    cy.get(elements.buttons.musica).click()
  },

  acessaEletronicos() {
    cy.get(elements.buttons.eletronicos).click()
  }
}
