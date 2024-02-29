const { tipoEntidadFModel } = require("../models/indexModel");

const getTipoEntidadesF = async (req, res) => {
  const data = await tipoEntidadFModel.findAll();
  res.send(data);
};

const getTipoEntidadF = async (req, res) => {
  const id = req.params.id;
  const data = await tipoEntidadFModel.findOne({
    where: {
      idTipoEntidadFinanciera: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Tipo de entidad financiera no encontrada" });
  res.send(data);
};

const createTipoEntidadF = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tipoEntidadFModel.create(body);
  res.send(data);
};

const updateTipoEntidadF = async (req, res) => {
  const id = req.params.id;
  const tipoEntidadF = await tipoEntidadFModel.findOne({
    where: {
      idTipoEntidadFinanciera: id,
    },
  });
  if (!tipoEntidadF)
    return res.status(404).send({ error: "Tipo de entidad financiera no encontrada" });
  let { body } = req;
  tipoEntidadF.nombre = body.nombre;
  tipoEntidadF.codigo = body.codigo;
      
  await tipoEntidadF.save();
  res.send(tipoEntidadF);
};

const deleteTipoEntidadF = async (req, res) => {
  const id = req.params.id;
  const tipoEntidadF = await tipoEntidadFModel.findOne({
    where: {
      idTipoEntidadFinanciera: id,
    },
  });
  if (!tipoEntidadF)
    return res.status(404).send({ error: "Tipo de entidad financiera no encontrada" });
	await tipoEntidadF.destroy();
  res.send({message: 'Tipo de entidad financiera eliminada correctamente'});
};

module.exports = {
   getTipoEntidadF,
   getTipoEntidadesF,
   createTipoEntidadF,
   updateTipoEntidadF,
   deleteTipoEntidadF
};
