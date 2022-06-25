const express = require('express');
const router=express.Router()
const userController=require('../controllers/homeController')


router.get('/',userController.view)

router.get('/download',userController.generateDownloadTimeTable)


router.get('/login',userController.login)



module.exports=router