"use strict";

//DOM js에서 html에 존재하는 것들을 가져와서 존재하도록 해주는 모델
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){ // login button 클릭시 이벤트 
    const req = {
       id : id.value,
       psword : psword.value,
    };

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/"; //로그인 성공 시 루트경로로 이동
            }
            else{
                alert(res.msg);
            }
        })
        .catch((err) =>{
            console.error(new Error("로그인 중 에러 발생"));
        });
}