/// <reference types='Cypress'/>

// suite de casos de prueba que contiene cada caso
describe('Testeando los checkbox', function()
{

    
    beforeEach(()=>{

         // Ingresamos a la pagina principal
    cy.visit({url: "https://cortefiel.com/es/es/hombre/cazadoras/parka-ultraligera-acolchada/8314065.html?dwvar_8314065_color=53",
    failOnStatusCode: false})

    })

    // Caso de prueba 1
it("Testear el checkbox", ()=> {

    // cy.get('.form-check-input').click()
    cy.get(':nth-child(3) > ._2TkNN-tsFyfwhYonKFt6AI').click()
})


})