/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  images: {
    playMusic: '#nav-subnav > a:nth-child(9) > span > img'
  },
  titulos: {
    musica: 'Amazon Music Unlimited',
  }
}
export default {
  confereMusica() {
    cy.title(elements.titulos.musica)
    cy.get(elements.images.playMusic)
      .should('be.visible')
  }
}  