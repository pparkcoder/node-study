"use strict";

// express로 서버 띄우기, 모듈 사용
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // 다운시 npm install express -s (or --save) 


// 라우팅
const home = require("./src/routes/home"); // 해당 경로에서 use의 첫번째 param에 맞는 경로를 찾아 실행


// 뷰 사용 후 앱 셋팅
app.set("views","./src/views"); // views를 관리할 폴더이름은 두번째 parm
app.set("view engine","ejs"); // views 폴더에서 사용될 엔진
app.use(express.static(`${__dirname}/src/public`)); // 정적 경로 추가 -> public 사용을 위함
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); // url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
                                                   // 제대로 인식되지 않는 문제 해결
app.use("/",home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app; // bin 에서 사용가능 하도록 내보내기
