const express = require("express");
const router = express.Router();
const {
  getCliente,
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente
} = require("../controllers/clienteController");

router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;