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

app.use(logger());

app.use(static(
    path.join( __dirname,staticPath)
  ))


  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
  });

  connection.connect();
  //查询表
connection.query('select * from `user`', function(err, rows, fields) {
  if (err) throw err;
  console.log('查询结果为',rows);
  
  app.listen(3005);
  console.log("success");
});
//关闭连接
connection.end();
    // connected! 
  // 结束会话
 //123