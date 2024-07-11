/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    let path = []
    let len = nums.length
    // 去重必须要排序
    nums.sort((a, b) => a - b)
    let used = new Array(len).fill(false)
    backtracking(0, used)

    return res

    function backtracking(startIndex, used) {
        res.push([...path])
        if (startIndex >= len) return

        for (let i = startIndex; i < len; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            path.push(nums[i])
            used[i] = true
            backtracking(i + 1, used)
            // 回溯
            path.pop()
            used[i] = false
        }
    }
};

let arr = [4, 4, 4, 1, 4]

// let arr = [1, 2, 2]

console.log(subsetsWithDup(arr))