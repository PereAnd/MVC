
const {errorModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos de Error
 * @param {*} req 
 * @param {*} res 
 */

const getErrores =  async(req, res)=>{
    try{
        const data = await errorModel.findAll();
        if(data==null){
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

module.exports = {getErrores,getError}