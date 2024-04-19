const express = require("express");
const router = express.Router();

const {
  getTransaccion,
  getTransacciones,
  createTransaccion,
  getTransactionsByProductId,
} = require("../controllers/TransaccionController");

router.get("/:id", getTransaccion);
router.get("/", getTransacciones);
router.get("/product/:id", getTransactionsByProductId);
router.post("/", createTransaccion);

module.exports = router;
