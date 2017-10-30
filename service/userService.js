const {query} = require("../utils/pool");

async function getUser(){
    var user = await query("select * from user");
    return Promise.resolve(user);
}

module.exports = {
    getUser
}