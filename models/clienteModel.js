const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Cliente = sequelize.define(
    "cliente",{
        idCliente:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        primerNombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        segundoNombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        primerApellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        segundoApellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroIdentificacion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idTipoIdentificacion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        IP:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idBilleteraCBITBank:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaNacimiento:{
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaExpedicion:{
            type: DataTypes.DATE,
            allowNull: false
        },
        ciudadExpedicion:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    }
);
module.exports = Cliente;
