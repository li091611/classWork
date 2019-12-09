// 第一步混入第二步造组件 router- link router -view 这时不知道渲染哪个组件所以解构出routes 
// 在实例上添上route存放路径然后发现它不是响应式的，
// 所以加上vue一个自定义的监听方法并且刚开始先给route赋值 上，保证上来先有可渲染的组件|

(function (global, factiry) {
    global.VueRouter = factiry;

})(this, function () {
    class VueRouter {

    }
    VueRouter.install = function (_Vue) {
        // 只要Vue的use执行了都会执行install
        console.log(_Vue)
        debugger
        _Vue.mixin({
            beforeCreate() {
                if (this.$options && this.$options.router) {
                    this._router = this.$options.router;
                } else {
                    this._router = this.$parent._router
                }
            },
        })
        _Vue.component("router-link", {
            props: {
                to: String// 要就收一个to属性 类型是一个字符串
            },
            template:`<a :href='"#"+to'><slot></slot></a>`
        })
    }
    return VueRouter;
})