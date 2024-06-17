var permute = function (nums) {
    let res = []
    let len = nums.length
    let path = []
    let used = new Array(len).fill(false)
    backtrack(used)
    return res

    function backtrack(used) {
        //退出条件
        if (path.length === len) {
            console.log(path);
            res.push([...path])
            return
        }
        for (let i = 0; i < len; i++) {
            console.log(res)
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            backtrack(used)
            path.pop()
            used[i] = false
        }

    }

}

let num = [1, 2, 3]
permute(num)