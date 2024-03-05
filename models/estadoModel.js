const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Estado =  sequelize.define(
    "estado",{
        idEstado:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombreEstado:{
            type: DataTypes.STRING,
            allowNull:false
        },
        codigoEstado:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps: true
    }
);

module.exports = Estado;