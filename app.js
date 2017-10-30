const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const app = new Koa();
const logger = require("./logger");
//加载汇总路由
const routers = require("./router/index");
app.use(routers.routes()).use(routers.allowedMethods())


// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
app.use(static(
    path.join( __dirname,staticPath)
))

//加载logger中间件
app.use(logger());



app.listen(3005);
console.log("server success!!");
