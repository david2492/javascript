

// nueva terminal y node index.js diferentes formas de bugs
// abrimos el navegador y colocamos npm winston
// nuevo terminal y instalamos con npm install winston
// copiamos de la pagina el usage
// ejecutamos con el comando npm start para crear el combined.log y error.log



const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug', //mirear levels abajo
    format: winston.format.json(),
    //defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(), //sirve para imprimir por pantalla el combined.log 
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = logger;

//logger.log("hola estoy saliendo por pantalla")
logger.info("Hola esto es un mensaje informativo")
logger.debug("Hola esto es un mensaje debu")
logger.warn("Esto es un mensaje de  advertencia")
logger.error("Esto es un Error")


//ERRORES DE LEVELS
/* const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
    }; */

