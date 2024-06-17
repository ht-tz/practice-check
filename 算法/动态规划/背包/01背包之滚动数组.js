/**
 * 1.dp[j]表示：容量为j的背包，所背的物品最大价值可以是dp[j]
 * 2. dp[j] 通过dp[j - weight[i]-来的 表示容量为j - weight[i] 的最大价值，dp[j - weight[i]] + value[i]表示容量j - 物品i重量的背包 加上物品i的价值
 *
 * 此时dp有两个选择，一个是提取自己dp[j] 相当于dp[i-1][j] -》就是不放置物品i，
 *  一个是取 dp[j - weight[i]] + value[i], 即放物品i，指定取最大的
 *
 *  因此递归公式是dp[j] = Math.max(dp[j], dp[j - weight[i]] +value[i])
 *
 */
function testWeightBagProblem(weight, value, size) {
    let len = weight.length
    let dp = new Array(size + 1).fill(0)

    //遍历物品
    for (let i = 0; i < len; i++) {
        //遍历背包的容量
        for (let j = size; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    return dp[size]
}

function test() {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();