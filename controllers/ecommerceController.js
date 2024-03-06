const { ecommerceModel } = require("../models/indexModel");
const { Op } = require("sequelize");

const getEcommerces = async (req, res) => {
  try {
    const data = await ecommerceModel.findAll();
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const getEcommerce = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ecommerceModel.findOne({
      where: {
        idEcommerce: id,
      },
    });
    if (!data)
      return res.status(404).send({ error: "Ecommerce no encontrado" });
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const createEcommerce = async (req, res) => {
  const { body } = req;
  try {
    if (!body.nombre)
      return res.status(400).send({ error: "Datos incompletos" });
    else {
      const [ecommerce, created] = await ecommerceModel.findOrCreate({
        where: {
          [Op.or]: [body],
        },
        defaults: {
          nombre: body.nombre,
        },
      });
      if (!created)
        return res.status(409).send({ error: "Ecommerce ya existe" });
      else res.status(201).send(ecommerce);
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const updateEcommerce = async (req, res) => {
  const id = req.params.id;
  const { body } = req;
  let ecommerce = await ecommerceModel.findOne({
    where: {
      idEcommerce: id,
    },
  });
  try {
    if (ecommerce) {
      if (Object.keys(body).length === 0) {
        return res.status(400).send({ error: "No hay datos para actualizar" });
      } else if (!body.nombre) {
        return res.status(400).send({ error: "Datos incompletos" });
      } else {
        const ecommerceExists = await ecommerceModel.findOne({
          where: {
            [Op.or]: [body],
          },
        });
        if (ecommerceExists && ecommerceExists.idEcommerce != id)
          return res.status(409).send({ error: "Ecommerce ya existe" });
      }
      await ecommerce.update(body);
      ecommerce.save();
      res.send(ecommerce);
    } else {
      return res.status(404).send({ error: "Ecommerce no encontrado" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
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
  res.status(200).send({ message: "Ecommerce eliminado correctamente" });
};

module.exports = {
  getEcommerces,
  getEcommerce,
  createEcommerce,
  updateEcommerce,
  deleteEcommerce,
};
