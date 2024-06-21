/**
 * @param {number[]} height
 * @return {number}
 */
var trap1 = function (height) {
    let len = height.length
    for (let i = 0; i < len; i++) {
        if (i === 0 || i === len - 1) continue
        let rh = height[i]
        let lh = height[i]

        for (let r = i + 1; r < len; r++) {
            rh = Math.max(height[r], rh)
        }

        for (let l = i - 1; l >= 0; l--) {
            lh = Math.max(height[l], lh)
        }

        let h = Math.min(rh, lh) - height[i]
        if (h > 0) sum += h;
    }
    return sum
};
/**
 * @param {number[]} height
 * @return {number} 双指针
 */
var trap2 = function (height) {

    let len = height.length
    if (len <= 2) return 0

    let maxLeft = new Array(len).fill(0)
    let maxRight = new Array(len).fill(0)

    maxLeft[0] = height[0]
    // 记录每格柱子左边柱子的最大高度
    for (let i = 1; i < len; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1])
    }
    maxRight[len - 1] = height[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1])
    }

    let sum = 0

    for (let i = 0; i < len; i++) {
        let h = Math.min(maxLeft[i], maxRight[i]) - height[i]
        if (h > 0) sum += h
    }

    return sum
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap3 = function (height) {

    let len = height.length
    let sum = 0
    if (len <= 2) return 0;

    let stack = []
    stack.push(0)

    for (let i = 1; i < len; i++) {
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (height[i] === height[stack[stack.length - 1]]) {
            // 可以不加
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length && height[i] > height[stack[stack.length - 1]]) {
                let mid = stack.pop()
                if (stack.length) {
                    let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]
                    let w = i - stack[stack.length - 1] - 1
                    sum += h * w
                }
            }
            stack.push(i)
        }
    }
    ;
    return sum
}


let arr = [4, 2, 0, 3, 2, 5]
let a1 = new Array(arr.length).fill(0)
for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i !== arr.length - 1) {
        a1[i] = Math.max(arr[i], arr[i - 1])

    }
}
console.log(a1);


var trap4 = function (height) {
    let len = height.length
    let stack = []
    if (len <= 2) return 0
    let sum = 0
    stack.push(0)
    for (let i = 1; i < len; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let mid = stack.pop()
            if (stack.length) {
                let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]
                let w = i - stack[stack.length - 1] - 1
                sum += h * w
            }
        }
        stack.push(i)
    }
    return sum
}