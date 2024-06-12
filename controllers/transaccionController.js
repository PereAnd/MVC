const {
  transaccionModel,
  productoModel,
  clienteModel,
} = require("../models/indexModel");

/**
 * Obtener transaccion por medio de un Id
 * @param {*} req
 * @param {*} res
 */
const getTransaccion = async (req, res) => {
  try {
    const idTransaccionC = req.params.id;
    const Transaccion = await transaccionModel.findOne({
      where: {
        idTransaccion: idTransaccionC,
      },
    });
    if (!Transaccion) {
      res.status(404).send({
        message: "Transacción con el id " + idTransaccionC + " no existe!!!",
      });
    } else {
      res.status(200).send(Transaccion);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};
/**
 * Obtener las transacciones de un producto
 * @param {*} req
 * @param {*} res
 */
const getTransactionsByProductId = async (req, res) => {
  const idProducto = req.params.id;
  try {
    const transactions = await transaccionModel.findAll({
      where: {
        idProducto: idProducto,
      },
    });
    if (!transactions) {
      res.status(404).send({
        message:
          "No se encontraron transacciones para el producto con id " +
          idProducto,
      });
    } else {
      res.status(200).send(transactions);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

/**
 * obtener lista de Transacciones
 * @param {*} req
 * @param {*} res
 */
const getTransacciones = async (req, res) => {
  try {
    const Transaccions = await transaccionModel.findAll();
    if (Transaccions == null) {
      res.status(404).send({
        message: "No se han encontrado Transacciones",
      });
    } else {
      res.status(200).send(Transaccions);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

const getTransaccionesByClientId = async (req, res) => {
  const idCliente = req.params.id;
  try {
    const cliente = await clienteModel.findOne({
      where: {
        idCliente: idCliente,
      },
    });
    if (!cliente) {
      res.status(404).send({
        message: "Cliente no encontrado",
      });
    }
    const productos = await productoModel.findAll({
      where: {
        idBilletera_CBITBank: cliente.idBilleteraCBITBank,
      },
    });
    if (!productos) {
      res.status(404).send({
        message: "No se encontraron productos para el cliente",
      });
    }
    const transacciones = await transaccionModel.findAll({
      where: {
        idProducto: productos.map((producto) => producto.idProducto),
      },
    });
    res.status(200).send(transacciones);
  } catch (e) {
    res.status(404).send(e);
  }
};

/**
 * crear una Transacción
 * @param {*} req
 * @param {*} res
 */
const createTransaccion = async (req, res) => {
  try {
    const { body } = req;
    let newTransaccion = {...body, IP: req.ip || req.socket.remoteAddress};
    const response = await transaccionModel.create(newTransaccion);
    res.status(200).send(response);
    return;
  } catch (e) {
    res.status(404).send({
      error: e,
      message: "Error al crear la transacción",
    });
  }
};

module.exports = {
  getTransaccion,
  getTransacciones,
  getTransactionsByProductId,
  getTransaccionesByClientId,
  createTransaccion,
};
