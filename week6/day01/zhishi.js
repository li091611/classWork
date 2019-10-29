'Promise实例有三个状态 分别是 pending等待状态   resolved 成功态    rejected 失败态'
'事件委托  把事件绑定到父级元素上， 通过点击子元素可以触发父级元素的对应事件  我们可以通过事件源来获知点击的元素'
'阻止冒泡  e.stopPropagation() e.cancelBubble = true'
"'obj.hasOwnProperty('xxx')"
e = e || window.event;// 事件对象
// 阻止默认事件  e.preventDefault()   return false;
// 默认事件和绑定的事件  绑定事件先执行；但是滚动事件的触发是正好相反的；

var tar = e.target || e.srcElement;// 事件源
e.stopPropagation();// 阻止事件的冒泡传播
e.cancelBubble = true;// IE 的阻止冒泡

inner.addEventListener('click',f,false);
inner.removeEventListener('click',f,false);

document.addEventListener('DOMContentLoaded',function(){
    console.log(6666)
},false)

jQuery.fn.init.prototype === init.prototype
jQuery.fn === jQuery.prototype
jQuery.fn.init.prototype === jQuery.prototype 

// passive true : 先执行默认事件 后执行绑定事件
//         false: 先执行绑定的事件  后执行默认事件

box.addEventListener('transitionend',function(){
    console.log(666)
},false);

function insertAfter(newEle, originEle) {
    //=>newEle:新插入的元素
    //=>originEle:指定的老元素
    let next = originEle.nextElementSibling;

    if (next) {
        // this.insertBefore(newEle, next)
        originEle.parentNode.insertBefore(newEle, next)
    } else {
        // this.appendChild(newEle)
        originEle.parentNode.appendChild(newEle)
    }
}