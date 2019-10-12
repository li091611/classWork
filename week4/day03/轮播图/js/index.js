let ul = document.querySelector('#box .img_box ul'),
    box = document.querySelector('#box');
let tip_box = document.querySelector('#box .tip_box'),
    tips = document.getElementById('box').getElementsByClassName('tip');
let left_btn = document.querySelector('.left_btn'),
    right_btn = document.querySelector('.right_btn');
function getData() {    //获取数据
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            render(data);
            move();
            tipClick();
        }
    }
    xhr.send();
}
getData();
function render(ary) { //渲染数据
    ary = ary || [];
    let str = '';
    ary.push(ary[0]);
    ary.forEach((item, index) => {
        let { img, desc } = item
        str = `
        <img src="${img}" alt="">
        <p class="desc">${desc}</p>
        `
        if (index > 0) {
            let span = document.createElement('span')
            span.className = 'tip';
            if (index == 1) span.className = 'tip current';
            tip_box.appendChild(span);
        }
        let li = document.createElement('li');
        li.innerHTML = str;
        ul.appendChild(li)
        ul.style.width = ary.length * 590 + 'px';
    });
}
let n = 0;
let timer = null;
function move() {
    timer = setInterval(() => {
        change();
    }, 2000);
}
function change() {
    n++;
    if (n === (tips.length + 1)) {
        ul.style.left = 0;
        n = 1;
    }
    tipClass(n);
    animate(ul, { left: -590 * n }, 500);
}
box.onmouseenter = function () {//鼠标划入清动画
    clearInterval(timer);
}
box.onmouseleave = function () {//鼠标划出的时候启动动画
    move();
}
function tipClass(m) {// 处理 tip 类名的函数
    m = m >= tips.length ? 0 : m;
    for (let i = 0; i < tips.length; i++) {
        tips[i].className = 'tip'
    }
    tips[m].className = 'tip current'
}
right_btn.onclick = function () {
    change();
}
left_btn.onclick = function () {
    n--;
    if (n < 0) {
        ul.style.left = -590 * (tips.length) + 'px';
        n = tips.length - 1;
    }
    animate(ul, { left: -590 * n }, 500);
    tipClass(n);
}
function tipClick() {
    for (let i = 0; i < tips.length; i++) {
        tips[i].onclick = function () {
            n = i;
            tipClass(n);
            animate(ul, { left: -590 * n }, 500)
        }
    }
}