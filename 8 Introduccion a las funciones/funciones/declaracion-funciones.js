// que son las funciones y como se declaran y como se utilizan
// bloques de codigo que se ejecutan un especifico
const nom = "David"

saludar(nom) //se puede colocar saludar("Jonatha")

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
} 

///
let nombre_2 = "Juan"
console.log(nombre_2);

despedir(nombre_2)

function despedir(nombre) {
    nombre = "Fernando"
    console.log(`Despedir ${nombre}`)
}

///
let persona = {nombre: "Jhon" , apellido: "Rodriguez"}

saludarPersona(persona)

console.log(persona) //tener encuenta por que cambia los resultados con la funcion {nombre: 'Jhon', apellido: 'tejada'}


function saludarPersona(objeto) { // en los () se puede utilizar cualquier cosa
    objeto.apellido = "Tejada"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`) // hola jhon tejada
}

saludar() //en la parte de arriba coloca hola undefine

///

function imprimeNumero(numero = 7) { 
    console.log(numero) // 9
}

imprimeNumero(9) //si no se le coloca nada aparece el numero 7 en el console.log

////
function imprimir(...parametros) {
    console.log(parametros) // resultado (1, 3, 9, 2, "Hola", {id:9})
}

imprimir(1, 3, 9, 2, "Hola", {id:9})

/// 

function suma(...nums) {
    return(nums.reduce((a, b) => a + b))
}

const s = suma(1, 2, 3, 4, 9, 15, 16) //guardar la suma en una constante

console.log(s)

/// 
/* let variable = "Hola"
function error(a = 0, b = 0) {
    console.log(variable) //puede acceder de una variable que este afuera y dentro de la funcion
    let variable_int = "Adios"
    console.log(variable_int) 
    return a * b
}

console.log(variable_int) //no deja imprimir cuando la variable esta dentro de la funcion y el console afuera
console.log(error(4, 9)); */


function multiplicar(a = 0, b = 0) {
    return a * b
}

console.log(multiplicar(4, 9)) //resultado 36

