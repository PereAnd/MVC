const { tycModel } = require("../models/indexModel");

const getTyCs = async (req, res) => {
    try{
        const data = await tycModel.findAll();
        if(data==null){
            res.status(404).send({
                message: "No se han encontrado TyC."
            });
        }else{
            res.status(200).send(data)
        }

    }catch(e){

    }
};

const getTyC = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await tycModel.findOne({
            where: {
            idTyC: id,
            },
        });
        if (!data){
             res.status(404).send({ error: "TyC no encontrada" });
        }else{
            res.status(200).send(data);
        }
    }catch(e){
        res.status(404).send(e);
    }
};

const createTyC = async (req, res) => {
    try{
        const { body } = req;
        if(!body){
            res.status(404).send("Parametros de creación tyc vacios.")
        }else{
            const data = await tycModel.create(body);
            res.status(200).send( data );
        }
    }catch(e){
        res.status(404).send({message:"No se pudo crear tyc."})
    }
};

const updateTyC = async (req, res) => {
    try{
        const id = req.params.id;
        const TyC = await tycModel.findOne({
    where: {
      idTyC: id,
    },
  });
  if (!TyC){
        res.status(404).send({ error: "TyC no encontrada" });
  }else{
    let { body } = req;
    TyC.nombreDoc = body.nombreDoc;
    TyC.archivo = body.archivo;
    TyC.aceptacionDoc = body.aceptacionDoc
    await TyC.save();
    res.status(200).send({
        message:"El tyc ha sido modificado."
    });
  }
    }catch(e){
        res.status(404).send(e);
    }
};

const deleteTyC = async (req, res) => {
    try{
        const id = req.params.idTyC;
        const TyC = await tycModel.findOne({
            where: {
                idTyC: id,
            },
        });
        if (!TyC){
            res.status(404).send({ error: "TyC no encontrado" });
        }else{
            await TyC.destroy();
            res.send({message: 'TyC eliminado correctamente'});
        }
    }catch(e){}
    };

module.exports = {
  getTyCs,
  getTyC,
  createTyC,
  updateTyC,
  deleteTyC,
};
