var banner = (function () {
    let idSdldctor = null;
    let $box = null,
        $ul = null,
        $lis = null,
        $tipBox = null,
        $tips = null,
        $left_btn = null,
        $right_btn = null;

    let n = 0, timer = null;
    function initEle() {

        $box = $(idSdldctor);
        $ul = $box.find('.img_box ul');
        $lis = $box.find('.img_box ul li');
        $tipBox = $box.find('.tip_box');
        $tips = $tipBox.children('.tip');
        $left_btn = $box.find('.left_btn');
        $right_btn = $box.find('.right_btn');

        $lis.eq(0).show().siblings().hide();
    }
    function getData() {
        $.ajax({
            url: './data.json',
            success: function (data) {
                render(data)
                initEle();
                autmove();
            },
            error: function () {
                alert('失败')
            }
        })
    }
    function render(data) {
        let str = '', tipStr = '';
        data.forEach((item, index) => {
            str += ` <li>
            <img src="${item.img}" alt="">
            <p>${item.desc}</p>
        </li>`
            tipStr += (index == 0 ? `<span class="tip current"></span> ` : `<span class="tip"></span> `)
        })
        $ul.html(str)
        $tipBox.html(tipStr);
    }
    function move() {
        n++;
        if (n > $lis.length - 1) {
            n = 0
        }
        // $lis.eq(n).show().css({opacity:0}).animate({opacity:1},300).siblings().animate({opacity:0},300,function(){
        //     $lis.eq(n).siblings().hide();
        $lis.eq(n).show().css({opacity:0}).animate({opacity:1},300).siblings().animate({opacity:0},300, function(){
            $lis.eq(n).siblings().hide();
        })
        autoFocus();
    }
    function autmove() {
        timer = setInterval(() => {
            move();
        }, 2000)
    }
    function autoFocus(){
        $tips.eq(n).addClass('current').siblings().removeClass('current')
    }
    return {
        init(id) {
            idSdldctor = id;
            getData();
            initEle(idSdldctor)
        }
    }
    
})()
banner.init('#box')