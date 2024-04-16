const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const productosTyC = sequelize.define(
    "Producto_x_TyC",{
    idProducto_TyC: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idProducto:{
        type: DataTypes.INTEGER
    },
    idTyC:{
        type: DataTypes.INTEGER
    }
}
,{
    timestamps: true
});

module.exports = productosTyC;
