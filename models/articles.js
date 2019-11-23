const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/util');

const articleArray = [{
    title: '해외 패션 인플루언서처럼 힙하게 니트 코디하려면 어떡할까요',
    time: '10분 전'
},
{
    title: '포드 신형 익스플로러 리뷰',
    time: '10분 전'
},
{
    title: '머리 아플 때 두통약 자주 먹어도 괜찮을까?',
    time: '10분 전'
},
{
    title: '똑같은 가방말고! 아는 사람만 안다는 특별한 가방',
    time: '10분 전'
}]

const article = {
    read: () => {
        return new Promise((resolve, reject) => {
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(statusCode.OK, responseMessage.ARTICLE_READ_SUCCESS, articleArray)
            });
        });
    }
}

module.exports = article;