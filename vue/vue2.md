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
   
    1、for循环更新count数值，dom会被更新100次吗？
    不会，因为queueWatcher函数做了过滤，相同的watcher对象不会被重复添加。
    2、nextTick是如何做到监听dom更新完毕的？
    vue用异步队列的方式来控制DOM更新和nextTick回调先后执行，保证了能在dom更新后在执行回调。
    链接：https://juejin.cn/post/6880710529355251726

6、计算属性computed和watch的区别
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
计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。
值得注意的是“reversedMessage”不能在组件的props和data中定义，否则会报错。

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
而【immediate:true】代表如果在 wacth 里声明了 firstName 之后，就会立即先去执行里面的handler方法
【deep:true】 的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器
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
10、assets和static的区别
答：相同点：assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点 
不相同点：assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。
建议：将项目中template需要的样式文件js文件等都可以放置在assets中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。
11、vue-router导航钩子：
  a、全局导航钩子：beforeEach(to, from, next) 
                  beforeResolve(to, from, next) -全局解析守卫，根beforeEach类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫被调用 （2.5新增）
                  afterEach(to, from)
  b、路由组件上的导航钩子：beforeRouteEnter(to,from,next) -不能获取组件实例this
                         beforeRouteUpdate  beforeRouteLeave
  c、某个路由独享的导航钩子： beforeEnter(to, from, next)

12、单例模式：指在内存中只会创建且创建一次对象的设计模式。
  eg：Vuex和Redux中的Store
  在程序中多次使用同一个对象且作用相同时，为防止频繁地创建对象使得内存飙升，单例模式可以让程序仅在内存中创建一个对象，让所有需要调用的地方都共享这一单例对象。
  两种类型： 
    1）懒汉式：在真正需要使用对象时才去创建该单例类对象
    2）饿汉式：在类加载时已经创建好该单例对象，等待被程序使用
13、watch和created哪个先执行
 如果watch加了 immediate：true，就是watch先执行，否则就是created先执行

14、父子组件生命周期执行顺序：
https://blog.csdn.net/qq3401247010/article/details/81585411
<template>
  <div id="parent">
    <child></child>
  </div>
</template>
父组件beforeCreated
父组件created
父组件beforeMounted
子组件beforeCreated
子组件created
子组件beforeMounted
子组件mounted
父组件mounted

注意：

父组件的mounted是在最后执行的。
因此在子组件的mounted中渲染父组件在mounted阶段请求的数据，是会无反应的。因为子组件mounted渲染数据会发生在父组件mounted请求数据之前。

扩展：[父组件的created和子组件的mounted的执行先后？
执行顺序如下：

父组件 created
子组件 created
子组件 mounted
父组件 mounted
如果有多个子组件：

父组件created钩子结束后，依次执行子组件的created钩子
多个子组件的created执行顺序为父组件内子组件DOM顺序
多个子组件的mounted顺序无法保证，跟子组件本身复杂程度有关
父组件一定在所有子组件结束mounted钩子之后，才会进入mounted钩子

beforeUpdate 父级 数据更新前
updated 父级 组件DOM更新
beforeDestroy 父级 实例销毁前
beforeDestroy 子级
destroyed子级
destroy父级 实例销毁完成

子级数据更新：https://www.cnblogs.com/gqx-html/p/10857119.html
当对子级进行事件处理时，会先触发父级beforeUpdate钩子，再去触发子级beforeUpdate钩子，
下面又是先执行子级updated钩子，后执行父级updated钩子
beforeUpdate 父级
beforeUpdate 子级
updated 子级
updated 父级 组件DOM更新

 /* 1、 深克隆与浅克隆
        浅克隆就是复制一份引用， 所有引用指向同一份数据。
        深克隆就是创造一个完全一样的对象， 将原对象的的所有元素拷贝过来即可。
    */
        function extendClone(oldoObj){
            var newObj = {};
            for (var i in oldObj) {
                newObj[i] = oldObj;
            }
            return newObj;
        }

        function deepClone(org, trg){
            var trg = trg||{};
            for(var prop in org){
                if(org.hasOwnProperty(prop)){
                    if(org[prop]!=="null" && typeof org[prop]==="object"){
                        if(Object.prototype.toString.call(org[prop])=="[object Array]"){
                            trg[prop] = [];
                        }else{
                            trg[prop] = {};
                        }
                        deepClone(org[prop], trg[prop]);
                    }else{
                        trg[prop] = org[prop]
                    }
                }
            }
        };
        var obj = {
            name : 'syy',
            age : 12,
            tabs : [1,2,3,4,5],
            hobbies : {
                a : 'a',
                b : [4,5,6,7],
                c : {
                    d : 'd',
                    e : 'e'
                }
            }
        }
        var obj1 = {};
        deepClone(obj,obj1)
        obj.tabs[0]=100;
        obj.hobbies.c.d="wxy";
        console.log(obj1);

15、Vue的编译过程就是将template转化为render函数的过程

16、MVC、MVP、MVVM
这三者都是框架模式，它们设计的目标都是为了解决Model和View的耦合问题。

ViewModel通过实现一套数据响应式机制自动响应Model中数据变化；
同时ViewModel会实现一套更新策略自动将数据变化转换为视图更新；
通过事件监听响应View中用户交互修改Model中数据。
这样在ViewModel中就减少了大量DOM操作代码。
MVVM在保持View和Model层耦合的同时，还减少了维护他们关系的代码，使用户专注于业务逻辑，兼顾开发效率和可维护性。

17、当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
18、组件外层template设置v-if v-show v-for起作用吗？ 不
后来看了一下vue-loader的文档，发现了这么一段：

模板
每个 .vue 文件最多包含一个 <template>块。
内容将被提取并传递给 vue-template-compiler 为字符串，预处理为 JavaScript 渲染函数，并最终注入到从 <script> 导出的组件中。
意思是，单文件组件的template相当于是一个标明需要交给Vue的渲染函数进行处理的内容范围的占位符，webpack处理的时候会直接提取出最外层template内的内容，忽略掉template这个标签本身，所以写在template上的属性和指令都是没有用的。

那为什么写在里面的template就能用呢？因为这两个根本不是一个东西，只是正好同名了而已。最外面的那个只是一个占位符，里面的则有实际的用途。

总结：组件最外层的template上面的属性和指令不起作用
     内层的template上设key报错：<template> cannot be keyed. Place the key on real elements instead. 应该将key设置到template内实际元素上
     内层template标签不支持v-show 但支持v-if、v-for、v-else、v-else-if
     
19、data为什么是一个函数而不是一个对象？
抽离出的组件有复用性，如果data是一个对象，那么它所有的实例都会共享这些数据。
在js中函数具有独立作用域，外部无法访问其内部变量。
20、new 做了那些事？
描述new一个对象的过程

创建一个新对象
this指向这个新对象
执行代码 对this赋值
返回this

new操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象

1、创建一个空的对象
2、链接到原型
3、绑定this指向，执行构造函数
4、确保返回的是对象 
21、跨域
https://www.imooc.com/article/291931

22、vue的依赖收集在哪个生命周期进行？
23、vue动态路由
24、vue的$set和劫持数组7个方法做了什么（原理）？



  

