Vue.directive('focus', function(el, obj) {
    if (obj.value) {
        setTimeout(() => {
            el.focus()
        }, 10);
    }
})
new Vue({
    el: '#app',
    data: {
        todo: '',
        ary: [{
            id: 1,
            todo: '吃饭',
            done: false,
            editable: false,
        }, {
            id: 2,
            todo: '吃饭1',
            done: false,
            editable: false,
        }, {
            id: 3,
            todo: '吃饭2',
            done: true,
            editable: false,
        }, ]
    },
    methods: {
        add() {
            this.todo = this.todo.trim();
            if (!this.todo) return
            let obj = {
                id: Math.random(),
                done: false,
                todo: this.todo,
                editable: false
            }
            this.ary.unshift(obj);
            this.todo = ''
        },
        change(item) {
            item.editable = !item.editable

        }
    },
})