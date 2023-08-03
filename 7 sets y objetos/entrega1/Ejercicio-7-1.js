//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//Un nuevo Set con los nombres de tu familia
const familia = [
    "Jonatha",
    "Christian",
    "Magola",
    "Henry",
    "Camila",
]

const miSet = new Set(familia)
console.log(familia)
console.log(miSet)

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Jonathan")
console.log(miSet)

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("Javascript")
console.log(miSet)


