// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("agregarElementoAlCarrito", (nombreDeProducto)=>{
    cy.get("div[class='product-thumb']").as("contenedorDeProductos")
    cy.get("@contenedorDeProductos")
        .each(($el, index, $list)=>{

            // esta forma que la hace en la clase, no funciona. la he cambiado por mi busqueda
            // cy.get(':has(.caption) h4 a').eq(index).then(function($el1){
                cy.get('div [class="content"] h4 a').eq(index).then(function($el1){
                let producto = $el1.text()
                cy.log(producto)

                // if (producto.includes('HTC Touch HD')){
                if (producto.includes(nombreDeProducto)){
                    cy.log("Se ha encontrado el producto")
                    cy.get('@contenedorDeProductos').eq(index).find('button[aria-label="Add to Cart"]').click()
                    // tambien comprobamos que crea la alerta cuando se compra
                    cy.get('.alert').should("contain.text", nombreDeProducto)
                }
            })
        })
})

// este metodo no nos vale porque actualmente no se muestra el carrito

Cypress.Commands.add('verificarElementoEnCarrito', (nombreDeProducto)=>{
     // tenemos un TR que tiene un boton con un onclick que contiene clase CART.REMOVE. 
    // y especificamente dentro de eso buscamos el TD con clase text-left y el A (enlace) dentro de ese TD
    cy.get("tr:has(button[onclick*='cart.remove]) td[class='text-left'] a")
        .each(($el, index, $list)=>{
            cy.get("td[class='text-left'] a").eq(index).then(function($el1){
                let producto = $el1.text()
                    cy.log(producto)
                    cy.get("tr:has(button[onclick*='cart.remove])").should('contain.text', nombreDeProducto)
            })
        })
})