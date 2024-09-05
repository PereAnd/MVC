const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Transaccion = sequelize.define(
  "Transaccion",
  {
    idTransaccion: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    idTipo_Transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },  
    idOrdenCompra: {
      type: DataTypes.INTEGER,
      alowNull: true,
    },
    IP: {
      type: DataTypes.STRING,
    },
    montoTransaccion: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    destinoPago: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idTransaccionAutorizador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroAprobacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Transaccion;
