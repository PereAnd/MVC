const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoProducto = sequelize.define(
    "Tipo_Producto",{
        idTipo_Producto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombreTipo:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = TipoProducto;