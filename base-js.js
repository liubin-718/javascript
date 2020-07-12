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

