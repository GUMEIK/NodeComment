const dbutil = require('./dbutil');
const connection = dbutil.createConnection();
connection.connect(function(err){
    if(!err) console.log("连接成功！");
    else console.log(err)
})
// AUTO_INCREMENT  递增
// PRIMARY KEY 主键
// INT 类型
// TEXT  可以接收很长的字符串
// 创建评论数据表
// parent  1  2  表示是否嵌套
// 如果表不存在就创建
const sqlCreateTable = `CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT  KEY,
    blog_id INT NOT NULL,
    parent INT NOT NULL,
    parent_name VARCHAR(64) NOT NULL,
    user_name VARCHAR(64) NOT NULL,
    email VARCHAR (256) NOT NULL,
    comments TEXT NOT NULL,
    ctime INT NOT NULL,
    utime INT NOT NULL);`;
connection.query(sqlCreateTable,function(error,results,fileds  )  {
    if(error) console.log(error);
    else console.log(results,fileds)
})
connection.end()