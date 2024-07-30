// var permute = function (nums) {
//     let path = []
//     let len = nums.length
//     let res = []
//     let used = new Array(len).fill(false)
//     const backtracking = function (used) {
//         if (path.length === len) {
//             res.push([...path])
//             return
//         }
//
//         for (let i = 0; i < len; i++) {
//             // 同一个path里面不能亿欧重复的数据
//             if (used[i]) continue
//
//             path.push(nums[i])
//             used[i] = true
//             console.log(i)
//             backtracking(used)
//             path.pop()
//             used[i] = false
//         }
//     }
//     backtracking(used)
//     return res
// }
//    console.log(permute([1, 2, 3]))


function permuteUnique(nums) {
    let len = nums.length
    nums.sort((a, b) => a - b)
    let res = []
    let path = []
    let used = new Array(len).fill(false)

    const backtracking = function (used) {
        if (path.length === len) {
            res.push([...path])
            return
        }

        for (let i = 0; i < len; i++) {
            // used[i - 1] = false同一层使用过
            //used[i - 1] true 同一枝上使用过
            // 树枝去重
            // if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == true) {
            //     continue;
            // }
            // 树层去重效率更高
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            if (!used[i]) {
                path.push(nums[i])
                used[i] = true
                backtracking(used)
                path.pop()
                used[i] = false
            }
        }
    }
    backtracking(used)
    return res
}

console.log(permuteUnique([1, 1, 2]))