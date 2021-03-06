// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './api/request/http' // 将http注册到main.js
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/taohuadaoIconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  'el': '#app',
  router,
  'components': {App},
  'template': '<App/>'
})
