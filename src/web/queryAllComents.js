const commentsDao = require('../dao/commentsDao');
const path = new Map();
function queryAllComments(request,response){
    const head = {
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":'POST,GET',
        "Access-Control-Allow-Headers":"x-requested-with,content-type",
        "Content-Type":"text/plain;charset=UTF-8"
    }
    commentsDao.queryAllComments((result)=>{
        const responseData = {};
        responseData.data = result;
        responseData.msg = "查询所有评论成功！"
        response.writeHead(200,head);
        response.write(JSON.stringify(responseData));
        response.end()
    });
}
path.set("/queryAllComments",queryAllComments)
module.exports.path = path;