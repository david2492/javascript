//trabajando con objetos

const obj = {
    id:4,
    nombre: "Jonathan",
    apellido:"Rodriguez",
    isDeveloper:true,
    libros_favoritos:["El metodo", "El codigo de la manifestacion"],
    "4-juegos":[1, 2, 3, 4, ],
}

console.log(obj.id)
console.log(obj["4-juegos"]) //forma de llamar esta propiedad "4-juegos":[1, 2, 3, 4, ]

const prop = "isDeveloper"
console.log(obj[prop]) //llama la respuesta de la propiedad en este caso true

const obj2 = obj;
console.log(obj2); 

obj2.nombre = "David"
console.log (obj2.nombre) // David
console.log(obj.nombre) // como en el objeto de david me cambia el objeto original y ahora se llama david

let val1= 4
let val2 = val1

val2 = 6

console.log(val1); //4
console.log(val2); //6

const obj3 = {...obj}
console.log(obj3.nombre);

obj3.nombre = "Terry"

console.log(obj.nombre) // David
console.log(obj3.nombre) // terry

//////////////
// como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo:"lo que el viento se llevo", anyo: 1939},
    {titulo:"titanic", anyo: 1997},
    {titulo:"Moana", anyo: 2016},
    {titulo:"El efecto Mariposa", anyo: 2004},
    {titulo:"ted", anyo: 2012},
]

console.log(listaPeliculas);

// .sort() => muta el valor de la lista original

listaPeliculas.sort((a, b)=> a.anyo - b.anyo) //ordena por anyo
console.log(listaPeliculas) 






