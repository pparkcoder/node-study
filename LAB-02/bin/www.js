"use strict";

const app = require("../app") // 상위 폴더로 간 후 app 불러오기
const PORT = 3000;

app.listen(PORT, () =>{
    console.log("서버 가동");
});