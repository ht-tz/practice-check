function PromiseAny(array) {
    if (!Array.isArray(array)) return
    let index  = 0

    return new Promise((resolve, reject)=>{
        let res = []

        for (let i = 0; i <array.length ; i++) {
            let current  = array[i]
            if(current instanceof Promise){
                Promise.resolve(current).then(value =>{
                    resolve(value)
                }).catch(err=>{
                     index++
                     res.push(err)
                    if(index === array.length) {
                        reject(res)
                    }
                })
            } else {
                 resolve(current)
            }
        }
    })
}

// let p1 = Promise.reject('1');
// let p2 = Promise.reject("1");
// let p3 = Promise.reject("2");
// let p4 = Promise.reject("2");
//
// let array = [p1,p2,p3,p4];
//
// PromiseAny(array).then(res=>{
//     console.log(res);
// })

function PromiseRace(array)  {
      if (!Array.isArray(array)) return

     return new Promise((resolve, reject)=>{
         for ( let  i = 0; i < array; i++) {
             let current  = array[i]

             if (current instanceof Promise) {
                 current.then(resolve, reject)
             } else {
                 resolve(current)
             }
         }
     })
}