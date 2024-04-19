const express = require("express");
const router = express.Router();

const {
  getTransaccion,
  getTransacciones,
  createTransaccion,
  getTransactionsByProductId,
  getTransaccionesByClientId
} = require("../controllers/TransaccionController");

router.get("/:id", getTransaccion);
router.get("/", getTransacciones);
router.get("/product/:id", getTransactionsByProductId);
router.get("/client/:id", getTransaccionesByClientId);
router.post("/", createTransaccion);

module.exports = router;
