function test1(data,time) {
     return new Promise((resolve, reject)=>{
         resolve(1)
          setTimeout(()=>{
              console.log(data)
          },time)
     })
}

let t1 = new test1(1,1000)
let t2 = new test1(2,1000)

let t3 = new test1(3,1000)

 let arr = [t1,t2,t3]

let len = arr.length

for (let i = 0; i < len ; i++) {
    let cur = arr[i]
     cur.then(res=>{
         console.log(res)
     })
}
