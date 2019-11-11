//  fs 是node 内置模块 用来操作文件  读写文件
// I/O input output   I/O操作读写文件
let fs = require('fs');

//读取文件

// readFile 执行有三个参数 url 编码格式 回调函数
//                            UTF-8
// fs.readFile('../package.json',null,(err,data)=>{
//     // 若读取文件失败，err就会有对应的值
//     // 若读取成功err为null
//     if(!err){
//         console.log('data',data.toString())
//     }else{
//         console.log('err',err)
//     }
//     // console.log('err',err)
//     // console.log('data',data.toString())
// })


// fs.readFileSync('../package.json','utf-8')
// console.log(data);
// console.log(666)


//读取文件夹

/* 
fs.readdir('../es6',null,(err,data)=>{
    if(!err){
        console.log(data)
        data.forEach(item=>{
            fs.readFile('../es6/'+item,'utf-8',(e,d)=>{
                if(!e){
                    console.log(d)
                }
            })
        })
    }
})
 */

 /* 
let res = fs.readdirSync('../es6')
console.log(res)
 */

 //创建文件夹

/*
 fs.mkdir('./qqq',(err)=>{
    if(!err){
        console.log('创建成功')
    }else{
        console.log('创建失败')
    }
}) 
*/
//fs.rmdirSync() 同步

/* fs.rmdir('./qqq',(err)=>{
    if(!err){
        console.log('删除成功')
    }else{
        console.log('删除失败')
    }
})
 */

/* 
fs.mkdir('./qqq',(err)=>{
    if(!err){
        console.log('创建成功')
    }else{
        console.log('创建失败')
    }
})  
*/

//写入文件

fs.writeFile('./qqq/1.txt','你好','utf-8',(err)=>{
    if(!err){
        console.log('写入成功')
    }else{
        console.log('写入失败')
    }
})
fs.writeFileSync('./qqq/1.txt','你好1111','utf-8')

fs.appendFileSync('./qqq/1.txt','33333333333','utf-8')


function append(url,data) {
    fs.readFile(url,'utf-8',(err,d)=>{
        if(d === undefined){
            d = ''
        }
        fs.writeFile(url,d+data,'utf-8',(err)=>{
            if(!err){
                console.log('添加成功')
            }
        })
        /* if(!err){
            fs.writeFile(url,d+data,'utf-8',(err)=>{
                if(!err){
                    console.log('添加成功')
                }
            })
        }else{
            fs.writeFile(url,data,'utf-8',(err)=>{
                if(!err){
                    console.log('创建成功')
                }
            })
        } */
    })
}
append('./qqq/3.txt','哈哈哈')