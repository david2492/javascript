//declarar clase

class persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    saludo() {
        console.log(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
}

const nueva_persona = new persona("jonathan", 30, true)

console.log(nueva_persona)

nueva_persona.saludo()


let numero = 60 //inicializar
let persona_2 = new persona("Maria", 35, false)

console.log( typeof persona_2) //objeto
console.log( persona_2 instanceof persona) //true por que persona2 tiene las mismas caracteristicas para ingrersar esos datos a persona
 

//instanceof -> similar a typeof pero para clases

