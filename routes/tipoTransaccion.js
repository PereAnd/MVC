const express = require("express");
const router = express.Router();

const {
    getTipoTransaccion,
    getTipoTransacciones,
    createTipoTransaccion
} = require("../controllers/tipoTransaccionController");

router.get('/:id',getTipoTransaccion);
router.get('/',getTipoTransacciones);
router.post('/',createTipoTransaccion);

module.exports = router;