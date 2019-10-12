HTMLElement.prototype.hasClass = function hasClass(cln=''){
    //先把cln去除首尾空格  然后拆分成数组
    cln = cln.replace(/^ +| +$/g,'');// 去除首尾空格
    let ary = cln.split(/ +/);
    let str = this.className;
    let flag = true;
    for(let i = 0 ; i < ary.length; i++){
        let reg = new RegExp(`(^| +)${ary[i]}( +|$)`);
        if(!reg.test(str)){
            flag = false;
            break;
        }
    }
    return flag
}
HTMLElement.prototype.addClass = function addClass(cln){
    // 单个类名   先查看有没有对应的类名，没有再去添加；
    // this ---》 box
    if(this.hasClass(cln))return;
    cln = cln || '';
    cln = cln.replace(/^ +| +$/g,'');
    let ary = cln.split(/ +/);
    for(let i = 0 ; i < ary.length; i++ ){
        if(!this.hasClass(ary[i])){
            this.className += ' '+ary[i];
        }
    }
    // if(this.hasClass(cln))return;
    // this.className += ' '+cln;// 加空格是为了防止zcln和className 的最后一个单词拼成一个词
}
HTMLElement.prototype.removeClass = function(cln){
    cln = cln || '';
    cln = cln.replace(/^ +| +$/g,'');
    let str = this.className;
    let ary = cln.split(/ +/);
    for(let i = 0; i < ary.length; i++){
        let reg = new RegExp('\\b'+ary[i]+'\\b','g')
        str = str.replace(reg,'')
    }
    str = str.replace(/ +/g,' ').replace(/^ +| +$/g,'');// 把多个空格替换成一个空格
    this.className = str;
}
HTMLElement.prototype.toggleClass = function(cln){
    if(this.hasClass(cln)){
        this.removeClass(cln)
    }else{
        this.addClass(cln)
    }
}