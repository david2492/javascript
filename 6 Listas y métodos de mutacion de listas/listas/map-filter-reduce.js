// trabajar metodos mas avanzados 
// .map() .filter() .reduce()

const array = ["Pasto", "Iles", "Yacuanquer", "Ipiales", "La union", "La cruz"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)

console.log(newArray) //sirve para colocar un contador adelante 
//['1 - Pasto', '2 - Iles', '3 - Yacuanquer', '4 - Ipiales', '5 - La union', '6 - La cruz']


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Jonathan", edad: 30},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29},
]

/* const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
})

console.log(personasMayores) */ // una forma de buscar mayores de 30

const personasMayores = listaObjetos.filter(obj => obj.edad > 30) //sirve para filtrar
console.log(personasMayores);


const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel") //sirve para quitar algo de la lista

console.log(nuevaLista);


//
const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma); // realiza la suma 277


