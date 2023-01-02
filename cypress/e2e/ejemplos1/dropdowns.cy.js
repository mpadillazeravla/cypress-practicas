/// <reference types='Cypress'/>

// suite de casos de prueba que contiene cada caso
describe('Buscando por nombre', function()
{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    beforeEach(()=>{

         // Ingresamos a la pagina principal
    cy.visit({url: "https://as.com",
    failOnStatusCode: false})

    })

    // Caso de prueba 1
it("Ver un dropdown", ()=> {

    // cy.get('body > section.header > header > div.jfHeader-wrapper > div > div.jfHeader-menuWrapper.regular-menuWrapper > ul > li:nth-child(3) > div > ul').invoke("attr", "style", "display:block")
    cy.get('body > header > div.hdr__nav-wr > div > nav.hdr__nav > a:nth-child(4)').invoke("attr", "style", "class: is-active")

})


})