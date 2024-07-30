// 核心：在原型的基础上，增强对象，返回构造函数
function createAnother(original) {
    // 创建一个新的对象
    var clone = Object.create(original)
    clone.sayHi = function () {
        // 以某种方式来增强对象
        console.log('hi')
    }

    return clone
}
