const { billeteraModel, clienteModel } = require("../models/indexModel");
const { Op } = require("sequelize");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJWT");


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
  try {
    const { body } = req;
    const idCliente = body.idCliente;
    const numeroBilletera = body.numeroBilletera;
    const idEstado = body.idEstado;
    const cliente = await clienteModel.findOne({
      where: {
        idCliente: idCliente
      }
    })
    if (!cliente) {
      res.status(404).send("cliente no existe con el id " + idCliente);
    } else {
      req = matchedData(req);
      const password = await encrypt(req.password);
      const body = { ...req, password, idCliente, numeroBilletera,idEstado}
      const [dataBilletera, created] = await billeteraModel.findOrCreate({
        where: {
          numeroBilletera: body.numeroBilletera,
        },
        defaults: {
          password: body.password,
          numeroBilletera: body.numeroBilletera,
          idEstado: body.idEstado,
        },
      });
      if (!created) {
        return res.status(409).send({ error: "Billetera ya existe" });
      }
      else {
        dataBilletera.set("password", undefined, { strict: false });
        const idBilleteraCBITBank = dataBilletera.idBilletera_CBITBank;
        cliente.update({ idBilletera_CBITBank: idBilleteraCBITBank });
        cliente.save();
        res.status(201).send(dataBilletera);
      }
    }
  } catch (e) {
    return res.status(500).send({ error: e });
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

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const cliente = await clienteModel.findOne({
      where: {
        idTipoIdentificacion: req.idTipoIdentificacion,
        numeroIdentificacion: req.numeroIdentificacion
      }
    });
    if (!cliente) {
      res.status(404).send("Cliente no existe!!!");
    } else {
      const billetera = await billeteraModel.findOne({
        where: {
          idBilletera_CBITBank: cliente.idBilleteraCBITBank
        }
      });
      const hashPassword = billetera.password;
      const check = await compare(req.password, hashPassword);
      if (!check) {
        res.status(401).send("Password invalida!!!");
      } else {
        const data = {
          token: await tokenSign(cliente),
          cliente,
          billetera
        }
        res.status(200).send(data);
      }
    }
  } catch (error) {
    return res.status(500).send({ error: "error en el login" });
  }
}


module.exports = {
  getBilletera,
  getBilleteras,
  createBilletera,
  updateBilletera,
  deleteBilletera,
  loginCtrl
};
