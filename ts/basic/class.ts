/**
 *  super关键字用于访问和调用一个对象的父对象上的函数。
 *  TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
 *  public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 *  private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 *  protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 * 1. 当构造函数修饰为 private 时，该类不允许被继承或者实例化：
 * 2. 当构造函数修饰为 protected 时，该类只允许被继承
 */
class Animal {
    private name;
    public constructor(name) {
        this.name = name;
    }
}
// let b = new Animal('Jack');
// b.name  // 报错 name为私有属性

class Cat extends Animal {
    constructor(name) {
        super(name)
        // 使用 private 修饰的属性或方法，在子类中也是不允许访问的
        console.log(this.name);

    }
}

// 1. 当构造函数修饰为 private 时，该类不允许被继承或者实例化
class Animal1 {
    public name;
    private constructor(name) {
        this.name = name;
    }
}
class Cat1 extends Animal1 {  // 该类不允许被继承
    constructor(name) {
        super(name);
    }
}
let c = new Animal1('Jack'); // 该类不允许被实例化

// 2. 当构造函数修饰为 protected 时，该类只允许被继承

class Animal2 {
    public name;
    protected constructor(name) {
        this.name = name
    }
}
class Dog extends Animal2 {
    constructor(name) {
        super(name)
    }
}
let d = new Animal2('R') //该类只允许被继承
let f = new Dog('F')