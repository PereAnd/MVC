const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Departamento = sequelize.define(
    "Departamento",
    {
        idDepartamento:{
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
            allowNull:false
        },
        idPais:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = Departamento;