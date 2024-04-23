const express = require("express");
const router = express.Router();
const {validatorRegisterBilleteraItem} = require("../validators/validators");
const authMiddleware = require("../middleware/session");
const {
  getBilletera,
  getBilleteras,
  createBilletera,
  updateBilletera,
  deleteBilletera
} = require("../controllers/billeteraController");

router.get('/', getBilleteras);
router.get('/:id',authMiddleware, getBilletera);
router.post('/', validatorRegisterBilleteraItem,createBilletera);
router.patch('/:id', authMiddleware, updateBilletera);//en caso de password validamos token
router.delete('/:id', deleteBilletera);

module.exports = router;