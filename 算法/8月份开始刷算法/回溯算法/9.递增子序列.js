var findSubsequences = function (nums) {
    let res = []
    let path = []
    let backtracking = function (start) {
        if (path.length > 1) {
            res.push([...path])
        }

        // 找的是递增子序列，所以不能排序，也就是不能使用子集2中的方法
        // 不排序自然也不能使用 nums[i] === nums[i - 1] 来进行去重了 ，所以需要使用set来进行去重
        let set = new Set()
        for (let i = start; i < nums.length; i++) {
            if (nums[i] < path[path.length - 1] || set.has(nums[i])) {
                continue
            }
            set.add(nums[i])
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return res
}
console.log(findSubsequences([4, 6, 7, 7]))