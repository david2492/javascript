//La fecha de hoy 
const fechaAct = new Date(); //sirve para colocar fecha de ahora
console.log(fechaAct);

//La fecha de tu nacimiento
const fechaNac = new Date(1992, 04, 24, 1, 23, 52, 192);
console.log(fechaNac);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fechaAct.getTime() > fechaNac.getTime())

//Una variable que contenga el día de tu nacimiento
console.log(fechaNac.getDate())

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(fechaNac.getMonth())

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
console.log(fechaNac.getFullYear());