// funciones asincronas cuando hacen una llamada a una base de datos externa pueden tardar tiempo

function miAsinc() {
    //hace una llamada a una base de datos externa
    // puede darnos algun error
}

//promesa  
const miPromesa = new Promise((resolve, reject) => {
    // si esta todo correcto
    const i = Math.floor(Math.random() * 2)
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa 
    .then(() => console.log("se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("yo me ejecuto siempre"))



