import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store'
import Vuex from 'vuex'
import router from './router';
// import axios from 'axios'
// Vue.prototype.$http=axios
// start mock 将mock数据隐藏
// import Mock from './mock';
// Mock.bootstrap();

Vue.use(ElementUI)
Vue.use(Vuex)
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')


