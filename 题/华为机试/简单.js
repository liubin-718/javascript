/* javaScript(V86.0.0) */
/* 入门 开始 */
7、	取近似值
题目描述
写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于5,向上取整；小于5，则向下取整。

输入描述:
输入一个正浮点数值

输出描述:
输出该数值的近似整数值

示例1
输入
5.5
输出
6
console.info(Math.round(readline()))
或
console.log(Math.round(+(readline())))
15、求int型数据在内存中存储时1的个数【位运算】
题目描述
输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。

输入描述:
 输入一个整数（int类型）

输出描述:
 这个数转换成2进制后，输出1的个数

示例1
输入
5
输出
2
let num=readline();
let count=0;
while(num >= 1){
    if(num%2===1){
        count++;
    }
    num = Math.floor(num/2);
}
console.log(count);
法二

var sourceNum = readline();
var resultStr = '';
var resultCount = 0;
while(sourceNum >= 1){ 
    if(1 == sourceNum % 2){
        resultCount ++;    
    }
    resultStr = (sourceNum % 2) + resultStr; 
    sourceNum = (sourceNum / 2).toString().split('.')[0]; 
} 
console.log(resultCount);

/* 入门 结束 */
11、	数字颠倒
题目描述
输入一个整数，将这个整数以字符串的形式逆序输出
程序不考虑负数的情况，若数字含有0，则逆序形式也含有0，如输入为100，则输出为001


输入描述:
输入一个int整数

输出描述:
将这个整数以字符串的形式逆序输出

示例1
输入
1516000
输出
0006151
let str = String(readline());
let res = ''
for(let i=str.length-1;i>=0;i--){
    res += str[i]
}
console.log(res)
12、字符串翻转
题目描述
接受一个只包含小写字母的字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）

输入描述:
输入一行，为一个只包含小写字母的字符串。

输出描述:
输出该字符串反转后的字符串。

示例1
输入
abcd
输出
dcba

while(line=readline()){
    console.log(line.split("").reverse().join(""))
}
22、	汽水瓶【模拟】
题目描述
有这样一道智力题：“某商店规定：三个空汽水瓶可以换一瓶汽水。小张手上有十个空汽水瓶，她最多可以换多少瓶汽水喝？”答案是5瓶，方法如下：先用9个空瓶子换3瓶汽水，喝掉3瓶满的，喝完以后4个空瓶子，用3个再换一瓶，喝掉这瓶满的，这时候剩2个空瓶子。然后你让老板先借给你一瓶汽水，喝掉这瓶满的，喝完以后用3个空瓶子换一瓶满的还给老板。如果小张手上有n个空汽水瓶，最多可以换多少瓶汽水喝？
输入描述:
输入文件最多包含10组测试数据，每个数据占一行，仅包含一个正整数n（1<=n<=100），表示小张手上的空汽水瓶数。n=0表示输入结束，你的程序不应当处理这一行。

输出描述:
对于每组测试数据，输出一行，表示最多可以喝的汽水瓶数。如果一瓶也喝不到，输出0。

示例1
输入
3
10
81
0
输出
1
5
40
while (n = readline()) {
    if (n !== '0') {
        console.log(calculate(Number(n)))
    }
}

function calculate(n) {
    if (n < 2) {
        return 0;
    }
    if (n === 2) {
        return 1
    }
    let drink = Math.floor(n / 3);
    return calculate(drink + n % 3) + drink;
}
法二
while(n=readline()){
    console.log(parseInt(n/2));
}
37、统计每个月兔子的总数【排序】
题目描述
有一只兔子，从出生后第3个月起每个月都生一只兔子，小兔子长到第三个月后每个月又生一只兔子，假如兔子都不死，问每个月的兔子总数为多少？

本题有多组数据。

输入描述:
输入int型表示month

输出描述:
输出兔子总数int型

示例1
输入
复制
9
输出
复制
34
while (line = readline()) {
    let month = parseInt(line);
    let pre = 0;
    let cur = 1;
    for (let i = 2; i <= month; i++) {
        let tmp = cur;
        cur = cur + pre;
        pre = tmp;
    }
    print(cur);
}
50、四则运算【字符串 栈 数学】
题目描述
输入一个表达式（用字符串表示），求这个表达式的值。
保证字符串中的有效字符包括[‘0’-‘9’],‘+’,‘-’, ‘*’,‘/’ ,‘(’， ‘)’,‘[’, ‘]’,‘{’ ,‘}’。且表达式一定合法。



