//监听函数对象
function foo() {
    
}

const fooProxy = new Proxy(foo,{
    apply: function(target,thisArgs,argArray) {
        console.log('对函数进行apply调用');
        return target.apply(thisArgs,argArray)
    },
    
    construct: function(target,argArray,newTarget) {
        console.log("对函数foo进行了new的调用")
        return new target(...argArray)
    }
})

fooProxy.apply({},['ags','sas'])


new fooProxy('sa','sasa')