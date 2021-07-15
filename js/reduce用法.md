// https://juejin.cn/post/6844904063729926152#heading-5
定义：对数组中的每个元素执行一个自定义的累计器，将其结果汇总为单个返回值
形式：array.reduce((t, v, i, a) => {}, initValue)
参数
callback：回调函数(必选)
initValue：初始值(可选)

回调函数的参数
total(t)：累计器完成计算的返回值(必选)
value(v)：当前元素(必选)
index(i)：当前元素的索引(可选)
array(a)：当前元素所属的数组对象(可选)

过程
以t作为累计结果的初始值，不设置t则以数组第一个元素为初始值
开始遍历，使用累计器处理v，将v的映射结果累计到t上，结束此次循环，返回t
进入下一次循环，重复上述操作，直至数组最后一个元素
结束遍历，返回最终的t


<!-- 
  ('hey',2+5,'hello')  // 'hello'
  ('hello',a=3+5,a)  // 8
  在js中使用括号包裹任意数量表达式，返回最后一个表达式作为结果
 -->
reduce的精华所在是将累计器逐个作用于数组成员上，把上一次输出的值作为下一次输入的值。下面举个简单的栗子，看看reduce的计算结果。
1、代替reverse
function myReverse(arr=[]){
  return arr.reduceRight((t,v) => (t.push(v),t), [])
}
myReverse([1,2,3,4])

2、数组转对象
 const p = [
   {name: 'LB',age:12, home:'abc'},
   {name: 'XH',age:26, home:'cbd'},
 ]
 const map = p.reduce((t,v) => {
   const {name, ...rest} = v
   t[name] = rest
   return t
 }, {})
map// {LB:{age: 12, home: "abc"}, XH:{age:26, home:'cbd'}}

3、redux compose函数原理
function compose(...funs){
  if(funs.length === 0){
    return arg => arg
  }
  if(funs.length === 1){
    return funs[0]
  }
  return funs.reduce((t,v) => (...arg) => t(v(...arg)))
}

4、返回对象指定键值
function getKeys(obj={}, keys=[]){
  return Object.keys(obj).reduce((t,v) => (keys.includes(v) && (t[v]=obj[v]), t), {})
}
const target = {a:1, b:2, c:3}
const keywords = ['a', 'c']
getKeys(target, keywords) // {"a": 1, "c": 3}

5、URL参数序列化
function stringifyUrl(ser={}){
  return Object.entries(ser).reduce(
    (t,v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
    Object.keys(ser).length ? "?": ""
  ).replace(/&$/, "")
}
stringifyUrl({age:21, name:'paper'})  //"?age=21&name=paper"

6、URL参数反序列化
function parseUrl(){
  return location.search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t,v) => {
    const [key, val] = v.split("=")
    t[key] = decodeURIComponent(val)
    return t
  }, {})
}
https://juejin.cn/post/6982807518393139214?utm_source=gold_browser_extension  //{utm_source: "gold_browser_extension"}
https://juejin.cn/post/6844904063729926152#heading-5                          //{"": "undefined"}

7、斐波那契数列
function fib(len=2){
  const arr = [...new Array(len).keys()]
  return arr.reduce((t,v,i) => (i > 1 && t.push(t[i-1] + t[i-2]), t),[0,1])
}
fib(20) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
fib(1000) 耗时0.167ms

8、反转字符串
function reverseStr(str=""){
  return str.split('').reduceRight((t,v) => t+v)
}
reverseStr('反转给我看看呐') //"呐看看我给转反"

9、统计数组成员位置以及个数
function position(arr=[], val){
  return arr.reduce((t,v,i) => (v === val && t.push(i),t), [])
}
position([2,1,3,4,2,6,7,6,6], 2) //[0,4]
----------------------------------------------------------------------------------------
10.统计数组成员个数
function counts(arr=[]){
  return arr.reduce((t,v) => (t[v] = (t[v] || 0) + 1, t), {})
}
function counts(arr=[]){
  return arr.reduce((t,v) => (t[v] ? t[v]++ : t[v]=1, t), {})
}
function counts1(arr=[]){
  return arr.reduce((pre,cur) => {
    if(cur in pre){
      pre[cur]++
    }else{
      pre[cur] = 1
    }
    return pre
  },{})
}
function counts1(arr=[]){
  return arr.reduce((pre,cur) => (cur in pre ? pre[cur]++ : pre[cur] = 1, pre),{})
}
counts1(['xiaohong','mali','alice','alice']) //{xiaohong: 1, mali: 1, alice: 2}
counts([0,2,3,3,4,2,2,4]) //{0: 1, 2: 3, 3: 2, 4: 2}
----------------------------------------------------------------------------------------
11、找数组最值
function max(arr=[]){
  return arr.reduce((t,v) => t > v ? t: v)
}
Math.max(...arr)
Math.min(...arr)
function min(arr=[]){
  return arr.reduce((t,v) => t > v ? v: t)
}
var arr = [1,3,2,9,4,5]
min(arr)
max(arr)

12、数组扁平
function Flat(arr=[]){
  return arr.reduce((t,v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
}
const arr = [1,[2,3,[4,5,[6]]]]
Flat(arr) 或 arr.flat(Infinity) // [1, 2, 3, 4, 5, 6]

13、数组去重 
function uniq(arr=[]){
  return arr.reduce((t,v) => t.includes(v) ? t : [...t,v], [])
}
function uniq(arr=[]){
  return arr.reduce((t,v)=>(t.includes(v) ? t : [...t,v],t),[])
}
function unique(arr){
  return Array.from(new Set(arr))
}

14、数组过滤
function difference(arr=[], oarr=[]){
  return arr.reduce((t,v) => (!oarr.includes(v) && t.push(v),t), [])
}
const arr=[1,2,3,4,5,6]
const oarr=[2,4,6,8]
difference(arr,oarr)  // [1, 3, 5]

15、数组分割
function chunk(arr=[],size=1){
  return arr.length ? arr.reduce((t,v) => (t[t.length-1].length === size ? t.push([v]): t[t.length-1].push(v),t), [[]]) : []
}
const arr=[1,2,3,4,5,6,7]
chunk(arr,3) //[[1,2,3],[4,5,6],[7]]