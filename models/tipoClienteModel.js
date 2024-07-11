const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoCliente = sequelize.define(
    "Tipo_Cliente",{
        idTipo_Cliente:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
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
module.exports = TipoCliente;