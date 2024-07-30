//实现PromiseAllsettled
/**
 * 1.接收一组数组作为参数，参数数组的每一个成员都是一个Promise对象，
 * 并返回一个新的Promise对象。只有等到参数数组的所有Promise对象
 发生变更，（无论是fulfilled 还是rejected）,返回的Promise状态才会发生变更
 */

function ProimsieAllettled(array) {
  if (!Array.isArray(array)) return new Promise().resolve([]);

  let result = [];
  let index = 0;
  let len = array.length;
  return new Promise((resolve) => {
    for (let i = 0; i < len; i++) {
      Promise.resolve(array[i])
        .then(res=> {
            //返回执行成功的状态
          result[i] = { state: "fullfilled", value: res };
        })
        .catch(e => {
            //记录执行失败的结果
          result[i] = { state: "reject", value: e };
        })
        .finally(() => {
          //最后判断记录的执行结果的个数等于的index
          index++;
          if (result.length === index) {
            resolve(result);
          }
        });
    }
  });
}


 //测试一下allSettled
 let p1 = Promise.resolve(2);
 let p2 = Promise.resolve(3);
 let p3 = Promise.reject("执行失败");
 
 let arr = [p1,p2,p3]

 ProimsieAllettled(arr).then(res => {
     console.log(res);
 });
 