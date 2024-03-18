const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Transaccion = sequelize.define(
    "transaccion",{
    transaccion: {
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
            montoTransaccion:{
                type: DataTypes.DOUBLE
            },
            destinoPago:{
                type: DataTypes.STRING
            },
            motivo:{
                type: DataTypes.STRING    
            },
            idEstado:{
                type: DataTypes.INTEGER
            },
            idTransaccionAutorizador:{
                type:DataTypes.STRING
            },
            numeroAprobacion:{
                type:DataTypes.STRING
            }
        }
    },
    {
        timestamps: true
    }
);


module.exports = Transaccion;