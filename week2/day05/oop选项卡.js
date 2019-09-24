class Tab{
    constructor(idSelector){
        this.box = document.querySelector(idSelector);
        this.tabs = this.box.querySelectorAll('.tab');
        this.bodys = this.box.querySelectorAll('.body');
        this.myBind();
    }
    myBind(){
        //this 是当前类的实例
        let _this = this;
        for(let i = 0; i < this.tabs.length ; i++){
            this.tabs[i].onclick = function(){
                _this.clearClass();
                this.classList.add('current');
                _this.bodys[i].classList.add('current');
            }
        }
    }
    clearClass(){
        for(let i = 0; i < this.tabs.length; i++){
            // this.tabs[i].className = 'tab';
            // this.bodys[i].className = 'body'
            this.tabs[i].classList.remove('current')
            this.bodys[i].classList.remove('current')
        }
    }
}