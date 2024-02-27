const {clienteModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos cliente
 * @param {*} req 
 * @param {*} res 
 */
const getClientes =  async(req, res)=>{
    const data = ["Hola","mundo"]
    res.send({data})
};
/**
 * Obtener un cliente
 * @param {*} req 
 * @param {*} res 
 */
const getCliente = (req,res) =>{};
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
        req = matchedData(req);
        const {body} = req;
        const data = await clienteModel.findOneAndUpdate(
            id,
            body,
            {
                new:true
            }
        );
        res.send({data});
    } catch(e){
        handleHttpError(res, e);
    }
};
/**
 * Borrar Cliente
 * @param {*} req 
 * @param {*} res 
 */
const deleteCliente = (req,res)=>{};

module.exports = {getClientes,getCliente,createCliente,updateCliente,deleteCliente}