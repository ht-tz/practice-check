var findLengthOfLCIS = function (nums) {
    let len = nums.length;
    if (len < 2) return len
    let res =1
    let dp = new Array(len).fill(1);
     for (let i = 1; i < len; i++) {
          if(nums[i]>nums[i - 1]) {
              dp[i] = dp[i - 1] + 1
              res =Math.max(dp[i], res)
          }
     }
      return res
}
