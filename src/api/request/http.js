/**
 * 通过注册Vue.prototype的方式设置全局使用axios
 */
import Vue from 'vue'
import axios from 'axios'

/**
 *设置axios的基础请求路径
 * @type {string}
 */
axios.defaults.baseURL = 'http://api.taohuaisland.com/api'
/***
 * 设置axios的请求时间
 * @type {number}
 */
axios.defaults.timeout = 8000

/**
 * 是否允许访问带令牌，跨域
 * @type {boolean}
 */
axios.defaults.withCredentials = false

axios.loadData = async function (url) {
  const resp = await axios.get(url)
  return resp.data
}

/**
 * 注册到prototype中，全局Vue实例可以使用该对象
 */
Vue.prototype.$http = axios
