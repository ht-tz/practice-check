//PromiseAll 要做的事情
/**
 * 1.接收一个可遍历的对象
 * 2. 返回一个Promise实例
 * 3. 任何一个Promise 回调函数不合法就立即跑出错误
 */

const isIterable = (obj) =>
  obj !== null && typeof obj[Symbol.iterator] === "function";

function PromsieAll(array) {
  if (!Array.isArray(array)) return;

  return new Promise((resolve, reject) => {

  //用于计数
  let index = 0;
  //用于记录结果
  let results = [];
  //返回一个Promise 实例
    for (let i = 0; i < array.length; i++) {
      Promise.resolve(array[i])
        .then((res) => {
          index++;
          results[i] = res;
          if(index === results.length) {
              resolve(results);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
}




    //演示系统的Promise.all执行
    function p1() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("p1");
            }, 2000);
        });
    }

   let p99 = Promise.reject('dscndscdmscds')
  

    PromsieAll(["1", "2", "3", "4", "5", p99, "c"]).then(res => {
        console.log(res);
    });

    // Promise.all(["1", "2", "3", "4", "5", p1(), p2(), "c"]).then(res=>{
    //     console.log(res)
    // })