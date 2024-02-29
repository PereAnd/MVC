const { where } = require("sequelize");
const {entornoTrabajoModel} = require("../models/indexModel");

/**
 * Obtener lista de la base de datos EntornoTrabajo
 * @param {*} req 
 * @param {*} res 
 */
const getEntornoTrabajos =  async(req, res)=>{
    try{
        const entornoTrabajo = await entornoTrabajoModel.findAll();
        if(entornoTrabajo == null){
            res.status(404).send({
                message: "No existen entornos de trabajo!!!"
            });
        }else{
            res.status(200).send(entornoTrabajo);
        }
    }catch(e){
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
        const idEntornoTra = req.params.id;
        const entornoTrabajo = await entornoTrabajoModel.findOne({
            message:"Entorno de Trabajo con el id "+idEntornoTra+" no existe!!!"
        });
        if(!entornoTrabajo){
            res.status(404).send({
                message:"Entorno de Trabajo no existe!!!"
            })
        }else{
            res.status(200).send(entornoTrabajo);
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * crear un Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const createEntornoTrabajo = async(req,res) => {
    try{
        const {body} = req
        const entornoTrabajo = await clienteModel.create(body)
        if(!body){
            res.status(404).send({
                message:"Entorno de Trabajo no existe!!!"
            });
        }
        await entornoTrabajo.create(body);
        res.status(200).send(entornoTrabajo);
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Modificar Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const updateEntornoTrabajo = async(req,res)=>{
    try{
        const idEntornoTra = req.params.id;
        const entornoTrabajo = await entornoTrabajoModel.findOne({
            where:{
                idEntornoTrabajo: idEntornoTra
            } 
        });
        if(!entornoTrabajo){
            res.status(404).send({
                message:"Entorno de Trabajo no existe!!!"
            });
        }
        
    } catch(e){
        res.status(404).send(e);
    }
};
/**
 * Borrar Entorno Trabajo
 * @param {*} req 
 * @param {*} res 
 */
const deleteEntornoTrabajo = (req,res)=>{
    try{
        
    } catch(e){
        res.status(404).send(e);
    }
};

module.exports = {getEntornoTrabajos,getEntornoTrabajo,createEntornoTrabajo,updateEntornoTrabajo,deleteEntornoTrabajo}