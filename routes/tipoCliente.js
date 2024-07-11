const express = require("express");
const router = express.Router();
const {
    getTipoPers,
    getTiposPers,
    createTipoPers,
    updateTipoPers,
    deleteTipoPers,
} = require("../controllers/tipoClienteController");

router.get('/', getTipoPers);
router.get('/:id', getTiposPers);
router.post('/', createTipoPers);
router.patch('/:id', updateTipoPers);
router.delete('/:id', deleteTipoPers);

module.exports = router;