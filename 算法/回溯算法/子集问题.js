/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    let path = []
    let len = nums.length
    backtracking(0)
    return res

    function backtracking(startIndex) {
        res.push([...path])
        if (startIndex >= len) {
            return
        }
        for (let i = startIndex; i < len; i++) {
            let cur = nums[i]
            path.push(cur)
            backtracking(i + 1)
            path.pop()
        }
    }

};

let arr = [1, 2, 3]

let a = subsets(arr)
console.log(a)