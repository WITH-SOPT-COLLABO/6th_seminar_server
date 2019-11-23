const express = require('express');
const router = express.Router();

const Band = require('../../models/bands');

router.get('/', (req, res) => {
    Band.read().then(({code, json}) => {
        res.status(code).send(json);
    })
    .catch((err) => {
        console.log(`err: ${err}`);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
})

module.exports = router;