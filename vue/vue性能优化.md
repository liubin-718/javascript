19.你都做过哪些Vue的性能优化？
编码阶段：
1、尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
2、v-if和v-for不能连用如果需要使用v-for给每项元素绑定事件时使用事件代理
3、SPA 页面采用keep-alive缓存组件
4、在更多的情况下，使用v-if替代v-show
5、key保证唯一
 /*vFor key避免使用index作为标识*/
 当index作为标识的时候，插入一条数据的时候，列表中它后面的key都发生了变化，那么当前的 vFor 都会对key变化的 Element 重新渲染，
 但是其实它们除了插入的 Element 数据都没有发生改变，这就导致了没有必要的开销。所以，尽量不要用index作为标识，
 而去采用数据中的唯一值，如 id 等字段。

6、使用路由懒加载、异步组件
    路由懒加载的方式有两种:
    // require法
    component: resolve=>(require(['@/components/HelloWorld'],resolve))
    // import
    component: () => import('@/components/HelloWorld')

7、防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。（多次点击按钮）
   节流：指定时间间隔内只会执行一次任务。（scroll）
8、第三方模块按需导入: Element ， And Design 等UI框架
9、长列表滚动到可视区域动态加载: vue-virtual-scroller 库等
10、图片懒加载
 /*图片合理的优化方式*/
 当我们页面中DOM中存在大量的图片时，难免不会碰到一些加载缓慢的问题，导致图片出现加载失败的问题。
 网络上大部分都在使用 懒加载 的使用方式，只有当 存在图片的DOM 出现在页面上才会进行图片的加载，
 无形中起到了分流的作用，下面就说一套实践的方案吧:
    小图标使用 SVG 或者字体图标
    通过 base64 和 webpack  的方式加载小型图片
    能通过cdn加速的大图尽量用cdn
    大部分框架都带有懒加载的图片，不要嫌麻烦，多花点时间使用它

SEO优化：
预渲染、服务端渲染SSR（Nuxt.js）

打包优化：
1、压缩代码
2、Tree Shaking/Scope Hoisting: 使用 Tree-Shaking 插件可以将一些无用的沉淀泥沙代码给清理掉
3、使用cdn加载第三方模块: 将 Vue Axios Echarts 等等都分离了出来，在正式环境下，通过CDN
4、图片资源压缩: 通过 image-webpack-loader 插件对打包的图片进行压缩，看起来会对图片的加载有一些提升
5、多线程打包happypack
6、splitChunks抽离公共文件
7、打包公共代码: 在 webpack4 中，可以通过 optimization.minimize 将公共代码进行打包，虽然我个人认为这个东西对SPA应用来说，
    效果其实有限，但有胜于无，文字再小也是肉不是，所以说，在细节的把控上，永远是无止境的。但是在webpack4中也是将
    CommonsChunkPlugin 改用 SplitChunksPlugin 了
    commons-chunk-plugin vs split-chunks-plugin
    即webpack的分包插件。CommonsChunkPlugin于4.0及以后被移除，使用SplitChunksPlugin替代。
    CommonsChunkPlugin（基于父子关系）：只能统一抽取到父chunk，造成父chunk过大，不可避免的存在重复引入，引入多余代码
    /*
    *    https://www.jianshu.com/p/ece902324ff7
    */
8、sourceMap优化

用户体验：
骨架屏、PWA
还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等


链接：https://juejin.im/post/5e649e3e5188252c06113021
链接：https://juejin.im/post/5f0f1a045188252e415f642c
