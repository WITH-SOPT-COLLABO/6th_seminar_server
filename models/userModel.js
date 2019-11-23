const statusCode = require('../module/utils/statusCode');
const resMessage = require('../module/utils/responseMessage');
const util = require('../module/utils/util');

const users = {
    signin: async ({userId, password}) => {
        // 대충 DB랑 연결하는 과정
        const jwt = {
            "jwt" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImduZ3NuIiwibmFtZSI6IuuwleqyveyEoCJ9.3GxjfeyyEPK1mHuskJOpjK7ZESOlYQYBi_5cE-4mgz0"
        };
        return {
            code: statusCode.OK,
            json: util.successTrue(statusCode.OK, resMessage.SIGN_IN_SUCCESS,jwt)
        };
    }
}

module.exports = users;