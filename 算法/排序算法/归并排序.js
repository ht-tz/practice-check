// 我们将数组拆解成每一项只有一个元素（每个拆项又一个独特的颜色）
//  1. 将每一个元素拆分为大小为1的元素
// 2。 i= 左侧开始指数 到 右侧最后指数 的遍历（ 两端包括）
// 3. 左侧的首值 小于 右侧的首值
// 4. 拷贝右侧部分的值 
// 5. 否则， 拷贝左侧部分的值
// 将元素拷贝到原来的数组中
Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if (arr.length === 1) return arr
        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid, arr.length)
        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                if (orderLeft[0] <= orderRight[0]) {
                    res.push(orderLeft.shift())
                } else {
                    res.push(orderRight.shift())
                }
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }
        return res
    }
    const res = rec(this)
    res.forEach((n, i) => {
        this[i] = n
    })
}

let arr = [5, 4, 3, 2, 1]
arr.mergeSort()
console.log(arr)
