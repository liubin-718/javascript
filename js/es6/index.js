/* 
*  手写Promise.all
  返回一个promise对象，
  成功时，返回一个结果数组（和接受数组的顺序保持一致）
  失败时，返回最先被reject失败状态的值
*/
Promise.all = function(iterators){
  return new Promise((resolve, reject) => {
    if (!iterators || iterators.length === 0) {
      resolve([])
    }else{
      let count = 0 //计数器，判断任务是否执行完
      let result = [] // 储存结果
      for(let i=0; i<iterators.length; i++ ){
        // 考虑到iterators可能是普通对象，则统一包装为promise对象
        Promise.resolve(iterators[i]).then(
          data => {
            result[i] = data; //按顺序保存对应的结果
            // 当所有任务都完成时，返回结果
            if (++ count == iterators.length) {
              resolve(result)
            }
          },
          err => {
            // 任何一个Promise对象执行失败，即，调用reject()
            reject(err)
            return
          }
        )
      }
    }
  })
}

/* 
* Promise.race([p1,p2,p3]) 里面那个结果获得的快，就返回那个结果
  不管结果本身是成功还是失败状态
*/
Promise.race = function(iterstors) {
  return new Promise((resolve, reject) => {
    for(const iter of iterators){
      Promise.resolve(iter)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
    }
  })
}

/* 
当你有多个彼此不依赖的异步任务成功完成时，或者你想知道每个promise的结果时，通常使用Promise.allSettled
Promise.all 更适合彼此依赖或者其中任何一个reject时立即结束
*/

Promise.allSettled