let data = null;
let xhr = new XMLHttpRequest();
xhr.open('get', './data.json', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.response)
        myBind(data);
        render(data);
    }
}
xhr.send();
let box = document.getElementById('box'),
    timeBtn = document.getElementById('timeBtn'),
    priceBtn = document.getElementById('priceBtn'),
    commentBtn = document.getElementById('commentBtn');
function render(ary) {
    console.log(ary);
    let str = '';
    ary.forEach(item => {
        let {
            img,
            title,
            price,
            num
        } = item;
        str += `<li>
                <div class="imgBox">
                    <img src="${img}" alt="">
                </div>
                <div class="til">${title}</div>
                <div class="desc">${title}</div>
                <div class="price">￥${price}</div>
                <div class="botBox">
                    <div>选购</div>
                    <div>${num}评价</div>
                </div>
            </li>`;
    })
    box.innerHTML = str;
}
function myBind(data) {
    function click(ele, key) {
        ele.flag = 1;
        ele.onclick = function () {
            this.flag *= -1;
            data.sort((a, b) => {
                return (a[key] - b[key]) * this.flag
            })
            render(data);
        }
    }
    click(timeBtn, 'time')
    click(priceBtn, 'price')
    click(commentBtn, 'num')
}