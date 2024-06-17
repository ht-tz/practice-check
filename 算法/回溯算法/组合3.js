/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    let path = []
    let result = []
    //n是目标的和
    const backtracking = (targetSum, k, sum, startIndex) => {
        //和大于目标和return
        if (sum > targetSum) return
        if (path.length === k) {
            //大于目标元素的就不符合要求了
            if (sum === targetSum) {
                //要求就放到结果集
                result.push([...path])
                return
            }
        }
        // 单层循环逻辑, 只允许1 - 9 也就是最大是9
        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            // 开始累加
            sum += i
            // 放入path
            path.push(i)
            // 开始递归  是 i + 1 不startIndex +1
            backtracking(targetSum, k, sum, i + 1)
            // 和 - i  path.pop() 
            sum -= i //回溯
            path.pop() //回溯
        }
    }

    backtracking(n, k, 0, 1)
    return result
};
let k = 3, n = 7
console.log(combinationSum3(k, n));