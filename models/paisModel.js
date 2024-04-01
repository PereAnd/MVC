const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Pais = sequelize.define(
    "Pais",
    {
        idPais:{
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
        }
    },
    {
        timestamps: true
    }
);

module.exports = Pais;