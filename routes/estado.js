const express = require("express");
const router = express.Router();

const {
    getEstado,
    getEstados,
    createEstado,
    updateEstado,
    deleteEstado
} = require("../controllers/estadoController");

router.get('/:id',getEstado);
router.get('/',getEstados);
router.post('/',createEstado);
router.patch('/:id',updateEstado);
router.delete('/:id',deleteEstado);

module.exports = router;