输入描述:
输入一个算术表达式

输出描述:
得到计算结果

示例1
输入
3+2*{1+2*[-4/(8-6)+7]}
输出
25
let str = readline()
console.log(eval(str))
53、	iNOC产品部-杨辉三角的变形【字符串】
题目描述
1

1  1  1

1  2  3  2  1

1  3  6  7  6  3  1

1  4  10 16 19  16 10  4  1

以上三角形的数阵，第一行只有一个数1，以下每行的每个数，是恰好是它上面的数，左上角数到右上角的数，3个数之和（如果不存在某个数，认为该数就是0）。

求第n行第一个偶数出现的位置。如果没有偶数，则输出-1。例如输入3,则输出2，输入4则输出3。


输入n(n <= 1000000000)
本题有多组输入数据，输入到文件末尾，请使用while(cin>>)等方式读入
输入描述:
输入一个int整数

输出描述:
输出返回的int值

示例1
输入
复制
4
2
输出
复制
3
-1
while(n=parseInt(readline())){
    if(n==1||n==2){
        console.log(-1)
    }
    else{
        if(n%2==1){
            console.log(2)
        }
        else if(n%4==0){
            console.log(3)
        }
        else {
            console.log(4)
        }
    }
}
54、	表达式求值【字符串 数学 栈】
题目描述
给定一个字符串描述的算术表达式，计算出结果值。

输入字符串长度不超过100，合法的字符包括”+, -, *, /, (, )”，”0-9”，字符串内容的合法性及表达式语法的合法性由做题者检查。本题目只涉及整型计算。

输入描述:
输入算术表达式

输出描述:
计算出结果值

示例1
输入
复制
400+5
输出
复制
405

var stext = readline(); //测试语句
console.log(eval(stext));
56、	iNOC产品部--完全数计算【数学】
题目描述
完全数（Perfect number），又称完美数或完备数，是一些特殊的自然数。

它所有的真因子（即除了自身以外的约数）的和（即因子函数），恰好等于它本身。

例如：28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。s

输入n，请输出n以内(含n)完全数的个数。计算范围, 0 < n <= 500000


本题输入含有多组样例。

输入描述:
输入一个数字n

输出描述:
输出不超过n的完全数的个数

示例1
输入
复制
1000
7
100
输出
复制
3
1
2
while (n = parseInt(readline())){
    if (n < 28){
        console.log(1);
    }else if (n < 496){
        console.log(2);
    }else if (n < 8128){
        console.log(3);
    }else if (n < 33550366){
        console.log(4);
    }else {
        console.log(5);
    }
}
61、放苹果【递归 动态规划】
题目描述
题目描述

把m个同样的苹果放在n个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？（用K表示）5，1，1和1，5，1 是同一种分法。

数据范围：0<=m<=10，1<=n<=10。
本题含有多组样例输入。


输入描述:
输入两个int整数

输出描述:
输出结果，int型

示例1
输入
7 3
输出
8
function fun(m,n){
    if(m==1 || n==1){
        return 1
    } else if(m < 0 || n<=0)
        return 0;
    return (fun(m-n,n) + fun(m,n-1)) 
}
while(str=readline()){
    let m=str.split(' ')[0];
    let n=str.split(' ')[1]
    console.log(fun(m,n))
}
62、	查找输入整数二进制中1的个数【位运算】
题目描述

输入一个正整数，计算它在二进制下的1的个数。
注意多组输入输出！！！！！！
输入描述:
输入一个整数

输出描述:
计算整数二进制中1的个数

示例1
输入
复制
5
输出
复制
2
说明
5的二进制表示是101，有2个1 
while(line=readline()){
    var s=parseInt(line);
    var a=s.toString(2).split("");
    var count=0;
    for(var i=0;i<a.length;i++){
        if(a[i]==1){
            count++;
        }
    }
    console.log(count);
}
66、配置文件恢复【字符串】
题目描述
有6条配置命令，它们执行的结果分别是：

命   令	执   行
reset	reset what
reset board	board fault
board add	where to add
board delete	no board at all
reboot backplane	impossible
backplane abort	install first
he he	unknown command
注意：he he不是命令。

