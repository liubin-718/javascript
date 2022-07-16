/** 
 * 打印(局部)
 * 使用：detailPrint(dom){this.$Print(document.getElementById(dom))}   dom为局部打印的id
 * 复杂的打印：可以使用插件pdf.js(其中V2.0(包含)以上不支持IE10，使用低版本可以兼容)
 * http://mozilla.github.io/pdf.js/getting_started/#download
 * @id [String] 
*/
export function Print(id){
    if(!(this instanceof Print)) return new Print(id)
    this.init(id)
}
Print.prototype = {
    createWindow: (function (){
        var iframe = null
        return function(){
            if(!iframe){
                var doc = document.createElement('iframe')
                doc.style.visibility = 'hidden'
                doc.style.position = 'fixed'
                doc.style.top = 0
                doc.style.right = 0
                doc.style.bottom = 0
                doc.style.left = 0
                doc.style.zIndex = -1
                iframe = doc
            }
            document.body.appendChild(iframe)
            return iframe
        }
    }()),
    toPrint: function (frameWindow){
        try {
            setTimeout(function(){
                frameWindow.focus()
                try {
                    if(!frameWindow.document.execCommand('print', false, null))
                    frameWindow.print()
                } catch (error) {
                    frameWindow.print()
                }
                frameWindow.close()
            }, 10)
        } catch (err) {
            console.log('err', err)
        }
    },
    wrapperRefDom: function(refDom){
        return refDom.cloneNode(true)
    },
    mapLinkHtml: function(){
        var links = document.getElementsByTagName('link')
        return links
    },
    mapStyleHtml: function(){
        var styles = document.getElementsByTagName('style')
        return styles
    },
    init: function(doc){
        var iframe = this.createWindow()
        var self = this
        iframe.onload = function(){
            var frameWindow = iframe.contentWindow
            var link = self.mapLinkHtml()
            var style = self.mapStyleHtml()
            if(link.length > 0){
                for(var i=0; i<link.length; i++){
                    var copyNodeLink = self.wrapperRefDom(link[i])
                    frameWindow.document.body.appendChild(copyNodeLink)
                }
            }
            if(style.length > 0){
                for(var i=0; i<style.length; i++){
                    var copyNodeStyle = self.wrapperRefDom(style[i])
                    frameWindow.document.body.appendChild(copyNodeStyle)
                }
            }
            if(doc){
                var result = self.wrapperRefDom(doc)
                frameWindow.document.body.appendChild(result)
            }
            self.toPrint(frameWindow)
        }
    }
}

/** 
 * 下载：excel
 * 调用接口除了传参(params， {responseType:'blob'})
 * 使用：this.$api.accountTran(params,{responseType:'bolb'}).then(res=>{this.$downloadXmlOrCsv(res.data,res.headers,(err)=>{alert(err)})})
 * 后台需要返回contentType字段，里面是filename
*/
export function $downloadXmlOrCsv(data, headers, errCb){
    const reader = new FileReader()
    reader.readAsText(data, 'utf-8')
    return new Promise((reslove, reject)=>{
        reader.onload = ()=>{
            if(headers.result.indexOf('errorMessage') !== -1){
                let {errorMessage} = JSON.parse(reader.result)
                reject(errorMessage)
            }else{
                reject('downSuccess')
            }
        }
    }).then(()=>{
        processDown(data, headers)
    }, (err)=>{
        errorCb(err)
    })
}
function processDown(data, headers){
    const disposition = headers['content-disposition']
    const fileName = disposition &&
                     disposition.slice(disposition.indexOf('filename') + 9)
    const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedacument.spreadsheetml.sheet'
    })
    if(navigator.msSaveOrOpenBlob){
        navigator.msSaveOrOpenBlob(blob, fileName)
    }
    let link = null
    const userAgent = navigator.userAgent
    // 兼容firefox
    if(userAgent.indexOf('Firefox') !== -1){
        link = document.getElementById('downloadDom')
    }else{
        link = document.createElement('a')
    }
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    // 如果不是火狐就把新建的 a删除
    if(userAgent.indexOf('Firefox') === -1){
        link.remove()
    }
}

 /*  
 * 解析 URL Params 为对象
 */
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'; parseParam(url) 
/* 结 果 { user: 'anonymous', id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型 city: '北京', // 中⽂需解码 enabled: true, // 未指定值得 key 约定为 true }*/
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后⾯的字符串取出来
  const paramsArr = paramsStr.split("&"); // 将字符串以 & 分割后存到数组 中
  let paramsObj = {}; // 将 params 存到对象中
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      let [key, val] = param.split("="); // 分割 key 和 value
      val = decodeURIComponent(val); // 解 码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象有 key，则添加⼀个值

        paramsObj[key] = [].concat(paramsObj[key], val);
      } else {
        // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  });
  return paramsObj;
}

