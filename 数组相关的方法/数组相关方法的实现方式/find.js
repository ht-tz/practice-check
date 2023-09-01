Array.prototype.myFind = function (callback) {
    let that = this
    for (let i = 0; i < that.length; i++) {
        if (callback(that[i], i)) {
            return that[i]
        }
    }
}

var users = [
    { id: 1, name: '张三' },
    { id: 2, name: '张三' },
    { id: 3, name: '张三' },
    { id: 4, name: '张三' }
]

let ele = users.myFind(el => {
    return el.id === 3
})
console.log(ele);