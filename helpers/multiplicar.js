const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida= '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
        }

        if (listar) {
            console.log('==============='.red);
            console.log('  Tabla del:', base);
            console.log('==============='.red);

            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo };