/**
 * 更多描述 实现一个 promise 高频手写.map，进行并发数控制，有以下测试用例

pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1));
 
pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1);
 
// 注意输出时间控制
pMap([1, 1, 1, 1, 1, 1, 1, 1], (x) => sleep(1000), { concurrency: 2 });
 */



function pMap(list, mapper, concurrency = Infinity) {
    // list为Iterator, 先转化为  Array
    list = Array.from(list);
    return new Promise((resolve, reject) => {
        let currentIndex = 0
        let result = []
        let resolveCount = 0
        let len = list.length

        //完成每一次的调用
        function next() {
            //记录当前执行到哪一个了
            const index = currentIndex;
            currentIndex++

            // 执行完完成的结果作为value, 值传给回调函数执行 
            Promise.resolve(list[index]).then(value => mapper(value, index)).then(value => {
                //记录执行结果
                result[index] = value
                //成功计数
                resolveCount++
                // 执行完毕的话就把结果resolve出去
                if (resolveCount === len) {    
                    resolve(result)
                }
                //没执行完毕继续执行
                if (currentIndex < len) {
                    next()
                }
            })
        }
        // next()
        for(let i = 0; i < concurrency && i<len; i++) {
             next()
        }
    })
}

const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds))


const now = Date.now()
console.log('Start')
pMap([1, 1, 1], x => sleep(x * 1000)).then(o => {
  console.log(o)
  console.log(Date.now() - now, 'seconds')
})

pMap([1, 2, 3], x => x * 3,2).then(o => console.log(o))