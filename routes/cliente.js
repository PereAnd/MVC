const express = require("express");
const router = express.Router();
const {validatorRegisterClienteItem} = require("../validators/validators");
const {
  getCliente,
  getClientes,
  obtenerCliente,
  createCliente,
  updateCliente,
  deleteCliente,
  registrarCliente
} = require("../controllers/clienteController");

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/find', obtenerCliente)
router.post('/', validatorRegisterClienteItem, registrarCliente);
//router.post('/', validatorRegisterClienteItem, createCliente);
router.patch('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;