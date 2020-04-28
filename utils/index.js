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