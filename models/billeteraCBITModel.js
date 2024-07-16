const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const BilleteraCBITBank = sequelize.define(
  "Billetera_CBITBank",
  {
    idBilletera_CBITBank: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroBilletera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idTyC: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = BilleteraCBITBank;
