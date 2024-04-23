const { anexosModel, clienteModel } = require("../models/indexModel");

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
            const idCliente = body.idCliente;
            const cliente =await clienteModel.findOne({
                where: {
                    idCliente: idCliente
                }
            })
            if(!cliente){
                res.status(404).send("cliente con el id "+idCliente+" ,no existe!!!");
            }else{
                const Anexo = await anexosModel.create(body);
                const idAnexo = Anexo.idAnexos;
                console.log("valor id anexo: ",)
                cliente.update({idAnexos: idAnexo, idCliente: idCliente
                });
                cliente.save();
                res.status(200).send(Anexo);
            }
        }
    }catch(e){
        res.status(404).send({
            error: e,
            message:"No se pudo crear Anexos!!!"
        });
    }
};
const updateAnexos = async(req, res)=>{
    try{
        const idAnexos = req.params.id;
        const {body} = req; 
        const anexos = await anexosModel.findOne({
            where:{
                idAnexos: idAnexos
            }
        });
        if(!anexos){
            res.status(404).send("El anexo con id "+body.idAnexos+" no existe!!!");
        }else{
            await anexos.update(body);
            anexos.save();
            res.status(200).send(anexos);
        }
    }
    catch(error){
        res.status(400).send({
            error: error,
            message: "No se pudo modificar los anexos!!!"
        })
    }
}
module.exports = {getAnexo,getAnexos,createAnexos, updateAnexos};