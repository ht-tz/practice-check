const asyncAdd = (a,b, callback) =>{

    setTimeout(() =>{
         callback(null, a+b);
    },500)}

const promiseAdd = (a,b)=>new Promise((resolve,reject)=>{
    
    asyncAdd(a,b,(err,res)=>{
        if(err) {
            reject(err);
        } else {
            resolve(res);
        }
    })
})


// 串行处理
async function serialSum(...args) {
     return args.reduce((acc,cur)=> acc.then(res=>promiseAdd(res,cur)),Promise.resolve(0))
}

//并行处理

async function parallelSum(...args) {
    
    if(args.length === 1) return args[0]
    
    const list = []
    
    for(let i=0; i<args.length; i+=2) {
        list.push(promiseAdd(args[i],args[i+1] || 0))
    }

    const result = await Promise.all(list)
    return parallelSum(...result)
}


(async () => {
    console.log('Running...');
    const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res1)
    const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res2)
    console.log('Done');
  })()
  