const boton = document.querySelector("#btn") //otra forma parecida de getElementById

//console.log(boton)

boton.addEventListener("click", () => {
    //////formas de utilizar alertas por pantalla
    //alert("se ha hecho click") //es un mensaje o alerta
    //confirm("estas de acuerdo?") && console.log("ok") //opcion de aceptar y cancelar y cuando damos aceptar pone en concela ok 
    //confirm("estas de acuerdo?") ? console.log("ok") : console.log("NO") //muestra por concela ok en aceptar y no en cancelar

    const respuesta = confirm("¿seguro?")
    if (respuesta) {
        console.log("Estas de acuerdo")
    } else {
        console.log("No estas de acuerdo")
    }

})


const botonInfo = document.querySelector("#info") 
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cual es tu nombre?")
    if (nombre) {
        console.log("tu nombre es "  + nombre)
    } else {
        console.log("no has introducido nada")
    }
})

const lista = [
    {
        nombre: "jonathan",
        edad: "30",
    },
    {
        nombre: "David",
        edad: "18",
    },
    {
        nombre: "Camila",
        edad: "29",
    },
    {
        nombre: "Maria",
        edad: "25",
    }

]

//console.log(lista)

console.table(lista) //sirve para mostrar en el navegador realizado en una tabla