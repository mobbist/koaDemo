
const mysql = require("mysql");

//创建数据库连接池
//般情况下操作数据库是很复杂的读写过程，不只是一个会话，如果直接用会话操作，就需要每次会话都要配置连接参数。所以这时候就需要连接池管理会话。
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"test"
})


//Promise封装mysql模块
function query(sql){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err, connection)=>{
               // 如果有错误就抛出
            if (err){
                reject(err);
            }else{
                connection.query(sql,  (error, results) => {
                    if(error){
                        reject(error)
                    }else{
                        resolve(results);
                    }
                    // 结束会话
                    connection.release();
                
                   
                })
            }
              
        })
    })
}

module.exports = {
    query
};