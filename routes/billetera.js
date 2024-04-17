const express = require("express");
const router = express.Router();
const {validatorRegisterBilleteraItem} = require("../validators/validators");
const {
  getBilletera,
  getBilleteras,
  createBilletera,
  updateBilletera,
  deleteBilletera,
  registrarBilletera,
} = require("../controllers/billeteraController");

router.get('/', getBilleteras);
router.get('/:id', getBilletera);
//router.post('/', validatorRegisterBilleteraItem,createBilletera);
router.post('/', validatorRegisterBilleteraItem,registrarBilletera);
router.patch('/:id', updateBilletera);
router.delete('/:id', deleteBilletera);

module.exports = router;