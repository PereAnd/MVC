const { tipoTransaccionModel } = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getTipoTransaccion= async(req,res)=>{
    try{
        const idTipoTransaccionC = req.params.id;
        const TipoTransaccion = await tipoTransaccionModel.findOne({
            where:{
                idTipo_Transaccion:idTipoTransaccionC
            }
        });
        if(!TipoTransaccion){
            res.status(404).send({
                message:"Transacción con el id "+idTipoTransaccionC+" no existe!!!"
            });
        }else{
            res.status(200).send(TipoTransaccion);
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de Transacciones
 * @param {*} req 
 * @param {*} res 
 */
const getTipoTransacciones = async(req,res)=>{
    try{
        const TipoTransaccion = await tipoTransaccionModel.findAll();    
        if(TipoTransaccion == null){
            res.status(404).send({
                message: "No se han encontrado Transacciones"
            });
        }else{
            res.status(200).send(TipoTransaccion);
        }   

    }
    catch(e){
        res.status(404).send(e);
    }
};
/**
 * crear una Transacción 
 * @param {*} req 
 * @param {*} res 
 */
const createTipoTransaccion = async(req,res)=>{
    try{
        const { body } = req;
        if(Object.keys(body).length == 0){
            res.status(404).send({
                message:"parámetros de creación de Transacción, vacios!!!"
            });
        }else{
            const Transaccion = await tipoTransaccionModel.create(body);
            res.status(200).send(Transaccion);
        }
    }catch(e){
        res.status(404).send({
            error: e,
            message:"No se pudo crear la Transacción!!!"
        });
    }
};

module.exports = {getTipoTransaccion,getTipoTransacciones,createTipoTransaccion};