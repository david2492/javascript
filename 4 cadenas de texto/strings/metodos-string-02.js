// metodos de cadenas de texto (parte 2)

let input = "Tauro";
let db = "tauro";

//toLowerCase y toUpperCase

console.log(input === db); // aparece falso porque por las mayusculas

console.log(input.toLowerCase()); //pone en minusculas
console.log(input.toUpperCase());  // pone en mayusculas
console.log(input.toLowerCase() === db.toLowerCase()); //muestra verdadero porque los transforma en minusculas
console.log(input.toUpperCase() === db.toUpperCase()); //muestra verdadero porque los transforma en mayusculas

//formas de concatenas dos cadenas de caracteres

let str_1 = "hola soy la primera cadena. ";
let str_2 = "hola soy la segunda cadena";

console.log(str_1.concat(str_2)); // sirve para concatenar textos

console.log(str_1 + " " + str_2); // sirve otra forma de concatenar

console.log(`${str_1} ${str_2}`); // sirve otra forma de concatenar

//eliminar espacios al inicio y al final

let str_3 = "     Hola soy una string con espacios al final.     "

console.log(str_3.length);

//trim() sirve para eliminar caracteres vacios al final

console.log(str_3.trim().length); //elimina los espacios al final
console.log(str_3.trimStart().length); //elimina los espacios al inicio
console.log(str_3.trimEnd().length); //elimina los espacios al final

//obtener el caracter que hay en cierta posicion

let str_4 = "Hola soy el string numero 4";

console.log(str_4.charAt(5)); // este caso la s
console.log(str_4[5]) //otra forma para obtener la posicion de una palabra

//obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy jonathan y me gusta la play 5, y jonathan juega call of dutty";

console.log(str_5.indexOf("jonathan"));
console.log(str_5.charAt(9));

console.log(str_5.lastIndexOf("jonathan"))










