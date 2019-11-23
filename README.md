# TEAM5 
## BASE URL : http://18.190.120.107
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

## **[POST] ~/blogs/**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogName|String   |게시물 제목|
|owner|Int   |게시물 주인의 Idx|

```
{
	"blogName" : "나의 블로그",
	"owner" : "24"
}
```

### Response - body
##### SUCCESS
```
{
    "status": "블로그 작성 성공",
    "success": true
}
```


---
## **[PUT] ~/blogs/{blogIdx}**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Request - Body

| 변수 | 타입 | 설명 |
|:-------:|:-------:|:-------:|
|blogName|String  |바꿀 블로그 이름|

```
{
	"blogName" : "나의 블로그!@#!@#!@"
}
```

### Response - body
##### SUCCESS
```
{
    "status": "블로그 수정 성공",
    "success": true
}
```

---

## **[DELETE] ~/blogs/{blogIdx}**
### Request - Header
| 메소드 | 파라미터 |
|:-------|:----------|
|Content-Type|application/json|

### Response - body
##### SUCCESS
```
{
    "status": "블로그 삭제 성공",
    "success": true
}
```

---