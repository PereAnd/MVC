const { productoTyCModel } = require("../models/indexModel");

/**
 * Obtener lista de la base de datos ProductoTyC
 * @param {*} req 
 * @param {*} res 
 */
const getProductoTyCs =  async (req, res)=>{
    try{
        const data = await productoTyCModel.findAll();
        if(!data){
            res.status(404).send({
                message: "No se han encontrado producto TyC."
            });
        }else{
            res.status(200).send(data)
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Obtener una ProductoTyC
 * @param {*} req 
 * @param {*} res 
 */
const getProductoTyC = async(req,res) =>{
    try{
        const id = req.params.id;
        const data = await productoTyCModel.findOne({
            where:{
                idProducto_TyC: id,
            },
    });
    if (!data){ 
        res.status(404).send({ error: "Producto TyC no encontrada"});    
    }else{
        res.status(200).send(data);
    }
    }catch(e){

    }
};
/**
 * crear una ProductoTyC
 * @param {*} req 
 * @param {*} res 
 */
const createProductoTyC = async(req,res) => {
    try{
        const { body } = req;
        if(!body){
            res.status(404).send("Parametros de creación Producto tyc vacios.");
        }
        else{
            const data = await productoTyCModel.create(body);
            res.status(200).send(data)
        }
    } catch(e){
        res.status(404).send({message:"No se pudo crear Producto tyc. "+e});
    }
};
/**
 * Modificar ProductoTyC
 * @param {*} req 
 * @param {*} res 
 */
const updateProductoTyC = async(req,res)=>{
    try{
        const id = req.params.id;
        const ProductoTyC = await ProductoTyCController.findOne({
            where: {
                idProducto_TyC: id,
            },
        });
        if (!ProductoTyC){
            return res.status(404).send({ error: "Producto TyC no encontrada." })

        }else{
            let { body } = req.params.body;
            ProductoTyC.idProducto = body.idProducto;
            ProductoTyC.idTyC = body.idTyC;       
            await ProductoTyC.save();
            res.status(200).send({
                message:"La Producto tyc ha sido modificada."
            });
        }
    }catch(e){
        res.status(404).send(e);
    }
};
/**
 * Borrar ProductoTyC
 * @param {*} req 
 * @param {*} res 
 */
const deleteProductoTyC = async(req,res)=>{
    try{
        const id = req.params.idProducto_TyC
        const ProductoTyC = await productoTyCModel.findOne({
            where:{
                idProducto_TyC: id,
            }
        });
        if (!ProductoTyC){
            return res.status(404).send({ error: "Producto TyC no encontrada." });
        }else{
            await ProductoTyC.destroy();
            res.send({message: 'Producto TyC eliminada correctamente'})
        }
    }catch(e){
        res.status(404).send(e)
    }
};

module.exports = {
    getProductoTyCs,
    getProductoTyC,
    createProductoTyC,
    updateProductoTyC,
    deleteProductoTyC,
}