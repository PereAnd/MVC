const express = require("express");
const router = express.Router();
const {
    getTiposIden,
    getTipoIden,
    createTipoIden,
    updateTipoIden,
    deleteTipoIden,
} = require("../controllers/TipoIdentificacionController");

router.get('/', getTiposIden);
router.get('/:id', getTipoIden);
router.post('/', createTipoIden);
router.patch('/:id', updateTipoIden);
router.delete('/:id', deleteTipoIden);

module.exports = router;