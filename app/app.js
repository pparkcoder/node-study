"use strict";

// express로 서버 띄우기, 모듈 사용
const express = require("express");
const app = express(); // 다운시 npm install express -s (or --save) 


// 라우팅
const home = require("./src/routes/home"); // 해당 경로에서 use의 첫번째 param에 맞는 경로를 찾아 실행


// 뷰 사용 후 앱 셋팅
app.set("views","./src/views"); // views를 관리할 폴더이름은 두번째 parm
app.set("view engine","ejs"); // views 폴더에서 사용될 엔진
app.use(express.static(`${__dirname}/src/public`))
app.use("/",home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app; // bin 에서 사용가능 하도록 내보내기
