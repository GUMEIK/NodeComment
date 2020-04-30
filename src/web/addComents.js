const commentsDao = require('../dao/commentsDao');
const url = require('url');
const path = new Map();
function addComments(request,response){
    // const head = {
    //     "Access-Control-Allow-Origin":"*",
    //     "Access-Control-Allow-Methods":'POST,GET',
    //     "Access-Control-Allow-Headers":"x-requested-with,content-type",
    //     "Content-Type":"text/plain;charset=UTF-8"
    // }
    let parms;
    if(request.method === 'GET'){
        // blogID,parent,parentName,userName,email,comments,ctime,utime
        // blogID,parent,parentName,userName,email,comments,ctime,utime
        parms = url.parse(request.url, true).query;
    }else if(request.method === 'POST'){
        request.on('data',(chunk)=>{
            parms = JSON.parse(chunk.toString());
            console.log(parms)
            let blogID = parms.blogID ? parms.blogID : 0,
            parent = parms.parent ? parms.parent : 0,
            parentName =  parms.parentName ? parms.parentName : "空",
            userName = parms.userName,//必填
            email =  parms.email ? parms.email : "未填写",
            comments = parms.comments,//必填
            ctime = parms.ctime,// 必填
            utime =parms.utime ? parms.utime : 0      ;       
            commentsDao.addComments(blogID,parent,parentName,userName,email,comments,ctime,utime,(result)=>{
                const responseData = {};
                const head = {
                    "Access-Control-Allow-Origin":"*",
                    "Access-Control-Allow-Methods":'POST,GET',
                    "Access-Control-Allow-Headers":"x-requested-with,content-type",
                    "Content-Type":"text/plain;charset=UTF-8"
                }
                console.log("成功了耶")
                responseData.data = result;
                responseData.msg = "添加评论成功！"
                response.writeHead(200,head);
                response.write(JSON.stringify(responseData));
                response.end();
            })

        })
                
               
                
    }
}
path.set("/addComments",addComments);
module.exports.path = path;