const { productoModel, clienteModel } = require("../models/indexModel");
const { Op } = require("sequelize");

const getProductos = async (req, res) => {
  try {
    const data = await productoModel.findAll();
    if (!data) {
      res.status(404).send({
        message: "No se han encontrado productos.",
      });
    } else {
      res.status(200).send(data);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

const getProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productoModel.findOne({
      where: {
        idProducto: id,
      },
    });
    if (!data) return res.status(404).send({ error: "Producto no encontrado" });
    res.send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const getProductsByUser = async (req, res) => {
  try {
    const cliente = await clienteModel.findOne({
      where: {
        idCliente: req.params.id
      }
    })
    if (!cliente) return res.status(404).send({ error: "Cliente no encontrado" });
    
    const productsByUser = await productoModel.findAll({
      where: {
        idBilletera_CBITBank: cliente.idBilleteraCBITBank
      }
    })
    
    res.send(productsByUser);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const createProducto = async (req, res) => {
  const {
    usuario,
    password,
    numeroCuenta,
    idEstado,
    idEntidadFinanciera,
    idSubtipo_Producto,
    idBilletera_CBITBank,
  } = req.body;
  try {
    if (
      !usuario ||
      !password ||
      !numeroCuenta ||
      !idEstado ||
      !idEntidadFinanciera ||
      !idSubtipo_Producto ||
      !idBilletera_CBITBank
    )
      return res.status(400).send({ error: "Datos incompletos" });
    else {
      const [Producto, created] = await productoModel.findOrCreate({
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
          idSubtipo_Producto: idSubtipo_Producto,
          idBilletera_CBITBank: idBilletera_CBITBank,
        },
      });
      if (!created)
        return res.status(409).send({ error: "Producto ya existe" });
      else res.status(201).send(Producto);
    }
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const updateProducto = async (req, res) => {
  const id = req.params.id;
  const { body } = req;
  let Producto = await productoModel.findOne({
    where: {
      idProducto: id,
    },
  });
  try {
    if (Producto) {
      if (Object.keys(body).length === 0)
        return res.status(400).send({ error: "No hay datos para actualizar" });
      else if (body.numeroCuenta || body.idEntidadFinanciera) {
        const ProductoExists = await productoModel.findOne({
          where: {
            [Op.or]: [
              {
                idEntidadFinanciera:
                  body.idEntidadFinanciera || Producto.idEntidadFinanciera,
                numeroCuenta: body.numeroCuenta || Producto.numeroCuenta,
              },
            ],
          },
        });
        if (ProductoExists && ProductoExists.idProducto != id)
          return res.status(409).send({ error: "Producto ya existe" });
      }

      await Producto.update(body);
      Producto.save();
      res.send(Producto);
    } else {
      return res.status(404).send({ error: "Producto no encontrado" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const deleteProducto = async (req, res) => {
  const id = req.params.id;
  const Producto = await productoModel.findOne({
    where: {
      idProducto: id,
    },
  });
  if (!Producto)
    return res.status(404).send({ error: "Producto no encontrado" });
  await Producto.destroy();
  res.status(200).send({ message: "Producto eliminada correctamente" });
};
module.exports = {
  getProducto,
  getProductos,
  getProductsByUser,
  createProducto,
  updateProducto,
  deleteProducto,
};
