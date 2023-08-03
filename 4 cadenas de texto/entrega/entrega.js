//cadena de texto con tu nombre
let nombre = "mi nombre es Jonathan";
//cadena de texto con tu apellido
let apellido = "y mi apellido es Rodriguez";
//una cadena de texto que se llame "estudiante" tu nombre y tu apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;

console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante;

console.log(estudianteMayus.toUpperCase());

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante;

console.log(estudianteMinus.toLocaleLowerCase());

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)

//Una variable que contenga la primera letra del Nombre
console.log(nombre.charAt(13));

//Otra variable que contenga la última letra del Apellido
console.log(apellido.charAt(17));

//Una cadena de texto que elimine los espacios de la variable "estudiante"

const noSpaceText = estudiante.replace(/ /g, "");
console.log(noSpaceText); 

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

console.log(estudiante.includes("Jonathan"));