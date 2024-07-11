var trap = function (height) {
    if (height.length <= 2) return 0
    let len = height.length
    let sum = 0
    let stack = []
    stack.push(0)
    for (let i = 1; i < len; i++) {
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (height[i] === height[stack[stack.length - 1]]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && height[i] > height[stack[stack.length - 1]]) {
                // 中间元素
                let index = stack.pop()
                let mid = height[index]
                if (stack.length) {
                    let left = stack[stack.length - 1]
                    let h = Math.min(height[left], height[i]) - mid

                    let w = i - left - 1
                    sum += w * h
                }
            }
            stack.push(i)
        }
    }
    return sum
}

var trap = function (height) {
    if (height.length <= 2) return 0
    let len = height.length
    let sum = 0
    let stack = []
    stack.push(0)
    for (let i = 1; i < len; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            // 中间元素
            let index = stack.pop()
            let mid = height[index]
            if (stack.length) {
                let left = stack[stack.length - 1]
                let h = Math.min(height[left], height[i]) - mid

                let w = i - left - 1
                sum += w * h
            }
        }
        stack.push(i)
    }
    return sum
}

let data = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
let res = trap(data)
console.log(res)
