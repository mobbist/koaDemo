const userService =  require("../service/userService");


async function signIn(ctx){
    var user = await userService.getUser();
    ctx.body = user;
}


module.exports = {
    signIn
}