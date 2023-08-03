//casos muy especificos - break, continue
// esto sirve que la lista del 1 al 8 solamente muestre en pantalla del 1 al 6
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);

    if(lista[i] > 5){
        break;
    }
}


//en este caso muestra la lista 1 al 6 menos el numero tres
for(let i = 0; i < lista.length; i++){

    if(lista[i] ===3){
        continue;
    }

    console.log(lista[i]);

    if(lista[i] > 5){
        break;
    }
}

// cual es el ambito de un bucle

// se refiere al alcance de las variables de un bucle



