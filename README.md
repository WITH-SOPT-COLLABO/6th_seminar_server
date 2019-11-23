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
    "status": "게시물 조회 성공",
    "success": true,
    "message": [
        {
            title: '해외 패션 인플루언서처럼 힙하게 니트 코디하려면 어떡할까요',
            time: '10분 전'
        }
    ]
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
    "status": "게시물 조회 성공",
    "success": true,
    "message": [
        {
             picture: 'http:~',
             title: '따즈아 요리초보 요리사만들기'
        }
    ]
}
```

---
