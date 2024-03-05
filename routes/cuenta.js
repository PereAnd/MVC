const express = require("express");
const router = express.Router();

const {
  getCuenta,
  getCuentas,
  createCuenta,
  updateCuenta,
  deleteCuenta,
} = require("../controllers/cuentaController");


router.get('/:id',getCuenta);
router.get('/',getCuentas);
router.post('/',createCuenta);
router.patch('/:id',updateCuenta);
router.delete('/:id',deleteCuenta);


module.exports = router;
