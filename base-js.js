#!/usr/bin/env node
// 1、寻找字符串中出现次数最少，并且首次出现位置最前的字符
var str = [].reduce.call('cbaacfdeaebb', (p,n) => {
    return p[n] = (p[n] || 0) + 1, p;
},{})
var s = Object.keys(str).reduce( (p,n) => {
    return str[p] <= str[n] ? p : n
})
console.log(s, str[s]); //f,1

// 方法二
var str1 = 'cbaacfdeaebb'.split('').reduce((allItems, item) => {
    allItems[item] = (allItems[item] || 0) + 1
    return allItems
},{})
console.log(str1);
// 备注： return p[n] = (p[n] || 0) + 1, p;是两句代码的简写 p[n] = (p[n] || 0) + 1; return p

/* 2、数组扁平化（数组降维） */
var list1 = [[0,1],[2,[3,[4]]]]
function flatten(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatten(val) : val)
    }, [])
}
// console.log(flatten(list1));

