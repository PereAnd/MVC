require('dotenv').config()
const cors = require("cors")
const express = require("express");
const { dbConnectMySQL } = require("./config/mysql");

//const jwt = require('jsonwebtoken');
const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Tu server esta listo por el puerto ${port}`)
);
//invocacmos la funcion de conexión
dbConnectMySQL(); 


