// trabajando con fechas 

const fecha = new Date(); //sirve para colocar fecha de ahora
console.log(fecha);


// los meses inicializa en 0 ejemplo 04 
const fecha2 = new Date(1992, 04, 24, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(-100000000); //milisegundos
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4);

console.log(fecha > fecha2) //true

const fecha5 = new Date(1992, 04, 24, 1, 23, 52, 192)
console.log(fecha5); 

console.log(fecha2 === fecha5); //error - nose puede comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) //forma correcta de comparar fechas

////// obtener el dia, mes y el año de una fecha
// obtener el dia .getDate()
console.log(fecha2.getDate()) //24

//obtener el mes getMonth() 
console.log(fecha2.getMonth()); // 4

//obtener el año .getFullyear()
console.log(fecha2.getFullYear()); //1992

// .toLocaleDateString 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// en el link se mira el formato de fecha en-US
console.log(fecha2.toLocaleDateString("en-US")) // 5/24/1992




