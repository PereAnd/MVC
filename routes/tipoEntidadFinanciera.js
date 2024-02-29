const express = require("express");
const router = express.Router();
const {
  getTipoEntidadF,
  getTipoEntidadesF,
  createTipoEntidadF,
  updateTipoEntidadF,
  deleteTipoEntidadF
} = require("../controllers/tipoEntidadFController");

router.get('/', getTipoEntidadesF);
router.get('/:id', getTipoEntidadF);
router.post('/', createTipoEntidadF);
router.put('/:id', updateTipoEntidadF);
router.delete('/:id', deleteTipoEntidadF);

module.exports = router;