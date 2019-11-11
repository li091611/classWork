let my = require('../promiseFs')
// my.rmdir('./node模块/qqq/1.text').then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

// my.mkdir('./node模块/qqq/1.text').then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

// my.writeFile('./node模块/qqq/1.txt','听不懂').then(data=>{
//         console.log(data)
//     }).catch(err=>{
//         console.log(err)
//     })
my.unlink('./node模块/qqq/1.text').then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })