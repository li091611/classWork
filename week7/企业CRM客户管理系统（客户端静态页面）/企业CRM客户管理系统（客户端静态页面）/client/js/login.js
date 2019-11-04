$(function () {
    //当dom结构加载完成之后执行该函数
    $('.submit').on('click', function (e) {
        let account = $('input[type = text]').val();
        let password = $('input[type = password]').val();
        if (!account || !password) {
            alert('用户名密码不能为空')
            return
        }
        password = md5(password)//对密码进行MD5加密
        axios.post('/user/login', {
            account, password
        }).then((data) => {
            //登录成功
            // 1 登录到首页 2存储权限信息
            if (data.code == 0) {
                //密码正确
                alert('登录成功',{
                    handled:function(){
                        location.href='./index.html'
                    }
                    
                }
                )
                localStorage.setItem('power', data.power)
                //把用户名存在本地
                localStorage.setItem('username',account)
            } else {
                alert('账号或者密码错误')
            }
        }, (err) => {
            console.log(err)
            alert('网络错误')
        })
    })
})