/* 冒泡排序（Bubble Sort） 
实现思路: 
1. ⽐较相邻的元素。如果第⼀个⽐第⼆个⼤，就交换他们两个。 
2. 对每⼀对相邻元素作同样的⼯作，从开始第⼀对到结尾的最后⼀对。这步做完后，最后的元素会是最⼤的数。 
3. 针对所有的元素重复以上的步骤，除了最后⼀个。 
4. 持续每次对越来越少的元素重复上⾯的步骤，直到没有任何⼀对数字需要⽐较。 
 */
arr=[3,43,38,5,47,15,36,26,27,2,46,4,18,50,48]
function bubbleSort(arr) { 
    var len = arr.length; 
    for (var i = 0; i < len; i++) { 
        for (var j = 0; j < len - 1 - i; j++) { 
            if (arr[j] > arr[j+1]) { 
                var temp = arr[j+1]; arr[j+1] = arr[j]; arr[j] = temp; 
            } 
        } 
    }
    return arr; 
}
// 改进1: 设置⼀标志性变量pos,⽤于记录每趟排序中最后⼀次进⾏交换的位置。
//由于pos位置之后的记录均已交换到位,故 在进⾏下⼀趟排序时只要扫描到pos位置即可。 
function bubbleSort2(arr) { 
    console.time('改进后冒泡排序耗时');
    var i = arr.length-1; //初始时,最后位置保持不变 
    while ( i> 0) { 
        var pos= 0; //每趟开始时,⽆记录交换 
        for (var j= 0; j< i; j++) {
            if (arr[j]> arr[j+1]) { 
                pos= j; //记录交换的 位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp; 
            } 
        }
        i= pos; //为下⼀趟排序作准备 
    } 
    console.timeEnd('改进后冒泡排序耗时'); 
    return arr; 
}
/* 改进2: 传统冒泡排序中每⼀趟排序操作只能找到⼀个最⼤值或最⼩值,我们考虑利⽤在每趟排序中进⾏正向和反向两遍 
冒泡的⽅法⼀次可以得到两个最终值(最⼤者和最⼩者) , 从⽽使排序趟数⼏乎减少了⼀半。  */
function bubbleSort3(arr3) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  console.time("2.改进后冒泡排序耗时");
  while (low < high) {
    for (j = low; j < high; ++j) {
      //正向冒泡,找到最⼤者
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    --high; //修改high值, 前移⼀位
    for (j = high; j > low; --j) {
      //反向冒泡,找到最⼩者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
    ++low; //修改low值,后移⼀位
  }
  console.timeEnd("2.改进后冒泡排序耗时");
  return arr3;
}


var bobbleS = function(arr){
    let len = arr.length
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length-j-1; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
            
        }
        
    }
    return arr
}

/* 
    扁平数组结构转Tree
    let arr = [
        {id: 1, name: '部门1', pid: 0},
        {id: 2, name: '部门2', pid: 1},
        {id: 3, name: '部门3', pid: 1},
        {id: 4, name: '部门4', pid: 3},
        {id: 5, name: '部门5', pid: 4},
    ]
    结果：
    [{
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }]

链接：https://juejin.cn/post/6983904373508145189

*/
// 方法一：递归  时间复杂度O(2^n)
    // 递归查找，获取children
const getChildren = (data,result,pid)=>{
    for(let item of data){
        if(item.pid === pid){
            const newItem = {...item, children:[]}
            result.push(newItem)
            getChildren(data,newItem.children, item.id)
        }
    }
}
const arrToTree = (data,pid)=>{
    const result=[]
    getChildren(data,result,pid)
    return result
}
arrToTree(arr,0)

// 方法二：把数据转成Map存储，遍历，借助对象的引用，从Map找对应数据存储
// 有两次循环，该实现的时间复杂度为O(2n)，需要一个Map把数据存储起来，空间复杂度O(n)
function arrayToTree(arr) {
  const result = [];
  const arrMap = {};
  // 转成map存储
  for(const item of arr){
    arrMap[item.id] = {...item, children:[]}
  }
  for (const item of arr) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = arrMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!arrMap[pid]) {
        arrMap[pid] = {
          children: [],
        };
      }
      arrMap[pid].children.push(treeItem);
    }
  }
  return result;
}

// 方法三：（最优性能）把数据转成Map存储，遍历，借助对象的引用，从Map找对应的数据存储。
// 不同点在遍历的时候即做Map存储，找对应关系
// 时间复杂度为O(n)，需要一个Map把数据存储起来，空间复杂度O(n)
function arrayToTree(arr){
    const result=[]
    const arrMap={}
    for(const item of arr){
        const id=item.id
        const pid=item.pid
        if(!arrMap[id]){
            arrMap[id]={
                children:[]
            }
        }

        arrMap[id]={
            ...item,
            children:arrMap[id]['children']
        }
        const treeItem=arrMap[id]
        if(pid===0){
            result.push(treeItem)
        }else{
            if(!arrMap[pid]){
                arrMap[pid]={
                    children:[]
                }
            }
            arrMap[pid].children.push(treeItem)
        }
    }
    return result
}