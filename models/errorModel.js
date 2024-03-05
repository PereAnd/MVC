const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const error = sequelize.define("error",
{
    idError: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codigoError:{
        type: DataTypes.STRING
    },
    mensajeError:{
        type: DataTypes.STRING
    }
}
,{
    timestamps: true
});
module.exports = error;


