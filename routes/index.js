var express = require('express');
var router = express.Router();

router.use('/home', require('./home'));
router.use('/user', require('./user'));
router.use('/mypage', require('./mypage'));
router.use('/signup', require('./signup'));

module.exports = router;
