//localStorage.setItem("nombre" , "Jonathan") sirve para guardar los datos  

// apesar que esta comentado el codigo al momento de llamar con el console.log aparece david
console.log(localStorage.getItem("nombre"))

/* localStorage.setItem("persona", JSON.stringify({
    nombre: "Jonathan",
    edad: 30
})) */

console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify -> convierte un objeto/ array en string
//JSON.parse -> convierte un objeto/array convertido a traves de stringify en un  objeto javascript


localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-secion", "Jonathan")


/* COOkies*/




//caudcidad de una cookie
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2 * 60 * 1000).toUTCString()

console.log(document.cookie)











