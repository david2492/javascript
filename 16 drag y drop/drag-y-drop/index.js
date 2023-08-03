const parrafos = document.querySelectorAll(".parrafo") //con el punto es la clase y con # hace referencia ID
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => { 
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id" , parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastra")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" //efecto de mover
        //event.dataTransfer.dropEffect = "copy" efecto de copiar
        //event.dataTransfer.dropEffect = "link" efecto de link
        //event.dataTransfer.dropEffect = "none" ningun efecto
        //console.log("Drag Over")
    })

    seccion.addEventListener("drop" , event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        
    })
})

