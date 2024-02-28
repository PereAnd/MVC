
const {errorModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos de Error
 * @param {*} req 
 * @param {*} res 
 */

const getErrores =  async(req, res)=>{
    const data = ["Hola","mundo"]
    res.send({data})
}
/**
 * Obtener un Error
 * @param {*} req 
 * @param {*} res 
 */
const getError = (req,res) =>{};



module.exports = {getErrores,getError}