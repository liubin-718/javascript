1、用js Array实现一个队列
2、简单写下图片懒加载的例子，可以用HTML和js
3、js去重
4、函数A和函数B，实现B继承A
5、实现一个深拷贝
6、冒泡排序
7、手写ajax


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
// 利用Set数据结构特性
function distinct(arr){
    return Array.from(new Set(arr))
}
4、
// 方法一
function B(){}
function A(){}
B.prototype = new A()
// 方法二：
function A(){}
function B(){
    A.call(this)
}

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



