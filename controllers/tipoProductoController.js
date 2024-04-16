const {tipoProductoModel } = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getTipoProducto= async(req,res)=>{
    try{
        const idTipoProductoC = req.params.id;
        const TipoProducto = await tipoProductoModel.findOne({
            where:{
                idTipo_Producto:idTipoProductoC
            }
        });
        if(!TipoProducto){
            res.status(404).send({
                message:"Tipo de Productos con el id "+idTipoProductoC+" no existe!!!"
            });
        }else{
            res.status(200).send(TipoProducto);
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de Productos
 * @param {*} req 
 * @param {*} res 
 */
const getTipoProductos = async(req,res)=>{
    try{
        const TipoProducto = await tipoProductoModel.findAll();    
        if(TipoProducto == null){
            res.status(404).send({
                message: "No se han encontrado Tipos de Productos"
            });
        }else{
            res.status(200).send(TipoProducto);
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
const createTipoProducto = async(req,res)=>{
    try{
        const { body } = req;
        if(Object.keys(body).length == 0){
            res.status(404).send({
                message:"parámetros de creación de Tipo de producto, vacios!!!"
            });
        }else{
            const Producto = await tipoProductoModel.create(body);
            res.status(200).send(Producto);
        }
    }catch(e){
        res.status(404).send({
            error: e,
            message:"No se pudo crear el tipo de producto!!!"
        });
    }
};
/*
const updateTipoProducto = async (req, res) => {
    const id = req.params.id;
    const { body } = req;
    let TipoProducto = await tipoProductoModel.findOne({
      where: {
        idTipo_Producto: id,
      },
    });
    try {
      if (TipoProducto) {
        if (Object.keys(body).length === 0)
          return res.status(400).send({ error: "No hay datos para actualizar" });
        else if (body.numeroTipoProducto || body.idEntidadFinanciera) {
          const TipoProductoExists = await tipoProductoModel.findOne({
            where: {
              [Op.or]: [
                {
                  idEntidadFinanciera: body.idEntidadFinanciera || TipoProducto.idEntidadFinanciera,
                  numeroTipoProducto: body.numeroTipoProducto || TipoProducto.numeroTipoProducto, 
                },
              ],
            },
          });
          if (TipoProductoExists && TipoProductoExists.idTipoProducto != id)
            return res.status(409).send({ error: "TipoProducto ya existe" });
        }
  
        await TipoProducto.update(body);
        TipoProducto.save();
        res.send(TipoProducto);
      } else {
        return res.status(404).send({ error: "TipoProducto no encontrada" });
      }
    } catch (error) {
      return res.status(500).send({ error });
    }
  };
  */
  const deleteTipoProducto = async (req, res) => {
    const id = req.params.id;
    const TipoProducto = await tipoProductoModel.findOne({
      where: {
        idTipo_Producto: id,
      },
    });
    if (!TipoProducto){
      return res.status(404).send({ error: "TipoProducto no encontrada" });
    }else{
        await TipoProducto.destroy();
        res.status(200).send({ message: "TipoProducto eliminada correctamente" });
    }
  };
module.exports = {getTipoProducto,getTipoProductos,createTipoProducto,deleteTipoProducto};