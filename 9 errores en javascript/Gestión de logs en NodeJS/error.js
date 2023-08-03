const miFuncion = val => {
    if (typeof val === "number"){ 
    return 2 * val
    }
    //return false; se puede colocar el return 
    throw new Error("El valor debe ser de tipo numero"); // pero es mejor de llevar
}

console.log(miFuncion(4))

const numero = "9";

try {
    console.log("Esta ejecutandose de manera correcta")///
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    console.error(`el valor de es: ${e}`)
    console.error("ERROR")
} finally {
    console.log("Esto se a ejecutar tanto si se produce algun error, como su no existe ninguno")
}



