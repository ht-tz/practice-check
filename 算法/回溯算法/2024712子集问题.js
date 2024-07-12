// var subsets = function (nums) {
//     let len = nums.length
//     let path = []
//     let res = []
//
//     const backtracking = function (start) {
//         res.push([...path])
//         if (start >= len) {
//             return
//         }
//
//         for (let i = start; i < len; i++) {
//             path.push(nums[i])
//             backtracking(i + 1)
//             path.pop()
//         }
//     }
//     backtracking(0)
//     return res
// }
// let nums = [1, 2, 3]
// console.log(subsets(nums))
var subsetsWithDup = function (nums) {
    let len = nums.length
    nums.sort((a, b) => a - b)
    let path = []
    let res = []
    let used = new Array(len).fill(false)
    const backtracking = (used, start) => {
        res.push([...path])
        if (start >= len) return


        for (let i = start; i < len; i++) {
            // 相等 且used[i - 1] false说明同一层上使用过了   true说明同一枝上使用过了
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            path.push(nums[i])
            used[i] = true
            backtracking(used, i + 1)
            path.pop()
            used[i] = false
        }
    }

    backtracking(used, 0)
    return res
}// var subsets = function (nums) {
//     let len = nums.length
//     let path = []
//     let res = []
//
//     const backtracking = function (start) {
//         res.push([...path])
//         if (start >= len) {
//             return
//         }
//
//         for (let i = start; i < len; i++) {
//             path.push(nums[i])
//             backtracking(i + 1)
//             path.pop()
//         }
//     }
//     backtracking(0)
//     return res
// }
// let nums = [1, 2, 3]
// console.log(subsets(nums))
var subsetsWithDup = function (nums) {
    let len = nums.length
    nums.sort((a, b) => a - b)
    let path = []
    let res = []
    let used = new Array(len).fill(false)
    const backtracking = (used, start) => {
        res.push([...path])
        if (start >= len) return


        for (let i = start; i < len; i++) {
            // 相等 且used[i - 1] false说明同一层上使用过了   true说明同一枝上使用过了
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            path.push(nums[i])
            used[i] = true
            backtracking(used, i + 1)
            path.pop()
            used[i] = false
        }
    }

    backtracking(used, 0)
    return res
}

let nums = [1, 2, 2]
console.log(subsetsWithDup(nums))

let nums = [1, 2, 2]
console.log(subsetsWithDup(nums))

// 非递增子序列
// 要求是递增子序列， 不能对序列进行排序
var findSubsequences = function (nums) {
    let res = []
    let path = []
    let len = nums.length
    const backtracking = (start) => {
        // 结果集中至少有两个
        if (path.length > 1) {
            res.push([...path])
            //因为要取出树上所有的节点
        }
        // 用set记录使用过的数据
        let set = new Set();
        for (let i = start; i < len; i++) {
            // 因为是递增子序列。 后一个数字要大于前一个数字，同一个节点用过的数， 使用过以后就不能再一次使用了
            // 同一层 看之前有没有用过， 用过就不用了
            if (nums[i] < path[path.length - 1] || set.has(nums[i])) continue
            // 记录同一层使用过的数据
            set.add(nums[i])
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
}
console.log(findSubsequences([4, 6, 7, 7]))