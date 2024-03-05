const {transaccionModel} = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getTransaccion= async(req,res)=>{
    try{
        const idTransaccionC = req.params.id;
        const Transaccion = await transaccionModel.findOne({
            where:{
                idTransaccion:idTransaccionC
            }
        });
        if(!Transaccion){
            res.status(404).send({
                message:"Transacción con el id "+idTransaccionC+" no existe!!!"
            });
        }else{
            res.status(200).send(Transaccion);
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
const getTransacciones = async(req,res)=>{
    try{
        const Transaccions = await transaccionModel.findAll();    
        if(Transaccions == null){
            res.status(404).send({
                message: "No se han encontrado Transacciones"
            });
        }else{
            res.status(200).send(Transaccions);
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
const createTransaccion = async(req,res)=>{
    try{
        const { body } = req;
        if(Object.keys(body).length == 0){
            res.status(404).send({
                message:"parámetros de creación de Transacción, vacios!!!"
            });
        }else{
            const Transaccion = await transaccionModel.create(body);
            res.status(200).send(Transaccion);
        }
    }catch(e){
        res.status(404).send({
            error: e,
            message:"No se pudo crear la Transacción!!!"
        });
    }
};

module.exports = {getTransaccion,getTransacciones,createTransaccion};