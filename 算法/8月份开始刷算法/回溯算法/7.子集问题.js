var subsets = function (nums) {
    let len = nums.length
    let path = []
    let res = []

    function backtracking(startIndex) {
        res.push([...path])
        if (startIndex >= len) return
        for (let i = startIndex; i < len; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)

    return res
}

//
// var subsets = function (nums) {
//     let res = [[]]
//     for (let i = 0; i < nums.length; i++) {
//         let len = res.length
//         for (let j = 0; j < len; j++) {
//             let cur = res[j].slice()
//             cur.push(nums[i])
//             res.push(cur)
//         }
//     }
//     return res
// }

console.log(subsets([1, 2, 3]))