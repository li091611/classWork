$(function () {
    //将当前的操作页面的url存起来
    sessionStorage.setItem('currentUrl', './page/joblist.html')
    let jobId = location.href.queryURLParams().jobId;
    let $inp = $('input[type=text]'),
        $textA = $('textarea'),
        $checks = $('input[name=job]');
    if (jobId) {
        axios.get('/job/info?jobId=' + jobId).then((data) => {
            $inp.val(data.data.name);
            $textA.val(data.data.desc);
            let p = data.data.power;
            $checks.get().forEach(item => {
                item.checked = p.includes(item.value)
            });
        })
    }
    $('.submit').on('click',function(){
        let url = jobId?'/job/update':'/job/add'
        let obj = {};
        jobId? obj.jobId = jobId : null;
        let options = {
            name:$inp.val(),
            desc:$textA.val(),
            power:$checks.get().filter(item=>item.checked).map(item=>item.value).join('|')
        }
        // console.log(options.name)
        if(options.name){
            axios.post(url,Object.assign(options,obj))
        }else{
            alert('职务名称不能为空',{
                handled(){
                    $inp[0].focus()
                }
            })
        }
        // console.log(options)
        
    })
})