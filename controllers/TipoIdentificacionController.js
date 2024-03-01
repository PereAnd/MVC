const { tipoIdenModel } = require("../models/indexModel");

const getTiposIden = async (req, res) => {
    try{
  const data = await tipoIdenModel.findAll();
  if(data==null){
    res.status(404).send({
        message: "No se han encontrado cuentas TyC."
    });
    }else{
        res.status(200).send(data)
    }
    }catch(e){
        res.status(404).send(e);
    }
};

const getTipoIden = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await tipoIdenModel.findOne({
            where: {
            idTipoIdentificacion: id,
            },
        });
        if (!data){
            res.status(404).send({ error: "Tipo de identificación no encontrado" });
        }else{
            res.status(200).send(data);
        }
    } catch(e){
        res.status(404).send(e);
    }
};

const createTipoIden = async (req, res) => {
  try{
    const { body } = req;
    if(!body){
        res.status(404).send("parametros de creación tipo de identificación vacios.")
    }else{
        const data = await tipoIdenModel.create(body);
        res.status(200).send( data );
    }
  }catch{
    res.status(404).send({message:"No se pudo crear cuenta tyc."});
  }
};

const updateTipoIden = async (req, res) => {
  try{
  const id = req.params.id;
  const tipoIden = await tipoIdenModel.findOne({
    where: {
      idTipoIdentificacion: id,
    },
  });
    if (!tipoIden){
        res.status(404).send({ error: "Tipo de identificación no encontrado" });
    }else{
        let { body } = req.params.body;
        tipoIden.nombre = body.nombre;
        tipoIden.codigo = body.codigo;
        await tipoIden.save();
        res.status(200).send(tipoIden)({
            message:"El tipo de identificación ha sido modificado."
        });
    }
  }catch(e){
    res.status(404).send(e);
  }
};

const deleteTipoIden = async (req, res) => {
    try{
        const id = req.params.id;
        const tipoIden = await tipoIdenModel.findOne({
            where: {
            idTipoIdentificacion: id,
            },
        });
        if (!tipoIden){
            res.status(404).send({ error: "Tipo de identificación no encontrado" });
        }else{
            await tipoIden.destroy();
            res.send({message: 'Tipo de identificación eliminado correctamente'});    
        }
        }catch(e){
            res.status(404).send(e)
        }
};

module.exports = {
  getTiposIden,
  getTipoIden,
  createTipoIden,
  updateTipoIden,
  deleteTipoIden,
};
