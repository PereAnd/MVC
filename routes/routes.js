let router = require('express').Router();
//user Controller
let uCont = require('../../app/controllers/usersController');

router.get('/',function (req,res){
    res.json({
        status: true,
        message: 'Bienvenido a la v1 de CBITBank'
    });
});

router.get('/getAll/:status',(req,res)=>uCont.getAll(req,res));

module.exports = router;