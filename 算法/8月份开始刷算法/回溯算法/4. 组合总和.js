var combinationSum = function (candidates, target) {
    let res = []
    let path = []
    const backtracking = (path, startIndex, sum) => {
        if (sum > target) return
        if (sum === target) {
            res.push([...path])
            return
        }

        for (let i = startIndex; i < candidates.length; i++) {
            let num = candidates[i]
            if (sum + num > target) break
            path.push(num)
            sum += num
            backtracking(path, i, sum)
            sum -= num
            path.pop()
        }
    }
    backtracking(path, 0, 0)
    return res
}

console.log(combinationSum([2, 3, 6, 7], 7))