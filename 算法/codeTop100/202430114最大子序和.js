var maxSubArray = function (nums) {
    let sum = -Infinity
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += num[i]
        sum = Math.max(sum, count)
        if (count < 0) count = 0
    }
    return res
}