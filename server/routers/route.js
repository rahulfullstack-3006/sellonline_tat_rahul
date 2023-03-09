var express=require('express');
var router=express.Router();

const controller=require('../controllers/loginController');
const modelLogin=require('../models/loginModel')
router.post('/register',controller.registerController)
// router.post('/register',modelLogin.registerModel)
router.post('/login',controller.loginController);


module.exports=router;

