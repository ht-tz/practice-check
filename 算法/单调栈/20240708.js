// 接雨水
var trap = function (height) {
    let len = height.length
    if (height.length === 0) {
        return 0
    }
    let res = 0
    for (let i = 1; i < len; i++) {
        if (i == 0 || i == len - 1) continue
        let maxLeft = 0
        let maxRight = 0
        //找到左边最高的柱子
        for (let j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j])
        }
        //找到最左边最高的柱子
        for (let k = i; k < len; k++) {
            maxRight = Math.max(maxRight, height[k])
        }
        res += Math.min(maxLeft, maxRight) - height[i]
    }
    return res
}

//双指针
var trap = function (height) {
    let len = height.length
    if (height.length === 0) return 0
    let maxLeft = new Array(len).fill(0)
    let maxRight = new Array(len).fill(0)

    maxLeft[0] = height[0]
    // 第一个 和 最后一个不用接
    for (let i = 1; i < len; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i])
    }
    // 找基准值
    maxRight[len - 1] = height[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1])
    }
    let res = 0
    for (let i = 0; i < len; i++) {
        res += Math.min(maxLeft[i], maxRight[i]) - height[i]
    }
    return res
}

var trap = function (height) {
    let len = height.length
    if (len <= 2) return 0
    let res = 0
    let stack = []
    stack.push(0)
    for (let i = 1; i < len; i++) {
        if (height[i] < height[stack.at(-1)]) {
            stack.push(i)
        } else if (height[i] === height[stack.at(-1)]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && height[i] > height[stack.at(-1)]) {
                let mid = stack.pop()

                if (stack.length) {
                    let ml = stack.at(-1)
                    let mr = i

                    let h = Math.min(height[ml], height[mr]) - height[mid]
                    let w = mr - ml - 1
                    res += h * w
                }
            }
            stack.push(i)
        }
    }
    return res
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
