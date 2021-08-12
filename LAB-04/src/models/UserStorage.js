"use strict";

class UserStorage {
    static #users = { // # 을 붙이면 private - 은닉화 기능
        id : ["sample","샘플","셈플"],
        psword : ["1234","123123","12345"],
        names : ['park','parkjang','ppark'],
    };

    static getUsers(...fields){
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;