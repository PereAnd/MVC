const {sequilize} = require("../../config/mysql");
const {DataTypes} = require("sequilize");

const OrdenCompra = sequilize.define(
    "OrdenCompra",{
        costoTotal:{
            type: DataTypes.ENUM,
            allowNull: false
        },
        estado:{
            type: DataTypes.ENUM,
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
            type: DataTypes.ENUM,
            allowNull: false
        },
        estado:{
            type: DataTypes.ENUM,
            allowNull: false
        },
        ecommerce:{
            type: DataTypes.ENUM,
            allowNull: false
        }

    },
    {
        timestamps: true
    }
);
module.exports = OrdenCompra;
