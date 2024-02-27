const express = require("express");
const router = express.Router();
const {getClientes, createCliente, updateCliente} = require("../controllers/clienteController");
// se complementa con la url de app.js
router.get("/", getClientes);
router.post("/",createCliente);
router.put("/",updateCliente);

module.exports = router;