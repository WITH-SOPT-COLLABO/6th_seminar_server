const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/authUtil');

const bands = [{
    picture: '',
    title: '따즈아 요리초보 요리사만들기'
},
{
    picture: '',
    title: '오경사의 정원학교'
},
{
    picture: '',
    title: '직장 다니는 여행가',
},
{
    picture: '',
    title: '고알레'
}]

const bands = {
    read: (idx) => {
        return new Promise((resolve, reject) => {
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.BAND_READ_SUCCESS)
            });
        });
    }
}

module.exports = bands;