//滚动数组版本
function canPartition(nums) {
    if (!nums) return false
    let len = nums.length
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
    }
    // 总和为奇数不能平分，
    if (sum % 2 !== 0) return false
    let target = sum / 2

    // 背包的体积为sum / 2
    // 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
    // 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
    // 背包中每一个元素是不可重复放入。
    let dp = new Array(target + 1).fill(0)
    for (let i = 0; i < len; i++) {
        for (let j = target; j >= nums[i]; j--) {
            // 物品i的重量是nums[i],其价值也是nums[i]
            dp[j] = Math.max(dp[j], dp[j - nums[i] + nums[i]])
            //剪枝，每一次完成内部的for--loop检一下，dp[target] === target
            // 意思是p子集的和刚好可以凑成总和j
            if (dp[target] === target) return true
        }
    }
    return dp[target] === target
}


//滚动数组版本
function canPartition1(nums) {
    if (!nums) return false
    let len = nums.length
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
    }
    // 总和为奇数不能平分，
    if (sum % 2 !== 0) return false
    let target = Math.floor(sum / 2)

    // 背包的体积为sum / 2
    // 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
    // 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
    // 背包中每一个元素是不可重复放入。
    let dp = new Array(len).fill().map(() => new Array(target + 1).fill(0))
    // 小于等于背包的重量时初始化为背包的最大价值
    for (let j = nums[0]; j <= target; j++) {
        dp[0][j] = nums [0]
    }
    // 遍历物品
    for (let i = 1; i < len; i++) {
        //遍历背包
        for (let j = 0; j <= target; j++) {
            if (j < nums[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i])
            }
            if (dp[target] === target) return true
        }
    }
    return dp[len - 1][target] === target
}

let dp1 = new Array(4).fill().map(() => new Array(12).fill(0))
console.log(dp1)