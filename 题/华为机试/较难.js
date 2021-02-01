/* javaScript(V86.0.0) */
1、计算字符个数
写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字母，
然后输出输入字符串中该字母的出现次数。不区分大小写。
eg:
输入 ABCabc
     A
输出 2

var str =readline()
var str2=readline()
console.log(str.split('').filter(i=>i.toLowerCase()===str2.toLowerCase()).length)

法二：
var str = readline()
var charStr = readline()

var n1=str.toLowerCase()
var n2=charStr.toLowerCase()

console.log(n1.split(n2).length-1)
2、字符串最后一个单词的长度
计算字符串最后一个单词的长度，单词以空格隔开。
输入 hello nowcoder
输出  8
const str =readline();
console.log(str.length-1-str.lastIndexOf(' '))

法二
const arr = readline().split(' ')
const len=arr.length
console.log(arr[len-1].length)
3、明明的随机数
明明想在学校中请一些同学一起做一项问卷调查，为了实验的客观性，他先用计算机生成了N个1到1000之间的随机整数（N≤1000），对于其中重复的数字，只保留一个，把其余相同的数去掉，不同的数对应着不同的学生的学号。然后再把这些数从小到大排序，按照排好的顺序去找同学做调查。请你协助明明完成“去重”与“排序”的工作(同一个测试用例里可能会有多组数据，希望大家能正确处理)。
输入描述:
注意：输入可能有多组数据。每组数据都包括多行，第一行先输入随机整数的个数N，接下来的N行再输入相应个数的整数。具体格式请看下面的"示例"。
输出描述:
返回多行，处理后的结果
输入
3
2
2
1
11
10
20
40
32
67
40
20
89
300
400
15
输出
1
2
10
15
20
32
40
67
89
300
400
说明
样例输入解释：
样例有两组测试
第一组是3个数字，分别是：2，2，1。
第二组是11个数字，分别是：10，20，40，32，67，40，20，89，300，400，15。 

const printArr = (n)=>{
     const obj = {}
     
     for(let i=0;i < n;i++){
     
         obj[readline()]=true
         curr=0
     }
 //     Object.keys(obj).forEach((item)=>console.log(item))
     
     for(let k in obj){
         console.log(k)
     } 
 }
 let count=0;
 while(count=readline()){
     printArr(count)
 }
 法二
 while(num = readline()){
     const obj = {};
     while(num--){
        const number = readline();
        if(!obj[number]){
            obj[number]=1;
        } 
     }
     for(let result in obj){
         console.log(result)
     }  
 }
 4、字符串分隔
 题目描述
•连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
•长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

输入描述:
连续输入字符串(输入多次,每个字符串长度小于100)

输出描述:
输出到长度为8的新字符串数组

示例1
输入
abc
123456789
输出
abc00000
12345678
90000000
while(str=readline()){
     str +='0000000'
     const length = Math.floor(str.length/8)
     for(i=0;i<length;i++){
         console.log(str.substr(i*8,8))
     }
 }

 13、	句子逆序
 题目描述
将一个英文语句以单词为单位逆序排放。例如“I am a boy”，逆序排放后为“boy a am I”
所有单词之间用一个空格隔开，语句中除了英文字母外，不再包含其他字符

输入描述:
输入一个英文语句，每个单词用空格隔开。保证输入只包含空格和字母。

输出描述:
得到逆序的句子

示例1
输入
复制
I am a boy
输出
复制
boy a am I
let str = readline();
let res = '';
let arr = str.split(' ');
for (let i = arr.length - 1; i >= 0; i--) {
    res += arr[i];
    res += ' ';
}
console.log(res);

17、坐标移动
题目描述
开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。

输入：

合法坐标为A(或者D或者W或者S) + 数字（两位以内）

坐标之间以;分隔。

非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。

下面是一个简单的例子 如：

A10;S20;W10;D30;X;A1A;B10A11;;A10;

处理过程：

起点（0,0）

+   A10   =  （-10,0）

+   S20   =  (-10,-20)

+   W10  =  (-10,-10)

+   D30  =  (20,-10)

+   x    =  无效

+   A1A   =  无效

+   B10A11   =  无效

+  一个空 不影响

+   A10  =  (10,-10)

结果 （10， -10）

注意请处理多组输入输出

输入描述:
一行字符串

输出描述:
最终坐标，以逗号分隔

示例1
输入
复制
A10;S20;W10;D30;X;A1A;B10A11;;A10;
输出
复制
10,-10
while(str=readline()){
     let x=0,y=0
     let arr=str.split(';')
     for(let i=0;i<arr.length;i++){
         switch(arr[i].substr(0,1)){
             case 'A':
                 x-=Number(arr[i].substr(1))
                 break
             case 'D':
                 x+=parseInt(arr[i].substr(1))
                 break
             case 'W':
                 y+=parseInt(arr[i].substr(1))
                 break
             case 'S':
                 y-=parseInt(arr[i].substr(1))
                 break
             default:continue
         }
     }
     console.log(x+','+y)
 }
20、密码验证合格程序【字符串 数组】
题目描述
密码要求:

1.长度超过8位

2.包括大小写字母.数字.其它符号,以上四种至少三种

3.不能有相同长度大于2的子串重复

输入描述:
一组或多组长度超过2的子符串。每组占一行

输出描述:
如果符合要求输出：OK，否则输出NG

示例1
输入
复制
021Abc9000
021Abc9Abc1
021ABC9000
021$bc9000
输出
复制
OK
NG
NG
OK
while(line = readline()){
    
     handleData(line)
 }
 
 function handleData(str){
     if(str.length<=8){
         console.log('NG')
         return;
     }
     var point = 0
     if(/[A-Z]/.test(str)){
         point++
     }
     if(/[a-z]/.test(str)){
         point++
     }
     if(/\d/.test(str)){
         point++
     }
     if(/[^A-Za-z\d]/.test(str)){
         point++
     }
     
     if(point<3){
        console.log('NG')
         return; 
     }
     
     for(var i=0;i<str.length-3;i++){
         var tempStr = str.substr(i,3);
         if(str.lastIndexOf(tempStr)>i){
             console.log("NG")
             return;
         }
     }
     
     console.log("OK")
     
     
 }
