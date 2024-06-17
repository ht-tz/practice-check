/*
 * @Author: htz
 * @Date: 2023-12-16 22:59:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-09 23:19:58
 * @Description: 请填写简介
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = -Infinity
  let count = 0
  // 连续和为负数的时候 立即抛弃，从下个数开始， 为正数的话，加上下一个子一定是增大的
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    res = Math.max(count, res)
    if (count < 0) count = 0
  }
  return res
}

var maxSubArray = function (nums) {
  let len = nums.length
  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  let res = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    res = Math.max(res, dp[i])
  }
  return res
}
