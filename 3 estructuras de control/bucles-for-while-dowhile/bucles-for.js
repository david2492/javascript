//bucles for
// i = i + 1
// i += 1   estos tres son los mismo 
// i++

for (let i = 0; i < 10; i++) {
    //esto es un bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i] * 2)
}

//estructura for of
for(let valor of lista) {
    console.log(valor)
}

//estructura forEach llama la lista o callback es denominada funcion flecha
lista.forEach(valor => {
    console.log(valor)
})

// estructura for .... in
let persona = {
    nombre: "Jonathan",
    apellido: "Rodriguez",
    edad: 30,
    isDeveloper: true
}

console.log(persona.nombre);

let prop = "edad"; // con esto me llama la edad de la funcion persona
console.log(persona[prop]) 

for(let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}



