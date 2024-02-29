const express = require("express");
const router = express.Router;

const {
    getCuenta,
    getCuentas,
    createCuenta,
    updateCuenta,
    deleteCuenta
} = require("../controllers/CuentaController");

router.get('/',getCuenta);
router.get('/:id',getCuentas);
router.post('/',createCuenta);
router.put('/:id',updateCuenta);
router.delete('/:id',deleteCuenta);

module.exports = router;