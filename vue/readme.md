1、vue为什么要求组件模板只能有一个根元素
 如果多个根，那么就会产生多个入口（遍历，查找）从效率上说不方便。其次真有多入口是可以优化的，它必定有子节点
 此子节点就成为了新根节点，从vue的角度来说，如果一个组件有多个根，说明可以把这个组件拆分成两个组件，这样既解耦，
 后续也好维护。一个new Vue()就是一个组件根节点的实例。
2、vue性能优化
 a、路由懒加载
 b、get请求的列表数据展示，不会变化，this.listData=Object.freeze(listData)
 c、图片懒加载：对于图片过多的页面，为了加速页面加载速度，很多时候我们需要将页面内未出现在可视区域的图片
    先不做加载，等到滚动到可视区域后再去加载
    <img v-lazy="/static/img/1.png">
    参考项目 vue-lazyload
    原理：等到滚动到指定的位置时，再将img的src指向位置。
d、无状态的组件(只展示)标记为函数式组件：<template functional></template>
e、第三方插件按需引入：像element-ui
f、如果是大数据列表，可采用虚拟滚动，只渲染少部分区域内容。 vue-virtual-scroller  vue-virtual-scroll-list
g、子组件分割： 比如组件中有比较耗时任务，把它切割出来，这样就只渲染它自己了，不分割出来会渲染全部
h、变量本地化
3、vue3.0新特性了解
  更快： 
    虚拟DOM重写   (编译器方面优化)
    优化slots的生成   -减少不必要的重新渲染
    静态树提升      降低渲染成本  内存换时间
    静态属性提升
    基于proxy的响应式系统
  更小：
    通过摇树优化核心库体积   -打包后不需要的库，通过摇数使体积变小
  更容易维护：
    TypeScript+模块化  -错误提示更强劲
  更加友好：
    跨平台：编译器核心和运行时核心与平台无关，使得vue更容易与任何平台（Web、Android、ios）一起使用
  更容易使用：
    改进的TypeScript支持，编译器提供强有力的类型检查和错误及警告
    更好的调试支持
    独立的响应化模块
    Composition API
4、vue想扩展现有的组件
  a、使用Vue.mixin全局混入
     Vue.mixin({
         updated:function(){
             console.log('全局混入')
         }
     })
     组件内混入 mixins:[addLog]
    mixins的调用顺序：从执行的先后来说，混入对象的钩子将在组件自身之前调用，如果遇到全局
    混入（Vue.mixin），全局混入的执行顺序要前于混入和组件里的方法。
  b、加slot扩展
    slot用来获取组件中的原内容
5、nextTick：它可以在DOM更新完毕后执行一个回调
  for(let i=0;i<100;i++>){
      dom.style.left=i+'px'
  }
  事实上，这100次for循环同属一个task，浏览器只在该task执行完后进行一次DOM更新
  只要让nextTick里的代码放到UI render步骤后执行，就可以访问到更新后的DOM
  实现原理：
   1).vue用异步队列的方式来控制DOM更新和nextTick回调先后执行
   2).microtask因为其高优先级特性，能保证队列中的微任务在一次事件循环前被执行完毕
   3).因为兼容性问题，vue不得不做了microtask向macrotask的降级方案
6、计算属性和watch的区别
  vue中watch的高级用法：  https://juejin.im/post/5ae91fa76fb9a07aa7677543
  1.computed是计算属性，类似于过滤器,对绑定到视图的数据进行处理,并监听变化进而执行对应的方法，官网的例子：
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
结果：
Original message: "Hello"
Computed reversed message: "olleH"
复制代码计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。值得注意的是“reversedMessage”不能在组件的props和data中定义，否则会报错。

假设有如下代码：
<div>
      <p>FullName: {{fullName}}</p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
</div>

new Vue({
  el: '#root',
  data: {
    firstName: 'Dawei',
    lastName: 'Lou',
    fullName: ''
  },
  watch: {
    firstName(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    }
  } 
})
上面的代码的效果是，当我们输入firstName后，wacth监听每次修改变化的新值，然后计算输出fullName。
而immediate:true代表如果在 wacth 里声明了 firstName 之后，就会立即先去执行里面的handler方法
deep:true 的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器
7、组件通信
 a、父传递子
父：自定义属性名 + 数据（要传递）=> :value=“数据”
子：props ["父组件上的自定义属性名“] =>进行数据接收)
子传递父
在父组件中注册子组件并在子组件标签上绑定自定义事件的监听。
子：this.$emit(‘自定义事件名称’, 数据) 子组件标签上绑定@自定义事件名称=‘回调函数’
父：methods: {自定义事件() {//逻辑处理} }
b、兄弟组件
通过中央通信 let bus = new Vue()
A：methods :{ 函数{bus.$emit(‘自定义事件名’，数据)} 发送
B：created （）{bus.$on(‘A发送过来的自定义事件名’，函数)} 进行数据接收

8、vue.js的两个核心是什么？
  数据驱动、组件系统
9、Vue的路由模式,实现方式？

hash模式 和 history模式
hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；
特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。
hash 模式下:仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。
history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。
history 模式:前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。Vue-Router 官网里如此描述：“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”



  

