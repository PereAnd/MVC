const express = require("express");
const fs = require("fs");
const { dirname } = require("path");
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExtension = (fileName)=>{
    return fileName.split('.').shift();
}
//lea el directorio de manera asyncrona
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)
    if(name != 'index'){
        console.log(`Cargando ruta ${name}`);
        router.use(`/${name}`,require(`./${file}`));
    }
});

// se complementa con la url de app.js
router.get("/cliente", (req, res)=>{
    const data = ["hola", "mundo"]
    res.send({data})
});
/*
router.post("/cliente", (req, res)=>{
    const data =  req
    res.send({data})
});*/

module.exports = router;