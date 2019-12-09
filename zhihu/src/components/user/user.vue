<template>
  <div class="inBox">
    <header>
      <input type="text" />
      <span>扫描</span>
      <span @click="change">{{loginState ? '退出' : '登录'}}</span>
    </header>
    <in v-if="loginState"></in>
    <no-in v-else></no-in>
  </div>
</template>

<script>
import { mapState } from "vuex";
import In from "./in.vue";
import NoIn from "./noin";
export default {
  data() {
    return {};
  },
  methods: {
    change() {
      if (this.loginState) {
        localStorage.removeItem("token");
        this.$store.commit("stateChange", { loginState: false });
      } else {
          this.$router.push('/login')
      }
    }
  },
  components: {
    in: In,
    "no-in": NoIn
  },
  computed: {
    ...mapState(["loginState"])
  }
};
</script>

<style lang="scss" scoped>
</style>