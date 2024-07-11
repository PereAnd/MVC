const e = require("cors");
const {Op}= require("sequelize")
const { tipoClienteModel } = require("../models/indexModel");
const TipoCliente = require("../models/tipoClienteModel");

const getTiposPers = async (req, res) => {
    try {
        const data = await tipoClienteModel.findAll();
        if(!data){
            res.status(404).send({
                message: "No se encontraron tipos de clientes."
            });
        }else{
            res.status(200).send(data)
        }
    }catch(e){
        res.status(404).send(e);
    }
};

const getTipoPers = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await tipoClienteModel.findOne({
            where: {
                idTipoCliente: id,
            },
        });
        if (!data){
            res.status(404).send({
                error: "El tipo de cliente no ha sido encontrado."
            });
        }else{
            res.status(200).send(data);
        }
    } catch(e){
        res.status(404).send(e)
    }
};

const createTipoPers = async (req, res) => {
    const nombreTPers = req.body.nombreTPers;
    const nombreTPersMay=nombreTPers.toUpperCase();
    const codigo=req.body.codigo;
    try{
        const { body } = req;
        if(Object.keys(body).length ==0){
            res.status(400).send({
                message:"Los parametros de creación de tipo de persona son invalidos o estan vacios."
            });
        }else{
            const [tipoPers,Created] = await tipoClienteModel.findOrCreate(
                {
                    where:{
                        [Op.or]:[
                            { nombre: nombreTPersMay},
                            { codigo: codigo }
                        ]},
                        defaults:{
                            nombre: nombreTPersMay,
                            codigo: codigo
                        }
                })
                console.log(tipoPers);
                if(Created==false){
                    res.status(409).send({error: "El tipo de cliente '"+nombreTPersMay+"' ya existe, con código: "+codigo})
                }   else{
                    console.log(Created)
                    res.status(200).send({mensaje: "El tipo de cliente '"+nombreTPersMay+"' ha sido creado, con código: "+codigo})
                }
        };
    }catch(e){
        res.status(404).send({error:'No se pudo crear el tipo de cliente. '+e})
    }
};

const updateTipoPers = async (res, req) => {
    try{
        const id = req.params.id;
        const tipoClien = await tipoClienteModel.findOne({
            where: {
                idTipoCliente: id,
            },
        });
        if (!tipoCliente){
            res.status(400).send({
                error: "El tipo de cliente no ha sido encontrado."
            });
        }else{
            let { body } = req.params.body;
            tipoClien.nombre = body.nombre;
            tipoClien.codigo = body.codigo;
            await tipoClien.save();
            res.status(200).send(tipoIden)({
                message:"El tipo de cliente ha sido modificado."
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};

const deleteTipoPers = async (req, res) => {
    try{
        const id = req.params.id;
        const tipoClien = await tipoClienteModel.findOne({
            where: {
            idTipoCliente: id,
            },
        });
        if (!tipoClien){
            res.status(404).send({ error: "Tipo de cliente no encontrado" });
        }else{
            await tipoClien.destroy();
            res.send({message: 'Tipo de cliente eliminado correctamente'});    
        }
        }catch(e){
            res.status(404).send(e)
        }
};

module.exports = {
    getTiposPers,
    getTipoPers,
    createTipoPers,
    updateTipoPers,
    deleteTipoPers,
};