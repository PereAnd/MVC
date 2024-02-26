const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TipoIdentificacion = sequelize.define(
    "TipoIdentificacion",{
        codigo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = TipoIdentificacion;