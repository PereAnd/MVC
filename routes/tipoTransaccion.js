const express = require("express");
const router = express.Router();

const {
    getTipoTransaccion,
    getTipoTransacciones,
    createTipoTransaccion,
    updateTipoTransaccion,
    deleteTipoTransaccion
} = require("../controllers/tipoTransaccionController");

router.get('/:id',getTipoTransaccion);
router.get('/',getTipoTransacciones);
router.post('/',createTipoTransaccion);
router.put('/:id',updateTipoTransaccion);
router.delete('/:id',deleteTipoTransaccion)

module.exports = router;