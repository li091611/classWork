$(function () {
    let $tbody = $('.tableBox tbody'),
        $deleteAll = $('.deleteAll'),
        $selectAll = $('.tableBox thead .w3'),
        $handel = $('.tableBox thead .w12'),
        $selecItems = null,
        $deleteBtns = null,
        $resetBtns = null;
    let canshow = true
    function role() {
        // 按照 resetpassword 这个权限进行判断
        let power = localStorage.getItem('power');
        if (power.indexOf('resetpassword') == -1) {
            canshow = false;
            $deleteAll.hide();
            $selectAll.hide();
            $handel.hide();
        }
    }
    role()

    function getData() {
        axios.get('/user/list').then((data) => {
            render(data.data)
            // $selectItems = $('.tableBox tbody input[type=checkbox]')
            $selecItems = $('.tableBox tbody input[type=checkbox]');
            eventBind();//数据渲染完成之后绑定事件
        }).catch((err) => {
            alert('系统繁忙稍后重试')
        })
    }

    function render(data) {
        let str = '';
        data.forEach(item => {
            let { id,name = '', sex = '', email = '', phone = '', department = '', jobId = '', job = '', desc = '' } = item
            str += `<tr>
            ${
                canshow ? '<td class="w3"><input type="checkbox"></td>' : ''
                }
            <td class="w10">${name}</td>
            <td class="w5">${sex == 0 ? '男' : '女'}</td>
            <td class="w10">${department}</td>
            <td class="w10">${job}</td>
            <td class="w15">${email}</td>
            <td class="w15">${phone}</td>
            <td class="w20">${desc}</td>
            ${
                canshow ? `<td class="w12 btnBox">
                <a href="javascript:;">编辑</a>
                <a href="javascript:;" data-id=${id}>删除</a>
                <a href="./reset.html?id=${id}" data-id=${id}>重置密码</a>
                </td>` : ''
                }
        </tr>`
        });
        $tbody.html(str);
    }
    getData()

    // 实现全选功能
    $selectAll.find('input').on('click', function (e) {
        console.log(this.checked)
        console.log($selecItems)
        $selecItems.get().forEach(item => {
            item.checked = this.checked
        })

    })
    function eventBind() {
        // 给所有的删除按钮和重置按钮绑定事件
        $deleteBtns = $('.tableBox tbody .btnBox a:nth-child(2)');
        $resetBtns = $('.tableBox tbody .btnBox a:nth-child(3)');
        $deleteBtns.on('click', function () {
            let ele = this;
            alert('确定删除？', {
                confirm: true,
                handled(type) {
                    if (type == 'CONFIRM') {
                        //怎么告诉后端对应的id
                        // 删除成功以后前端怎么移除 对应的这一条
                        // console.log($(ele).attr('data-id'))
                        deleteFn($(ele).attr('data-id'))
                    }
                }
            })
        })
        $resetBtns.on('click', function () {
            alert()
        })
    }
    function deleteFn(id) {
        axios.get('/user/delete', {
            params: {
                userId: id
            }
        }).then((data) => {
            if (data.code == 0) {
                // 删除成功
            }
        })
    }
})