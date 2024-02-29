const express = require("express");
const router = express.Router();

const {
    getTransaccion,
    getTransacciones,
    createTransaccion
} = require("../controllers/TransaccionController");

router.get('/',getTransaccion);
router.get('/:id',getTransacciones);
router.post('/',createTransaccion);

module.exports = router;