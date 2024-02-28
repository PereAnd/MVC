const {entornoTrabajoModelModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos EntornoTrabajo
 * @param {*} req 
 * @param {*} res 
 */
const getEntornoTrabajos =  async(req, res)=>{
    const data = ["Hola","mundo"]
    res.send({data})
};
/**
 * Obtener un Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const getEntornoTrabajo = (req,res) =>{};
/**
 * crear un Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const createEntornoTrabajo = async(req,res) => {
    const {body} = req
    console.log(body);
    const data = await clienteModel.create(body)
    res.send({data});
};
/**
 * Modificar Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const updateEntornoTrabajo = async(req,res)=>{
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
 * Borrar Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const deleteEntornoTrabajo = (req,res)=>{};

module.exports = {getEntornoTrabajos,getEntornoTrabajo,createEntornoTrabajo,updateEntornoTrabajo,deleteEntornoTrabajo}