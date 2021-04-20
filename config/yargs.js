const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Número hasta donde deseas la tabla de multiplicación'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error("La base debe ser un número.");
        } else if (isNaN(argv.h)) {
            throw new Error("El hasta debe ser un número.");
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;