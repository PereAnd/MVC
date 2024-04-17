const { clienteModel } = require("../models/indexModel");
const {matchedData} = require("express-validator");
const {tokenSign} = require("../utils/handleJWT");

const getClientes = async (req, res) => {
  const data = await clienteModel.findAll();
  res.send(data);
};

const getCliente = async (req, res) => {
  const id = req.params.id;
  const data = await clienteModel.findOne({
    where: {
      idCliente: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Cliente no encontrado" });
  res.send(data);
};

const obtenerCliente = async(req,res)=>{
  console.log("valor en el metodo ",req.body);
  
    const tipoIdentificacion = req.body.idTipoIdentificacion;
    const numeroIdentificacion = req.body.numeroIdentificacion;

    const cliente = await clienteModel.findOne({
      where:{
        idTipoIdentificacion: tipoIdentificacion,
        numeroIdentificacion: numeroIdentificacion
      }
    });
    if (!cliente) return res.status(404).send({ error: "Cliente no encontrado" });
    res.status(200).send(cliente);
}

const createCliente = async (req, res) => {
  const { body } = req;
  console.log(body);
  const clienteRepetido = await clienteModel.findOne({
    where: {
      numeroIdentificacion: body.numeroIdentificacion,
    },
  });
  if (clienteRepetido) return res.status(400).send({ error: "El número de identificación ya se encuentra registrado" });
  const data = await clienteModel.create(body);
  res.send( data );
};

const updateCliente = async (req, res) => {
  const id = req.params.id;
  let cliente = await clienteModel.findOne({
    where: {
      idCliente: id,
    },
  });
  if (!cliente)
    return res.status(404).send({ error: "Cliente no encontrado" });
  else{
    let { primerNombre, segundoNombre, primerApellido, segundoApellido, numeroIdentificacion, idTipoIdentificacion, telefono, email, direccion, IP } = req.body;
    cliente.primerNombre = primerNombre;
    cliente.segundoNombre = segundoNombre;
    cliente.primerApellido = primerApellido;
    cliente.segundoApellido = segundoApellido;
    cliente.numeroIdentificacion = numeroIdentificacion;
    cliente.idTipoIdentificacion = idTipoIdentificacion;
    cliente.telefono = telefono;
    cliente.email = email;
    cliente.direccion = direccion;
    
    await cliente.save();
    res.send(cliente);
  }
};

const deleteCliente = async (req, res) => {
  const id = req.params.id;
  const cliente = await clienteModel.findOne({
    where: {
      idCliente: id,
    },
  });
  if (!cliente)
    return res.status(404).send({ error: "Cliente no encontrado" });
	await cliente.destroy();
  res.send({message: 'Cliente eliminado correctamente'});
};

const registrarCliente = async(req, res)=>{

  req = matchedData(req);
  const dataCliente = await clienteModel.create(req);
  const data = {
      cliente: dataCliente
  }
  res.send({data})
}

module.exports = {
  getCliente,
  getClientes,
  obtenerCliente,
  createCliente,
  updateCliente,
  deleteCliente,
  registrarCliente
};
