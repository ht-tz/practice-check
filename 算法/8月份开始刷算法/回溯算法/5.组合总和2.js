var combinationSum2 = function (candidates, target) {
    let res = []
    let path = []
    candidates.sort((a, b) => a - b)
    let used = new Array(candidates.length).fill(false)

    function backtracking(path, used, sum, start) {
        if (sum > target) return
        if (sum === target) {
            res.push([...path])
            return
        }

        for (let i = start; i < candidates.length; i++) {
            // used[i - 1] == true 同一枝上用过 false 的话同一层（回溯就是false） 用过
            if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) continue
            let num = candidates[i]
            path.push(num)
            sum += num
            used[i] = true
            backtracking(path, used, sum, i+1)
            path.pop()
            sum -= num
            used[i] = false

        }
    }

    backtracking(path, used, 0,0)
    return res;
}
let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
console.log(combinationSum2(candidates, target))