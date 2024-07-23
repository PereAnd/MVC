const e = require("cors");
const {Op}= require("sequelize")
const { subtipoProductoModel } = require("../models/indexModel");

const getSubtiposProds = async (req, res) => {
    try {
        const data = await subtipoProductoModel.findAll();
        if(!data){
            res.status(404).send({
                message: "No se encontraron subtipos de productos."
            });
        }else{
            res.status(200).send(data)
        }
    }catch(e){
        res.status(404).send(e);
    }
};

const getSubtipoProd = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await subtipoProductoModel.findOne({
            where: {
                idSubtipo_Producto: id,
            },
        });
        if (!data){
            res.status(404).send({
                error: "El subtipo de producto no ha sido encontrado."
            });
        }else{
            res.status(200).send(data);
        }
    } catch(e){
        res.status(404).send(e)
    }
};


const createSubtipoProd = async (req, res) => {
    const nombreSubtipoProds = req.body.nombreSubtipoProds;
    const nombreSubtipoProdsMay=nombreSubtipoProds.toUpperCase();
    const codigo=req.body.codigo;
    const idTipoProducto=req.body.idTipo_Producto;
    try{
        const { body } = req;
        if(Object.keys(body).length ==0){
            res.status(400).send({
                message:"Los parametros de creación de subtipo de producto son inválidos o están vacios."
            });
        }else{
            const [subtipoProds,Created] = await subtipoProductoModel.findOrCreate(
                {
                    where:{
                        [Op.or]:[
                            { nombre: nombreSubtipoProdsMay},
                            { codigo: codigo }
                        ]},
                        defaults:{
                            nombre: nombreSubtipoProdsMay,
                            codigo: codigo,
                            idTipo_Producto: idTipoProducto
                        }
                })
                console.log(subtipoProds);
                if(Created==false){
                    res.status(409).send({error: "El subtipo de producto '"+nombreSubtipoProdsMay+"' ya existe, con código: "+codigo})
                }   else{
                    console.log(Created)
                    res.status(200).send({mensaje: "El subtipo de producto '"+nombreSubtipoProdsMay+"' ha sido creado, con código: "+codigo})
                }
        };
    }catch(e){
        res.status(404).send({error:'No se pudo crear el subtipo de producto. '+e})
    }
};

 const updateSubtipoProd = async (res, req) => {
     try{
         const id = req.params.id;
         const subtipoProd = await subtipoProductoModel.findOne({
             where: {
                 idSubtipo_Producto: id,
             },
         });
         if (!subtipoProd){
             res.status(400).send({
                 error: "El subtipo de producto no ha sido encontrado."
             });
         }else{
             let { body } = req.params.body;
             subtipoProd.nombre = body.nombre;
             subtipoProd.codigo = body.codigo;
             subtipoProd.idTipo_Producto = body.idTipo_Producto;
             await subtipoProd.save();
             res.status(200).send(subtipoProd)({
                 message:"El subtipo de producto ha sido modificado."
             });
         }
     }catch(e){
         res.status(404).send(e);
     }
 };

const deleteSubtipoProd = async (req, res) => {
    try{
        const id = req.params.id;
        const subtipoProd = await subtipoProductoModel.findOne({
            where: {
            idSubtipo_Producto: id,
            },
        });
        if (!subtipoProd){
            res.status(404).send({ error: "Subtipo de producto no encontrado" });
        }else{
            await subtipoProd.destroy();
            res.send({message: 'Subtipo de producto eliminado correctamente'});    
        }
        }catch(e){
            res.status(404).send(e)
        }
};

module.exports = {
    getSubtiposProds,
    getSubtipoProd,
    createSubtipoProd,
    // updateSubtipoProd,
    deleteSubtipoProd,
};