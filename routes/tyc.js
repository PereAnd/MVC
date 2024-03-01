const express = require("express");
const router = express.Router();
const {
    getTyCs,
    getTyC,
    createTyC,
    updateTyC,
    deleteTyC,
} = require("../controllers/TyCController");

router.get('/', getTyCs);
router.get('/:id', getTyC);
router.post('/', createTyC);
router.put('/:id', updateTyC);
router.delete('/:id', deleteTyC);

module.exports = router;