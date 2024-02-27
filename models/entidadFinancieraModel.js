const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const EntidadFinanciera = sequelize.define(
  "entidad_financiera",
  {
    idEntidadFinanciera: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idTipoEntidadFinanciera: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = EntidadFinanciera;
