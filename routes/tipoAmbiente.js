const express = require("express");
const router = express.Router();
const {
    getTipoAmbientes,
    getTipoAmbiente,
    createTipoAmbiente,
    updateTipoAmbiente,
    deleteTipoAmbiente,
} = require("../controllers/tipoAmbienteControler");

router.get('/', getTipoAmbientes);
router.get('/:id', getTipoAmbiente);
router.post('/', createTipoAmbiente);
router.put('/:id', updateTipoAmbiente);
router.delete('/:id', deleteTipoAmbiente);

module.exports = router;