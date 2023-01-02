 /// <reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Login checkeando valores que hemos tipeado',  ()=> {
    beforeEach(() => {
    // ingresamos a la pagina 
    cy.visit("https://demo.applitools.com/")
    })
    

    it('Verificar que introducimos user y pass y que son correctos y loguearnos',  () => {

        cy.get('#username').type("mikelator")
        cy.get('#username').should('have.value', 'mikelator')

        // aqui hacemos prueba negativa para ver que si ponemos mal user lo detecta.
        // cy.get('#username').should('have.value', 'mikelatore')

        cy.get('#password').type("12345678")
        cy.get('#password').should("have.value", "12345678")

        cy.get('.form-check-input').check().should("be.checked")
        cy.get('#log-in').click()
     
    })

})