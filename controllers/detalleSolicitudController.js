const e = require("cors");
const {Op}= require("sequelize")
const { detalleSolicitudModel, clienteModel } = require("../models/indexModel");
const { matchedData } = require("express-validator");
const error = require("../models/errorModel");

/**
 * Obtiene todos los registros de Detalles_SolicitudP
 * @param {*} req 
 * @param {*} res 
 */
const getDetalleSolicitudes = async (req, res) => {
    try {
        const data = await detalleSolicitudModel.findAll();
        console.log("Valores de data "+ data);
        if(!data){
            res.status(404).send({
                message: "No se encontraron detalles de solicitudes."
            });
        }
        else{
            res.status(200).send(data)
        }
    } catch (e) {
        res.status(404).send("Error en el catch "+e);
    };
};

    const getDetalleSolicitud = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await detalleSolicitudModel.findOne({
                where: {
                    idDetalles_SolicitudP: id,
                },
            });
            if (!data){
                res.status(404).send({
                    error: "El detalle de la solicitud no ha sido encontrado."
                });
            }else{
                res.status(200).send(data);
            }
        } catch(e){
            res.status(404).send(e)
        }
    };

    const createDetalleSolicitud = async (req, res) => {
        const activLabDetalle = req.body.actividadLaboral;
        const activEconoDetalle = req.body.actividadEconomica;
        const nombreEmpresa = req.body.nombreEmpresa;
        const ingresoMensual = req.body.ingresoMensual;
        const ciudadDomicilio = req.body.ciudadDomicilio;
        const direccionDomicilio = req.body.direccionDomicilio;
        const aceptaTyC = req.body.aceptaTyC;
        const idDetalleSolicitud = req.body.idDetalles_SolicitudP

        try{
            const { body } = req;
            if(Object.keys(body).length ==0){
                res.status(400).send({
                    message:"Los parametros de creación de detalle de solicitud son inválidos o están vacios."
                });
            }else{
                const [DetalleSolicitud,Created] = await detalleSolicitudModel.findOrCreate(
                    {
                        where:{
                            [Op.or]:[
                                //{ idDetalles_SolicitudP: idDetalleSolicitud},
                                //{ actividadLaboral: activLabDetalle},
                                //{ actividadEconomica: activEconoDetalle },
                                //{ nombreEmpresa: nombreEmpresa},
                                //{ ingresoMensual: ingresoMensual},
                                //{ ciudadDomicilio: ciudadDomicilio},
                                { direccionDomicilio: direccionDomicilio},
                                //{ aceptaTyC: aceptaTyC}
                            ]},
                            defaults:{
                                actividadLaboral:activLabDetalle,
                                actividadEconomica: activEconoDetalle,
                                nombreEmpresa: nombreEmpresa,
                                ingresoMensual: ingresoMensual,
                                ciudadDomicilio: ciudadDomicilio,
                                direccionDomicilio: direccionDomicilio,
                                aceptaTyC: aceptaTyC,
                                //idDetalles_SolicitudP: idDetalleSolicitud,
                            }
                    })
                    console.log("Valor detalle solicitud: ",DetalleSolicitud);
                    if(Created==false){
                        res.status(409).send({error: "El detalle de solicitud ya existe"})
                    }   else{
                        console.log(Created)
                        res.status(200).send({mensaje: "El detalle de solicitud ha sido creado"})
                    }
            };
        }catch(e){
            res.status(404).send({error:'No se pudo crear el detalle de solicitud. '+e})
        }
    };

    const updateDetalleSolicitud = async (res, req) => {
         try{
             const id = req.params.id;
             const detalleSolicitudProds = await detalleSolicitudModel.findOne({
                 where: {
                     idDetalles_SolicitudP: id,
                 },
             });
             if (!detalleSolicitudProds){
                 res.status(400).send({
                     error: "El detalle de solicitud no ha sido encontrado."
                 });
             }else{
                 let { body } = req.params.body;
                 detalleSolicitudProds.actividadLaboral = body.actividadLaboral;
                 detalleSolicitudProds.actividadEconomica = body.actividadEconomica;
                 detalleSolicitudProds.nombreEmpresa = body.nombreEmpresa;
                 detalleSolicitudProds.ingresoMensual = body.ingresoMensual;
                 detalleSolicitudProds.ciudadDomicilio = body.ciudadDomicilio;
                 detalleSolicitudProds.direccionDomicilio = body.direccionDomicilio;
                 detalleSolicitudProds.aceptaTyC = body.aceptaTyC;
                 detalleSolicitudProds.idDetalles_SolicitudP = body.idDetalles_SolicitudP;
                 await subtipoProd.save();
                 res.status(200).send(subtipoProd)({
                     message:"El detalle de solicitud ha sido modificado."
                 });
             }
         }catch(e){
             res.status(404).send(e);
         }
     };

     const deleteDetalleSolicitud = async (req, res) => {
        try{
            const id = req.params.id;
            const data = await detalleSolicitudModel.findOne({
                where: {
                idDetalles_SolicitudP: id,
                },
            });
            if (!data){
                res.status(404).send({ error: "Detalle de solicitud no encontrado" });
            }else{
                await data.destroy();
                res.send({message: 'Detalle de solicitud eliminado correctamente'});    
            }
            }catch(e){
                res.status(404).send(e)
            }
    };


module.exports = {
    getDetalleSolicitudes,
    getDetalleSolicitud,
    createDetalleSolicitud,
    updateDetalleSolicitud,
    deleteDetalleSolicitud
};
