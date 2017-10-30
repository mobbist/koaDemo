//所有路由汇总index.js
const router = require("koa-router")();
const user = require("./user");


router.use('/user', user.routes(), user.allowedMethods())

module.exports = router;