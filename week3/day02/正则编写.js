// 编写一个正则 可以 匹配有效数字
// 可以有 +- 号； 可以有小数， 整数部分不能以0开头
var reg = /^[-+]?(([1-9]\d*)|0)(\.\d+)?$/;
var reg = /^[-+]?(([1-9]\d+)|\d)(\.\d+)?$/;



//2=======================匹配手机号
// 手机号 1开头
var rge = /^1[3-9]\d{9}/
//3======================邮箱
var reg = /^(1-9)\d{4-9}@qq\.com&/i
var reg = /^[[a-z A-Z]\w{5-17}&/
var reg = /^..&/
//==================================
// 4 ==============   密码  8-18； 既有大写 又有小写； 还得有数字
function judge(str){
    if(str.length>18|| str.length<8)return fasle
    if(!/[A-Z]/.test(str))return false
    if(!/[a-z]/.test(str))return false
    if(!/\d/.test(str))return false
    return true

    // if(str.length>=8 && str.length<=18 &&/[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str) ){
    //     return true
    // }
    // return false
}
