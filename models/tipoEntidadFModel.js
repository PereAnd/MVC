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
            type: DataTypes.STRING
        },
        codigo:{
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true
    }
);

module.exports = TipoEntidadFinanciera;