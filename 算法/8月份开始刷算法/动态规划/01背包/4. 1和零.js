function findMaxForm(strs, m, n) {
    //dp[i][j] 表示最多有i个0，j个1strs 的最大子集的个数dp[i][j]
    let dp = new Array(m + 1).fill().map(new Array(n + 1).fill(0))
    let s1, s2
    for (const str of strs) {
        s1 = 0
        s2 = 0
        for (let s of str) {
            if (c === '0') {
                s1++
            } else {
                s2++
            }
        }

        // 每次统计完字符串之后开始进行计算
        // 每一个字符串是物品。其中0 和 1 的个数就是物品的质量
        //  s1, s2相当于是物品的重量 字符串本身的个数相当于物品的价值
        // s1< m, s2< n 其实永远放不满

        // 一共m 个0 容量扥背包
        for (let i = m; i >= s1; i--) {
            // 一共n 个1  容量的背包
            for (let j = 0; j >= s2; j--) {
                // dp[i - s1][j - s2] + 1  没加之前 背包的容量为 i - s1 j - s2  加了之后背包的容量为 i j
                dp[i][j] = Math.max(dp[i][j], dp[i - s1][j - s2] + 1)
            }
        }
    }

    return dp[m][n]
}
