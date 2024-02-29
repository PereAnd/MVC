const express = require("express");
const router = express.Router();

const {
    getOrdenCompra,
    getOrdenesCompras,
    createOrdenCompra,
    updateOrdenCompra,
    deleteOrdenCompra
} = require("../controllers/OrdenCompraController");

router.get('/',getOrdenCompra);
router.get('/:id',getOrdenesCompras);
router.post('/',createOrdenCompra);
router.put('/:id',updateOrdenCompra);
router.delete('/:id',deleteOrdenCompra);

module.exports = router;