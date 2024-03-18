const { anexosModel } = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getAnexo= async(req,res)=>{
    try{
        const idAnexoC = req.params.id;
        const Anexo = await anexosModel.findOne({
            where:{
                idAnexos:idAnexoC
            }
        });
        if(!Anexo){
            res.status(404).send({
                message:"Anexos con el id "+idAnexoC+" no existe!!!"
            });
        }else{
            res.status(200).send(Anexo);
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de Anexoes
 * @param {*} req 
 * @param {*} res 
 */
const getAnexos = async(req,res)=>{
    try{
        const Anexos = await anexosModel.findAll();    
        if(Anexos == null){
            res.status(404).send({
                message: "No se han encontrado Anexos"
            });
        }else{
            res.status(200).send(Anexos);
        }   

    }
    catch(e){
        res.status(404).send(e);
    }
};
/**
 * crear una Anexos 
 * @param {*} req 
 * @param {*} res 
 */
const createAnexos = async(req,res)=>{
    try{
        const { body } = req;
        if(Object.keys(body).length == 0){
            res.status(404).send({
                message:"parámetros de creación de Anexos, vacios!!!"
            });
        }else{
            const Anexo = await anexosModel.create(body);
            res.status(200).send(Anexo);
        }
    }catch(e){
        res.status(404).send({
            error: e,
            message:"No se pudo crear Anexos!!!"
        });
    }
};

module.exports = {getAnexo,getAnexos,createAnexos};