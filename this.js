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


