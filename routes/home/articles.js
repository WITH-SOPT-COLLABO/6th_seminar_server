const express = require('express');
const router = express.Router();

const statusCode = require('../../module/utils/statusCode');
const responseMessage = require('../../module/utils/responseMessage');
const authUtil = require('../../module/utils/util');
const Articles = require('../../models/articles');

router.get('/', (req, res) => {
    Articles.read().then(({code, json}) => {
        res.status(code).send(json);
    }).catch((err) => {
        console.log(`err: ${err}`);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
})

module.exports = router;