const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const SMS =  sequelize.define(
    "SMS",{
        idSMS: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
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
        idOrdenCompra:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },{
        timestamps: true
    }
);

module.exports.SMS;