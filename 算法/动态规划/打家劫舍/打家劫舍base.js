/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    //dp[i]: 考虑下标以下的房屋，最多可以偷窃的金额为dp[i] 
    // 决定dp[i]的因素就是偷与不偷
    // 如果不偷，那么dp[i] = dp[i-1]
    // 如果偷，那么dp[i] = dp[i-2] + nums[i]
    // 因为不能偷相邻的房屋，所以要取最大值
    //dp取最大值 dp[i] = Math.max(dp[i -2]+nums[i],dp[i -1])
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[nums.length - 1]

};

//滚动数组实现
function rob1(nums) {
    let len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    if (len == 2) return Math.max(nums[0], nums[1])

    let arr = new Array(3)
    arr[0] = nums[0]
    arr[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < len; i++) {
        arr[2] = Math.max(arr[0] + nums[i], arr[1])
        arr[0] = arr[1]
        arr[1] = arr[2]
    }
    return arr[2]
}

//优化
function rob1(nums) {
    let len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    if (len == 2) return Math.max(nums[0], nums[1])

    let arr = new Array(2)
    arr[0] = nums[0]
    arr[1] = Math.max(nums[0], nums[1])
    let res = 0
    for (let i = 2; i < len; i++) {
        res = Math.max(arr[0] + nums[i], arr[1])
        arr[0] = arr[1]
        arr[1] = res
    }
    return arr[1]
}