//先去获取数据
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            // console.log(JSON.parse(xhr.response));
            data = JSON.parse(xhr.response)
            . (data);
        }
    }
    xhr.send()
}
// getData();
let body = document.querySelector('.body');
let oLis = body.querySelectorAll('li');
// console.log(olis)
function render(data) {
    let str = '';
    data.forEach((e,i) => {
        let { pic, author, desc, height, id } = e;
        str = `
        <li>
            <div class="img_box">
                <img src="${pic}">
                <p class="desc">${desc}</p>
                <p class="author">${desc}</p>
            </div>
        </li>`
    })
    // body.innerHTML += str;
    let temp = getMinLi();
    temp.innerHTML += str; 
}
function getMinLi() {
    // 怎么从五个li中挑选出最低的  clientHeight
    var ary = [...oLis].sort((a,b)=>{
        return a.clientHeight - b.clientHeight
    })
    // console.log(ary);
    return ary[0]
}
