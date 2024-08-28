const { clienteModel } = require("../models/indexModel");
const {verityToken} = require("../utils/handleJWT")

const authMiddleware = async(req, res, next)=>{
    try{
        console.log("authorizacion ",req.headers.authorization);
        if(!req.headers.authorization || req.headers.authorization == null){
            res.status(401).send("Necesitas un token de sesión!!!");
        }else{
            const token= req.headers.authorization.split(' ').pop();
            const dataToken = await verityToken(token);
            if(!dataToken.idCliente){
                res.status(401).send("error id Token!!!");
            }else{
                const cliente = await clienteModel.findOne({
                    where: {
                      idCliente: dataToken.idCliente,
                    },
                  });
                //añadimos a la petición la data del cliente.
                req.cliente = cliente;
                next();
            }
        }
    }catch( error){
        res.status(401).send(error);
    }
}
module.exports = authMiddleware