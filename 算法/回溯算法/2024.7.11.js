// // 组合问题
// function combine(n, k) {
//     let res = []
//     let path = []
//     const backtracking = (startIndex) => {
//         // 退出条件 path.length === k
//         if (path.length === k) {
//             res.push([...path])
//             return
//         }
//
//         // 已经选择则的元素path.length
//         // 还剩多少个元素 还需要 k - path.length
//         // 剩余的元素个数必须大于等于k - path.length => n - i >=  k - path.length
//         // 在数组中，我们至多从  i 到 n - (k - path.length) + 1 之间取值
//         // +1 是一个左闭的区间
//         for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
//             // 收集节点
//             path.push(i)
//             // 递归
//             backtracking(i + 1)
//             // 回溯
//             path.pop()
//             console.log('每次回溯返回的节点', path)
//         }
//     }
//
//     backtracking(1)
//     return res
// }
//
// console.log(combine(4, 3))
// 组合总和3
// /**
//  *  * 给定一个整数 n 和一个整数 k，返回所有不同的由 k 个数组成的组合，这些数从 1 到 n 中取，且每个组合中所有的数都是互不同的。
//  * @param n 为sum
//  * @param k 为num
//  * @returns {*[]}
//  */
// function combinationSum3(n, k) {
//     let res = []
//     let path = []
//     const backtracking = (sum, startIndex) => {
//         // 退出条件
//         if (sum > n) return
//
//         if (path.length === k) {
//             //数量够了
//             // 看下和是否相等
//             if (sum === n) {
//                 res.push([...path])
//                 return
//             }
//         }
//         // 单层循环逻辑分
//         for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
//            // 添加
//             path.push(i)
//             sum += i
//             backtracking(sum, i + 1)
//             // 回溯
//             sum -= i
//             path.pop()
//         }
//     }
//
//     // 看题目 是从1开始的
//     backtracking(0, 1)
//     return res
// }
//
// let k = 3, n = 9
// console.log(combinationSum3(n, k))

// // 电话号码的字母组合
// var letterCombinations = function (digits) {
//     if (digits.length === 0) return []
//     // 数字集合的长度就是path的长度
//     let size = digits.length
//     const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
//     if (!size) return
//     //取出字符串拆分即可
//     if (size === 1) return map[digits].split(',')
//
//     let res = []
//     let path = []
//     // 结果转换为数字
//     let darr = digits.split('').map(val => val - '0')
//     const backtracking = (startIndex) => {
//         // 退出条件
//         if (path.length === size) {
//             res.push([...path])
//             return
//         }
//         // 取字符 先取出drr中的数字  在拿数字取出字符串
//         let letters = map[darr[startIndex]]
//         // 遍历这个字符
//         for (let i = 0; i < letters.length; i++) {
//             // 收集节点
//             path.push(letters[i])
//             backtracking(startIndex + 1)
//             path.pop()
//         }
//     }
//     backtracking(0)
//     return res
// }
// console.log(letterCombinations('23'))

// 分割回文串
// var partition = function (s) {
//     let path = []
//     let res = []
//     const backtracking = (s, startIndex) => {
//         // 退出条件 切割完了才退出
//         // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
//         if (startIndex >= s.length) {
//             res.push([...path])
//             return
//         }
//         for (let i = startIndex; i < s.length; i++) {
//
//             if (isPalindrome(s, startIndex, i)) {
//                 path.push(s.slice(startIndex, i + 1))
//             } else {
//                 //不是就继续, 结束本次循环
//                 continue
//             }
//             backtracking(s, i + 1)
//             path.pop()
//         }
//     }
//     backtracking(s, 0)
//     return res
// }
//
// function isPalindrome(str,left,right) {
//     let l = left
//     let r = right
//     while (l < r) {
//         if (str[l] !== str[r]) return false
//         l++
//         r--
//     }
//     return true
// }
//
// console.log(partition('aab'))
//相邻相等去重
var combinationSum2 = function (candidates, target) {
    let res = []
    let path = []
    let len = candidates.length
    candidates.sort((a, b) => a - b)
    const backtracking = (sum, startIndex) => {
        if (target === sum) {
            res.push([...path])
            return
        }
        // used[i] 表示的是当前层 第一个数字否被使用了使用了true 没有使用就是false
        // 剪枝处理， for循环， 横向去重
        for (let i = startIndex; i < len; i++) {
            // 同一层上去重 candidates[i] === candidates[i - 1]， 同一枝上可以
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                //在同一层前面已经取出来过1了，所以不能再取了
                continue
            }
            // 没必要向下走了，向右走
            if (sum + candidates[i] > target) {
                break
            }
            path.push(candidates[i])
            sum += candidates[i]
            backtracking(sum, i + 1)
            sum -= candidates[i]
            path.pop()
        }
    }
    backtracking(0, 0)
    return res
}


// used[ 去重
var combinationSum2 = function (candidates, target) {
    let len = candidates.length
    let res = []
    let path = []
     candidates.sort((a,b)=> a - b)
    let used = new Array(len).fill(false)
    const backtracking = (sum, used, startIndex) => {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < len; i++) {
            let num = candidates[i]
            // used[i  -1]为true 说明同一枝上使用过
            //used[i  -1]false 同一层上使用过
            // 因为cur = pre 且为false, 回溯过才是false
            if ((i > 0 && candidates[i - 1] === num && !used[i - 1]) || sum + num > target) {
                // 同一层之前选过了
                continue
            }
            path.push(num)
            sum += num
            used[i] = true
            backtracking(sum, used, i+1)
            path.pop()
            sum -= num
            used[i] = false
        }
    }
    backtracking(0, used, 0)
    return res
}

let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
console.log(combinationSum2(candidates, target))
