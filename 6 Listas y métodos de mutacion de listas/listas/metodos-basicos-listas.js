// como trabajar con listas (arrays, arreglos, vectores....)

let var1 = 45
let array = [1, "hola", false, {id:5}, null, undefined, var1]

console.log(array);

//acceder a los valores de un array a traves de su posicion
console.log(array[0]) //1
console.log(array[1]) //hola
console.log(array[2]) //false 
console.log(array[3]) //{id:5}

//Metodos para introducir nuevos valores en nuestros arrays
//.push() .unshift() => mutan el valor de nuestro array

// valores al final => push
array.push("final", 45, 100, false)
console.log(array);

// valores al principio => unshift
array.unshift("inicio",87,99)
console.log(array);

//Metodos para eliminar valores en nuestros arrays
//.pop() .shift() => mutan el valor del array

const array2 = [1, 3, "hola", false]

array2.pop()
console.log(array2) // quita el ultimo que es el false 

array2.shift()
console.log(array2) //quita el primero en este caso el 1

//Metodos para elimiar, modificar o anadir valores en nuestro array
// .plice(x, y , z)

const array3 = [1, 2, 3, 4, 5, 6]

//eliminar valores .splice(indice, numvalores a eliminar)
array3.splice(2, 2) //el primero elimina el 2 y el segundo es el intervalo a eliminar
console.log(array3) //[1, 2,5,6] elimina el 3 y el 4 que equivale al segundo numero

//añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola",3)

console.log(array3)

//modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)




