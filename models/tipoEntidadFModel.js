const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoEntidadFinanciera = sequelize.define(
    "tipo_entidadfinanciera",
    {
        idTipoEntidadFinanciera: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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

module.exports = TipoEntidadFinanciera;