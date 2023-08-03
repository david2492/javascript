import {suma, eleva, nombre} from './modulos/matematicas.js' 
import getAutor , {libro} from './modulos/literatura.js'

//una forma de importar

/* import * as moduloMatematicas from './modulos/matematicas.js'

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 21)
console.log(potencia)

console.log(moduloMatematicas.nombre)
*/


const sum = suma(4, 12)
console.log(sum)

const potencia = eleva(2, 11)
console.log(potencia)

console.log(nombre)


// importar autor de literatura

console.log(getAutor())
console.log(libro)



