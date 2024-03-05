const {ordenCompraModel} = require("../models/indexModel");

/**
 * Obtener estado por medio de un Id
 * @param {*} req 
 * @param {*} res 
 */
const getOrdenCompra= async(req,res)=>{
    try{
        const idOrdenCompraC = req.params.id;
        const OrdenCompra = await ordenCompraModel.findOne({
            where:{
                idOrdenCompra:idOrdenCompraC
            }
        });
        if(!OrdenCompra){
            res.status(404).send({
                message:"OrdenCompra con el id "+idOrdenCompraC+" no existe!!!"
            });
        }else{
            res.status(200).send(OrdenCompra);
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * obtener lista de ordenesCompras
 * @param {*} req 
 * @param {*} res 
 */
const getOrdenesCompras = async(req,res)=>{
    try{
        const OrdenCompras = await ordenCompraModel.findAll();
        if(OrdenCompras == null){
            res.status(404).send({
                message: "No se han encontrado Ordenes de Compra!!!"
            });
        }
        res.status(200).send(OrdenCompras);
    }
    catch(e){
        res.status(404).send(e);
    }

};
/**
 * crear una OrdenCompra 
 * @param {*} req 
 * @param {*} res 
 */
const createOrdenCompra = async(req,res)=>{
    try{
        const { body } = req;
        if(Object.keys(body).length == 0){
            res.status(404).send({
                message:"parámetros de creación de OrdenCompra, vacios!!!"
            });
        }else{
            const OrdenCompra = await ordenCompraModel.create(body);
            res.status(200).send(OrdenCompra);
        }
    }catch(e){
        res.status(404).send({
            message:"No se pudo crear la OrdenCompra!!!"+e
        });
    }
};
/**
 * Modificar datos de una OrdenCompra 
 * @param {*} req 
 * @param {*} res 
 */
const updateOrdenCompra = async(req,res)=>{
    try{
        //veririfcar si pidiendo todo el body y deconstruyendolo con idOrdenCompra, sirve?
        const {body} = req;
        const idOrdenCompra = req.params.id;
        const OrdenCompra = await ordenCompraModel.findOne({
            where: {
                idOrdenCompra: idOrdenCompra
            }
        });
        if(Object.keys(body).length == 0){
            res.status(404).send({
                message: "parametros de creación cuenta vacios!!!"
            });
        }else if(!OrdenCompra){
            res.status(404).send({
                message: "No se encontró OrdenCompra con el id "+idOrdenCompra
            });
        }else{
            OrdenCompra.costoTotal = body.costoTotal;
            OrdenCompra.codigoEstado = body.codigoEstado;
            OrdenCompra.codigoOTP = body.codigoOTP;
            OrdenCompra.numeroAprobacion = body.numeroAprobacion;
            OrdenCompra.observaciones = body.observaciones;
            OrdenCompra.idCliente = body.idCliente;
            OrdenCompra.idEstado = body.idEstado;
            OrdenCompra.idEcommerce = body.idEcommerce;
            await OrdenCompra.save();
            res.status(200).send({
                message:"OrdenCompra con id "+idOrdenCompra+", ha sido modificada!!!"
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Borrar OrdenCompra con id
 */

const deleteOrdenCompra = async (req,res)=>{
    try{
        const idOrdenCompraF = req.params.id;
        const OrdenCompra = await ordenCompraModel.findOne({
            where:{
                idOrdenCompra: idOrdenCompraF
            }
        });
        if(!OrdenCompra){
            res.status(404).send({
                message: "No se encontró OrdenCompra con el id "+idOrdenCompraF
            });
        }else{
            await OrdenCompra.destroy();
            res.status(200).send({
                message: "Se ha eliminado la OrdenCompra con id "+idOrdenCompraF+", correctamente!!!"
            });
        }
    }
    catch(e){
        res.status(404).send(e);
    }
};
module.exports = {getOrdenCompra,getOrdenesCompras,createOrdenCompra,updateOrdenCompra,deleteOrdenCompra};