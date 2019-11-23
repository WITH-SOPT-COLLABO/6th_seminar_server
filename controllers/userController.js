const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/util');
const User = require('../models/userModel');

module.exports = {
    signin: async (req, res) => {
        const {userId, password} = req.body;
        if( !userId || !password ) {
            res.status(statusCode.BAD_REQUEST)
            .send(util.successFalse(resMessage.NULL_VALUE));
        }
        User.signin({userId, password})
        .then(({code, json}) => res.status(code).send(json))
        .catch(err => {
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR)
            .send(util.successFalse(resMessage.INTERNAL_SERVER_ERROR));
        });
    }
}