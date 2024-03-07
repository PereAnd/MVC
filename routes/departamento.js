const express = require("express");
const router = express.Router();
const {
    getDepartamento,getDepartamentos,createDepartamento
} = require("../controllers/departamentoController");

router.get('/', getDepartamentos);
router.get('/:id',getDepartamento);
router.post('/',createDepartamento);

module.exports = router;