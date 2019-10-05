//先去获取数据
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            // console.log(JSON.parse(xhr.response));
            data = JSON.parse(xhr.response)
            render(data);
        }
    }
    xhr.send()
}
// let n = 0;
getData();
let body = document.querySelector('.body'),
    lis = body.getElementsByTagName('li');

console.log(lis[2])
let n = 0;
function render(data) {
    let str = '';
    data.forEach((e,i) => {
        let { pic, author, desc, height, id } = e;
        str += `
        <li>
            <div class="img_box">
                <img src="${pic}">
                <p class="desc">${desc}</p>
                <p class="author">${desc}</p>
            </div>
        </li>`
        n++;
        console.log(lis[n])
    })
    
    // console.log(n)
    body.innerHTML = str;
}
