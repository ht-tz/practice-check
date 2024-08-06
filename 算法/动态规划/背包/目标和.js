// 目标和
// 动态规划
// 加法的总和left 减法对应的总和为sum - left
// left  - (sum - left) = target

// left = (sum+target)/2
// 此时问题就转化为，装满绒里那个为left的背包，有几种方法

/**
 *  1. 确定dp数组与下标的含义dp[j] 填满背包j这么大容量体积的背包，有几种方式
 *
 */
function findTargetSumWays(nums, target) {
    let sum = 0
    for (let i = 0; i < nums[i]; i++) {
        sum += nums[i]
    }
    //target过大，sum将无法满足
    if (Math.abs(target) > sum) return 0
    if ((target + sum) % 2 !== 0) return 0
    let bagSize = (target + sum) / 2
    if (bagSize < 0) bagSize = -bagSize

    let dp = new Array(bagSize + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums; i++) {
        for (let j = bagSize; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[bagSize]
}


function findTargetSumWays1(nums, target) {
    let sum = nums.reduce((a, b) => a + b)
    // 注意nums[i] >= 0的题目条件，意味着sum也是所有nums[i]的绝对值之和
    // 这里保证了sum + target一定是大于等于零的，也就是left大于等于零（毕竟我们定义left大于right）
    //
    if (sum < Math.abs(target) || (sum + target) % 2) return 0
    let left = (sum + target) / 2
    // dp[i][j]：遍历到数组第i个数时， left为j时的能装满背包的方法总数
    let dp = new Array(nums.length).fill().map(() => new Array(left + 1).fill(0))

    // 初始化最上行（dp[0][j])，当nums[0] == j时（注意nums[0]和j都一定是大于等于零的，因此不需要判断等于-j时的情况），有唯一一种取法可取到j，dp[0][j]此时等于1
    // 其他情况dp[0][j] = 0
    for (let j = 0; j <= left; j++) {
        if (nums[0] === j) {
            dp[0][j] = 1
        }
    }

}
