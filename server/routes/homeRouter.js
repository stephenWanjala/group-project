const express = require('express');
const router=express.Router()
const userController=require('../controllers/homeController')


router.get('/',userController.view)

router.post('/download', function (req, res, next) {
    var pdf = require('./../controllers/generatePdf').create();
    pdf.pipe(res);
    pdf.end();
 });

router.post('/login',userController.login)
// router.get('/login',userController.login)



module.exports=router