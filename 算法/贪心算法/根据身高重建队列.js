// 局部最优：优先按照身高的people的k来插入，  插入操作过后的people满足队列属性

function reconstructQueue(people) {
    //身高从大到小已经确下来了
     people.sort((a,b)=>{
          if(a[0]!==b[0]) {
              return  b[0] - a[0]
          } else {
              return a[1] - b[1]
          }
     })

    let queue = []
    // 此时前面的身高的一定比后面的身高大 按照k插入相应的位置，
    // k表示前面有0个生身高比自己大，插入到k的位置，前面此时有k个身高比当前高
    for (let i = 0; i <people.length ; i++) {
         queue.splice(people[i][1],0,people[i])
    }
    return queue
}