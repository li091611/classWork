
Function.prototype.mycall = function (context, ...arg) {
    context = context || window;
    let a = Symbol;
    context[a] = this;
    let res = context[a](...arg);
    delete context[b]
    return res
}
Function.prototype.myapply = function (context, arg) {
    context = context || window;
    arg = arg || [];
    let a = Symbol;
    context[a] = this;
    let res = context[a](arg);
    delete context[a];
    return res
}
Function.prototype.mybind = function (context, ...arg) {
    var othis = this;
    return function (...ary) {
        return othis.apply(context, arg.concat(ary))
    }
}
Function.prototype.mynew = function (classN, ...arg) {
    let obj = new Object();
    obj.__prototy__ = classN.prototype;
    let res = classN.call(obj, ...arg)
    return typeof res === 'object' ? res : obj
}
Function.myinstanceof(temp, classN){
    let l = temp.__prototy__;
    let r = classN.prototype;
    while (l) {
        if (l === r) return true;
        l = l.__prototy__
    }
    return false
}
Object.prototype.hasPubPeroperty = function (key) {
    if (key in this && !this.hasOwnProperty(key)) return true;
    return false;
}
function getParam(url) {
    let reg = /([^?=&]+)=([^?=&#]+)/g;
    let obj = {}
    url.match(reg).forEach(item => {
        let a = item.split('=');
        obj[a[0]] = a[1]
    })
    return obj
}
function getParam(url) {
    let reg = /([^?=&]+)=([^?=&#]+)/g;
    let obj = {};
    url.replace(reg, function (a, b, c) {
        obj[b] = c
    })
    return obj;
}
function getParam(url) {
    var reg = /([^=?&]+)=([^=?&#]+)/g;
    var ary = url.match(reg);
    var obj = {};
    ary.forEach(item => {
        let a = item.split('=');
        obj[a[0]] = a[1]
    })
    return obj;
}
function offset(ele) {
    let l = ele.offsetLeft,
        t = ele.offsetTop;
    let temp = ele.offsetParent;
    while (temp) {
        l += temp.clientLeft + temp.offsetLeft;
        t += temp.clientTop + temp.offsetTop;
        temp = temp.offsetParent;
    }
    return {
        l, t
    }
}
// 2、 大小写反转 
function turn(str) {
    var n = 0;
    var reg = /([A-Z]*)([a-z]*)/g;
    return str.replace(reg, function (a, b, c) {
        return b.toLowerCase() + c.toUpperCase()
    })
}
// 5、千分符的实现
function formateMoney(str) {
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    return str.replace(reg, function (a) {
        return a + ','
    })
}
//数组扁平化
while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
}

JSON.stringify(arr).str.replace(/\[|\]+/g, '')

arr.toString();
//防抖
function debounce(fn, wait) {
    var timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    }
}
//节流
function throttle(fn,wait=1000){
    var flag = true;
    return function(){
        if(!flag)return;
        flag = false;
        setTimeout(() => {
            flag = true;
            fn.call(this,...arguments)
        }, wait);
    }
}