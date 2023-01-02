/// <reference types='Cypress'/>

// Suite de casos de pruebas avanzadas
describe("Testing opencart.com" , function(){
    before(()=>{
        // Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('carritoDeCompras').then(function (datos){

            // con this.datos hacemos que datos este disponible en todo el codigo
            this.datos = datos
        })
    })

    beforeEach(()=>{
        cy.visit("https://demo.opencart.com/index.php")
    })


    it("Realizar compra de moviles basadas en el nombre" , function(){

        cy.get('#menu ul a:contains("Phones & PDAs")').click()

        // convertimos el carrito en un array y lo iteramos con un foreach
        // con esto conseguimos no tener que poner 1 linea por cada vez que queramos comprar, como sucede mas abajo
        this.datos.articulo.forEach(function(articulo){
            cy.agregarElementoAlCarrito(articulo)
        })

        // cy.agregarElementoAlCarrito(this.datos.telefono1)
        // cy.agregarElementoAlCarrito(this.datos.telefono2)
        // cy.agregarElementoAlCarrito(this.datos.telefono3)

        // cy.get('.dropdown > .btn').click()
        cy.get('.btn-inverse').click()

        // buscando en el carrito de compra, aunque no podemos hacerlo porque ahora mismo en la pagina no se muestra
        // tenemos un TR que tiene un boton con un onclick que contiene clase CART.REMOVE. 
        // y especificamente dentro de eso buscamos el TD con clase text-left y el A (enlace) dentro de ese TD
        // cy.get("tr:has(button[onclick*='cart.remove]) td[class='text-left'] a")
    })



        // VERIFICACION DE IMPORTES.
        // no podemos hacerlo porque no carga los importes en carrito ahora mismo
        // it('Verificacion de suma de monto total drop down de carrito de compras', function () {
        //     cy.get("#menu ul a:contains('Phones & PDAs')").click()
     
        //     this.datos.articulo.forEach(function (articulo) {
        //         cy.agregarElementoAlCarrito(articulo)
        //     })
     
        //     cy.get('.btn-inverse').click()
     
        //     this.datos.articulo.forEach(function (articulo) {
        //         cy.verificamosElementoEnCarritoDD(articulo)
        //     })
     
        //     var suma = 0
     
        //     cy.get("tr:has(button) td:contains('$')").each(($el) => {
        //         const monto = $el.text()
        //         var precio = monto.replace('$', '')
        //         suma = Number(suma) + Number(precio)
        //         cy.log("La suma es: " + suma)
        //     })
     
        //     cy.get(".table.table-bordered :nth-child(4) :contains('$')").then(function ($el) {
        //         const monto = $el.text()
        //         var total = monto.replace('$', '')
        //         expect(Number(total)).to.equal(suma)
        //     })
     
        // })

})