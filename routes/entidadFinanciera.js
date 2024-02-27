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
router.post('/', createEntidadFinanciera);

module.exports = router;