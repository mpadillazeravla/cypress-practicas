/// <reference types='Cypress'/>

// suite de casos de prueba que contiene cada caso
describe('Buscando por nombre', function()
{
    beforeEach(()=>{

         // Ingresamos a la pagina principal
    cy.visit({url: "https://automationexercise.com/",
    failOnStatusCode: false})

    })

    // Caso de prueba 1
it("Agregar PRODUCTO X al carrito de compra", ()=> {

     // obtenemos los product-image-wrapper y le damos el alias un alias 
     cy.get('.product-image-wrapper').as("ProductosPortada")

    // iteramos para encontrar un producto concreto
    // para productosportada, voy por los contenedores y busco IMG
    // en cada iteraccion de esas img si el elemento tiene el atributo :
    // SRC igual a "get_product_picture/31" , devuelvo un mensaje.
    // si en productos portada hay un elemento que CONTIENE "ADD TO CART" (el boton) , lo pulso
    cy.get("@ProductosPortada")
    .find("img")
    .each(($el,index, $list)=>{
        if($el.attr("src") === "/get_product_picture/31"){
            cy.log("se ha encontrado el elemento buscado")
            cy.get("@ProductosPortada").eq(index).contains("Add to cart").click()
        }
    })

    cy.get('.modal-body > :nth-child(1)')
    .should("contain.text" , "Your product has been added to cart.")
    .should("be.visible")
    
})

// Caso de prueba 2


})