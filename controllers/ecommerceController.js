const { ecommerceModel } = require("../models/indexModel");

const getEcommerces = async (req, res) => {
  const data = await ecommerceModel.findAll();
  res.send(data);
};

const getEcommerce = async (req, res) => {
  const id = req.params.id;
  const data = await ecommerceModel.findOne({
    where: {
      idEcommerce: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Ecommerce no encontrado" });
  res.send(data);
};

const createEcommerce = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await ecommerceModel.create(body);
  res.send( data );
};

const updateEcommerce = async (req, res) => {
  const id = req.params.id;
  const ecommerce = await ecommerceModel.findOne({
    where: {
      idEcommerce: id,
    },
  });
  if (!ecommerce)
    return res.status(404).send({ error: "Ecommerce no encontrado" });
  let { body } = req;
  ecommerce.nombre = body.nombre;

  await ecommerce.save();
  res.send(ecommerce);
};

const deleteEcommerce = async (req, res) => {
  const id = req.params.id;
  const ecommerce = await ecommerceModel.findOne({
    where: {
      idEcommerce: id,
    },
  });
  if (!ecommerce)
    return res.status(404).send({ error: "Ecommerce no encontrado" });
	await ecommerce.destroy();
  res.send({message: 'Ecommerce eliminado correctamente'});
};

module.exports = {
  getEcommerces,
  getEcommerce,
  createEcommerce,
  updateEcommerce,
  deleteEcommerce,
};