23、	删除字符串中出现次数最少的字符  ======================
题目描述
实现删除字符串中出现次数最少的字符，若多个字符出现次数一样，则都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。
注意每个输入文件有多组输入，即多个字符串用回车隔开
输入描述:
字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于20个字节。

输出描述:
删除字符串中出现次数最少的字符后的字符串。

示例1
输入
abcdd
aabcddd
输出
dd
aaddd

while(data = readline()){
     delMin(data)
 }
 
 function delMin(data){
     let list = data.split('')
     let map = list.reduce((prev, next) => {
         prev[next] = prev[next] ? (prev[next] + 1) : 1
         return prev
     }, {})
     let countArr = []
     for(let key in map){
         countArr.push(map[key])
     }
     let minTimes = Math.min.apply(Math, countArr)
     // console.info(minTimes)
     let strArr = []
     for(let key in map){
         if(map[key] === minTimes){
             strArr.push(key)
         }
     }
 
     let result = ''
    //  字符串剔除指定n个字符
     list.forEach(item => {
         if(strArr.indexOf(item) === -1){
             result += item
         }
     })
 
     console.info(result)
 }
 法二
 var line;
while(line = readline()){
    var a = line.split('');
    var obj = {};
    for(var i = 0; i < a.length; i++){
        if(obj[a[i]]){
            obj[a[i]] += 1;
        }else{
            obj[a[i]] = 1;
        }
    }
    var min = a.length;
    for(var k in obj){
        if(obj[k] < min){
            min = obj[k]
        }
    }
    var res = ''
     for(i=0;i<a.length;i++){
         if(obj[a[i]]!=min){
             res+=a[i];
         }
     }
    console.log(res)
}
24、合唱队【动态规划 队列】
题目描述
计算最少出列多少位同学，使得剩下的同学排成合唱队形

说明：

N位同学站成一排，音乐老师要请其中的(N-K)位同学出列，使得剩下的K位同学排成合唱队形。
合唱队形是指这样的一种队形：设K位同学从左到右依次编号为1，2…，K，他们的身高分别为T1，T2，…，TK，   则他们的身高满足存在i（1<=i<=K）使得T1<T2<......<Ti-1<Ti>Ti+1>......>TK。

你的任务是，已知所有N位同学的身高，计算最少需要几位同学出列，可以使得剩下的同学排成合唱队形。


注意不允许改变队列元素的先后顺序
请注意处理多组输入输出！

输入描述:
整数N

输出描述:
最少需要几位同学出列

示例1
输入
8
186 186 150 200 160 130 197 200
输出
4
while(num=readline()){
     var arrList = readline().split(' ').map(n=>parseInt(n))
     var dp1 = LIS(arrList)
     var dp2 = LIS(arrList.reverse()).reverse()
     var max = -1
     for(var i=0;i<dp1.length;i++){
         max = Math.max(dp1[i]+dp2[i],max)
     }
     console.log(arrList.length-max+1)
 }
  
 function LIS(arr) {
     let f = []
   for (let i = 0; i < arr.length; i++) {
     f[i] = 1
     for (let j = 0; j < i; j++) {
         if (arr[i] > arr[j]) {
             f[i] = Math.max(parseInt(f[i]), parseInt(f[j]+1))
         }
     }
   }
   return f
 }

 法二
 function bs(arr, len, value) {
     let lo = 0, hi = len - 1
     while (lo <= hi) {
       let mid = lo + ((hi - lo) >> 1)
       if (arr[mid] === value) return mid
       else if (arr[mid] > value) hi = mid - 1
       else lo = mid + 1
     }
     return lo
   }
   
   function LIS(arr) {
     let tmp = [arr[0]]
     let res = [1]
     let max = 1
     let pos = 0
     for (let i = 1; i < arr.length; i++) {
       let val = arr[i]
       if (val > tmp[max - 1]) {
         tmp[max] = val
         max++
       } else {
         pos = bs(tmp, max, val)
         tmp[pos] = val
       }
       res[i] = max
     }
     return res
   }
   while(num=readline()){
       var arrList = readline().split(' ').map(n=>parseInt(n))
       var dp1 = LIS(arrList)
       var dp2 = LIS(arrList.reverse())
       dp2 = dp2.reverse()
       var max = 0
       for(var i=0;i<dp1.length;i++){
           max = Math.max(dp1[i]+dp2[i],max)
       }
       console.log(arrList.length-max+1)
   }
   25、	数据分类处理【排序】
   题目描述
信息社会，有海量的数据需要分析处理，比如公安局分析身份证号码、 QQ 用户、手机号码、银行帐号等信息及活动记录。

采集输入大数据和分类规则，通过大数据分类处理程序，将大数据分类输出。

请注意本题有多组输入用例。
输入描述:
﻿一组输入整数序列I和一组规则整数序列R，I和R序列的第一个整数为序列的个数（个数不包含第一个整数）；整数范围为0~0xFFFFFFFF，序列个数不限

输出描述:
﻿从R依次中取出R<i>，对I进行处理，找到满足条件的I： 

I整数对应的数字需要连续包含R<i>对应的数字。比如R<i>为23，I为231，那么I包含了R<i>，条件满足 。 

按R<i>从小到大的顺序:

(1)先输出R<i>； 

(2)再输出满足条件的I的个数； 

(3)然后输出满足条件的I在I序列中的位置索引(从0开始)； 

(4)最后再输出I。 

附加条件： 

(1)R<i>需要从小到大排序。相同的R<i>只需要输出索引小的以及满足条件的I，索引大的需要过滤掉 

(2)如果没有满足条件的I，对应的R<i>不用输出 

(3)最后需要在输出序列的第一个整数位置记录后续整数序列的个数(不包含“个数”本身)

 

序列I：15,123,456,786,453,46,7,5,3,665,453456,745,456,786,453,123（第一个15表明后续有15个整数） 

序列R：5,6,3,6,3,0（第一个5表明后续有5个整数） 

输出：30, 3,6,0,123,3,453,7,3,9,453456,13,453,14,123,6,7,1,456,2,786,4,46,8,665,9,453456,11,456,12,786

说明：

30----后续有30个整数

3----从小到大排序，第一个R<i>为0，但没有满足条件的I，不输出0，而下一个R<i>是3

6--- 存在6个包含3的I 

0--- 123所在的原序号为0 

123--- 123包含3，满足条件 

