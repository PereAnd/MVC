const express = require("express");
const router = express.Router();

const {
    getTransaccion,
    getTransacciones,
    createTransaccion
} = require("../controllers/TransaccionController");

router.get('/:id',getTransaccion);
router.get('/',getTransacciones);
router.post('/',createTransaccion);

module.exports = router;