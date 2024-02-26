const {sequilize} = require("../../config/mysql");
const {DataTypes} = require("sequilize");

const Cuenta = sequilize.define(
    "M_Cuenta",{
        usuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numeroCuenta:{
            type: DataTypes.STRING,
            allowNull: false
        },
        entidadFinanciera:{
            type: DataTypes.ENUM,
            allowNull: false
        },
        token:{
            type: DataTypes.ENUM,
        },
        estadoCuenta:{
            type: DataTypes.ENUM(["habilitada","deshabilitada"])
        },
        cliente:{
            type: DataTypes.ENUM,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
);

function obtenerCuenta (nCuenta){
    //falta llamar objeto persistencia y pasarle el query
    let query = "SELECT * FROM M_Cuenta c WHERE c.numeroCuenta =="+nCuenta+"";
    return query;
}
    
function crearCuenta(usu, pass, nCuenta, eCuenta){
    const sql = `INSERT INTO M_Cuenta (idCuenta, usuario, password, numeroCuenta, estadoCuenta) VALUES (${null}, "${usu}","${pass}","${nCuenta}","${eCuenta}")`;
    database.conectar.query(sql, function(err, result, filed){
        if(err)throw err
        console.log(result);
    });
}

   // export {obtenerCuenta,crearCuenta}
module.exports = Cuenta;