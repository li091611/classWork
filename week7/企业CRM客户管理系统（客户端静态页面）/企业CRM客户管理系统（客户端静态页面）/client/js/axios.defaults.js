axios.defaults.baseURL = 'http://127.0.0.1:8888'
axios.defaults.headers['Content-Type']  = "application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;
//跨域是否带带凭证
axios.defaults.transformRequest = function (data = {}) {
    let str = ''
    for (let k in data) {
        str += `&${k}=${data[k]}`
    }
    return str.slice(1)
}
// 请求拦截
axios.interceptors.request.use(function(config){
    return config
},function(err){
    return Promise.reject(err)
})
// 相应拦截
axios.interceptors.response.use(function(response){
    return response.data
},function(err){
    return Promise.reject(err)
}) 