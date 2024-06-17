Array.prototype.myMap = function (callback, thisArg) {
    let result = []
    let array = this
    // 检查 callback 是否是函数
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            result.push(callback.call(thisArg, array[i], i, array))
        }
    }
    return result
}


Array.prototype.MyforEach = function (callback, thisArg) {
    let result = []
    let array = this
    // 检查 callback 是否是函数
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i <array.length ; i++) {
        result.push(callback.call(thisArg, array[i],i,array))
    }
    return result
}


Array.prototype.myReduce = function (callback, initalValue, thisArg) {
    let res;
    let array = this
    // 检查 callback 是否是函数
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    res = initalValue ? initalValue : array[0]
    let startIndex = initalValue ? 0 :1
    for (let i = startIndex; i < array.length; i++) {
        res = callback.call(thisArg,res, array[i], i, thisArg)
    }
    return res
}

Array.isArray  = function (object) {
    return Object.prototype.toString.call(object) === '[object Array]'
}


Array.prototype.myFilter = function(callback, thisArgs) {
    let result = []
    let array = this
    // 检查 callback 是否是函数
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < array.length; i++) {
        if(callback.call(thisArgs, array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}

Array.prototype.myEvery = function (callback, thisArgs) {
    let array = this,
        flag = true,
        i = 0
    // for 也行
    while (i < array.length && flag) {
        flag = callback.call(thisArgs, array[i], i, array)
        i++
    }
    return flag
}

Array.prototype.mySome = function (callback, thisArgs) {
    let array = this,
        flag = false
    for (let j = 0; j < array.length; j++) {
        if (callback.call(thisArgs, array[j], i, array)) {
            flag = true
            break
        }
    }
    return flag
}

// 类数组（Array-like Object）是指具有以下特征的对象：
//
// 拥有数值索引（numeric indices）：即可以通过整数索引访问对象的元素，类似于数组。
// 拥有 length 属性：表示对象中元素的个数。
// 尽管类数组对象具有数值索引和 length 属性，但它们通常不具备数组对象的方法（例如 push、pop 等），也不继承自数组原型链。常见的类数组对象包括函数的 arguments 对象、DOM 元素列表（如通过 document.querySelectorAll 返回的 NodeList 对象）等。
//
// 由于类数组对象不具备数组对象的方法，因此如果需要对其进行数组操作，通常需要将其转换为真正的数组。这可以通过 Array.from() 方法或使用展开运算符（...）来实现。
//
// 例如，将函数的 arguments 对象转换为数组：

//类数组转数组的方法
// 1. 拓展运算符
    [...arrayLike]
Array.from(arrayLikey)
Array.prototype.slice.call(arrayLike)
Array.apply(null,arrayLike)
Array.prototype.concat.apply([],arrayLike)


let arr = [1,3,4]

let a = arr.myFilter(el=> el>1)
console.log(a);







let arr =  [1,34,4,5,6]

let data = arr.myReduce((acc,cur,index,array)=>{
    return acc + cur*cur
},1)
console.log(data);


let array = [
    {a: 1, b: 3},
    {a: 2, b: 4},
    {a: 3, b: 5}
]

let newArray = array.myMap(el => el.b)
console.log(newArray)