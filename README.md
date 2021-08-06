# node.js 에서 필요한 모듈 설치
- npm install '필요한 모듈' -s (or --save)
<br><br>
# http 모듈
- http란, Hypertext Transfer Protocol의 약자로 인터넷에서 웹 서버와 웹 사용자(인터넷 브라우저) 사이에 문서를 전송하기 위해 사용되는 통신 규약을 말함
- http 모듈은 server객체, request 객체, response객체를 사용

### server 객체
- http 모듈의 createServer() 메소드를 사용하여 server 객체를 생성
- **서버를 실행 시키는listen() 과 서버를 종료 시키는 close()** method를 사용

### request 객체
- 클라이언트가 서버에게 전달하는 메세지 or 정보를 담는 객체
- method : 클라이언트 요청 방식으로 **GET, POST**가 있음
- url : 클라이언트가 요청한 URL을 나타냄 -> parsing에 사용 가능

### response 객체
- 서버에서 클라이언트로 응답 메세지 or 정보를 전송시켜주는 객체
- **응답 헤더를 작성하는 writeHead() 와 응답 본문을 작성하는 end()** method 등을 사용

### http 응답 코드
- 200 : 클라이언트의 요청에 서버가 성공적으로 응답함
- 201 : PUT 메소드에 의해 서버에 성공적으로 데이터가 업데이트 됨
- 401 : 인증이 필요한 페이지를 요청함
- 403 : 관리자에 의해 페이지 접근이 금지됨
- 404 : 요청한 페이지를 찾을 수가 없음
- 406 : 클라이언트가 지정한 URI는 존재하지만 클라이언트가 원하는 형식이 아님<br>

=> **200 은 성공적인 경우, 404는 존재하지 않는 경우** 정도만 알기
<br><br>

# express 모듈
- http 모듈과 마찬가지로 서버 모듈
- **http 모듈만 사용하여 웹 서버를 개발 시 많은 코드가 필요**. 이러한 문제를 해결하기 위해 만들어진 모듈
```js
// http 모듈 사용 시
const http = require("http")
const app = http.createServer((req,res) => {
res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"}); // 한글 encoding
...

// express 모듈 사용 시
const express = require("express");
const app = express();
...
```
- **사용자 정보를 전달 받는 get(), 서버 설정을 위한 속성을 지정하는 set(), 클라이언트에게 응답 데이터를 보내는 send()** method 등을 사용
<br><br>
# MVC 패턴
- Model, View, Controller의 약자로서 하나의 애플리케이션, 프로젝트를 구성할 때 그 구성요소를 세가지의 역할로 구분한 패턴
![1](https://user-images.githubusercontent.com/84856055/128447286-8ba8d72f-76c1-439c-bec1-9cc5ee000a3f.JPG)
<br><br>
### Model
- 데이터 관련 로직 담당
- 데이터베이스 연동, 상수, 변수 등을 뜻함
- 정보들의 가공을 책임 짐
- Controller와 상호작용
- View를 직접 업데이트 가능<br>
### View
- input, 체크박스 등 (사용자가 보는 화면)UI를 나타냄
- Controller와 상호작용(동적 데이터를 전달 받음)
- Template Engines(pug, **ejs**, jinja 등)<br><br>
#### app.js
```js
// ejs 사용 전
app.get("/", (req,res) =>{ // root 경로를 설정해 주지 않으면 빙빙 돈다
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        여기는 루트입니다.
    </body>
    </html>`
    );
});

// ejs 사용 후
app.set("views","./views"); // views를 관리할 폴더이름은 두번째 파라미터
app.set("view engine","ejs"); // views 폴더에서 사용될 엔진

// 라우팅 사용 전
app.get("/",(req,res) =>{
    res.render("home/index"); // render(연결할 파일 이름 적기)
});
app.get("/login",(req,res) =>{
    res.render("home/login");
});

// 라우팅 사용 후
const home = require("./routes/home"); // 해당 경로에서 use의 첫번째 param에 맞는 경로를 찾아 실행
app.use("/",home); // use -> 미들웨어를 등록해주는 메서드, home이라고 하면 index.js 파일을 읽음
```
<br><br>
#### view/home/index.ejs
```js

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    여기는 루트입니다.
</body>
</html>
```
<br><br>
#### view/home/login.ejs
```js

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" placeholder = "아이디"><br>
    <input type="text" placeholder = "비밀번호"><br>
    <button>로그인</button>
</body>
</html>
```
<br><br>
### Controller
- 사용자의 요청(이벤트 등)을 처리함
- View 또는 url로 부터 입력값을 받음
- Model로부터 데이터를 받음
- 데이터를 View로 전달
<br><br>
#### routes/home/index.js
```js
"use strict";

const express =require("express");
const router = express.Router();

//컨트롤러 사용 전
router.get("/",(req,res) =>{
    res.render("home/index"); // renter(연결할 파일 이름 적기)
});
router.get("/login",(req,res) =>{
    res.render("home/login");
});

// 컨트롤러 사용 후
const ctrl = require("./home.ctrl"); // home.ctrl.js 파일 받아오기
router.get("/",ctrl.hello);
router.get("/login",ctrl.login);

module.exports = router; // router를 외부에서 사용 가능
```
<br><br>
#### routes/home/home.ctrl.js
```js
"use strict";

const hello = (req,res) =>{
    res.render("home/index"); 
};
const login = (req,res) =>{
    res.render("home/login");
};

module.exports = { // 모듈 내보내기
    hello, // key : value -> value 값을 넣어주지 않으면
    login, // key : value -> key 와 동일한 값이 들어감
};
```

