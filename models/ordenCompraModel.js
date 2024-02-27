const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const OrdenCompra = sequelize.define(
    "ordenCompra",{
        idOrdenCompra:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        costoTotal:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        codigoEstado:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        codigoOTP:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroAprobacion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        observaciones:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idCliente:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEstado:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEcommerce:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = OrdenCompra;
