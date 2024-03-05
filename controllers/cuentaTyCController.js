const { cuentasTyCModel } = require("../models/indexModel");

/**
 * Obtener lista de la base de datos CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const getCuentaTyCs =  async (req, res)=>{
    try{
        const data = await cuentasTyCModel.findAll();
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
/**
 * Obtener una CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const getCuentaTyC = async(req,res) =>{
    try{
        const id = req.params.id;
        const data = await cuentasTyCModel.findOne({
            where:{
                idCuenta_TyC: id,
            },
    });
    if (!data){ 
        res.status(404).send({ error: "Cuenta TyC no encontrada"});    
    }else{
        res.status(200).send(data);
    }
    }catch(e){

    }
};
/**
 * crear una CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const createCuentaTyC = async(req,res) => {
    try{
        const { body } = req;
        if(!body){
            res.status(404).send("Parametros de creación cuenta tyc vacios.");

        }
        else{
            const data = await cuentasTyCModel.create(body);
            res.status(200).send(data)
        }
    } catch(e){
        res.status(404).send({message:"No se pudo crear cuenta tyc. "+e});
    }
};
/**
 * Modificar CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const updateCuentaTyC = async(req,res)=>{
    try{
        const id = req.params.id;
        const cuentaTyC = await cuentaTyCController.findOne({
            where: {
                idCuenta_TyC: id,
            },
        });
        if (!cuentaTyC){
            return res.status(404).send({ error: "Cuenta TyC no encontrada." })

        }else{
            let { body } = req.params.body;
            cuentaTyC.idCuenta = body.idCuenta;
            cuentaTyC.idTyC = body.idTyC;       
            await cuentaTyC.save();
            res.status(200).send({
                message:"La cuenta tyc ha sido modificada."
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Borrar CuentaTyC
 * @param {*} req 
 * @param {*} res 
 */
const deleteCuentaTyC = async(req,res)=>{
    try{
        const id = req.params.idcuenta_TyC
        const cuentaTyC = await cuentasTyCModel.findOne({
            where:{
                idCuenta_TyC: id,
            }
        });
        if (!cuentaTyC){
            return res.status(404).send({ error: "Cuenta TyC no encontrada." });
        }else{
            await cuentaTyC.destroy();
            res.send({message: 'Cuenta TyC eliminada correctamente'})
        }
    }catch(e){
        res.status(404).send(e)
    }
};

module.exports = {
    getCuentaTyCs,
    getCuentaTyC,
    createCuentaTyC,
    updateCuentaTyC,
    deleteCuentaTyC,
}