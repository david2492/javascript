// Comparaciones

// igualdad

if(5 === 5) {
    console.log("5 es igual a 5")
} 

if (5=== 5) {
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

// == solo compara el valor
// === compara el valor y el tipo

if(a == b) {
    console.log("a es igual a b - debil")
} 

if(a === b) {
    console.log("a es igual a b - fuerte")
}



//comparacion de desigualdad 

let c = 4;
let d = "4";

// != diferentes en valor 
// !== diferentes en valor y tipo
if (c != d) {
    console.log("c es diferente de d - debil")
}

if (c !== d) {
    console.log("c es diferente de d - fuerte")
}

// comparaciones mayor q y menor que 
let max = 10;
let min = 5;

if(max > min) {
    console.log("Max es mayor que min");
}

if(max >= min) {
    console.log("Max es mayor que min");
}

if(min < max) {
    console.log("min es menor que max");
}

if(min <= max) {
    console.log("min es menor que max");
}

