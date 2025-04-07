const express = require('express');
const router = express.Router();
const userController = require('./../controller/auth.controller.js');

router.post('/login', userController.login);

module.exports = router;