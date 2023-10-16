/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

const elements = {
  botao: {
    adicionaCarrinho: '#add-to-cart-button',
    irParaCarrinho: '#sw-gtc > span > a',
    garantiaExtendida: '#mbb-offeringID-1'
  },
  texto: {
    confirmaItemAdicionado: '#NATC_SMART_WAGON_CONF_MSG_SUCCESS > span'
  }
}
export default {
  adicionaCarrinho() {
    cy.get(elements.botao.garantiaExtendida).check()
    cy.get(elements.botao.adicionaCarrinho).click()
  },
  irParaCarrinho() {
    cy.get(elements.botao.irParaCarrinho).click()
  },
  confirmaItemAdicionado() {
    cy.get(elements.texto.confirmaItemAdicionado)
      .then((element) => {
        expect(element.text()).eq('Adicionado ao carrinho')
      })
  }
}  