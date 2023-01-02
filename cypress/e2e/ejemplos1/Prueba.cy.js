/// <reference types='Cypress'/>

// suite de casos de prueba que contiene cada caso
describe('Primer conjunto de casos de prueba', function()
{

// Caso de prueba 1
it('Ingresar a demoblaze y comprobar numero de items de pagina principal', ()=>{
    
    // Ingresamos a la pagina principal
    cy.visit({url: "https://www.demoblaze.com/",
        failOnStatusCode: false})

    // Verificamos la cantidad de elementos visibles en portada
    // cy.get('#tbodyid > ').should("have.length" , 8)

    // tambien podriamos encontrarlo con esta formula:
    // cy.get(' .card > .card-block')  

    // obtenemos el elemento cardblock dentro de tbodyid como parametro 
    // basicamente lo cojemos con GET y le asignamos un alias "productosportada", para llamarlo mas tarde
    cy.get('#tbodyid > ').as("ProductosPortada")

    // Verificamos nuevamente la cantidad de elementos utilizando el parametro que le hemos asignado antes
    cy.get("@ProductosPortada").should("have.length", 9)


})


// Caso de prueba 2
it("Agregar Nexus6 al carrito de compra", ()=> {

    // Ingresamos a la pagina principal
    cy.visit({url: "https://www.demoblaze.com/",
        failOnStatusCode: false})

     // obtenemos el elemento cardblock dentro de tbodyid como parametro 
    cy.get('#tbodyid > ').as("ProductosPortada")

    // iteramos para encontrar un producto con nombre X
    cy.get("@ProductosPortada").find(".card-title").each(($el,index, $list)=>{
        if($el.attr("hrefch") === "Nexus 6"){
            cy.log("se ha encontrado el elemento buscado")
        }
    })


})



// Caso de prueba 3




})