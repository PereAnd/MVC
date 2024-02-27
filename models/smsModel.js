const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const SMS =  sequelize.define(
    "SMS",{
        body:{
            type: DataTypes.STRING,
            allowNull:false
        },
        from:{
            type: DataTypes.STRING,
            allowNull:false
        },
        to:{
            type: DataTypes.STRING,
            allowNull:false
        },
        ordenCompra:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        cliente:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },{
        timestamps: true
    }
);

module.exports.SMS;