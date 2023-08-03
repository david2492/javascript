//Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaObjetos = [
    {articulo: "Jabon"},
    {articulo: "Desodorante"},
    {articulo: "Arroz"},
    {articulo: "Jamon"},
    {articulo: "Gaseosa"},
]

console.log(listaObjetos);


// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaObjetos.splice(5, 0, {articulo: "Aceite de Girasol"})

console.log(listaObjetos)

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaObjetos.splice(5, 5) //
console.log(listaObjetos)


//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [
    {titulo:"Avenger: Endgame" , director:"Anthony y Joe Russo", fecha:"2019/04/25"},
    {titulo:"Thor: Ragnarok" , director:"Taika Waititi", fecha:"2017/11/03"},
    {titulo:"E.T. el extraterrestre" , director:"Steven Spielberg", fecha:"1982/12/06"},
]

console.log(peliculas);

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const filPeliculas = peliculas.filter(obj => obj.fecha > "2010/01/01") 
console.log(filPeliculas);


//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const peliculasDirector = peliculas.map(pelicula => pelicula.director);
console.log(peliculasDirector);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const peliculasTitulo = peliculas.map(peliculas => peliculas.titulo);
console.log(peliculasTitulo);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

console.log(peliculasDirector.concat(peliculasTitulo));

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const pelicuasConcat = [...peliculasDirector, ...peliculasTitulo];
console.log(pelicuasConcat);
