Function.prototype.myApply = function (context) {
    context = context?Object(context):window;
    //获取参数，改变this的指向
    let args = [...arguments].slice(1);
    context.fn = this;
    //执行函数
    let result  =  context.fn(args);
    //删除中介属性
    delete context.fn;
    //返回执行结果
    return result;
}

function getArr(array) {
    return array;
}

console.log(getArr.apply(this, [12,345]))