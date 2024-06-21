var trap = function (height) {
    if (height.length <= 2) return 0
    let len  = height.length
    let maxLeft = new Array(len).fill(0)
    let maxRight = new Array(len).fill(0)
    maxLeft[0] = height[0]
    for (let i = 1; i < len; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1])
    }
    maxRight[len - 1] = height[len - 1]

    for (let i = len - 2; i >0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i +  1])
    }
    let sum = 0
    for (let i = 0; i < len; i++) {
        let h = Math.min(maxLeft[i], maxRight[i]) - height[i]
        if (h > 0) sum += h
    }
    return sum
}

let max = [4,2,0,3,2,5]
console.log(trap(max))