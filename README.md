# TEAM5 
## BASE URL : http://18.190.120.107

## **[POST] ~/user/signin**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Request - Body
| 변수 | 타입 | 설명 |
|:----------|:----------|:-----------|
| userId | String | 회원의 아이디 |
| password | String | 회원의 비민번호 |

### Response - body
##### SUCCESS
```
{
    "status": 200,
    "success": true,
    "message": "로그인 성공",
    "data": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImduZ3NuIiwibmFtZSI6IuuwleqyveyEoCJ9.3GxjfeyyEPK1mHuskJOpjK7ZESOlYQYBi_5cE-4mgz0"
    }
}
```


## **[GET] ~/articles**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Response - body
##### SUCCESS
```
{
    "status": 200,
    "success": true,
    "message": "게시글 조회 성공",
    "data": [
        {
            "title": "해외 패션 인플루언서처럼 힙하게 니트 코디하려면 어떡할까요",
            "time": "10분 전"
        },
        {
            "title": "포드 신형 익스플로러 리뷰",
            "time": "10분 전"
        },
        {
            "title": "머리 아플 때 두통약 자주 먹어도 괜찮을까?",
            "time": "10분 전"
        },
        {
            "title": "똑같은 가방말고! 아는 사람만 안다는 특별한 가방",
            "time": "10분 전"
        }
    ]
}
```
##### FAIL
```
{
    "status": "서버 내부 오류",
    "success": false
}
```

---
## **[GET] ~/bands**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Response - body
##### SUCCESS
```
{
    "status": 200,
    "success": true,
    "message": "게시물 조회 성공",
    "data": [
        {
            "picture": "https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_01.jpg",
            "title": "따즈아 요리초보 요리사만들기"
        },
        {
            "picture": "https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_02.jpg",
            "title": "오경사의 정원학교"
        },
        {
            "picture": "https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_03.jpg",
            "title": "직장 다니는 여행가"
        },
        {
            "picture": "https://with-sopt-server25.s3.ap-northeast-2.amazonaws.com/20191123_160601207_04.jpg",
            "title": "고알레"
        }
    ]
}
```
##### FAIL
```
{
    "status": "서버 내부 오류",
    "success": false
}
```

---
