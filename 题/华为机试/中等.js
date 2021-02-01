/* javaScript(V86.0.0) */
5、进制转换【字符串】 -------
题目描述
写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

输入描述:
输入一个十六进制的数值字符串。注意：一个用例会同时有多组输入数据，请参考帖子https://www.nowcoder.com/discuss/276处理多组输入的问题。

输出描述:
输出该数值的十进制字符串。不同组的测试用例用\n隔开。

示例1
输入
0xA
0xAA
输出
10
170
while(number = readline()){
    console.log(parseInt(number));
}
或
while(line=readline()){
    print(""+parseInt(line))
}
6、质数因子【排序】 ------
题目描述
功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）

最后一个数后面也要有空格

输入描述:
输入一个long型整数

输出描述:
按照从小到大的顺序输出它的所有质数的因子，以空格隔开。最后一个数后面也要有空格。

示例1
输入
180
输出
2 2 3 3 5

let num=parseInt(readline());
let result = "";
for(let i=2;i*i<=num;i++){
    while(num % i === 0){
        result += i + " ";
        num /= i;
    }
}
if(num >1){
    result += num + " ";
}
console.log(result);
8、	合并表记录【集合 哈希】
题目描述
数据表记录包含表索引和数值（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。

输入描述:
先输入键值对的个数
然后输入成对的index和value值，以空格隔开

输出描述:
输出合并后的键值对（多行）

示例1
输入
复制
4
0 1
0 2
1 2
3 4
输出
复制
0 3
1 2
3 4

var count;
while(count = readline()){
    printAll(count);
}
function printAll(n){
    var obj = {};
    while(n--){
        var str = readline().split(" ");
        if(!obj[str[0]]){
            obj[str[0]] = str[1];
        } else {
            obj[str[0]] = parseInt(obj[str[0]]) + parseInt(str[1]);
        }
    }
    Object.keys(obj).forEach(key=>{console.log(key, obj[key])});
}
或
let amount = readline();
let arr = [];
let map = {};
while(amount) {
    let arr = readline().split(' ');
    map[arr[0]] = (map[arr[0]] || 0) + Number(arr[1]);
    amount--;
}

for (let key in map) {
    console.log(key + ' ' + map[key]);
}

9、	提取不重复的整数【数组 哈希 位运算】 ------
题目描述
输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
保证输入的整数最后一位不是0。
输入描述:
输入一个int型整数

输出描述:
按照从右向左的阅读顺序，返回一个不含重复数字的新的整数

示例1
输入
复制
9876673
输出
复制
37689

let num = readline();
let str = '';
for(let i=num.length-1; i>=0 ;i--){
    if(str.indexOf(num[i]) == -1){
        str += num[i];
    }
}
console.log(str);
法二

let arr = readline().split('')
let n = arr.length
let result = ''
let obj = {}
while (n) {
    if (!obj[arr[n-1]]) {
        obj[arr[n-1]] = 1
        result+= arr[n-1]
    }
    n--
}
console.log(result)

10、	字符个数统计【字符串 哈希】
题目描述
编写一个函数，计算字符串中含有的不同字符的个数。字符在ACSII码范围内(0~127)，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
例如，对于字符串abaca而言，有a、b、c三种不同的字符，因此输出3。
输入描述:
输入一行没有空格的字符串。

输出描述:
输出范围在(0~127)字符的个数。

示例1
输入
复制
abc
输出
复制
3

function count(str){
    var arr = []
    for(var i =0;i<str.length;i++){
        var num = str[i].charCodeAt() 
        if(arr.indexOf(num)==-1){
            arr.push(num)
        }
    }
    return arr.length
}
var str = readline()
console.log(count(str))
法二
var arr = [];
readline().split('').map(item=>{
    if(!arr.includes(item)){
        arr.push(item);
    }
});
console.log(arr.length);

14、	字符串排序【字符串】
题目描述
给定n个字符串，请对n个字符串按照字典序排列。
输入描述:
输入第一行为一个正整数n(1≤n≤1000),下面n行为n个字符串(字符串长度≤100),字符串中只含有大小写字母。
输出描述:
数据输出n行，输出结果为按照字典序排列的字符串。
示例1
输入
复制
9
cap
to
cat
card
two
too
up
boat
boot
输出
复制
boat
boot
cap
card
cat
to
too
two
up
var num = readline();
num = Number(num);
let arr=[];
for(let i = 0; i<num; i++){
    arr.push(readline());
}
arr.sort();
for(let i = 0;i<num;i++){
    console.log(arr[i])
}

16、	购物单【动态规划】
题目描述
王强今天很开心，公司发给N元的年终奖。王强决定把年终奖用于购物，他把想买的物品分为两类：主件与附件，附件是从属于某个主件的，下表就是一些主件与附件的例子：
主件	附件
电脑	打印机，扫描仪
书柜	图书
书桌	台灯，文具
工作椅	无
如果要买归类为附件的物品，必须先买该附件所属的主件。每个主件可以有 0 个、 1 个或 2 个附件。附件不再有从属于自己的附件。王强想买的东西很多，为了不超出预算，他把每件物品规定了一个重要度，分为 5 等：用整数 1 ~ 5 表示，第 5 等最重要。他还从因特网上查到了每件物品的价格（都是 10 元的整数倍）。他希望在不超过 N 元（可以等于 N 元）的前提下，使每件物品的价格与重要度的乘积的总和最大。
    设第 j 件物品的价格为 v[j] ，重要度为 w[j] ，共选中了 k 件物品，编号依次为 j 1 ， j 2 ，……， j k ，则所求的总和为：
