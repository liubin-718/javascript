#!/usr/bin/env node
// 1、寻找字符串中出现次数最少，并且首次出现位置最前的字符
var str = [].reduce.call('cbaacfdeaebb', (p, n) => {
    return p[n] = (p[n] || 0) + 1, p;
}, {})
var s = Object.keys(str).reduce((p, n) => {
    return str[p] <= str[n] ? p : n
})
console.log(s, str[s]); //f,1

// 方法二
var str1 = 'cbaacfdeaebb'.split('').reduce((allItems, item) => {
    allItems[item] = (allItems[item] || 0) + 1
    return allItems
}, {})
console.log(str1);
// 备注： return p[n] = (p[n] || 0) + 1, p;是两句代码的简写 p[n] = (p[n] || 0) + 1; return p

/* 2、数组扁平化（数组降维） */
var list1 = [[0, 1], [2, [3, [4]]]]
function flatten(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatten(val) : val)
    }, [])
}
// console.log(flatten(list1));

function isObj(v) {
    return v !== null && typeof v === 'object'
}
function isFun(v) {
    return toString.call(v) === '[object Function]'
}
function isBlob(v) {
    return toString.call(v) === '[object Blob]'
}
function trim(v) {
    return v.replace(/^\s*/, '').replace(/\s*$/, '')
}

// 3、实现Array.prototype.map
// map()方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
function map(arr, mapCb) {
    // 检查传参
    if (!Array.isArray(arr) || !arr.length || typeof mapCb !== 'function') {
        return []
    } else {
        let result = []
        // 每次调用此函数时，都创建一个result数组，我们不想改变原始数组
        for (let i = 0, len = arr.length; i < len; i++) {
            // 将mapCb返回的结果push到result数组中
            result.push(mapCb(arr[i], i, arr))
        }
        return result
    }
}
// 4、实现Array.prototype.filter
// filter()创建一个新数组，其包含通过所提供函数实现的测试的所有元素
function filter(arr, filterCb) {
    if (!Array.isArray(arr) || !arr.length || typeof filterCb !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0, len = arr.length; i < len; i++) {
            // 检查filterCb的返回值是否是真值
            if (filterCb(arr[i], i, arr)) {
                // 条件为真，则将数组元素push到result
                result.push(arr[i])
            }
        }
        return result
    }
}

// 5、Array.prototype.reduce
// reduce()对数组中的每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值
function reduce(arr, reduceCb, initialValue) {
    if (!Array.isArray(arr) || !arr.length || typeof reduceCb !== 'function') {
        return []
    } else {
        // 如果没有将initialValue传递给函数，我们将数组第一项作为initialValue
        let hasInitialValue = initialValue !== undefined
        let value = hasInitialValue ? initialValue : arr[0]
        // 如果有传递initialValue,则索引从1开始，否则从0开始
        for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
            value = reduceCb(value, arr[i], i, arr)
        }
        return value
    }
}

// call函数的实现
Function.prototype.mycall = function (context) {
    // 判断调用函数
    if (typeof this !== "function") {
        console.error('type error')
    }
    // 获取参数
    let args = [...arguments].slice(1)
    result = null
    // 判断context是否传入，如果未传入则设置为window
    context = context || window
    // 将调用函数设为对象的方法
    context.fn = this
    // 调用函数
    result = context.fn(...args)
    // 删除属性
    delete context.fn
    return result
}

// apply函数实现
Function.prototype.myapply = function (context) {
    if (typeof this !== "function") {
        throw new TypeError('Error')
    }
    let result = null
    context = context || window
    context.fn = this
    // 调用方法
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

// bind函数实现
/* 
1.判断调用对象是否为函数，即使我们定义在函数原型上的，但有可能出现使用call等方式调用情况
2.保存当前函数的引用，获取其余传入参数值
3.创建建一个函数返回
4.函数内部使用apply来绑定函数调用，需要判断函数作为构造函数的情况，这时需要传入当前函数的this
  给apply调用，其余情况都传入指定的上下文情况
*/
Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var args = [...arguments].slice(1)
    fn = this
    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}

// 模拟new
function objectFactory() {
    var obj = {}
    // 取的该方法的第一个参数（并删除第一个参数），该参数是构造函数
    var Constructor = [].shift.apply(arguments)
    // 将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
    obj.__proto__ = Constructor.prototype
    // 取得构造函数的返回值
    var ret = Constructor.apply(obj, arguments)
    // 如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof ret === 'object' ? ret : obj
}

// instanceof 原理，如何实现
// instanceof可以正确判断对象类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的prototype
/* 
  1.首先获取类型的原型
  2.再获取对象的原型
  3.循环判断对象的原型是否等于类型的原型，直到对象原型为null（原型链最终为null）
*/
function myInstanceOf(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while (true) {
        if (left === null || left === undefined)
            return false
        if (prototype === left)
            return true
        left = left.__proto__
    }
}

// js的节流和防抖
/*
  函数防抖 是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
  函数节流 是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
*/
function debounce(fn, wait) {
    // 函数防抖
    var timer = null
    return function () {
        var context = this
        var args = arguments
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        // 设置定时器，使事件间隔指定时间执行
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}

function throttle(fn, delay) {
    // 函数节流
    var preTime = Date.now()
    return function () {
        var context = this,
            args = arguments,
            nowTime = Date.now();
        // 如果两次时间间隔超过了指定时间，则执行函数
        if (nowTime - preTime >= delay) {
            preTime = Date.now()
            return fn.apply(context, args)
        }
    }
}
