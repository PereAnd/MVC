const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const {
    getAnexo,
    getAnexos,
    createAnexos,
    updateAnexos
} = require("../controllers/anexosController");

router.get('/:id', authMiddleware, getAnexo);
router.get('/', getAnexos);
router.post('/', authMiddleware, createAnexos);
router.patch('/:id', authMiddleware, updateAnexos);
module.exports = router;