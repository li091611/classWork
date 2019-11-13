let express = require('express');
let app = express();
let { readFile, writeFile } = require('./promiseFs');
// let bodyParser = require('body-parser');
let qs = require('qs');

app.listen(8080, () => {
    console.log('端口起于 8080')
})
app.use((req, res, next) => {
    // 这个中间件是把读取的文件放到req上，这样 下面的接口都可以通过req获取要用的数据了
    readFile('./package-lock.json').then(data => {
        data = JSON.parse(data.toString());
        req.data = data.dependencies;
        // 由于readFile是异步操作，所以在读取成功以后执行next()
        next();
    }).catch(err => {
        res.status(500);
    })
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Credentials', true)
    next();
})
// app.use(bodyParser.json())
// app.use(bodyParser.raw())
// app.use(bodyParser.text())
// app.use(bodyParser.urlencoded({
//     extended:true
// }))
app.use((req, res, next) => {
    let str = '';
    req.on('data', chunk => {
        str += chunk;
    })
    req.on('end', function () {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
    })
    next();
})
app.get('/list', (req, res) => {
    // req.query 前端穿个后端的参数
    // type是query中的属性
    let { type } = req.query;//query 是experss自带的
    let data = req.data;//data是我们使用上边的中间件 加上的
    res.send({
        code: 0,
        data: type ? data[type] : data //前端给了type我们就放回的队形的属性值，没给我们就整个对象返回
    });
})
// app.post('/add', (req, res) => {
//     console.log(req.body);
//     res.send({
//         state: 'waiting'
//     })
// })





let ary = [];
function f(req, res) {
    readFile('./package-lock.json').then(data => {
        data = JSON.parse(data);
        Object.assign(data.dependencies.my, req.body)
        return writeFile('./package-lock.json', JSON.stringify(data))
    }).then(data => {
        res.send({
            code: 0,
            data: 'success'
        })
        let fn = ary.shift();
        fn && fn();
    }).catch(err => {
        console.log(err)
        res.send({
            err: err
        })
    })
}
let timer = null;
app.post('/add', function (req, res) {
    console.log(req.body)// 放置是 前端post发给后台的数据
    ary.push(() => {
        f(req, res)
    })
    clearTimeout(timer)
    timer = setTimeout(() => {
        let fn = ary.shift();
        fn && fn();
    }, 100);

})