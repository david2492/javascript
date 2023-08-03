//formas de importar y exportar modulos
// 1. CommonJs - require
// 2. Import ES6 - import

const moduleMatematicas = require("./modulos/matematicas")

/* const factorial = moduleMatematicas.factorial;
const fact = factorial(5)
console.log("facy") */ //otra forma de llamar las funciones

/*const {factorial, suma} = moduleMatematicas; otra forma de importar
const fact = factorial(5)
console.log("facy") */ //otra forma de llamar o importar las funciones 


const fact = moduleMatematicas.factorial(5)
console.log(fact)

const sum = moduleMatematicas.suma(12, 90)
console.log(sum)

