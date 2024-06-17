/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let len = stones.length
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += stones[i]
    }
    //向下取整数
    let target = Math.floor(sum / 2)
    //初始化
    let dp = new Array(target + 1).fill(0)

    //遍历物品
    for (let i = 0; i < len; i++) {
        //遍历背包，背包的重量要大于等于石头的重量
        for (let j = target; j >= stones[i]; j--) {
            //两种情况，要么放要么不放
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }
    return sum - dp[target] - dp[target]
};

// 二维数组好理解版本
var lastStoneWeightII1 = function (stones) {
    let sum = 0
    let len = stones.length
    for (let i = 0; i < len; i++) {
        sum += stones[i]
    }
    let target = Math.floor(sum / 2)
    let dp = new Array(len).fill().map(() => new Array(target + 1).fill(0))

    for (let j = stones[0]; j <= target; j++) {
        dp[0][j] = stones[0]
    }
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= target; j++)
            if (j < stones[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i])
            }
        console.log(dp[len - 1][target])

    }
    return sum - dp[len - 1][target] - dp[len - 1][target]
}
let arr = [2, 7, 4, 1, 8, 1]
let res = lastStoneWeightII(arr)
console.log(res)