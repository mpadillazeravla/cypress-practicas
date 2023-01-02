 /// <reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba', function () {
    beforeEach(() => {
    // ingresamos a la pagina 
    cy.visit("http://elpais.com")
    })
    

    it('Verificar que los checkboxes estan funcionando',  () => {
        cy.get('#edition_head').select("America")
        // Aqui buscamos entre el padre del contenedor de checkboxes el que tiene 
        // un href que contiene "categories-casual-dresses" y marcamos su input y hacemos el check
     
    })

})