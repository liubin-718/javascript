# web-javascript

1.将utils下的js文件 将api注册到Vue全局 (main.js)
import 'babel-polyfill'
import Vue from 'vue'
import * as util from './utils'
Object.keys(util).forEach((fun)=>{
    Vue.prototype[`$${fun}`] = util[fun]
})

1、在函数中，this永远指向最后那个调用他的那个对象 （动态的）
  --小心闭包中更改this的指向
2、箭头函数this为父作用域的this，不是调用时的this （静态的）
3、微任务：promise回调、process.nextTick（node）、对DOM变化监听的MutationObserve（H5新特性）
   宏任务：script脚本执行、setTimeout、setInternal、setImmediate
   --在一个异步流程里，setImmediate会比定时器先执行
   备注：process.nextTick发生在所有异步任务之前
4、想想我们开始那个2秒定时器的执行流程：
主线程执行同步代码
遇到setTimeout，将它交给定时器线程
定时器线程开始计时，2秒到了通知事件触发线程
事件触发线程将定时器回调放入事件队列，异步流程到此结束
主线程如果有空，将定时器回调拿出来执行，如果没空这个回调就一直放在队列里。

https://www.cnblogs.com/dennisj/p/12550996.html
主线程每次执行时，先看看要执行的是同步任务，还是异步的API
同步任务就继续执行，一直执行完
遇到异步API就将它交给对应的异步线程，自己继续执行同步任务
异步线程执行异步API，执行完后，将异步回调事件放入事件队列上
主线程手上的同步任务干完后就来事件队列看看有没有任务
主线程发现事件队列有任务，就取出里面的任务执行
主线程不断循环上述流程

configureWebpack
Type: Object | Function

如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。

如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
————————————————
原文链接：https://blog.csdn.net/playboyanta123/article/details/103528594

