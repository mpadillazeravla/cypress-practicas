/// <reference types='Cypress'/>

// Suite de casos de pruebas data driven
describe("Segundo conjunto de casos de prueba avanzadas", ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    
    before(()=>{
        // Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('example').then(function (datos){

            // con this.datos hacemos que datos este disponible en todo el codigo
            this.datos = datos
            // cy.log(this.datosarchivo.apellido)
            // cy.log(datos.nombre)
            cy.fixture(this.datos.imagen).as('imagen')

        })
    })

    beforeEach(()=>{
        // Ingresamos a la pagina de formularios
        cy.visit({url:"https://demoqa.com/automation-practice-form"})
        
    })

    // OJO, SI UTILIZAMOS ARROW FUNCTION EN EL IT, EL THIS NO FUNCIONA
    it("Rellenamos nuestro primer formulario utilizando data", function(){

        cy.get('#firstName').type(this.datos.nombre)
        // cy.log(this.datos.apellido)
        cy.get('#lastName').type(this.datos.apellido)
        cy.get("#userEmail").type(this.datos.email)

        // estas 3 lineas son para el sexo:
        // esta 1ª es como se hace en el curso y no me funciona:
                // cy.get('input[name="gender"][value="Male"]').check()
        // esta 2ª funciona pero es buscando el elemento y haciendo click, no tira del json con los datos guardados:
                // cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        // esta funciona perfectamente y hace lo que queremos
        // Aunque hay que poner el force: true porque el radio esta tapado por otro elemento
        cy.get('[type="radio"]').check(this.datos.sexo, {force: true})

        cy.get('#userNumber').type(this.datos.telefono)

        // fecha nacimiento , asi pone los datos acontinuacion de la fecha que aparece.
        // cy.get('#dateOfBirthInput').type(this.datos.nacimiento)

        // con pause introducimos una pausa en la ejecucion
        // cy.pause()

        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should("be.visible").select(this.datos.fechaNacimiento[0])
        cy.get('.react-datepicker__year-select').should("be.visible").select(this.datos.fechaNacimiento[1])
        cy.get('.react-datepicker__day--0' + this.datos.fechaNacimiento[2]).should("be.visible").click()
        cy.get('#dateOfBirthInput')
            // con el substring le digo que tenga los 3 primeros caracteres del string DECEMBER
            .should("contain.value", this.datos.fechaNacimiento[0].substring(0,3))
            .should("contain.value", this.datos.fechaNacimiento[1])
            .should("contain.value", this.datos.fechaNacimiento[2])
        cy.get('.subjects-auto-complete__value-container').type(this.datos.asignaturas)
        cy.get('div[id^="react-select-"]').click()

        // este es dificil de buscar.
        // Buscamos, inspeccionando,la clase customcontrol customcheckbox customcontrolinline que esta dentro de un div
        // y agregamos que esa clase tiene una etiqueta que contiene la palabra sports
        // dentro de eso, buscamos el input
        // lo hacemos inspeccionando y copiando la clase entera, no con el selector de cypress
        cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('"+this.datos.hobbies[0]+"')) input")
        .check({force: true})
        .should("be.checked")

        cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('"+this.datos.hobbies[1]+"')) input")
        .check({force: true})
        .should("be.checked")

        // metodo para cargar la imagen con el metodo BLOB que trae implementado Cypress
        cy.get('#uploadPicture').then(function($el){
            // hay que convertir la imagen en string de base64
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, "image/png")

            const file = new File([blob], "images/logo.png", {type: "image/png"})
            const list = new DataTransfer()

            list.items.add(file)
            const myFileList = list.files

            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event("change" , {bubbles:true}))

        })

        cy.get('#currentAddress').type(this.datos.direccion)
        // cy.get('#state').click().find("div:contains('NCR')[id^='react-select']").should("be.visible").click()
        cy.get('#state')
        .click().
        find("div:contains('"+this.datos.estado+"')[id^='react-select']")
        .should("be.visible")
        .click()

        cy.get('#city')
        .click()
        .find("div:contains('"+this.datos.ciudad+"')[id^='react-select']")
        .should("be.visible")
        .click()

        cy.get("#submit").click({force: true})


        // ASERCIONES
        // comprobaciones de que los datos introducidos son correctos en el resumen que abre al SUBMIT
        cy.get('#example-modal-sizes-title-lg')
        .should("have.text", "Thanks for submitting the form")

        // en la tabla tenemos TDs que son los titulos de cada campo (nombre estudiante, etc...)
        // y sus hijos son los datos que introducimos
        // asi que lo buscamos como un TD que contiene STUDENT NAME y buscamos a su hijo con el +td

        cy.get('td:contains(Student Name) + td')
        .should("have.text", this.datos.nombre + " " + this.datos.apellido)

        cy.get('td:contains(Student Email) + td')
        .should("have.text", this.datos.email)

        cy.get('td:contains(Gender) + td')
        .should("have.text", this.datos.sexo)

        cy.get('td:contains(Mobile) + td')
        .should("have.text", this.datos.telefono)

        cy.get('td:contains(Date of Birth) + td')
        .should("have.text", this.datos.fechaNacimiento[2]+ " " 
        + this.datos.fechaNacimiento[0]+ "," 
        + this.datos.fechaNacimiento[1])

        cy.get('td:contains(Subjects) + td')
        .should("have.text", this.datos.asignaturas)

        cy.get('td:contains(Hobbies) + td')
        .should("have.text", this.datos.hobbies[0] + ", " + this.datos.hobbies[1])

        cy.get('td:contains(Picture) + td')
        // .should("have.text", this.datos.imagen)
        .should("have.text", "images/logo.png")

        cy.get('td:contains(Address) + td')
        .should("have.text", this.datos.direccion)

        cy.get('td:contains(State and City) + td')
        .should("have.text", this.datos.estado + " " + this.datos.ciudad)

    })

})