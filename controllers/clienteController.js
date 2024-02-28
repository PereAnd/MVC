const { where } = require("sequelize");
const {clienteModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos cliente
 * @param {*} req 
 * @param {*} res 
 */
const getClientes =  async(req, res)=>{
    
    
};
/**
 * Obtener un cliente
 * @param {*} req 
 * @param {*} res 
 */
const getCliente = async(req,res) =>{
    const idClienteF = req.params.body;
    const cliente = await clienteModel.findOne({
        where: {
             idCliente : idClienteF
        }
    });
    if(!cliente){
        res.status(404).send("No se encontró el Cliente, con el nombre "+cliente.primerNombre);
    }
    res.send(cliente);
};
/**
 * crear un cliente
 * @param {*} req 
 * @param {*} res 
 */
const createCliente = async(req,res) => {
    
    const {body} = req
    console.log(body);
    const data = await clienteModel.create(body)
    res.send({data});
};
/**
 * Modificar Cliente
 * @param {*} req 
 * @param {*} res 
 */
const updateCliente = async(req,res)=>{
    try{
        const idClienteF = req.params.id;
        const cliente = await clienteModel.findOne({
            where: {
                //atr bd : const
                idCliente : idClienteF
            }
        });
        if(!cliente){
            res.status(404).send({ error: "No se encontro el Cliente!!!"});
        }
        let {primerNombre, segundoNombre, primerApellido, segundoApellido,numeroIdentificacion,idTipoIdentificacion,telefono,email, IP,idBilleteraCBITBank} = req.body;
        cliente.primerNombre = primerNombre;
        cliente.segundoNombre = segundoNombre;
        cliente.primerApellido = primerApellido;
        cliente.segundoApellido = segundoApellido;
        cliente.numeroIdentificacion = numeroIdentificacion;
        cliente.idTipoIdentificacion = idTipoIdentificacion;
        cliente.telefono = telefono;
        cliente.email = email;
        cliente.IP = IP;
        cliente.idBilleteraCBITBank = idBilleteraCBITBank;
        
        await cliente.save();
        res.send(cliente);
    } catch(e){
       res.send({
         mensaje: "No se pudo realizar la actualización sobre el id"
       });
    }
};
/**
 * Borrar Cliente
 * @param {*} req 
 * @param {*} res 
 */
const deleteCliente = async(req,res)=>{
    try{
        const idCliente = req.params.id;
        const cliente = await clienteModel.findOne({
            where: {
                idCliente : idCliente
            }
        });
        if(!cliente){
            res.status(404).send({error:"No se encontro el Cliente!!!"});
        }
        await cliente.destroy();
        res.send({mensaje: "eL cliente "+cliente.primerNombre+" ha sido eliminado correctament!!!"});
    } catch(e){
       res.send({
         mensaje: "No se pudo realizar borrado sobre el cliente"+cliente.primerNombre
       });
    }
};

module.exports = {getClientes,getCliente,createCliente,updateCliente,deleteCliente}