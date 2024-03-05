const { entornoTrabajoModel } = require("../models/indexModel");

/**
 * Obtener lista de la base de datos EntornoTrabajo
 * @param {*} req 
 * @param {*} res 
 */
const getEntornosTrabajo =  async(req, res)=>{
    try{
        const data = await entornoTrabajoModel.findAll();
        if(!data){
            res.status(404).send({
                message: "No se han encontrado entornos de trabajo."
            });
        }else{
            res.status(200).send(data) 
        }
    }catch{
        res.status(404).send(e);
    }
};
/**
 * Obtener un Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const getEntornoTrabajo = async(req,res) =>{
    try{
        const id = req.params.id;
        const data = await entornoTrabajoModel.findOne({
            where: {
                idEntornoTrabajo: id,
            },
        });
        if (!data){
            res.status(404).send({ error: "Entorno de trabajo no encontrado." });
        } else{
            res.status(200).send(data);
        }
    }catch(e){
        res.status(404).send({message:"No se pudo obtener el entono de trabajo."+e});
    }
};
/**
 * crear un Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const createEntornoTrabajo = async(req,res) => {
    try{
        const { body } = req
            if(!body){
                res.status(404).send("Parametros de creación entorno de trabajo vacios.");
            }else{
                const data = await entornoTrabajoModel.create(body)
                res.send( data );
            }
            }catch(e){
                res.status(404).send({message:"No se pudo crear el entono de trabajo. "+e})
            }
};
/**
 * Modificar Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const updateEntornoTrabajo = async (req, res) => {
    try{
    const id = req;
    const entornoTrabajo = await entornoTrabajoModel.findOne({

      where: {
        idEntornoTrabajo: id,
      },
    });
    if (!entornoTrabajo){
        return res.status(404).send({ error: "Entorno de trabajo no encontrado" });
    }else{
        let { body } = req;
        entornoTrabajo.url = body.url;
        entornoTrabajo.puerto = body.puerto;
        entornoTrabajo.idEntidadFinanciera = body.idEntidadFinanciera;
        entornoTrabajo.idTipoAmbiente = body.idTipoAmbiente;
        entornoTrabajo.scopeEntorno = body.scope;
        entornoTrabajo.grantType = body.grantType;
        await entornoTrabajo.save();
        res.status(200).send({message:"el entorno de trabajo ha sido modificada."});
    }
    }catch(e){
        res.status(404).send(e);
    }
  };
/**
 * Borrar Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const deleteEntornoTrabajo = async(req,res)=>{
    try{
        const id = req;
        const entornoTrabajo = await entornoTrabajoModel.findOne({
            where:{
                idEntornoTrabajo: id,
            },
        });
        if (!entornoTrabajo){
            res.status(404).send({ error: "Entorrno de trabajo no encontrado" });
        }else{
            await entornoTrabajo.destroy();
            res.status(200).send({message: 'Entorno de trabajo eliminado correctamente'});
        }
    }catch(e){
        res.status(404).send(e)
    }
};



module.exports = {getEntornosTrabajo,getEntornoTrabajo,createEntornoTrabajo,updateEntornoTrabajo,deleteEntornoTrabajo};