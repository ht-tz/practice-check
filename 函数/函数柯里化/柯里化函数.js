//只传递一部分参数，剩余的参数让返回的函数进行处理

function curry(func) {
  // 返回一个函数
  return function currieFn(...args) {
    //如果形参个数小于实参的个数，说明参数还没有传递完
    if (args.length < func.length) {
      //累计参数
      return function (...arg) {
        return currieFn(...args.concat([...arg]));
      };
    } else {
      //参数够了返回执行结果
      return func(...args);
    }
  };
}


const sum = (a, b, c) => a + b + c;

const csum = curry(sum);

console.log(csum(1)(2)(3));
