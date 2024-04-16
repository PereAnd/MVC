const express = require("express");
const router = express.Router();

const {
  getProducto,
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto
} = require("../controllers/productoController");


router.get('/:id',getProducto);
router.get('/',getProductos);
router.post('/',createProducto);
router.patch('/:id',updateProducto);
router.delete('/:id',deleteProducto);

module.exports = router;
