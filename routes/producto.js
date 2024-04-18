const express = require("express");
const router = express.Router();

const {
  getProducto,
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  getProductsByUser,
} = require("../controllers/productoController");

router.get("/:id", getProducto);
router.get("/", getProductos);
router.get("/user/:id", getProductsByUser);
router.post("/", createProducto);
router.patch("/:id", updateProducto);
router.delete("/:id", deleteProducto);

module.exports = router;
