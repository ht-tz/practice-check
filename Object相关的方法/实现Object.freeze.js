/**
 * Object.freeze冻结一个对象，让其不能再添加/删除属性，
 * 也不能修改该对象已有属性的可枚举性、
 * 可配置可写性，
 * 也不能修改已有属性的值和它的原型属性
 * ，最后返回一个和传入参数相同的对象
 */
 
const  isObject  = (value)=>{
    let type = typeof value;
    return (value !== null) && (type === 'object' || type === 'function')
}

{
    function myFrezz(obj) {
    // 判读是不是Object类类型，是的话就封闭对象，循环遍历对象，去掉原型链， 将writeable特性设置为false
    if (isObject(obj)) {
         Object.seal(obj);
         for (const key of obj) {
             if(obj.hasOwnProperty(key)) { 
                Object.defineProperty(obj,key,{
                    writable:false, //设置只读
                })
                //属性值为对象的话，就递归继续处理
                if(isObject(obj[key])) {
                    myFrezz(obj[key])
                }
             }
         }
    }
    return obj
 }
}

{
    // Object.freeze冻结一个对象，让其不能再添加/删除属性，也不能修改该对象已有属性的可枚举性、可配置可写性
// 也不能修改已有属性的值和它的原型属性，最后返回一个和传入参数相同的对象


function freeze(obj) {
    if (obj instanceof Object) {
        Object.seal(obj)
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                Object.defineProperty(obj,key,{
                    writable:false
                })
                if (obj[key] instanceof Object) {
                    freeze(obj[key])
                }
            }
        }
    }
}


const _objectFreeze = object => {
    // 补全代码
    if (typeof object !== 'object' || object === null) {
        throw new TypeError(`the ${object} is not a object`)
    }

    // Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
    const keys = Object.getOwnPropertyNames(object);

    // Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。
    const symbols = Object.getOwnPropertySymbols(object);

    [...keys, ...symbols].forEach(key => {
        // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
        Object.defineProperty(object, key, {
            // 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
            // configurable: false, // 如果下面使用的是Object.preventExtensions(object)而不是Object.seal()，则需要设置configurable: false

            // 当 writable 属性设置为 false 时，该属性被称为“不可写的”。它不能被重新赋值
            writable: false,
        })
    })

    // Object.seal()方法封闭一个对象，
    // 阻止添加新属性并将所有现有属性标记为不可配置。
    // 当前属性的值只要原来是可写的就可以改变。
    // 不会影响从原型链上继承的属性。但 __proto__ ( 已弃用 ) 属性的值也会不能修改。
    // Object.seal的效果相当于: 在Object.defineProperty时将configurable设置成false，同时对对象调用Object.preventExtensions。
    Object.seal(object)

    // Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
    // 该方法使得目标对象的 [[prototype]] 不可变；任何重新赋值 [[prototype]] 操作都会抛出 TypeError 。这种行为只针对内部的 [[prototype]] 属性，目标对象的其它属性将保持可变。
    // Object.preventExtensions(object)

    return object
}
}