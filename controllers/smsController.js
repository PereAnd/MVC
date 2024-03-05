const { smsModel } = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getSMS= async(req,res)=>{
    try{
        const idSMSC = req.params.id;
        const SMS = await smsModel.findOne({
            where:{
                idSMS:idSMSC
            }
        });
        if(!SMS){
            res.status(404).send({
                message:"SMS con el id "+idSMSC+" no existe!!!"
            });
        }
        res.status(200).send(SMS);
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de ordenesCompras
 * @param {*} req 
 * @param {*} res 
 */
const getSMSs = async(req,res)=>{
    try{
        const SMSs = await smsModel.findAll();
        if(SMSs == null){
            res.status(404).send({
                message: "No se han encontrado Mensajes en BD!!!"
            });
        }
        res.status(200).send(SMSs);
    }
    catch(e){
        res.status(404).send(e);
    }

};
/**
 * crear una SMS 
 * @param {*} req 
 * @param {*} res 
 */
const createSMS = async(req,res)=>{
    try{
        const { body } = req.params.body;
        if(!body){
            res.status(404).send("parámetros de creación de SMS, vacios!!!");
        }else{
            const SMS = await smsModel.create(body);
            res.status(200).send(SMS);
        }
    }catch(e){
        res.status(404).send({
            message:"No se pudo crear la SMS!!!"
        });
    }
};
/**
 * Modificar datos de una SMS 
 * @param {*} req 
 * @param {*} res 
*/
const updateSMS = async(req,res)=>{
    try{
        //veririfcar si pidiendo todo el body y deconstruyendolo con idSMS, sirve?
        const {idSMS} = req.params.id;
        const SMS = await smsModel.findOne({
            where: {
                idSMS: idSMS
            }
        });
        if(!SMS){
            res.send(404).status({
                message: "No se encontró SMS con el id "+idSMS
            });
        }else{
            const{body} = req;
            SMS.body = body.body;
            SMS.from = body.from;
            SMS.to = body.to;
            SMS.idOrdenCompra = body.idOrdenCompra;
            SMS.idCliente = body.idCliente;
            await SMS.save();
            res.send(200).send({
                message:"SMS con id "+idSMS+", ha sido modificada!!!"
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};


/**
 * Borrar SMS con id
 */

const deleteSMS = async (req,res)=>{
    try{
        const idSMSF = req.params.id;
        const SMS = await smsModel.findOne({
            where:{
                idSMS: idSMSF
            }
        });
        if(!SMS){
            res.status(404).send({
                message: "No se encontró SMS con el id "+idSMSF
            });
        }else{
            await SMS.destroy();
            res.status(200).send({
                message: "Se ha eliminado la SMS con id "+idSMSF+", correctamente!!!"
            });
        }
    }
    catch(e){
        res.status(404).send(e);
    }
};
module.exports = {getSMS,getSMSs,createSMS,updateSMS,deleteSMS};