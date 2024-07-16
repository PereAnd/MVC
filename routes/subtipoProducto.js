const express = require("express");
const router = express.Router();
const {
    getSubtipoProd,
    getSubtiposProds,
    createSubtipoProd,
    updateSubtipoProd,
    deleteSubtipoProd,
} = require("../controllers/subtipoProductoController");

router.get('/', getSubtiposProds);
router.get('/:id', getSubtipoProd);
router.post('/', createSubtipoProd);
// router.patch('/:id', updateSubtipoProd);
router.delete('/:id', deleteSubtipoProd);

module.exports = router;