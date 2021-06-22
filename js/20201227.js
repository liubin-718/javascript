/* 
    1、用js Array实现一个队列
    2、简单写下图片懒加载的例子，可以用HTML和js
    3、js去重
    4、函数A和函数B，实现B继承A
    5、实现一个深拷贝
    6、冒泡排序
    7、手写ajax 
*/


1、function Queue(){
    let items=[]
    this.enqueue = function(ele){
        items.push(ele)
    }
    // 移除队列第一项，返回被移除的项
    this.dequeue = function(){
        return items.shift()
    }
    // 返回队列第一个元素
    this.front = function(){
        return items[0]
    }
    // 判断队列是否为空
    this.isEmpty = function(){
        return items.length ==0
    }
    this.size = function(){
        return items.length
    }
    this.print =  function(){
        console.log(items.toString())
    }
}
2、https://juejin.cn/post/6844903688390049800
3、
/* 
单行文本去重
*/
function singleLineDistinct(str){
    str = Array.from(str).reduce((pre, cur)=>( // ***这里使用{}会报错？*****
        pre.match(cur)?pre: pre+cur
    ), '')
    return str
}
/* 
    数组去重
*/
// 利用Set数据结构特性 
function distinct(arr){
    return Array.from(new Set(arr))
}
// 利用对象的属性key唯一的特性去重
function distinch(arr){
    let obj={}
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]]=1
            newArr.push(arr[i])
        }  
    }
    return newArr
}
// 统计出现次数
function distinchN(arr){
    let obj={}
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]++
        }
    }
    return obj
}
// distinchN(['1','a','a',2,3,3,3,4])   
//{1: 1, 2: 1, 3: 3, 4: 1, a: 2}
// includes或indexOf去重
function(arr){
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])){ 
        // if(newarr.indexOf(arr[i])<0){
            newArr.push(arr[i])
        }        
    }
    return newArr
}
4、https://www.cnblogs.com/qing-5/p/11365614.html
// 方法一 原型链实现继承
function B(){}
function A(){}
B.prototype = new A()
// 方法二： 借用构造函数实现继承
function A(){}
function B(){
    // A.call(this);“借调”了超类型的构造函数。通过使用call()方法（或者apply()方法），在新创建的 B 实例的环境下调用了A构造函数。
    // 这样一来就会在新的B对象上执行A()函数中定义的所有对象初始化代码。结果，B的每个实例都会有自己的colors属性副本
    A.call(this)
}
// 三、组合继承
// 四、原型式继承

5、
function deepClone(obj) {
    if (!source && typeof obj !== 'object') {
        throw new Error('error arguments')
    }
    const targetObj = obj.constructor == Array ? [] : {}
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            targetObj[key] = deepClone(obj[key])
        } else {
            targetObj[key] = obj[key]
        }
    })
    return targetObj
}
6、
function bubbleSort(arr){
    const len = arr.length-1
    for(let i=0; i<len; i++){
        for(let j=0;j<len-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                // [arr[j+1],arr[j]]=[arr[j],arr[j+1]]  
                // 等同于下面三句
                // const temp=arr[j+1]
                // arr[j+1]=arr[j]
                // arr[j]=temp
            }
        }
    }
    return arr
}
7、
const xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP')
xhr.open('GET', url, true)
xhr.send(null)
xhr.onreadystatechange = function(){
    if(xhr.status==200 && xhr.readyStates==4){
        console.log(xhr.stateText)
    }
}



/*
 *reduce用法： 
 *reduce(fn(total, curv, curIndex, arr), initialV)
 *将数组按一定规则转为对象，也可将一种形式的数组转为另一种形式数组
 */
// 1、统计字符出现的次数
const chartsNum = (str)=>{
    return str.split('').reduce((res, cur)=>{
        res[cur] ? res[cur]++ : res[cur] = 1
        return res
    },{})
}
const str='abcdabc'
chartsNum(str) // {a: 2, b: 2, c: 2, d: 1}
// 2、数组扁平化
const newArr = (arr)=>{
    return arr.reduce((res, cur)=>( // ****使用{}会报错？**********
        res.concat(Array.isArray(cur) ? newArr(cur) : cur)
    ), [])
}
arr=[1,2,[3,[4,5]]]
newArr(arr) // [1, 2, 3, 4, 5]

/* 
* 函数柯里化   
*函数参数个数不定长
*/
// 实现 add(1)(2)(3)=6  add(1,2,3)(4)=10
function add(...args) {
    const fn = function (...newArgs) {
        args.push(...newArgs)
        return fn
    }
    fn.toString = function () {
        return args.reduce((a, b) => a + b)
    }
    return fn
}
// 柯里化
function currying(fn, ...args){
    if(args.length >= fn.length){
        return fn(...args)
    }
    return function(...newArgs){
        return currying(fn, ...args, ...newArgs)
    }
}

// https://juejin.cn/post/6911565511226556430
var a=?
if(a==1&&a==2&&a==3){
    console.log('hello')
}
// 方法一： 利用对象的类型转换
var a={
    num:1,
    toString:function (){
        return a.num++
    }
}
// 方法二：利用数组的取值和类型转换
var a=[1,2,3,4]
a.join=a.shift