v[j 1 ]*w[j 1 ]+v[j 2 ]*w[j 2 ]+ … +v[j k ]*w[j k ] 。（其中 * 为乘号）
    请你帮助王强设计一个满足要求的购物单。
 



输入描述:
输入的第 1 行，为两个正整数，用一个空格隔开：N m

（其中 N （ <32000 ）表示总钱数， m （ <60 ）为希望购买物品的个数。）


从第 2 行到第 m+1 行，第 j 行给出了编号为 j-1 的物品的基本数据，每行有 3 个非负整数 v p q


（其中 v 表示该物品的价格（ v<10000 ）， p 表示该物品的重要度（ 1 ~ 5 ）， q 表示该物品是主件还是附件。如果 q=0 ，表示该物品为主件，如果 q>0 ，表示该物品为附件， q 是所属主件的编号）
 



输出描述:
 输出文件只有一个正整数，为不超过总钱数的物品的价格与重要度乘积的总和的最大值（ <200000 ）。
示例1
输入
1000 5
800 2 0
400 5 1
300 5 1
400 3 0
500 2 0
输出
2200
while (str1 = readline()) {
    var arr = str1.split(' ');
    //总钱数
    var m = parseInt(arr[0])/10;
    //希望购买物品的件数
    var n = parseInt(arr[1]);
    var goods = [], count=1;
    // 第j行数据表示编号j-1的物品的基本数据 价格 重要度 主附件（0 主件 >0 附件值为其所属主件的编号）
    while (count<=n) {
        var item = readline().split(' ').map(val => parseInt(val));
        // 是主件
        if (item[2] == 0) {
            goods[count] = [{v:item[0]/10, w:item[0]/10*item[1]}];
        // 是附件， 同时必须购买相应的主件
        } else {
            var add = goods[item[2]].map(val => {
                return {
                    v: item[0]/10 + val.v,
                    w: item[0]/10*item[1] +val.w
                }
            });
            goods[item[2]] = [...goods[item[2]], ...add];
        }
        count++;
    }
    console.log(choose(goods));
}
function choose(goods) {
    var res = Array(m+1).fill(0);
    for (var i=0;i<goods.length;i++) {
        for (var j=m;j>=0;j--) {
            if (goods[i]) {
                goods[i].forEach(val => {
                    if (val.v <= j) {
                        // 买权重较高的物品
                        res[j] = Math.max(res[j], res[j-val.v]+val.w);
                    }
                })
            }
        }
    }
    return res[m] * 10;
}

21、	简单密码破解【字符串】
题目描述
密码是我们生活中非常重要的东东，我们的那么一点不能说的秘密就全靠它了。哇哈哈. 接下来渊子要在密码之上再加一套密码，虽然简单但也安全。

 

假设渊子原来一个BBS上的密码为zvbo9441987,为了方便记忆，他通过一种算法把这个密码变换成YUANzhi1987，这个密码是他的名字和出生年份，怎么忘都忘不了，而且可以明目张胆地放在显眼的地方而不被别人知道真正的密码。

 

他是这么变换的，大家都知道手机上的字母： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0,就这么简单，渊子把密码中出现的小写字母都变成对应的数字，数字和其他的符号都不做变换，

 

声明：密码中没有空格，而密码中出现的大写字母则变成小写之后往后移一位，如：X，先变成小写，再往后移一位，不就是y了嘛，简单吧。记住，z往后移是a哦。


输入描述:
输入包括多个测试数据。输入是一个明文，密码长度不超过100个字符，输入直到文件结尾

输出描述:
输出渊子真正的密文

示例1
输入
YUANzhi1987
输出
zvbo9441987

