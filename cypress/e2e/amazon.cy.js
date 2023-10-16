/// <reference types="Cypress" />

import homePage from '../support/pages/homePage'
import electronicsPage from '../support/pages/electronicsPage'
import musicsPage from '../support/pages/musicsPage'
import booksPage from '../support/pages/booksPage'
import giftIdeasPage from '../support/pages/giftIdeasPage'
import newsOnAmazonPage from '../support/pages/newsOnAmazonPage'
import primePage from '../support/pages/primePage'
import bestSellersPage from '../support/pages/bestSellersPage'
import sellOnAmazonPage from '../support/pages/sellOnAmazonPage'
import offersDayPage from '../support/pages/offersDayPage'
import checkoutPage from '../support/pages/checkoutPage'

describe('Acessando e validando principais paginas relacionadas na home', () => {

  beforeEach('Acesso a home page', () => {
    homePage.conferindoHome()
  })
  it('Validando seleção de todas as categorias', () => {
    homePage.acessaTodasCategorias()
  })

  it('Validando tela "Venda na Amazon"', () => {
    homePage.acessaVendaNaAmazon()
    sellOnAmazonPage.confereVendaNaAmazon()
  })
  it('Validando seleção "Mais vendidos"', () => {
    homePage.acessaMaisVendidos()
    bestSellersPage.confereMaisVendidos()
  }),

    it('Validando tela "Ofertas do Dia"', () => {
      homePage.acessaOfertasDoDia()
      offersDayPage.confereOfertasDoDia()
    }),
    it('Validando tela "Prime"', () => {
      homePage.acessaPrime()
      primePage.conferePrime()
    }),
    it('Validando tela "Novidades na Amazon"', () => {
      homePage.acessaNovidadesNaAmazon()
      newsOnAmazonPage.confereNovidadesNaAmazon()
    }),
    it('Validando tela "Ideias de presente"', () => {
      homePage.acessaIdeiasDePresente()
      giftIdeasPage.confereIdeiasDePresente()
    }),
    it('Validando tela "Livros"', () => {
      homePage.acessaLivros()
      booksPage.confereLivros()
    }),
    it('Validando tela "Musica"', () => {
      homePage.acessaMusica()
      musicsPage.confereMusica()
    }),
    it('Validando tela "Eletrônicos"', () => {
      homePage.acessaEletronicos()
      electronicsPage.confereEletronicos()
    })
})

describe('Validando adição de produtos no carrinho', () => {

  beforeEach('Acesso a home page', () => {
    homePage.conferindoHome()
  })
  it('Adicionando produtos da sessão "Mais Vendidos"', () => {
    homePage.acessaMaisVendidos()
    bestSellersPage.confereMaisVendidos()
    bestSellersPage.selecionaProdutoMaisVendido()
    checkoutPage.adicionaGarantia()
    checkoutPage.adicionaCarrinho()
    checkoutPage.irParaCarrinho()
  }),
    it('Adicionando livros no carrinho', () => {
      homePage.acessaLivros()
      booksPage.confereLivros()
      booksPage.pesquisaLivros()
      booksPage.selecionaLivro()
      checkoutPage.adicionaCarrinho()
      checkoutPage.irParaCarrinho()
    }),
    it('Adicionando produto eletrônico no carrinho', () => {
      homePage.acessaEletronicos()
      electronicsPage.confereEletronicos()
      electronicsPage.pesquisaEletronicos()
      electronicsPage.selecionaProdutoEletronico()
      checkoutPage.adicionaGarantia()
      checkoutPage.adicionaCarrinho()
      checkoutPage.irParaCarrinho()
    })
})  