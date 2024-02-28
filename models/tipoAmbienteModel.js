const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const tipoAmbiente = sequelize.define("Tipo_Ambiente",
{
    idTipo_Ambiente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING
    }
}
,{
    timestamps: true
});
module.exports.error;
