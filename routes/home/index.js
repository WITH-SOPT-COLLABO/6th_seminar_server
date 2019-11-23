var express = require('express');
var router = express.Router();

router.use('/articles', require('./articles'));
router.use('/bands', require('./bands'));

module.exports = router;