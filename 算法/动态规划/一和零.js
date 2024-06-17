function findMaxForm(strs, m, n) {
    // strs里面的元素就是物品， 每一个物品都是一个！
    // 而m和n 相当于是一个背包
    // dp[i][j] 最多有i个0和j个1的strs的最大子集的大小为dp[i][j]
    // 初始化：物品的价值不会为负数，初始化为0，保证递归的时候后面的值不会被前面的值给覆盖
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
    let n0;
    let n1;
    for (let str of strs) {
        n0 = 0
        n1 = 0
        // strs字符串里面有in0个零和n1个1, str就相当于物品，每一个str都是一个物品
        // m 和n相当于背包， 两个纬度的背包
        for (let c of str) {
            if (c === "0") {
                n0++
            } else {
                n1++
            }
        }

        // 遍历背包的容量是从后向前的
        for (let i = m; i >= n0; i--) {
            for (let j = n; j >= n1; j--) {
                // m和n就是待装的物品
                // 01背包的递推公式  dp[i][j] = max(dp[j],dp[j -weight[i]) +value[i])
                // dp[i - n0][j  - n1] n0和n1 就相当于物品的wight[i] 字符串的个数本身相当于物品价值value[i]
                dp[i][j] = Math.max(dp[i][j], dp[i - n0][j - n1] + 1)
            }
        }
    }
    return dp[m][n]
}

let a = Array.from(new Array(6), () => new Array(5).fill(0))