为了简化输入，方便用户，以“最短唯一匹配原则”匹配：
1、若只输入一字串，则只匹配一个关键字的命令行。例如输入：r，根据该规则，匹配命令reset，执行结果为：reset what；输入：res，根据该规则，匹配命令reset，执行结果为：reset what；
2、若只输入一字串，但本条命令有两个关键字，则匹配失败。例如输入：reb，可以找到命令reboot backpalne，但是该命令有两个关键词，所有匹配失败，执行结果为：unknown command
3、若输入两字串，则先匹配第一关键字，如果有匹配但不唯一，继续匹配第二关键字，如果仍不唯一，匹配失败。例如输入：r b，找到匹配命令reset board 和 reboot backplane，执行结果为：unkown command。

4、若输入两字串，则先匹配第一关键字，如果有匹配但不唯一，继续匹配第二关键字，如果唯一，匹配成功。例如输入：b a，无法确定是命令board add还是backplane abort，匹配失败。
5、若输入两字串，第一关键字匹配成功，则匹配第二关键字，若无匹配，失败。例如输入：bo a，确定是命令board add，匹配成功。
6、若匹配失败，打印“unknown command”


输入描述:
多行字符串，每行字符串一条命令

输出描述:
执行结果，每条命令输出一行

示例1
输入
reset
reset board
board add
board delet
reboot backplane
backplane abort
输出
reset what
board fault
where to add
no board at all
impossible
install first

let n;
while(n=readline()){
    if(n=='reset'){
        console.log('reset what')
    }else if(n=='reset board'){
        console.log('board fault')
    }else if(n=='board add'){
        console.log('where to add')
    }else if(n=='board delete'){
        console.log('no board at all')
    }else if(n=='reboot backplane'){
        console.log('impossible')
    }else if(n=='backplane abort'){
        console.log('install first')
    }else if(n=='he he'){
        console.log("unknown command")
    }
}

72、	百钱买百鸡问题
题目描述
公元前五世纪，我国古代数学家张丘建在《算经》一书中提出了“百鸡问题”：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？

详细描述：

接口说明

原型：

int GetResult(vector &list)

输入参数：

        无

输出参数（指针指向的内存区域保证有效）：

    list  鸡翁、鸡母、鸡雏组合的列表

返回值：

     -1 失败     

     0 成功

 

 

输入描述:
输入任何一个整数，即可运行程序。

输出描述:
 

示例1
输入
1
输出
0 25 75
4 18 78
8 11 81
12 4 84

while (n = readline()) {
    for (let i = 0; i < 100 / 5; i++) {
        for (let j = 0; j < 100 / 3; j++) {
            let z = 100 - i * 5 - j * 3; // 剩余钱数
            if(i + j + z * 3 === 100) {
                console.log(i + ' ' + j + ' ' + z * 3);
            }
        }
    }
}
73、	计算日期到天数转换
题目描述
根据输入的日期，计算是这一年的第几天。。

测试用例有多组，注意循环输入

输入描述:
输入多行，每行空格分割，分别是年，月，日

输出描述:
成功:返回outDay输出计算后的第几天;
                                           失败:返回-1

示例1
输入
2012 12 31
输出
366
while(a = readline()) {
    let bbb = String(a).split(' ');
    let year = +bbb[0];
    let month = +bbb[1];
    let day = +bbb[2];

    let res = 0;
    let renDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    let days = [31,28,31,30,31,30,31,31,30,31,30,31];

    for (let i=0;i<month-1;i++) {
        if (year%4 == 0 && year%100 != 0 || year%400 == 0) {
            res+= renDays[i];
        } else {
            res+= days[i];
        }
    }
    res+=day;

    console.log(res);

}
74、	参数解析【字符串】
题目描述
在命令行输入如下命令：

xcopy /s c:\ d:\，

各个参数如下： 

参数1：命令字xcopy 

参数2：字符串/s

参数3：字符串c:\

参数4: 字符串d:\

请编写一个参数解析程序，实现将命令行各个参数解析出来。

 

解析规则： 

1.参数分隔符为空格 
2.对于用“”包含起来的参数，如果中间有空格，不能解析为多个参数。比如在命令行输入xcopy /s “C:\program files” “d:\”时，参数仍然是4个，第3个参数应该是字符串C:\program files，而不是C:\program，注意输出参数时，需要将“”去掉，引号不存在嵌套情况。
3.参数不定长 
4.输入由用例保证，不会出现不符合要求的输入 
 

 

输入描述:
输入一行字符串，可以有空格

输出描述:
输出参数个数，分解后的参数，每个参数都独占一行

