//Una variable que contenga tu altura en centímetros (entero)

let alt_met = 1.72;
let conv = 100;

console.log(alt_met * conv );

// Una variable que contenga tu altura en metros (número de coma flotante)
let alt_cent = 172;

console.log(alt_cent / conv );

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let libras = 189;

let conv_2 = 2.2046;

console.log(libras / conv_2 );

//Una variable que contenga tu altura en metros redondeada hacia arriba

console.log(Math.round(alt_met))

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(libras / conv_2))

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValue = Number.MAX_VALUE;
let maxValuePlusOne = Number.MAX_VALUE + 1;

if (maxValuePlusOne === maxValue) {
console.log("El máximo valor más 1 es igual al máximo valor");
} else {
console.log("El máximo valor más 1 NO es igual al máximo valor");
}



