1、常规按需加载实现方案
2、斐波那契数列（LeetCode 509）
    F(0)=0, F(1)=1
    F(n)=F(n-1)+F(n-2),其中n>1
    给你n，请计算F(n)
方法一：【递归】
var fib = function(n){
    if(n==0||n==1){
        return n 
    }
    // 这里有大量重复计算，可以使用缓存
    return fib(n-1)+fib(n-2)
}
方法二：使用缓存优化计算【递推】 时间复杂度O(n)
var fib = function(n){
    let cache=[]
    for (let i = 0; i <= n; i++) {
        if(i===0||i===1){
            cache[i]=i
        }else{
            cache[i]=cache[i-1]+cache[i-2]
        }        
    }
    return cache[n]
}
3、有效的括号（LeetCode 20）
var isMatch = function(str){
    let stack=[]
    let obj={'(':')', '[':']', '{':'}'}
    for (let i = 0; i < str.length; i++) {
        const ele = str[i];
        // 括号匹配
        if(ele in obj){
            stack.push(ele)
        }else{
            if(ele != obj[stack.pop()]){
                return false // 不匹配
            }
        }
    }
    // stack是不是空的，空的return true
    return !stack.length
}
 