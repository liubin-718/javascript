
1.CommonJS的模块只有一个唯一的出口, 那就是module.exports对象
CommonJS的三大特点(定义, 引入, 标识),
# 必须要知道的CommonJS和ES6 Modules规范
# https://zhuanlan.zhihu.com/p/27644026

对比：
a、CommonJS是在运行时才确定引入, 然后执行这个模块, 相当于是调用一个函数, 返回一个对象
b、而ES6 Module是语言层面的, 导入导出是声明式的代码集合. 声明式的意思就是说, 直接利用关键字声明说我要导入/导出一个模块啦, 而不是粗鄙(节目效果)地将一个对象赋值给一个变量, 例如
import {a, b} from './moduleName'
再看看不是声明式的例子
let a = require('moduleName')

1.3 模块的标识

模块的标识, 指在require('moduleName')一个模块, 如何根据传入的参数找到这个模块. 这个模块标识主要有以下几种类型:
1. 是符合"小驼峰"式命名法的字符串. (从node_modules/系统模块中引入)
2. 以'.' 或 '..' 开头相对路径模块(相对当前目录引入)
3. 绝对路径(例如/var/www等绝对路径)
需要提到的一小点是, 文件后缀名".js"可以省略.

Node对CommonJS的实现, 主要可以分为以下三点:

1. 模块路径分析
2. 模块定位
3. 模块编译(略)
我们知道, 要确定一个文件的绝对位置, 需要 path + filename, 形如C:\\Users\\tinycold\\Desktop\\demo\\node\\node_modules\\index.js这样一个文件, C:\\Users\\tinycold\\Desktop\\demo\\node\\node_modules\\就是path, index.js是filename.
模块路径分析, 就是找出path, 而文件定位, 就是确定filename. 通过路径分析和文件定位, 就能确定要引入的模块的绝对位置. 然后进行模块的编译, 这里就不展开细说了, 有兴趣的可以自行查阅资料.

我们可以再深入一些, 看看Node是如何做路径分析和文件定位的.
路径分析:
我们之间说过, CommonJS有一个重点, 是模块标识符. 这个标识符指的就是传入require方法的参数. 模块路径分析会分析这个参数, 确定这个模块属于以下哪一类模块
- 核心模块(Node自带的模块)
- 路径模块(相对或绝对定位开始的模块)
- 自定义模块(node_modules里的模块)
如果是核心模块, 直接跳过路径分析和文件定位, 路径模块就直接得出相对位置就好啦. 

首先, 他会在当前目录的node_modules里找这个模块, 如果找不到(当前目录的node_modules里没有, 或者根本就有node_modules目录), 那么他会往上一级目录走, 查找上一层目录的node_modules. 依次往下, 直到根目录下都没有, 就抛出错误.

文件定位:

路径分析已经得出了模块的path, 下一步是得出模块的filename. 为什么不直接用模块标识符里的文件名呢? 因为准确地说, 模块标识符里并不包含文件名, 因为扩展名可以省略, 更坑爹的是, 你可以传入一个目录名, 形如: require('connect')这样.
在NodeJS中, 省略了扩展名的文件, 会依次补充上.js, .node, .json来尝试, 如果传入的是一个目录, 那么NodeJS会把它当成一个包来看待, 会采用以下方式确定文件名
第一步, 找出目录下的package.json, 用JSON.parse()解析出main字段
第二步, 如果main字段指定的文件还是省略了扩展, 那么会依次补充.js, .node, .json尝试.
第三部, 如果main字段制定的文件不存在, 或者根本就不存在package.json, 那么会默认加载这个目录下的index.js, index.node, index.json文件.
以上就是文件定位的过程, 再搭配上路径分析的过程, 进行排列组合, 这得有多少种可能呀. 所以说, 自定义模块的引入, 是最费性能的.
