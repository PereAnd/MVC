const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TyC = sequelize.define(
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