const persona = {
    nombre: "Jonathan",
    edad: 30,
    usDeveloper: true,
    saludo : function () {
        console.log('Hola')
    }
}

//console.log(persona)

persona.saludo()

const persona2 = {
    nombre: "David",
    edad: 31,
    usDeveloper: false,
    saludo : function () {
        console.log('Hola')
    }
}

persona2.saludo()

//Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
    nombre,
    edad,
    isDeveloper, 
    saludo: function() {
        console.log('Hello')
    }

    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria", 44, false)
console.log(nueva_persona2)