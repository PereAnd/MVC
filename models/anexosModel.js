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
            allowNull: false
        },
        frenteDocIdentidad:{
            type: DataTypes.STRING,
            allowNull: false
        },
        respaldoDocIdentidad:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
module.exports = Anexos;
