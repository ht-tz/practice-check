var maxSubArray = function (nums) {
  let res = -Infinity
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    res = Math.max(sum, res)
    if (sum < 0) sum = 0
  }
  return res
}

var maxSubArray = function (nums) {
  let res = -Infinity
  //dp[i] 表示以i为结尾的最大子序列和为dp[i]
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  res = dp[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    res = Math.max(dp[i], res)
  }
  return res
}
