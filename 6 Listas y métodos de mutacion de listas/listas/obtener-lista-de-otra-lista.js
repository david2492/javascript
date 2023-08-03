// como obtener una lista a partir de otra .slice()

const array = ["hola", 1, 2, 3, true, null, "adios"]

// no modifica el valor de array original
console.log(array.slice(1,4))// se obtine los valores [1, 2, 3]

const array2 = array.slice(2, 5)
console.log(array2) //otra forma de utilizar el slice

const array3 = array.slice(2, -2)
console.log(array3) //otra forma de utilizar el slice