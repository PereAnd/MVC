const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Producto = sequelize.define(
    "Producto",{
        idProducto:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        idSubtipo_Producto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEntidadFinanciera:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idBilletera_CBITBank:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idEstado:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idDetalles_SolicitudP:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        usuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroCuenta:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        tasaInteres:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        plazo:{
            type: DataTypes.INTEGER,
            allowNull: true
        },    
        montoCredito:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cuotaMensual:{
            type: DataTypes.STRING,
            allowNull: true
        },
        seguroVida:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tasaEfectivaAnual:{
            type: DataTypes.STRING,
            allowNull: true
        },
        tasaMensualVencida:{
            type: DataTypes.STRING,
            allowNull: true
        },
        vtua:{
            type: DataTypes.STRING,
            allowNull: true
        }    
    },
    {
        timestamps: true
    }
);
module.exports = Producto;