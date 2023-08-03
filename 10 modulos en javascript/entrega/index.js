// En el entrypoint index.js, importa el módulo controller.js
import {suma, multiplica} from './modulos/controller.js';
import chalk from 'chalk';

const sum1 = suma(1 , 2)
console.log(sum1)

const sum2 = suma(4, 5)
console.log(sum2)

const mul = multiplica(sum1 , sum2)
console.log(chalk.green(mul));
