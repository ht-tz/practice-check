/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {

    let res = []
    let path = []

    let len = nums.length

    let used = new Array(len).fill(false)
    backtracking(used)
    return res

    function backtracking(used) {
        if (path.length === len) {
            res.push([...path])
            return
        }
        for (let i = 0; i < len; i++) {
            // used[i - 1] == true，说明同⼀树⽀nums[i - 1]使⽤过
            // used[i - 1] == false，说明同⼀树层nums[i - 1]使⽤过
            // 如果同⼀树层nums[i - 1]使⽤过则直接跳过
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue
            if (!used[i]) {
                used[i] = true
                path.push(nums[i])
                backtracking(used)
                used[i] = false
                path.pop()
            }
        }
    }
};

let nums = [1, 1, 2]
let data = permuteUnique(nums)
console.log(data)