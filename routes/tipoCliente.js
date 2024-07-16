const express = require("express");
const router = express.Router();
const {
    getTipoPers,
    getTiposPers,
    createTipoPers,
    updateTipoPers,
    deleteTipoPers,
} = require("../controllers/tipoClienteController");

router.get('/', getTiposPers);
router.get('/:id', getTipoPers);
router.post('/', createTipoPers);
router.patch('/:id', updateTipoPers);
router.delete('/:id', deleteTipoPers);

module.exports = router;