import axios from 'axios'

let http = axios.create({
    // baseURl: '',   // 打包之前这位位置写自家后台地址;
    params: {
        t: Math.random()
    }

})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    let data = JSON.parse(config.data)
    data.token = localStorage.getItem('token')
    config.data = JSON.stringify(data)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.adta;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http