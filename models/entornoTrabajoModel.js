const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");


const entornoTrabajo = sequelize.define("Entorno_Trabajo",
{
    idEntornoTrabajo: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    url:{
        type: DataTypes.STRING
    },
    puerto:{
        type: DataTypes.INTEGER
    },
    idEntidadFinanciera:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idTipoAmbiente:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    scope:{
        type: DataTypes.STRING
    },
    grantType:{
        type: DataTypes.STRING
    }
}
,{
    timestamps: true
});
module.exports.entornoTrabajo;

