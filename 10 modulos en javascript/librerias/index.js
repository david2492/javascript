// instalar axios para hacer llamadas a servicios externos
// npm i axios en la terminal
// se busca en la pagina de npm para copiar el import de axios y el .then y el .catch
//ejemplo de consumir apis con axios

import axios  from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
    // handle success
    console.log("success!!!")
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log("Error!!!!!")
    console.log(error);
    })
