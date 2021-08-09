"use strict";

const users = {
    id : ["sample","샘플","셈플"],
    psword : ["1234","123123","12345"],
};

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

       if(users.id.includes(id)){
           const idx = users.id.indexOf(id);
           if(users.psword[idx] == psword){
               return res.json({
                   success : true,
               });
           }
       }

       return res.json({
           success : false,
           msg : "로그인 실패",
       });
    },
};

module.exports = { // 모듈 내보내기
   output,
   process,
};

