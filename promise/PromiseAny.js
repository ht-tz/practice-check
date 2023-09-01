/**
 * 1. 返回一个Promise，一旦某个Promise执行成功，返回，全部执行失败才reject
 */
function PromiseAny(array) {
  if (!Array.isArray(array)) return;

  return new Promise((resolve, reject) => {
    //reject 记录
    index = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof Promise) {
        Promise.resolve(array[i])
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            index++;
            result.push(err);
            if (index === result.length) {
              reject(result);
            }
          });
      } else {
        resolve(array[i]);
      }
    }
  });
}

let p1 = Promise.reject('1');
let p2 = Promise.reject("1");
let p3 = Promise.reject("2");
let p4 = Promise.reject("2");

let array = [p1,p2,p3,p4];

Promise.any(array).then(res=>{
    console.log(res);
})