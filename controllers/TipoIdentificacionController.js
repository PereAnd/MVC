const e = require("cors");
const {Op}= require("sequelize")
const { tipoIdenModel } = require("../models/indexModel");

const getTiposIden = async (req, res) => {
    try{
  const data = await tipoIdenModel.findAll();
  if(!data){
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
  const nombreTIdent = req.body.nombre
  const nombreTIdentMay=nombreTIdent.toUpperCase()
  const codigo=req.body.codigo
  try{
    const { body } = req;
    if(Object.keys(body).length == 0){
        res.status(400).send({
            message:"parametros de creación de tipo de identificación, vacios!!!"
        });
    } else{
        const [tipoIden,Created] = await tipoIdenModel.findOrCreate(
          {
            where: {
              [Op.or]:[
                    { nombre: nombreTIdentMay}, 
                    { codigo: codigo }
                  ]},
                  defaults:{
                    nombre: nombreTIdentMay, 
                    codigo: codigo 
                 }
        })            
        console.log(tipoIden);
        if(Created==false){
            res.status(409).send({error: "El tipo identificación '"+nombreTIdentMay+"' ya existe, con código: "+codigo})
        }   else{
            console.log(Created)
            res.status(200).send({mensaje: "El tipo identifiación '"+nombreTIdentMay+"' ha sido creado, con código: "+codigo})
        }
    };
  }catch(e){

      res.status(404).send({error:'No se pudo crear el tipo entidad financiera. '+e})
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
