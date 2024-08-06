function testWeightBagProblem(weight, value, size) {
    const len = weight.length
    let dp = new Array(len).fill().map(new Array(size + 1).fill(0))

    //初始化
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0]
    }

    // weight 数组的长度len 就是物品的个数
    for (let i = 1; i < len; i++) {
        for (let j = 0; j <= size; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
            }
        }
    }
    return dp[len - 1][size]
}


// 1 维数组 dp[j] 表示容量为j的背包可放的最大价值为dp[j]

function testWeightBagProblem1(weight, value, size) {
    let len = weight.length
    let dp = new Array(size + 1).fill(0)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= size; j++) {
            if (j < weight[i]) {
                dp[j] = dp[j - weight[i]]
            } else {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
            }
        }
    }
    return dp[size]
}