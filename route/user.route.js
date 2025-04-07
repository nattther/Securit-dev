const express = require('express');
const router = express.Router();
const userController = require("./../controller/user.controller.js")


router.get('/',userController.getAll);
router.get('/:id', userController.getById);
router.post('/createUser',userController.create);


module.exports = router;