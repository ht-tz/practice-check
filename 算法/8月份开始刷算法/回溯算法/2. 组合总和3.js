/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let path = []
    let result = []
    const backtracking = (n, k, sum, startIndex) => {
        if (sum > n) return
        if (path.length === k) {
            if (sum == n) {
                result.push([...path])
                return
            }
        }

        for (let i = startIndex; i < n; i++) {
            path.push(i)
            sum += i
            backtracking(n, k, sum, i + 1)
            sum -= i
            path.pop()
        }
    }
    backtracking(n, k, 0, 1)
    return result
};