let permute = function (nums) {
    let path = []
    let len = nums.length
    let res = []
    nums.sort((a, b) => a - b)
    let used = new Array(len).fill(false)
    const backtracking = (used) => {
        //收集结果
        if (path.length == len) {
            res.push([...path])
            return
        }
        for (let i = 0; i < len; i++) {
            // used[i - 1] == true，说明同一树枝nums[i - 1]使用过  false 说明同一层上使用过
            if (i > 0 && used[i - 1] == false && nums[i] == nums[i - 1]) continue
            if (used[i] == false) {
                used[i] = true
                path.push(nums[i])
                backtracking(used)
                path.pop()
                used[i] = false
            }
        }
    }
    backtracking(used)
    return res
}
console.log(permute([1, 1, 3]))