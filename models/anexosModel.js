const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Anexos = sequelize.define(
    "Anexos",{
        idAnexos:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fotoCliente:{
            type: DataTypes.STRING,
            allowNull: true
        },
        frenteDocIdentidad:{
            type: DataTypes.STRING,
            allowNull: true
        },
        respaldoDocIdentidad:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }
);
module.exports = Anexos;
