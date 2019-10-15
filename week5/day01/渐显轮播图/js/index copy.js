var banner = (function(){
    let idSelector = '';
    let $box = null,
        $ul = null,
        $lis = null,
        $tipBox = null,
        $tips = null,
        $leftBtn = null,
        $rightBtn = null;
    var n = 0, timer = null; // n 控制了全局图片对应的索引   
    function initEle(){
        $box = $(idSelector);
        $ul = $box.find('.img_box ul'),
        $lis = $box.find('.img_box ul li'),
        $tipBox = $box.find('.tip_box'),
        $tips = $tipBox.children('.tip'),
        $leftBtn = $box.find('.left_btn'),
        $rightBtn = $box.find('.right_btn');

        $lis.eq(0).show().siblings().hide();
    }
    function getData(){
        $.ajax({
            url:'./data.json',
            success:function(data){
                //
                render(data);
                initEle();
                autoMove();
            },
            error:function(){
                alert('失败')
            }
        })
    }
    function render(data){
        let str = '',tipStr = '';
        data.forEach((item,index)=>{
            str += `<li>
                <img src="${item.img}" alt="">
                <p>${item.desc}</p>
            </li>`;
            tipStr += (index ==0 ? `<span class="tip current"></span> `:`<span class="tip"></span> `)
        })
        $ul.html(str)
        $tipBox.html(tipStr);
    }
    function move(){
        n++;
        if(n > $lis.length-1){
            n = 0;
        }
        $lis.eq(n).show().css({opacity:0}).animate({opacity:1},300).siblings().animate({opacity:0},300,function(){
            $lis.eq(n).siblings().hide();
        })
    }
    function autoMove(){
        timer = setInterval(()=>{
            move();
        },2000)
    }
    return {
        init(id){
            idSelector = id;
            getData();
            initEle();
        }
    }
})()
banner.init('#box');