示例1
输入
15 123 456 786 453 46 7 5 3 665 453456 745 456 786 453 123
5 6 3 6 3 0
输出
30 3 6 0 123 3 453 7 3 9 453456 13 453 14 123 6 7 1 456 2 786 4 46 8 665 9 453456 11 456 12 786
let line1,line2;
while (line1 = readline()) {
    line2 = readline();

    let rs = line2.split(" ");
    rs.shift();
    let srt = [];
    for (let i = 0, length = rs.length; i < length; i++) {
        srt[rs[i]] = 1;
    }
    rs = [];
    srt.forEach((v, i) => {
        if (v === 1) {
            rs.push(i + "");
        }
    });

    let is = line1.split(" ");
    is.shift();
    let result = [];
    rs.forEach((vr) => {
        let temp = [];
        let count = 0;
        is.forEach((vi, ii) => {
            if (vi.indexOf(vr) !== -1) {
                count++;
                temp.push(ii);
                temp.push(vi);
            }
        });
        if (count !== 0) {
            temp.unshift(count);
            temp.unshift(vr);
        }
        result = result.concat(temp);
    });
    result.unshift(result.length);
    console.log(result.join(" "));
}
法二
while(I=readline()){
     I = I.split(" ").slice(1)
     let R = readline().split(" ").slice(1).sort((a,b) => a-b)
     let result = []
     let RCache = ''
     R.forEach(item => {
         if(RCache == item){
             return
         }
         RCache = item
         let temp = []
         I.forEach((str, index) => {
             if(str.indexOf(item) != -1){
                 temp.push(index,str)
             }
         })
         if(temp.length>0){
             temp.unshift(item, temp.length/2)
         }
         result = result.concat(temp)
     })
     let length = result.length
     result.unshift(length)
     console.log(result.join(" "))
 }
 29、字符串加解密【字符串】
 题目描述
1、对输入的字符串进行加解密，并输出。

2、加密方法为：

当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；

当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；

其他字符不做变化。

3、解密方法为加密的逆过程。


本题含有多组样例输入。
输入描述:
输入说明
输入一串要加密的密码
输入一串加过密的密码

输出描述:
输出说明
输出加密后的字符
输出解密后的字符

示例1
输入
abcdefg
BCDEFGH
输出
BCDEFGH
abcdefg

const str1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
const str2 = 'BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza2345678901';
while(line = readline()){
    let result = '';
    for(var i = 0 ; i < line.length ; i++){
        result += str2[str1.indexOf(line[i])];
    }
    console.log(result);
     
    line = readline();
    result = '';
    for(var i = 0; i < line.length ; i++){
        result += str1[str2.indexOf(line[i])];
    }
    console.log(result)
}
30、字符串合并处理【字符串 排序】
题目描述
按照指定规则对输入的字符串进行处理。

详细描述：

将输入的两个字符串合并。

对合并后的字符串进行排序，要求为：下标为奇数的字符和下标为偶数的字符分别从小到大排序。这里的下标意思是字符在字符串中的位置。

对排序后的字符串进行操作，如果字符为‘0’——‘9’或者‘A’——‘F’或者‘a’——‘f’，则对他们所代表的16进制的数进行BIT倒序的操作，并转换为相应的大写字符。如字符为‘4’，为0100b，则翻转后为0010b，也就是2。转换后的字符为‘2’； 如字符为‘7’，为0111b，则翻转后为1110b，也就是e。转换后的字符为大写‘E’。


举例：输入str1为"dec"，str2为"fab"，合并为“decfab”，分别对“dca”和“efb”进行排序，排序后为“abcedf”，转换后为“5D37BF”

注意本题含有多组样例输入


输入描述:
本题含有多组样例输入。每组样例输入两个字符串，用空格隔开。

输出描述:
输出转化后的结果。每组样例输出一行。

示例1
输入
dec fab
输出
5D37BF
function convertLetter(s) {
     let bitStr = parseInt(s, 16).toString(2)
     if(bitStr.length < 4) {
         bitStr = bitStr.padStart(4, '0').split('').reverse().join('')
     } else {
         bitStr = bitStr.split('').reverse().join('')
     }
     let a = parseInt(bitStr,2).toString(16)
     if(/[a-f]/.test(a)) {
         return a.toUpperCase()
     } else {
         return a
     }
 }
 while(line = readline()) {
     const input = line.split(' ').join('')
     console.log(fn(input))
 }
 function fn(str) {
     const oddArr = [], evenArr = []
 for(let i = 0; i < str.length; i++) {
     if(i % 2 === 0) {
         oddArr.push(str[i])
     } else {
         evenArr.push(str[i])
     }
 }
 oddArr.sort()
 evenArr.sort()
 const newArr = []
 for(let k = 0; k < str.length; k++) {
     if(k % 2 === 0) {
         newArr.push(oddArr.shift())
     } else {
         newArr.push(evenArr.shift())
     }
 }
 let result = []
     const dec1="0123456789abcdefABCDEF";
     const dec2="084C2A6E195D3B7F5D3B7F";
 for(let j = 0; j < newArr.length; j++) {
     if(/[0-9a-fA-F]/.test(newArr[j])) {
         let value = convertLetter(newArr[j])
         result.push(value)
     } else {
         result.push(newArr[j])
     }
 }
     return result.join('')
 }
 
 32、【中级】字符串运用-密码截取 【字符串】
 题目描述
Catcher是MCA国的情报员，他工作时发现敌国会用一些对称的密码进行通信，比如像这些ABBA，ABA，A，123321，但是他们有时会在开始或结束时加入一些无关的字符以防止别国破解。比如进行下列变化 ABBA->12ABBA,ABA->ABAKK,123321->51233214　。因为截获的串太长了，而且存在多种可能的情况（abaaab可看作是aba,或baaab的加密形式），Cathcer的工作量实在是太大了，他只能向电脑高手求助，你能帮Catcher找出最长的有效密码串吗？

本题含有多组样例输入。

输入描述:
输入一个字符串

输出描述:
返回有效密码串的最大长度

示例1
输入
复制
ABBA
输出
复制
4
while(line = readline()){
     let arr = line.split('');
     let len = arr.length;
     let max = 0;
     for(let i=1; i<len-1; i++){
         let offset = 1;
         while(i-offset>=0 && i+offset<len && arr[i-offset]==arr[i+offset]){
             offset++;
         }
         let num = offset*2-1;
         if(num>max){
             max = num;
         }
         offset = 0;
         while(i-offset>=0 && i+offset+1<len && arr[i-offset]==arr[i+offset+1]){
             offset++;
         }
         num = offset*2;
         if(num>max){
             max = num;
         }
     }
     console.log(max);
 }
 33、	整数与IP地址间的转换【字符串】
 题目描述
