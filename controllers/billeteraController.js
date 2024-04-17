const { billeteraModel, clienteModel } = require("../models/indexModel");
const { Op } = require("sequelize");
const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJWT");


const getBilleteras = async (req, res) => {
  try {
    const data = await billeteraModel.findAll();
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const getBilletera = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await billeteraModel.findOne({
      where: {
        idBilletera_CBITBank: id,
      },
    });
    if (!data)
      return res.status(404).send({ error: "Billetera no encontrada" });
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const createBilletera = async (req, res) => {
  const { body } = req;
  try {
    if (!body.password || !body.numeroBilletera || !body.idEstado)
      return res.status(400).send({ error: "Datos incompletos" });
    else {
      const [billetera, created] = await billeteraModel.findOrCreate({
        where: {
          numeroBilletera: body.numeroBilletera,
        },
        defaults: {
          password: body.password,
          numeroBilletera: body.numeroBilletera,
          idEstado: body.idEstado,
        },
      });
      if (!created)
        return res.status(409).send({ error: "Billetera ya existe" });
      else res.status(201).send(billetera);
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const updateBilletera = async (req, res) => {
  const id = req.params.id;
  const { body } = req;
  let billetera = await billeteraModel.findOne({
    where: {
      idBilletera_CBITBank: id,
    },
  });
  try {
    if (billetera) {
      if (Object.keys(body).length === 0)
        return res.status(400).send({ error: "No hay datos para actualizar" });
      else if (body.user || body.numeroBilletera) {
        const billeteraExists = await billeteraModel.findOne({
          where: {
            [Op.or]: [body],
          },
        });
        if (billeteraExists && billeteraExists.idBilletera_CBITBank != id)
          return res.status(409).send({ error: "Billetera ya existe" });
      }
      await billetera.update(body);
      billetera.save();
      res.send(billetera);
    } else {
      return res.status(404).send({ error: "Billetera no encontrada" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
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
  res.status(200).send({ message: "Billetera eliminada correctamente" });
};

const registrarBilletera = async(req, res)=>{

  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = {...req, password, idEstado: 1, numeroBilletera:"1283719283"}
  const dataBilletera = await billeteraModel.create(body);
  dataBilletera.set("password", undefined,{strict:false});
  const data = {
      billetera: dataBilletera
  }
  res.send({data})
}

const loginCtrl = async(req, res)=>{
  req = matchedData(req);
  const cliente = await clienteModel.findOne({
    where:{
      idTipoIdentificacion: req.idTipoIdentificacion,
      numeroIdentificacion: req.numeroIdentificacion
    }
  });
  const billetera = await billeteraModel.findOne({idBilletera_CBITBank:cliente.idBilleteraCBITBank});
  const hashPassword = billetera.password;
  const check = await compare(req.password, hashPassword);
  console.log("valor check ", check)
  if(!check){
    res.status(402).send("Password invalida!!!");
  }else{
    const data = {
      token: tokenSign(cliente),
      cliente,
      billetera
    }
    res.status(200).send(data);
  }
}


module.exports = {
  getBilletera,
  getBilleteras,
  createBilletera,
  updateBilletera,
  deleteBilletera,
  registrarBilletera,
  loginCtrl
};
