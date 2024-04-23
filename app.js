require('dotenv').config()
const cors = require("cors")
const express = require("express");
const { dbConnectMySQL } = require("./config/mysql");
const  bodyParser = require('body-parser');


//const jwt = require('jsonwebtoken');
const app = express();
app.use(cors())
//linea de codigo que captura por medio de una expre json en body, datos
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json())
//linea que establece el puesto desde variables de entorno o coloca 3000
const port = process.env.PORT || 3000;

//invocacion de rutas

app.use("/api", require("./routes"));

app.listen(port, () =>
  console.log(`Tu server esta listo por el puerto ${port}`)
);
//invocacmos la funcion de conexión
dbConnectMySQL(); 


