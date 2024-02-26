const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const OrdenCompra = sequelize.define(
    "OrdenCompra",{
        costoTotal:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
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
        cliente:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ecommerce:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        timestamps: true
    }
);
module.exports = OrdenCompra;
