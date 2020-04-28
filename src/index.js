const http = require('http');
const config = require("../config/config");
const url = require('url');
const loader = require('./loader')
http.createServer(function (request, response) {
    const head = {
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":'POST,GET',
        "Access-Control-Allow-Headers":"x-requested-with,content-type",
        "Content-Type":"text/plain;charset=UTF-8"
    }
    // // 请求方法 GET POST
    // const method = request.method;
    // if (method === "GET") {
    //     // 请求路径  /api
    //     const pathName = url.parse(request.url).pathname;
    //     // 请求参数
    //     const parms = url.parse(request.url, true).query;
    // }else if(method === "POST"){
    //     request.on("data",function(chunk){
    //         // 接受JSON字符串，将其转换为对象格式
    //         const data = JSON.parse(chunk.toString());
    //         console.log(data.name)
    //     })
    // }
    // 接口请求地址
    const pathName = url.parse(request.url).pathname;
    if(loader.get(pathName)){
        // 如果接口存在，就进行转发
        try{
            loader.get(pathName)(request,response)
        }catch(e){
            // 服务器内部代码错误
            response.writeHead(500);
            response.write('<html><body><h1>500 BadServer</h1></body></html>',head);
            response.end();
        }
    }else{
        // 接口不存在,返回404
        response.writeHead(404);
        response.write('<html><body><h1>404 NotFound</h1></body></html>',head);
        response.end();
    }
}).listen(config.port, () => {
    console.log(`服务已经启动，监听端口为:${config.port}`)
})