while(n = readline()) {
    getPassward(n);
}
function getPassward(str) {
    let newStr = '';
    let str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let str2 = 'bcdefghijklmnopqrstuvwxyza22233344455566677778889999';
    for(let i = 0; i < str.length; i++) {
        let s = str[i];
        if((s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z')) {
            s = str2[str1.indexOf(s)];
        }
        newStr += s;
    }
    console.log(newStr);
}
法二
const inp = readline();
const res1 = inp.replace(/([a-z])/g, ($,$1) => {
    if($1 >= 'a' && $1 <= 'c'){
        return '2';
    }else if($1 >= 'd' && $1 <= 'f'){
        return '3';
    }else if($1 >= 'g' && $1 <= 'i'){
        return '4';
    }else if($1 >= 'j' && $1 <= 'l'){
        return '5';
    }else if($1 >= 'm' && $1 <= 'o'){
        return '6';
    }else if($1 >= 'p' && $1 <= 's'){
        return '7';
    }else if($1 >= 't' && $1 <= 'v'){
        return '8';
    }else {
        return '9'
    }
})
const res2 = res1.replace(/([A-Z])/g, ($,$1) => {
    const char = $1.toLowerCase();
    let charCode = char.charCodeAt(0);
    if(char === 'z'){
        charCode = 97
    }else{
        charCode ++;
    }
    return String.fromCharCode(charCode);
})
console.log(res2);
26、	字符串排序【字符串 排序】
题目描述
编写一个程序，将输入字符串中的字符按如下规则排序。

规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。

如，输入： Type 输出： epTy

规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。

如，输入： BabA 输出： aABb

规则 3 ：非英文字母的其它字符保持原来的位置。


如，输入： By?e 输出： Be?y


注意有多组测试数据，即输入有多行，每一行单独处理（换行符隔开的表示不同行）


输入描述:
输入字符串
输出描述:
输出字符串
示例1
输入
A Famous Saying: Much Ado About Nothing (2012/8).
输出
A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
while(line=readline()){
    let s=line.split("");
    let box=[];
    let symbols=[];
    for(let i=0;i<26;i++){
        box[i]="";
    }
    for(let i=0;i<s.length;i++){
        let code=s[i].charCodeAt();
        if(code>=97 && code<123){
            box[code-97]+=s[i];
        }else if(code>=65 && code<91){
            box[code-65]+=s[i];
        }else{
            symbols.push([i,s[i]]);
        }
    }
    let res=box.join('');
    symbols.forEach(item=>{
        res=res.substring(0,item[0])+item[1]+res.substring(item[0]);
    })
    console.log(res);
}

34、	图片整理【字符串】
题目描述
Lily上课时使用字母数字图片教小朋友们学习英语单词，每次都需要把这些图片按照大小（ASCII码值从小到大）排列收好。请大家给Lily帮忙，通过C语言解决。

本题含有多组样例输入。


输入描述:
Lily使用的图片包括"A"到"Z"、"a"到"z"、"0"到"9"。输入字母或数字个数不超过1024。

输出描述:
Lily的所有图片按照从小到大的顺序输出

示例1
输入
Ihave1nose2hands10fingers
输出
0112Iaadeeefghhinnnorsssv

while(line = readline()){
    let a = line.split('').sort();
    print(a.join(''))
}

35、	蛇形矩阵【数组】
题目描述
蛇形矩阵是由1开始的自然数依次排列成的一个矩阵上三角形。

例如，当输入5时，应该输出的三角形为：

1 3 6 10 15

2 5 9 14

4 8 13

7 12

11


请注意本题含有多组样例输入。

输入描述:
输入正整数N（N不大于100）

输出描述:
输出一个N行的蛇形矩阵。

示例1
输入
4
输出
1 3 6 10
2 5 9
4 8
7
while(n = readline()) {
    let row = Number(n);
    let column = Number(n);
    let firstNum = 1;
    for(let i = 1; i <= row; i++) {
        let step = i + 1;
        let str = firstNum + ' ';
        let nextNum = firstNum;
        for(let j = 0; j < column - 1; j++) {
            nextNum += step;
            str += nextNum + ' ';
            step ++;
        }
        console.log(str);
        firstNum += i;
        column--;
    }
}

36、	字符串加密【字符串】
题目描述
有一种技巧可以对数据进行加密，它使用一个单词作为它的密匙。下面是它的工作原理：首先，选择一个单词作为密匙，如TRAILBLAZERS。如果单词中包含有重复的字母，只保留第1个，其余几个丢弃。现在，修改过的那个单词属于字母表的下面，如下所示：

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

T R A I L B Z E S C D F G H J K M N O P Q U V W X Y

上面其他用字母表中剩余的字母填充完整。在对信息进行加密时，信息中的每个字母被固定于顶上那行，并用下面那行的对应字母一一取代原文的字母(字母字符的大小写状态应该保留)。因此，使用这个密匙，Attack AT DAWN(黎明时攻击)就会被加密为Tpptad TP ITVH。

请实现下述接口，通过指定的密匙和明文得到密文。


本题有多组输入数据。

输入描述:
先输入key和要加密的字符串

输出描述:
返回加密后的字符串

示例1
输入
nihao
ni
输出
le
let a;
while(a=readline()){
    let b = readline()
    let str = '';
    for(let i =0;i<a.length;i++){
        if(str.indexOf(a[i])===-1){
            str+= a[i];
        }
    }
    let tab = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0;i<tab.length;i++){
        if(str.indexOf(tab[i])===-1){
            str+=tab[i]
        }
    }
    let res = '';
    for(let i=0;i<b.length;i++){
        if(/[A-Z]/.test(b[i])){
            res+=str[tab.indexOf(b[i])].toUpperCase();
        }else{
            res+=str[tab.indexOf(b[i])].toLowerCase()
        }
    }
    console.log(res);
}

38、	求小球落地5次后所经历的路程和第5次反弹的高度【模拟 思维】
题目描述
假设一个球从任意高度自由落下，每次落地后反跳回原高度的一半; 再落下, 求它在第5次落地时，共经历多少米?第5次反弹多高？

最后的误差判断是小数点6位



输入描述:
输入起始高度，int型

输出描述:
分别输出第5次落地时，共经过多少米第5次反弹多高

示例1
输入
复制
1
输出
复制
2.875
0.03125

let height = Number(readline())
let sum = Number(readline())
for(let n = 1;n<5;n++){
    sum += height 
    height = (height / 2)
}

console.log(sum.toFixed(6))
console.log((height/2).toFixed(6))

40、输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数【字符串】
题目描述
输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数。

本题包含多组输入。


输入描述:
输入一行字符串，可以有空格

输出描述:
统计其中英文字符，空格字符，数字字符，其他字符的个数

