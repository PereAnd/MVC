const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Producto = sequelize.define(
    "Producto",{
        idProducto:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        idSubtipo_Producto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEntidadFinanciera:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idBilletera_CBITBank:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEstado:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroCuenta:{
            type: DataTypes.STRING,
            allowNull: false
        }        
    },
    {
        timestamps: true
    }
);
/*
function obtenerProducto (nProducto){
    //falta llamar objeto persistencia y pasarle el query
    let query = "SELECT * FROM M_Producto c WHERE c.numeroProducto =="+nProducto+"";
    return query;
}
    
function crearProducto(usu, pass, nProducto, eProducto){
    const sql = `INSERT INTO M_Producto (idProducto, usuario, password, numeroProducto, estadoProducto) VALUES (${null}, "${usu}","${pass}","${nProducto}","${eProducto}")`;
    database.conectar.query(sql, function(err, result, filed){
        if(err)throw err
        console.log(result);
    });
}
*/
   // export {obtenerProducto,crearCuenta}
module.exports = Producto;