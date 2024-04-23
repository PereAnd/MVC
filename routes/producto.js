const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");

const {
  getProducto,
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
  getProductsByUser,
} = require("../controllers/productoController");

router.get("/:id", authMiddleware, getProducto);
router.get("/", getProductos);
router.get("/user/:id", authMiddleware, getProductsByUser);
router.post("/", authMiddleware, createProducto);
router.patch("/:id", authMiddleware, updateProducto);
router.delete("/:id", authMiddleware, deleteProducto);

module.exports = router;
