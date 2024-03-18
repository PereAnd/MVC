const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoTransaccion = sequelize.define(
    "tipo_transaccion",
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