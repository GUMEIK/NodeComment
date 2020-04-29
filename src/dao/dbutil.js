/**
 * mysql数据库的配置文件
 * 返回一个数据库连接创建函数，这样就能保证每次连接过后及时关闭连接以避免发生不必要的错误
 */
const mysql = require("mysql");
function createConnection(){
    const connection = mysql.createConnection({
        // 服务器地址
        host:"",
        // 监听端口
        port:"3306",
        // 用户名
        user:"root",
        // 密码
        password:"",
        // 数据库
        database:""
    });
    return connection;
}
module.exports.createConnection = createConnection;
// 测试连接
const connection = createConnection();
// connection.connect(function(err){
//     if(!err) console.log("连接成功！");
//     else console.log(err);
// })
// connection.end();
