const {Op}= require("sequelize")
const { tipoEntidadFModel } = require("../models/indexModel");


const getTipoEntidadesF = async (req, res) => {
  const data = await tipoEntidadFModel.findAll();
  res.send(data);
};

const getTipoEntidadF = async (req, res) => {
  const id = req.params.id;
  const data = await tipoEntidadFModel.findOne({
    where: {
      idTipoEntidadFinanciera: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Tipo de entidad financiera no encontrada" });
  res.send(data);
};

const createTipoEntidadF = async (req, res) => {
  const nombreTEntidad = req.body.nombre
  const nombreTEntidadMay=nombreTEntidad.toUpperCase()
  const codigo=req.body.codigo
  try{
    const { body } = req;
    if(Object.keys(body).length == 0){
        res.status(404).send({
            message:"parametros de creación de tipo entidad financiera, vacios!!!"
        });
    } else{
        const [tipoEntidad,Created] = await tipoEntidadFModel.findOrCreate(
          {
            where: {
              [Op.or]:[
                    { nombre: nombreTEntidadMay}, 
                    { codigo: codigo }
                  ]},
            defaults:{
              nombre: nombreTEntidadMay, 
              codigo: codigo
            }
        })            
        console.log(tipoEntidad);
        if(Created==false){
            res.status(409).send({error: "El tipo entidad financiera '"+nombreTEntidadMay+"' ya esta creado, con código: "+codigo})
        }   else{
            console.log(Created)
            res.status(200).send({mensaje: "El tipo entidad financiera '"+nombreTEntidadMay+"' ha sido creado, con código: "+codigo})
        }
    };
  }catch(e){

      res.status(404).send({error:'No se pudo crear el tipo entidad financiera. '+e})
  }
};

const updateTipoEntidadF = async (req, res) => {
  const id = req.params.id;
  const tipoEntidadF = await tipoEntidadFModel.findOne({
    where: {
      idTipoEntidadFinanciera: id,
    },
  });
  if (!tipoEntidadF)
    return res.status(404).send({ error: "Tipo de entidad financiera no encontrada" });
  let { body } = req;
  tipoEntidadF.nombre = body.nombre;
  tipoEntidadF.codigo = body.codigo;
      
  await tipoEntidadF.save();
  res.send(tipoEntidadF);
};

const deleteTipoEntidadF = async (req, res) => {
  const id = req.params.id;
  const tipoEntidadF = await tipoEntidadFModel.findOne({
    where: {
      idTipoEntidadFinanciera: id,
    },
  });
  if (!tipoEntidadF)
    return res.status(404).send({ error: "Tipo de entidad financiera no encontrada" });
	await tipoEntidadF.destroy();
  res.send({message: 'Tipo de entidad financiera eliminada correctamente'});
};

module.exports = {
   getTipoEntidadF,
   getTipoEntidadesF,
   createTipoEntidadF,
   updateTipoEntidadF,
   deleteTipoEntidadF
};
