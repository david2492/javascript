// Secion 4 - string (cadena de texto)

let str_dbl = "Hola soy un texto con comillas dobles"; //comillas dobles
let str_sng = 'Hola soy un texto con comillas simples'; //comillas sencilla


console.log(str_dbl);
console.log(str_sng);

let str_comillas = "El otro dia me dijo literalmente \" ve a sacar la basura \"" // sirve para colocar un texto en comillas
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"' //otra forma de colocar comillas en un texto
let str_comillas_doubles = "El otro dia me dijo literalmente 've a sacar la basura'"
let str_comillas_simples_2 = 'El otro dia me dijo literalmente \' ve a sacar la basura \''

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_doubles);
console.log(str_comillas_simples_2);

////////// comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`

console.log(str_backticks);

let nombre = "Jonathan"
let saludo = `Hola, ${nombre} bienvenido` //sirve para introducir la otra variable dentro la string

console.log(saludo);


//plantillas HTML
let plantilla = `
<html>
 <h1>Pagina Web ${nombre}</h1>
 <p> Este es un Parrafo </p>
</html>
`
console.log(plantilla);

/////// Introduccion de variables en HTML

let libros = ["Empieza por el porque" , "el monje que vendio su ferrari" , "El poder del ahora"]


