var largestSumAfterKNegations = function (nums, k) {
    let res = 0
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))
    for (let i = 0; i < nums.length; i++) {
        if (k > 0 && nums[i] < 0) {
            k--
            nums[i] *= -1

        }
    }
    if (k % 2 === 1) {
        nums[nums.length - 1] *= -1
    }
    res = nums.reduce((a, b) => a + b)
    return res
}