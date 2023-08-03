//instalamos npm i -D eslint
//instalamos npm init @eslint/config y luego le damos To chack syntax, find problems, and enforce code style
// seleccionamos Common.JS
// le damos of these por que no estamos utilizando ningun frameword
// le damos no por que no estamos utilizando typescript
//utilizamos node
//seleccionamos anwer question about your style
///luego seleccionamos .JSON
////Luego le damos Spaces
/////luego comillas Double
//////luego le damos windows
///////requiere semicolons "puntos y comas" NO
//luego miramos que se cree el archivo .eslintrc.json


const nombre = "Jonathan"

// en esta linea tener comillas simple(desactivar la regla de las comillas dobles)
//colocar en comentarios /*eslint-disable*/

/*eslint-disable*/
const persona2 = 'Maria'

//una vez terminado para que nos tome las comillas doubles colocamos en comentario /* eslint-enable*/

/*eslint-enable*/

//alcolocar eslint-disble-line quotes estamos haciendo que no nos tome las comillas
const nuevoString = 'Esto es un string' //eslint-disable-line quotes


/*eslint-disable-next-line indent */
const string2 = "mas string"



console.log("Hola")

const string = "david"

const nombre3 = "camila"

console.log(4)
//para ejecutar el programa le damos npm run lint por que se modifico el package.json
//modificar el package.json en scripts "lint-fix":"eslint --fix ." que sirve para quitar errores
// y corremos el programa con npm run lint-fix
//corrige las comillas





