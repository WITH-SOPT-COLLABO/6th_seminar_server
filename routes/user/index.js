var express = require('express');
var router = express.Router();
var UserController = require('../../controllers/userController');

// router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;