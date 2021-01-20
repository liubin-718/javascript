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
        this.status=PINDING
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