const {ciudadModel} = require("../models/indexModel");

const getCiudad = async(req, res)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "No se encuentro registro con el id "+id
            });
        }else{
            const ciudad = await ciudadModel.findOne({
                where: {
                    idCiudad : id
                }
            });
            if(!ciudad){
                res.status(400).send({
                    message: "No se encontró ciudad por el id "+id
                });
            }else{
                res.status(200).send(ciudad);
            }
        }
    }catch(e){
        res.status(404).send(e);
    }
}

const getCiudades = async(req,res)=>{
    const ciudades = await ciudadModel.findAll();
    res.status(200).send(ciudades);
}

const createCiudad = async(req,res)=>{
    const {body} = req;
    const ciudad = await ciudadModel.create(body);
    res.status(200).send(ciudad);
}

module.exports = {getCiudad, getCiudades, createCiudad};