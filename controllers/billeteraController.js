const { billeteraModel } = require("../models/indexModel");

const getBilleteras = async (req, res) => {
  const data = await billeteraModel.findAll();
  res.send(data);
};

const getBilletera = async (req, res) => {
  const id = req.params.id;
  const data = await billeteraModel.findOne({
    where: {
      idBilletera_CBITBank: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Billetera no encontrada" });
  res.send(data);
};

const createBilletera = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await billeteraModel.create(body);
  res.send(data);
};

const updateBilletera = async (req, res) => {
  const id = req.params.id;
  const billetera = await billeteraModel.findOne({
    where: {
      idBilletera_CBITBank: id,
    },
  });
  if (!billetera)
    return res.status(404).send({ error: "Billetera no encontrada" });
  let { body } = req;
  billetera.user = body.user;
  billetera.password = body.password;
  billetera.numeroBilletera = body.numeroBilletera;
  billetera.idEstado_BilleteraCBIT = body.idEstado_BilleteraCBIT;
    
  await billetera.save();
  res.send(billetera);
};

const deleteBilletera = async (req, res) => {
  const id = req.params.id;
  const billetera = await billeteraModel.findOne({
    where: {
      idBilletera_CBITBank: id,
    },
  });
  if (!billetera)
    return res.status(404).send({ error: "Billetera no encontrada" });
	await billetera.destroy();
  res.send({message: 'Billetera eliminada correctamente'});
};

module.exports = {
   getBilletera,
   getBilleteras,
   createBilletera,
   updateBilletera,
   deleteBilletera
};
