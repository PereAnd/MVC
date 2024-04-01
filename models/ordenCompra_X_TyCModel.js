const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const OrdenCompra_TyC = sequelize.define(
    "OrdenCompra_x_TyC",{
        idOrdenCompra_TyC:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idOrdenCompra:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idTyC:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = OrdenCompra_TyC;
