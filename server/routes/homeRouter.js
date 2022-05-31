const express = require('express');
const router=express.Router()
const userController=require('../controllers/homeController')

router.get('/',userController.view)

router.post('/',userController.find)
router.get('/addUser',userController.form)
router.post('/addUser',userController.create)
router.get('/editUser/:id',userController.editUser)
router.post('/editUser/:id',userController.updateUser)

// router.get('', (req, res) => res.render(('home')))
// route

module.exports=router