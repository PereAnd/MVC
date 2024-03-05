const express = require("express");
const router = express.Router();
const {
  getBilletera,
  getBilleteras,
  createBilletera,
  updateBilletera,
  deleteBilletera,
} = require("../controllers/billeteraController");

router.get('/', getBilleteras);
router.get('/:id', getBilletera);
router.post('/', createBilletera);
router.put('/:id', updateBilletera);
router.delete('/:id', deleteBilletera);

module.exports = router;