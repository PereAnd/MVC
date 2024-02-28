const {tipoAmbienteModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const getTipoAmbientes =  async(req, res)=>{
    const data = ["Hola","mundo"]
    res.send({data})
};
/**
 * Obtener un Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const getTipoAmbiente = (req,res) =>{};
/**
 * crear un Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const createTipoAmbiente = async(req,res) => {
    const {body} = req
    console.log(body);
    const data = await clienteModel.create(body)
    res.send({data});
};
/**
 * Modificar Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const updateTipoAmbiente = async(req,res)=>{
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
 * Borrar Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const deleteTipoAmbiente = (req,res)=>{};

module.exports = {getTipoAmbientes,getTipoAmbiente,createTipoAmbiente,updateTipoAmbiente,deleteTipoAmbiente}