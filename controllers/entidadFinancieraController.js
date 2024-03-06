const { entidadFModel } = require("../models/indexModel");
const {Op} = require("sequelize");

const getEntidadesFinancieras = async (req, res) => {
  const data = await entidadFModel.findAll();
  res.send(data);
};

const getEntidadFinanciera = async (req, res) => {
  const id = req.params.id;
  const data = await entidadFModel.findOne({
    where: {
      idEntidadFinanciera: id,
    },
  });
  if (!data) return res.status(404).send({ error: "Entidad no encontrada" });
  res.send(data);
};

const createEntidadFinanciera = async (req, res) => {
    const { body } = req;
    let entidadF = null;
    if(Object.keys(body).length == 0){
      res.status(404).send({
        message:"No existe body en al petición!!!"
      });
    }else{
  /*    const { nit } = body;
      console.log(nit);
      entidadF = await entidadFModel.findOne({
        where: {
          nit: nit
        }
      });
      if(!entidadF){
        entidadF = await entidadFModel.create(body);
        res.status(200).send(entidadF);
      }else{
        res.status(400).send({
          message:"No se puede crear, entidad financiera ya existe!!!"
        });
      }*/
      const nombreE=req.body.nombre;
      const nitE=req.body.nit;
      console.log("entidad F "+nombreE+" con nit "+nitE);
      const [entidadF,Created] = await entidadFModel.findOrCreate({
          where: {
                  [Op.or]:[
                        { nombre: nombreE},
                        { nit: nitE }
                ]},
          defaults:{
          }
      })            
      console.log(entidadF);
      if(Created==false){
          res.status(409).send({error: "La entidad financiera '"+nombreE+"' ya esta creado, con código: "+nitE})
      }else{
          console.log(Created)
          res.status(200).send({mensaje: "El tipo entidad financiera '"+nombreE+"' ha sido creado, con código: "+nitE})
      }
    }
};

const updateEntidadFinanciera = async (req, res) => {
  const id = req.params.id;
  const entidadFinanciera = await entidadFModel.findOne({
    where: {
      idEntidadFinanciera: id,
    },
  });
  if (!entidadFinanciera)
    return res.status(404).send({ error: "Entidad no encontrada" });
  let { body } = req;
  entidadFinanciera.nombre = body.nombre;
  entidadFinanciera.nit = body.nit;
  entidadFinanciera.idTipoEntidadFinanciera = body.idTipoEntidadFinanciera;

  await entidadFinanciera.save();
  res.send(entidadFinanciera);
};

const deleteEntidadFinanciera = async (req, res) => {
  const id = req.params.id;
  const entidadFinanciera = await entidadFModel.findOne({
    where: {
      idEntidadFinanciera: id,
    },
  });
  if (!entidadFinanciera)
    return res.status(404).send({ error: "Entidad no encontrada" });
	await entidadFinanciera.destroy();
  res.send({message: 'Entidad eliminada correctamente'});
};

module.exports = {
  getEntidadesFinancieras,
  getEntidadFinanciera,
  createEntidadFinanciera,
  updateEntidadFinanciera,
  deleteEntidadFinanciera,
};
