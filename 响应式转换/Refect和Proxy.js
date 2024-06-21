 const obj = {
    age:2112,
    name:'dsdcds'
 }

 const reReflectProxy = new Proxy(obj,{
    get:function(target,key) {
        console.log('get-------');
        return  Reflect.get(target,key)
    },
    set:function (target,key,newValue,receiver) {
        console.log('set ------');
        Reflect.set(target,key,newValue)
    }
 })

 reReflectProxy.name = 'sasa'
 console.log(reReflectProxy.name)