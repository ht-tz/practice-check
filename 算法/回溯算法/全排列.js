/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 全排列
var permute = function (nums) {
    let path = []
    let len = nums.length/**
     * @param {number[]} nums
     * @return {number[][]}
     */
// 全排列
    var permute = function (nums) {
            let path = []
            let len = nums.length
            let res = []
            let used = new Array(len).fill(false)

            backtracking(used)
            return res
            function backtracking(used) {
                if (path.length === len) {
                    res.push([...path])
                    return
                }
                for (let i = 0; i < len; i++) {
                    // path里面收集过的元素直接跳过
                    if (used[i]) continue
                    used[i] = true
                    path.push(nums[i])
                    backtracking(used)
                    path.pop()
                    used[i] = false
                }
            }
        };

    let ar = [1,2,3]
    console.log(permute(ar))
    let res = []
    let used = new Array(len).fill(false)

    backtracking(used)
    return res
    function backtracking(used) {
        if (path.length === len) {
            res.push([...path])
            return
        }
        for (let i = 0; i < len; i++) {
            // path里面收集过的元素直接跳过
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            backtracking(used)
            path.pop()
            used[i] = false
        }
    }
};

let ar = [1,2,3]
 console.log(permute(ar))