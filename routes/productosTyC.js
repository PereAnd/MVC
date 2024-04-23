const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const {
    getProductoTyCs,
    getProductoTyC,
    createProductoTyC,
    updateProductoTyC,
    deleteProductoTyC,
} = require("../controllers/productoTyCController");

router.get('/', getProductoTyCs);
router.get('/:id', authMiddleware, getProductoTyC);//validar en caso de firma tyc se requiera token
router.post('/', createProductoTyC);
router.patch('/:id', updateProductoTyC);
router.delete('/:id', deleteProductoTyC);

module.exports = router;