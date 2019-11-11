let http = require('http')
http.createServer((res,rej)=>{
    console.log(666)
    res.end();
}).listen(8000,()=>{
    console.log('服务启动成功 端口是8000')
})