/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2021-11-24 13:34:50
 * @LastEditors: lc
 * @LastEditTime: 2021-11-24 14:21:59
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import digital from './digital'
Vue.use(digital)
new Vue({
  render: h => h(App),
}).$mount('#app')
