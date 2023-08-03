// set o conjuntos

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", {id: 5}, "hola"];

const miSet = new Set(array)
console.log(array); //[1, 2, 3, 4, 5]
console.log(miSet); //respuesta pone en conjunto no permite ingresar valores que ya existen set {1, 2, 3, 4, 5}

// .add() sirve para agregar

miSet.add(9);
console.log(miSet); 

miSet.add(4)
console.log(miSet); //no deja agraregar el numero 4 por que ya esta en la lista

// .delete() sirve para eliminar algo de la lista
miSet.delete("hola")
console.log(miSet); //sirve para eliminar en este caso el hola

// .clear sirve para limpiar la lista
/* miSet.clear()
console.log(miSet);  */

// .has() sirve para buscar un elemento en la lista 

console.log(miSet.has(40)) //false
console.log(miSet.has(2)) //true

// .size sirve para mirar cuantos datos unicos hay
console.log(miSet.size) //8 datos 

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet[1])

