/* 
* ElementUI
* https://github.com/ElementUI/theme-preview/blob/master/src/app.vue#L250-L274 
**/
var getFile = function(url, isBlob = false){
  return new Promise((resolve, reject)=>{
    const client = new XMLHttpRequest()
    client.responseType = isBlob ? 'blob' : ''
    client.onreadystatechange = () =>{
      if(client.readyState !== 4){
        return
      }
      if (client.status === 200) {
        const urlArr = client.responseURL.split('/')
        resolve({
          data: client.response,
          url: urlArr[urlArr.length-1]
        })
      }else{
        reject(new Error(client.statusText))
      }
    }
    client.open('GET', url)
    client.send()
  })
}

