const { estadoModel } = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getEstado= async(req,res)=>{
    try{
        const idEstadoC = req.params.id;
        const Estado = await estadoModel.findOne({
            where:{
                idEstado:idEstadoC
            }
        });
        if(!Estado){
            res.status(404).send({
                message:"Estado con el id "+idEstadoC+" no existe!!!"
            });
        }
        res.status(200).send(Estado);
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de estados
 * @param {*} req 
 * @param {*} res 
 */
const getEstados = async(req,res)=>{
    try{
        const Estados = await estadoModel.findAll();
        if(Estados == null){
            res.status(404).send({
                message: "No se han encontrado estados!!!"
            });
        }
        res.status(200).send(Estados);
    }
    catch(e){
        res.status(404).send(e);
    }

};
/**
 * crear una Estado 
 * @param {*} req 
 * @param {*} res 
 */
const createEstado = async(req,res)=>{
    try{
        const { body } = req.params.body;
        if(!body){
            res.status(404).send("parametros de creación de estado, vacios!!!");
        }else{
            const Estado = await estadoModel.create(body);
            res.status(200).send(Estado);
        }
    }catch(e){
        res.status(404).send({
            message:"No se pudo crear la Estado!!!"
        });
    }
};
/**
 * Modificar datos de una Estado 
 * @param {*} req 
 * @param {*} res 
 */
const updateEstado = async(req,res)=>{
    try{
        const {idEstado} = req.params.id;
        const Estado = await estadoModel.findOne({
            where: {
                idEstado: idEstado
            }
        });
        if(!Estado){
            res.send(404).status({
                message: "No se encontró estado con el id "+idEstado
            });
        }else{
            const{body} = req;
            Estado.nombreEstado = body.nombreEstado;
            Estado.codigoEstado = body.codigoEstado;
            await Estado.save();
            res.send(200).send({
                message:"Estado con id "+idEstado+", ha sido modificada!!!"
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Borrar Estado con id
 */

const deleteEstado = async (req,res)=>{
    try{
        const idEstadoF = req.params.id;
        const Estado = await estadoModel.findOne({
            where:{
                idEstado: idEstadoF
            }
        });
        if(!Estado){
            res.status(404).send({
                message: "No se encontró estado con el id "+idEstadoF
            });
        }else{
            await Estado.destroy();
            res.status(200).send({
                message: "Se ha eliminado la estado con id "+idEstadoF+", correctamente!!!"
            });
        }
    }
    catch(e){
        res.status(404).send(e);
    }
};
module.exports = {getEstado,getEstados,createEstado,updateEstado,deleteEstado};

