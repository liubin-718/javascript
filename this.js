/**
    * 1、this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined）
    * 2、箭头函数内部的this总是指向定义时所在的对象
    */
class Logger {
    printName(name = 'Jack') {
        this.print(`Hello ${name}`)
    }
    print(txt) {
        console.log(txt);
    }
}
const logger = new Logger()
const { printName } = logger
printName() //  TypeError: Cannot read property 'print' of undefined
// 上面代码中，printName方法中的this，默认指向Logger类的实例。但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。
// 修改：
class Logger1 {
    // 在构造方法中绑定this，这样就不会找不到print方法
    constructor() {
        this.printName1 = this.printName1.bind(this)
    }
    printName1(name = 'Jack') {
        this.print1(`Hello ${name}`)
    }
    print1(txt) {
        console.log(txt);
    }
}
const logger1 = new Logger1()
const { printName1 } = logger1
printName1()


/* 1、在浏览器里，在全局范围内this指向window对象；
2、在函数中，this永远指向最后调用他的那个对象；
3、构造函数中，this指向new出来的那个新的对象；
4、call、apply、bind中的this被强绑定在指定的那个对象上；
5、箭头函数中this比较特殊，箭头函数this为父作用域的this，不是调用时的this。要知道前四种方式都是调用时确定，
也就是动态的，而箭头函数的this指向的是静态的，生命的时候就确定下来。
6、apply、call、bind都是js给函数内置的一些api，调用他们可以为函数指定this的执行，同时也可以传参。 */
const data = {
    result: 0,
    nums: [1, 2, 3, 4, 5],
    computeResult() {
        // 这里的this指的是data对象
        const addAll = () => {
            return this.nums.reduce((total, cur) => total + cur, 0)
        }
        this.result = addAll()
    },
}
// 箭头函数没有自己的this，它捕获词法作用域函数的this值，在此示例中，addAll函数将复制computeResult方法中的this值，
// 如果我们在全局作用域声明箭头函数，则this值为window对象。


