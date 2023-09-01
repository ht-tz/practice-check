const obj = {
    _name: "why",
    get name() {
        return this._name
    },
    set name(newvalue) {
        this._name = newvalue
    }
}
//addlister object operate


const objProxy =  new Proxy(obj,{
    get:function (target,key,receiver) {
        console.log('get方法被访问', key,receiver)
        //说明receiver是创建出来的代理对象

        console.log(objProxy === receiver);
        return Reflect.get(target,key);
    },
    set:function(target,key,newValue,receiver) {
        console.log('set方法被访问',key);
        Reflect.set(target,key,newVlaue,receiver)
    }
})

console.log(objProxy.name);