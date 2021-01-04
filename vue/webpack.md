1、vue中常用的插件
  * html-webpack-plugin
      插件作用：生成html文件，并且引用相关的 assets 文件(如 css, js)
  * optimize-css-assets-webpack-plugin
      插件作用：压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
  * clean-webpack-plugin
      插件作用：用于在building之前删除你以前build过的文件
2、
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



webpack 安装依赖cross-env