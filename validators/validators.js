const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validatorRegisterClienteItem = [
    check("primerNombre").notEmpty().exists(),
    check("segundoNombre").notEmpty().exists(),
    check("primerApellido").notEmpty().exists(),
    check("segundoApellido").notEmpty().exists(),
    check("numeroIdentificacion").notEmpty().exists().isLength({min:5, max:10}),
    check("idTipoIdentificacion").notEmpty().exists().isNumeric(),
    check("telefono").notEmpty().exists(),
    check("email").notEmpty().exists(),
    check("direccion").notEmpty().exists(),
    check("fechaNacimiento").notEmpty().exists(),
    check("fechaExpedicion").notEmpty().exists(),
    check("ciudadExpedicion").notEmpty().exists().isNumeric(),
    (req,res,next)=>{
        return validateResult(req,res,next);
    }
]

const validatorRegisterBilleteraItem = [
    check("password").exists().notEmpty().isLength({min:8, max:99}),
    (req,res,next)=>{
        return validateResult(req,res,next);
    }
]

const validatorRegisterSelfieItem = [
    check("fotoCliente").exists().notEmpty(),
    (req,res,next)=>{
        return validateResult(req,res,next);
    }
]

const validatorRegisterFromDocItem = [
    check("frenteDocIdentidad").exists().notEmpty(),
    (req,res,next)=>{
        return validateResult(req,res,next);
    }
]
const validatorRegisterBackDocItem = [
    check("respaldoDocIdentidad").exists().notEmpty(),
    (req,res,next)=>{
        return validateResult(req,res,next);
    }
]

const validatorLoginItem =[
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:8, max:99}),
    check("idTipoIdentificacion")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("numeroIdentificacion")
    .exists()
    .notEmpty(),
    (req,res,next)=>{
        return validateResult(req, res,next)
    }
]

module.exports = { validatorLoginItem, validatorRegisterBilleteraItem, validatorRegisterClienteItem, validatorRegisterSelfieItem,validatorRegisterBackDocItem,validatorRegisterFromDocItem };