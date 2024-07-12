/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [];
    let path = [];
    let len = candidates.length;
    candidates.sort((a, b) => a - b);
    backtracking(0, 0);
    return res;

    function backtracking(sum, startIndex) {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < len; i++) {
            const num = candidates[i]
            // 对同一层是使用过的数组跳过, 若是同一个树枝上的，首次进来一定是相等的
            if (i > startIndex && num === candidates[i - 1]) {
                //当前元素和前一个元素相等，
                // 结束本次循环，防止出现重复组合
                continue
            }
            //如果当前元素值大于目标值-总和的值
            //由于数组已排序，那么该元素之后的元素必定不满足条件
            //直接终止当前层的递归
            if (num > target - sum) break
            path.push(num)
            sum += num
            // i+1每一个组合只能使用一次
            backtracking(sum, i + 1)
            path.pop()
            sum -= num
        }
    }
};

// 使用used去除重复
var combinationSum21 = function (candidates, target) {
    const res = [];
    let path = [];
    let len = candidates.length;
    candidates.sort((a, b) => a - b);
    let used = new Array(len).fill(false)
    backtracking(0, 0, used);
    return res;

    function backtracking(sum, startIndex, used) {
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < len; i++) {
            const num = candidates[i]
            // num === candidates[i  -1] 并且used[i -1] = false说明：
            // 前一个树枝已经使用过了candidates[i - 1]->
            // 同一层已经使用过了candidates[i - 1] -> 就应该continue
            if (num > target - sum || (i > 0 && num === candidates[i - 1] && !used[i - 1])) {
                //当前元素和前一个元素相等，
                // 结束本次循环，防止出现重复组合
                continue
            }
            path.push(num)
            sum += num
            used[i] = true
            backtracking(sum, i + 1, used)
            sum -= num
            path.pop()
            used[i] = false
        }
    }

    return  res
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
