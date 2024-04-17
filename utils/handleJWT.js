const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * firma token
 */
const tokenSign = async (cliente)=>{
    const sign = jwt.sign({
        idCliente: cliente.idCliente,
        idTipoIdentificacion: cliente.idTipoIdentificacion,
        numeroIdentificacion: cliente.numeroIdentificacion
    },
    JWT_SECRET,
    {
       expiresIn: "1h",
    });
    console.log("token creado ", sign);
    return sign;
};
/**
 * verificar token
 * se debe pasar el token de sesión
 */
const verityToken = async(tokenJWT)=>{
    try{
        return jwt.verify(tokenJWT, JWT_SECRET);
    }
    catch(e){
        return null;
    }
}

module.exports= {tokenSign,verityToken};