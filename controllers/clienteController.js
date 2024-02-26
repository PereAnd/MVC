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
    res.send({algo:1});
};
/**
 * Modificar Cliente
 * @param {*} req 
 * @param {*} res 
 */
const updateCliente = (req,res)=>{};
/**
 * Borrar Cliente
 * @param {*} req 
 * @param {*} res 
 */
const deleteCliente = (req,res)=>{};

module.exports = {getClientes,getCliente,createCliente,updateCliente,deleteCliente}