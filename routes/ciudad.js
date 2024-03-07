const express = require("express");
const router = express.Router();
const {
    getCiudad,getCiudades,createCiudad
} = require("../controllers/ciudadController");

router.get('/', getCiudades);
router.get('/:id',getCiudad);
router.post('/',createCiudad);

module.exports = router;