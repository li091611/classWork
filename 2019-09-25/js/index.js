let data = null;
let xhr = new XMLHttpRequest();
xhr.open('get', './data.json', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.response);
        red(data);
        myBind(data);
    }
}
xhr.send();
function red(ary) {
    let str = '';
    ary.forEach(item => {
        let {
            img,
            title,
            price,
            num
        } = item;
        str += ` 
        <li>
            <img src="${img}" alt="">
            <div>${title}i</div>
            <div>￥${price}</div>
            <section>
                <span>选购</span>
                <span>${num}评价</span>
            </section>
        </li>`;
    })
    box.innerHTML = str;
}
let box = document.getElementById('box'),
    tBtn = document.querySelectorAll('b')[0],
    priceBtn = document.querySelectorAll('b')[1],
    numBtn = document.querySelectorAll('b')[2];
function myBind(data) {
    function click(e, i) {
        e.flag = 1;
        e.onclick = function () {
            this.flag *= -1;
            data.sort((a, b) => {
                return (a[i] - b[i]) * this.flag
            })
            red(data);
        }
    }
    click(tBtn, 'time');
    click(priceBtn, 'price');
    click(numBtn, 'num');
}