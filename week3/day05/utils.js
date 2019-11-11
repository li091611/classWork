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
    set(ele) {
        // ele 到 body 的偏移量
        let l = ele.setLeft, // ele到上级参照物的左偏移量
            t = ele.setTop;
        let temp = ele.setParent;// ele的上级参照物
        while (temp) {
            l += temp.clientLeft + temp.setLeft;
            t += temp.clientTop + temp.setTop;
            temp = temp.setParent;
        }
        return {
            l, t
        }
    }
}