const fs = require("fs");
let pathMap = new Map();
// 同步读取 接口路径 下的文件
// 读取的结果为 接口路径下文件名的数组
let filesNameArr;
try{
    filesNameArr= fs.readdirSync("src/web")
}catch(e){
    console.log(e)
}
// 判断是否读取到了 文件
if(!filesNameArr || filesNameArr.length === 0) return;
// 循环读取  接口路径  下的文件
for(let i = 0,len = filesNameArr.length;i <len;i++ ){
    // 引入接口文件 的 导出  独立的map 对象
    const tempFile = require(`${__dirname}/web/${filesNameArr[i]}`);
    // 判断其是否为接口文件:导出的对象具有path 属性
    if(tempFile.path){
        // 循环接口对象，将接口汇总
        for(let [key,value] of tempFile.path){
            // 判断是否具有重名的接口
            if(!pathMap.get(key)){
                pathMap.set(key,value)
            }else{
                // 有接口名称相同的接口
                throw new Error(`接口名称${key}异常，可能存在重名情况！`)
            }
        }
    }else{
        // 说明不是接口文件
        throw new Error(`接口文件${key}异常，无path属性！`)
    }
}
module.exports = pathMap;