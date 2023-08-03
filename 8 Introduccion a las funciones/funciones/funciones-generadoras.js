// funciones generadores 

function * generaId() {
    let id = 0;
    while(true){
        id++
        if (id === 10) {
            return id
        }
        yield id //va enviando un numero y se queda esperando hasta que se vuelva a llmar 
    }
}

const gen = generaId();

console.log(gen.next().value); // {value: 1, donde: false}con el .value el ressultado 1
console.log(gen.next().value); // {value: 2, donde: false}con el .value el ressultado 2
console.log(gen.next().value); // {value: 3, donde: false}con el .value el ressultado 3
console.log(gen.next().value); // {value: 4, donde: false}con el .value el ressultado 4
console.log(gen.next().value); // {value: 5, donde: false}con el .value el ressultado 5
console.log(gen.next().value); // {value: 6, donde: false}con el .value el ressultado 6
console.log(gen.next().value); // {value: 7, donde: false}con el .value el ressultado 7
console.log(gen.next().value); // {value: 8, donde: false}con el .value el ressultado 8
console.log(gen.next().value); // {value: 9, donde: false}con el .value el ressultado 9
console.log(gen.next().value); // {value: 10, donde: true}con el .value el ressultado 10

