function testWeightBagProblem(weight, value, size) {
    let len = weight.length
    let dp = new Array(len).fill().map(() => new Array((size + 1).fill(0)))

    // 物体的重量小于等于的背包的重量初始化为物物品1的价值
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0]
    }

    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= size; j++) {
            //如果背包j的容量小于物品i的重量，那么就放不进去， 此时最大的价值依然和前面的相同
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1] [j]
            } else {
                //dp[i -1][j - weight[i]] j - weight[i]是背包容量不放置i时背包最大容量 + value[i】就是此时背包放置物品i的最大价值
                // 打包氮素是的成都市 氮素
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
            }
        }
    }
    return dp[len - 1][size]
}
