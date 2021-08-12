"use strict";

const UserStorage = require("../../models/UserStorage");

const output =  {
    hello : (req,res) =>{
        res.render("home/index"); 
    },
    login : (req,res) =>{
        res.render("home/login");
    },
};
const process =  {
    login : (req,res) =>{
       const id = req.body.id,
       psword = req.body.psword;
       //const userStorage = new UserStorage();
       const users = UserStorage.getUsers("id","psword");

       const response = {};    
       if(users.id.includes(id)){
           const idx = users.id.indexOf(id);
           if(users.psword[idx] == psword){
               response.success = true;
               return res.json(response);
           }
       }
       response.success = false;
       response.msg = "로그인 실패";
       return res.json(response);
    },
};

module.exports = { // 모듈 내보내기
   output,
   process,
};

