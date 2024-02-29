const express = require("express");
const router = express.Router();

const {
    getEstado,
    getEstados,
    createEstado,
    updateEstado,
    deleteEstado
} = require("../controllers/estadoController");

router.get('/',getEstado);
router.get('/:id',getEstados);
router.post('/',createEstado);
router.put('/:id',updateEstado);
router.delete('/:id',deleteEstado);

module.exports = router;