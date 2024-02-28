const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Ecommerce = sequelize.define(
  "ecommerce",
  {
    idEcommerce: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Ecommerce;
