const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const TyC = sequelize.define(
    "terminos_condiciones",
    {
        idTyC:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        nombreDoc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        archivo:{ 
            type: DataTypes.STRING
        }, 
        aceptacionDoc: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: true
    } 
);

module.exports.TyC;