const express = require("express");
const router = express.Router();
const {
    getErrores,
    getError,
    createError
} = require("../controllers/errorController");

router.get('/', getErrores);
router.get('/:id', getError);
router.post('/', createError);

module.exports = router;