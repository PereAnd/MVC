const { tipo, tipoTransaccionModel } = require("../models/indexModel");

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

const updateTipoTransaccion = async (req, res) => {
    const id = req.params.id;
    const { body } = req;
    let TipoTransaccion = await tipoTransaccionModel.findOne({
      where: {
        idTipo_Transaccion: id,
      },
    });
    try {
      if (TipoTransaccion) {
        if (Object.keys(body).length === 0)
          return res.status(400).send({ error: "No hay datos para actualizar" });
        else if (body.numeroTipoTransaccion || body.idEntidadFinanciera) {
          const TipoTransaccionExists = await tipoTransaccionModel.findOne({
            where: {
              [Op.or]: [
                {
                  idEntidadFinanciera: body.idEntidadFinanciera || TipoTransaccion.idEntidadFinanciera,
                  numeroTipoTransaccion: body.numeroTipoTransaccion || TipoTransaccion.numeroTipoTransaccion, 
                },
              ],
            },
          });
          if (TipoTransaccionExists && TipoTransaccionExists.idTipoTransaccion != id)
            return res.status(409).send({ error: "TipoTransaccion ya existe" });
        }
  
        await TipoTransaccion.update(body);
        TipoTransaccion.save();
        res.send(TipoTransaccion);
      } else {
        return res.status(404).send({ error: "TipoTransaccion no encontrada" });
      }
    } catch (error) {
      return res.status(500).send({ error });
    }
  };
  
  const deleteTipoTransaccion = async (req, res) => {
    const id = req.params.id;
    const TipoTransaccion = await tipoTransaccionModel.findOne({
      where: {
        idTipo_Transaccion: id,
      },
    });
    if (!TipoTransaccion){
      return res.status(404).send({ error: "TipoTransaccion no encontrada" });
    }else{
        await TipoTransaccion.destroy();
        res.status(200).send({ message: "TipoTransaccion eliminada correctamente" });
    }
  };
module.exports = {getTipoTransaccion,getTipoTransacciones,createTipoTransaccion,updateTipoTransaccion,deleteTipoTransaccion};