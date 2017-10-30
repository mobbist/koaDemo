const Router = require("koa-router");

const user = new Router();
const userController = require("../controllers/userController");


user.get("/",userController.signIn);
user.get("/signIn",userController.signIn);


module.exports = user;