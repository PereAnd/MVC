const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Cliente = sequelize.define(
    "CLiente",{
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
        tipoIdentificacion:{
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
        billetera:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = Cliente;
