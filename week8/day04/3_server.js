//实现一个登录的功能
let { readFile, writeFile } = require('./promiseFs');
let express = require('express');
let qs = require('qs');
let app = express();
let session = require('express-session')
app.listen(8008, function () {
    console.log('后端服务起于 8008')
})
//解决跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Credentials', true)
    next();
})
// 把post请求的参数 转成普通对象存放的req.body上
app.use((req, res, next) => {
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })
    req.on('end', () => {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})
//把读取数据的操作放到中间件上处理
app.use((req, res, next) => {
    readFile('./user.json').then(data => {
        req.data = JSON.parse(data);
        next();
    }).catch(err => {
        // 读取失败给前端500
        res.status(500);
        res.send('');
    })
})

app.post('/reg', (req, res) => {
    //实现注册接口
    let { username, password } = req.body;
    let data = req.data;
    let bol = data.some(item => {
        return item.username === username
    })
    if (bol) {
        res.send({
            code: 1,
            msg: 'already has this man'
        })
        return
    }
    // Object.assign(data,req.body);
    data.push(req.body);
    writeFile('./user.json', JSON.stringify(data)).then(data => {
        //写入成功
        res.send({
            code: 0,
            data: 'success'
        })
    }).catch(() => {
        res.send({
            code: 0,
            data: 'success'
        })
    })
})

app.post('/login',(req,res)=>{
    let {username,password} = req.body;
    let bol = req.data.some(item=> item.username == username && item.password == password)
    if(bol){
        //登录成功
        session({
            name:"hello",
            secret:"myqq",
            resave:"false",
            saveUninitialized:"false",
            cookie:{
                maxAge:1000*60*60
            }
        })
        res.send({
            code:0,
            data:{
                name:username
            }
        })
    }else{
        res.send({
            code:2,
            mag:'用户名密码错误'
        })
    }
})