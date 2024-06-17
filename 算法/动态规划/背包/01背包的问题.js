/**
 * 初始化dp数组 默认呀不变为0
 * dp[i][j]表示从下标为0 - 【i- 1】物品里任取，放入容量为j的背包的背包，价值总最大是多少
 * 其实是模仿背包重量从0开始，j = 0的时候 dp[i][0] 无论取出哪些物品都是放不进入的， 也就是说价值总和一直都是0
 * 可选择的物也可以从0开始，也就是说没有物品可以选择，  即dp[0][j],这样背包的容量无论为多少，背包价值总和一定为0
 * @param weight 物品的重量
 * @param value 物品的价值
 * @param size 背包的容量
 */
function testWeightBagProblem(weight, value, size) {
    const len = weight.length
    let dp = new Array(len).fill().map(() => new Array(size + 1).fill(0))

    //初始化,  小于等于背包的重量的时候，dp[0][j]初始化为物品一最大的价值
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0]
    }

    // 填充dp数组
    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= size; j++) {
            /**
             *  当前背包容量没有当前物品i大的时候，是不放物品i的， 那么前一个i - 1物品能放下最大的价值就是当前情况下的最大价值
             */
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                /**
                 * 当前背包的容量可以放下物品i
                 * 那么此时分两种情况：
                 *    1、不放物品i
                 *    2、放物品i
                 * 比较这两种情况下，哪种背包中物品的最大价值最大
                 */
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
            }
        }
    }

    // 打印dp数组
    console.log(dp)
    return dp[len - 1][size]
}

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


let weight = [1, 3, 4]
let size = 4
let value = [15, 20, 30]

let res = testWeightBagProblem(weight, value, size)
console.log(res)