原理：ip地址的每段可以看成是一个0-255的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
一个长整数。
举例：一个ip地址为10.0.3.193
每段数字             相对应的二进制数
10                   00001010
0                    00000000
3                    00000011
193                  11000001

组合起来即为：00001010 00000000 00000011 11000001,转换为10进制数就是：167773121，即该IP地址转换后的数字就是它了。

本题含有多组输入用例，每组用例需要你将一个ip地址转换为整数、将一个整数转换为ip地址。



输入描述:
输入 
1 输入IP地址
2 输入10进制型的IP地址

输出描述:
输出
1 输出转换成10进制的IP地址
2 输出转换后的IP地址

示例1
输入
10.0.3.193
167969729
输出
167773121
10.3.3.193

function ipToNumber(ip){
     const is = ip.split('.').map(v => Number(v));
     let num = '';
     is.forEach(i => {
         let n  = i.toString(2);
         if(n.length<8){
             for(let j=n.length; j<8 ;j++){
                 n = '0' + n;
             }
         }
         
         num += n;
     })
     return parseInt(num,2);
 }
 
 function numberToIp(num){
     let str = num.toString(2);
     for(let j=str.length; j<32 ;j++){
         str = '0' + str;
     }
     const one = parseInt(str.substr(0,8),2);
     const two = parseInt(str.substr(8,8),2);
     const three = parseInt(str.substr(16,8),2);
     const four = parseInt(str.substr(24,8),2);
     return one + '.' + two + '.' + three + '.' + four;
 }
 
 while(ip = readline(), num = readline()){
     console.log(ipToNumber(ip) + '\n' + numberToIp(Number(num)));
 }
 法二
 

let line;
let result = '';
while (line = readline()) {
    if (result.length !== 0) {
        result += '\n';
    }
    let ipNum = readline() * 1;
    let ipStrs = line.split('.');
    let result1 = 0;
    let power = 1;
    for (let i = 0; i < 4; i++) {
        result1 += ipStrs[3 - i] * power;
        power = power * 256;
    }
    result += result1 + '\n';
    let result2 = '';
    for (let i = 0; i < 4; i++) {
        result2 = `.${ipNum & 0xFF}${result2}`;
        ipNum >>= 8;
    }
    result += result2.substr(1);
}

print(result);
39、	判断两个IP是否属于同一子网【字符串 模拟】
题目描述
子网掩码是用来判断任意两台计算机的IP地址是否属于同一子网络的根据。
子网掩码与IP地址结构相同，是32位二进制数，其中网络号部分全为“1”和主机号部分全为“0”。利用子网掩码可以判断两台主机是否中同一子网中。若两台主机的IP地址分别与它们的子网掩码相“与”后的结果相同，则说明这两台主机在同一子网中。

示例：
I P 地址　 192.168.0.1
子网掩码　 255.255.255.0

转化为二进制进行运算：

I P 地址　11010000.10101000.00000000.00000001
子网掩码　11111111.11111111.11111111.00000000

AND运算
11000000.10101000.00000000.00000000

转化为十进制后为：
192.168.0.0


I P 地址　 192.168.0.254
子网掩码　 255.255.255.0


转化为二进制进行运算：

I P 地址　11010000.10101000.00000000.11111110
子网掩码　11111111.11111111.11111111.00000000

AND运算
11000000.10101000.00000000.00000000

转化为十进制后为：
192.168.0.0

通过以上对两台计算机IP地址与子网掩码的AND运算后，我们可以看到它运算结果是一样的。均为192.168.0.0，所以这二台计算机可视为是同一子网络。

输入一个子网掩码以及两个ip地址，判断这两个ip地址是否是一个子网络。
若IP地址或子网掩码格式非法则输出1，若IP1与IP2属于同一子网络输出0，若IP1与IP2不属于同一子网络输出2。


输入描述:
输入子网掩码、两个ip地址

输出描述:
得到计算结果

示例1
输入
255.255.255.0
192.168.224.256
192.168.10.4
255.0.0.0
193.194.202.15
232.43.7.59
输出
1
2
while(line = readline(), 
      i1 = readline(),
      i2 = readline()) {
    try {
        const ip1 = tranBinaryArr(i1),
              ip2 = tranBinaryArr(i2),
              maskCode = tranBinaryArr(line, true).split('');
        let res = maskCode.every((char,idx) => {
            return (char & ip1[idx]) === (char & ip2[idx]);
        })
        if (res) {
            console.log(0);
        } else {
            console.log(2);
        }
    } catch(e) {
        console.log(1)
    }
}
function checkIsMask(item) {
  return item
    .every((i, ind) => {
    const ii = item[ind + 1],
      iPrev = item[ind -1];
    if (ii) {
      return i >= ii;
    }
    if (iPrev) {
      return iPrev >= i;
    }
    return true
  })
}
function tranBinaryArr(code, isMask = false) {
  if (isMask) {
    const res = code.split('.').map(i => {
      const num = parseInt(i, 10);
      if (num > 255) {
        throw (code + ' is not a available mask code')
      }
      return num.toString(2).padStart(8, '0');
    }).join('');
    if (checkIsMask(res.split(''))) {
      return res;
    } else {
      throw(code + ' is not a available mask code')
    }
  } else {
    return code.split('.').map((i) => {
      if (isNaN(i) === false && Math.sign(i) !== -1) {
        const num = parseInt(i, 10).toString(2);
        if (num.length > 8) {
          throw(code + ' is not a available binaryCode')
        }
        return num.padStart(8, '0');
      } else {
        throw(code + ' is not a available binaryCode');
      }
    }).join('');
  }
}

41、	称砝码【字符串】
题目描述
现有一组砝码，重量互不相等，分别为m1,m2,m3…mn；
每种砝码对应的数量为x1,x2,x3...xn。现在要用这些砝码去称物体的重量(放在同一侧)，问能称出多少种不同的重量。


注：

称重重量包括0


输入描述:
输入包含多组测试数据。

对于每组测试数据：

第一行：n --- 砝码数(范围[1,10])

