const express = require("express");
const router = express.Router();
const {
    getErrores,
    getError,
} = require("../controllers/errorController");

router.get('/', getErrores);
router.get('/:id', getError);

module.exports = router;