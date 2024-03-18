const express = require("express");
const router = express.Router();

const {
    getAnexo,
    getAnexos,
    createAnexos
} = require("../controllers/anexosController");

router.get('/:id',getAnexo);
router.get('/',getAnexos);
router.post('/',createAnexos);

module.exports = router;