const express = require("express");
const router = express.Router();
const {
  getEntidadFinanciera,
  getEntidadesFinancieras,
  createEntidadFinanciera,
  updateEntidadFinanciera,
  deleteEntidadFinanciera,
  getEntidadFinancieraByName,
} = require("../controllers/entidadFinancieraController");

router.post('/find', getEntidadFinancieraByName);  // Rutas específicas primero
router.get('/', getEntidadesFinancieras);
router.get('/:id', getEntidadFinanciera);
router.post('/', createEntidadFinanciera);
router.patch('/:id', updateEntidadFinanciera);
router.delete('/:id', deleteEntidadFinanciera);

module.exports = router;