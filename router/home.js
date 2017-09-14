const Router = require("koa-router");

const home = new Router();

async function abc(num){
    return new Promise((reslove)=>{
        setTimeout(()=>{
            reslove(num);
        },3000)
    })
}


home.get("/",async (ctx)=>{
    //这里的事情, 相当于就是controllers完成的
    var str = await abc("515");
    ctx.body = str;

})

module.exports = home;

//需要初始化Router
// var home = new Router();

// home.get("/",async (ctx)=>{
//     let query = ctx.request.query;
//     let queryString = ctx.request.querystring;
//     console.log(`${Date.now()}`);
//     ctx.body = {
//         query,
//         queryString
//     }
// })

// let page = new Router()
// page.get('/', async ( ctx )=>{
//     let query = ctx.request.query;
//     let queryString = ctx.request.querystring;

//     ctx.body = {
//         query,
//         queryString
//     }
// })