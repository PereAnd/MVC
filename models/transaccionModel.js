const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Transaccion = sequelize.define(
    "transaccion",
    {
        idTransaccion:{
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        idCuenta:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEntidadFinanciera:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        montoTransaccion:{
            type: DataTypes.DOUBLE
        },
        destinoPago:{
            type: DataTypes.STRING
        },
        motivo:{
            type: DataTypes.STRING    
        },
        estadoTransaccion:{
            type: DataTypes.STRING
        },
        idTransaccionAutorizador:{
            type:DataTypes.STRING
        },
        numeroAprobacion:{
            type:DataTypes.STRING
        },
        idError:{
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: true
    }
);


module.exports = Transaccion;