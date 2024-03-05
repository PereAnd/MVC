const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoIdentificacion = sequelize.define(
    "tipo_identificacion",{
        idTipoIdentificacion:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = TipoIdentificacion;