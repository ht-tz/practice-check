const getType = data =>{
     //判断组件是不是基本数据类型，成立则将其类型返回
     if(typeof data !== 'object') return typeof data
     // 获取改数据的类型
     let type = Object.prototype.toString.call(data).slice(8,-1)
    return type.toLowerCase()
}


console.log(getType(Symbol.for(1)))   // symbol
console.log(getType(null))  // null
console.log(getType(undefined)) // undefined
console.log(getType([])) // array
console.log(getType({})) // object
console.log(getType(() => {})) // function
console.log(getType(Promise.resolve())) // promise 高频手写
console.log(getType(new Set())) // set
console.log(getType(new Map())); // map