第二行：m1 m2 m3 ... mn --- 每个砝码的重量(范围[1,2000])

第三行：x1 x2 x3 .... xn --- 每个砝码的数量(范围[1,6])
输出描述:
利用给定的砝码可以称出的不同的重量数

示例1
输入
2
1 2
2 1
输出
5
/*
遍历所有砝码及个数，逐个增加重量以组合出不同重量的数
*/
let n;
while(n = parseInt(readline())){ 
    let m = readline().split(" ").map(Number);
    let x = readline().split(" ").map(Number);
    let res = {0:true};
    for (let i = 0; i < m.length; i++){
        let res1 = Object.keys(res).map(Number);
        for (let j = 1; j <= x[i]; j++){
            res1.forEach(item=>{
                let val = item + j*m[i];
                if(!res[val]){
                    res[val] = true;
                }
            })
        }
    }
    console.log(Object.keys(res).length);
}
42、	学英语【字符串】
题目描述
Jessi初学英语，为了快速读出一串数字，编写程序将数字转换成英文：

如22：twenty two，123：one hundred and twenty three。


说明：

数字为正整数，长度不超过九位，不考虑小数，转化结果为英文小写；

输出格式为twenty two；

非法数据请返回“error”；

关键字提示：and，billion，million，thousand，hundred。


本题含有多组输入数据。


输入描述:
输入一个long型整数

输出描述:
输出相应的英文写法

示例1
输入
2356
输出
two thousand three hundred and fifty six
var arr = [];
while(line = readline()){
    arr.push(line.trim());
}

for(var i = 0; i < arr.length; i++) {
    var res = cacu(parseInt(arr[i])); // 最终结果
    console.log(res);
}

function cacu(num) {
    var zeroToNiteen = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixty seventeen eighteen nineteen'.split(' ');
    var twentyToNinty = ('twenty thirty forty fifty sixty seventy eighty ninety').split(' ');
    if(num < 0){
        return 'error';
    }
    // [0, 20)
    else if(num < 20){
        return zeroToNiteen[num];
    // [20, 100)
    }else if(num < 100){
        if(num%10 === 0){ // 整十
            return twentyToNinty[num/10 -2];
        }else {
            return twentyToNinty[Math.floor(num/10) -2] + ' ' + zeroToNiteen[num%10];
        }
    } 
    // [100,1000){
    else if(num < 1000){
        if(num%100 === 0){ // 整百
            return zeroToNiteen[num/100] +' ' + 'hundred';
        }else {
            return zeroToNiteen[Math.floor(num/100)]+ ' ' + 'hundred' + ' '+ 'and' + ' '+ cacu(num%100);
        }
    }
    // [1000,1000000)
    else if(num < 1000000){
        if(num%1000 === 0){ // 整千
            return zeroToNiteen[num/1000] + ' ' + 'thousand';
        }else {
            return cacu(Math.floor(num/1000))+ ' ' + 'thousand' + ' ' + cacu(num%1000);
        }
    }// [1000000,100000000)
    else if(num < 1000000){
         return cacu(Math.floor(num/1000)) + ' ' + 'thousand' + ' ' + cacu(num%1000);
    }
    else if(num < 1000000000){
          return  cacu(Math.floor(num/1000000)) + ' ' + 'million' + ' '+ cacu(num%1000000);
    }else{
        return 'error';
    }
}
47、	线性插值【数组】
题目描述
信号测量的结果包括测量编号和测量值。存在信号测量结果丢弃及测量结果重复的情况。


1.测量编号不连续的情况，认为是测量结果丢弃。对应测量结果丢弃的情况，需要进行插值操作以更准确的评估信号。

采用简化的一阶插值方法,由丢失的测量结果两头的测量值算出两者中间的丢失值。

假设第M个测量结果的测量值为A，第N个测量结果的测量值为B。则需要进行(N-M-1)个测量结果的插值处理。进行一阶线性插值估计的第N+i个测量结果的测量值为A+( (B-A)/(N-M) )*i  (注：N的编号比M大。)

例如：只有测量编号为4的测量结果和测量编号为7的测量结果，测量值分别为4和10

则需要补充测量编号为5和6的测量结果。

其中测量编号为5的测量值=4 + ((10-4)/(7-4))*1 = 6

其中测量编号为6的测量值=4 + ((10-4)/(7-4))*2 = 8


2.测量编号相同，则认为测量结果重复，需要对丢弃后来出现的测量结果。


请根据以上规则进行测量结果的整理。


输入描述:
输入说明 
1 输入两个整数m, n
2 输入m个数据组

输出描述:
输出整理后的结果

示例1
输入
复制
2 3
4 5
5 7
输出
复制
4 5
5 7
while(line = readline()) {
     let [m, n] = line.split(' ').map(Number);
     let [M, A] = readline().split(' ').map(Number);
     console.log(M + ' ' + A);
     for (let i=1; i<m; i++) {
         let [N, B] = readline().split(' ').map(Number);
         if (N === M) {
             continue;
         }
         for (let j=1; j<N-M; j++) {
             console.log((M+j) + ' ' + (A+parseInt((B-A)/(N-M))*j));//计算结果要为整数
         }
         console.log(N + ' ' + B);
         //下一轮循环时上一个测试结果为[N, B]
         M = N;
         A = B;
     }
 }
 51、输出单向链表中倒数第k个结点【链表】
 题目描述
输入一个单向链表，输出该链表中倒数第k个结点，链表的倒数第1个结点为链表的尾指针。

链表结点定义如下：

struct ListNode

{

int       m_nKey;

ListNode* m_pNext;

};



正常返回倒数第k个结点指针，异常返回空指针

本题有多组样例输入。


输入描述:
输入说明
1 输入链表结点个数
2 输入链表的值
3 输入k的值

输出描述:
输出一个整数

示例1
输入
8
1 2 3 4 5 6 7 8
4
输出
5
while(len =readline()){
     let array = readline().split(' ');
     let key =readline();
     if(len -key>0&&key>0){
         console.log(array[len-key])
     }else{
         console.log(0)
     }
 }
 58、输入n个整数，输出其中最小的k个【数组】
 题目描述
输入n个整数，输出其中最小的k个。

本题有多组输入样例，请使用循环读入，比如while(cin>>)等方式处理
输入描述:
第一行输入两个整数n和k
第二行输入一个整数数组

