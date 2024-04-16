const express = require("express");
const router = express.Router();

const {
    getTipoProducto,
    getTipoProductos,
    createTipoProducto,
    deleteTipoProducto
} = require("../controllers/tipoProductoController");

router.get('/:id',getTipoProducto);
router.get('/',getTipoProductos);
router.post('/',createTipoProducto);
router.delete('/:id',deleteTipoProducto)

module.exports = router;