const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {
    return new Promise((resort, reject) => {
        if ((!Number(base)) || (!Number(limite))) {
            reject('los valores ingresados no son números');
            return;
        }
        console.log('===================='.green)
        console.log(`==Tabla de ${base}==`.green)
        console.log('===================='.green)
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${(base*i)}`);
        }
    })
}
let crearArchivo = (base, limite) => {
    return new Promise((resort, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resort(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}