const express = require("express");
const router = express.Router();
const {validatorLoginItem} = require("../validators/validators");
const { loginCtrl } = require("../controllers/billeteraController");

router.post('/',validatorLoginItem, loginCtrl);

module.exports = router;