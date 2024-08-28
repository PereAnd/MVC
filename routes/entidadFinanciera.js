const express = require("express");
const router = express.Router();
const {
  getEntidadFinanciera,
  getEntidadesFinancieras,
  getEntidadFinancieraByName,
  createEntidadFinanciera,
  updateEntidadFinanciera,
  deleteEntidadFinanciera,
} = require("../controllers/entidadFinancieraController");

router.get('/', getEntidadesFinancieras);
router.get('/:id', getEntidadFinanciera);
router.get('/name/', getEntidadFinancieraByName);
router.post('/', createEntidadFinanciera);
router.patch('/:id', updateEntidadFinanciera);
router.delete('/:id', deleteEntidadFinanciera);

module.exports = router;