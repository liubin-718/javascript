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


3.字母异位词分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams

var groupAnagrams = function(strs) {
	let res = {};
	for(let i = 0; i < strs.length; i++) {
		const str = strs[i]
		const hash = str.split('').reduce((sum, s)=>{
			return sum * [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103 ][s.charCodeAt(0) - 97]
		}, 1)
		res[hash] ? res[hash].push(str) : res[hash] = [str]
	}
	
	return Object.values(res)

};

function flatten(arr){
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    },[])
}

4、第10篇: 能不能实现事件的防抖和节流？
节流   对 scroll 事件做节流处理
节流的核心思想: 如果在定时器的时间范围内再次触发，则不予理睬，等当前定时器完成，才能启动下一个定时器任务。
这就好比公交车，10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到我就要发车走人！
代码如下:
const throttle = (fn, wait = 1000) => {
  let lastTime = 0
  return (...args) => {
    let now = + new Date()
    if (now - lastTime > wait) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}


function throttle(fn, interval) {
  let flag = true;
  return function(...args) {
    let context = this;
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, interval);
  };
};
写成下面的方式也是表达一样的意思:
const throttle = function(fn, interval) {
  let last = 0;
  return function (...args) {
    let context = this;
    let now = +new Date();
    // 还没到时间
    if(now - last < interval) return;
    last = now;
    fn.apply(this, args)
  }
}
防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。（多次点击按钮）
节流：指定时间间隔内只会执行一次任务。（scroll）
防抖
核心思想: 每次事件触发则删除原来的定时器，建立新的定时器。跟王者荣耀的回城功能类似，
反复触发回城功能，那么只认最后一次，从最后一次触发开始计时。
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let context = this;
    if(timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}
const debounce = (fn, wait=1000)=>{
  let timer = 0
  return (...args)=>{
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn.apply(this, args)
    }, wait)
  }
}
双剑合璧——加强版节流
现在我们可以把防抖和节流放到一起，为什么呢？因为防抖有时候触发的太频繁会导致一次响应都没有，我们希望到了固定的时间必须给用户一个响应，事实上很多前端库就是采取了这样的思路。
function throttle(fn, delay) {
  let last = 0, timer = null;
  return function (...args) {
    let context = this;
    let now = new Date();
    if(now - last < delay){
      clearTimeout(timer);
      setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 这个时候表示时间到了，必须给响应
      last = now;
      fn.apply(context, args);
    }
  }
}
链接：https://juejin.im/post/5df5bcea6fb9a016091def69

最新ECMAScript标准定义了8种数据类型：
  7种原始类型：Boolean、Null、Undefined、Number、BigInt、String、Symbol
  和 Object

  （BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数）
  1.typeof 5n==='bigint'  // true
  2.它在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；
  不能和任何 Number 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，
  因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。
  3.typeof Object(1n) === 'object'; // true
    typeof BigInt('1') === 'bigint'; // true

  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt