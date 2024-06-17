// var permute2 = function (nums) {
//     let res = []
//     let path = []
//     if (nums.length === 0) return res
//     //去重要对元素进行排序
//     nums.sort((a, b) => a - b)
//     let used = new Array(nums.length).fill(false)
//     const backtrack = () => {
//         if (path.length === nums.length) {
//             res.push([...path])
//             return
//         }
//         for (let i = 0; i < nums.length; i++) {
//             // used[i - 1] = true, 说明说明同一枝上使用过了,used[i - 1] = false,说明同一层上使用过过了, 回退之后就是false，玄幻
//             // false
//             if (used[i - 1] === false && nums[i] === nums[i - 1] && i > 0) {
//                 continue
//             }
//             if (used[i]) continue
//             path.push(nums[i])
//             used[i] = true
//             backtrack()
//             path.pop()
//             used[i] = false
//         }
//     }
//     backtrack()
//     return res
// }
//
// let nums = [1, 3, 2]
// console.log(permute2(nums))
//
// var partition = function (s) {
//     let len = s.length
//     let res = []
//     let path = []
//     const backtracking = (startIndex) => {
//         if (startIndex >= len) {
//             res.push([...path])
//             return
//         }
//         for (let i = startIndex; i < len; i++) {
//             if (!isPalindrome(s, startIndex, i)) continue
//             // 是回文， i+1 =  slice不包含最后一个
//             let str = s.slice(startIndex, i + 1)
//             path.push(str)
//             backtracking(i + 1)
//             path.pop()
//         }
//     }
//     backtracking(0)
//
//     return res
// }
//
// function isPalindrome(s, l, r) {
//     let i = l, j = r
//
//     while (i < j) {
//         if (s[i] !== s[j]) return false
//         i++
//         j--
//     }
//     return true
// }

//
// let str = "aab"
// console.log(partition(str))


