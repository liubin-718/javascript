// ES5创建类：新建一个构造函数，定义一个方法并且赋值给构造函数的原型
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayName = function () {
    console.log(this.name);
}
const p = new Person('jock', 13)
p.sayName()
// ES6 的class可以看作只是一个语法糖：实现类很简单，只需要类声明
class Person1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayAge() {
        console.log(this.age);
    }
}
let p1 = new Person1('lucy', 18)
p1.sayAge()
let p2 = new Person1('rose', 20)

// 与 ES5 一样，类的所有实例共享一个原型对象, 这也意味着，可以通过实例的__proto__属性为“类”添加方法。
// 生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。
// 新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。
p1.__proto__.printName = function () {
    console.log(this.name);
}
p1.printName()
p2.printName()


/**
 *  Class 
 * https://es6.ruanyifeng.com/#docs/class
    */
// 1、静态方法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用
class Foo {
    static classMethod() {
        console.log('静态方法 hello')
    }
}
Foo.classMethod()
new Foo().classMethod() // TypeError: (intermediate value).classMethod is not a function


// promise手写实现，面试够用版
function myPromise(constructor) {
    let self = this
    self.status = 'pending' //定义状态前的初始状态
    self.value = undefined  //定义状态为resolve的时候的状态
    self.reason = undefined // 定义状态为reject的时候的状态
    function resolve(value) {
        // 两个==='pending',保证了状态的改变是不可逆的
        if (self.status === 'pending') {
            self.value = value
            self.status = 'resolved'
        }
    }
    function reject(reason) {
        // 两个==='pending',保证了状态的改变是不可逆的
        if (self.status === 'pending') {
            self.reason = reason
            self.status = 'rejected'
        }
    }
    // 捕获构造异常
    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e)
    }
    // 定义链式调用的then方法
    myPromise.prototype.then = function (onFullfilled, onRejected) {
        let self = this
        switch (self.status) {
            case 'resolved':
                onFullfilled(self.value)
                break;
            case 'rejected':
                onRejected(slef.value)
            default:
                break;
        }
    }
}