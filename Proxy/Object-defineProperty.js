
const obj = {
    name:'why',
    age:18
}


Object.keys(obj).forEach(key=>{

    let value  = obj[key];

    Object.defineProperty(obj,key,{
        get:function(){
            console.log(`监听到了obj对象的${key},属性别访问了`);
            return value;
        },
        set:function(newValue) {
            console.log(`监听到了对象的${key}属性被设置值${newValue}`)
        }
    })
})

obj.name = 'dsd'
obj.age = 30;