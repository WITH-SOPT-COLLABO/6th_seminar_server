const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/util');

const bandArray = [{
    picture: 'https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_01.jpg',
    title: '따즈아 요리초보 요리사만들기'
},
{
    picture: 'https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_02.jpg',
    title: '오경사의 정원학교'
},
{
    picture: 'https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_03.jpg',
    title: '직장 다니는 여행가',
},
{
    picture: 'https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_04.jpg',
    title: '고알레'
}]

const bands = {
    read: () => {
        return new Promise((resolve, reject) => {
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(statusCOde.OK, responseMessage.BAND_READ_SUCCESS, bandArray)
            });
        });
    }
}

module.exports = bands;