输出描述:
输出一个从小到大排序的整数数组

示例1
输入
5 2
1 3 5 7 2
输出
1 2
while(line = readline()){
     let num = parseInt(line.split(' ')[1]);
     let array = readline().trim().split(' ');
      array.sort((a,b)=>a-b);
      console.log(array.splice(0,num).join(' '))
  }
68、成绩排序【排序】
题目描述
查找和排序

题目：输入任意（用户，成绩）序列，可以获得成绩从高到低或从低到高的排列,相同成绩
都按先录入排列在前的规则处理。

例示：
jack      70
peter     96
Tom       70
smith     67

从高到低  成绩
peter     96
jack      70
Tom       70
smith     67

从低到高

smith     67

jack      70

Tom       70
peter     96

注：0代表从高到低，1代表从低到高

本题含有多组输入数据！
输入描述:
输入多行，先输入要排序的人的个数，然后分别输入他们的名字和成绩，以一个空格隔开

输出描述:
按照指定方式输出名字和成绩，名字和成绩之间以一个空格隔开

示例1
输入
复制
3
0
fang 90
yang 50
ning 70
输出
复制
fang 90
ning 70
yang 50

while(line = readline()){
     var count = parseInt(line);
 
     var type = readline();
 
     var list = [];
     var min = null;
     var max = null;
     for(var x=0 ; x<count ; x++){
         var values = readline().split(" ");
         
         var chengji = parseInt(values[1])
         list.push({
             name: values[0],
             value: chengji
         })
         
         if(min==null || min>chengji){
             min = chengji
         }
         if(max==null || max<chengji){
             max = chengji
         } 
     }
 
     var resultList = [];
     if(type == "1"){  //升序
         for(var w=min ; w<=max ; w++){
             for(var z=0 ; z<list.length ; z++){
                 if(list[z].value == w){
                     resultList.push(list[z])
                 }
             }
         }
     }else{
         for(var w=max ; w>=min ; w--){
             for(var z=0 ; z<list.length ; z++){
                 if(list[z].value == w){
                     resultList.push(list[z])
                 }
             }
         }
     }
     
     for(var key in resultList){
         console.log(resultList[key].name + " " + resultList[key].value)
     }
 }
 法二
 while(line = readline()){
     var n = parseInt(line)
     var flag = parseInt(readline())
     var arr = []
     for(var i=0; i<n; i++){
         var temp = readline().split(' ')
         arr.push([temp[0], temp[1], i])
     }
     if(flag == 1){
         arr.sort((a,b) => {
             if(a[1] == b[1]){
                 return a[2] - b[2]
             }else{
                 return a[1] - b[1]
             }
         })
     }
     if(flag == 0){
         arr.sort((a,b) => {
             if(a[1] == b[1]){
                 return a[2] - b[2]
             }else{
                 return b[1] - a[1]
             }
         })
     }
     for(var i=0; i<arr.length; i++){
         console.log(arr[i][0] + ' ' + arr[i][1])
     }
 }
 
 77、	火车进站【栈】
 题目描述
 给定一个正整数N代表火车数量，0<N<10，接下来输入火车入站的序列，一共N辆火车，每辆火车以数字1-9编号，火车站只有一个方向进出，同时停靠在火车站的列车中，只有后进站的出站了，先进站的才能出站。
 要求输出所有火车出站的方案，以字典序排序输出。
 输入描述:
 有多组测试用例，每一组第一行输入一个正整数N（0
 
 输出描述:
 输出以字典序从小到大排序的火车出站序列号，每个编号以空格隔开，每个输出序列换行，具体见sample。
 
 示例1
 输入
 复制
 3
 1 2 3
 输出
 复制
 1 2 3
 1 3 2
 2 1 3
 2 3 1
 3 2 1
 说明
 第一种方案：1进、1出、2进、2出、3进、3出
 第二种方案：1进、1出、2进、3进、3出、2出
 第三种方案：1进、2进、2出、1出、3进、3出
 第四种方案：1进、2进、2出、3进、3出、1出
 第五种方案：1进、2进、3进、3出、2出、1出
 请注意，[3,1,2]这个序列是不可能实现的。 
 while(n = readline()){
     var trains = readline().split(" ")
     var max = []
     var wuwu = function(num,list,arriving){
         if(num<trains.length){
             var list2 = list
             var arriving2 = arriving
             if(list.length>0){
                wuwu(num,list.slice(0,list.length-1),arriving+list[list.length-1]) 
             }
             
             wuwu(num+1,list+trains[num],arriving2)
         }else{
              for(let i =list.length-1;i>=0;i--){
                  arriving += list[i]
              }
             max.push(parseInt(arriving))
         }
     }
     wuwu(0,"","")
     
     max = max.sort(function(a,b){return a-b})
     
     for(let i =0;i<max.length;i++){
         let zf = max[i].toString().split("")
         let zz = ""
         for(let j=0;j<n;j++){
             zz += zf[j] + " "
         }
         console.log(zz.slice(0,2*n-1))
     }
 }
     
 80、整形数组合并【数组 排序】
 题目描述
 题目标题：
 
 将两个整型数组按照升序合并，并且过滤掉重复数组元素。
 输出时相邻两数之间没有空格。
 请注意本题有多组样例。
 
 
 
 输入描述:
 输入说明，按下列顺序输入：
 1 输入第一个数组的个数
 2 输入第一个数组的数值
 3 输入第二个数组的个数
 4 输入第二个数组的数值
 
 输出描述:
 输出合并之后的数组
 
 示例1
 输入
 3
 1 2 5
 4
 -1 0 3 2
 输出
 -101235
 Python解法：
 while True:
    try:
        n1=input()
        line1=map(int,raw_input().split())
        n2=input()
        line2=map(int,raw_input().split())
        a=list(set(line1+line2))
        a.sort()
        print ''.join([str(i) for i in a ])            
    except:
        break
81、字符串匹配【字符串】
题目描述
判断短字符串中的所有字符是否在长字符串中全部出现。
请注意本题有多组样例输入。



输入描述:
输入两个字符串。第一个为短字符串，第二个为长字符串。两个字符串均由小写字母组成。

输出描述:
如果短字符串的所有字符均在长字符串中出现过，则输出true。否则输出false。

