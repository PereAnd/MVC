const {cuentaModel} = require("../models/indexModel");
/**
 * Obtener cuenta financiera por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getCuenta = async(req,res)=>{
    try{
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
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de cuentas financiera
 * @param {*} req 
 * @param {*} res 
 */
const getCuentas = async(req,res)=>{
    try{
        const cuentas = await cuentaModel.findAll();
        if(cuentas == null){
            res.status(404).send({
                message: "No se han encontrado Cuentas"
            });
        }
        res.status(200).send(cuentas);
    }
    catch(e){
        res.status(404).send(e);
    }
};
/**
 * crear una cuenta financiera
 * @param {*} req 
 * @param {*} res 
 */
const createCuenta = async(req,res)=>{
    try{
        const { body } = req.params.body;
        if(!body){
            res.status(404).send("parametros de creación cuenta vacios!!!");
        }else{
            const cuenta = await cuentaModel.create(body);
            res.status(200).send(cuenta);
        }
    }catch(e){
        res.status(404).send({
            message:"No se pudo crear la cuenta!!!"
        });
    }
};
/**
 * Modificar datos de una cuenta financiera
 * @param {*} req 
 * @param {*} res 
 */
const updateCuenta = async(req,res)=>{
    try{
        //veririfcar si pidiendo todo el body y deconstruyendolo con idCuenta, sirve?
        const {idCuenta} = req.params.body;
        const cuenta = await cuentaModel.findOne({
            where: {
                idCuenta: idCuenta
            }
        });
        if(!cuenta){
            res.send(404).status({
                message: "No se encontró cuenta financiera con el id "+idCuenta
            });
        }else{
            const{body} = req;
            cuenta.usuario = body.usuario;
            cuenta.password = body.password;
            cuenta.numeroCuenta = body.numeroCuenta;
            cuenta.idEntidadFinanciera = body.idEntidadFinanciera;
            cuenta.idToken = body.idToken;
            cuenta.idEstado_Cuenta = body.idEstado_Cuenta;
            await cuenta.save();
            res.send(200).send({
                message:"Cuenta con id "+idCuenta+", ha sido modificada!!!"
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Borrar cuenta financiera con id
 */

const deleteCuenta = async (req,res)=>{
    try{
        const idCuentaF = req.params.id;
        const cuenta = await cuentaModel.findOne({
            where:{
                idCuenta: idCuentaF
            }
        });
        if(!cuenta){
            res.status(404).send({
                message: "No se encontró cuenta financiera con el id "+idCuentaF
            });
        }else{
            await cuenta.destroy();
            res.status(200).send({
                message: "Se ha eliminado la cuenta con id "+idCuentaF+", correctamente!!!"
            });
        }
    }
    catch(e){
        res.status(404).send(e);
    }
};
module.exports = {getCuenta,getCuentas,createCuenta,updateCuenta,deleteCuenta};