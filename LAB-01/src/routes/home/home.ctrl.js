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

