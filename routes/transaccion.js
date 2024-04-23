const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");

const {
  getTransaccion,
  getTransacciones,
  createTransaccion,
  getTransactionsByProductId,
  getTransaccionesByClientId
} = require("../controllers/TransaccionController");

router.get("/:id", authMiddleware, getTransaccion);
router.get("/", getTransacciones);
router.get("/product/:id", authMiddleware, getTransactionsByProductId);
router.get("/client/:id", authMiddleware, getTransaccionesByClientId);
router.post("/", createTransaccion);

module.exports = router;
