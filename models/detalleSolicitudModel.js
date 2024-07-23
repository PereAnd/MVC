const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const DetalleSolicitud = sequelize.define(
    "Detalles_SolicitudP",{
        idDetalles_SolicitudP:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        actividadLaboral:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        actividadEconomica:{
            type: DataTypes.STRING,
            allowNull: true
        },
        nombreEmpresa:{
            type: DataTypes.STRING,
            allowNull: true
        },
        ingresoMensual:{
            type: DataTypes.STRING,
            allowNull: true
        },
        ciudadDomicilio:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direccionDomicilio:{
            type: DataTypes.STRING,
            allowNull: true
        },
        aceptaTyC:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = DetalleSolicitud; 
