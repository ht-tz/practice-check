var  myconst = function _const(data,value) {
    window.data = data
     
    Object.defineProperty(window,data,{
        enumerable: false,
        configurable: false,
        get(value) {
            return value
        },
        set(newValue) {
             if(data !== value) {
                throw new Error('dsdd')
             } else {
                return value
             }
        }
    })
}


myconst('a',10)
console.log(a);
delete a
console.log(a)
for(let item of window){
    if(item === 'a') { //不可枚举，所以不执行
        console.log(item)
    }
}