// var rob = function (nums) {
//     if (nums.length == 0) return 0
//     if (nums.length == 1) return nums[0]
//     //dp[i] 考虑下标i以内的分房屋，最多到盗窃金额是dp[i
//     let len = nums.length
//     let dp = new Array(len).fill(0)
//     dp[0] = nums[0]
//     dp[1] = Math.max(dp[0], nums[1])
//
//     for (let i = 2; i < len; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
//     }
//
//     return dp[len - 1]
// }

// var rob2 = function (nums) {
//     if (nums.length == 0) return 0
//     if (nums.length == 1) return nums[0]
//     //dp[i] 考虑下标i以内的分房屋，最多到盗窃金额是dp[i
//
//     const robRange = (nums, start, end) => {
//         if (start === end) return start
//         let len = nums.length
//         let dp = new Array(len).fill(0)
//         dp[0] = nums[start]
//         dp[1] = Math.max(dp[0], nums[start + 1])
//         for (let i = 2; i < len; i++) {
//             dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[start + i])
//         }
//         return dp[end]
//     }
//     // 考虑头部
//     let res1 = robRange(nums, 0, len - 2)
//     let res2 = robRange(nums, 1, len - 1)
//     return Math.max(res1, res2)
// }
//
// var rob = function (root) {
//     // 后续遍历函数
//     const postOrder = node => {
//         // 递归终止条件
//         if (node == null) return [0, 0] //0 不偷当前节点，偷当前节点
//         const leftOrder = postOrder(node.left)
//         const rightOrder = postOrder(node.right)
//         //不偷当前节点， 左右子树节点都可以偷或者不偷取，考虑偷左右孩子 左边孩子有两个状态，偷最大值，不偷最大值
//         let doNotRob = Math.max(leftOrder[0], leftOrder[1]) + Math.max(rightOrder[0], rightOrder[1])
//         //偷当前节点， 左右子树节点必须不偷取
//         let doRob = leftOrder[0] + rightOrder[0] + node.val
//         return [doNotRob, doRob]
//     }
//     const res = postOrder(root)
//     // 返回最大值
//     return Math.max(res[0], res[1])
// }