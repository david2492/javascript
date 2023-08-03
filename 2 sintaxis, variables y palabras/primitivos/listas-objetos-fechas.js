// listas, array o arreglo: conjunto de variables puestas en orden puede 
// set number, strin, booleano, null

const lista1 = [1, "hola", true, undefined, null];
const lista2 = [1, "hola", true, undefined, null];

const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";

const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);


// objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["gorka" , "David", "Jonathan"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

movil.anyo = 2019; // cambia el valor del objeto original
movil.marca ="Samsung" // cambia el valor del objeto original

console.log(movil.contactos);
console.log(movil.marca);


// fechas

// librerias de apoyo moment.js

const ahora = new Date();
console.log(ahora);

const fechas_milis = new Date(10); //utiliza los milisegundos
console.log(fechas_milis)

const fechas_cadena = new Date("december 12 28"); //utiliza los milisegundos
console.log(fechas_cadena)

const fechas_valores = new Date(2022, 0, 15); //utiliza los milisegundos
console.log(fechas_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo)
