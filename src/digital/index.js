/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2021-11-24 13:37:10
 * @LastEditors: lc
 * @LastEditTime: 2021-11-24 14:24:17
 */
import Digital from './digital'
console.log(Digital)
const DigitalObj = {}
DigitalObj.install = (Vue) => {
    if(DigitalObj.install.installed) return
    Vue.component(Digital.name, Digital)
}
if(typeof window != 'undefined' && window.Vue) {
    DigitalObj.install(window.Vue)
}

export default DigitalObj