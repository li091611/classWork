$(function(){
    window.addEventListener('hashchange',function(){
        console.log(location.hash)
        //将当前的操作页面的url存起来
        sessionStorage.setItem('currentUrl', './page/customerlist.html'+location.hash)
    })
   function getData(){
    axios.get('/customer/list?lx=my').then(data=>{

    })
   }
//    getData()
   function render(ary){
    let str = ''
    ary.forEach(item => {
        str +=``
    });
   }
})