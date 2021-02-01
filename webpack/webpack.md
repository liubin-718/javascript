1、vue中常用的插件
  * html-webpack-plugin
      插件作用：生成html文件，并且引用相关的 assets 文件(如 css, js)
  * optimize-css-assets-webpack-plugin
      插件作用：压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
  * clean-webpack-plugin
      插件作用：用于在building之前删除你以前build过的文件
2、打包优化：
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
3、Loader和Plugin的区别？
    不同的作⽤: Loader直译为"加载器"。Webpack将⼀切⽂件视为模块，但是webpack原⽣是只能解析js⽂件，如果想将其他⽂件
    也打包的话，就会⽤到 loader 。 所以Loader的作⽤是让webpack拥有了加载和解析⾮JavaScript⽂件的能⼒。
    Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运⾏的⽣命
    周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

    不同的⽤法: Loader在 module.rules 中配置，也就是说他作为模块的解析规则⽽存在。 类型为数组，每⼀项都是⼀
    个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）
    Plugin在 plugins 中单独配置。 类型为数组，每⼀项是⼀个 plugin 的实例，参数都通过构造函数传⼊。
4、babel原理
    babel 的转译过程也分为三个阶段，这三步具体是：
    1.解析 Parse: 将代码解析⽣成抽象语法树( 即AST )，即词法分析与语法分析的过程
    2.转换 Transform: 对于 AST 进⾏变换⼀系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进⾏遍历，在
    此过程中进⾏添加、更新及移除等操作
    3.⽣成 Generate: 将变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator

webpack 安装依赖cross-env