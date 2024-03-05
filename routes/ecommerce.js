const express = require("express");
const router = express.Router();
const {
  getEcommerces,
  getEcommerce,
  createEcommerce,
  updateEcommerce,
  deleteEcommerce,
} = require("../controllers/ecommerceController");

router.get("/", getEcommerces);
router.get("/:id", getEcommerce);
router.post("/", createEcommerce);
router.patch("/:id", updateEcommerce);
router.delete("/:id", deleteEcommerce);

module.exports = router;
