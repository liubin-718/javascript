1、vue中常用的插件
  * html-webpack-plugin
      插件作用：生成html文件，并且引用相关的 assets 文件(如 css, js)
  * optimize-css-assets-webpack-plugin
      插件作用：压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
  * clean-webpack-plugin
      插件作用：用于在building之前删除你以前build过的文件