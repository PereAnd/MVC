const {sequelize} = require("../config/mysql");
const {DataTypes} = require("sequelize");

const cuentaTyC = sequelize.define(
    "cuenta_x_tyc",{
    idCuenta_TyC: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCuenta:{
        type: DataTypes.INTEGER
    },
    idTyC:{
        type: DataTypes.INTEGER
    }
}
,{
    timestamps: true
});

module.exports = cuentaTyC;
