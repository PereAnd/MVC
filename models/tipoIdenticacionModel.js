const {sequilize} = require("../../config/mysql");
const {DataTypes} = require("sequilize");

const TipoIdentificacion = sequilize.define(
    "TipoIdentificacion",{
        codigo:{
            type: DataTypes.ENUM,
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