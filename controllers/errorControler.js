const {errorModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos de Error
 * @param {*} req 
 * @param {*} res 
 */
const getErrores =  async(req, res)=>{
    const data = ["Hola","mundo"]
    res.send({data})
};
/**
 * Obtener un Error
 * @param {*} req 
 * @param {*} res 
 */
const getError = (req,res) =>{};
/**
 * crear un Error
 * @param {*} req 
 * @param {*} res 
 */
const createError = async(req,res) => {
    const {body} = req
    console.log(body);
    const data = await clienteModel.create(body)
    res.send({data});
};
/**
 * Modificar Error
 * @param {*} req 
 * @param {*} res 
 */
const updateError = async(req,res)=>{
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
 * Borrar Error
 * @param {*} req 
 * @param {*} res 
 */
const deleteError = (req,res)=>{};

module.exports = {getErrores,getError,createError,updateError,deleteError}