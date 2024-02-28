const {cuentaModel} = require("../models/indexModel");
/**
 * Obtener cuenta por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getCuenta = async(req,res)=>{
    const idCuentaC = req.params.body;
    const cuenta = await cuentaModel.findOne({
        where:{
            idCuenta:idCuentaC
        }
    });
    if(!cuenta){
        res.status(404).send({
            message:"Cuenta con el id "+idCuentaC+" no existe!!!"
        });
    }
    res.status(200).send(cuenta);
}

module.exports = {getCuenta};