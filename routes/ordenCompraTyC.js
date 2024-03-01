const express = require("express");
const router = express.Router();
const {
   getOrdenCompra_TyC,
   getOrdenesCompra_TyC
} = require("../controllers/ordenCompra_X_TyCController");

router.get('/', getOrdenesCompra_TyC);
router.get('/:id', getOrdenCompra_TyC);

module.exports = router;