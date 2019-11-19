Vue.filter('money', function (n) {
    return "￥" + (n / 100).toFixed(2)
})
new Vue({
    el: "#app",
    data() {
        return {
            name: "某东",
            data: [],
            total: 0,
            checkAll: false,
            show: false,
            delIndex: undefined
        }
    },
    created() {
        //钩子函数
        this.getData()
    },
    methods: {
        getData() {
            fetch('http://127.0.0.1:8080/jd/list').then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
                this.data = data.data;
                this.sum();
                //重置checkAll
                this.checkAll = this.data.every(item => item.isSelect)
            }).catch(err => {
                console.log(err)
            })
        },
        sum() {
            //求总价
            //this.data.filter(item=>item.isSelect)筛选出  选中的商品
            /*  let ary = this.data.filter(item => item.isSelect)
             let t = 0
             ary.forEach(item => {
                 t += item.count * item.price
             });
             this.total = t */
            this.total = this.data.filter(item => item.isSelect).reduce((prev, next) => prev + next.count * next.price, 0)
        },
        checkOneFn(obj) {
            fetch('http://127.0.0.1:8080/jd/isselect', {
                method: 'post',
                body: JSON.stringify({ id: obj.id, isSelect: obj.isSelect })
            }).then(data => {
                return data.json()
            }).then(data => {
                console.log(data)
                if (data.code == 0) {
                    this.checkAll = this.data.every(item => item.isSelect)
                    this.sum();
                }
            })


        },
        checkAllFn() {
            this.data.forEach(item => {
                item.isSelect = this.checkAll
            });
            this.sum()
        },
        del(n) {
            this.delIndex = n
            this.show = true;
        },
        sure() {
            this.show = 0
            this.data.splice(this.delIndex, 1);
            this.sum()
        },
        cancel() {
            this.show = 0
        },
        clear() {
            this.data = [];
            this.sum(),
                this.checkAll = false
        }
    },

})