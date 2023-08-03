//metodos mas utilizados con cadenas de caracteres
// como obtener la longitud de un string

let str = "Hola soy una string";

console.log(str);
console.log(str.length);

//obtener partres de cadenas de caracteres
// slice(), substring(), substr()

let slice = str.slice(5, 10)

console.log(slice); // muestra los las letras de 5 hasta la 10 soy u

let substring = str.substring(5, 10)

console.log(substring); // muestra los las letras de 5 hasta la 10 soy u

let substr = str.substr(5, 10)

console.log(substr);

//remplazar parte del contenido de una cadena de texto

let cadena = "hola mi nombre es Jonathan"

console.log(cadena);


console.log(cadena.replace('Jonathan', 'David'));// sirve para cambiar el texto y mostrarlo por consola


let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. el prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"; 

//subrayar el texto y darle alt + z para que tome el texto hacia abajo
// el metodo replace solo remplaza la primera instrancia

console.log(texto_largo.replace('los', 'cinco')); 

//al utilizar la expresion regular /g (global) cambia todo las expresiones los por cinco
console.log(texto_largo.replace(/los/g, 'cinco'));






