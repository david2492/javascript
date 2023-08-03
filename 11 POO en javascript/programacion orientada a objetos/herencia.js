// inheritance - herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
    this._nombre = nombre
    this._edad = edad
    }
    saludo() {
        console.log(`hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`);
    }
    
}

class Desarrollador extends Persona { // es una clase derivada
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad) //utilizar el contructor de la clase padre
        this.lenguaje = lenguaje        
    }
    saludo() {
        super.saludo() //override volver a defeinir algo que ya existe 
        
        console.log(`y soy desarrollador de javascript`)
    }
}

const nuevodev = new Desarrollador("Jonathan", 30, "Javascript")
console.log(nuevodev)

nuevodev.saludo() //esto sirve para que salga el mensaje en la linea 8


//Polimorfismo  => varias formas 

