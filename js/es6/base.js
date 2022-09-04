/* 
* 基础 promise实现
*/

/* promise有三个状态：pending，fulfilled，rejected。
    new Promise时，需要传递一个executor()执行器，执行器立即执行。
    executor接受两个参数，分别是resolve和reject。
    promise的默认状态是pending。
    promise有一个value保存成功状态的值，可以是undefined/thenable/promise。
    promise有一个reason保存失败状态的值。
    promise只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变。
    promise 必须有一个then方法，then接收两个参数，分别是promise成功的回调onFulfilled, 和promise失败的回调onRejected。
    如果调用then时，promise已经成功，则执行onFulfilled，参数是promise的value。
    如果调用then时，promise已经失败，那么执行onRejected, 参数是promise的reason。
    如果then中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调onRejected。

作者：全栈然叔
https://juejin.cn/post/6897911460656070669#heading-7
*/

class EasyPromise{
    constructor (executor){
        this.status=PENDING
        this.value=undefined
        this.reason=undefined
        this.onResolvedCb=[]
        this.onRejectedCb=[]
        // 成功调用
        const resolve=(value)=>{
            // 状态为PENDING时才可以更新状态，防止executor中调用两次resolve/reject方法
            if(this.status===PENDING){
                this.status=FULFILLED
                this.value=value
                // 依次执行对应的函数
                this.onResolvedCb.forEach(fn=>fn())
            }
        }
        // 失败调用
        const reject=(reason)=>{
            if(this.status===PENDING){
                this.status=REJECTED
                this.reason=reason
                this.onRejectedCb.forEach(fn=>fn())
            }
        }
        try {
            // 立即执行，将resolve和reject函数传给使用者
            executor(resolve,reject)
        } catch (error) {
            // 发生异常
            reject(error)
        }
    }

    // 包含一个then方法，并接受两个参数onFulfilled，onRejected
    then(onFulfilled,onRejected){
        if(this.status===FULFILLED){
            onFulfilled(this.value)
        }else if(this.status===REJECTED){
            onRejected(this.reason)
        }else if(this.status===PENDING){
            // 如果状态为PENDING，需将onFulfilled和onRejected函数存放起来
            // 等状态确定后，再依次执行对应的函数
            this.onResolvedCb.push(()=>{onFulfilled(this.value)})
            this.onRejectedCb.push(()=>{onRejected(this.reason)})
        }
    }
}

/* 
* async await 用同步方式，执行异步操作  语法糖，用迭代函数 generator 实现
*总结一下 async/await 的知识点
* await只能在 async 函数中使用，不然会报错
* async 函数返回的是一个状态为 fulfilled 的 Promise 对象，有无值看有无 return 值
* await 后面只有接了 Promise 才能实现排队效果
* async/await 作用是用同步方式，执行异步操作
*/
// 需求：请求完接口1，再去请求接口2
function request(num){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num*2)
        }, 1000)
    })
}
request(2).then(res1 => {
    console.log(res1) // 1秒后输出4
    request(res1).then(res2 => {
        console.log(res2) //2秒后输出8
    })
})

// 上面这种写法，当嵌套多了就难看了
async function fn(){
    const res1 = await request(2)
    const res2 = await request(res1)
    console.log(res2) //2秒后输出8
}
fn()

/* 
* generator 函数  yield是 generator 函数执行中途暂停，通过 next 方法继续执行，next() 返回对象{value: undefined, done: false}
* 当 yield 后面接函数时，到了暂停点 yield ，会立即执行函数，函数的返回值会被当做此暂停点对象的 value
* value：暂停点后面接的值，也就是yield后面接的值
* done：是否generator函数已走完，没走完为false，走完为true
*/
function* fn(){
    yield 1
    yield 2
    yield 3
}
const g = fn()
console.log(g.next())  // {value:1, done: false}
console.log(g.next())  // {value:2, done: false}
console.log(g.next())  // {value:3, done: false}
console.log(g.next())  // {value:undefined, done: true}

// yield 后面接函数

function fn(num){
    console.log(num)
    return num
}
function* gen(){
    yield fn(1)
    return 3
}
const g = gen()
console.log(g.next()) // {value:1, done: false}
console.log(g.next()) // {value:3, done: true}

// yield 后面接Promise
function fn(num){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num)
        }, 1000)
    })
}
function* gen(){
    yield fn(1)
    yield fn(2)
    return 3
}
const g = gen()
console.log(g.next()) // {value: Promise{<pending>}, done: false} pending状态的Promise对象
console.log(g.next()) // {value: Promise{<pending>}, done: false}
console.log(g.next()) // {value: 3, done: true}
const n = g.next()
n.value.then(res1 => {
    console.log(n) //  { value: Promise , done: false }
    console.log(res1)  // 1
})

/*  
* next 函数传参 
* generator函数可以用next方法来传参，并且可以通过yield来接收这个参数，注意两点
* 第一次next传参是没用的，只有从第二次开始next传参才有用
* next传值时，要记住顺序是，先右边yield，后左边接收参数
*/
function* gen(){
    const n1 = yield 1
    console.log('n1',n1)
    const n2 = yield 2
    console.log('n2',n2);
    return 3
}
const g = gen()
console.log(g.next());  // {value:1, done: false}
console.log(g.next(111)); // n1 111  {value:2, done: false}
console.log(g.next(222)); // n2 222  {value:3, done: true}