let path = require('path');
let url = require('url')

//可以产生决定路径
console.log(path.resolve('./es6'));
console.log(path.resolve(__dirname,'./qqq'));

let str = 'http://baidu.com?a=12&b=13#aaa';
console.log(url.parse(str,true).query.a)