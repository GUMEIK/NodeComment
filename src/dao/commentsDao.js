const dbutil = require("./dbutil")

function addComments(blogID,parent,parentName,userName,email,comments,ctime,utime,callback){
    const sqlAddComments = `insert into comments(blog_id,parent,parent_name,user_name,email,comments,ctime,utime) values (?,?,?,?,?,?,?,?)`;
    const connection = dbutil.createConnection();   
    const paramsArr = [blogID,parent,parentName,userName,email,comments,ctime,utime];
    connection.connect((err)=>{if(err)console.log(err)});
    connection.query(sqlAddComments,paramsArr,(error,result)=>{
        if(!error){
            callback(result)
        }else{
            console.log(error)
        }
    })
    connection.end();
}
//   12 ,1,"gumei","nan","3323435@qq.com","hello啊，李银河",20200422,20200423
// addComments(12 ,1,"gumei","nan","3323435@qq.com","hello啊，李银河",20200422,20200423,(result)=>{
//     console.log(result)
// })

function queryAllComments(callback){
    const sqlQueryComments = `select * from comments`;
    const connection = dbutil.createConnection();
    connection.query(sqlQueryComments,(error,result)=>{
        if(!error){
            callback(result);
        }else{
            console.log(error);
        }
    })
}

module.exports = {
    queryAllComments,
    addComments
}