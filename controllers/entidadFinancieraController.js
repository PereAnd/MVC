const { entidadFModel } = require("../models/indexModel");

const getEntidadesFinancieras = async (req, res) => {
  const data = ["Entidades", "Financieras"];
  res.send({ data });
};

const getEntidadFinanciera = async (req, res) => {
  const data = {
    Entidad: "financiera",
  };
  res.send(data);
};

const createEntidadFinanciera = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await entidadFModel.create(body);
  res.send({ data });
};

const updateEntidadFinanciera = async (req, res) => {
  const data = {
    Entidad: "Financiera",
  };
  res.send(data);
};

const deleteEntidadFinanciera = async (req, res) => {
  const data = {
    Entidad: "Financiera",
  };
  res.send(data);
};

module.exports = {
  getEntidadesFinancieras,
  getEntidadFinanciera,
  createEntidadFinanciera,
  updateEntidadFinanciera,
  deleteEntidadFinanciera,
};