示例1
输入
bc
abc
输出
true
while(line = readline()){
     var str1 = line,str2 = readline();
     var l = str1.length,flag = true;
     for(var i=0;i<l;i++){
         if(str2.indexOf(str1[i])===-1){
             flag = false;
             break;
         }
     }
     console.log(flag)
}
92、	在字符串中找出连续最长的数字串【字符串】
题目描述
输入一个字符串，返回其最长的数字子串，以及其长度。若有多个最长的数字子串，则将它们全部输出（按原字符串的相对位置）
本题含有多组样例输入。

输入描述:
输入一个字符串。

输出描述:
输出字符串中最长的数字字符串和它的长度，中间用逗号间隔。
如果有相同长度的串，则要一块儿输出（中间不要输出空格）。

示例1
输入
复制
abcd12345ed125ss123058789
a8a72a6a5yy98y65ee1r2
输出
复制
123058789,9
729865,2
while(line = readline()){
     let result = ""
     let arr = []
     for(let i = 0; i < line.length; i++){
         let temp = parseInt(line[i])
         if(!isNaN(temp)){
             result += temp
         }else{
             if(result != ""){
                 arr.push(result)
                 result = ""
             }
         }
         if((i == line.length - 1) && !isNaN(temp)){
             arr.push(result)
             result = ""
         }
     }
     let length = 0
     let tempResult = ""
     for(let position = 0 ; position < arr.length; position++){
         if(arr[position].length > length){
             length = arr[position].length
             tempResult = arr[position]
         }else if(arr[position].length == length){
             tempResult += arr[position]
         }
         
     }
     console.log(tempResult+","+length)
 }
 93、 201301 JAVA题目0-1级【字符串 递归】
 题目描述
输入int型数组，询问该数组能否分成两组，使得两组中各元素加起来的和相等，并且，所有5的倍数必须在其中一个组中，所有3的倍数在另一个组中（不包括5的倍数），能满足以上条件，输出true；不满足时输出false。
本题含有多组样例输入。
输入描述:
第一行是数据个数，第二行是输入的数据

输出描述:
返回true或者false

示例1
输入
复制
4
1 5 -5 1
3
3 5 8
输出
复制
true
说明
第一个样例：
第一组：5 -5 1
第二组：1 
第二个样例：由于3和5不能放在同一组，所以不存在一种分法。 
while(num = readline()){
     let nums = readline().trim().split(' ').map(i =>+i);
     let fs = 0,ts = 0,rs = 0,rl = [];
     for(let n of nums){
       if(n % 5 == 0){
         fs += n;
       }else if(n % 3 == 0){
         ts += n;
       }else{
         rs += n;
         rl.push(n);
       }
     }
     let hs = (fs + ts + rs) / 2;
     if(Math.floor(hs) != hs){
       console.log(false);
     }else{
       console.log(devide(fs, ts, rl, 0));
     }
   
   }
   function devide(fs,ts,rl,index){
     if(index == rl.length){
       return fs == ts;
     }
     return devide(fs + rl[index],ts,rl,index + 1) || devide(fs,ts + rl[index],rl,index + 1);
   }
   94、	记票统计【】
   题目描述
   请实现一个计票统计系统。你会收到很多投票，其中有合法的也有不合法的，请统计每个候选人得票的数量以及不合法的票数。
   本题有多组样例输入。
   输入描述:
   输入候选人的人数n，第二行输入n个候选人的名字（均为大写字母的字符串），第三行输入投票人的人数，第四行输入投票。
   
   输出描述:
   按照输入的顺序，每行输出候选人的名字和得票数量，最后一行输出不合法的票数。
   
   示例1
   输入
   4
   A B C D
   8
   A D E CF A GG A B
   输出
   A : 3
   B : 1
   C : 0
   D : 1
   Invalid : 3 
   let str;
while (str = readline()) {
    while(isNaN(Number(str))){
        str = readline();
    }
    let nameStr = readline();
    readline();
    let voteStr = readline();
    let names = nameStr.trim().split(' ');
    let votes = voteStr.trim().split(' ');
    let obj = {};
    for (let i=0;i<names.length;i++) {
        obj[names[i]] = 0;
    }
    obj['Invalid'] = 0;
    for (let j=0;j<votes.length;j++) {
        if (obj[votes[j]] !== undefined) {
            obj[votes[j]] += 1;
        } else {
            obj['Invalid'] += 1;
        }
    }
    Object.keys(obj).forEach((key,i)=>{
        console.log(key+" : "+obj[key]);                    
    });
}
95、	人民币转换【字符串】
题目描述
考试题目和要点：

1、中文大写金额数字前应标明“人民币”字样。中文大写金额数字应用壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、元、角、分、零、整等字样填写。

2、中文大写金额数字到“元”为止的，在“元”之后，应写“整字，如532.00应写成“人民币伍佰叁拾贰元整”。在”角“和”分“后面不写”整字。

3、阿拉伯数字中间有“0”时，中文大写要写“零”字，阿拉伯数字中间连续有几个“0”时，中文大写金额中间只写一个“零”字，如6007.14，应写成“人民币陆仟零柒元壹角肆分“。
4、10应写作“拾”，100应写作“壹佰”。例如，1010.00应写作“人民币壹仟零拾元整”，110.00应写作“人民币壹佰拾元整”
5、十万以上的数字接千不用加“零”，例如，30105000.00应写作“人民币叁仟零拾万伍仟元整”

本题含有多组样例输入。

输入描述:
输入一个double数

输出描述:
输出人民币格式

