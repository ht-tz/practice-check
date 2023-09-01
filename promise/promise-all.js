function PromiseAll(array) {
    //结果数组
    let result = [];
    //添加标识 看Array里面的值是否都执行完了
    let index = 0
    //返回一个Promise实例
    return new Promise((resolve, reject) => {
        //将返回值添加到数组当中
        function addData(key, value) {
            result[key] = value;
            index++;
            //保证数组中的值都执行完毕了，在把值给resolve出去
            if (index === array.length) {
                resolve(result)
            }
        }

        for (let i = 0; i < array.length; i++) {
            let current = array[i];
            if (current instanceof Promise) {
                //Promise对象
                current.then(value => {
                    addData(i, value)
                }, reason => reject(reason))
            } else {
                //普通值
                addData(i, current)
            }
        }
    })
}


/************** test *****************/
let p1  = new Promise((resolve, reject) =>{
  resolve( 1)
})

let p2  = new Promise((resolve, reject) =>{
  resolve( '测试数据')
})

PromiseAll([1,2,3,4,'44334',p1,p2]).then(res=>{
    console.log(res)
})

//[ 1, 2, 3, 4, '44334', 1, '测试数据' ]
