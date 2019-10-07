let utils = {
    getCss(ele, attr) {
        // 该方法 可以让我们获取 ele的 attr属性
        var str = getComputedStyle(ele)[attr];
        if (/width|height|padding|margin|left|top/.test(attr)) {
            return parseFloat(str)
        }
        return str;
    },
    setCss(ele, attr, val) {
        if (/width|height|padding|margin|left|top/.test(attr)) {
            ele.style[attr] = parseFloat(val) + 'px';
        } else {
            ele.style[attr] = val;
        }

    },
    winH() {
        // 获取当前屏幕的高度
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        // 获取当前屏幕的高度
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        return {
            w, h
        }
    },
    offset(ele) {
        // ele 到 body 的偏移量
        let l = ele.offsetLeft, // ele到上级参照物的左偏移量
            t = ele.offsetTop;
        let temp = ele.offsetParent;// ele的上级参照物
        while (temp) {
            l += temp.clientLeft + temp.offsetLeft;
            t += temp.clientTop + temp.offsetTop;
            temp = temp.offsetParent;
        }
        return {
            l, t
        }
    }
}