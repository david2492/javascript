//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos = {
    nombre: "Jonathan",
    apellido: "Rodriguez",
    edad: 30,
    altura: 172,
    eresDesarrollador: true
};

console.log(datos);

//Una variable que obtenga tu edad a partir del objeto anterior

const prop = "edad";

console.log(datos[prop]);

//Una lista que contenga el objeto con tus datos personales
// y un nuevo objeto con los datos personales de tus dos mejores amig@s



const amigos = (
    [datos,{
    nombre: "Camila",
    apellido: "Portilla",
    edad: 28,
    altura: 160,
    eresDesarrollador: false
    },
    {
        nombre: "Alexander",
        apellido: "Burbano",
        edad: 29,
        altura: 165,
        eresDesarrollador: false
    }]
)

console.log(amigos);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const amigosOrdenadosPorEdad = amigos.sort((a, b) => a.edad - b.edad);
console.log(amigosOrdenadosPorEdad)


