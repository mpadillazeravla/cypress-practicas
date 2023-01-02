 /// <reference types="Cypress"/>

//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba', function () {
    beforeEach(() => {
    // ingresamos a la pagina 
    cy.visit("http://automationpractice.com/index.php")
    })
    

    it('Verificar que los checkboxes estan funcionando',  () => {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        // Aqui buscamos entre el padre del contenedor de checkboxes el que tiene 
        // un href que contiene "categories-casual-dresses" y marcamos su input y hacemos el check
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')

    })

})