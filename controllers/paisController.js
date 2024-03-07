const {paisModel} = require("../models/indexModel");

const getPais = async(req, res)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "No se encuentro registro con el id "+id
            });
        }else{
            const Pais = await paisModel.findOne({
                where: {
                    idPais : id
                }
            });
            if(!Pais){
                res.status(400).send({
                    message: "No se encontró Pais por el id "+id
                });
            }else{
                res.status(200).send(Pais);
            }
        }
    }catch(e){
        res.status(404).send(e);
    }
}

const getPaises = async(req,res)=>{
    const Paises = await paisModel.findAll();
    res.status(200).send(Paises);
}

const createPais = async(req,res)=>{
    const {body} = req;
    const Pais = await paisModel.create(body);
    res.status(200).send(Pais);
}

module.exports = {getPais, getPaises, createPais};