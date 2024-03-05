const express = require("express");
const router = express.Router();
const {
    getCuentaTyCs,
    getCuentaTyC,
    createCuentaTyC,
    updateCuentaTyC,
    deleteCuentaTyC,
} = require("../controllers/cuentaTyCControler");

router.get('/', getCuentaTyCs);
router.get('/:id', getCuentaTyC);
router.post('/', createCuentaTyC);
router.patch('/:id', updateCuentaTyC);
router.delete('/:id', deleteCuentaTyC);

module.exports = router;