// modulo: una parte de codigo que se puede  reutilizar en nuestro desarrollo
// modificamos el package.json y mas abajo de main colocamos   "type": "module",,
// otra forma de importar ES6
// esto hace que las funciones sean publicas



export function suma(a, b) {
    return a + b
}

export function multiplica(a, b) {
    return a * b 
}

export function eleva(a, b) {
    return a ** b
}

export function  factorial(a) {
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i; 
    }
    return factorial;
}

export const nombre = "Matematicas"


