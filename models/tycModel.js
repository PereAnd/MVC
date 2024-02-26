const {sequilize} = require("../../config/mysql");
const {DataTypes} = require("sequilize");

const TyC = sequilize.define(
    "Terminos_Condiciones",
    {
        nombreDoc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        archivo:{ 
            type: DataTypes.STRING
        }, 
        aceptacionTyC: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: true
    } 
);

module.exports.TyC;