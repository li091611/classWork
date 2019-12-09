import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//引入子隐射表
import home from './home'
import notify from './notify'
import vip from './vip'
import user from './user'

import Index from '../views/index.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: home.concat(notify, vip, user)
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
