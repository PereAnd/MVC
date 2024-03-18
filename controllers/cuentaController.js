const { cuentaModel } = require("../models/indexModel");
const { Op } = require("sequelize");

const getCuentas = async (req, res) => {
  try {
    const usuario = req.query.usuario;
    if (!usuario) {
      const data = await cuentaModel.findAll();
      res.send(data);
    } else {
      const data = await cuentaModel.findOne({
        where: {
          usuario,
        },
      });
      if (!data) return res.status(404).send({ error: "Cuenta no encontrada" });
      else res.send(data);
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const getCuenta = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await cuentaModel.findOne({
      where: {
        idCuenta: id,
      },
    });
    if (!data) return res.status(404).send({ error: "Cuenta no encontrada" });
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const createCuenta = async (req, res) => {
  const {usuario, password, numeroCuenta, idEstado, idEntidadFinanciera, idCliente, tipoCuenta} = req.body;
  try {
    if (!usuario || !password || !numeroCuenta || !idEstado || !idEntidadFinanciera || !idCliente || !tipoCuenta )
      return res.status(400).send({ error: "Datos incompletos" });
    else {
      const [cuenta, created] = await cuentaModel.findOrCreate({
        where: {
          idEntidadFinanciera: idEntidadFinanciera,
          numeroCuenta: numeroCuenta,
        },
        defaults: {
          usuario: usuario,
          password: password,
          numeroCuenta: numeroCuenta,
          idEntidadFinanciera: idEntidadFinanciera,
          idEstado: idEstado,
          idCliente: idCliente,
          tipoCuenta:tipoCuenta

        },
      });
      if (!created) return res.status(409).send({ error: "Cuenta ya existe" });
      else res.status(201).send(cuenta);
    }
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const updateCuenta = async (req, res) => {
  const id = req.params.id;
  const { body } = req;
  let cuenta = await cuentaModel.findOne({
    where: {
      idCuenta: id,
    },
  });
  try {
    if (cuenta) {
      if (Object.keys(body).length === 0)
        return res.status(400).send({ error: "No hay datos para actualizar" });
      else if (body.numeroCuenta || body.idEntidadFinanciera) {
        const cuentaExists = await cuentaModel.findOne({
          where: {
            [Op.or]: [
              {
                idEntidadFinanciera: body.idEntidadFinanciera || cuenta.idEntidadFinanciera,
                numeroCuenta: body.numeroCuenta || cuenta.numeroCuenta, 
              },
            ],
          },
        });
        if (cuentaExists && cuentaExists.idCuenta != id)
          return res.status(409).send({ error: "Cuenta ya existe" });
      }

      await cuenta.update(body);
      cuenta.save();
      res.send(cuenta);
    } else {
      return res.status(404).send({ error: "Cuenta no encontrada" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const deleteCuenta = async (req, res) => {
  const id = req.params.id;
  const cuenta = await cuentaModel.findOne({
    where: {
      idCuenta: id,
    },
  });
  if (!cuenta)
    return res.status(404).send({ error: "Cuenta no encontrada" });
  await cuenta.destroy();
  res.status(200).send({ message: "Cuenta eliminada correctamente" });
};
module.exports = {
  getCuenta,
  getCuentas,
  createCuenta,
  updateCuenta,
  deleteCuenta,
};
