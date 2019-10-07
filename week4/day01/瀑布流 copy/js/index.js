let oLis = document.querySelectorAll('.body li');
let box = document.getElementsByClassName('body')[0];
let imgs = box.getElementsByTagName('img');
let flag = false;
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
function winH() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    return {
        w, h
    }
}
function getData() {
    flag = true;
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            render(data);
            flag = false;
            loadAll();
        }
    }
    xhr.send();
}
getData();
function render(ary) {
    let str = '';
    ary.forEach((item, index) => {
        let { desc, pic, height, author } = item;
        str = `
            <img realSrc="${pic}" src='./img/1.jpg' alt="" style='height:${height}px'>
            <p class="desc">${desc}</p>
            <p class="author">${author}</p>
            `
        let temp = getMinLi();
        let div = document.createElement('div');
        div.className = 'img_box';
        div.innerHTML = str;
        temp.appendChild(div)
    })
}
function getMinLi() {
    let ary = [...oLis].sort((a, b) => {
        return a.clientHeight - b.clientHeight;
    })
    return ary[0];
}
window.onscroll = function () {
    loadMore();
    loadAll();
}
function loadMore() {
    let li = getMinLi();
    if (offset(li).t + li.clientHeight <= document.documentElement.scrollTop + winH().h) {
        if (!flag) {
            getData();
        }
    }
}
function loadImg(ele) {
    if (ele.myLoad) return;
    if (offset(ele).t + ele.clientHeight / 2 <= document.documentElement.scrollTop + winH().h) {
        let realSrc = ele.getAttribute('realSrc');
        let temp = new Image();
        temp.src = realSrc;
        temp.onload = function () {
            ele.src = realSrc;
            ele.myLoad = true;
        }
        temp = null;
    }
}
function loadAll() {
    [...imgs].forEach(item => {
        loadImg(item);
    })
}