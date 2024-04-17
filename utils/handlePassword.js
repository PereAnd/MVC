const bcryptjs = require("bcryptjs");
/**
 * password sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async(passwordPlain)=>{
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash;
};

/**
 * pasar contrasena sin encriptar y contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async(passwordPlain, hashPassword)=>{
    console.log("valores a compa ", passwordPlain+" "+hashPassword)
    return await bcryptjs.compare(passwordPlain,hashPassword);
};
module.exports={encrypt, compare}
