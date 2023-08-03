//como unir dos listas .concat(lista2) 
// sirve parea concatenar las listas 

const lista1 = ["Hola", 2, false, null]

const lista2 = ["Adios", 8, true, undefined]

console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2)
console.log(lista3);


//como unir dos listas con el factor de propagacion y sirve para react
console.log(...lista3) // concatena pero quita las []

const lista4 = [...lista1, ...lista2];
console.log(lista4);

//error mal entendido el concepto del factor de propagacion
const lista5 = [lista1,lista2]
console.log(lista5);



