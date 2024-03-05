const { tipoAmbienteModel } = require("../models/indexModel");

/**
 * Obtener lista de la base de datos Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const getTipoAmbientes =  async(req, res)=>{
  try{
    const data = await tipoAmbienteModel.findAll();
    if(!data){
      res.satatus(404).send({
        message: "no se a encontrado tipos de ambientee"
      });
    }
    res.status(200).send(data);
  }catch(e){
        res.status(404).send(e);
  }
};
/**
 * Obtener un Tipo Ambiente
 * @param {*} req
 * @param {*} res
 */
const getTipoAmbiente = async(req,res) =>{
    try{
      const id = req;
      const data = await tipoAmbienteModel.findOne({
        where: {
          idTipoAmbiente: id,
        },
      });
      if (!data){ 
        res.status(404).send({ error: "Tipo ambiente no encontrado" });
      }else{
        res.status(200).send(data);
      }
    }catch(e){
        res.status(404).send(e);
    }
  };

/**
 * crear un Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const createTipoAmbiente = async(req,res) => {
  try{
    const {body} = req
    if(!body){
      res.status(404).send("Parametros de creación tipo de ambiente.");
    }else{
      const data = await tipoAmbienteModel.create(body)
      res.status(200).send({data});
    }
  }catch(e){
    res.status(404).send({message:"No se pudo crear cuenta tyc."+e});
  }
};
/**
 * Modificar Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const updateTipoAmbiente = async(req,res)=>{
  try{
    const id = req;
    const data = await cuentaTyCController.findOne({
        where: {
            idTipoAmbiente: id,
        },
    });
    if (!data){
        return res.status(404).send({ error: "Tipo de Ambiente no encontrado." })
    }else{
        let { body } = req;
        data.nombre = body.nombre;    
        await data.save();
        res.status(200).send({
            message:"El tipo de ambiente ha sido modificado."
        });
    }
}catch(e){
    res.status(404).send(e);
}
};
/**
 * Borrar Tipo Ambiente
 * @param {*} req 
 * @param {*} res 
 */
const deleteTipoAmbiente = async(req,res)=>{
  try{
      const id = req;
      const tipoAmbiente = await tipoAmbienteModel.findOne({
        where: {
          idTipoAmbiente: id,
        },
      });
      if (!tipoAmbiente){
        return res.status(404).send({ error: "Tipo de ambiente no encontrado" });
      }
        await tipoAmbiente.destroy();
        res.send({message: 'Tipo de ambiente eliminado correctamente'});
    }catch(e){
      res.status(404).send(e)
    }
  };

module.exports = {getTipoAmbientes,getTipoAmbiente,createTipoAmbiente,updateTipoAmbiente,deleteTipoAmbiente}