//carga y sobre carga de funciones 

function saludar() {
    hola()
}

function hola() {
    console.log("hola soy la funciona hola()")
}

saludar()

// 1. carga la funcion global 
// 2. luego carga la funcion saludar y luego global
// 3 primero carga la funcion hola , luego saludar y luego global
// 4 luego saludar y luego global
// 5 global

// lo que hace anadir funciones y hace una sobrecarga y no hace nada