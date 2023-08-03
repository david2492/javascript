class Persona {
    //privadas -> # solo se puede acceder desde dentro de la clase
    
    #nombre 
    #edad


    //protejidas o protected -> solo se acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true 


    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    }
    saludo() {
        console.log(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);//aqui
    }

    obtenNombre() { //funcion getter -> nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }
    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
        
    }
}

const persona = new Persona("david" , 60)
//console.log(persona) //aparece los datos de persona nombre:david, edad:60 
//console.log(persona.nombre)// aparece david
persona.saludo() // con esto hace que aparesca los datos arriba 

//persona.nombre = "Adios" // con esto cambio los datos anteriores de davia a adios
//console.log(persona)

console.log(persona.obtenNombre())
//console.log(persona.#obtenEdad()) //no se puede acceder

console.log(persona._isDeveloper) // no se puede acceder por q es protegida

////////////////////////
//getter -> metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

//Setter -> metodos que nos perimiten cambiar el valor de algunos atributos privados o protegidos
//cambiar la edad de la persona

persona.setEdad(34) 
console.log(persona.getEdad()) //resultado 34


