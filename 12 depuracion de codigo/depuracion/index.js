const persona = {
    nombre: "Jonathan",
    edad: 30
}

console.log(persona)

function obtenDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad)
////////////////

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = persona.edad + i
        console.log(numero)
        //arrayNums.push(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)