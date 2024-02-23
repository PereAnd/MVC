const mysql = require('mysql');
//libreria para leer archivos dentro de una carpeta
const fs = require('fs'); 
const ini = require('ini');
const { error } = require('console');

let config  = ini.parse(fs.readFileSync('system/config/config.ini', 'utf-8'));

let conexion = mysql.createConnection({
    host: config.database.host,
    database: config.database.database,
    user: config.database.user,
    password: config.database.password
});
export const conectar = () => {
    conexion.connect(error =>{
        if(error) throw error;
        console.log('Conectando!!!');
    });
}

let apiConfig = config.api;

module.exports = {
    conexion,
    apiConfig
}