示例1
输入
xcopy /s c:\\ d:\\
输出
4
xcopy
/s
c:\\
d:\\
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.on('line',function(iuput){
    const  str=iuput.trim()+" ";
    let quote=false;//表示当前子串里是否有""；
    let spaceIdx=0,char;
    const res=[];
    for(let i=0;i<str.length;i++){
        char=str[i];
        if(char==='"') quote=!quote;
        if(char!==" "||quote){
            spaceIdx++
        }else{
            res.push(str.substr(i-spaceIdx,spaceIdx).replace(/["]/g,''));
            spaceIdx=0;
        }
    }
    console.log(res.length);
    res.forEach(word=>{
        console.log(word);
    })
 })

 75、	公共字串计算【字符串 查找】
 题目描述
 给定两个只包含小写字母的字符串，计算两个字符串的最大公共子串的长度。
 
 注：子串的定义指一个字符串删掉其部分前缀和后缀（也可以不删）后形成的字符串。
 
 输入描述:
 输入两个只包含小写字母的字符串
 
 输出描述:
 输出一个整数，代表最大公共子串的长度
 
 示例1
 输入
 asdfas
 werasdfaswer
 输出
 6
 let s1,s2;
 while(s1=readline(),s2=readline()){
     let len = 0;
     let res = 0;
     for(let i=0;i<s1.length;i++){
         while(s2.includes(s1.substr(i,len+1)) && len< s1.length-i){
             len++;
         }
         if(len>res) res=len;
         len = 0;
     }
     console.log(res)
 }

 76、	尼科彻斯定理【数学】
 题目描述
 验证尼科彻斯定理，即：任何一个整数m的立方都可以写成m个连续奇数之和。
 
 例如：
 
 1^3=1
 
 2^3=3+5
 
 3^3=7+9+11
 
 4^3=13+15+17+19
 
 输入一个正整数m（m≤100），将m的立方写成m个连续奇数之和的形式输出。
 本题含有多组输入数据。
 
 输入描述:
 输入一个int整数
 
 输出描述:
 输出分解后的string
 
 示例1
 输入
 复制
 6
 输出
 复制
 31+33+35+37+39+41
 while(n = readline()){
    
    let num = n*n - n +1;
    let numm = num + 2*n -2;
    let string = "";
    for(let i = num;i< numm;i = i+2){
        string += i + "+"; 
    }
    
    console.log(string + numm);
}
83、	二维数组操作【数组】
题目描述
有一个大小的数据表，你会依次进行以下5种操作：
1.输入和，初始化大小的表格。
2.输入x_1x 
1
​	
 、y_1y 
1
​	
 、x_2x 
2
​	
 、y_2y 
2
​	
 ，交换坐标在(x_1,y_1)(x 
1
​	
 ,y 
1
​	
 )和(x_2,y_2)(x 
2
​	
 ,y 
2
​	
 )的两个数。
3.输入，在第行左边添加一行。
4.输入，在第列上方添加一列。
5.输入、，查找坐标为的单元格的值。
请编写程序，判断对表格的各种操作是否合法。

详细要求:

1.数据表的最大规格为9行*9列，对表格进行操作时遇到超出规格应该返回错误。
2.对于插入操作，如果插入后行数或列数超过9了则应返回错误。如果插入成功了则将数据表恢复至初始化的大小，多出的数据则应舍弃。
3.所有输入坐标操作，对大小的表格，行号坐标只允许0~m-1，列号坐标只允许0~n-1。超出范围应该返回错误。

本题含有多组样例输入！
输入描述:
输入数据按下列顺序输入：
1 表格的行列值
2 要交换的两个单元格的行列值
3 输入要插入的行的数值
4 输入要插入的列的数值
5 输入要查询的单元格的坐标

输出描述:
输出按下列顺序输出：
1 初始化表格是否成功，若成功则返回0， 否则返回-1
2 输出交换单元格是否成功
3 输出插入行是否成功
4 输出插入列是否成功
5 输出查询单元格数据是否成功

示例1
输入
4 9
5 1 2 6
0
8
2 3
4 7
4 2 3 2
3
3
4 7
输出
0
-1
0
-1
0
0
-1
0
0
-1
说明
本组样例共有2组样例输入。
第一组样例：
1.初始化数据表为4行9列，成功
2.交换第5行1列和第2行6列的数据，失败。因为行的范围应该是(0,3)，不存在第5行。
3.在第0行左边添加一行，成功。
4.在第8列上方添加一列，失败。因为列的总数已经达到了9的上限。
5.查询第2行第3列的值，成功。
第二组样例：
1.初始化数据表为4行7列，成功
2.交换第4行2列和第3行2列的数据，失败。因为行的范围应该是(0,3)，不存在第4行。
3.在第3行左边添加一行，成功。
4.在第3列上方添加一列，成功。
5.查询第4行7列的值，失败。因为虽然添加了一行一列，但数据表会在添加后恢复成4行7列的形态，所以行的区间仍然在[0,3]，列的区间仍然在[0,6]，无法查询到(4,7)坐标。  
while(line = readline()){
    let [m,n] = line.split(' ')
    let [x1,y1,x2,y2] = readline().split(' ')
    let c = Number(readline())
    let r = Number(readline())
    let [x,y] = readline() 

    // m,n 合规
    if(m>=1 && m<=9 && n>=1 && n <= 9){
        console.log(0)
    }else{
        console.log(-1)
    }

    // 交换合规
    if(x1>=0 && x1<= m-1 && x2>=0 && x2<= m-1 && y1>=0 && y1<= n-1 && y2>=0 && y2<= n-1){
        console.log(0)
    }else{
        console.log(-1)
    }

    // 插入c合规
    if(c>=0 && c<=m-1 && m<= 8){
        console.log(0)
    }else{
        console.log(-1)
    }

    // 插入r合规
    if(r>=0 && r <= n-1 && n<=8){
        console.log(0)
    }else{
        console.log(-1)
    }

    if(x>=0 && x<=m-1 && y>=0 && y <= n-1){
        console.log(0)
    }else{
        console.log(-1)
    }
}

84、	统计大写字母个数【字符串】
题目描述
找出给定字符串中大写字符(即'A'-'Z')的个数。

输入描述:
本题含有多组样例输入
对于每组样例，输入一行，代表待统计的字符串

输出描述:
对于每组样例，输出一个整数，代表字符串中大写字母的个数

示例1
输入
add123#$%#%#O
150175017(&^%&$vabovbao
输出
1
0
let line;
while(line = readline()){
    test(line);
}

function test(string){
    let result = 0;
    for(let i=0;i<string.length;i++){
        let myunicode = string.charCodeAt(i);
        if(myunicode>=65 && myunicode<=90){
            result +=1;
        }
    }
    console.log(result);
}
法二
while(line = readline()){
    let arr = line.split('');
    let num = 0;
    for(let i = 0;i<arr.length;i++){
        let s = arr[i].charCodeAt();
        if(s>=65 && s <= 90){
            num++;
        }
    }
    console.log(num)
}

85、	字符串运用-密码截取【字符串 穷举】
题目描述
给定一个仅包含小写字母的字符串，求它的最长回文子串的长度。
所谓回文串，指左右对称的字符串。
所谓子串，指一个字符串删掉其部分前缀和后缀（也可以不删）的字符串
（注意：记得加上while处理多个测试用例）

输入描述:
输入一个仅包含小写字母的字符串

输出描述:
返回最长回文子串的长度

示例1
输入
cdabbacc
输出
4
说明
abba为最长的回文子串 
while(str =readline()){
    var max =0;
    for(var i=0;i<str.length;i++){
        
        if(str[i] == str[i+1]){
            var start = i;
            var end = i+1;
            
            while(start>=0 && end < str.length&& str[start] == str[end]){
                max = max > (end-start+1)?max:(end-start+1);
                start--;
                end++;
               
            }
        }
    }
    console.log(max)
}
86、	求最大连续bit数【位运算】
题目描述
求一个byte数字对应的二进制数字中1的最大连续数，例如3的二进制为00000011，最大连续2个1

本题含有多组样例输入。

输入描述:
输入一个byte数字

输出描述:
输出转成二进制之后连续1的个数

示例1
输入
3
5
输出
2
1
说明
3的二进制表示是11，最多有2个连续的1。
5的二进制表示是101，最多只有1个连续的1。 

while(line = readline()){
    var num = Number(line).toString(2);
    var max = 0;
    var temp = 0;
    var arr = num.split('0');
    for(let i =0;i<arr.length;i++){
        max = max >arr[i].length?max:arr[i].length;
    }
    console.log(max)
}
87、密码强度等级【字符串】 ---------
题目描述
密码按如下规则进行计分，并根据不同的得分为密码进行安全等级划分。

一、密码长度:

5 分: 小于等于4 个字符

10 分: 5 到7 字符

25 分: 大于等于8 个字符

二、字母:

0 分: 没有字母

10 分: 全都是小（大）写字母

20 分: 大小写混合字母

三、数字:

0 分: 没有数字

10 分: 1 个数字

20 分: 大于1 个数字

四、符号:

0 分: 没有符号

10 分: 1 个符号

25 分: 大于1 个符号

五、奖励:

2 分: 字母和数字

3 分: 字母、数字和符号

5 分: 大小写字母、数字和符号

最后的评分标准:

>= 90: 非常安全

>= 80: 安全（Secure）

>= 70: 非常强

>= 60: 强（Strong）

>= 50: 一般（Average）

>= 25: 弱（Weak）

>= 0:  非常弱


对应输出为：

VERY_SECURE

SECURE,

VERY_STRONG,

STRONG,

AVERAGE,

WEAK,

VERY_WEAK,


请根据输入的密码字符串，进行安全评定。

注：
/* 
字母：a-z, A-Z

数字：-9

符号包含如下： (ASCII码表可以在UltraEdit的菜单view->ASCII Table查看)

!"#$%&'()*+,-./     (ASCII码：x21~0x2F)

:;<=>?@             (ASCII<=><=><=><=><=>码：x3A~0x40)

[\]^_`              (ASCII码：x5B~0x60)

{|}~                (ASCII码：x7B~0x7E)

*/
输入描述:
本题含有多组输入样例。
每组样例输入一个string的密码

输出描述:
每组样例输出密码等级

示例1
输入
38$@NoNoNo
123
输出
VERY_SECURE
WEAK
说明
第一组样例密码强度为95分。
第二组样例密码强度为25分。

while(str = readline()) {
    let score = 0
    function lenScore(str) {
        if (str.length <= 4) {
            return 5
        } else if (str.length <= 7) {
            return 10
        } else {
            return 25
        }
    }
    function letter(str) {
        if (!/[a-z]/g.test(str) && !/[A-Z]/g.test(str)) {
            return 0
        } else if (/[a-z]/g.test(str) && /[A-Z]/g.test(str)) {
            return 20
        } else {
            return 10
        }
    }
    function num(str) {
        if (/\d{2,}/g.test(str)) {
            return 20
        } else if (/\d/g.test(str)) {
            return 10
        } else {
            return 0
        }
    }
    function isFlag(str){
        var count=0;
        var arr = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
        for(var i=0;i<str.length;i++) {
            if(arr.indexOf(str[i])!= -1) {
                count++;
            }
            if(count>1) {
                break;
            }
        }
        if (count < 1) {
            return 0
        } else if (count == 1) {
            return 10
        } else {
            return 25
        }
    }
    function better(str) {
        if (/[a-z]/g.test(str) && /[A-Z]/g.test(str) && /\d/g.test(str) && isFlag(str) > 0) {
            return 5
        } else if ((/[a-z]/g.test(str) || /[A-Z]/g.test(str)) && /\d/g.test(str) && isFlag(str) > 0) {
            return 3
        } else if ((/[a-z]/g.test(str) || /[A-Z]/g.test(str)) && /\d/g.test(str)) {
            return 2
        }
        return 0
    }
    score += lenScore(str)
    score += letter(str)
    score += num(str)
    score += isFlag(str)
    score += better(str)
    if(score >=90){
       console.log("VERY_SECURE")
    }else if(score >=80){
        console.log("SECURE")
    }else if(score >=70){
        console.log("VERY_STRONG")
    }else if(score >=60){
        console.log("STRONG")
    }else if(score >=50){
        console.log("AVERAGE")
    }else if(score >=25){
        console.log("WEAK")
    }else{
        console.log("VERY_WEAK")
    }
}

法二
while(line = readline()){
    pPassWord(line.toString());
}
function pPassWord(str){
    let num = 0;
    if(str.length <= 4){
        num = num +5;
    }else if(str.length>4 && str.length<=7){
        num = num +10;
    }else{
        num = num +25;
    }
    var saveNum = new Array(); //接收数字
    var saveLowerLetter = new Array(); //接收大写英文字母
    var saveUpperLetter = new Array(); //接收小写英文字母
    var savebz = new Array(); //接收符号
    for(var i=0; i<str.length; i++) {
        if((str[i].charCodeAt()) >= 48 && (str[i].charCodeAt()) <= 57) {
            saveNum.push(str[i]);
        }else if((str[i].charCodeAt()) >= 65 && (str[i].charCodeAt()) <= 90) {
            saveUpperLetter.push(str[i]);
        }else if((str[i].charCodeAt()) >= 97 && (str[i].charCodeAt()) <= 122) {
            saveLowerLetter.push(str[i]);
        }else{
            savebz.push(str[i]);
        }
    }
    if(saveNum.length = 1){
        num = num + 10;
    }else if(saveNum.length > 1){
        num = num + 20;
    }
    if(saveUpperLetter.length >0 && saveLowerLetter.length >0){
        num = num + 20;
    }else if(saveUpperLetter.length >0 || saveLowerLetter.length >0){
        num = num + 10;
    }
    if(savebz.length = 1){
         num = num + 10;
    }else if(savebz.length > 1){
        num = num + 25;
    }
    if(saveNum.length>0 && saveUpperLetter.length>0 && saveLowerLetter.length>0 && savebz.length>0){
        num = num + 5;
    }else if(saveNum.length>0 && saveUpperLetter.length>0 || saveLowerLetter.length>0 && savebz.length>0){
        num = num + 3;
    }else if(saveNum.length>0 && saveUpperLetter.length>0 || saveLowerLetter.length>0){
         num = num + 2;
    }
    if(num >= 90){
        console.log('VERY_SECURE');
    }else if(num >= 80){
        console.log('SECURE');
    }else if(num >= 70){
        console.log('VERY_STRONG');
    }else if(num >= 60){
        console.log('STRONG');
    }else if(num >= 50){
        console.log('AVERAGE');
    }else if(num >= 25){
        console.log('WEAK');
    }else if(num >= 0){
        console.log('VERY_WEAK');
    }     
}

91、走方格方案数 201301 JAVA 题目2-3级【字符串】
题目描述
请计算n*m的棋盘格子（n为横向的格子数，m为竖向的格子数）沿着各自边缘线从左上角走到右下角，总共有多少种走法，要求不能走回头路，即：只能往右和往下走，不能往左和往上走。

本题含有多组样例输入。
输入描述:
每组样例输入两个正整数n和m，用空格隔开。(1≤n,m≤8)

输出描述:
每组样例输出一行结果

示例1
输入
复制
2 2
1 2
输出
复制
6
3
while(str = readline()){
    let m = str.split(' ')[0];
    let n = str.split(' ')[1];
   console.log(fn(0,0,m,n))
}
function fn(a,b,m,n){
   if(a==m||b==n){
       return 1
   }
   return fn(a+1,b,m,n)+fn(a,b+1,m,n);
   
}

100、	等差数列【数学】 ------
题目描述
功能:等差数列 2，5，8，11，14。。。。

输入:正整数N >0

输出:求等差数列前N项和

本题为多组输入，请使用while(cin>>)等形式读取数据

输入描述:
输入一个正整数。

输出描述:
输出一个相加后的整数。

示例1
输入
复制
2
输出
复制
7

while(n=readline()){
    const diff =3;
    let s = 0;
    for(let i=1;i<=n;i++){
    s += i*diff-1
    }
    console.log(s)
}
法二
while(n = readline()){
    let s = 0
    for(let i = 1; i<=n ; i++){
        s += i*3-1
    }
    console.log(s)
}

106、	字符逆序【字符串】------
题目描述
将一个字符串str的内容颠倒过来，并输出。str的长度不超过100个字符。


输入描述:
输入一个字符串，可以有空格

输出描述:
输出逆序的字符串

示例1
输入
复制
I am a student
输出
复制
tneduts a ma I

while(str=readline()){
    var arr = "";
    for(i=str.length-1;i>=0;i--){
       arr += str[i]
    }
    console.log(arr)
}

108、	求最小公倍数【递归】
题目描述
正整数A和正整数B 的最小公倍数是指 能被A和B整除的最小的正整数值，设计一个算法，求输入A和B的最小公倍数。

输入描述:
输入两个正整数A和B。

输出描述:
输出A和B的最小公倍数。

示例1
输入
5 7
输出
35

var str = readline();
var arr= str.split(' ');

function getNum(a,b){
    var tem;
    while(b != 0){
        tem = a%b;
        a = b;
        b = tem;
    }
    return a;
}
function getRNum(a,b){
    return (a*b)/getNum(a,b);
}
console.log(getRNum(arr[0],arr[1]));

 