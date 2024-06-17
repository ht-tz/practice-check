var permute = function (nums) {
    let len = nums.length
    let res = []
    let used = new Array(len).fill(false)

    const backtracking = (nums, used) => {
        if (path.length === len) {
            res.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            backtracking(nums, used)
            path.pop()
            used[i] = false
        }
    }
    backtracking(nums, used)

    return res
}

let num = [1, 2, 3]
permute(num)