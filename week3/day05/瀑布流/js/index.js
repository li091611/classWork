//先去获取数据
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(status)) {
            console.log(JSON.parse(xhr.response));
            // render(data);
        }
    }
    xhr.send()
}
getData()
function render(data){
    let str = '';
    data.forEach((item)=>{
        let {pic,author,desc,height} = item
    })
}