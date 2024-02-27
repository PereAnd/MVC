const express = require("express");
const router = express.Router();
const {
  getEntidadFinanciera,
  getEntidadesFinancieras,
  createEntidadFinanciera,
  updateEntidadFinanciera,
  deleteEntidadFinanciera,
} = require("../controllers/entidadFinancieraController");

router.get('/', getEntidadesFinancieras);
router.get('/:id', getEntidadFinanciera);
router.post('/', createEntidadFinanciera);
router.put('/:id', updateEntidadFinanciera);
router.delete('/:id', deleteEntidadFinanciera);

module.exports = router;