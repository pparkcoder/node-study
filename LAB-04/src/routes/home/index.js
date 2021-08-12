"use strict";

const express =require("express");
const router = express.Router();

// 컨트롤러 사용 후
const ctrl = require("./home.ctrl"); // home.ctrl.js 파일 받아오기
router.get("/",ctrl.output.hello);
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);
module.exports = router; // router를 외부에서 사용 가능