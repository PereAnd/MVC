const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Ciudad = sequelize.define(
    "Ciudad",{
        idCiudad:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idDepartamento:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = Ciudad;
 