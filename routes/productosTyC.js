const express = require("express");
const router = express.Router();
const {
    getProductoTyCs,
    getProductoTyC,
    createProductoTyC,
    updateProductoTyC,
    deleteProductoTyC,
} = require("../controllers/productoTyCController");

router.get('/', getProductoTyCs);
router.get('/:id', getProductoTyC);
router.post('/', createProductoTyC);
router.patch('/:id', updateProductoTyC);
router.delete('/:id', deleteProductoTyC);

module.exports = router;