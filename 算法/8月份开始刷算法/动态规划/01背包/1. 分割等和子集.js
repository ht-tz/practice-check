// 商品可以重复放就是完全背包， 物品只能被放入一次就是01背包
var canPartition = function (nums) {
    let sum = nums.reduce((pre, cur)=> pre+cur)
    if(sum % 2 !== 0) return false
    let target = sum / 2
    // dp[j] 表示容量为j的背包，所背的物品价值可以最大为dp[j]
     let dp = new Array(target+1).fill(0)
    for (let i = 0; i <nums.length ; i++) {
         for (let j = target; j >= nums[i] ; j--) {
            dp[j] = Math.max(dp[j], dp[j-nums[i]]+nums[i])
             if(dp[j] === target) return true
        }
    }
    return dp[target] === target
}