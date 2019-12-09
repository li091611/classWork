<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/home">
          <i></i>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/vip">
          <i></i>
          <div>会员</div>
        </router-link>
      </div>
      <div>
        <i></i>
        <div>+</div>
      </div>
      <div>
        <router-link to="/notify">
          <i></i>
          <div>通知</div>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i></i>
          <div>{{loginState?'我的':'未登录'}}</div>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["loginState"])
  }
};
</script>

<style lang="less" scoped>
//scoped只对当前模板起作用
.navBox {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    text-align: center;
    > a {
      text-decoration: none;
      color: #333;
      display: block;
      width: 100%;
      height: 100%;
      i {
        font-size: 7vw;
        font-weight: 800;
      }
      div {
        font-size: 5vw;
      }
    }
    a.router-link-active {
      color: aquamarine;
    }
  }
}
</style>