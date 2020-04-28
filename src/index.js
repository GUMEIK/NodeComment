const http = require('http');
const config = require("../config/config")
http.createServer(function(request,response){

}).listen(config.port,()=>{
    console.log(`服务已经启动，监听端口为:${config.port}`)
})