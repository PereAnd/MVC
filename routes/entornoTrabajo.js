const express = require("express");
const router = express.Router();
const {
    getEntornosTrabajo,
    getEntornoTrabajo,
    createEntornoTrabajo,
    updateEntornoTrabajo,
    deleteEntornoTrabajo,
} = require("../controllers/entornoTrabajoControler");

router.get('/', getEntornosTrabajo);
router.get('/:id', getEntornoTrabajo);
router.post('/', createEntornoTrabajo);
router.patch('/:id', updateEntornoTrabajo);
router.delete('/:id', deleteEntornoTrabajo);

module.exports = router;