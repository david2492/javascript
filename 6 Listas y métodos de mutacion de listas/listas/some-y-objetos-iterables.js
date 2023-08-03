// .some algunos de los elementos cumplen esa condicion

const array = [3, 7, 2, 4, 7, 9, 42, 45 , 7865, 23, -2]

const res = array.some(valor => valor < -0)

console.log(res); // respuesta true

const existe = array.some(valor => valor === 9)
console.log(existe); // resppuesta true

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Jonathan", edad: 30},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29},
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel")
console.log(existeMiguel) // respuesta true

// como obtener una lista a partir de un objeto iterable 

const str = "Hola soy jonathan"
console.log(str)

const ar_str = Array.from(str) // sirve para deletrear el hola mundo o poner en 'H', 'o', 'L', 'A'
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])

const ar_set = Array.from(set)
console.log(ar_set)


const keys = array.keys() //
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)




