// principales operaciones aritmeticas

let a = 3.5;

let b = 4.8;

// suma (+)
console.log(a + b);
//resta (-)
console.log(a - b);
//multiplicacion
console.log(a * b);
//divicion (/)
console.log(a / b);

// representacion de los numeros en cadena de texto
console.log(typeof a)

let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//redonde de numeros decimales
let c = 3.3;
let d = c * 3;


console.log(d);
console.log(typeof d);

//.tofixed() limitar el numero de decimales al valor x
console.log(d.toFixed(1)) // el parencesis representa los numeros decimales q queremos
console.log(typeof d.toFixed(4));

let e = 1839.1221515151515;
let f = 2213556153215;
console.log(e.toFixed(2)); // resultado 1839.12
console.log(f.toFixed(2)); // aparece el numero f con .00 al final

// .toPrecision(x) - limita el numero de cifras significativas
console.log(e.toPrecision(7));// en este caso solamente coge 7 cifras de los numeros 1839.122
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));