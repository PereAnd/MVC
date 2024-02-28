const { entidadFModel } = require("../models/indexModel");

const getEntidadesFinancieras = async (req, res) => {
  const data = await entidadFModel.findAll();
  res.send(data);
};

const getEntidadFinanciera = async (req, res) => {
  const id = req.params.id;
  const data = await entidadFModel.findOne({
    where: {
      idEntidadFinanciera: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Entidad no encontrada" });
  res.send(data);
};

const createEntidadFinanciera = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await entidadFModel.create(body);
  res.send({ data });
};

const updateEntidadFinanciera = async (req, res) => {
  const id = req.params.id;
  const entidadFinanciera = await entidadFModel.findOne({
    where: {
      idEntidadFinanciera: id,
    },
  });
  if (!entidadFinanciera)
    return res.status(404).send({ error: "Entidad no encontrada" });
  let { body } = req;
  entidadFinanciera.nombre = body.nombre;
  entidadFinanciera.nit = body.nit;
  entidadFinanciera.idTipoEntidadFinanciera = body.idTipoEntidadFinanciera;

  await entidadFinanciera.save();
  res.send(entidadFinanciera);
};

const deleteEntidadFinanciera = async (req, res) => {
  const id = req.params.id;
  const entidadFinanciera = await entidadFModel.findOne({
    where: {
      idEntidadFinanciera: id,
    },
  });
  if (!entidadFinanciera)
    return res.status(404).send({ error: "Entidad no encontrada" });
	await entidadFinanciera.destroy();
  res.send({message: 'Entidad eliminada correctamente'});
};

module.exports = {
  getEntidadesFinancieras,
  getEntidadFinanciera,
  createEntidadFinanciera,
  updateEntidadFinanciera,
  deleteEntidadFinanciera,
};
