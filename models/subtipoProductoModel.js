const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const SubtipoProducto = sequelize.define(
    "Subtipo_Producto",{
        idSubtipo_Producto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
        },
        idTipo_Producto:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = SubtipoProducto;