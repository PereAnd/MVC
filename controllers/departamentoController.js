const {departamentoModel} = require("../models/indexModel");

const getDepartamento = async(req, res)=>{
    try{
        const id = req.params.id;
        if(!id){
            res.status(400).send({
                message: "No se encuentro registro con el id "+id
            });
        }else{
            const Departamento = await departamentoModel.findOne({
                where: {
                    idDepartamento : id
                }
            });
            if(!Departamento){
                res.status(400).send({
                    message: "No se encontró Departamento por el id "+id
                });
            }else{
                res.status(200).send(Departamento);
            }
        }
    }catch(e){
        res.status(404).send(e);
    }
}

const getDepartamentos = async(req,res)=>{
    const Departamentoes = await departamentoModel.findAll();
    res.status(200).send(Departamentoes);
}

const createDepartamento = async(req,res)=>{
    const {body} = req;
    const Departamento = await departamentoModel.create(body);
    res.status(200).send(Departamento);
}

module.exports = {getDepartamento, getDepartamentos, createDepartamento};