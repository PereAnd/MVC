const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Transaccion = sequelize.define(
    "Transaccion",
    {
        idTransaccion:{
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        idTipo_Transaccion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEstado:{
            type: DataTypes.INTEGER
        },
        idProducto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        IP:{
            type: DataTypes.STRING
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
        idTransaccionAutorizador:{
            type:DataTypes.STRING
        },
        numeroAprobacion:{
            type:DataTypes.STRING
        }
    },
    {
        timestamps: true
    }
);


module.exports = Transaccion;