const {cuentasTyCModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const getCuentaTyCs =  async(req, res)=>{
    const data = ["Hola","mundo"]
    res.send({data})
};
/**
 * Obtener un Entorno CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const getCuentaTyC = (req,res) =>{};
/**
 * crear un Entorno CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const createCuentaTyC = async(req,res) => {
    const {body} = req
    console.log(body);
    const data = await clienteModel.create(body)
    res.send({data});
};
/**
 * Modificar Entorno CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const updateCuentaTyC = async(req,res)=>{
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
 * Borrar Entorno CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const deleteTipoAmbiente = (req,res)=>{};

module.exports = {getCuentaTyCs,getCuentaTyC,createCuentaTyC,updateCuentaTyC,deleteCuentaTyC}