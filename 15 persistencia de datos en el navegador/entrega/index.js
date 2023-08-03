// Crea un fichero index.html (utiliza el comando "!")
//completado

//Crea un fichero index.js
//completado

//Integra el fichero index.js en el html
//Completado

// Crea una variable con tu nombre
const  nombre  =  "Jonathan"

//Crea una variable con tu apellido
const  apellido  =  "Rodriguez"

//Crea un objeto con tu nombre y tu apellido
datosConstante =  {
    nombre ,
    apellido
}

//Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("datosConstante", JSON.stringify(datosConstante))

//Almacena el objeto anterior en la LocalStorage
localStorage.setItem("datosConstante", JSON.stringify(datosConstante))

//Crea una cookie que caduque en 2 minutos con los datos del objeto anterior





//document.cookie = "nombreCaducidad=datosConstante;expires=" + new Date(getTime() + 2 * 60000).toUTCString()

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(getTime() + 2 * 60 * 1000).toUTCString()

console.log(document.cookie)