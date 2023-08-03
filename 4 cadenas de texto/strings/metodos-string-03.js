// metodos de cadenas de texto parte (parte 3)

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. el prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"; 

console.log(texto_largo.match(/los/g)); //para visualizar cuantas veces se muestra en un texto

console.log(texto_largo.includes("prefiere")) // busca esa palabra y muestra true o false si la contiene en el texto

// saber si un texto empieza con una palabra
// saber si un texto termina con una palabra

console.log(texto_largo.startsWith("Tito"));

console.log(texto_largo.endsWith("arboles"));
