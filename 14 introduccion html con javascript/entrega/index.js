// Instala la dependencia HTTP Server en entorno global (https://www.npmjs.com/package/http-server)
//completado

//Crea un fichero index.html (utiliza el comando "!")
//completado

//Crea un fichero index.js 
//completado

//Integra el fichero index.js en el html
//completado

//Crea un botón en html (<button>Botón</button>)
//completado

// Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"
const boton = document.querySelector("#btn") 
boton.addEventListener("click", () => {
    alert("click en el botón")
})

//Crea un script para lanzar un servidor de desarrollo con http-server
//completado

//Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente
//completado

//Integra jQuery a través del CDN (https://releases.jquery.com/)
//completado

// En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"
$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})