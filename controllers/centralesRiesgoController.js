const {clienteModel} =  require("..//models/clienteModel");

const validarUserDataCredito = async(req, res)=>{
  const body = {
      numeroIdentificacion: body.numeroIdentificacion,
      idTipoIdentificacion: body.tipoIdentificacion
  }
  if(!cliente){
    res.status(404).send({ error: "Cliente no encontrado" });
  } 
  else{
    
  }
    
}

module.exports = {
    validarUserDataCredito
};