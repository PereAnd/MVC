const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoTransaccion = sequelize.define(
    "Tipo_Transaccion",
    {
        idTipo_Transaccion:{
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        nombreTipo:{
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true
    }
);


module.exports = TipoTransaccion;