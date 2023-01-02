/// <reference types='Cypress'/>

// suite de casos de prueba que contiene cada caso
describe('Testeando los checkbox', function()
{

    
    beforeEach(()=>{

         // Ingresamos a la pagina principal
    cy.visit({url: "https://demo.applitools.com/",
    failOnStatusCode: false})

    })

    // Caso de prueba 1
it("Testear el checkbox", ()=> {

    // cy.get('.form-check-input').click()
    cy.get('.form-check-input').check().should("be.checked")
})


})