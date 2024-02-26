const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const Estado =  sequelize.define(
    "Estado",{
        nombre:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },{
        timestamps: true
    }
);

module.exports.Estado;