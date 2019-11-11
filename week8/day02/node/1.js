//node的模块化 是遵循 commonjs 规范
let qqq = require('./2.js')  //node 引入
console.log(qqq)
// 每个js文件对于node来说都是一个大闭包
//  require _dirname _filename moudule.exports exports
// 以上五个都属于当前js的的私有变量
// require是用来导出文件
// moudule.exports  和 exports 都是用来导出内容的
// _dirname是当前文件j夹所在的绝对路径
// _filename是当前文件的绝对路径
console.log('文件夹路径',_dirname)
console.log('当前文件的路径',_filename)