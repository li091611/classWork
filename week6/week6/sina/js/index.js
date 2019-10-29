
function getData(url, cb) {

    let xhr = new XMLHttpRequest;
    xhr.open('get', url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response)
            
            cb && cb(data)
        }
    }
    xhr.send()
}
getData('./data/banner.json',function(data){
    render(data)
})
function render(ary) {
    let slideBox = document.getElementById('slideBox')
    let str = '';
    ary.forEach(item => {
        let { img, title } = item
        str += ` 
        <div class="swiper-slide">
          <img src="${img}" alt="">
          <p>${title}</p>
      </div>
          `
    });
    slideBox.innerHTML = str;
    let swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        loop: true,
        autoplay: true,
    });
}
getData('./data/list.json',function(data){
    // console.log(data)
    renderList(data)
})
function renderList(arr){
    let listBox = document.querySelector('.listBox');
    // console.log(listBox)
    let str = '';
    arr.forEach(item=>{
        if(item.type == 0){
            str += `
            <div class="list">
                <div class="textBox">
                    <p>微博之夜红毯女星争艳秀身材</p>
                    <div class="commentBox">
                        <span class="icon_com"></span>
                        <span>${item.commentNum}</span>
                        <span>腾讯新闻</span>
                    </div>
                </div>
            </div>`
        }else{
            str +=`
            <div class="list">
            <div class="textBox">
                <p>微博之夜红毯女星争艳秀身材</p>
                <div class="commentBox">
                    <span class="icon_com"></span>
                    <span>腾讯新闻</span>
                </div>
            </div>
            <div class="imgBox">
                <img src="${item.img[0]}" alt="">
            </div>
        </div>`
        }
        
    })
    listBox.innerHTML = str

}