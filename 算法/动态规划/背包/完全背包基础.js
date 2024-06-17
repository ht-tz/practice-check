// // 先遍历物品在遍历背包
//
// function completePack() {
//     let weight = [1, 3, 5]
//     let value = [15, 20, 30]
//     let bagWeight = 4
//
//     let dp = new Array(bagWeight + 1).fill(0)
//     for (let i = 0; i < weight.length; i++) {
//         for (let j = weight[i]; j <= bagWeight; j++) {
//             dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
//         }
//     }
//     console.log(dp)
// }
//

//先遍历物品在遍历背包
function completePack() {
    let weight = [1, 3, 5]
    let value = [15, 20, 30]
    let bagWeight = 4

    let dp = new Array(bagWeight + 1).fill(0)
    for (let j = 0; j <= bagWeight; j++) {
        for (let i = 0; i < weight.length; i++) {
            if (j >= weight[i]) {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
            }
        }
    }
    console.log(dp)
}

completePack()
