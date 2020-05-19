// 1、任意值 any
// -在任意值上访问任何属性都是允许的
// -变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let anything: any = 'hello'
// 2、 联合类型
// -当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
let unionTypes: string | number
unionTypes = 'a'
unionTypes = 9;
unionTypes.length // length不是共有属性
unionTypes.toString()
// 3、字符串、数值、布尔值
// -使用构造函数 Boolean 创造的对象不是布尔值：
// let createdByNewBoolean: boolean = new Boolean(1); // 报错
let createdByBoolean: boolean = Boolean(1);
let isDone: boolean = false
let number: number = 4
let myname: string = 'hello'
// 4、空值 void
// -用 void 表示没有任何返回值的函数
// -声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
function alertName(): void {
    alert('My name is rose')
}
let unusable: void = undefined
// 5、Null和 Undefined
// -使用 null 和 undefined 来定义这两个原始数据类型
// -与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let u: undefined = undefined
let n: null = null
let num: number = u
let uu: void
// let num: number = uu  void 类型的变量不能赋值给 number 类型的变量  报错

// 6、对象的类型 --接口：interface
/** 
 * -接口一般首字母大写
 * -定义的变量比接口少了一些属性是不允许的
 * -多一些属性也是不允许的
 * -赋值的时候，变量的形状必须和接口的形状保持一致
    */
interface Person2 {
    name: string;
    age: number;
}
let tom: Person2 = {
    name: 'Tom',
    age: 16,
    // gender: 'male'
}
// 多了gender后者少了age，会报错
// 6-1、可选属性  -该属性可以不存在; -仍然不允许添加未定义的属性
interface Person3 {
    name: string;
    age?: number;
}
// 6-2 任意属性
/**
 * a.一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
 * b.一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
 * 
 *   */
interface Person4 {
    name: string;
    age?: number;
    [propName: string]: any; // a.此处any更换为string或者number都会报错
}
let tom1: Person4 = {
    name: 'Tom',
    gender: 'male'
}

interface Person5 { // b.
    name: string;
    age?: number;
    [propName: string]: string | number;
}
let tom2: Person5 = {
    name: 'Tom',
    age: 23,
    gender: 'male'
}

// 6-3 只读属性
/* 
*
*/
interface Person6 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let jack: Person6 = {
    id: 8848,
    name: 'jack',
    age: 25,
    gender: 'male'
}
jack.id = 9526
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

let rose: Person6 = {
    name: 'jack',
    age: 25,
    gender: 'male'
}
rose.id = 8895

// 上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。
// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了

// 7、数组类型 ：a.类型 + 方括号  b. 数组泛型 Array<number> 
let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];
// c. 用 any 表示数组中允许出现任意类型
let arr: any[] = [1, 'a', { b: 3 }]

// 8、函数
/**
 * a. 输入多余的（或者少于要求的）参数，是不被允许的
 * 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
 * b. 可选参数 sum(x:number, y?: number) 
 * 可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
 * c. 默认参数： TypeScript 会将添加了默认值的参数识别为可选参数,此时就不受「可选参数必须接在必需参数后面」的限制了
 * d. 剩余参数
    */
// 1). 函数声明
function sum(x: number, y: number): number {
    return x + y
}
// sum(9)
// 2). 函数表达式
let mySum = function (x: number, y: number): number {
    return x + y
}
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
// 如果需要我们手动给 mySum1 添加类型，则应该是这样：
let mySum1: (x: number, y: number) => number = function (x: number, y: number): number { return x + y }

// c. 默认参数：
function bulidName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName
}
let tomcat = bulidName('Tom', 'Cat')
let cat = bulidName(undefined, 'Cat')

// d. 剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3);