const { ordenCxTyCModel } = require("../models/indexModel");

const getOrdenesCompra_TyC = async (req, res) => {
  const data = await ordenCxTyCModel.findAll();
  res.send(data);
};

const getOrdenCompra_TyC = async (req, res) => {
  const id = req.params.id;
  const data = await ordenCxTyCModel.findOne({
    where: {
      idOrdenCompra_TyC: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Orden de compra no encontrada" });
  res.send(data);
};

module.exports = {
   getOrdenCompra_TyC,
   getOrdenesCompra_TyC
};
