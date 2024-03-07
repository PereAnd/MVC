const express = require("express");
const router = express.Router();
const {
    getPais,getPaises,createPais
} = require("../controllers/paisController");

router.get('/', getPaises);
router.get('/:id',getPais);
router.post('/',createPais);

module.exports = router;