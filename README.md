# web-javascript

1.将utils下的js文件 将api注册到Vue全局 (main.js)
import 'babel-polyfill'
import Vue from 'vue'
import * as util from './utils'
Object.keys(util).forEach((fun)=>{
    Vue.prototype[`$${fun}`] = util[fun]
})
