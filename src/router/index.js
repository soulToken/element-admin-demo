
import Vue from 'vue'

import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Main from '../pages/Main.vue'
import Table from '../pages/nav1/Table.vue'
import Form from '../pages/nav1/Form.vue'
import user from '../pages/nav1/user.vue'
import Page4 from '../pages/nav2/Page4.vue'
import Page5 from '../pages/nav2/Page5.vue'
import Page6 from '../pages/nav3/Page6.vue'
import echarts from '../pages/charts/echarts.vue'
// import axios from 'axios'
Vue.use(VueRouter)
NProgress.configure({ showSpinner: false });
const routes = [
    {
      path: '/login',
      name:'login',
      component: Login,
      hidden: true//不显示在导航中
    },
    //{ path: '/main', component: Main },
    {
      path: '/',
      component: Home,
      name: '国外艾灸',
      iconCls: 'el-icon-menu',//图标样式class
      children: [
        //{ path: '/main', component: Main },
        { path: '/table', component: Table, name: '用户列表' },
        { path: '/form', component: Form, name: '穴位' },
        { path: '/user', component: user, name: '症状' },
      ]
    }
  ]

 const router=new VueRouter({
    routes
  })
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
  })
  
  router.afterEach(transition => {
    NProgress.done();
  });
  export default router