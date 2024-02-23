const {sequilize} = require("../../config/mysql");
const {DataTypes} = require("sequilize");

const EntidadFinanciera = sequilize.define(
    "Entidad_Financiera",{
        nombre:{
            type: DataTypes.ENUM,
            allowNull: false
        },
        nit:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idTipoEntidadFinanciera:{
            type: DataTypes.ENUM,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = EntidadFinanciera;
