const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");


const BilleteraCBITBank = sequelize.define(
    "Billetera_CBITBank",{
        user:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estado:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaCreacion:{
            type: DataTypes.DATE,
            allowNull: false
        },
        numeroBilletera:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = BilleteraCBITBank;
