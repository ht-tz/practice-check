 const obj  = {
    name:'asas',
    age:18
 }

 const objectProcxy = new Proxy(obj,{
    get:function(target,key) {
        console.log(`监听到对象的${key}属性被访问了`, target)
        return target[key]
    },
    set:function(target,key,newValue) {
        console.log(`监听到对象的${key}属性被设置值了`, target)
        target[key] = newValue
    }
 })

 console.log(objectProcxy.name,objectProcxy.age)

 objectProcxy.name = 'aas'
 objectProcxy.age = 'da'


console.log(objectProcxy.name,objectProcxy.age)