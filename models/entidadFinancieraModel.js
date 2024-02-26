const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const EntidadFinanciera = sequelize.define(
    "Entidad_Financiera",{
        nombre:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nit:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipoEntidadFinanciera:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = EntidadFinanciera;
