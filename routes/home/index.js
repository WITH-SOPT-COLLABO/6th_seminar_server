var express = require('express');
var router = express.Router();

// router.get('/', BlogController.readAll);
router.use('/articles', require('./articles'));
// router.use('/articles', require('./articles'));
// router.use('/articles', require('./articles'));
// router.use('/bands', require('./bands'));

module.exports = router;