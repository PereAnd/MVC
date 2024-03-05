
const { errorModel } = require("../models/indexModel");

/**
 * Obtener lista de la base de datos de Error
 * @param {*} req 
 * @param {*} res 
 */

const getErrores =  async(req, res)=>{
    try{
        const data = await errorModel.findAll();
        if(!data){
            res.status(404).send({message: "No se han encontrado errores."});
        }else{
            res.status(200).send(data)
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Obtener un Error
 * @param {*} req 
 * @param {*} res 
 */
const getError = async(req,res) =>{
    try{
        const id = req.params.id;
        const data = await errorModel.findOne({
            where:{
                idError:id,
            },
        });
        if (!data){
            res.status(404).send({ error: "error no encontrado" });
        } else {
            res.status(200).send(data)
        }

    }catch(e){
        res.status(404).send(e);
    }
};
const createError = async(req,res)=>{
    const { body } = req;
    if(Object.keys(body).length == 0){
        res.status(404).send({
            message: "parametros de creación de error vacios"
        });
    } else{
        const data = await errorModel.create(body)
        res.status(200).send({
            message:"Se creo correctamente el error. "+e
        });
    }
}

module.exports = {getErrores,getError,createError}