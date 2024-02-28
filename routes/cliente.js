const express = require("express");
const router = express.Router();

const {getCliente, getClientes, createCliente, updateCliente,deleteCliente} = require("../controllers/clienteController");
// se complementa con la url de app.js
router.get("/:id", getCliente);
router.get("/"),getClientes;
router.post("/",createCliente);
router.put("/:id",updateCliente);
router.delete("/:id",deleteCliente);


module.exports = router;
