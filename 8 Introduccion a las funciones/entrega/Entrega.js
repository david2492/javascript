// Una función sin parámetros que devuelva siempre "true" ??

function alwaysTrue() {
    return true;
}

console.log(alwaysTrue())

//Una función asíncrona que utilice un setTimeout y pase por consola un 
//"Hola soy una promesa" 5 segundos después de haberse ejecutado

async function asyncTimeout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000);
    });
}

console.log(asyncTimeout())

//Una función generadora de índices pares automáticos
function* evenNumbers() {
    let index = 0;
    while(true) {
        yield index *2;
        index++;
    }
}

const ind = evenNumbers();

console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);










