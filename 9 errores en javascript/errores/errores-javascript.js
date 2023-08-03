const miFuncion = val => {
    if (typeof val === "number"){ 
    return 2 * val
    }
    //return false; se puede colocar el return 
    throw new Error("El valor debe ser de tipo numero"); // pero es mejor de llevar
}

console.log(miFuncion(2))// 4
//console.log(miFuncion("ala")) //al no colocar el if aparece NaN cuando se coloca if false
// al colocora throw el resuldao es El valor debe ser de tipo numero

const numero = "8";

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

//errores mas comunes InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error



