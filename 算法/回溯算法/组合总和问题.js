/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//组合总和
var combinationSum = function (candidates, target) {
    let res = []
    let path = []
    // 升序排序
    candidates.sort((a, b) => a - b)
    backtracking(0, 0)
    return res

    function backtracking(sum, startIndex) {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            //  candidates[i] 大于 所需数据 sum - target return
            if (candidates[i] > target - sum) break
            // 收集路径
            path.push(candidates[i])
            // 求和
            sum += candidates[i]
            //递归
            backtracking(sum, i)
            //回溯
            sum -= candidates[i]
            path.pop()
        }
    }
};

let candidates = [2, 3, 6, 7]
let target = 7

let a = combinationSum(candidates, target)

console.log(a)