示例1
输入
复制
1qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\][
输出
复制
26
3
10
12
while(str=readline()){
   
    var num1=0,num2=0,num3=0,num4=0;
    for(var i=0;i<str.length;i++){
        if(str[i]>="a" && str[i]<="z" || str[i]>="A" && str[i]<="Z"){
            num1++;
        }else if(str[i]==' '){
            num2++;
        }else if(!isNaN(str[i])){
            num3++;
        }else{
            num4++;
        }
    }
    print(num1);
    print(num2);
    print(num3);
    print(num4);
}

43、	迷宫问题【排序】
题目描述
定义一个二维数组N*M（其中2<=N<=10;2<=M<=10），如5 × 5数组下所示：


int maze[5][5] = {
0, 1, 0, 0, 0,
0, 1, 0, 1, 0,
0, 0, 0, 0, 0,
0, 1, 1, 1, 0,
0, 0, 0, 1, 0,
};


它表示一个迷宫，其中的1表示墙壁，0表示可以走的路，只能横着走或竖着走，不能斜着走，要求编程序找出从左上角到右下角的最短路线。入口点为[0,0],既第一空格是可以走的路。


本题含有多组数据。

输入描述:
输入两个整数，分别表示二位数组的行数，列数。再输入相应的数组，其中的1表示墙壁，0表示可以走的路。数据保证有唯一解,不考虑有多解的情况，即迷宫只有一条通道。

输出描述:
左上角到右下角的最短路径，格式如样例所示。

示例1
输入
5 5
0 1 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 1 1 0
0 0 0 1 0
输出
(0,0)
(1,0)
(2,0)
(2,1)
(2,2)
(2,3)
(2,4)
(3,4)
(4,4)
while(str1=readline()){
    var N = parseInt(str1.split(' ')[0]);
    var M = parseInt(str1.split(' ')[1]);
    var lines = [];
    var tempY=0;
    var tempX=0;
    for(var i=0;i<N;i++){
        var line = readline();
        var nums = line.split(' ');       
        for(var j=tempY;j<M;j++){
            var number = parseInt(nums[j]);
            if(number==0 && (j==tempY || i==tempX)){  
                tempY = j;
                tempX = i;
                print('('+i+','+j+')');
            }else{               
                break;
            }
        }
    }
    
}

45、	名字的漂亮度【字符串】
题目描述
给出一个名字，该名字有26个字符串组成，定义这个字符串的“漂亮度”是其所有字母“漂亮度”的总和。
每个字母都有一个“漂亮度”，范围在1到26之间。没有任何两个字母拥有相同的“漂亮度”。字母忽略大小写。

给出多个名字，计算每个名字最大可能的“漂亮度”。

本题含有多组数据。

输入描述:
整数N，后续N个名字

输出描述:
每个名称可能的最大漂亮程度

示例1
输入
复制
2
zhangsan
lisi
输出
复制
192
101

while(N = readline()) {
    for(let i = 0; i < N; i++) {
      let arr = readline().split('');
      let obj = {}
      for(let j = 0; j < arr.length; j++) {
        if(obj[arr[j]]) {
          obj[arr[j]] = obj[arr[j]] + 1
        } else {
          obj[arr[j]] = 1
        }
      }
      let tmpArr = Object.values(obj)
      tmpArr.sort((a, b) => {
        return b - a;
      })
              let res = 0
              for(let k = 0; k < tmpArr.length; k++) {
              res += (26 - k) * Number(tmpArr[k])
        }
        console.log(res)
    }
  }

  46、	按字节截取字符串【字符串】
  题目描述
  输入一个字符串和一个整数k，截取字符串的前k个字符并输出
  本题输入含有多组数据
  输入描述:
  第一行输入待截取的字符串
  
  
  第二行输入一个正整数k，代表截取的长度
  
  输出描述:
  截取后的字符串
  
  示例1
  输入
  复制
  abABCcDEF
  6
  输出
  复制
  abABCc

var list = []
while (str = readline()) {
    list.push(str)
}
for (var i=0;i<list.length;i+=2) {
    var s = list[i]
    var k = parseInt(list[i+1])
    console.log(s.substring(0,k))
}
法二
while(str = readline()){
    var num = Number(readline())
    console.log(str.substring(0,num))
}
或
while(n=readline()){
    var arr=n.split(" ");
    var str=arr[0];
    var length=arr[1];
    console.log(str.substr(0,length));
} 

48、	从单向链表中删除指定值的节点【链表】
题目描述
输入一个单向链表和一个节点的值，从单向链表中删除等于该值的节点，删除后如果链表中无节点则返回空指针。

链表的值不能重复。

构造过程，例如

1 <- 2

3 <- 2

5 <- 1

4 <- 5

7 <- 2

最后的链表的顺序为 2 7 3 1 5 4

删除 结点 2

则结果为 7 3 1 5 4

链表长度不大于1000，每个节点的值不大于10000。
本题含有多组样例。

输入描述:
1 输入链表结点个数
2 输入头结点的值
3 按照格式插入各个结点
4 输入要删除的结点的值

输出描述:
输出删除结点后的序列，每个数后都要加空格

示例1
输入
复制
5
2
3 2
4 3
5 2
1 4
3
输出
复制
2 5 4 1 

while (line = readline()) {
    let arr = line.split(" ");//分割一行数据
    let numOfNode = arr.shift();//输入链表结点个数
    let head = arr.shift();// 输入头结点的值
    let node = arr.pop();//输入要删除的结点的值
    let linkedList = [head];
    for (let i = 0; i < numOfNode-1; i++) {
        let after = arr.shift();
        let before = arr.shift();
        let idx = linkedList.indexOf(before)+1;
        linkedList.splice(idx, 0, after);
    }
    let nodeIdx = linkedList.indexOf(node);
    linkedList.splice(nodeIdx, 1);
    console.log(linkedList.join(" ") + " ");
}

49、多线程【字符串 链表 栈 队列】
题目描述
问题描述：有4个线程和1个公共的字符数组。线程1的功能就是向数组输出A，线程2的功能就是向字符输出B，线程3的功能就是向数组输出C，线程4的功能就是向数组输出D。要求按顺序向数组赋值ABCDABCDABCD，ABCD的个数由线程函数1的参数指定。[注：C语言选手可使用WINDOWS SDK库函数]
接口说明：
void init();  //初始化函数
void Release(); //资源释放函数
unsignedint__stdcall ThreadFun1(PVOID pM)  ; //线程函数1，传入一个int类型的指针[取值范围：1 – 250，测试用例保证]，用于初始化输出A次数，资源需要线程释放
unsignedint__stdcall ThreadFun2(PVOID pM)  ;//线程函数2，无参数传入
unsignedint__stdcall ThreadFun3(PVOID pM)  ;//线程函数3，无参数传入
Unsigned int __stdcall ThreadFunc4(PVOID pM);//线程函数4，无参数传入
char  g_write[1032]; //线程1,2,3,4按顺序向该数组赋值。不用考虑数组是否越界，测试用例保证

输入描述:
本题含有多个样例输入。
输入一个int整数

输出描述:
对于每组样例，输出多个ABCD

示例1
输入
复制
10
输出
复制
ABCDABCDABCDABCDABCDABCDABCDABCDABCDABCD

while (num = Number(readline())){
    let str = ''
    for (i=0;i<num;i++){
        str += 'ABCD'
    }
    console.log(str)
}

52、	计算字符串的距离【字符串】
题目描述
Levenshtein 距离，又称编辑距离，指的是两个字符串之间，由一个转换成另一个所需的最少编辑操作次数。许可的编辑操作包括将一个字符替换成另一个字符，插入一个字符，删除一个字符。编辑距离的算法是首先由俄国科学家Levenshtein提出的，故又叫Levenshtein Distance。

Ex：

字符串A:abcdefg

字符串B: abcdef

通过增加或是删掉字符”g”的方式达到目的。这两种方案都需要一次操作。把这个操作所需要的次数定义为两个字符串的距离。

要求：

给定任意两个字符串，写出一个算法计算它们的编辑距离。



本题含有多组输入数据。


输入描述:
每组用例一共2行，为输入的两个字符串

输出描述:
每组用例输出一行，代表字符串的距离

示例1
输入
abcdefg
abcdef
abcde
abcdf
abcde
bcdef
输出
1
1
2

/*
lev[i][j]用来表示字符串a的[1...i]和字符串b[1...j]的levenshtein距离；
插入和删除操作互为逆过程：a删除指定字符变b等同于b插入指定字符变a；
如果a[i] == b[j]，则说明a[i]和b[j]分别加入a，b之后不会影响levenshtein距离，lev[i][j] = lev[i-1][j-1] + 0;
如果a[i] != b[j]，则需要考虑3种情况的可能：
a中插入字符，即lev[i][j] = lev[i-1][j] + 1;
b中插入字符，即lev[i][j] = lev[i][j-1] + 1;
a[i]替换成b[j]，lev[i][j] = lev[i-1][j-1] + 1;
取这4种情况的最小值。
*/
let str0;
while(str0 = readline()){
    let str1 = readline();
    console.log(listDis(str0,str1));
}
function listDis(src,dst){
    let dist = [];
    for(let i = 0;i <= src.length;i++){
        dist[i] = dist[i] || [];
        dist[i][0] = i;
    }
    for(let j = 0; j <= dst.length; j++){
        dist[0][j] = j;
    }
    for(let i = 1; i<=src.length;i++){
        for(let j = 1; j <= dst.length;j++){
            let flag = (src.charAt(i-1) == dst.charAt(j-1))? 0:1;
            dist[i][j] = Math.min(dist[i-1][j]+1,dist[i][j-1]+1,dist[i-1][j-1]+flag);
              
        }
    }
    return dist[src.length][dst.length];
}

55、	（练习用）挑7【穷举 数学】  --------
题目描述
输出7有关数字的个数，包括7的倍数，还有包含7的数字（如17，27，37...70，71，72，73...）的个数（一组测试用例里可能有多组数据，请注意处理）

输入描述:
一个正整数N。(N不大于30000)

输出描述:
不大于N的与7有关的数字个数，例如输入20，与7有关的数字包括7,14,17.

示例1
输入
复制
20
10
输出
复制
3
1

function getSeventCount(str){
    let number=parseInt(str);
    let countSum =0;
    if(number<7){
        return countSum;
    }
    if(number===7){
        return 1;
    }
    while(number>6){
        if(number%7===0||(number+'').indexOf('7')>-1){
            countSum++;
        }
        number--;
    }
    return countSum;
}

while(readlines=readline()){
    console.log(getSeventCount(readlines));
}

57、	无线OSS－高精度整数加法【字符串】
题目描述
输入两个用字符串表示的整数，求它们所表示的数之和。
字符串的长度不超过10000。
本题含有多组样例输入。
输入描述:
输入两个字符串。保证字符串只含有'0'~'9'字符

输出描述:
输出求和后的结果

示例1
输入
复制
9876543210
1234567890
输出
复制
11111111100
while(n = readline()){
    let num1 = n.trim();
    let num2 = readline().trim();
    let len = num1.length>num2.length?num1.length:num2.length;
    let arr = [];
    let sum = 0;
        let s = 0;
        let g = 0;
    let narr1 = num1.split('').reverse();
    let narr2 = num2.split('').reverse();
    for(let i=0;i<len;i++){
        let n1 = isNaN(parseInt(narr1[i]))?0:parseInt(narr1[i]);
        let n2 = isNaN(parseInt(narr2[i]))?0:parseInt(narr2[i]);
            sum = n1+n2+s;
            if(sum>=10){
                s = sum.toString().substr(0,1)*1;
                g = sum.toString().substr(1,2)*1;
            }else{
                s = 0;
                g = sum;
            }
       arr.push(g)
       
    }
    if(s>0){
        arr.push(s)
       }
    console.log(arr.reverse().join(''))
}


59、找出字符串中第一个只出现一次的字符【字符串】 ------
题目描述
找出字符串中第一个只出现一次的字符

输入描述:
输入几个非空字符串

输出描述:
输出第一个只出现一次的字符，如果不存在输出-1

示例1
输入
asdfasdfo
aabb
输出
o
-1

while(str = readline()){
    var res = str.trim().split('')
    var t = null
    for(var i=0;i<str.length;i++){
        if(res.filter(a=>a==str.charAt(i)).length == 1){
            t = str.charAt(i)
            break
        }
    }
    if(t){
        console.log(t)
    }else{
        console.log(-1)
    }
}
法二
while (str=readline()){
    let char="";
    let j=0;
    for (let i of str){
        let a=new RegExp(i,"g");
        if (str.match(a).length==1){
            char=i;
            j++;
            break;
        }
    }
    console.log(char==""?-1:char);
}

60、查找组成一个偶数最接近的两个素数【数学 穷举】
题目描述
任意一个偶数（大于2）都可以由2个素数组成，组成偶数的2个素数有很多种情况，本题目要求输出组成指定偶数的两个素数差值最小的素数对。
本题含有多组样例输入。
输入描述:
输入一个偶数

输出描述:
输出两个素数

示例1
输入
复制
20
输出
复制
7
13
while(line=readline()){
    var data=parseInt(line);
    for(var i=data/2;i<data;i++){
        var j=data-i;
        if(isPrime(i) && isPrime(j)){
            console.log(j+'\n'+i);
            break;
        }
    }
}
  
function isPrime(n){
    if(n>=2){
        for(var i=2;i<Math.ceil(n/2);i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

63、	DNA序列【字符串】
题目描述
一个DNA序列由A/C/G/T四个字母的排列组合组成。G和C的比例（定义为GC-Ratio）是序列中G和C两个字母的总的出现次数除以总的字母数目（也就是序列长度）。在基因工程中，这个比例非常重要。因为高的GC-Ratio可能是基因的起始点。

给定一个很长的DNA序列，以及要求的最小子序列长度，研究人员经常会需要在其中找出GC-Ratio最高的子序列。

本题含有多组样例输入。

输入描述:
输入一个string型基因序列，和int型子串的长度

输出描述:
找出GC比例最高的子串,如果有多个输出第一个的子串

示例1
输入
复制
AACTGTGCACGACCTGA
5
输出
复制
GCACG

while(str = readline()) {
    let n = Number(readline());
  
    console.log(func(str, n))
  }
  
  
  function func(str, n) {
    let max = 0;
    let temp = 0;
    let begin = 0;
    let end = n - 1;
    let maxBegin = begin;
    let maxEnd = end;
    let result = "";
  
    if(str.length <= n) {
      return str;
    }
  
    // 初始化第一个窗口中的C,G数量
    for(let i = begin ; i <= end ; ++i) {
      if(isCG(str[i])) {
        ++temp;
      }
    }
    max = temp;
  
    while(begin <= str.length - n) {
      if(!isCG(str[begin]) && isCG(str[end + 1])) {
        ++temp;
        if(max < temp) {
          max = temp;
          maxBegin = begin + 1;
          maxEnd = end + 1;
        }
      } else if(isCG(str[begin]) && !isCG(str[end + 1])) {
        --temp;
      }
      ++begin;
      ++end;
    }
  
    for(let i = maxBegin ; i <= maxEnd ; ++i) {
      result += str[i];
    }
  
    return result;
  }
  
  function isCG(char) {
    if(char == "C" || char == "G") {
      return true;
    }
    return false;
  }
65、查找两个字符串a,b中的最长公共子串【字符串】-----
题目描述
查找两个字符串a,b中的最长公共子串。若有多个，输出在较短串中最先出现的那个。
注：子串的定义：将一个字符串删去前缀和后缀（也可以不删）形成的字符串。请和“子序列”的概念分开！

本题含有多组输入数据！
输入描述:
输入两个字符串

输出描述:
返回重复出现的字符
示例1
输入
abcdefghijklmnop
abcsafjklmnopqrstuvw
输出
jklmnop

while(s1=readline(),s2=readline()){
    var s='';
    if(s1.length > s2.length){
        var t=s1;
        s1=s2;
        s2=t;
    }
    for(var i=0;i<s1.length;i++){
        for(var j=i+1;j<s1.length;j++){
            var temp=s1.substr(i,j-i+1)
            if(s2.indexOf(temp)!=-1){
                if(s.length<temp.length){
                    s=temp
                }
            }else break;
        }
    }
    print(s)
}

67、	24点游戏算法【dfs 搜索】
题目描述
问题描述：给出4个1-10的数字，通过加减乘除，得到数字为24就算胜利
输入：
4个1-10的数字。[数字允许重复，但每个数字仅允许使用一次，测试用例保证无异常数字。
输出：

true or false

本题含有多组样例输入。
输入描述:
输入4个int整数

输出描述:
返回能否得到24点，能输出true，不能输出false

示例1
输入
复制
7 2 1 10
输出
复制
true

// 穷举法：
// 将 4 个数的排列分为 A、B、C、D 四个位置，有 4*3*2*1 种可能
// 对于其中的运算符位置（有3个），有 + - * / 四种运算，有 4*4*4 种可能 
// 为了避免运算符的优先级效果影响，可以每次取两个数做四则运算，然后将结果和第三个数进行运算，再将结果和第四个数进行运算（采用递归）
let line = ''
while(line = readline()) {
    let arr = line.split(' ').map(item => Number(item));
    let visited = [false, false, false, false];        // 判断每个数是否被访问
    let res = false;
    
    for(let i=0; i<4; i++) {
        visited[i] = true;
        if(!res) {
            if(cal(arr[i], 1, arr)) {
                res = true;
                break;
            }
        }
        visited[i] = false;
    }
    console.log(res);
    
   
    function cal(sum, count, nums) {
        // sum: 当前计算总值，count: 已计算的个数，nums: 要计算的数组
        if(count === 4) {
            return sum === 24;
        }
        for(let i=0; i<4; i++) {
            if(visited[i]) {
                // 每个数字仅允许使用一次
                continue;
            }
            visited[i] = true;
            // 加
            if(cal(sum+nums[i], count+1, nums)) {
                return true;
            }
            // 减
            if(cal(sum-nums[i], count+1, nums)) {
                return true;
            }
            // 乘
            if(cal(sum*nums[i], count+1, nums)) {
                return true;
            }
            // 除 可以整除
            if(!(sum%nums[i]) && cal(sum/nums[i], count+1, nums)) {
                return true;
            }
            visited[i] = false;
        }
    }
}

70、	矩阵乘法计算量估算【字符串】

题目描述
矩阵乘法的运算量与矩阵乘法的顺序强相关。
例如：

A是一个50×10的矩阵，B是10×20的矩阵，C是20×5的矩阵

计算A*B*C有两种顺序：（（AB）C）或者（A（BC）），前者需要计算15000次乘法，后者只需要3500次。

编写程序计算不同的计算顺序需要进行的乘法次数。

本题含有多组样例输入！



输入描述:
输入多行，先输入要计算乘法的矩阵个数n，每个矩阵的行数，列数，总共2n的数，最后输入要计算的法则
计算的法则为一个字符串，仅由左右括号和大写字母（'A'~'Z'）组成，保证括号是匹配的且输入合法！

输出描述:
输出需要进行的乘法次数

示例1
输入
复制
3
50 10
10 20
20 5
(A(BC))
输出
复制
3500

while(n = parseInt(readline())){
    var arr = [];
    var count = 0;
    for(let i=0; i<n; i++){
        arr[i] = readline().split(' ').map(item => +item);
    }
    var rule = readline();
    var sta = [];
    for(let i=0; i<rule.length; i++){
        if(rule[i] == '('){
        }else if(rule[i] == ')'){
            if(sta.length >= 2){
                let a = sta.pop();
                let b = sta.pop();
                count += a[1]*b[0]*b[1];
                sta.push([b[0], a[1]]);
            }
        }else{
                sta.push(arr[rule.charCodeAt(i)-65]);
        }
    }
    console.log(count)
}

71、	字符串通配符【字符串】
题目描述
问题描述：在计算机中，通配符一种特殊语法，广泛应用于文件搜索、数据库、正则表达式等领域。现要求各位实现字符串通配符的算法。
要求：
实现如下2个通配符：
*：匹配0个或以上的字符（字符由英文字母和数字0-9组成，不区分大小写。下同）
？：匹配1个字符


输入：
通配符表达式；
一组字符串。


输出：

返回匹配的结果，正确输出true，错误输出false

本题含有多组样例输入！
输入描述:
先输入一个带有通配符的字符串，再输入一个需要匹配的字符串

输出描述:
返回匹配的结果，正确输出true，错误输出false

示例1
输入
复制
te?t*.*
txt12.xls
输出
复制
false

while(str1=readline()){
    str2=readline();
    let regstr=str1.replace(/\*/g,"[a-zA-Z0-9]*").replace(/\?/g,'[a-zA-Z0-9]?');
    regexp=new RegExp(regstr);
    console.log(regexp.test(str2));
}


88、	扑克牌大小【字符串 队列 链表 栈】
题目描述
扑克牌游戏大家应该都比较熟悉了，一副牌由54张组成，含3~A、2各4张，小王1张，大王1张。牌面从小到大用如下字符和字符串表示（其中，小写joker表示小王，大写JOKER表示大王）：
3 4 5 6 7 8 9 10 J Q K A 2 joker JOKER
输入两手牌，两手牌之间用"-"连接，每手牌的每张牌以空格分隔，"-"两边没有空格，如：4 4 4 4-joker JOKER。
请比较两手牌大小，输出较大的牌，如果不存在比较关系则输出ERROR。
基本规则：
（1）输入每手牌可能是个子、对子、顺子（连续5张）、三个、炸弹（四个）和对王中的一种，不存在其他情况，由输入保证两手牌都是合法的，顺子已经从小到大排列；
（2）除了炸弹和对王可以和所有牌比较之外，其他类型的牌只能跟相同类型的存在比较关系（如，对子跟对子比较，三个跟三个比较），不考虑拆牌情况（如：将对子拆分成个子）；
（3）大小规则跟大家平时了解的常见规则相同，个子、对子、三个比较牌面大小；顺子比较最小牌大小；炸弹大于前面所有的牌，炸弹之间比较牌面大小；对王是最大的牌；

（4）输入的两手牌不会出现相等的情况。

 

 


输入描述:
输入两手牌，两手牌之间用"-"连接，每手牌的每张牌以空格分隔，"-"两边没有空格，如 4 4 4 4-joker JOKER。

输出描述:
输出两手牌中较大的那手，不含连接符，扑克牌顺序不变，仍以空格隔开；如果不存在比较关系则输出ERROR。

示例1
输入
复制
4 4 4 4-joker JOKER
输出
复制
joker JOKER

function digit(i){
    let d = parseInt(i);
    switch(i){
        case 'J': d = 11; break;
        case 'Q': d = 12; break;
        case 'K': d = 13; break;
        case 'A': d = 14; break;
        case '2': d = 15; break;
    }
    return d;
}
 
function check(a, b){
    let one = a.split(' ');
    let two = b.split(' ');
     
    if (one.length !== two.length) {
        if (one.length === 2 && (one[0] === 'joker' || one[1] === 'joker')) {
            return a;
        }
        else if (two.length === 2 && (two[0] === 'joker' || two[1] === 'joker')) {
            return b;
        }
        else if (one.length === 4 && (one[0] === one[2])) {
            return a;
        }
        else if (two.length === 4 && (two[0] === two[2])) {
            return b;
        }
        else {
            return 'ERROR';
        }
    }
    else {    // Same length
        return digit(one[0]) > digit(two[0]) ? a : b;
    }
}
while(poker = readline()){
    let two = poker.split('-');
    console.log(check(two[0], two[1]))
}

90、合法IP【字符串 链表 队列 栈】
题目描述
现在IPV4下用一个32位无符号整数来表示，一般用点分方式来显示，点将IP地址分成4个部分，每个部分为8位，表示成一个无符号整数（因此不需要用正号出现），如10.137.17.1，是我们非常熟悉的IP地址，一个IP地址串中没有空格出现（因为要表示成一个32数字）。

现在需要你用程序来判断IP是否合法。

注意本题有多组样例输入。

输入描述:
输入一个ip地址，保证是xx.xx.xx.xx的形式（xx为整数）

输出描述:
返回判断的结果YES or NO

示例1
输入
复制
10.138.15.1
255.0.0.255
255.255.255.1000
输出
复制
YES
YES
NO

while (line = readline()) {
    console.log(fn(line))
}

function fn(ip) {
    let arr = ip.split('.')
    let flag = 'YES'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 255 || arr[i] < 0) {
            flag = 'NO'
            break;
        }
    }
    return flag
}

96、	表示数字【字符串】
题目描述
将一个字符中所有的整数前后加上符号“*”，其他字符保持不变。连续的数字视为一个整数。

注意：本题有多组样例输入。
输入描述:
输入一个字符串

输出描述:
字符中所有出现的数字前后加上符号“*”，其他字符保持不变

示例1
输入
复制
Jkdi234klowe90a3
5151
输出
复制
Jkdi*234*klowe*90*a*3*
*5151*
while(line =readline()){
    var out = line.replace(/(\d+)/g,'*$1*');
    console.log(out);
}

99、	自守数
题目描述
自守数是指一个数的平方的尾数等于该数自身的自然数。例如：25^2 = 625，76^2 = 5776，9376^2 = 87909376。请求出n以内的自守数的个数


接口说明


/*
功能: 求出n以内的自守数的个数


输入参数：
int n

返回值：
n以内自守数的数量。
*/


public static int CalcAutomorphicNumbers( int n)
{
/*在这里实现功能*/

return 0;
}
本题有多组输入数据，请使用while(cin>>)等方式处理


输入描述:
int型整数

输出描述:
n以内自守数的数量。

示例1
输入
复制
2000
输出
复制
8

function getX(n){
    let s = 0
    for(let i=0;i<=n;i++){
        let xx = i*i+''
        if(xx.endsWith(i)){
            s++
        }
    }
    return s
}
while(n=readline()){
    console.log(getX(n))
}

102、	字符统计【排序 字符串】
题目描述
输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，如果统计的个数相同，则按照ASCII码由小到大排序输出。
本题含有多组样例输入

输入描述:
一个只包含小写英文字母和数字的字符串。

输出描述:
一个字符串，为不同字母出现次数的降序表示。若出现次数相同，则按ASCII码的升序输出。

示例1
输入
复制
aaddccddc
1b1bbbbbbbbb
输出
复制
cda
b1
说明
第一个样例里，c和d出现3次，a出现2次，但c的ASCII码比d小，所以先输出c，再输出d，最后输出a.
 
while( str=readline()){

    var obj = {};
    for (let i = 0; i < str.length; i++) {//对象统计
        if (obj[str[i]]) { obj[str[i]]++; }
        else {
            obj[str[i]] = 1;
        }
    }      
    var res = '';
    var arr = Object.keys(obj); // 获取所有的key值

    for (let i = 0; i < arr.length; i++) {
        fn();
    }
    console.log(res)
    function fn() {
        //比较函数
        var max = '';
        var maxn = 0;
        for (let k in obj) {
            if (obj[k] > maxn) {
                maxn = obj[k];
                max = k;
            }
            if (obj[k] == maxn) {
                if (k.charCodeAt() < max.charCodeAt()) {
                    maxn = obj[k];
                    max = k;
                }
            }

        }

        res = res + max;
        delete obj[max];
    }
}

103、	Redraiment的走法【排序】
题目描述
Redraiment是走梅花桩的高手。Redraiment可以选择任意一个起点，从前到后，但只能从低处往高处的桩子走。他希望走的步数最多，你能替Redraiment研究他最多走的步数吗？

本题含有多组样例输入


输入描述:
输入多行，先输入数组的个数，再输入相应个数的整数

输出描述:
输出结果

示例1
输入
复制
6
2 5 1 5 4 5 
3
3 2 1
输出
复制
3
1
说明
6个点的高度各为 2 5 1 5 4 5
如从第1格开始走,最多为3步, 2 4 5
从第2格开始走,最多只有1步,5
而从第3格开始走最多有3步,1 4 5
从第5格开始走最多有2步,4 5
所以这个结果是3。  
while(n = readline()) {
    let arr = readline().split(' ').map(Number)
    let dp = []
    let res = 0
    for(let i=0; i<n; i++) {
        dp[i] = 1
        for(let j=0;j<i;j++) {
            if(arr[j]<arr[i]){
                dp[i] = Math.max(dp[j]+1, dp[i])
            }
        }
        res = Math.max(res, dp[i])
    }
    console.log(res)
}

107、	求解立方根【二分法 数学】
题目描述
计算一个数字的立方根，不使用库函数。
保留一位小数。


输入描述:
待求解参数，为double类型（一个实数）

输出描述:
输入参数的立方根。保留一位小数。

示例1
输入
复制
216
输出
复制
6.0
【Python2.7解法】
n = float(input())
x = 1
while abs(x**3 - n)>1e-7:
    x = (2*x/3)+n/3/x/x
print round(x,1)