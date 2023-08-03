// $(selector).hide(accion) esta es la sintaxis de jQuery
//$("li").hide() //sirve para ocultar elementos del li


/* $(document).ready(() =>{

}) */ //esta es la forma para comerzar jQuery y mas abajo de otra manera pero es lo mismo

$(() =>{
    //$("#el-1".hide()) //forma para ocultar un elemto del li con el id pero se puede llamar con clase

    $(".hide-btn").click(() =>{ //forma para llamar un elemto de tipo clase
        console.log("Ocultando.....")
       // $("h1").hide() //ocultamos el titulo
       $("h1").fadeOut() //otra forma de ocultar pero con desvanecido
    })

    $(".show-btn").click(() =>{ //forma para llamar un elemto de tipo clase
        console.log("Ocultando.....")
        //$("h1").show() //mostramos el titulo
        $("h1").fadeIn() //otra forma de mostrar con desvanecido
    })

    $("li").click(() => { //estgo funciona con un solo click cambia a rojo
        $("h1").css({color:"red"})
    })

    $("li").dblclick(() => { //estgo funciona con el doble click cambia azul
        $("h1").css({color:"blue"})
    })

    $(".new-element-2").click(() => {
        $("ul").append("<li>New element final</li>") //sirve para añadir un nuevo elemento al final en los il
    }) 

    $(".new-element-1").click(() => {
        $("ul").prepend("<li>New element inicio</li>") //sirve para añadir un nuevo elemento al principio en los il
    }) 


    $("li").mouseenter((elem) => {
        elem.target.style.color = "orange"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})



