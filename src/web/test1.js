// 创建map对象
let path = new Map();
/**
 * 传递进来request ,response
 * @param {*} request 
 * @param {*} response 
 */
function getData(request,response){
    const head = {
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":'POST,GET',
        "Access-Control-Allow-Headers":"x-requested-with,content-type",
        "Content-Type":"text/plain;charset=UTF-8"
    }
    response.writeHead(200,head);
    response.write("test2")
    response.end();
}
// 设置接口名称和接口函数,这里约定文件名为接口名称
path.set("/test1",getData)
// 默认规定：具有path属性的导出对象的文件为接口文件
module.exports.path = path;
