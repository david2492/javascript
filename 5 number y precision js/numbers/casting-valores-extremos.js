// operador .value() - obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf())

// NaN - infinity
let n = Number('adios');
console.log(n); //aparece NaN porque estoy colocando number y tengo un string
console.log(isNaN(n)) // aparece true

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor); // aparece infinity

let divisor_2 = null;
console.log(numerador / divisor_2);


//como convertir los string a valores numericos con number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); //error de concepto

console.log(Number(numero) + num2); //convierte la variable numero que es string en numero
console.log(parseInt(numero)); //convienrte la variable numero en 5
console.log(parseFloat(numero)); //convienrte la variable numero con decimales en 5.89

let num3 = 4;

console.log(parseInt(num3)); 
console.log(parseFloat(num3));

// numeros hexadecimales (base 16)

let numHex = '0x3a5b7';

console.log(parseInt(numHex, 16));

//obtener los valores maximo y minimo en javascript

let min_precision = Number.EPSILON; // la minima diferencia que podemos tener entre un n umero y el siguiente
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;


console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);

console.log(2 ** 10); //** es elevado 