示例1
输入
151121.15
10012.02
输出
人民币拾伍万壹仟壹佰贰拾壹元壹角伍分
人民币壹万零拾贰元贰分
var map = {
     0:'零',
     1:'壹',
     2:'贰',
     3:'叁',
     4:'肆',
     5:'伍',
     6:'陆',
     7:'柒',
     8:'捌',
     9:'玖'
 }
 var mapUnit = {
     1:'元',
     10:'拾',
     100:'佰',
     1000:'仟',
     10000:'万',
     100000000:'亿',
     0.1:'角',
     0.01:'分'
 }
 
 var gapUnit = {
     1:'元',
     10000:'万',
     100000000:'亿',
 }
 
 function convertMoneyByCn(number){
     var integer = parseInt(number)
     var digital = Number((parseFloat(number) - integer).toFixed(2))
     var integerStr = integer+''
     var digitalStr = digital > 0 ? (digital+'').slice(2) :''
     var result = ''
 
     if(integerStr.length && integer>0) {
       var isZero = false
       var digits = 0
       var preVal = 0
       var totalDigits = integerStr.length-1
       for(var i=totalDigits;i>=0;i--){
         var val = integerStr[i]
         result = getPlaceByDigits(digits,val,preVal)+result
         digits++
         preVal = val
       }
     }
     if(!digitalStr) {
       result+='整'
     } else {
       var digitalMax = Math.min(digitalStr.length,2)
       var digit = 1
       var leftDigital = digital
       for(var i=0;i<digitalMax;i++){debugger
         var current = (+(leftDigital+'').slice(0,2+digit)).toFixed(digit)
         result = result + getPlaceByDigits(-digit,current.slice(-1),'0')
         digit++
         leftDigital = (leftDigital*Math.pow(10,digitalMax+1)- current*Math.pow(10,digitalMax+1))/Math.pow(10,digitalMax+1)
       }
     }
     return '人民币'+result
 }
 
 function getPlaceByDigits(digits,val,preVal){
  var valName = map[val] 
  var unitName = mapUnit[Math.pow(10,digits)]
  var gapUnitName = gapUnit[Math.pow(10,digits)]
  if (val != '0') {
     if(digits==1 && val== 1) {
         return unitName
     } else if(digits<= 4){
       return valName + unitName
     } else if(digits<8){
       digits -= 4
       return getPlaceByDigits(digits,val,preVal)//mapUnit[Math.pow(10,digits)]
       //return valName + unitName
     } else if(digits==8){
       return valName + unitName
     } else if(digits<8+4){
       // 最大到千亿
       var oDigits =  digits % 8
       return getPlaceByDigits(oDigits,val,preVal)
     }
   } else if(gapUnitName){
     return gapUnitName
   } else if(preVal != '0'){
     return map[0]
   }
   return ''
 }
 
 while(t=readline()){
     console.log(convertMoneyByCn(t))
 }
 法二
 function cashToChinese(cash) {
     var digits=['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
     var largeUnits=['元','万','亿'];
     var units=['','拾','佰','仟'];
     var fractions=['角','分'];
     let cStr='';
     cash=cash.toString();
     if(cash===''||cash===undefined||cash===null){
         return cStr;
     }
     let preCash=cash.split('.')[0]||'';
     let lastCash=cash.split('.')[1]||'00';
     if(preCash.length>12||lastCash.length>2){
        return cStr;
     }
     for(let i=0;i<fractions.length;i++){
         cStr+=(digits[lastCash.charAt(i)]+fractions[i]).replace(/零./,'');
     }
     cStr=cStr||'整';
     for(let i=preCash.length-1,n=0,str='';i>=0;i--){
         let largeUnit='';
         str=(digits[preCash[i]]+units[n%4])+str;
         if((n+1)%4===0||i===0){
             largeUnit=largeUnits[Math.floor(n/4)];
             str=str.replace(/(零.)*零$/g,'').replace(/(零.)+/g,'零');
             str+=largeUnit;
             cStr=str+cStr;
             str='';
         }
         n++;
     }
     console.log('人民币'+cStr.replace(/壹拾(.){0,1}([元|万|亿])/g,'拾$1$2').replace(/^元/,''));
 }
         
 while (line=readline()){
      cashToChinese(line.trim());
 }
 97、记负均正【数组】
 题目描述
 首先输入要输入的整数个数n，然后输入n个整数。输出为n个整数中负数的个数，和所有正整数的平均值，结果保留一位小数。
 本题有多组输入用例。
 输入描述:
 首先输入一个正整数n，
 然后输入n个整数。
 
 输出描述:
 输出负数的个数，和所有正整数的平均值。
 
 示例1
 输入
 5
 1 2 3 4 5
 输出
 0 3.0
 let n;
while (n = readline()) {
    let str = readline();
    let arr = str.split(' ').map(item => Number(item));
    let f = 0;
    let sum = 0;
    let g = 0;
    arr.forEach(item => {
        if (item < 0) {
            f++;
        } else if (item > 0) {
            sum += item;
            g++;
        }
    });
    let p = (sum / g).toFixed(1);
    console.log(f + ' ' + p);
}
101、	输入整型数组和排序标识，对其元素按照升序或降序进行排序【排序】
题目描述
输入整型数组和排序标识，对其元素按照升序或降序进行排序（一组测试用例可能会有多组数据）

本题有多组输入，请使用while(cin>>)处理

输入描述:
第一行输入数组元素个数
第二行输入待排序的数组，每个数用空格隔开
第三行输入一个整数0或1。0代表升序排序，1代表降序排序

输出描述:
输出排好序的数字

示例1
输入
8
1 2 4 9 3 55 64 25
0
5
1 2 3 4 5
1
输出
1 2 3 4 9 25 55 64
5 4 3 2 1

while (n = readline()) {
     let arr =  readline().trim().split(' ');
     let flag = +readline()
     if (flag === 0) {
         arr.sort(function(a,b) {
            return a-b;
         })
     } else {
         arr.sort(function(a,b) {
            return b-a;
         })
     }
      console.log(arr.join(' '))
 }
 105、	记负均正II【数组】
 题目描述
从输入任意个整型数，统计其中的负数个数并求所有非负数的平均值，结果保留一位小数，如果没有非负数，则平均值为0
本题有多组输入数据，输入到文件末尾，请使用while(cin>>)读入
数据范围小于1e6
输入描述:
输入任意个整数，每行输入一个。

输出描述:
输出负数个数以及所有非负数的平均值

示例1
输入
-13
-4
-7
输出
3
0.0

let line
let arr = []
let count = 0
let count2 = 0
let sum = 0
while(line = parseInt(readline())) {
    if (line < 0) {
        count ++
    } else {
        sum += line
        count2 ++
    }
}
console.log(count)
if (count2 > 0) {
    console.log((sum / count2).toFixed(1))
} else {
    console.log(count2.toFixed(1))
}

法二
let str;
let arr = [];

while (str = readline()) {
    arr.push(Number(str));
}
let arr2 = arr.filter(item => item >= 0);
let arr3 = arr.filter(item => item < 0);
let avg = arr2.length > 0 ? arr2.reduce((t, v) => t + v, 0) / arr2.length : 0;

console.log(arr3.length);
console.log(avg.toFixed(1));
